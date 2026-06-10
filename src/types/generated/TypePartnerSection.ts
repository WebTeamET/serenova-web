import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypePartnerSectionFields {
  internalName?: EntryFieldTypes.Symbol
  partnerLogo: EntryFieldTypes.Object
}

export type TypePartnerSectionSkeleton = EntrySkeletonType<
  TypePartnerSectionFields,
  'partnerSection'
>
export type TypePartnerSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePartnerSectionSkeleton, Modifiers, Locales>
