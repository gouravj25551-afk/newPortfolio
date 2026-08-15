import { Code2, Layers, Rocket, Server } from 'lucide-react'
import { profile } from '../data/site'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

const pipeline = ['Idea', 'Architecture', 'Code', 'Deployment', 'Real users']

const focus = [
  {
    icon: Server,
    title: 'Full-stack & backend',
    body: 'APIs, databases and auth — the parts nobody sees but everything depends on.',
  },
  {
    icon: Layers,
    title: 'Artificial Intelligence',
    body: 'Learning the fundamentals properly, then building products on top of them.',
  },
  {
    icon: Code2,
    title: 'DSA & Competitive Programming',
    body: 'Daily problem solving, because good instincts beat good syntax.',
  },
  {
    icon: Rocket,
    title: 'Real products & startups',
    body: 'Shipping things people can actually open, use and complain about.',
  },
]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I like turning ideas into things that actually run"
      description="I'm a Computer Science & AI student who'd rather build a rough working product than a polished plan. Most of what I know came from shipping something, breaking it, and figuring out why."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
          <Reveal>
            <p>
              {profile.positioning} Right now that mostly means backend engineering — designing
              schemas, writing APIs, wiring up authentication — and getting comfortable with the
              parts of a system that are hard to fake.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Alongside that, I solve problems on competitive programming platforms almost daily.
              It's the closest thing I've found to gym time for engineering: the same instincts
              show up later when a product feature turns out to be a graph problem in disguise.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              What I enjoy most is owning the whole arc of a product, not one slice of it:
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 font-mono text-xs sm:text-sm">
              {pipeline.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">
                    {step}
                  </span>
                  {index < pipeline.length - 1 && (
                    <span aria-hidden="true" className="text-accent-400/70">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {focus.map((entry, index) => (
            <Reveal as="li" key={entry.title} delay={0.06 * index}>
              <div className="h-full rounded-2xl glass glass-hover p-5 transition-transform duration-300 hover:-translate-y-1">
                <span className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-400/20">
                  <entry.icon size={18} aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold text-white sm:text-base">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{entry.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
