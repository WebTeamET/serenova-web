import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeNavItemSkeleton } from './TypeNavItem'

export interface TypeSiteHeaderFields {
  internalName: EntryFieldTypes.Symbol
  logoLight: EntryFieldTypes.AssetLink
  logoDark: EntryFieldTypes.AssetLink
  logoAlt: EntryFieldTypes.Symbol
  logoUrl?: EntryFieldTypes.Symbol
  navLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavItemSkeleton>>
  ctaLabel: EntryFieldTypes.Symbol
  ctaUrl: EntryFieldTypes.Symbol
  ctaOpenNewTab?: EntryFieldTypes.Boolean
  isTransparentOnHero?: EntryFieldTypes.Boolean
}

export type TypeSiteHeaderSkeleton = EntrySkeletonType<TypeSiteHeaderFields, 'siteHeader'>
export type TypeSiteHeader<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSiteHeaderSkeleton, Modifiers, Locales>
