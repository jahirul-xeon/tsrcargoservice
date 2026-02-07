import { useEffect, useMemo, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const reducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    let start: number | null = null
    let started = false
    let lastPainted = -1

    const duration = 1100

    const tick = (ts: number) => {
      if (start == null) start = ts
      const t = Math.min((ts - start) / duration, 1)
      const eased = easeOutCubic(t)
      const next = Math.round(eased * value)

      // throttle state updates (prevents “hang”)
      if (next !== lastPainted) {
        lastPainted = next
        setCount(next)
      }

      if (t < 1) raf = requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true
            if (reducedMotion) {
              setCount(value)
            } else {
              raf = requestAnimationFrame(tick)
            }
            obs.disconnect()
          }
        }
      },
      { threshold: 0.45 },
    )

    obs.observe(el)

    return () => {
      obs.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [value, reducedMotion])

  return (
    <div
      ref={ref}
      className="
        group relative overflow-hidden rounded-3xl
        bg-gradient-to-br from-teal-50/80 via-sky-50/70 to-indigo-50/80
        p-[1px]
        shadow-[0_28px_70px_-55px_rgba(15,60,100,0.5)]
      "
    >
      {/* hover glow halo */}
      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-400/22 via-teal-400/18 to-sky-400/22" />
      </div>

      {/* inner glass */}
      <div
        className="
          relative rounded-[23px] p-6
          bg-white/35 backdrop-blur-xl
          ring-1 ring-white/45
          shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]
          transition-transform duration-300
          group-hover:-translate-y-0.5
          will-change-transform
        "
      >
        {/* top highlight sweep */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rotate-6 bg-white/35 blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-70" />

        <div className="relative flex items-end justify-between gap-4">
          <div className="leading-none">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-ink-900">
                {count}
              </span>
              {suffix ? (
                <span className="text-sm font-semibold text-ink-900/70">
                  {suffix}
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-steel-600">
              {label}
            </p>
          </div>

          {/* tiny accent */}
          <div className="h-10 w-10 rounded-2xl bg-white/35 ring-1 ring-white/45 backdrop-blur-md shadow-[0_12px_28px_-18px_rgba(0,160,200,0.65)]" />
        </div>
      </div>
    </div>
  )
}
