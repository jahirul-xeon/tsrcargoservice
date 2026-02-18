import { useEffect, useState } from 'react'
import { navLinks } from '../../data/siteData'

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const whatsappLink =
    'https://wa.me/49015753244139?text=Hello%20TSR%20Cargo%20Service%2C%20I%20want%20to%20discuss%20my%20shipment.'

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
      <nav className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-3 md:px-12 md:py-4">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-1 mr-5 justify-center">
          <div className="relative h-12 w-24 md:h-12 md:w-28">
            {/* glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-500 to-teal-500 blur-md opacity-40" />

            {/* logo image */}
            
            <img
              src="https://i.ibb.co.com/qLh6bFcw/image-logo-tsr-small.png"
              alt="TSR Cargo Service"
              className="relative h-full w-full rounded-xl bg-ink-950 object-contain"
            />
          </div>

          <span className="font-display text-lg font-semibold tracking-wide text-[#0f4681]">
            TSR Cargo Service
          </span>
        </div>

        {/* Nav links */}
        <div
          className={[
            'hidden items-center gap-5 text-sm transition-colors md:ml-2 md:flex',
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
        <div className="ml-auto hidden shrink-0 items-center gap-3 md:flex">
          <button
            onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
            className="
              btn-sheen rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]
              text-teal-800 ring-1 ring-teal-400/25
              transition-colors hover:text-black hover:ring-white/40
            "
          >
            WhatsApp
          </button>

          <a
            href="#contact"
            className="
              btn-sheen rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em]
              bg-white text-ink-900
              transition-transform duration-500
              hover:-translate-y-0.5 hover:shadow-glow
            "
          >
            Contact TSR
          </a>
        </div>
      </nav>
    </header>
  )
}
