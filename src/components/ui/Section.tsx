import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
  /** Centres the header block — used for the wider, statement-style sections. */
  centered?: boolean
}

/**
 * Standard section shell: consistent rhythm, max width and heading structure.
 * Every section is a landmark with its heading wired up via aria-labelledby.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  centered = false,
}: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-32 ${className}`}
    >
      <header className={`mb-12 max-w-2xl sm:mb-16 ${centered ? 'mx-auto text-center' : ''}`}>
        {eyebrow && (
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h2
            id={headingId}
            className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
          </Reveal>
        )}
      </header>

      {children}
    </section>
  )
}
