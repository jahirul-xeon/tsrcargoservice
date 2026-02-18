import { metrics } from '../../data/siteData'
import { StatCounter } from '../common/StatCounter'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Pastel premium background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-teal-50/60 to-indigo-50/60" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-300/25 via-sky-300/18 to-indigo-300/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-[-6rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-electric-300/18 via-teal-300/18 to-sky-300/18 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          {/* Left content */}
          <div className="reveal" data-reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-electric-600">
              Why Choose Us
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Why partners choose TSR Cargo Service.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-steel-600">
              We focus on transparent communication, reliable local operations, and customized logistics
              support. Our team also brings strong understanding of European trade requirements for export
              handling from Bangladesh.
            </p>

            {/* Premium “credential” row */}
            <div className="mt-7 flex items-center gap-4 rounded-3xl bg-white/40 p-4 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.25)]">
              <div className="relative h-12 w-12 shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-500 to-teal-500 blur-md opacity-35" />
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-electric-500 to-teal-500 shadow-[0_14px_30px_-18px_rgba(0,180,255,0.85)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">Long-term partnership approach</p>
                <p className="text-sm text-steel-600">Trial shipments available to demonstrate service quality.</p>
              </div>
            </div>
          </div>

          {/* Right metrics panel */}
          <div className="relative">
            {/* panel glow */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-r from-electric-400/15 via-teal-400/10 to-indigo-400/15 blur-3xl" />

            <div className="rounded-[2rem] bg-white/45 p-5 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_30px_80px_-55px_rgba(15,60,100,0.45)] md:p-6">
              <div className="grid gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl bg-white/40 p-4 backdrop-blur-md ring-1 ring-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-transform duration-500 hover:-translate-y-0.5"
                  >
                    <StatCounter {...metric} />
                  </div>
                ))}
              </div>

              {/* tiny footer accent */}
              <div className="mt-5 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.25em] text-steel-500">
                  Trusted Origin Partner
                </p>
                <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-electric-500/70 to-teal-500/70 opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
