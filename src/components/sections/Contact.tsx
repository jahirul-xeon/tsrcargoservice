export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Pastel premium background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-teal-50/60 to-indigo-50/60" />
      <div className="pointer-events-none absolute -top-28 left-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-teal-300/20 via-sky-300/16 to-indigo-300/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-[-6rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-electric-300/16 via-teal-300/16 to-sky-300/16 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.1fr] md:px-12">
        {/* Left content */}
        <div className="reveal" data-reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-electric-600">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            Connect with TSR Cargo Service.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-steel-600">
            Looking for a trusted origin handling partner in Bangladesh? Our team is ready to support your global freight needs.
          </p>

          {/* Contact details as glass chips */}
          <div className="mt-8 grid gap-4">
            {[
              { k: 'Contact Person', v: 'Tarek Aziz, Business Development Manager' },
              { k: 'Email', v: 'tarek@tsrcargoservice.com' },
              { k: 'Mobile / WhatsApp', v: '+49015753244139' },
              { k: 'Service Focus', v: 'Origin handling for export shipments from Bangladesh' },
            ].map((row) => (
              <div
                key={row.k}
                className="rounded-3xl bg-white/40 p-4 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_18px_45px_-32px_rgba(0,0,0,0.18)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-steel-600">
                  {row.k}
                </p>
                <p className="mt-1 text-base font-semibold text-ink-900">
                  {row.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form panel */}
        <form
          data-reveal
          className="
            reveal group relative overflow-hidden rounded-[32px]
            bg-gradient-to-br from-teal-50/80 via-sky-50/70 to-indigo-50/80
            p-[1px]
            shadow-[0_35px_90px_-65px_rgba(15,60,100,0.45)]
          "
        >
          {/* glow halo */}
          <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-400/22 via-teal-400/18 to-sky-400/22" />
          </div>

          {/* inner glass */}
          <div className="relative rounded-[31px] bg-white/35 p-8 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            {/* subtle highlight sweep */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rotate-6 bg-white/35 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-70" />

            <div className="relative grid gap-4 md:grid-cols-2">
              <Field label="First Name" placeholder="Grace" type="text" />
              <Field label="Last Name" placeholder="Meyer" type="text" />
            </div>

            <div className="relative mt-4">
              <Label>Work Email</Label>
              <Input placeholder="grace@buyer.com" type="email" />
            </div>

            <div className="relative mt-4">
              <Label>Service Needs</Label>
              <Textarea placeholder="Share cargo type, volume, factory location, and target destination." />
            </div>

            <button
              type="submit"
              className="
                relative mt-6 w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em]
                text-black
                bg-gradient-to-r from-ink-900 to-ink-800
                shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]
                transition-transform duration-500 ease-out
                hover:-translate-y-0.5
              "
            >
              Request Callback
            </button>

            {/* tiny trust note */}
            <p className="relative mt-4 text-xs text-steel-600">
              We respond with shipment guidance and next steps for trial coordination.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

/* ---- Small field components (same file) ---- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11px] font-semibold uppercase tracking-[0.28em] text-steel-600">
      {children}
    </label>
  )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="
        mt-2 w-full rounded-2xl px-4 py-3 text-sm text-ink-900 outline-none
        bg-white/55 backdrop-blur-md
        ring-1 ring-black/5
        shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
        transition
        focus:ring-2 focus:ring-electric-500/40 focus:bg-white/70
      "
    />
  )
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="
        mt-2 min-h-[140px] w-full rounded-2xl px-4 py-3 text-sm text-ink-900 outline-none
        bg-white/55 backdrop-blur-md
        ring-1 ring-black/5
        shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
        transition
        focus:ring-2 focus:ring-electric-500/40 focus:bg-white/70
      "
    />
  )
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <Input {...props} />
    </div>
  )
}
