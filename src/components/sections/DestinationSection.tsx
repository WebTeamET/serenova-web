'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
const CountUp = dynamic(() => import('react-countup'), { ssr: false })
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { mapImage } from '@/contentful/mappers'
import { ASSETS } from '@/config/assets'
import StaggerReveal from '@/components/ui/StaggerReveal'
import type { DestinationSectionFields } from '@/types/sections'
import { richTextColoredOptions as richTextOptions } from '@/utils/richText'

interface StatPoint {
  count: string
  label: string
}

export default function DestinationSection(f: DestinationSectionFields) {
  const img1 = f.image1 ? mapImage(f.image1) : null
  const img2 = f.image2 ? mapImage(f.image2) : null
  const img3 = f.image3 ? mapImage(f.image3) : null
  const points = Array.isArray(f.stats) ? (f.stats as unknown as StatPoint[]) : []

  return (
    <>
      <section className="places-main relative bg-dark-cream py-60 min-1400:py-[110px]">
        <div className="places-tree absolute bottom-0 left-0 max-990:hidden">
          <img
            loading="lazy"
            src={ASSETS.placesTree}
            alt="tree"
            width={372}
            height={403}
            className="w-[200px] min-1600:w-[250px] min-1800:w-auto"
          />
        </div>
        <div className="container-1605">
          <div className="places-section relative z-1">
            <div className="places-start flex flex-col min-990:flex-row gap-y-30 gap-x-30 min-1400:gap-x-60">
              <div className="places-left min-990:flex-[0_0_calc(48%_-_15px)] min-1400:flex-[0_0_calc(48%_-_30px)]">
                {f.eyebrow && (
                  <div className="sub-title sub-title-no-translate mb-16">
                    <span className="after:!left-[35px]">{f.eyebrow}</span>
                  </div>
                )}
                <div className="title min-990:max-w-[445px] min-1200:max-w-[531px]">
                  <h2 className="h4">
                    {f.title ? documentToReactComponents(f.title, richTextOptions) : null}
                  </h2>
                </div>
                <div className="places-details mt-30 min-1400:mt-50 flex flex-col-reverse min-1400:flex-row min-1400:items-end min-1400:justify-between gap-20">
                  {f.buttonLabel && (
                    <div className="places-btn">
                      <Link href={f.buttonUrl ?? '/'} className="btn btn-gold-simple">
                        {f.buttonLabel}
                      </Link>
                    </div>
                  )}
                  {f.description && (
                    <div className="places-text min-1400:flex-[0_0_380px] min-1600:flex-[0_0_441px] min-1600:pb-12">
                      <p>{f.description}</p>
                    </div>
                  )}
                </div>
                {img1 && (
                  <div className="places-left-img mt-30 min-1400:mt-60 w-full 768:max-990:w-[calc(50%_-_15px)] min-990:w-[50%] min-1400:w-[380px] min-1600:w-[441px] min-990:ml-auto max-990:h-auto max-990:aspect-[1.05/1]">
                    <img
                      loading="lazy"
                      src={img1.url}
                      alt={img1.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>

              {img2 && (
                <div className="places-right min-990:flex-[0_0_calc(52%_-_15px)] min-1400:flex-[0_0_calc(52%_-_30px)]">
                  <div className="places-right-img min-990:h-full">
                    <img
                      loading="lazy"
                      src={img2.url}
                      alt={img2.alt}
                      className="w-full h-auto min-990:h-full object-cover max-990:aspect-[1.05/1] 768:max-990:absolute 768:max-990:w-[calc(50%_-_15px)] 768:max-990:bottom-30 768:max-990:right-0"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="vacation-main bg-dark-cream relative py-60 min-1400:pt-90 min-1400:pb-[110px]">
        <div className="vacation-leaf absolute right-0 -bottom-20 min-1800:bottom-40">
          <img
            loading="lazy"
            src={ASSETS.vacationLeaf}
            alt="leaf"
            width={357}
            height={500}
            className="w-[120px] min-1800:w-auto"
          />
        </div>
        <div className="vacation-inside px-15 min-1600:max-w-[1604px] min-1400:pl-[100px] min-1600:pl-[162px]">
          <div className="vacation-section relative z-1">
            <div className="vacation-start flex flex-col min-990:flex-row gap-y-30 gap-x-40 min-1800:gap-[106px]">
              {img3 && (
                <div className="vacation-left min-990:flex-[0_0_calc(100%_-_500px)] min-1200:flex-[0_0_calc(100%_-_654px)] min-1800:flex-[0_0_calc(100%_-_720px)]">
                  <img
                    loading="lazy"
                    src={img3.url}
                    alt={img3.alt}
                    className="w-full object-cover max-768:w-full"
                  />
                </div>
              )}

              <div className="vacation-right min-990:flex-[0_0_460px] min-1200:flex-[0_0_614px]">
                {f.eyebrow2 && (
                  <div className="sub-title sub-title-no-translate mb-16">
                    <span className="after:!left-[34px]">{f.eyebrow2}</span>
                  </div>
                )}
                {f.title2 && (
                  <div className="title min-990:max-w-[531px]">
                    <h2 className="h4">{f.title2}</h2>
                  </div>
                )}
                {f.description2 && (
                  <div className="text text-with-mutiple-p mt-[25px] mb-30 min-1400:mb-[57px]">
                    {f.description2.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
                {f.buttonUrl2 && (
                  <a href={f.buttonUrl2} className="vacation-arrow inline-block group">
                    <img
                      loading="lazy"
                      src={ASSETS.vacationArrow}
                      alt="arrow"
                      width={38}
                      height={30}
                      className="transition-all duration-500 ease-in-out group-hover:-rotate-90"
                    />
                  </a>
                )}
                {points.length > 0 && (
                  <div className="vacation-data-list mt-30 min-1400:mt-[43px] w-full min-990:max-w-[583px]">
                    <StaggerReveal
                      as="ul"
                      className="flex flex-wrap flex-col min-640:flex-row gap-x-30 min-1600:gap-x-60 gap-y-30 min-1600:gap-y-56"
                    >
                      {points.map((item, index) => (
                        <li
                          key={index}
                          className="min-640:flex-[0_0_261px] min-990:flex-[0_0_calc(50%_-_15px)] min-1600:flex-[0_0_calc(50%_-_30px)]"
                        >
                          <p className="poppins-300-80">
                            <CountUp start={0} end={parseInt(item.count) || 0} duration={3} />
                            <span>{item.count.replace(/\d/g, '') || '+'}</span>
                          </p>
                          <p className="poppins-300-25 pt-18 border-t-[1px] border-solid border-secondary-600">
                            {item.label}
                          </p>
                        </li>
                      ))}
                    </StaggerReveal>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
