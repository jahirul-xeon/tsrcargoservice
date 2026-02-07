import { highlightCards } from '../../data/siteData'

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 md:px-12">
      <div className="reveal grid gap-6 md:grid-cols-3" data-reveal>
        {highlightCards.map((item) => (
          <div key={item.title} className="group relative overflow-hidden rounded-3xl bg-white shadow-soft">
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-white/70">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
