import type { Metadata } from 'next'
import { draftMode, headers } from 'next/headers'
import '@/styles/globals.css'
import 'swiper/css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContentfulPreviewProvider from '@/components/providers/ContentfulPreviewProvider'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import { getSiteHeader } from '@/contentful/header.service'
import { getSiteFooter } from '@/contentful/footer.service'
import { appConfig } from '@/config/app'

export const revalidate = 90

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.url),
  title: {
    default: appConfig.name,
    template: `%s | ${appConfig.name}`,
  },
  description: 'Serenova Resort',
  openGraph: {
    siteName: appConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isEnabled: isPreview } = await draftMode()
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'
  const [headerData, footerData] = await Promise.all([getSiteHeader(), getSiteFooter()])

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <ContentfulPreviewProvider isPreview={isPreview}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:underline"
            >
              Skip to content
            </a>
            {headerData && <Header data={headerData} serverPathname={pathname} />}
            {children}
            {footerData && <Footer data={footerData} />}
          </ContentfulPreviewProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
