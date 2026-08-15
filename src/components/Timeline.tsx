import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { timeline } from '../data/site'
import { Section } from './ui/Section'

export function Timeline() {
  const trackRef = useRef<HTMLOListElement>(null)

  // The accent line fills as the list scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 75%', 'end 60%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 })

  return (
    <Section
      id="journey"
      eyebrow="Journey"
      title="How I got here"
      description="No exact dates — just the order things happened in, and what each step unlocked."
    >
      <div className="relative">
        {/* Rail */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[7px] w-px bg-white/10 sm:left-[11px]"
        />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: progress }}
          className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-gradient-to-b from-accent-400 via-violet-400 to-transparent sm:left-[11px]"
        />

        <ol ref={trackRef} className="space-y-9 sm:space-y-11">
          {timeline.map((milestone, index) => (
            <motion.li
              key={milestone.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative pl-9 sm:pl-14"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 grid h-[15px] w-[15px] place-items-center rounded-full border border-white/20 bg-ink-900 transition-colors duration-300 group-hover:border-accent-400 sm:h-[23px] sm:w-[23px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400 transition-transform duration-300 group-hover:scale-150 sm:h-2 sm:w-2" />
              </span>

              <span className="font-mono text-[11px] tracking-widest text-faint">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1.5 text-lg font-semibold text-white sm:text-xl">
                {milestone.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {milestone.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
