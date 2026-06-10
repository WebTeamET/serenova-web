import Image from 'next/image'
import Button from '@/components/ui/Button'
import { mapImage } from '@/contentful/mappers'
import { ASSETS } from '@/config/assets'
import type { OfferSectionFields } from '@/types/sections'

export default function OfferSection(fields: Record<string, unknown>) {
  const f = fields as unknown as OfferSectionFields

  const image1Mapped = f.image1 ? mapImage(f.image1) : null
  const image2Mapped = f.image2 ? mapImage(f.image2) : null

  return (
    <section className="offer-main relative overflow-hidden py-60 min-990:pt-60 min-990:pb-120 min-1400:pt-[148px] min-1400:pb-[180px]">
      {/* Leaf Asset */}
      <div className="offer-leaf absolute top-[-15px] right-0">
        <Image
          src={ASSETS.offerLeaf}
          alt="leaf"
          width={230}
          height={269}
          className="w-[100px] min-990:w-[150px] min-1400:w-auto"
        />
      </div>

      {/* Bench Asset */}
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
            {/* Left Content Column */}
            <div className="offer-left min-990:flex-[0_0_calc(54%_-_11px)]">
              {f.eyebrow && (
                <div className="sub-title mb-17">
                  <span>{f.eyebrow}</span>
                </div>
              )}
              {f.title && (
                <div className="offer-title h3-title">
                  <h3 dangerouslySetInnerHTML={{ __html: f.title }}></h3>
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
