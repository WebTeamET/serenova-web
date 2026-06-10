/* eslint-disable @typescript-eslint/no-explicit-any */
import { getClient } from './client'
import { CONTENT_TYPE } from './queries'

export interface NavItemData {
  id: string
  label: string
  slug: string
  isExternal: boolean
}

export interface SocialLinkData {
  platform: string
  accessibleLabel: string
  url: string
}

export interface SiteFooterData {
  marqueeText: string
  marqueeSeparator: string
  newsletterIcon: string | null
  newsletterHeading: string
  newsletterInputPlaceholder: string
  newsletterButtonLabel: string
  privacyPolicyText: string
  privacyPolicyLabel: string
  privacyPolicyUrl: string
  copyrightText: string
  footerNavLinks: NavItemData[]
  socialLinks: SocialLinkData[]
}

function mapNavItem(entry: any): NavItemData {
  return {
    id: entry.sys.id,
    label: entry.fields.label ?? '',
    slug: entry.fields.slug ?? '/',
    isExternal: entry.fields.isExternal ?? false,
  }
}

export async function getSiteFooter(preview = false): Promise<SiteFooterData | null> {
  const client = getClient(preview)

  const entries = await client.getEntries({
    content_type: CONTENT_TYPE.SITE_FOOTER,
    include: 2,
    limit: 1,
  })

  const entry: any = entries.items[0]
  if (!entry) return null

  const rawNavLinks: any[] = entry.fields.footerNavLinks ?? []
  const rawSocialLinks: SocialLinkData[] = entry.fields.sociaMedialLinks ?? []

  const newsletterIconUrl = entry.fields.newsletterIcon?.fields?.file?.url
    ? `https:${entry.fields.newsletterIcon.fields.file.url}`
    : null

  return {
    marqueeText: entry.fields.marqueeText ?? '',
    marqueeSeparator: entry.fields.marqueeSeparator ?? ' • ',
    newsletterIcon: newsletterIconUrl,
    newsletterHeading: entry.fields.newsletterHeading ?? '',
    newsletterInputPlaceholder:
      entry.fields.newsletterInputPlaceholder ?? 'Enter Your Email Address',
    newsletterButtonLabel: entry.fields.newsletterButtonLabel ?? 'Subscribe',
    privacyPolicyText: entry.fields.privacyPolicyText ?? '',
    privacyPolicyLabel: entry.fields.privacyPolicyLabel ?? '',
    privacyPolicyUrl: entry.fields.privacyPolicyUrl ?? '/',
    copyrightText: entry.fields.copyrightText ?? '',
    footerNavLinks: rawNavLinks.map(mapNavItem),
    socialLinks: rawSocialLinks,
  }
}
