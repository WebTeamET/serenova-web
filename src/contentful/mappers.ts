import type { Asset, BaseEntry } from 'contentful'
import type { ContentfulImage, ContentfulButton } from '@/types/contentful'
import type { PageSection } from '@/types/section'

type AnyEntry = BaseEntry & {
  fields: Record<string, unknown>
  sys: BaseEntry['sys'] & { contentType: { sys: { id: string } } }
}

export function mapImage(asset: Asset | undefined): ContentfulImage | null {
  if (!asset?.fields?.file) return null
  const file = asset.fields.file as {
    url: string
    details?: { image?: { width: number; height: number } }
  }
  return {
    url: file.url.startsWith('//') ? `https:${file.url}` : file.url,
    alt: (asset.fields.description as string) || (asset.fields.title as string) || '',
    width: file.details?.image?.width ?? 0,
    height: file.details?.image?.height ?? 0,
  }
}

export function mapButton(entry: AnyEntry | undefined): ContentfulButton | null {
  if (!entry?.fields) return null
  return {
    label: entry.fields.label as string,
    href: entry.fields.href as string,
    variant: (entry.fields.variant as string) ?? 'primary',
  }
}

export function mapSection(entry: AnyEntry): PageSection | null {
  if (!entry?.sys?.contentType?.sys?.id) {
    if (process.env.NODE_ENV === 'development') {
      // Unresolved link — entry is either draft or not linked to this page.
      // Fix: publish the entry in Contentful AND re-publish the page after linking.
      console.warn(
        `[mapSection] Unresolved entry skipped: ${entry?.sys?.id ?? 'unknown id'}. ` +
          `Publish the entry and re-publish the page in Contentful.`
      )
    }
    return null
  }
  return {
    id: entry.sys.id,
    type: entry.sys.contentType.sys.id,
    fields: entry.fields,
  }
}
