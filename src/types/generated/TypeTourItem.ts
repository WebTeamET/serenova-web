import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeTourItemFields {
  image: EntryFieldTypes.AssetLink
  title: EntryFieldTypes.Symbol
  category?: EntryFieldTypes.Symbol
  duration: EntryFieldTypes.Symbol
  includes: EntryFieldTypes.Symbol
  guide: EntryFieldTypes.Symbol
}

export type TypeTourItemSkeleton = EntrySkeletonType<TypeTourItemFields, 'tourItem'>
export type TypeTourItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTourItemSkeleton, Modifiers, Locales>
