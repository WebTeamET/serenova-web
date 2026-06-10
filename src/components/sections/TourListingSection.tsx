import Image from 'next/image'
import Button from '@/components/ui/Button'
import TourCard from '@/components/ui/TourCard'
import { ASSETS } from '@/config/assets'
import type { TourListingSectionFields } from '@/types/sections'

export default function TourListingSection(fields: Record<string, unknown>) {
  const f = fields as unknown as TourListingSectionFields

  return (
    <section className="tours-main relative bg-dark-cream py-60 min-1800:pt-[130px] min-1800:pb-[92px]">
      <div className="tour-leaf absolute bottom-0 left-0">
        <Image
          src={ASSETS.tourLeaf}
          alt="leaf"
          width={207}
          height={327}
          className="w-[80px] min-1400:w-[100px] min-1800:w-auto"
        />
      </div>
      <div className="container-1310">
        <div className="tours-section relative z-1">
          <div className="tours-start">
            <div className="tours-subtitle sub-title sub-title-no-translate mb-[17px]">
              <span className="mx-auto after:!left-12">{f.eyebrow}</span>
            </div>
            <div className="tours-title text-center">
              <h2 className="h4">{f.title}</h2>
            </div>
            <div className="tours-list mt-40 min-1400:mt-62 grid grid-cols-1 min-768:grid-cols-2 min-1200:grid-cols-3 gap-x-30 min-1400:gap-x-40 gap-y-30 min-1400:gap-y-62">
              {(f.tourItems ?? [])
                .filter((item): item is NonNullable<typeof item> => item != null)
                .map((item, i) => (
                  <TourCard key={item.sys?.id ?? i} item={item} />
                ))}
            </div>
            {f.buttonLabel && (
              <div className="tours-btn mt-40 min-1400:mt-62">
                <Button href={f.buttonUrl ?? '/'} label={f.buttonLabel} className="mx-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
