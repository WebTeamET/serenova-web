import type { Metadata } from 'next'
import '@/styles/globals.css'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import Footer from '@/components/layout/Footer'
import { getSiteHeader } from '@/contentful/header.service'
import { getSiteFooter } from '@/contentful/footer.service'

export const metadata: Metadata = {
  title: 'Serenova',
  description: 'Serenova Resort',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
        {headerData && <HeaderWrapper data={headerData} />}
        {children}
        {footerData && <Footer data={footerData} />}
      </body>
    </html>
  )
}
