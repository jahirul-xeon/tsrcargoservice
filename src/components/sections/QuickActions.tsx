import { quickActions } from '../../data/siteData'

export function QuickActions() {
  return (
    <section className="relative z-10 -mt-14 px-6 md:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white/80 p-6 backdrop-blur-md shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)] md:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          {quickActions.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl bg-white p-5 transition-all duration-500 hover:-translate-y-0.5"
            >
              {/* ambient glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-500/40 to-teal-500/40" />
              </div>

              {/* soft base shadow */}
              <div className="pointer-events-none absolute inset-0 -z-20 rounded-2xl shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)]" />

              <div className="relative flex gap-4">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-teal-500 shadow-[0_10px_25px_-10px_rgba(0,180,255,0.9)] transition-transform duration-500 group-hover:scale-105">
                  <div className="h-4 w-4 rounded-sm bg-white/90" />
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-sm font-semibold text-ink-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-steel-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
