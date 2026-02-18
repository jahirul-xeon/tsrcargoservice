import { missionVision } from '../../data/siteData'

export function MissionVision() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:px-12">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 left-1/3 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-teal-300/18 via-sky-300/14 to-indigo-300/18 blur-3xl" />
        <div className="absolute -bottom-32 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-electric-300/16 via-teal-300/16 to-sky-300/16 blur-3xl" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {missionVision.map((item, index) => (
          <article
            key={item.title}
            data-reveal
            style={{ transitionDelay: `${index * 90}ms` }}
            className="
              reveal group relative overflow-hidden rounded-[32px]
              bg-gradient-to-br from-teal-50/80 via-sky-50/70 to-indigo-50/80
              p-[1px]
              shadow-[0_35px_90px_-65px_rgba(15,60,100,0.45)]
              transition-transform duration-500 ease-out
              hover:-translate-y-0.5
              will-change-transform
            "
          >
            {/* halo glow */}
            <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-400/24 via-teal-400/20 to-sky-400/24" />
            </div>

            {/* inner glass */}
            <div
              className="
                relative rounded-[31px] p-8
                bg-white/35 backdrop-blur-xl
                shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]
              "
            >
              {/* soft highlight sweep */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rotate-6 bg-white/35 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-70" />

              {/* header */}
              <div className="relative flex items-center gap-4">
                {/* icon chip */}
                <div className="relative h-12 w-12 shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-500 to-teal-500 blur-md opacity-35" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500 to-teal-500 shadow-[0_14px_30px_-18px_rgba(0,180,255,0.9)]">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M12 3v18" />
                      <path d="M3 12h18" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-ink-900">
                  {item.title}
                </h3>
              </div>

              {/* content */}
              <p className="relative mt-5 text-base leading-relaxed text-steel-600">
                {item.description}
              </p>

              {/* bottom accent */}
              <div className="relative mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-electric-500/70 to-teal-500/70 opacity-70 transition-all duration-500 group-hover:w-16" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
