import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeTourFields {
  title: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  thumbnail: EntryFieldTypes.AssetLink
  gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  shortDescription: EntryFieldTypes.Symbol
  description: EntryFieldTypes.RichText
  duration: EntryFieldTypes.Symbol
  includes?: EntryFieldTypes.Symbol
  guide?: EntryFieldTypes.Symbol
  price: EntryFieldTypes.Number
  priceLabel?: EntryFieldTypes.Symbol
  category?: EntryFieldTypes.Symbol
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  isFeatured?: EntryFieldTypes.Boolean
  maxGroupSize?: EntryFieldTypes.Integer
  itinerary?: EntryFieldTypes.RichText
  seoTitle?: EntryFieldTypes.Symbol
  seoDescription?: EntryFieldTypes.Text
}

export type TypeTourSkeleton = EntrySkeletonType<TypeTourFields, 'tour'>
export type TypeTour<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTourSkeleton, Modifiers, Locales>
