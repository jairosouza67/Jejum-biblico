'use client'

import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type CTAButtonProps = {
  children: ReactNode
  href?: string
  size?: 'default' | 'lg'
  className?: string
  icon?: boolean
  onClick?: () => void
}

export default function CTAButton({
  children,
  href = '#oferta',
  size = 'default',
  className = '',
  icon = true,
  onClick,
}: CTAButtonProps) {
  const sizeClasses =
    size === 'lg'
      ? 'px-8 py-5 text-base sm:text-lg'
      : 'px-6 py-4 text-sm sm:text-base'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.()
    // Allow default anchor navigation for #hash links
    if (href?.startsWith?.('#')) {
      e.preventDefault()
      const target = document?.querySelector?.(href)
      target?.scrollIntoView?.({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`cta-gold group inline-flex items-center justify-center gap-2 font-semibold rounded-md tracking-[0.16em] uppercase ${sizeClasses} ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight
          className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </a>
  )
}
