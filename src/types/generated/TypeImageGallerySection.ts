import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeGalleryItemSkeleton } from './TypeGalleryItem'

export interface TypeImageGallerySectionFields {
  title?: EntryFieldTypes.Symbol
  eyebrow?: EntryFieldTypes.Symbol
  categories: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeGalleryItemSkeleton>>
  itemsPerPage?: EntryFieldTypes.Integer
}

export type TypeImageGallerySectionSkeleton = EntrySkeletonType<
  TypeImageGallerySectionFields,
  'imageGallerySection'
>
export type TypeImageGallerySection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeImageGallerySectionSkeleton, Modifiers, Locales>
