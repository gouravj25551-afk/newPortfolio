import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import { problemSolving } from '../data/site'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'
import { Counter } from './Stats'

export function DSASection() {
  return (
    <Section
      id="problem-solving"
      eyebrow="Problem Solving"
      title={problemSolving.headline}
      description={problemSolving.blurb}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        {/* The headline number */}
        <Reveal>
          <div className="group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent-500/[0.12] via-white/[0.03] to-violet-500/[0.08] p-8 sm:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-accent-500/20 blur-[90px] transition-opacity duration-700 group-hover:opacity-80"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-grid mask-fade-radial opacity-40" />

            <div className="relative">
              <Counter
                to={problemSolving.count}
                suffix={problemSolving.countSuffix}
                className="block text-6xl font-semibold tracking-tighter text-gradient sm:text-7xl lg:text-8xl"
              />
              <p className="mt-3 text-lg font-medium text-white sm:text-xl">
                {problemSolving.countLabel}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                Across LeetCode, Codeforces, CodeChef and other competitive programming platforms.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          {/* Platforms */}
          <Reveal delay={0.08}>
            <div className="rounded-3xl glass p-7">
              <h3 className="font-mono text-xs tracking-widest text-faint uppercase">Platforms</h3>
              <ul className="mt-5 space-y-3">
                {problemSolving.platforms.map((platform, index) => (
                  <motion.li
                    key={platform}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index, duration: 0.4 }}
                    className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_10px_2px] shadow-accent-400/40"
                    />
                    <span className="text-base text-slate-200">{platform}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Focus areas */}
          <Reveal delay={0.16}>
            <div className="rounded-3xl glass p-7">
              <h3 className="flex items-center gap-2 font-mono text-xs tracking-widest text-faint uppercase">
                <Target size={13} aria-hidden="true" />
                Focus
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {problemSolving.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300 transition-colors duration-200 hover:border-accent-400/40 hover:text-white"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
