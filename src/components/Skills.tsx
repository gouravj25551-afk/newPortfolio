import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Binary,
  Braces,
  Brain,
  Database,
  LayoutTemplate,
  Server,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { skillCategories } from '../data/site'
import { Section } from './ui/Section'

const categoryIcons: Record<string, LucideIcon> = {
  frontend: LayoutTemplate,
  backend: Server,
  databases: Database,
  languages: Braces,
  ai: Brain,
  tools: Wrench,
  cp: Binary,
}

export function Skills() {
  const [filter, setFilter] = useState<string>('all')

  const visible =
    filter === 'all' ? skillCategories : skillCategories.filter((c) => c.id === filter)

  const filters = [{ id: 'all', title: 'All' }, ...skillCategories]

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The stack I build with"
      description="Grouped by what they're actually for. Filter to whichever part of the stack you care about."
    >
      <div
        role="tablist"
        aria-label="Filter skills by category"
        className="mb-10 flex flex-wrap gap-2"
      >
        {filters.map((entry) => {
          const selected = filter === entry.id
          return (
            <button
              key={entry.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(entry.id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                selected
                  ? 'text-white'
                  : 'border border-white/10 bg-white/[0.03] text-muted hover:border-white/20 hover:text-white'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="skill-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-500 to-violet-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {entry.title}
            </button>
          )
        })}
      </div>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((category) => {
            const Icon = categoryIcons[category.id] ?? Braces
            return (
              <motion.li
                key={category.id}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl glass glass-hover p-6"
              >
                {/* Accent wash on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-500/10 to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-accent-400 ring-1 ring-white/10">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-white">{category.title}</h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-faint">{category.blurb}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors duration-200 hover:border-accent-400/40 hover:bg-accent-500/10 hover:text-white"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </motion.ul>
    </Section>
  )
}
