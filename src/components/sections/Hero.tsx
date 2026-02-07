import { useEffect, useMemo, useRef } from 'react'
import { heroStats } from '../../data/siteData'

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null)

  const heroGradient = useMemo(
    () =>
      `linear-gradient(135deg, rgba(11,17,29,0.92), rgba(11,17,29,0.75), rgba(47,107,255,0.18)), url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2000&q=80')`,
    [],
  )

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const offset = window.scrollY * 0.12
      hero.style.setProperty('--parallax', `${offset}px`)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={heroRef}
      className="relative isolate overflow-hidden bg-ink-950 text-white hero-parallax"
      style={{ backgroundImage: heroGradient }}>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/50 to-ink-950/80" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-electric-500/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl animate-float-slow" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 md:flex-row md:items-center md:px-12 md:pb-28 md:pt-20">
        <div className="flex-1">
          <p className="animate-fade-in text-xs uppercase tracking-[0.4em] text-teal-400">
            Enterprise Service Operations
          </p>
          <h1 className="mt-5 animate-fade-up font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Trusted global operations with precision, security, and scale.
          </h1>
          <p className="mt-6 max-w-xl text-base text-steel-300 md:text-lg">
            Aurelia Global Services delivers premium operational support for high-value service networks.
            We combine meticulous governance, advanced facilities, and experienced teams to keep your
            mission-critical operations moving with absolute confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn-sheen rounded-full bg-electric-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-electric-400 hover:shadow-glow">
              Contact Us
            </button>
            <button className="btn-sheen rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:-translate-y-0.5 hover:border-white hover:text-white">
              Explore Services
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div
            className="
      relative overflow-hidden rounded-3xl
      bg-white/10 p-6
      backdrop-blur-md
      shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)]
      ring-1 ring-white/12
      will-change-transform
      transition-transform duration-300 ease-out
      hover:-translate-y-0.5
      motion-reduce:transform-none
    "
          >
            {/* soft glow (no border, no heavy animation) */}
            <div className="pointer-events-none absolute -inset-10 opacity-60 blur-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/15 via-cyan-500/10 to-electric-500/15" />
            </div>

            {/* content */}
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-teal-300/90">
                    Live Operations
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                    Global Control Room
                  </h3>
                </div>

                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/10">
                  Active
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="
              rounded-2xl bg-white/5 p-4
              ring-1 ring-white/10
              transition-transform duration-300 ease-out
              hover:-translate-y-0.5
              will-change-transform
              motion-reduce:transform-none
            "
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                      {item.label}
                    </p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}
