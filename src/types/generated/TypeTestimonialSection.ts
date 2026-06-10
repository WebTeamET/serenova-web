import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeTestimonialSectionFields {
  eyebrow?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  testimonialItems: EntryFieldTypes.Object
}

export type TypeTestimonialSectionSkeleton = EntrySkeletonType<
  TypeTestimonialSectionFields,
  'testimonialSection'
>
export type TypeTestimonialSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTestimonialSectionSkeleton, Modifiers, Locales>
