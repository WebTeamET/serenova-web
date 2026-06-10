import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeExploreSectionFields {
  title: EntryFieldTypes.Symbol
  cards: EntryFieldTypes.Object
}

export type TypeExploreSectionSkeleton = EntrySkeletonType<
  TypeExploreSectionFields,
  'exploreSection'
>
export type TypeExploreSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeExploreSectionSkeleton, Modifiers, Locales>
