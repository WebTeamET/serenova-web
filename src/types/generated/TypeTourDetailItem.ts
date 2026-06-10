import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeTourDetailItemFields {
  label: EntryFieldTypes.Symbol
  value: EntryFieldTypes.Symbol
}

export type TypeTourDetailItemSkeleton = EntrySkeletonType<
  TypeTourDetailItemFields,
  'tourDetailItem'
>
export type TypeTourDetailItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTourDetailItemSkeleton, Modifiers, Locales>
