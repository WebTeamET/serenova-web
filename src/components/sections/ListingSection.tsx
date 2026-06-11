'use client'

import { useState } from 'react'
import FilterCard from '@/components/ui/FilterCard'
import type { ListingSectionFields } from '@/types/sections'

export default function ListingSection(fields: Record<string, unknown>) {
  const f = fields as unknown as ListingSectionFields

  const items = (f.items ?? []).filter((item): item is NonNullable<typeof item> => item != null)

  // Category field is stored as "Cat1 / Cat2" — split to support multi-category filtering
  const categories = [
    'All',
    ...Array.from(
      new Set(
        items.flatMap((item) =>
          item.fields.category ? item.fields.category.split(' / ').map((c) => c.trim()) : []
        )
      )
    ),
  ]

  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems =
    activeFilter === 'All'
      ? items
      : items.filter((item) => {
          const itemCats = item.fields.category
            ? item.fields.category.split(' / ').map((c) => c.trim())
            : []
          return itemCats.includes(activeFilter)
        })

  return (
    <section className="filter-list-main py-60 min-1400:pt-[83px] min-1400:pb-[147px]">
      <div
        className={`filter-list-container px-15 ${f.showFilters ? 'min-1600:pl-[120px]' : 'min-1600:pl-[260px]'} min-1600:max-w-[1472px]`}
      >
        <div className="filter-list-section">
          <div
            className={`filter-list-start flex flex-col min-990:flex-row gap-40 min-1600:gap-[102px] ${f.showFilters ? '' : '990:max-1600:justify-center'}`}
          >
            {f.showFilters && (
              <div className="filters min-990:flex-[0_0_182px] flex flex-col max-990:flex-row max-990:flex-wrap gap-x-20 gap-y-20 min-990:gap-y-32">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`${cat === activeFilter ? 'active btn-gold hover:text-white hover:bg-secondary-800' : 'btn-gold-simple text-black hover:text-white'} btn font-normal normal-case cursor-pointer min-w-[112px]`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
            <div className="card-list flex flex-col gap-x-30 gap-y-40 min-1600:gap-y-62">
              {filteredItems.map((item, i) => (
                <FilterCard key={item.sys?.id ?? i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
