import type { Entry } from 'contentful'
import type { TypeServicesSectionSkeleton } from './generated/TypeServicesSection'
import type { TypeServiceCardSkeleton } from './generated/TypeServiceCard'
import type { TypeAboutSectionSkeleton } from './generated/TypeAboutSection'
import type { TypePartnerSectionSkeleton } from './generated/TypePartnerSection'
import type { TypeTourListingSectionSkeleton } from './generated/TypeTourListingSection'
import type { TypeTourItemSkeleton } from './generated/TypeTourItem'
import type { TypeOfferSectionSkeleton } from './generated/TypeOfferSection'
import type { TypeHeroSectionSkeleton } from './generated/TypeHeroSection'
import type { TypeTestimonialSectionSkeleton } from './generated/TypeTestimonialSection'
import type { TypeJournalSectionSkeleton } from './generated/TypeJournalSection'
import type { TypeIntroSectionSkeleton } from './generated/TypeIntroSection'
import type { TypeExploreSectionSkeleton } from './generated/TypeExploreSection'

type R<T extends { contentTypeId: string; fields: object }> = Entry<
  T,
  'WITHOUT_UNRESOLVABLE_LINKS'
>['fields']

export type ServicesSectionFields = R<TypeServicesSectionSkeleton>
export type ServiceCardFields = R<TypeServiceCardSkeleton>
export type AboutSectionFields = R<TypeAboutSectionSkeleton>
export type PartnerSectionFields = R<TypePartnerSectionSkeleton>
export type TourListingSectionFields = R<TypeTourListingSectionSkeleton>
export type TourItemFields = R<TypeTourItemSkeleton>
export type OfferSectionFields = R<TypeOfferSectionSkeleton>
export type HeroSectionFields = R<TypeHeroSectionSkeleton>
export type TestimonialSectionFields = R<TypeTestimonialSectionSkeleton>
export type JournalSectionFields = R<TypeJournalSectionSkeleton>
export type IntroSectionFields = R<TypeIntroSectionSkeleton>
export type ExploreSectionFields = R<TypeExploreSectionSkeleton>
