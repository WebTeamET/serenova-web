import Link from 'next/link'
import { ASSETS } from '@/config/assets'
import type { PricingSectionFields } from '@/types/sections'

interface PricingCard {
  title?: string
  price?: string
  period?: string
  features?: string[]
  buttonLabel?: string
  buttonUrl?: string
}

export default function PricingSection(fields: Record<string, unknown>) {
  const f = fields as unknown as PricingSectionFields

  const cards: PricingCard[] = [
    {
      title: f.card1Title as string | undefined,
      price: f.card1Price as string | undefined,
      period: f.card1Period as string | undefined,
      features: f.card1Features as string[] | undefined,
      buttonLabel: f.card1ButtonLabel as string | undefined,
      buttonUrl: f.card1ButtonUrl as string | undefined,
    },
    {
      title: f.card2Title as string | undefined,
      price: f.card2Price as string | undefined,
      period: f.card2Period as string | undefined,
      features: f.card2Features as string[] | undefined,
      buttonLabel: f.card2ButtonLabel as string | undefined,
      buttonUrl: f.card2ButtonUrl as string | undefined,
    },
    {
      title: f.card3Title as string | undefined,
      price: f.card3Price as string | undefined,
      period: f.card3Period as string | undefined,
      features: f.card3Features as string[] | undefined,
      buttonLabel: f.card3ButtonLabel as string | undefined,
      buttonUrl: f.card3ButtonUrl as string | undefined,
    },
  ].filter((c) => c.title || c.price)

  return (
    <section className="packages-main relative py-60 min-1400:pt-76 min-1400:pb-[147px]">
      <div className="package-leaf absolute top-0 left-0 pointer-events-none">
        <img
          src={ASSETS.packageLeaf}
          alt=""
          width={190}
          height={257}
          className="w-[80px] min-990:w-[120px] min-1400:w-auto"
        />
      </div>
      <div className="container-1395">
        <div className="packages-section relative z-1">
          <div className="packages-start">
            {/* Header */}
            {f.eyebrow && (
              <div className="sub-title sub-title-no-translate mb-16">
                <span className="mx-auto after:!left-[1px]">{f.eyebrow as string}</span>
              </div>
            )}
            <div className="title text-center">
              <h2 className="h4">{f.title as string}</h2>
            </div>
            {f.description && (
              <div className="text text-center mt-22 max-w-[724px] mx-auto">
                <p>{f.description as string}</p>
              </div>
            )}

            {/* Cards */}
            <div className="packages-list mt-40 min-1600:mt-90 grid grid-cols-1 min-768:grid-cols-2 min-1200:grid-cols-3 gap-[33px]">
              {cards.map((card, i) => (
                <Link
                  key={i}
                  href={card.buttonUrl ?? '/'}
                  className="package-item group bg-dark-cream block max-768:w-fit max-768:mx-auto hover:bg-secondary-700 transition-colors duration-300 ease-in-out"
                >
                  <div className="package-above p-30 min-1600:p-60 max-990:px-20">
                    {card.title && (
                      <div className="teachers-500-25 text-center mb-4 group-hover:text-white transition-colors duration-300 ease-in-out">
                        <p>{card.title}</p>
                      </div>
                    )}
                    {card.price && (
                      <div className="poppins-500-55 text-center group-hover:text-white transition-colors duration-300 ease-in-out">
                        <p>{card.price}</p>
                      </div>
                    )}
                    {card.period && (
                      <div className="poppins-400-18 text-center group-hover:text-primary-600 transition-colors duration-300 ease-in-out">
                        <p>{card.period}</p>
                      </div>
                    )}
                    {card.features && card.features.length > 0 && (
                      <div className="package-offer-list pt-30 min-1600:pt-[37px] mt-30 min-1600:mt-[56px] border-t-[1px] border-solid border-secondary-600 group-hover:border-white/20 transition-colors duration-300 ease-in-out">
                        <ul>
                          {card.features.map((feat, fi) => (
                            <li
                              key={fi}
                              className="flex items-start gap-10 mb-6 min-1400:mb-12 last:mb-0"
                            >
                              <img
                                src="/assets/images/correct-ul-icon.svg"
                                alt=""
                                width={22}
                                height={22}
                                className="mt-1 shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300 ease-in-out"
                              />
                              <span className="text-black group-hover:text-white transition-colors duration-300 ease-in-out">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="package-below flex justify-center items-center transition-all duration-300 ease-in-out bg-secondary-600 group-hover:bg-secondary-800">
                    <p className="package-button px-20 py-10 font-teachers font-semibold text-18 leading-122p text-white">
                      {card.buttonLabel ?? 'GET NOW'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
