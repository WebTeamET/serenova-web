export const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT ?? 'master',
}
