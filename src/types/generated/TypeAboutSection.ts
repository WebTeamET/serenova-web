import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeAboutSectionFields {
  eyebrow?: EntryFieldTypes.Symbol
  heading: EntryFieldTypes.RichText
  body: EntryFieldTypes.RichText
  ctaLabel?: EntryFieldTypes.Symbol
  ctaUrl?: EntryFieldTypes.Symbol
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  experiencesVideo?: EntryFieldTypes.AssetLink
  experiencesEyebrow?: EntryFieldTypes.Symbol
  experiencesHeading: EntryFieldTypes.Symbol
  experiencesBody?: EntryFieldTypes.Text
  experiencesList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  experiencesCtaLabel?: EntryFieldTypes.Symbol
  experiencesCtaUrl?: EntryFieldTypes.Symbol
}

export type TypeAboutSectionSkeleton = EntrySkeletonType<TypeAboutSectionFields, 'aboutSection'>
export type TypeAboutSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeAboutSectionSkeleton, Modifiers, Locales>
