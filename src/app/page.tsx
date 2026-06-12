import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getPageBySlug } from '@/contentful/page.service'
import { PageRenderer } from '@/page-builder/PageRenderer'
import { buildMetadata } from '@/utils/metadata'

export const revalidate = 90

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('/home')
  if (!page) return {}
  return buildMetadata(page.seo)
}

export default async function Home() {
  const { isEnabled: isPreview } = await draftMode()
  const page = await getPageBySlug('/home', isPreview)

  if (!page) return null

  return (
    <main id="main-content">
      <PageRenderer sections={page.sections} />
    </main>
  )
}
