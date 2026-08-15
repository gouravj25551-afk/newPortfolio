import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { profile } from '../data/site'
import { ButtonLink } from './ui/Button'
import { SocialLinks } from './ui/SocialLinks'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const [code, ai, real] = profile.headline.highlight

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-20 sm:px-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.p variants={item} className="eyebrow">
          <Sparkles size={13} aria-hidden="true" />
          {profile.role}
        </motion.p>

        <motion.h1
          variants={item}
          id="hero-heading"
          className="mt-7 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-slate-300/90">{profile.headline.lead}</span>
          <span className="mt-2 block">
            <span className="text-gradient-accent bg-[length:200%_auto]">{code}</span>
            <span className="mx-2 text-faint sm:mx-3">×</span>
            <span className="text-gradient-accent bg-[length:200%_auto]">{ai}</span>
            <span className="mx-2 text-faint sm:mx-3">×</span>
            <span className="text-white">{real}</span>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.subheadline}
        </motion.p>

        <motion.p variants={item} className="mt-4 font-mono text-xs text-faint sm:text-sm">
          {profile.institution}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <ButtonLink href="#projects">
            View Projects
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Let&apos;s Connect
          </ButtonLink>
        </motion.div>

        <motion.div variants={item} className="mt-12">
          <SocialLinks />
        </motion.div>
      </motion.div>

      {/* Scroll cue — decorative, so it stays out of the accessibility tree */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 hidden justify-center sm:flex"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-faint"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.div>
    </section>
  )
}
