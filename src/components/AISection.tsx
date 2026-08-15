import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { aiTrack } from '../data/site'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function AISection() {
  return (
    <Section
      id="ai"
      eyebrow={aiTrack.eyebrow}
      title={aiTrack.title}
      description={aiTrack.blurb}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {aiTrack.groups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass glass-hover p-6">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-violet-500/10 text-violet-400 ring-1 ring-violet-400/20">
                    <Brain size={17} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-white">{group.title}</h3>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.04 * itemIndex, duration: 0.35 }}
                      className="flex items-center gap-2.5 text-sm text-slate-300"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 rounded-full bg-violet-400"
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.24}>
        <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm leading-relaxed text-faint">
          <span className="font-mono text-xs tracking-wider text-accent-400 uppercase">Note</span>{' '}
          — this is a learning track, not a research background. I'm building applications with AI
          while working through the fundamentals underneath it.
        </p>
      </Reveal>
    </Section>
  )
}
