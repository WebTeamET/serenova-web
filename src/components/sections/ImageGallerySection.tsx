'use client'

import { useState } from 'react'
import Image from 'next/image'
import { mapImage } from '@/contentful/mappers'
import type { ImageGallerySectionFields } from '@/types/sections'

const INITIAL_COUNT = 12
const LOAD_MORE_COUNT = 6

export default function ImageGallerySection(fields: Record<string, unknown>) {
  const f = fields as unknown as ImageGallerySectionFields

  const items = (f.items ?? []).filter((item): item is NonNullable<typeof item> => item != null)

  const filterTags = ['All', ...(f.categories ?? [])]

  const [activeTag, setActiveTag] = useState('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const handleTagClick = (tag: string) => {
    setActiveTag(tag)
    setVisibleCount(INITIAL_COUNT)
  }

  const filteredItems =
    activeTag === 'All' ? items : items.filter((item) => item.fields.category === activeTag)

  const itemsToShow = filteredItems.slice(0, visibleCount)

  return (
    <section className="gallery-main py-60 min-1400:pt-[87px] min-1400:pb-[147px]">
      <div className="container-1648">
        <div className="gallery-section">
          <div className="flex flex-wrap justify-center gap-x-22 gap-y-16 mb-40 min-1400:mb-[67px]">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`btn cursor-pointer normal-case font-normal ${
                  activeTag === tag
                    ? 'btn-gold hover:bg-secondary-800 hover:text-white'
                    : 'btn-gold-simple text-black hover:bg-transparent hover:text-black'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 min-576:grid-cols-2 min-990:grid-cols-3 gap-30 min-1400:gap-42">
            {itemsToShow.map((item, i) => {
              const image = mapImage(item.fields.image)
              return (
                <div key={item.sys?.id ?? i}>
                  {image && (
                    <Image
                      src={image.url}
                      alt={item.fields.altText ?? image.alt}
                      width={image.width || 600}
                      height={image.height || 520}
                      className="w-full h-auto aspect-[1.16/1] object-cover"
                    />
                  )}
                </div>
              )
            })}
          </div>

          {visibleCount < filteredItems.length && (
            <div className="mt-40 min-1400:mt-[67px]">
              <button
                onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
                className="btn btn-gold-simple mx-auto cursor-pointer normal-case"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
