import { services } from '../../data/siteData'

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-12">
      {/* section ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-300/25 via-sky-300/20 to-indigo-300/20 blur-3xl" />
        <div className="absolute -bottom-28 right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-electric-300/18 via-teal-300/18 to-sky-300/18 blur-3xl" />
      </div>

      <div className="reveal" data-reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-electric-600">Services</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 md:text-4xl">
          Full-spectrum operations for premium service brands.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            data-reveal
            className="
              reveal group relative overflow-hidden rounded-[28px]
              bg-gradient-to-br from-teal-50/80 via-sky-50/70 to-indigo-50/80
              p-[1px]
              shadow-[0_30px_80px_-55px_rgba(15,60,100,0.45)]
              transition-transform duration-300 ease-out
              hover:-translate-y-1
              will-change-transform
            "
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            {/* premium glow halo */}
            <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-400/28 via-teal-400/22 to-sky-400/28" />
            </div>

            {/* inner glass surface */}
            <div
              className="
                relative h-full rounded-[27px] p-6
                bg-white/35 backdrop-blur-xl
                shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]
              "
            >
              {/* subtle highlight sweep */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rotate-6 bg-white/35 blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-70" />

              {/* micro texture (no image needed) */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
                  backgroundSize: '14px 14px',
                }}
              />

              {/* top row */}
              <div className="relative flex items-start justify-between gap-4">
                {/* icon chip */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/40 backdrop-blur-md shadow-[0_10px_30px_-18px_rgba(0,160,200,0.8)] ring-1 ring-white/35 transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-6 w-6 text-electric-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 12h16" />
                    <path d="M12 4v16" />
                    <path d="M6 6l12 12" />
                  </svg>
                </div>

                {/* tiny status pill (optional, looks premium) */}
                <span className="rounded-full bg-white/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-700/70 ring-1 ring-white/35">
                  Premium
                </span>
              </div>

              {/* content */}
              <h3 className="relative mt-6 text-lg font-semibold text-ink-900 tracking-tight">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-steel-600">
                {service.description}
              </p>

              {/* bottom accent line */}
              <div className="relative mt-6 h-[2px] w-10 rounded-full bg-gradient-to-r from-electric-500/60 to-teal-500/60 opacity-60 transition-all duration-300 group-hover:w-14 group-hover:opacity-90" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
