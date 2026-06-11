import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeNavItemSkeleton } from './TypeNavItem'

export interface TypeSiteFooterFields {
  internalName: EntryFieldTypes.Symbol
  marqueeText: EntryFieldTypes.Symbol
  newsletterIcon?: EntryFieldTypes.AssetLink
  newsletterHeading: EntryFieldTypes.Symbol
  newsletterInputPlaceholder?: EntryFieldTypes.Symbol
  newsletterButtonLabel: EntryFieldTypes.Symbol
  privacyPolicyText?: EntryFieldTypes.Symbol
  privacyPolicyLabel?: EntryFieldTypes.Symbol
  privacyPolicyUrl?: EntryFieldTypes.Symbol
  copyrightText: EntryFieldTypes.Symbol
  footerNavLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavItemSkeleton>>
  sociaMedialLinks: EntryFieldTypes.Object
}

export type TypeSiteFooterSkeleton = EntrySkeletonType<TypeSiteFooterFields, 'siteFooter'>
export type TypeSiteFooter<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSiteFooterSkeleton, Modifiers, Locales>
