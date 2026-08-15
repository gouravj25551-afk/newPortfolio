import { useEffect, useState } from 'react'

/**
 * True when the visitor has asked for reduced motion, or when the device looks
 * low-powered (coarse pointer + few cores). Both cases get the static layout:
 * content still appears, it just doesn't move.
 */
export function usePrefersCalm(): boolean {
  const [calm, setCalm] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')

    const lowPower =
      window.matchMedia('(pointer: coarse)').matches &&
      typeof navigator.hardwareConcurrency === 'number' &&
      navigator.hardwareConcurrency <= 4

    const sync = () => setCalm(query.matches || lowPower)

    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  return calm
}
