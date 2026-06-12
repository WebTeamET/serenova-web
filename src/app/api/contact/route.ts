import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/utils/rateLimit'

const MAX_BODY_BYTES = 10_000

const bodySchema = z.record(z.string(), z.string().max(2000))

function getClientIp(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  const { allowed, remaining } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait before submitting again.' },
      { status: 429, headers: { 'Retry-After': '60' } }
    )
  }

  const contentLength = Number(req.headers.get('content-length') ?? 0)
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
  }

  const url = process.env.FORMSPREE_URL
  if (!url) {
    return NextResponse.json({ error: 'Form service not configured' }, { status: 500 })
  }

  const contentType = req.headers.get('content-type') ?? ''
  const isJson = contentType.includes('application/json')

  let fields: Record<string, string>
  let forwardBody: string | FormData

  if (isJson) {
    const raw = await req.json().catch(() => null)
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }
    const result = bodySchema.safeParse(raw)
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid fields' }, { status: 400 })
    }
    fields = result.data
    forwardBody = JSON.stringify(fields)
  } else {
    const formData = await req.formData().catch(() => null)
    if (!formData) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    const raw = Object.fromEntries(
      [...formData.entries()].flatMap(([k, v]) => (typeof v === 'string' ? [[k, v]] : []))
    )
    const result = bodySchema.safeParse(raw)
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid fields' }, { status: 400 })
    }
    fields = result.data
    // Rebuild clean FormData from validated fields only (strips any file uploads)
    const cleaned = new FormData()
    for (const [k, v] of Object.entries(fields)) cleaned.append(k, v)
    forwardBody = cleaned
  }

  // 5 — Email field must be a valid address if provided
  if (fields.email !== undefined) {
    const emailResult = z.string().email().safeParse(fields.email)
    if (!emailResult.success) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }
  }

  // 6 — Forward sanitised body to Formspree
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ...(isJson ? { 'Content-Type': 'application/json' } : {}),
    },
    body: forwardBody,
  })

  const data = await res.json().catch(() => ({}))
  return NextResponse.json(data, {
    status: res.status,
    headers: { 'X-RateLimit-Remaining': String(remaining) },
  })
}
