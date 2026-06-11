'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import TravelerCard from '@/components/ui/TravelerCard'
import Button from '@/components/ui/Button'
import type { ServicesSectionFields } from '@/types/sections'

export default function ServicesSection(fields: Record<string, unknown>) {
  const f = fields as unknown as ServicesSectionFields
  const cards = (f.cards ?? []).filter((card): card is NonNullable<typeof card> => card != null)
  const isCarousel = f.variant === 'Carousel'

  if (isCarousel) {
    return (
      <section className="traveler-main pt-60 pb-60 min-1400:pb-[131px]">
        <div className="container-1605">
          <div className="traveler-section">
            <div className="traveler-start">
              <div className="sub-title mb-16">
                {f.eyebrow && <span className="mx-auto">{f.eyebrow}</span>}
              </div>
              <div className="title text-center">
                <h2 className="h4">{f.heading}</h2>
              </div>
              <div className="traveler-swiper-start mt-50 min-1400:mt-[81px]">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1800: { slidesPerView: 3, spaceBetween: 69 },
                  }}
                  className="traveler-swiper common-swiper-pagination"
                >
                  {cards.map((card, i) => (
                    <SwiperSlide key={`${card.sys?.id ?? 'card'}-${i}`}>
                      <TravelerCard card={card} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {f.sectionDescription && (
                <div className="traveler-note teachers-500-16 text-center max-w-[745px] mx-auto mt-40 min-1400:mt-[85px]">
                  <p>{f.sectionDescription}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  const isPaginated = cards.length > 3

  return (
    <section className="service-main pt-60 min-990:pt-[96px] pb-70 min-1400:pb-[147px]">
      <div className="container-1330">
        <div className="service-section">
          <div className="service-start">
            <SectionHeader eyebrow={f.eyebrow} heading={f.heading} />
            {isPaginated ? (
              <div className="service-swiper-wrap mt-40 min-990:mt-50 min-1400:mt-62 common-swiper-pagination">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
                    1200: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 50 },
                  }}
                  className="service-swiper"
                >
                  {cards.map((card, i) => (
                    <SwiperSlide key={`${card.sys?.id ?? 'card'}-${i}`} className="!h-auto">
                      <ServiceCard card={card} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className="service-car-list mt-40 min-990:mt-50 min-1400:mt-62 grid grid-cols-1 min-640:grid-cols-2 min-1200:grid-cols-3 gap-y-20 gap-x-20 min-1400:gap-x-50">
                {cards.map((card, i) => (
                  <ServiceCard key={`${card.sys?.id ?? 'card'}-${i}`} card={card} />
                ))}
              </div>
            )}
            {f.viewAllLabel && (
              <div className="service-btn mt-40 min-990:mt-[53px]">
                <Button href={f.viewAllUrl ?? '/'} label={f.viewAllLabel} className="mx-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
