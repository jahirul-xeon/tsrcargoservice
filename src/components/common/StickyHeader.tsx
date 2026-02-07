import { useEffect, useState } from 'react'
import { navLinks } from '../../data/siteData'

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-ink-950/85 backdrop-blur-xl shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)]'
          : 'bg-ink-950/60',
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            {/* glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-500 to-teal-500 blur-md opacity-40" />

            {/* logo image */}
            <img
              src="https://i.ibb.co.com/m5RpgvZq/db3.png"
              alt="Aurelia Global"
              className="relative h-10 w-10 rounded-xl object-contain bg-ink-950 p-1"
            />
          </div>

          <span className="font-display text-lg font-semibold tracking-wide text-black">
            Aurelia Global
          </span>
        </div>

        {/* Nav links */}
        <div
          className={[
            'hidden items-center gap-6 text-sm transition-colors md:flex',
            isScrolled ? 'text-black/70' : 'text-black/60',
          ].join(' ')}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            className="
              btn-sheen rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]
              text-black/80 ring-1 ring-white/25
              transition hover:text-black hover:ring-white/40
            "
          >
            Log In
          </button>

          <button
            className="
              btn-sheen rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em]
              bg-white text-ink-900
              transition-transform duration-300
              hover:-translate-y-0.5 hover:shadow-glow
            "
          >
            Get a Quote
          </button>
        </div>
      </nav>
    </header>
  )
}
