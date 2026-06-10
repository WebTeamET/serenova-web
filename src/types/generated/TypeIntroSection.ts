import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeIntroSectionFields {
  eyebrow?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.RichText
  description: EntryFieldTypes.Text
  showLeaf?: EntryFieldTypes.Boolean
}

export type TypeIntroSectionSkeleton = EntrySkeletonType<TypeIntroSectionFields, 'introSection'>
export type TypeIntroSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeIntroSectionSkeleton, Modifiers, Locales>
