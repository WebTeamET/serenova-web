import { notFound } from 'next/navigation'
import { getPageBySlug, getAllPageSlugs } from '@/contentful/page.service'
import { PageRenderer } from '@/page-builder/PageRenderer'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs()
  return slugs
    .filter((s) => s !== '/home' && s !== '/')
    .map((s) => ({ slug: s.replace(/^\//, '') }))
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params
  const page = await getPageBySlug(`/${slug}`)

  if (!page) notFound()

  return (
    <main>
      <PageRenderer sections={page.sections} />
    </main>
  )
}
