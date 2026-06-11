import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeListingItemFields {
  title: EntryFieldTypes.Symbol
  category?: EntryFieldTypes.Symbol
  image: EntryFieldTypes.AssetLink
  description: EntryFieldTypes.Text
  tag?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  link?: EntryFieldTypes.Symbol
}

export type TypeListingItemSkeleton = EntrySkeletonType<TypeListingItemFields, 'listingItem'>
export type TypeListingItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeListingItemSkeleton, Modifiers, Locales>
