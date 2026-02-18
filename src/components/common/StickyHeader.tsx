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
        'sticky top-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-ink-950/85 backdrop-blur-xl shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)]'
          : 'bg-ink-950/60',
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            {/* glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-500 to-teal-500 blur-md opacity-40" />

            {/* logo image */}
            <img
              src="https://i.ibb.co.com/m5RpgvZq/db3.png"
              alt="TSR Cargo Service"
              className="relative h-12 w-12 rounded-xl object-contain bg-ink-950 p-1"
            />
          </div>

          <span className="font-display text-lg font-semibold tracking-wide text-black">
            TSR Cargo Service
          </span>
        </div>

        {/* Nav links */}
        <div
          className={[
            'hidden items-center gap-6 text-sm transition-colors md:flex',
            isScrolled ? 'text-black/90' : 'text-black/80',
          ].join(' ')}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-black/85 transition-colors hover:text-black"
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
              text-teal-800 ring-1 ring-teal-400/25
              transition-colors hover:text-black hover:ring-white/40
            "
          >
            WhatsApp
          </button>

          <button
            className="
              btn-sheen rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em]
              bg-white text-ink-900
              transition-transform duration-500
              hover:-translate-y-0.5 hover:shadow-glow
            "
          >
            Contact TSR
          </button>
        </div>
      </nav>
    </header>
  )
}
