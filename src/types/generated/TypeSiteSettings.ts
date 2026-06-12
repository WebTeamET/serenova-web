import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeNavItemSkeleton as TypeNavItemsSkeleton } from './TypeNavItem'

export interface TypeSiteSettingsFields {
  siteName: EntryFieldTypes.Symbol
  logo: EntryFieldTypes.AssetLink
  favicon?: EntryFieldTypes.AssetLink
  primaryNav: EntryFieldTypes.EntryLink<TypeNavItemsSkeleton>
  bookingButtonLabel: EntryFieldTypes.Symbol
  bookingButtonUrl: EntryFieldTypes.Symbol
  footerText?: EntryFieldTypes.Symbol
  socialLinks?: EntryFieldTypes.Symbol
}

export type TypeSiteSettingsSkeleton = EntrySkeletonType<TypeSiteSettingsFields, 'siteSettings'>
export type TypeSiteSettings<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSiteSettingsSkeleton, Modifiers, Locales>
