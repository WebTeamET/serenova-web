import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeContactSectionFields {
  eyebrow?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  image: EntryFieldTypes.AssetLink
  formButtonLabel?: EntryFieldTypes.Symbol
  privacyPolicyLink?: EntryFieldTypes.Symbol
  formFieldsJson?: EntryFieldTypes.Object
  statsJson?: EntryFieldTypes.Object
}

export type TypeContactSectionSkeleton = EntrySkeletonType<
  TypeContactSectionFields,
  'contactSection'
>
export type TypeContactSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeContactSectionSkeleton, Modifiers, Locales>
