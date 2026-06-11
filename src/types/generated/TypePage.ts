import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeAboutSectionSkeleton } from './TypeAboutSection'
import type { TypeContactSectionSkeleton } from './TypeContactSection'
import type { TypeDestinationSectionSkeleton } from './TypeDestinationSection'
import type { TypeExploreSectionSkeleton } from './TypeExploreSection'
import type { TypeHeroSectionSkeleton } from './TypeHeroSection'
import type { TypeImageGallerySectionSkeleton } from './TypeImageGallerySection'
import type { TypeIntroSectionSkeleton } from './TypeIntroSection'
import type { TypeJournalSectionSkeleton } from './TypeJournalSection'
import type { TypeListingSectionSkeleton } from './TypeListingSection'
import type { TypeOfferSectionSkeleton } from './TypeOfferSection'
import type { TypePricingSectionSkeleton } from './TypePricingSection'
import type { TypeServicesSectionSkeleton } from './TypeServicesSection'
import type { TypeSpaSectionSkeleton } from './TypeSpaSection'
import type { TypeTestimonialSectionSkeleton } from './TypeTestimonialSection'
import type { TypeTourListingSectionSkeleton } from './TypeTourListingSection'

export interface TypePageFields {
  title: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  seoTitle?: EntryFieldTypes.Symbol
  seoDescription?: EntryFieldTypes.Text
  ogImage?: EntryFieldTypes.AssetLink
  sections: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeAboutSectionSkeleton
      | TypeContactSectionSkeleton
      | TypeDestinationSectionSkeleton
      | TypeExploreSectionSkeleton
      | TypeHeroSectionSkeleton
      | TypeImageGallerySectionSkeleton
      | TypeIntroSectionSkeleton
      | TypeJournalSectionSkeleton
      | TypeListingSectionSkeleton
      | TypeOfferSectionSkeleton
      | TypePricingSectionSkeleton
      | TypeServicesSectionSkeleton
      | TypeSpaSectionSkeleton
      | TypeTestimonialSectionSkeleton
      | TypeTourListingSectionSkeleton
    >
  >
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePageSkeleton, Modifiers, Locales>
