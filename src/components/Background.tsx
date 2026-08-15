import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { usePrefersCalm } from '../hooks/useReducedMotion'

/**
 * Ambient page background: an engineering grid, two slow gradient glows, and a
 * soft light that trails the cursor. Everything is transform/opacity only, sits
 * behind the content, and is skipped entirely on reduced-motion or low-power
 * devices — the static gradient wash on <body> carries the look on its own.
 */
export function Background() {
  const calm = usePrefersCalm()

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springX = useSpring(mouseX, { stiffness: 60, damping: 24, mass: 0.6 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 24, mass: 0.6 })

  const glowX = useTransform(springX, (v) => `${v * 100}%`)
  const glowY = useTransform(springY, (v) => `${v * 100}%`)

  useEffect(() => {
    if (calm) return
    // Fine pointers only — on touch devices this would just fire on taps.
    if (!window.matchMedia('(pointer: fine)').matches) return

    let frame = 0
    const onMove = (event: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        mouseX.set(event.clientX / window.innerWidth)
        mouseY.set(event.clientY / window.innerHeight)
        frame = 0
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [calm, mouseX, mouseY])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Engineering grid, faded out towards the fold */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />

      {/* Slow gradient glows */}
      <div
        className={`absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-accent-500/20 blur-[120px] ${
          calm ? '' : 'animate-drift'
        }`}
      />
      <div
        className={`absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-violet-500/15 blur-[130px] ${
          calm ? '' : 'animate-float'
        }`}
      />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-600/10 blur-[140px]" />

      {/* Cursor-following light */}
      {!calm && (
        <motion.div
          className="absolute h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400/[0.07] blur-[100px]"
          style={{ left: glowX, top: glowY }}
        />
      )}

      {/* Fine noise, keeps the large flat areas from banding */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
