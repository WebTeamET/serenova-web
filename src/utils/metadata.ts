import type { Metadata } from 'next'
import type { SEO } from '@/types/seo'
import { appConfig } from '@/config/app'

export function buildMetadata(seo: SEO, fallback?: Partial<SEO>): Metadata {
  const title = seo.title || fallback?.title || appConfig.name
  const description = seo.description || fallback?.description || ''
  const image = seo.image ?? fallback?.image

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: appConfig.name,
      ...(image && { images: [{ url: image.url, alt: image.alt }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image && { images: [image.url] }),
    },
    ...(seo.noIndex && { robots: { index: false, follow: false } }),
  }
}
