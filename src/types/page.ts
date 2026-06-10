import type { SEO } from './seo'
import type { PageSection } from './section'

export interface Page {
  id: string
  title: string
  slug: string
  seo: SEO
  sections: PageSection[]
}
