import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPageBySlug, getAllPageSlugs } from '@/contentful/page.service'
import { PageRenderer } from '@/page-builder/PageRenderer'
import { buildMetadata } from '@/utils/metadata'

export const revalidate = 90

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs()
  return slugs
    .filter((s) => s !== '/home' && s !== '/')
    .map((s) => ({ slug: s.replace(/^\//, '') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(`/${slug}`)
  if (!page) return {}
  return buildMetadata(page.seo)
}

export default async function SlugPage({ params }: Props) {
  const { isEnabled: isPreview } = await draftMode()
  const { slug } = await params
  const page = await getPageBySlug(`/${slug}`, isPreview)

  if (!page) notFound()

  return (
    <main id="main-content">
      <PageRenderer sections={page.sections} />
    </main>
  )
}
