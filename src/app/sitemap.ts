import type { MetadataRoute } from 'next'
import { getAllPageSlugs } from '@/contentful/page.service'
import { appConfig } from '@/config/app'

export const revalidate = 90

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPageSlugs()

  return slugs.map((slug) => {
    const isHome = slug === '/home' || slug === '/'
    return {
      url: isHome ? appConfig.url : `${appConfig.url}${slug}`,
      lastModified: new Date(),
      changeFrequency: isHome ? 'daily' : ('weekly' as const),
      priority: isHome ? 1.0 : 0.8,
    }
  })
}
