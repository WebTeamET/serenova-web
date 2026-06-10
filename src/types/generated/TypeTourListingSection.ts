import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeTourItemSkeleton } from './TypeTourItem'

export interface TypeTourListingSectionFields {
  eyebrow?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  tourItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTourItemSkeleton>>
  buttonLabel?: EntryFieldTypes.Symbol
  buttonUrl?: EntryFieldTypes.Symbol
}

export type TypeTourListingSectionSkeleton = EntrySkeletonType<
  TypeTourListingSectionFields,
  'tourListingSection'
>
export type TypeTourListingSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTourListingSectionSkeleton, Modifiers, Locales>
