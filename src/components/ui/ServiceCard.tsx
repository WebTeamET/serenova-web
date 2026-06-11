import Image from 'next/image'
import Link from 'next/link'
import { mapImage } from '@/contentful/mappers'
import { ASSETS } from '@/config/assets'
import type { ServiceCardFields } from '@/types/sections'

export default function ServiceCard({
  card,
}: {
  card: { sys: { id: string }; fields: ServiceCardFields }
}) {
  const icon = mapImage(card.fields.icon)
  const hoverCtaText = card.fields.hoverCtaText

  return (
    <div className="service-card-item">
      <Link
        href={card.fields.ctaUrl ?? '/'}
        className="service-card-inside group px-20 min-1400:px-[39px] py-30 min-1400:pt-[71px] min-1400:pb-[46px] flex flex-col items-center text-center border-[1px] border-solid border-secondary-600 relative h-full after:content-[''] after:absolute after:w-full after:h-full after:top-[-8px] min-1400:after:top-[-13px] after:left-[-8px] min-1400:after:left-[-13px] after:border-[1px] after:border-solid after:border-secondary-900 after:pointer-events-none after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100"
      >
        {icon && (
          <div className="service-card-item-icon mb-20 min-1400:mb-32">
            <Image
              src={icon.url}
              alt={icon.alt}
              width={64}
              height={64}
              className="w-[64px] h-auto aspect-square object-contain"
            />
          </div>
        )}
        <div className="service-card-item-title">
          <h6 className="text-secondary-900 transition-all duration-300 ease-in-out group-hover:text-black">
            {card.fields.title}
          </h6>
        </div>
        <div className="service-card-item-text mt-14">
          <p className="text-grey-400 leading-150p">{card.fields.description}</p>
        </div>
        <div className="service-card-item-arrow mt-20 min-1400:mt-[27px] flex justify-center items-center gap-12">
          {hoverCtaText && (
            <p className="text-black transition-all duration-300 ease-in-out max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px]">
              {hoverCtaText}
            </p>
          )}
          <Image
            src={hoverCtaText ? ASSETS.travelerArrow : ASSETS.serviceArrowNext}
            alt="arrow"
            width={hoverCtaText ? 21 : 18}
            height={hoverCtaText ? 21 : 22}
          />
        </div>
      </Link>
    </div>
  )
}
