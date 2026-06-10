import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeNavItemFields {
  label: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  isExternal?: EntryFieldTypes.Boolean
  children?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavItemSkeleton>>
}

export type TypeNavItemSkeleton = EntrySkeletonType<TypeNavItemFields, 'navItem'>
export type TypeNavItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeNavItemSkeleton, Modifiers, Locales>
