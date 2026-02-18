import { operations } from '../../data/siteData'

export function Operations() {
  return (
    <section id="operations" className="relative mx-auto max-w-6xl px-6 py-16 md:px-12">
      {/* ambient background for premium feel */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-300/18 via-sky-300/14 to-indigo-300/16 blur-3xl" />
        <div className="absolute -bottom-28 right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-electric-300/14 via-teal-300/14 to-sky-300/14 blur-3xl" />
      </div>

      <div className="reveal" data-reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-electric-600">Operations</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
          How we execute origin handling in Bangladesh.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Left grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {operations.slice(0, 4).map((item) => (
            <article
              key={item.title}
              data-reveal
              className="
                reveal group relative overflow-hidden rounded-[28px]
                bg-gradient-to-br from-teal-50/70 via-sky-50/60 to-indigo-50/70
                p-[1px]
                shadow-[0_30px_80px_-55px_rgba(15,60,100,0.45)]
                transition-transform duration-500 ease-out
                hover:-translate-y-0.5
                will-change-transform
              "
            >
              {/* glow halo */}
              <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-400/22 via-teal-400/18 to-sky-400/22" />
              </div>

              <div className="relative overflow-hidden rounded-[27px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* cinematic overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/12 to-transparent" />
                <div className="pointer-events-none absolute inset-0 opacity-40 [box-shadow:inset_0_-120px_140px_rgba(0,0,0,0.55)]" />

                {/* glass caption */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl ring-1 ring-white/15 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.5)]">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{item.caption}</p>

                    {/* tiny accent */}
                    <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-electric-400/70 to-teal-400/70 opacity-80 transition-all duration-500 group-hover:w-14" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right featured tile */}
        <div className="reveal" data-reveal>
          <article
            className="
              group relative h-full overflow-hidden rounded-[32px]
              bg-gradient-to-br from-teal-50/70 via-sky-50/60 to-indigo-50/70
              p-[1px]
              shadow-[0_40px_100px_-70px_rgba(15,60,100,0.55)]
              transition-transform duration-500 ease-out
              hover:-translate-y-0.5
              will-change-transform
            "
          >
            {/* glow halo */}
            <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-400/22 via-teal-400/18 to-sky-400/22" />
            </div>

            <div className="relative h-full overflow-hidden rounded-[31px]">
              <img
                src={operations[4].image}
                alt={operations[4].title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* cinematic overlay for tall card */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/15 via-ink-950/10 to-ink-950/78" />
              <div className="pointer-events-none absolute inset-0 opacity-35 [box-shadow:inset_0_-180px_200px_rgba(0,0,0,0.6)]" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl ring-1 ring-white/15 shadow-[0_22px_55px_-38px_rgba(0,0,0,0.55)]">
                  <h3 className="text-lg font-semibold text-white">{operations[4].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{operations[4].caption}</p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/65">
                    <span className="h-2 w-2 rounded-full bg-teal-300/80" />
                    Enterprise-grade
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
