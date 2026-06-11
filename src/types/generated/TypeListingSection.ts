import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeListingItemSkeleton } from './TypeListingItem'

export interface TypeListingSectionFields {
  title: EntryFieldTypes.Symbol
  showFilters: EntryFieldTypes.Boolean
  items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeListingItemSkeleton>>
}

export type TypeListingSectionSkeleton = EntrySkeletonType<
  TypeListingSectionFields,
  'listingSection'
>
export type TypeListingSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeListingSectionSkeleton, Modifiers, Locales>
