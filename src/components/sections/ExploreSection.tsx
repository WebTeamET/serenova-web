import Link from 'next/link'
import Image from 'next/image'
import { ASSETS } from '@/config/assets'
import StaggerReveal from '@/components/ui/StaggerReveal'

interface ExploreCard {
  cardTitle: string
  description?: string
  image?: string
  alt?: string
  link?: string
}

const cardImageClass = [
  'explore-card-image relative',
  "after:content-[''] after:absolute after:w-[calc(100%_-_13px)] after:h-[calc(100%_-_13px)]",
  'after:top-0 after:left-0 after:pointer-events-none',
  'after:border-[1px] after:border-solid after:border-[#735C2B]',
  'after:transition-all after:duration-300 after:ease-in-out after:opacity-0 hover:after:opacity-100',
  "before:content-[''] before:absolute before:w-[calc(100%_-_13px)] before:h-[229px]",
  'before:max-w-full before:left-13 before:bottom-0 before:pointer-events-none',
  'before:bg-[linear-gradient(0deg,_#000_0%,_rgba(0,_0,_0,_0.00)_100%)] before:opacity-90',
].join(' ')

const descriptionClass = [
  'explain-card-title transition-all duration-300 ease-in-out',
  'min-990:overflow-hidden min-990:max-h-0 min-990:group-hover:max-h-[500px]',
  'min-990:opacity-0 min-990:group-hover:opacity-100',
  'pt-8 min-990:pt-0 min-990:group-hover:pt-8',
].join(' ')

export default function ExploreSection(fields: Record<string, unknown>) {
  const title = fields.title as string | undefined
  const cards = (fields.cards as ExploreCard[] | undefined) ?? []

  return (
    <section className="explore-main relative py-60 min-1400:pb-0 min-1400:pt-[147px]">
      <div className="explore-leaf absolute bottom-10 left-0 max-990:hidden">
        <Image
          src={ASSETS.exploreLeaf}
          alt="leaf"
          width={324}
          height={254}
          className="w-[200px] min-1200:w-auto"
        />
      </div>

      <div className="container-1538">
        <div className="explore-section relative z-1">
          <div className="explore-start flex flex-col min-990:flex-row gap-30 min-1400:gap-x-[44px]">
            <div className="explore-left min-990:flex-[0_0_calc(100%_-_680px)] min-1200:flex-[0_0_calc(100%_-_830px)] min-1400:flex-[0_0_calc(100%_-_977px)]">
              {title && (
                <div className="title max-990:text-center">
                  <h2 className="h4">{title}</h2>
                </div>
              )}
            </div>

            <div className="explore-right min-990:flex-[0_0_650px] min-1200:flex-[0_0_800px] min-1400:flex-[0_0_933px]">
              <StaggerReveal className="explore-card-list flex flex-col min-640:flex-row gap-y-20 gap-x-30 min-1400:gap-x-[48px]">
                {cards.map((card, index) => (
                  <Link
                    key={index}
                    href={card.link ?? '/'}
                    className="explore-card-main group block min-768:flex-[0_0_calc(50%_-_15px)] min-1400:flex-[0_0_calc(50%_-_24px)]"
                  >
                    <div className={cardImageClass}>
                      <img
                        loading="lazy"
                        src={card.image ?? ''}
                        alt={card.alt ?? card.cardTitle}
                        className="w-full h-auto aspect-[0.97/1] object-cover pt-13 pl-13"
                      />
                      <div className="explain-card-details text-center absolute w-[calc(100%_-_13px)] bottom-0 left-13 z-1 px-20 min-768:px-30 min-1600:px-64 pb-30 min-1600:pb-42">
                        <div className="explain-card-title">
                          <p className="poppins-600-23 text-white">{card.cardTitle}</p>
                        </div>
                        {card.description && (
                          <div className={descriptionClass}>
                            <p className="leading-[156.25%] text-white">{card.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
