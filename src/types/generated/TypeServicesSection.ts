import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeServiceCardSkeleton } from './TypeServiceCard'

export interface TypeServicesSectionFields {
  eyebrow?: EntryFieldTypes.Symbol
  heading: EntryFieldTypes.Symbol
  variant: EntryFieldTypes.Symbol<'Carousel' | 'Grid'>
  cards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeServiceCardSkeleton>>
  viewAllLabel?: EntryFieldTypes.Symbol
  viewAllUrl?: EntryFieldTypes.Symbol
  sectionDescription?: EntryFieldTypes.Symbol
}

export type TypeServicesSectionSkeleton = EntrySkeletonType<
  TypeServicesSectionFields,
  'servicesSection'
>
export type TypeServicesSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeServicesSectionSkeleton, Modifiers, Locales>
