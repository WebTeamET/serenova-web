import { createClient } from 'contentful'
import { contentfulConfig } from '@/config/contentful'

export const contentfulClient = createClient({
  space: contentfulConfig.spaceId,
  accessToken: contentfulConfig.accessToken,
  environment: contentfulConfig.environment,
})

export const contentfulPreviewClient = createClient({
  space: contentfulConfig.spaceId,
  accessToken: contentfulConfig.previewToken!,
  host: 'preview.contentful.com',
  environment: contentfulConfig.environment,
})

export function getClient(preview = false) {
  return preview ? contentfulPreviewClient : contentfulClient
}
