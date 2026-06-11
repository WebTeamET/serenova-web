import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeDestinationSectionFields {
  eyebrow?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.RichText
  description?: EntryFieldTypes.Text
  buttonLabel?: EntryFieldTypes.Symbol
  buttonUrl?: EntryFieldTypes.Symbol
  image1?: EntryFieldTypes.AssetLink
  image2?: EntryFieldTypes.AssetLink
  eyebrow2?: EntryFieldTypes.Symbol
  title2?: EntryFieldTypes.Symbol
  description2?: EntryFieldTypes.Text
  image3?: EntryFieldTypes.AssetLink
  stats?: EntryFieldTypes.Object
  buttonUrl2?: EntryFieldTypes.Symbol
}

export type TypeDestinationSectionSkeleton = EntrySkeletonType<
  TypeDestinationSectionFields,
  'destinationSection'
>
export type TypeDestinationSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeDestinationSectionSkeleton, Modifiers, Locales>
