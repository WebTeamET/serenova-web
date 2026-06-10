import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeWhatWeDoSectionFields {
  eyebrow: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  image1: EntryFieldTypes.AssetLink
  image2: EntryFieldTypes.AssetLink
  wheelImage?: EntryFieldTypes.AssetLink
  wheelImageLink?: EntryFieldTypes.Symbol
  buttonLabel?: EntryFieldTypes.Symbol
  buttonUrl?: EntryFieldTypes.Symbol
  points?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
}

export type TypeWhatWeDoSectionSkeleton = EntrySkeletonType<
  TypeWhatWeDoSectionFields,
  'whatWeDoSection'
>
export type TypeWhatWeDoSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeWhatWeDoSectionSkeleton, Modifiers, Locales>
