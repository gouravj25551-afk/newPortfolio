import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger offset in seconds, for lists of sibling Reveals. */
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article' | 'span'
}

/**
 * Fade + lift an element the first time it scrolls into view.
 * Framer's MotionConfig (see App.tsx) neutralises the transform for visitors
 * who prefer reduced motion, so this stays safe to use everywhere.
 */
export function Reveal({ children, delay = 0, y = 20, className, as = 'div' }: RevealProps) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
