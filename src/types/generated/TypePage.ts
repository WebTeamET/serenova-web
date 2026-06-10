import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeAboutSectionSkeleton } from './TypeAboutSection'
import type { TypeExploreSectionSkeleton } from './TypeExploreSection'
import type { TypeHeroSectionSkeleton } from './TypeHeroSection'
import type { TypeIntroSectionSkeleton } from './TypeIntroSection'
import type { TypeJournalSectionSkeleton } from './TypeJournalSection'
import type { TypeOfferSectionSkeleton } from './TypeOfferSection'
import type { TypePartnerSectionSkeleton } from './TypePartnerSection'
import type { TypeServicesSectionSkeleton } from './TypeServicesSection'
import type { TypeTestimonialSectionSkeleton } from './TypeTestimonialSection'
import type { TypeTourListingSectionSkeleton } from './TypeTourListingSection'
import type { TypeWhatWeDoSectionSkeleton } from './TypeWhatWeDoSection'

export interface TypePageFields {
  title: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  seoTitle?: EntryFieldTypes.Symbol
  seoDescription?: EntryFieldTypes.Text
  ogImage?: EntryFieldTypes.AssetLink
  sections: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeAboutSectionSkeleton
      | TypeExploreSectionSkeleton
      | TypeHeroSectionSkeleton
      | TypeIntroSectionSkeleton
      | TypeJournalSectionSkeleton
      | TypeOfferSectionSkeleton
      | TypePartnerSectionSkeleton
      | TypeServicesSectionSkeleton
      | TypeTestimonialSectionSkeleton
      | TypeTourListingSectionSkeleton
      | TypeWhatWeDoSectionSkeleton
    >
  >
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePageSkeleton, Modifiers, Locales>
