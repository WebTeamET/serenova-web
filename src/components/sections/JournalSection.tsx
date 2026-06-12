'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import { ASSETS } from '@/config/assets'
import StaggerReveal from '@/components/ui/StaggerReveal'
import type { JournalSectionFields } from '@/types/sections'

interface JournalItemJson {
  title: string
  category: string
  image: string
  alt: string
  publishedDate: string
  commentsCount?: number
  url?: string
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function JournalSection(f: JournalSectionFields) {
  const items = ((f.journalItem as unknown as JournalItemJson[] | undefined) ?? []).filter(
    (item) => !!item.title
  )

  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <section
      className={`journal-main relative py-80 min-1400:pt-[147px] min-1400:pb-[204px] ${isHome ? '' : 'bg-cream'}`}
    >
      <div className="journal-leaf absolute top-0 left-0">
        <Image
          src={ASSETS.journalLeaf}
          alt="leaf"
          width={315}
          height={234}
          className="w-[120px] min-768:w-[200px] min-1400:w-auto"
        />
      </div>
      {isHome && (
        <div className="journal-tree absolute bottom-0 min-1400:bottom-52 right-0">
          <Image
            src={ASSETS.journalTree}
            alt="tree"
            width={229}
            height={263}
            className="w-[80px] min-576:w-[120px] min-1400:w-auto"
          />
        </div>
      )}
      <div className="container-1320">
        <div className="journal-section relative z-1">
          <div className="journal-start">
            {f.eyebrow && (
              <div className="sub-title sub-title-no-translate mb-17">
                <span className="mx-auto after:!left-30">{f.eyebrow}</span>
              </div>
            )}
            <div className="title text-center">
              <h2 className="h4">{f.title}</h2>
            </div>

            <StaggerReveal className="journal-list grid grid-cols-1 min-576:grid-cols-2 min-990:grid-cols-3 min-1200:grid-cols-4 gap-x-32 gap-y-32 mt-40 min-1400:mt-[51px]">
              {items.map((item, index) => (
                <div key={index} className="journal-card-main">
                  <Link href={item.url ?? '/'} className="journal-card-section group block">
                    <div className="journal-card-img transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:w-[calc(100%_-_8px)] after:h-[calc(100%_+_16px)] after:left-0 after:top-[-8px] after:border-[1px] after:border-solid after:border-secondary-800 after:opacity-0 group-hover:pl-8 group-hover:after:opacity-100">
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.alt || item.title}
                        className="w-full h-auto aspect-[4/3] object-cover transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div className="journal-card-below mt-16">
                      <div className="journal-card-subtitle mb-8">
                        <p className="leading-118p75p text-primary-800">{item.category}</p>
                      </div>
                      <div className="journal-card-title">
                        <p className="poppins-300-20">{item.title}</p>
                      </div>
                      <div className="journal-card-list mt-16">
                        <ul className="flex flex-wrap gap-y-8 gap-x-24">
                          <li className="poppins-400-14 relative after:content-[''] after:absolute after:top-50p after:translate-y-50mp after:right-[-14px] after:w-[3px] after:h-[3px] after:rounded-50p after:bg-secondary-600">
                            {formatDate(item.publishedDate)}
                          </li>
                          {item.commentsCount != null && (
                            <li className="poppins-400-14">{item.commentsCount} Comments</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </StaggerReveal>

            {f.buttonLabel && (
              <div className="journal-btn mt-[43px]">
                <Button href={f.buttonUrl ?? '/'} label={f.buttonLabel} className="mx-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
