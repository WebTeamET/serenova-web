import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeGalleryItemFields {
  image: EntryFieldTypes.AssetLink
  altText: EntryFieldTypes.Symbol
  category: EntryFieldTypes.Symbol<
    | 'Accommodation'
    | 'Activities & Experiences'
    | 'All'
    | 'Dining & Cuisine'
    | 'Events & Celebrations'
    | 'Nature'
    | 'Wellness & Spa'
  >
}

export type TypeGalleryItemSkeleton = EntrySkeletonType<TypeGalleryItemFields, 'galleryItem'>
export type TypeGalleryItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeGalleryItemSkeleton, Modifiers, Locales>
