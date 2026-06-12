/* eslint-disable @typescript-eslint/no-explicit-any */
import { unstable_cache } from 'next/cache'
import { getClient } from './client'
import { CONTENT_TYPE } from './queries'
import { type NavItemData, mapNavItem } from './shared'
import { LAYOUT_REVALIDATE_SECONDS } from '@/config/app'

export type { NavItemData } from './shared'

export interface SiteHeaderData {
  logoLight: string
  logoDark: string
  logoAlt: string
  logoUrl: string
  navLinks: NavItemData[]
  ctaLabel: string
  ctaUrl: string
  ctaOpenNewTab: boolean
}

const _fetchSiteHeader = unstable_cache(
  async (preview: boolean): Promise<SiteHeaderData | null> => {
    const client = getClient(preview)

    const entries = await client.getEntries({
      content_type: CONTENT_TYPE.SITE_HEADER,
      include: 2,
      limit: 1,
    })

    const entry: any = entries.items[0]
    if (!entry) return null

    const rawNavLinks: any[] = entry.fields.navLinks ?? []

    return {
      logoLight: entry.fields.logoLight?.fields?.file?.url
        ? `https:${entry.fields.logoLight.fields.file.url}`
        : '',
      logoDark: entry.fields.logoDark?.fields?.file?.url
        ? `https:${entry.fields.logoDark.fields.file.url}`
        : '',
      logoAlt: entry.fields.logoAlt ?? 'Serenova',
      logoUrl: entry.fields.logoUrl ?? '/',
      navLinks: rawNavLinks.map(mapNavItem),
      ctaLabel: entry.fields.ctaLabel ?? 'BOOK NOW',
      ctaUrl: entry.fields.ctaUrl ?? '#',
      ctaOpenNewTab: entry.fields.ctaOpenNewTab ?? false,
    }
  },
  ['site-header'],
  { revalidate: LAYOUT_REVALIDATE_SECONDS }
)

export function getSiteHeader(preview = false) {
  return _fetchSiteHeader(preview)
}
