'use client'

import { createElement, useEffect, useRef, useState, type ReactNode, type Ref } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref?.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach?.((entry) => {
          if (entry?.isIntersecting) {
            setVisible(true)
            observer?.unobserve?.(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer?.disconnect?.()
  }, [])

  return createElement(
    as,
    {
      ref: ref as Ref<HTMLElement>,
      style: { transitionDelay: `${delay}ms` },
      className: `fade-up ${visible ? 'is-visible' : ''} ${className}`,
    },
    children
  )
}
