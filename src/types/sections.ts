import type { Entry } from 'contentful'
import type { TypeServicesSectionSkeleton } from './generated/TypeServicesSection'
import type { TypeServiceCardSkeleton } from './generated/TypeServiceCard'
import type { TypeAboutSectionSkeleton } from './generated/TypeAboutSection'
import type { TypeTourListingSectionSkeleton } from './generated/TypeTourListingSection'
import type { TypeTourItemSkeleton } from './generated/TypeTourItem'
import type { TypeOfferSectionSkeleton } from './generated/TypeOfferSection'
import type { TypeHeroSectionSkeleton } from './generated/TypeHeroSection'
import type { TypeTestimonialSectionSkeleton } from './generated/TypeTestimonialSection'
import type { TypeJournalSectionSkeleton } from './generated/TypeJournalSection'
import type { TypeIntroSectionSkeleton } from './generated/TypeIntroSection'
import type { TypeExploreSectionSkeleton } from './generated/TypeExploreSection'
import type { TypeListingSectionSkeleton } from './generated/TypeListingSection'
import type { TypeListingItemSkeleton } from './generated/TypeListingItem'
import type { TypeImageGallerySectionSkeleton } from './generated/TypeImageGallerySection'
import type { TypeGalleryItemSkeleton } from './generated/TypeGalleryItem'
import type { TypeContactSectionSkeleton } from './generated/TypeContactSection'
import type { TypeSpaSectionSkeleton } from './generated/TypeSpaSection'
import type { TypeSpaItemSkeleton } from './generated/TypeSpaItem'
import type { TypeDestinationSectionSkeleton } from './generated/TypeDestinationSection'
import type { TypePricingSectionSkeleton } from './generated/TypePricingSection'

type R<T extends { contentTypeId: string; fields: object }> = Entry<
  T,
  'WITHOUT_UNRESOLVABLE_LINKS'
>['fields']

export type ServicesSectionFields = R<TypeServicesSectionSkeleton>
export type ServiceCardFields = R<TypeServiceCardSkeleton>
export type AboutSectionFields = R<TypeAboutSectionSkeleton>
export type TourListingSectionFields = R<TypeTourListingSectionSkeleton>
export type TourItemFields = R<TypeTourItemSkeleton>
export type OfferSectionFields = R<TypeOfferSectionSkeleton>
export type HeroSectionFields = R<TypeHeroSectionSkeleton>
export type TestimonialSectionFields = R<TypeTestimonialSectionSkeleton>
export type JournalSectionFields = R<TypeJournalSectionSkeleton>
export type IntroSectionFields = R<TypeIntroSectionSkeleton>
export type ExploreSectionFields = R<TypeExploreSectionSkeleton>
export type ListingSectionFields = R<TypeListingSectionSkeleton>
export type ListingItemFields = R<TypeListingItemSkeleton>
export type ImageGallerySectionFields = R<TypeImageGallerySectionSkeleton>
export type GalleryItemFields = R<TypeGalleryItemSkeleton>
export type ContactSectionFields = R<TypeContactSectionSkeleton>
export type SpaSectionFields = R<TypeSpaSectionSkeleton>
export type SpaItemFields = R<TypeSpaItemSkeleton>
export type DestinationSectionFields = R<TypeDestinationSectionSkeleton>
export type PricingSectionFields = R<TypePricingSectionSkeleton>
