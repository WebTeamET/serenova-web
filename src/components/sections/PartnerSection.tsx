'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import type { PartnerSectionFields } from '@/types/sections'

interface PartnerLogoJson {
  partnerLogo: string
  alt: string
}

export default function PartnerSection(fields: Record<string, unknown>) {
  const f = fields as unknown as PartnerSectionFields
  const logos = ((f.partnerLogo as unknown as PartnerLogoJson[] | undefined) ?? []).filter(
    (item) => !!item.partnerLogo
  )

  if (!logos.length) return null

  return (
    <section className="companies-main bg-dark-cream py-30 min-1400:py-[45px]">
      <div className="container-1290">
        <div className="companies-section">
          <Swiper
            className="companies-slider"
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 1500 }}
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="companies-slide">
                <Link
                  href="/"
                  className="companies-slide-inside flex justify-center items-center w-fit mx-auto"
                >
                  <img
                    src={logo.partnerLogo}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
