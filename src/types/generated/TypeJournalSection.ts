import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeJournalSectionFields {
  eyebrow: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  buttonLabel?: EntryFieldTypes.Symbol
  buttonUrl?: EntryFieldTypes.Symbol
  journalItem: EntryFieldTypes.Object
}

export type TypeJournalSectionSkeleton = EntrySkeletonType<
  TypeJournalSectionFields,
  'journalSection'
>
export type TypeJournalSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeJournalSectionSkeleton, Modifiers, Locales>
