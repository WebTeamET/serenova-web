/* eslint-disable @typescript-eslint/no-explicit-any */
import { getClient } from './client'
import { CONTENT_TYPE } from './queries'
import { mapSection } from './mappers'
import type { Page } from '@/types/page'

type AnyEntry = any

export async function getPageBySlug(slug: string, preview = false): Promise<Page | null> {
  const client = getClient(preview)

  const entries = await client.getEntries({
    content_type: CONTENT_TYPE.PAGE,
    'fields.slug': slug,
    include: 10,
    limit: 1,
  })

  const entry: AnyEntry = entries.items[0]
  if (!entry) return null

  const rawSections: AnyEntry[] = entry.fields.sections ?? []

  const ogImageUrl: string | undefined = entry.fields.ogImage?.fields?.file?.url
  return {
    id: entry.sys.id,
    title: entry.fields.title as string,
    slug: entry.fields.slug as string,
    seo: {
      title: (entry.fields.seoTitle as string) ?? '',
      description: (entry.fields.seoDescription as string) ?? '',
      image: ogImageUrl ? { url: `https:${ogImageUrl}`, alt: '' } : undefined,
    },
    sections: rawSections.map(mapSection).filter((s): s is NonNullable<typeof s> => s !== null),
  }
}

export async function getAllPageSlugs(preview = false): Promise<string[]> {
  const client = getClient(preview)
  const entries = await client.getEntries({
    content_type: CONTENT_TYPE.PAGE,
    select: ['fields.slug'],
  })
  return entries.items.map((e: any) => e.fields.slug as string)
}
