import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeOfferSectionFields {
  eyebrow: EntryFieldTypes.Symbol
  title?: EntryFieldTypes.RichText
  description?: EntryFieldTypes.Text
  image1: EntryFieldTypes.AssetLink
  image2?: EntryFieldTypes.AssetLink
  buttonLabel?: EntryFieldTypes.Symbol
  buttonUrl?: EntryFieldTypes.Symbol
}

export type TypeOfferSectionSkeleton = EntrySkeletonType<TypeOfferSectionFields, 'offerSection'>
export type TypeOfferSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeOfferSectionSkeleton, Modifiers, Locales>
