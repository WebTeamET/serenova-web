import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { mapImage } from '@/contentful/mappers'
import { ASSETS } from '@/config/assets'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { MARKS } from '@contentful/rich-text-types'
import type { Document } from '@contentful/rich-text-types'
import type { ReactNode } from 'react'
import type { OfferSectionFields } from '@/types/sections'

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <span>{text}</span>,
  },
}

function WhatWeDoLayout({ f }: { f: OfferSectionFields }) {
  const img1 = mapImage(f.image1)
  const img2 = f.image2 ? mapImage(f.image2) : null
  const wheel = f.wheelImage ? mapImage(f.wheelImage) : null
  const points = f.points ?? []

  return (
    <section className="do-main relative py-60 min-1400:py-[87px]">
      <div className="do-leaf absolute left-0 bottom-0 min-1400:bottom-[-100px] max-990:hidden">
        <Image
          src={ASSETS.weDoLeaf}
          alt="leaf"
          width={281}
          height={297}
          className="w-[120px] min-1400:w-auto"
        />
      </div>
      <div className="container-1335">
        <div className="do-section relative z-1">
          <div className="do-start">
            <div className="do-above flex flex-col min-768:flex-row gap-y-30 gap-x-40 min-1400:gap-[93px]">
              <div className="do-above-left min-768:flex-[0_0_350px] min-1400:flex-[0_0_470px]">
                <div className="do-above-left-inside relative">
                  {img1 && (
                    <Image
                      src={img1.url}
                      alt={img1.alt}
                      width={img1.width || 470}
                      height={img1.height || 560}
                      className="w-[calc(100%_-_40px)] min-768:w-full object-cover"
                    />
                  )}
                  {wheel && (
                    <Link href={f.wheelImageLink ?? '/'}>
                      <Image
                        src={wheel.url}
                        alt={wheel.alt}
                        width={185}
                        height={185}
                        className="img-wheel absolute w-100 min-1400:w-[185px] h-auto aspect-square right-20 min-768:-right-30 min-990:-right-40 min-1400:right-[-92px] -bottom-40 min-768:-bottom-30 min-990:-bottom-40 min-1400:bottom-[-92px]"
                      />
                    </Link>
                  )}
                </div>
              </div>
              <div className="do-above-right min-768:flex-[0_0_calc(100%_-_390px)] min-1400:flex-[0_0_calc(100%_-_611px)]">
                <div className="sub-title sub-title-no-translate mb-16">
                  <span className="after:!left-[23px]">{f.eyebrow}</span>
                </div>
                <div className="title">
                  <h2 className="h4">
                    {f.title
                      ? documentToReactComponents(f.title as unknown as Document, richTextOptions)
                      : null}
                  </h2>
                </div>
                {f.description && (
                  <div className="text mt-22">
                    <p>{f.description}</p>
                  </div>
                )}
                {f.buttonLabel && (
                  <div className="do-above-btn mt-22 min-1400:mt-32">
                    <Link href={f.buttonUrl ?? '/'} className="btn btn-gold-simple">
                      {f.buttonLabel}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="do-below flex flex-col-reverse min-768:flex-row min-768:justify-between min-768:items-center gap-30 min-990:-mt-30 min-1400:mt-[-100px] max-990:mt-40">
              <div className="do-below-left">
                <div className="do-below-list correct-ul best-list min-990:pt-22">
                  <ul>
                    {points.map((point, i) => (
                      <li key={i} className="text-black">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="do-below-right min-768:flex-[0_0_calc(100%_-_390px)] min-990:flex-[0_0_calc(100%_-_420px)] min-1400:flex-[0_0_701px]">
                {img2 && (
                  <Image
                    src={img2.url}
                    alt={img2.alt}
                    width={img2.width || 701}
                    height={img2.height || 470}
                    className="w-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OfferLayout({ f }: { f: OfferSectionFields }) {
  const image1Mapped = f.image1 ? mapImage(f.image1) : null
  const image2Mapped = f.image2 ? mapImage(f.image2) : null

  return (
    <section className="offer-main relative overflow-hidden py-60 min-990:pt-60 min-990:pb-120 min-1400:pt-[148px] min-1400:pb-[180px]">
      <div className="offer-leaf absolute top-[-15px] right-0">
        <Image
          src={ASSETS.offerLeaf}
          alt="leaf"
          width={230}
          height={269}
          className="w-[100px] min-990:w-[150px] min-1400:w-auto"
        />
      </div>
      <div className="offer-bench absolute bottom-0 min-1400:bottom-28 left-0">
        <Image
          src={ASSETS.offerBench}
          alt="bench"
          width={273}
          height={213}
          className="w-[150px] min-1400:w-auto"
        />
      </div>
      <div className="container-1610">
        <div className="offer-section relative z-1">
          <div className="offer-inside flex flex-col min-990:flex-row gap-22">
            <div className="offer-left min-990:flex-[0_0_calc(54%_-_11px)]">
              {f.eyebrow && (
                <div className="sub-title mb-17">
                  <span>{f.eyebrow}</span>
                </div>
              )}
              {f.title && (
                <div className="offer-title h3-title">
                  <h3>
                    {documentToReactComponents(f.title as unknown as Document, richTextOptions)}
                  </h3>
                </div>
              )}
              {f.description && (
                <div className="offer-text mt-25 max-w-[751px]">
                  <p>{f.description}</p>
                </div>
              )}
              {f.buttonUrl && f.buttonLabel && (
                <div className="offer-btn mt-25 min-1400:mt-42">
                  <Button href={f.buttonUrl} label={f.buttonLabel} variant="btn-gold-simple" />
                </div>
              )}
            </div>
            <div className="offer-right min-990:flex-[0_0_calc(46%_-_11px)] pt-40 min-990:pt-[57px]">
              <div className="offer-images">
                {image1Mapped && (
                  <div className="offer-image w-[57%] relative after:content-[''] after:absolute after:w-full after:h-full after:top-[-13px] after:right-[-13px] after:border-[2px] after:border-solid after:border-secondary-800 after:pointer-events-none">
                    <Image
                      src={image1Mapped.url}
                      alt={image1Mapped.alt || 'Offer image 1'}
                      width={image1Mapped.width || 800}
                      height={image1Mapped.height || 800}
                      className="w-full h-auto aspect-square object-cover"
                    />
                  </div>
                )}
                {image2Mapped && (
                  <div className="offer-image w-[57%] ml-auto mt-[-30%]">
                    <Image
                      src={image2Mapped.url}
                      alt={image2Mapped.alt || 'Offer image 2'}
                      width={image2Mapped.width || 800}
                      height={image2Mapped.height || 800}
                      className="w-full h-auto aspect-square object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OfferSection(fields: Record<string, unknown>) {
  const f = fields as unknown as OfferSectionFields

  if (f.variant === 'ZigZag') {
    return <WhatWeDoLayout f={f} />
  }

  return <OfferLayout f={f} />
}
