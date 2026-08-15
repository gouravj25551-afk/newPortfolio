import { Mail } from 'lucide-react'
import { socials } from '../data/site'
import { Reveal } from './ui/Reveal'
import { ButtonLink, DisabledButton } from './ui/Button'
import { SocialLinks } from './ui/SocialLinks'

export function Contact() {
  const email = socials.find((social) => social.id === 'email')

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent-500/[0.12] via-white/[0.02] to-violet-500/[0.1] px-6 py-16 text-center sm:px-12 sm:py-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-500/20 blur-[100px]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-grid mask-fade-radial opacity-40" />

        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2
              id="contact-heading"
              className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Let&apos;s build something.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Open to internships, freelance work and collaborations on products worth building.
              The fastest way to reach me is email — everything else is below.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {email?.href ? (
                <ButtonLink href={email.href} ariaLabel="Send me an email">
                  <Mail size={16} aria-hidden="true" />
                  Email me
                </ButtonLink>
              ) : (
                <DisabledButton reason="Email not configured yet — set the VITE_EMAIL env var">
                  <Mail size={16} aria-hidden="true" />
                  Email me
                </DisabledButton>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <SocialLinks includeEmail className="mt-8 justify-center" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
