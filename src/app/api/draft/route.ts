import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPageBySlug } from '@/contentful/page.service'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return new Response('Invalid token', { status: 401 })
  }

  const page = await getPageBySlug(slug, true)

  if (!page) {
    return new Response('Invalid slug', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(page.slug === '/home' ? '/' : page.slug)
}
