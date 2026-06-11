import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeSpaItemFields {
  title: EntryFieldTypes.Symbol
  image: EntryFieldTypes.AssetLink
  description?: EntryFieldTypes.Text
}

export type TypeSpaItemSkeleton = EntrySkeletonType<TypeSpaItemFields, 'spaItem'>
export type TypeSpaItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSpaItemSkeleton, Modifiers, Locales>
