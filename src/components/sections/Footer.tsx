import { navLinks } from '../../data/siteData'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-black">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/3 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-teal-400/18 via-cyan-400/12 to-electric-400/16 blur-3xl" />
        <div className="absolute -bottom-32 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-electric-400/16 via-teal-400/14 to-sky-400/16 blur-3xl" />
      </div>

      {/* premium top divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_0.85fr_0.85fr] md:px-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-500 to-teal-500 blur-md opacity-35" />
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-electric-500 to-teal-500 shadow-[0_18px_35px_-22px_rgba(0,180,255,0.9)]" />
            </div>

            <div className="font-display text-lg font-semibold tracking-wide">
              Aurelia Global
            </div>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel-300">
            Premium enterprise-grade service operations with precision, transparency,
            and global reach.
          </p>

          {/* subtle badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['ISO-aligned', '24/7 Coverage', 'Enterprise SLA'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70 ring-1 ring-white/10 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
            Quick Links
          </p>

          <div className="mt-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  group flex items-center justify-between rounded-2xl
                  bg-white/5 px-4 py-3
                  ring-1 ring-white/10
                  backdrop-blur-md
                  transition
                  hover:bg-white/8
                "
              >
                <span className="text-sm text-steel-200 transition-colors group-hover:text-black">
                  {link.label}
                </span>
                <span className="text-black/40 transition group-hover:translate-x-0.5 group-hover:text-black/70">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
            Legal
          </p>

          <div className="mt-5 space-y-2">
            {['Privacy Policy', 'Terms of Service', 'Compliance'].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  group flex items-center justify-between rounded-2xl
                  bg-white/5 px-4 py-3
                  ring-1 ring-white/10
                  backdrop-blur-md
                  transition
                  hover:bg-white/8
                "
              >
                <span className="text-sm text-steel-200 transition-colors group-hover:text-black">
                  {item}
                </span>
                <span className="text-black/40 transition group-hover:translate-x-0.5 group-hover:text-black/70">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="px-6 pb-8 md:px-12">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white/5 px-6 py-4 ring-1 ring-white/10 backdrop-blur-md">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-black/55 md:flex-row">
            <p>© 2026 Aurelia Global Services. All rights reserved.</p>

            <div className="flex items-center gap-3 text-black/45">
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span>Security</span>
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span>Trust Center</span>
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span>Status</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
