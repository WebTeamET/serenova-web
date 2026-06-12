/* eslint-disable @typescript-eslint/no-explicit-any */

export interface NavItemData {
  id: string
  label: string
  slug: string
  isExternal: boolean
}

export function mapNavItem(entry: any): NavItemData {
  return {
    id: entry.sys.id,
    label: entry.fields.label ?? '',
    slug: entry.fields.slug ?? '/',
    isExternal: entry.fields.isExternal ?? false,
  }
}
