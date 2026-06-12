import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { Document } from '@contentful/rich-text-types'
import { ASSETS } from '@/config/assets'
import { richTextOptions } from '@/utils/richText'

export default function IntroSection(fields: Record<string, unknown>) {
  const eyebrow = fields.eyebrow as string | undefined
  const title = fields.title as Document | undefined
  const description = fields.description as string | undefined
  const showLeaf = fields.showLeaf !== false

  return (
    <section className="about-main relative py-60 min-1400:py-[92px]">
      {showLeaf && (
        <div className="about-leaf absolute right-0 max-990:hidden min-990:-bottom-40 min-1800:bottom-[-240px] z-0">
          <Image
            src={ASSETS.aboutLeaf}
            alt="leaf"
            width={573}
            height={441}
            className="w-[150px] min-768:w-[200px] min-990:w-[150px] min-1400:w-[250px] min-1800:w-[403px]"
          />
        </div>
      )}
      <div className="px-15 min-1400:max-w-[1375px] min-1600:max-w-[1537px] min-1400:pl-[100px] min-1600:pl-[262px]">
        <div className="about-section relative z-1">
          <div className="about-start">
            {eyebrow && (
              <div className="sub-title sub-title-no-translate mb-[17px]">
                <span className="after:!left-[56px]">{eyebrow}</span>
              </div>
            )}
            {title && (
              <div className="about-title h3-title">
                <h3>{documentToReactComponents(title, richTextOptions)}</h3>
              </div>
            )}
            {description && (
              <div className="about-details max-w-[1090px] min-1600:max-w-[1194px] flex flex-col-reverse min-990:flex-row min-990:justify-end mt-[17px] min-990:mt-34 min-990:items-end gap-20 min-990:gap-[110px] min-1600:gap-[220px]">
                <div className="about-text min-990:max-w-[832px]">
                  <p>{description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
