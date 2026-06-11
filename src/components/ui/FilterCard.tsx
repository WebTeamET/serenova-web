import Image from 'next/image'
import Link from 'next/link'
import { mapImage } from '@/contentful/mappers'
import { ASSETS } from '@/config/assets'
import type { ListingItemFields } from '@/types/sections'

export default function FilterCard({
  item,
}: {
  item: { sys: { id: string }; fields: ListingItemFields }
}) {
  const image = mapImage(item.fields.image)
  const tags = item.fields.tag ?? []

  return (
    <Link href={item.fields.link ?? '/'} className="filter-card-main group block">
      <div className="filter-card-section flex flex-col min-768:flex-row max-990:items-center min-1200:items-center gap-30 min-1600:gap-52">
        <div className="filter-card-image flex-[0_0_calc(49%_-_15px)] 768:max-1200:flex-[0_0_calc(40%_-_15px)] min-1600:flex-[0_0_calc(49%_-_26px)]">
          <div className="filter-card-image-inside 990:max-1200:h-full relative after:content-[''] after:absolute after:w-full after:h-full after:-top-6 min-990:after:-top-13 after:-left-6 min-990:after:-left-13 after:pointer-events-none after:border-[1px] after:border-solid after:border-[#735C2B] after:transition-all after:duration-300 after:ease-in-out after:opacity-0 group-hover:after:opacity-100">
            {image && (
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width || 800}
                height={image.height || 520}
                className="w-full h-auto 990:max-1200:h-full min-1200:h-auto aspect-[1.54/1] object-cover"
              />
            )}
          </div>
        </div>
        <div className="filter-card-details flex-[0_0_calc(51%_-_15px)] 768:max-1200:flex-[0_0_calc(60%_-_15px)] min-1600:flex-[0_0_calc(51%_-_26px)] flex flex-col justify-center">
          <div className="filter-card-title">
            <h4 className="990:max-1200:text-30">{item.fields.title}</h4>
          </div>
          {tags.length > 0 && (
            <div className="filter-card-tags my-12 min-1200:mb-[21px]">
              <ul className="flex flex-wrap items-center gap-y-4 gap-x-12">
                {tags.map((tag, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <Image src={ASSETS.filterTagTick} alt="tick" width={22} height={22} />
                    <p className="text-black">{tag}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="filter-card-text">
            <p className="text-grey-400 990:max-1200:leading-150p">{item.fields.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
