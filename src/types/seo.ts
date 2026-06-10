export interface SEO {
  title: string
  description: string
  image?: {
    url: string
    alt: string
  }
  noIndex?: boolean
}
