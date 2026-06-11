import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeServiceCardFields {
  icon: EntryFieldTypes.AssetLink
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  hoverCtaText?: EntryFieldTypes.Symbol
  ctaUrl?: EntryFieldTypes.Symbol
}

export type TypeServiceCardSkeleton = EntrySkeletonType<TypeServiceCardFields, 'serviceCard'>
export type TypeServiceCard<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeServiceCardSkeleton, Modifiers, Locales>
