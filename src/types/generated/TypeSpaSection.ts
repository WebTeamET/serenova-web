import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeSpaItemSkeleton } from './TypeSpaItem'

export interface TypeSpaSectionFields {
  style: EntryFieldTypes.Symbol<'carousel' | 'gallery'>
  title: EntryFieldTypes.Symbol
  eyebrow?: EntryFieldTypes.Symbol
  items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSpaItemSkeleton>>
  mediaItems?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
}

export type TypeSpaSectionSkeleton = EntrySkeletonType<TypeSpaSectionFields, 'spaSection'>
export type TypeSpaSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSpaSectionSkeleton, Modifiers, Locales>
