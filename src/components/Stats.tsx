import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { usePrefersCalm } from '../hooks/useReducedMotion'

type CounterProps = {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

/**
 * Counts up once, the first time it enters the viewport. Screen readers get the
 * final value straight away via aria-label — they never hear the intermediate
 * numbers — and reduced-motion visitors just see the number.
 */
export function Counter({ to, suffix = '', duration = 1.6, className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const calm = usePrefersCalm()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (calm) {
      setValue(to)
      return
    }

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [inView, calm, to, duration])

  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`}>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
    </span>
  )
}

type StatCardProps = {
  value: number
  suffix?: string
  label: string
  hint?: string
}

export function StatCard({ value, suffix, label, hint }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl glass p-6 text-center">
      <span
        aria-hidden="true"
        className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl"
      />
      <div className="relative">
        <Counter
          to={value}
          suffix={suffix}
          className="block text-4xl font-semibold tracking-tight text-gradient sm:text-5xl"
        />
        <p className="mt-2 text-sm font-medium text-slate-200">{label}</p>
        {hint && <p className="mt-1 text-xs text-faint">{hint}</p>}
      </div>
    </div>
  )
}
