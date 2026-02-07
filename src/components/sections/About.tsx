import { aboutHighlights } from '../../data/siteData'

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink-950 text-white"
    >
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-400/20 via-cyan-400/14 to-electric-400/18 blur-3xl" />
        <div className="absolute -bottom-32 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-electric-400/18 via-teal-400/16 to-sky-400/18 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:px-12">
        {/* left content */}
        <div className="reveal" data-reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-400">
            About the Company
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold text-black tracking-tight md:text-4xl">
            Decades of operational rigor, built for modern enterprise needs.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-black">
            Aurelia Global Services partners with enterprise brands to deliver refined
            operational workflows. Our teams are trained to align with your compliance
            requirements while delivering seamless, customer-centric service experiences.
          </p>

          <p className="mt-4 text-base leading-relaxed text-black">
            We specialize in complex service environments where precision, speed,
            and trust define the outcome.
          </p>
        </div>

        {/* right highlights */}
        <div className="grid gap-6">
          {aboutHighlights.map((item, index) => (
            <div
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
              className="
                reveal group relative overflow-hidden rounded-3xl
                bg-white/5 p-[1px]
                shadow-[0_25px_70px_-45px_rgba(0,0,0,0.8)]
              "
            >
              {/* glow halo */}
              <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-400/25 via-teal-400/20 to-cyan-400/25" />
              </div>

              {/* glass card */}
              <div
                className="
                  relative rounded-[23px] p-6
                  bg-white/10 backdrop-blur-xl
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  will-change-transform
                "
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
                  {item.title}
                </p>

                <p className="mt-3 text-lg font-semibold tracking-tight text-black">
                  {item.value}
                </p>

                {/* subtle accent line */}
                <div className="mt-4 h-[2px] w-10 rounded-full bg-gradient-to-r from-electric-400/70 to-teal-400/70 opacity-70 transition-all duration-300 group-hover:w-14" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
