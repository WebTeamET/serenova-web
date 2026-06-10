import { sectionRegistry } from './sectionRegistry'
import type { PageSection } from '@/types/section'

interface SectionRendererProps {
  section: PageSection
}

export function SectionRenderer({ section }: SectionRendererProps) {
  const Component = sectionRegistry[section.type]

  if (!Component) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`No component registered for section type: "${section.type}"`)
    }
    return null
  }

  return <Component {...section.fields} />
}
