'use client'

import { useRef, useMemo } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { ASSETS } from '@/config/assets'

interface TestimonialItem {
  id?: number | string
  text?: string
  customer?: string
}

export default function TestimonialSection(fields: Record<string, unknown>) {
  const eyebrow = fields.eyebrow as string | undefined
  const title = fields.title as string | undefined
  const testimonials = (fields.testimonialItems as TestimonialItem[] | undefined) ?? []

  const showLeaf = fields.showLeaf !== false
  const swiperRef = useRef<SwiperType | null>(null)

  const slides = useMemo(() => [...Array(3)].flatMap(() => testimonials), [testimonials])

  return (
    <section className="test-main relative py-60 min-1400:py-[147px]">
      {showLeaf && (
        <div className="test-big-leaf block absolute left-0 top-0">
          <Image
            src={ASSETS.testBigLeaf}
            alt="leaf"
            width={184}
            height={187}
            className="w-[80px] min-768:w-[120px] min-1400:w-auto"
          />
        </div>
      )}

      <div className="test-section relative z-1">
        {eyebrow && (
          <div className="sub-title sub-title-no-translate mb-17">
            <span className="mx-auto after:!left-18">{eyebrow}</span>
          </div>
        )}
        {title && (
          <div className="title text-center">
            <h2 className="h4">{title}</h2>
          </div>
        )}

        <div className="test-swiper-start mt-40 min-1400:mt-[67px]">
          {slides.length > 0 && (
            <Swiper
              spaceBetween={20}
              slidesPerView={1.1}
              centeredSlides={true}
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              breakpoints={{
                576: { slidesPerView: 1.6, spaceBetween: 30 },
                768: { slidesPerView: 1.9, spaceBetween: 30 },
                990: { slidesPerView: 1.9, spaceBetween: 40 },
                1200: { slidesPerView: 2.4, spaceBetween: 40 },
                1400: { slidesPerView: 2.8, spaceBetween: 40 },
                1600: { slidesPerView: 3.8, spaceBetween: 40 },
                1800: { slidesPerView: 4.05, spaceBetween: 40 },
              }}
              className="test-swiper"
            >
              {slides.map((item, index) => (
                <SwiperSlide key={`${item.id ?? index}-${index}`} className="!h-auto">
                  <TestimonialCard text={item.text} customer={item.customer} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="swiper-nav mt-40 min-1400:mt-[67px]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="custom-swiper-button custom-swiper-button-prev flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <Image src={ASSETS.swiperPrev} alt="Previous" width={20} height={27} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="custom-swiper-button custom-swiper-button-next flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <Image src={ASSETS.swiperNext} alt="Next" width={20} height={27} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
