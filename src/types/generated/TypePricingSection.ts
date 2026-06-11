import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypePricingSectionFields {
  eyebrow?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  card1Title?: EntryFieldTypes.Symbol
  card1Price?: EntryFieldTypes.Symbol
  card1Period?: EntryFieldTypes.Symbol
  card1Features?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  card1ButtonLabel?: EntryFieldTypes.Symbol
  card1ButtonUrl?: EntryFieldTypes.Symbol
  card2Title?: EntryFieldTypes.Symbol
  card2Price?: EntryFieldTypes.Symbol
  card2Period?: EntryFieldTypes.Symbol
  card2Features?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  card2ButtonLabel?: EntryFieldTypes.Symbol
  card2ButtonUrl?: EntryFieldTypes.Symbol
  card3Title?: EntryFieldTypes.Symbol
  card3Price?: EntryFieldTypes.Symbol
  card3Period?: EntryFieldTypes.Symbol
  card3Features?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  card3ButtonLabel?: EntryFieldTypes.Symbol
  card3ButtonUrl?: EntryFieldTypes.Symbol
}

export type TypePricingSectionSkeleton = EntrySkeletonType<
  TypePricingSectionFields,
  'pricingSection'
>
export type TypePricingSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePricingSectionSkeleton, Modifiers, Locales>
