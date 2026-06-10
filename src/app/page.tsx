import { getPageBySlug } from '@/contentful/page.service'
import { PageRenderer } from '@/page-builder/PageRenderer'

export default async function Home() {
  const page = await getPageBySlug('/home')

  if (!page) return null

  return (
    <main>
      <PageRenderer sections={page.sections} />
    </main>
  )
}
