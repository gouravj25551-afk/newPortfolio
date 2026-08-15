import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/site'
import { SocialLinks } from './ui/SocialLinks'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // Condense the bar once the hero starts scrolling away.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      // Back in the hero, nothing in the nav is current.
      if (window.scrollY < 120) setActive('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight whichever section currently owns the upper half of the viewport.
  useEffect(() => {
    const sections = nav
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock the page behind the mobile sheet, and let Escape close it.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
            scrolled
              ? 'my-2 max-w-5xl rounded-2xl border border-white/10 bg-ink-950/70 py-3 glass-blur'
              : 'my-0 max-w-7xl border border-transparent py-5'
          }`}
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5 rounded-lg"
            aria-label={`${profile.name} — back to top`}
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-500 to-violet-500 font-mono text-sm font-bold text-white">
              G
            </span>
            <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors duration-200 ${
                    active === item.id ? 'text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg border border-white/10 bg-white/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <SocialLinks size="sm" className="hidden md:flex" />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-xl glass glass-hover text-white lg:hidden"
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink-950/80 glass-blur lg:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col justify-center px-8"
            >
              <ul className="space-y-1">
                {nav.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index + 0.05, duration: 0.35 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/5 py-4 text-2xl font-medium text-slate-200 transition-colors hover:text-white"
                    >
                      <span className="mr-3 font-mono text-xs text-accent-400">
                        0{index + 1}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <SocialLinks includeEmail />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
