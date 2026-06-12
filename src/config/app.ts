export const appConfig = {
  name: 'Serenova',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
}

export const REVALIDATE_SECONDS = 90

export const LAYOUT_REVALIDATE_SECONDS = 3600
