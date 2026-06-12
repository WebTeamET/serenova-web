import { sectionRegistry } from './sectionRegistry'
import type { PageSection } from '@/types/section'
import RevealSection from '@/components/ui/RevealSection'

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

  if (section.type === 'heroSection') {
    return <Component {...section.fields} />
  }

  return (
    <RevealSection>
      <Component {...section.fields} />
    </RevealSection>
  )
}
