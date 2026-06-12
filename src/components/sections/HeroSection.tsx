'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ASSETS } from '@/config/assets'
import { mapImage } from '@/contentful/mappers'
import Button from '@/components/ui/Button'
import type { HeroSectionFields } from '@/types/sections'

function CollageLayout({ f }: { f: HeroSectionFields }) {
  const images = (f.images ?? []).map(mapImage).filter(Boolean)
  const bannerImagesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    bannerImagesRef.current.forEach((el, i) => {
      if (!el) return
      const angle = Math.random() * Math.PI * 2
      const radius = 250 + Math.random() * 100
      const fromX = Math.cos(angle) * radius
      const fromY = Math.sin(angle) * radius
      const fromRotation = (Math.random() - 0.5) * 180
      gsap.fromTo(
        el,
        { x: fromX, y: fromY, opacity: 0, scale: 0.7, rotateZ: fromRotation },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotateZ: 0,
          duration: 1.8,
          ease: 'power2.inOut',
          delay: i * 0.1,
        }
      )
    })
  }, [])

  const scrollToNextSection = () => {
    const arrowEl = document.querySelector('.banner-gateway-arrow')
    const nextSection = arrowEl?.closest('section')?.nextElementSibling
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="banner-main relative overflow-hidden pt-10 pb-[42px]">
      <Image
        src={ASSETS.bannerTree}
        alt="tree"
        width={242}
        height={354}
        className="absolute left-0 bottom-18 z-0"
      />
      <div className="container-1657">
        <div className="banner-section relative">
          <div className="banner-images">
            {images.map((item, index) => (
              <div
                key={index}
                className={`banner-img banner-img-${index + 1} absolute`}
                ref={(el) => {
                  bannerImagesRef.current[index] = el
                }}
              >
                <div className="banner-img-inner">
                  <Image
                    src={item!.url}
                    alt={item!.alt || `banner-img-${index + 1}`}
                    width={item!.width || 800}
                    height={item!.height || 600}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="banner-below relative z-1 pt-[320px] min-576:pt-[210px] min-990:pt-[42px] min-1200:pt-[12px] min-1400:pt-[100px] min-1600:pt-[120px] min-1800:pt-[148px] pb-[160px] min-576:pb-[150px] min-990:pb-12">
            <div className="banner-detail">
              <div className="banner-detail-leaf mb-[13px]">
                <Image
                  src={ASSETS.bannerDetailLeaf}
                  alt="leaf"
                  width={172}
                  height={89}
                  className="mx-auto"
                />
              </div>
              {f.eyebrow && <p className="poppins-300-24 text-center mb-10">{f.eyebrow}</p>}
              <div className="banner-title text-center max-w-[320px] min-768:max-w-[430px] min-1200:max-w-[490px] min-1400:max-w-[620px] min-1600:max-w-[730px] mx-auto">
                <h1 className="w-fit mx-auto min-1600:mr-[-31px]">{f.title}</h1>
              </div>
            </div>
            <div className="banner-gateway mt-50 min-768:mt-66 min-1200:mt-50 min-1400:mt-[70px] min-1600:mt-[150px]">
              {f.subtitle && (
                <div className="banner-gateway-text text-center mb-20 min-1200:mb-25 min-1400:mb-[35px] min-1600:mb-[65px]">
                  <p className="poppins-300-24">{f.subtitle}</p>
                </div>
              )}
              <button
                type="button"
                className="banner-gateway-arrow block w-fit mx-auto hover:opacity-70"
                onClick={scrollToNextSection}
              >
                <Image src={ASSETS.bannerDownArrow} alt="scroll down" width={35} height={34} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InnerHeroLayout({ f }: { f: HeroSectionFields }) {
  const bg = f.backgroundImage ? mapImage(f.backgroundImage) : null

  return (
    <section className="ibanner-main relative pt-[336px] pb-40">
      <div className="ibanner-bg absolute w-full h-full left-0 top-0">
        <div className="ibanner-inside relative h-full after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-[rgba(0,_0,_0,_0.25)]">
          {bg && (
            <Image
              src={bg.url}
              alt={bg.alt || 'Inner banner background'}
              width={bg.width || 1920}
              height={bg.height || 1080}
              className="w-full h-full object-cover"
              priority
            />
          )}
        </div>
      </div>
      <div className="container-1680">
        <div className="ibanner-section relative z-1">
          {f.eyebrow && (
            <div className="inner-banner-subtitle text-center">
              <p className="text-white">{f.eyebrow}</p>
            </div>
          )}
          <div className="ibaner-title text-center -mt-2">
            <h2 className="text-white">{f.title}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureHeroLayout({ f }: { f: HeroSectionFields }) {
  const bg = f.backgroundImage ? mapImage(f.backgroundImage) : null

  return (
    <section
      className={`lifestyle-main relative py-60 min-1400:py-[152px]${!bg ? ' bg-[#1a1a1a]' : ''}`}
    >
      <div className="lifestyle-bg absolute w-full h-full top-0 left-0">
        <div className="lifestyle-bg-inside h-full relative after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[rgba(0,_0,_0,_0.2)]">
          {bg && (
            <Image
              src={bg.url}
              alt={bg.alt || 'Hero background'}
              width={bg.width || 1920}
              height={bg.height || 1080}
              className="w-full h-full object-cover"
              priority
            />
          )}
        </div>
      </div>
      <div className="lifestyle-section relative z-1 max-w-[750px] mx-auto px-15">
        {f.eyebrow && (
          <div className="sub-title sub-title-no-translate mb-[11px]">
            <span className="mx-auto !text-white after:!left-[21px] after:!bg-[url('/assets/images/subtitle-tree-white.svg')]">
              {f.eyebrow}
            </span>
          </div>
        )}
        {f.title && (
          <div className="title text-center">
            <h3 className="font-medium text-white tracking-[2.25px]">{f.title}</h3>
          </div>
        )}
        {f.subtitle && (
          <div className="text text-center mt-12">
            <p className="text-white">{f.subtitle}</p>
          </div>
        )}
        {(f.primaryButtonLabel || f.secondaryButtonLabel) && (
          <div className="lifestyle-btns mt-32 flex flex-wrap justify-center items-center gap-x-24 gap-y-16">
            {f.primaryButtonUrl && f.primaryButtonLabel && (
              <Button
                href={f.primaryButtonUrl}
                label={f.primaryButtonLabel}
                variant="btn-simple-white"
              />
            )}
            {f.secondaryButtonUrl && f.secondaryButtonLabel && (
              <Button
                href={f.secondaryButtonUrl}
                label={f.secondaryButtonLabel}
                variant="btn-white"
              />
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default function HeroSection(f: HeroSectionFields) {
  if (f.style === 'collage') return <CollageLayout f={f} />
  if (f.style === 'innerHero') return <InnerHeroLayout f={f} />
  if (f.style === 'featureHero') return <FeatureHeroLayout f={f} />
  return null
}
