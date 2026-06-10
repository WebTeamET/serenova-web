import Image from 'next/image'
import Link from 'next/link'
import { mapImage } from '@/contentful/mappers'
import type { TourItemFields } from '@/types/sections'

export default function TourCard({
  item,
}: {
  item: { sys: { id: string }; fields: TourItemFields }
}) {
  const image = mapImage(item.fields.image)

  const details = [
    item.fields.duration ? { label: 'Duration', value: item.fields.duration } : null,
    item.fields.includes ? { label: 'Includes', value: item.fields.includes } : null,
    item.fields.guide ? { label: 'Guide', value: item.fields.guide } : null,
  ].filter((d): d is { label: string; value: string } => d != null)

  return (
    <div className="tour-card-main">
      <Link href="/" className="tour-card-section block hover:scale-[1.01]">
        {image && (
          <div className="tour-card-img">
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width || 600}
              height={image.height || 450}
              className="w-full h-auto aspect-[1.34/1] object-cover"
            />
          </div>
        )}
        <div className="tour-card-below bg-body px-[35px] py-22">
          <div className="tour-card-title">
            <p className="teachers-400-19">{item.fields.title}</p>
          </div>
          {item.fields.category && (
            <div className="tour-card-subtitle mt-[5px]">
              <p className="leading-125p text-secondary-600">{item.fields.category}</p>
            </div>
          )}
          {details.length > 0 && (
            <div className="tour-card-list mt-16">
              <ul>
                {details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-14 min-1400:text-16 leading-175p flex justify-between items-center gap-4 py-[7px] border-b-[1px] border-solid border-secondary-600 first:pt-0 last:pb-0 last:border-b-0"
                  >
                    <p className="text-black">{detail.label}</p>
                    <p className="text-secondary-700 text-right">{detail.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
