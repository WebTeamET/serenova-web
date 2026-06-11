import type { ComponentType } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import TourListingSection from '@/components/sections/TourListingSection'
import OfferSection from '@/components/sections/OfferSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import JournalSection from '@/components/sections/JournalSection'
import IntroSection from '@/components/sections/IntroSection'
import ExploreSection from '@/components/sections/ExploreSection'
import ListingSection from '@/components/sections/ListingSection'
import ImageGallerySection from '@/components/sections/ImageGallerySection'
import ContactSection from '@/components/sections/ContactSection'
import SpaSection from '@/components/sections/SpaSection'
import DestinationSection from '@/components/sections/DestinationSection'
import PricingSection from '@/components/sections/PricingSection'

export const sectionRegistry: Record<string, ComponentType<Record<string, unknown>>> = {
  heroSection: HeroSection,
  servicesSection: ServicesSection,
  aboutSection: AboutSection,
  tourListingSection: TourListingSection,
  offerSection: OfferSection,
  testimonialSection: TestimonialSection,
  journalSection: JournalSection,
  introSection: IntroSection,
  exploreSection: ExploreSection,
  listingSection: ListingSection,
  imageGallerySection: ImageGallerySection,
  contactSection: ContactSection,
  spaSection: SpaSection,
  destinationSection: DestinationSection,
  pricingSection: PricingSection,
}
