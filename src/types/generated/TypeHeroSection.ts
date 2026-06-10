import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeHeroSectionFields {
  style: EntryFieldTypes.Symbol<'collage' | 'featureHero' | 'innerHero'>
  eyebrow?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  subtitle?: EntryFieldTypes.Symbol
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  backgroundImage?: EntryFieldTypes.AssetLink
  primaryButtonLabel?: EntryFieldTypes.Symbol
  primaryButtonUrl?: EntryFieldTypes.Symbol
  secondaryButtonLabel?: EntryFieldTypes.Symbol
  secondaryButtonUrl?: EntryFieldTypes.Symbol
}

export type TypeHeroSectionSkeleton = EntrySkeletonType<TypeHeroSectionFields, 'heroSection'>
export type TypeHeroSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHeroSectionSkeleton, Modifiers, Locales>
