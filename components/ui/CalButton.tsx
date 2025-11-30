'use client'

import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

declare global {
  interface Window {
    Cal: any
  }
}

interface CalButtonProps {
  calLink: '1-hour-meeting' | '15min' | '30min'
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export const CalButton = ({
  calLink,
  children,
  className = '',
  variant = 'primary'
}: CalButtonProps) => {
  useEffect(() => {
    // Wait for Cal script to load and initialize
    const initCal = () => {
      if (typeof window !== 'undefined' && window.Cal) {
        try {
          window.Cal('init', { origin: 'https://app.cal.com' })
        } catch (error) {
          console.error('Cal init error:', error)
        }
      } else {
        // Retry if Cal is not loaded yet
        setTimeout(initCal, 100)
      }
    }

    initCal()
  }, [])

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Cal) {
      try {
        window.Cal('openModal', {
          calLink: `dhyz.agency/${calLink}`,
          config: {
            theme: 'dark'
          }
        })
      } catch (error) {
        console.error('Cal open modal error:', error)
        // Fallback to direct link
        window.open(`https://cal.com/dhyz.agency/${calLink}`, '_blank')
      }
    } else {
      // Fallback if Cal is not loaded
      window.open(`https://cal.com/dhyz.agency/${calLink}`, '_blank')
    }
  }

  const baseStyles = "font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"

  const variantStyles = {
    primary: "w-full bg-white text-black py-4 hover:bg-grey-300",
    secondary: "px-10 py-5 bg-white text-black text-sm uppercase tracking-wider rounded-sm hover:bg-grey-100"
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      data-cal-link={`dhyz.agency/${calLink}`}
      data-cal-config='{"theme":"dark"}'
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children || (
        <>
          Book Free Consultation
          <ArrowRight size={18} />
        </>
      )}
    </button>
  )
}

interface CalLinkProps {
  calLink: '1-hour-meeting' | '15min' | '30min'
  children: React.ReactNode
  className?: string
}

export const CalLink = ({ calLink, children, className = '' }: CalLinkProps) => {
  useEffect(() => {
    const initCal = () => {
      if (typeof window !== 'undefined' && window.Cal) {
        try {
          window.Cal('init', { origin: 'https://app.cal.com' })
        } catch (error) {
          console.error('Cal init error:', error)
        }
      } else {
        setTimeout(initCal, 100)
      }
    }

    initCal()
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.Cal) {
      try {
        window.Cal('openModal', {
          calLink: `dhyz.agency/${calLink}`,
          config: {
            theme: 'dark'
          }
        })
      } catch (error) {
        console.error('Cal open modal error:', error)
        window.open(`https://cal.com/dhyz.agency/${calLink}`, '_blank')
      }
    } else {
      window.open(`https://cal.com/dhyz.agency/${calLink}`, '_blank')
    }
  }

  return (
    <a
      href={`https://cal.com/dhyz.agency/${calLink}`}
      onClick={handleClick}
      data-cal-link={`dhyz.agency/${calLink}`}
      data-cal-config='{"theme":"dark"}'
      className={className}
    >
      {children}
    </a>
  )
}
