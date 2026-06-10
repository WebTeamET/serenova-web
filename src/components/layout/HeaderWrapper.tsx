'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import type { SiteHeaderData } from '@/contentful/header.service'

export default function HeaderWrapper({ data }: { data: SiteHeaderData }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return <Header data={data} type={isHome ? 'default' : 'inside'} />
}
