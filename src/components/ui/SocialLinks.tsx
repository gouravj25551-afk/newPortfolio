import { Mail } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { motion } from 'framer-motion'
import { socials, type SocialLink } from '../../data/site'
import { GithubIcon, LeetcodeIcon, LinkedinIcon, XIcon } from './BrandIcons'

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  x: XIcon,
  leetcode: LeetcodeIcon,
  email: Mail,
}

type SocialLinksProps = {
  /** `email` is excluded from compact rows (navbar / hero) to keep them tight. */
  includeEmail?: boolean
  size?: 'sm' | 'md'
  className?: string
}

/**
 * A social link only becomes an anchor once a real URL exists. Until then it
 * renders as a disabled control with a hint naming the env var to set, so an
 * unconfigured link is visibly unconfigured rather than silently broken.
 */
function SocialButton({ link, size }: { link: SocialLink; size: 'sm' | 'md' }) {
  const Icon = icons[link.id] ?? Mail
  const box = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11'
  const iconSize = size === 'sm' ? 16 : 18

  const shared = `group inline-flex ${box} items-center justify-center rounded-xl glass transition-all duration-300`

  if (!link.href) {
    return (
      <span
        className={`${shared} cursor-not-allowed opacity-40`}
        title={`${link.label} — not configured yet (${link.placeholderHint})`}
        aria-label={`${link.label} link not configured yet`}
      >
        <Icon width={iconSize} height={iconSize} aria-hidden="true" />
      </span>
    )
  }

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer noopener"
      aria-label={link.label}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 400, damping: 24 }}
      className={`${shared} text-muted hover:border-accent-400/40 hover:bg-accent-500/10 hover:text-white`}
    >
      <Icon width={iconSize} height={iconSize} aria-hidden="true" />
    </motion.a>
  )
}

export function SocialLinks({ includeEmail = false, size = 'md', className = '' }: SocialLinksProps) {
  const items = includeEmail ? socials : socials.filter((s) => s.id !== 'email')

  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {items.map((link) => (
        <li key={link.id}>
          <SocialButton link={link} size={size} />
        </li>
      ))}
    </ul>
  )
}
