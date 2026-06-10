'use client'

import { useRef, useState, Fragment } from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import type { Document, Text as RichTextNode } from '@contentful/rich-text-types'
import Button from '@/components/ui/Button'
import { mapImage } from '@/contentful/mappers'
import { ASSETS } from '@/config/assets'
import type { AboutSectionFields } from '@/types/sections'

function renderHeading(doc: Document) {
  if (!doc?.content) return null
  const paragraphs = doc.content.filter((n) => n.nodeType === 'paragraph')
  return paragraphs.map((para, pIdx) => (
    <Fragment key={pIdx}>
      {'content' in para &&
        para.content?.map((node, nIdx) => {
          const text = node as RichTextNode
          const isBold = text.marks?.some((m) => m.type === 'bold')
          return isBold ? (
            <span key={nIdx}>{text.value}</span>
          ) : (
            <Fragment key={nIdx}>{text.value}</Fragment>
          )
        })}
      {pIdx < paragraphs.length - 1 && <br />}
    </Fragment>
  ))
}

const bodyOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => <>{children}</>,
  },
}

function VideoCard({ asset }: { asset: NonNullable<AboutSectionFields['experiencesVideo']> }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showOverlay, setShowOverlay] = useState(true)

  const rawUrl = asset.fields?.file?.url as string | undefined
  if (!rawUrl) return null
  const src = rawUrl.startsWith('//') ? `https:${rawUrl}` : rawUrl

  return (
    <div className="video-wrapper" onMouseEnter={() => videoRef.current?.play()}>
      {showOverlay && (
        <div className="video-overlay">
          <div className="pause-icon">
            <img src={ASSETS.bestPause} alt="pause" width={50} height={51} />
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        poster={ASSETS.videoPlaceholder}
        onPlay={() => setShowOverlay(false)}
        onEnded={() => {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
            videoRef.current.load()
          }
          setShowOverlay(true)
        }}
      />
    </div>
  )
}

export default function AboutSection(fields: Record<string, unknown>) {
  const f = fields as unknown as AboutSectionFields
  const img0 = mapImage(f.images?.[0] ?? undefined)
  const img1 = mapImage(f.images?.[1] ?? undefined)

  return (
    <>
      {/* About section */}
      <section className="about-main relative bg-dark-cream py-60 min-1400:py-[92px]">
        <div className="about-leaf absolute right-0 top-20 min-990:top-60 min-1400:top-100 z-0">
          <Image
            src={ASSETS.aboutLeaf}
            alt="leaf"
            width={573}
            height={441}
            className="w-[150px] min-768:w-[200px] min-990:w-[250px] min-1400:w-[450px] min-1600:w-auto"
          />
        </div>
        <div className="container-1610">
          <div className="about-section relative z-1">
            <div className="about-start">
              <div className="sub-title sub-title-no-translate mb-[17px]">
                <span className="after:!left-[19px]">{f.eyebrow}</span>
              </div>
              <div className="about-title h3-title">
                <h3>{f.heading ? renderHeading(f.heading) : null}</h3>
              </div>
              <div className="about-details max-w-[1090px] min-1600:max-w-[1194px] flex flex-col-reverse min-990:flex-row min-990:justify-between mt-[17px] min-990:mt-[-8px] min-990:items-end gap-20 min-990:gap-[110px] min-1600:gap-[220px]">
                {f.ctaLabel && (
                  <div className="about-btn flex-[0_0_auto]">
                    <Button href={f.ctaUrl ?? '/about'} label={f.ctaLabel} />
                  </div>
                )}
                <div className="about-text">
                  <p>{f.body ? documentToReactComponents(f.body, bodyOptions) : null}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best / Experiences section */}
      <section className="best-main relative bg-dark-cream py-60 min-1400:py-[130px]">
        <div className="best-bird max-990:hidden absolute top-30 min-1400:top-[83px] right-[49px] z-0">
          <Image src={ASSETS.bestBird} alt="birds" width={183} height={77} />
        </div>
        <div className="best-tree absolute bottom-0 min-990:bottom-[-20px] min-1600:bottom-[-70px] right-0 z-0">
          <Image
            src={ASSETS.bestTree}
            alt="tree"
            width={393}
            height={507}
            className="w-[120px] min-576:w-[200px] min-1400:w-[300px] min-1600:w-auto"
          />
        </div>
        <div className="container-1610">
          <div className="best-section relative z-1">
            <div className="best-start flex flex-col min-990:flex-row items-center gap-y-30">
              <div className="best-left min-990:flex-[0_0_46%] min-1200:flex-[0_0_54%] flex flex-wrap gap-20 min-1200:gap-30">
                {img0 && (
                  <div className="best-img flex-[0_0_calc(50%_-_15px)]">
                    <Image
                      src={img0.url}
                      alt={img0.alt}
                      width={img0.width || 600}
                      height={img0.height || 400}
                      className="w-full h-auto aspect-[0.68/1]"
                    />
                  </div>
                )}
                <div className="best-img flex-[0_0_calc(50%_-_15px)]">
                  {f.experiencesVideo ? (
                    <VideoCard asset={f.experiencesVideo} />
                  ) : img1 ? (
                    <Image
                      src={img1.url}
                      alt={img1.alt}
                      width={img1.width || 600}
                      height={img1.height || 400}
                      className="w-full h-auto aspect-[0.68/1]"
                    />
                  ) : null}
                </div>
              </div>
              <div className="best-right relative min-990:flex-[0_0_54%] min-1200:flex-[0_0_46%] pl-0 min-990:pl-20 min-1200:pl-30 min-1600:pl-[121px]">
                <div className="best-bird min-990:hidden absolute top-10 right-10 min-768:right-[49px] z-0">
                  <Image
                    src={ASSETS.bestBird}
                    alt="birds"
                    width={183}
                    height={77}
                    className="w-[100px] min-576:w-[150px]"
                  />
                </div>
                <div className="sub-title sub-title-no-translate mb-16">
                  <span className="after:!left-[40px]">{f.experiencesEyebrow}</span>
                </div>
                <div className="best-title">
                  <h2 className="h4">{f.experiencesHeading}</h2>
                </div>
                <div className="best-text mt-15">
                  <p>{f.experiencesBody}</p>
                </div>
                <div className="best-list correct-ul mt-16 min-1600:mt-32">
                  <ul>
                    {(f.experiencesList ?? []).map((item, i) => (
                      <li key={i} className="text-black">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {f.experiencesCtaLabel && (
                  <div className="best-btn mt-24 min-1600:mt-42">
                    <Button href={f.experiencesCtaUrl ?? '/'} label={f.experiencesCtaLabel} />
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
