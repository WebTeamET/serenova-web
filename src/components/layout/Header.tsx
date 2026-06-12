'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { SiteHeaderData } from '@/contentful/header.service'

interface HeaderProps {
  data: SiteHeaderData
}

export default function Header({ data }: HeaderProps) {
  const pathname = usePathname()
  const isInside = pathname !== '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const logo = isInside ? data.logoDark : data.logoLight
  const logoFallback = isInside ? data.logoLight : data.logoDark

  return (
    <header className={`${isInside ? 'absolute w-full' : 'relative'} header py-20 z-9`}>
      <div className="container-1680">
        <div className="header-start">
          <div className="header-above flex justify-between items-center gap-20">
            <div className="header-logo">
              <Link href={data.logoUrl}>
                <img src={logo || logoFallback} alt={data.logoAlt} width={94} height={108} />
              </Link>
            </div>

            <div
              id="main-nav"
              className={`
              header-menu min-1200:block
              ${isMenuOpen ? 'block fixed top-0 left-0 w-full h-[100dvh] bg-body z-9 overflow-auto' : 'hidden'}
              min-1200:static min-1200:bg-transparent
            `}
            >
              <ul className="flex min-1200:flex-wrap flex-col min-1200:flex-row justify-center items-center gap-y-12 gap-x-16 min-1400:gap-x-24 min-1600:gap-x-[47px] max-1200:h-full max-1200:p-20">
                {data.navLinks.map((item) => {
                  const isActive = pathname === item.slug
                  return (
                    <li key={item.id} className="1200:max-1600:text-15 leading-150p font-light">
                      <Link
                        href={item.slug}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => setIsMenuOpen(false)}
                        className={`nav-link text-black hover:text-secondary-800
                          ${isInside ? 'min-1200:text-white min-1200:hover:text-black' : 'min-1200:text-black min-1200:hover:text-secondary-800'}
                          ${isActive ? 'active' : ''}
                        `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
                <li className="book-now-btn min-1200:hidden">
                  <Link
                    href={data.ctaUrl}
                    target={data.ctaOpenNewTab ? '_blank' : undefined}
                    rel={data.ctaOpenNewTab ? 'noopener noreferrer' : undefined}
                    className="btn btn-gold-simple"
                  >
                    {data.ctaLabel}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="book-now-btn max-1200:hidden">
              <Link
                href={data.ctaUrl}
                target={data.ctaOpenNewTab ? '_blank' : undefined}
                rel={data.ctaOpenNewTab ? 'noopener noreferrer' : undefined}
                className={`btn ${isInside ? 'btn-simple-white' : 'btn-gold-simple'}`}
              >
                {data.ctaLabel}
              </Link>
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="main-nav"
              className="header-hamburger min-1200:hidden max-1200:relative max-1200:z-99 flex flex-col gap-10 cursor-pointer bg-transparent border-0 p-0"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span
                className={`inline-block w-[25px] h-[2px] ml-auto transition-all duration-300
                ${isMenuOpen ? 'bg-black w-[45px] rotate-45 translate-y-[17px]' : isInside ? 'bg-white' : 'bg-black'}
              `}
              />
              <span
                className={`inline-block w-[38px] h-[2px] ml-auto transition-all duration-300
                ${isMenuOpen ? 'bg-black opacity-0' : isInside ? 'bg-white' : 'bg-black'}
              `}
              />
              <span
                className={`inline-block w-[45px] h-[2px] ml-auto transition-all duration-300
                ${isMenuOpen ? 'bg-black -rotate-45 -translate-y-[6px]' : isInside ? 'bg-white' : 'bg-black'}
              `}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
