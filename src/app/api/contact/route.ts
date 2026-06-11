import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const url = process.env.FORMSPREE_URL
  if (!url) {
    return NextResponse.json({ error: 'Form service not configured' }, { status: 500 })
  }

  const contentType = req.headers.get('content-type') ?? ''
  const isJson = contentType.includes('application/json')

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ...(isJson ? { 'Content-Type': 'application/json' } : {}),
    },
    body: isJson ? JSON.stringify(await req.json()) : await req.formData(),
  })

  const data = await res.json().catch(() => ({}))
  return NextResponse.json(data, { status: res.status })
}
