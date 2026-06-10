import { SectionRenderer } from './SectionRenderer'
import type { PageSection } from '@/types/section'

interface PageRendererProps {
  sections: PageSection[]
}

export function PageRenderer({ sections }: PageRendererProps) {
  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  )
}
