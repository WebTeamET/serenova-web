import Image from 'next/image'
import Link from 'next/link'
import { mapImage } from '@/contentful/mappers'
import { ASSETS } from '@/config/assets'
import type { ServiceCardFields } from '@/types/sections'

export default function TravelerCard({
  card,
}: {
  card: { sys: { id: string }; fields: ServiceCardFields }
}) {
  const icon = mapImage(card.fields.icon)
  const hoverCtaText = card.fields.hoverCtaText

  return (
    <div className="traveler-card-main">
      <Link href={card.fields.ctaUrl ?? '/'} className="traveler-card-section block group">
        {icon && (
          <div className="traveler-card-icon flex justify-center items-center w-[129px] h-[128px] mx-auto mb-22 relative">
            {/* background SVG behind icon — replaces the HTML after: pseudo-element */}
            <span
              aria-hidden
              className="absolute w-full h-full left-0 top-0 bg-no-repeat bg-[length:100%_100%] pointer-events-none"
              style={{ backgroundImage: `url('${ASSETS.travelerCardIconBg}')` }}
            />
            <Image
              src={icon.url}
              alt={icon.alt}
              width={icon.width || 64}
              height={icon.height || 64}
              className="relative z-[1] object-contain"
            />
          </div>
        )}
        {card.fields.title && (
          <div className="traveler-card-title text-center">
            <h5>{card.fields.title}</h5>
          </div>
        )}
        {card.fields.description && (
          <div className="traveler-card-text text-center mt-[9px]">
            <p>{card.fields.description}</p>
          </div>
        )}
        {hoverCtaText && (
          <div className="traveler-card-arrow flex justify-center items-center gap-12 mt-22 min-1200:mt-34">
            <p className="text-black transition-all duration-300 ease-in-out max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px]">
              {hoverCtaText}
            </p>
            <Image src={ASSETS.travelerArrow} alt="arrow" width={21} height={21} />
          </div>
        )}
      </Link>
    </div>
  )
}
