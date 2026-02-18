import { navLinks } from '../../data/siteData'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink-950 text-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-12">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">TSR Cargo Service</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel-300">
            Sustainable solutions for global freight with trusted origin handling support from Bangladesh.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/60">Quick Links</p>
          <div className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-steel-200 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/60">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-steel-200">
            <p>Tarek Aziz</p>
            <p>Business Development Manager</p>
            <a href="mailto:tarek@tsrcargoservice.com" className="block transition-colors hover:text-black">
              tarek@tsrcargoservice.com
            </a>
            <a href="https://wa.me/49015753244139" className="block transition-colors hover:text-black">
              +49 015753244139 (WhatsApp)
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-black/60">
          <p>� {year} TSR Cargo Service. All rights reserved.</p>
          <p>Bangladesh Origin Handling</p>
        </div>
      </div>
    </footer>
  )
}
