import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent-500 to-violet-500 text-white shadow-lg shadow-accent-600/25 hover:shadow-xl hover:shadow-accent-600/35 hover:brightness-110',
  secondary:
    'glass text-slate-100 glass-hover hover:text-white',
  ghost:
    'border border-transparent text-muted hover:border-white/10 hover:bg-white/5 hover:text-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
}

const shell =
  'group inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  ariaLabel?: string
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className={`${shell} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}

type DisabledButtonProps = {
  children: ReactNode
  /** Explains why the control is inert — e.g. which env var is missing. */
  reason: string
  size?: Size
  className?: string
}

/** Placeholder control shown when a URL hasn't been provided yet. */
export function DisabledButton({ children, reason, size = 'md', className = '' }: DisabledButtonProps) {
  return (
    <button
      type="button"
      disabled
      title={reason}
      className={`${shell} ${variants.secondary} ${sizes[size]} ${className}`}
    >
      {children}
      <span className="sr-only"> — {reason}</span>
    </button>
  )
}
