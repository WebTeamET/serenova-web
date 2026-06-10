import type { ComponentType } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import PartnerSection from '@/components/sections/PartnerSection'
import TourListingSection from '@/components/sections/TourListingSection'
import OfferSection from '@/components/sections/OfferSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import JournalSection from '@/components/sections/JournalSection'
import IntroSection from '@/components/sections/IntroSection'
import ExploreSection from '@/components/sections/ExploreSection'

export const sectionRegistry: Record<string, ComponentType<Record<string, unknown>>> = {
  heroSection: HeroSection,
  servicesSection: ServicesSection,
  aboutSection: AboutSection,
  partnerSection: PartnerSection,
  tourListingSection: TourListingSection,
  offerSection: OfferSection,
  testimonialSection: TestimonialSection,
  journalSection: JournalSection,
  introSection: IntroSection,
  exploreSection: ExploreSection,
}
