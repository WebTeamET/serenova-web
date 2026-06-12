'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Tag = 'div' | 'ul'

interface Props {
  children: React.ReactNode
  className?: string
  as?: Tag
}

export default function StaggerReveal({ children, className, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = Array.from(el.children)
    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement & HTMLUListElement>} className={className}>
      {children}
    </Tag>
  )
}
