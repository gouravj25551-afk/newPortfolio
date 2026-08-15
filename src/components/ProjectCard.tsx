import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Star } from 'lucide-react'
import type { Project } from '../data/site'
import { ButtonLink, DisabledButton } from './ui/Button'
import { GithubIcon } from './ui/BrandIcons'

type ProjectCardProps = {
  project: Project
  /** Flagship cards get the full-width, two-column treatment. */
  featured?: boolean
  index?: number
}

export function ProjectCard({ project, featured = false, index = 0 }: ProjectCardProps) {
  const headingId = `project-${project.id}-heading`

  return (
    <motion.article
      aria-labelledby={headingId}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-white/20 hover:-translate-y-1 ${
        featured
          ? 'p-7 sm:p-10 lg:p-12 hover:shadow-2xl hover:shadow-accent-600/10'
          : 'p-6 sm:p-8'
      }`}
    >
      {/* Hover glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent-500/15 blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />
      {featured && (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid mask-fade-radial opacity-30" />
      )}

      <div className={`relative ${featured ? 'grid gap-10 lg:grid-cols-[1.05fr_1fr]' : ''}`}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            {project.flagship && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-accent-400 uppercase">
                <Star size={11} aria-hidden="true" />
                Flagship Project
              </span>
            )}
            <span className="font-mono text-[11px] tracking-wider text-faint uppercase">
              {project.status}
            </span>
          </div>

          <h3
            id={headingId}
            className={`mt-5 font-semibold tracking-tight ${
              featured ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl'
            }`}
          >
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-accent-400 sm:text-base">{project.tagline}</p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <ButtonLink
                href={project.liveUrl}
                external
                size={featured ? 'md' : 'sm'}
                ariaLabel={`View ${project.name} live`}
              >
                View Project
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </ButtonLink>
            ) : (
              <DisabledButton
                size={featured ? 'md' : 'sm'}
                reason={`Live URL not configured yet — set the VITE_${project.id.toUpperCase()}_LIVE_URL env var`}
              >
                View Project
                <ArrowUpRight size={16} aria-hidden="true" />
              </DisabledButton>
            )}

            {project.repoUrl && (
              <ButtonLink
                href={project.repoUrl}
                external
                variant="secondary"
                size={featured ? 'md' : 'sm'}
                ariaLabel={`${project.name} source on GitHub`}
              >
                <GithubIcon width={16} height={16} />
                GitHub
              </ButtonLink>
            )}
          </div>
        </div>

        {/* Key features — a side panel when featured, stacked otherwise */}
        <div className={featured ? '' : 'mt-8 border-t border-white/5 pt-6'}>
          <h4 className="font-mono text-[11px] tracking-widest text-faint uppercase">
            Key features
          </h4>
          <ul className={`mt-4 grid gap-2.5 ${featured ? '' : 'sm:grid-cols-2'}`}>
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                <Check
                  size={15}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent-400"
                />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}
