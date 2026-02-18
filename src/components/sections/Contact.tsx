import { useEffect, useState } from 'react'
import type {
  FormEvent,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'

const CONTACT_EMAIL = 'tarek@tsrcargoservice.com'
const WHATSAPP_NUMBER = '49015753244139'
const TOAST_DURATION_MS = 3500

type ToastState = {
  type: 'success' | 'error'
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    serviceNeeds: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<ToastState | null>(null)

  useEffect(() => {
    if (!toast) {
      return
    }

    const timer = window.setTimeout(() => {
      setToast(null)
    }, TOAST_DURATION_MS)

    return () => window.clearTimeout(timer)
  }, [toast])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setToast(null)
    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          serviceNeeds: formData.serviceNeeds,
          _subject: `Shipment inquiry from ${formData.firstName} ${formData.lastName}`,
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as {
          error?: string
        }
        throw new Error(payload.error || 'Failed to send inquiry')
      }

      setToast({
        type: 'success',
        message: 'Inquiry sent successfully.',
      })
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        serviceNeeds: '',
      })
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to send inquiry'
      setToast({
        type: 'error',
        message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello TSR Cargo Service, I'd like to discuss my shipment.",
  )}`

  return (
    <section id="contact" className="relative overflow-hidden">
      {toast ? (
        <div className="pointer-events-none fixed right-4 top-20 z-[70] md:right-8">
          <div
            role="status"
            className={[
              'rounded-2xl px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-md ring-1',
              toast.type === 'success'
                ? 'bg-teal-100/90 text-teal-900 ring-teal-300/60'
                : 'bg-red-100/90 text-red-900 ring-red-300/70',
            ].join(' ')}
          >
            {toast.message}
          </div>
        </div>
      ) : null}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-teal-50/60 to-indigo-50/60" />
      <div className="pointer-events-none absolute -top-28 left-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-teal-300/20 via-sky-300/16 to-indigo-300/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-[-6rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-electric-300/16 via-teal-300/16 to-sky-300/16 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.1fr] md:px-12">
        <div className="reveal" data-reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-electric-600">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            Connect with TSR Cargo Service.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-steel-600">
            Looking for a trusted origin handling partner in Bangladesh? Our
            team is ready to support your global freight needs.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              {
                k: 'Contact Person',
                v: 'Tarek Aziz, Business Development Manager',
              },
              { k: 'Email', v: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
              { k: 'Mobile / WhatsApp', v: '+49015753244139', href: whatsappLink },
              {
                k: 'Service Focus',
                v: 'Origin handling for export shipments from Bangladesh',
              },
            ].map((row) => (
              <div
                key={row.k}
                className="rounded-3xl bg-white/40 p-4 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_18px_45px_-32px_rgba(0,0,0,0.18)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-steel-600">
                  {row.k}
                </p>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('http') ? '_blank' : undefined}
                    rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="mt-1 block text-base font-semibold text-ink-900 underline-offset-4 hover:underline"
                  >
                    {row.v}
                  </a>
                ) : (
                  <p className="mt-1 text-base font-semibold text-ink-900">
                    {row.v}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          data-reveal
          className="
            reveal group relative overflow-hidden rounded-[32px]
            bg-gradient-to-br from-teal-50/80 via-sky-50/70 to-indigo-50/80
            p-[1px]
            shadow-[0_35px_90px_-65px_rgba(15,60,100,0.45)]
          "
        >
          <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-400/22 via-teal-400/18 to-sky-400/22" />
          </div>

          <div className="relative rounded-[31px] bg-white/35 p-8 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rotate-6 bg-white/35 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-70" />

            <div className="relative grid gap-4 md:grid-cols-2">
              <Field
                label="First Name"
                placeholder="Grace"
                type="text"
                value={formData.firstName}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: event.target.value,
                  }))
                }
                required
              />
              <Field
                label="Last Name"
                placeholder="Meyer"
                type="text"
                value={formData.lastName}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, lastName: event.target.value }))
                }
                required
              />
            </div>

            <div className="relative mt-4">
              <Label>Work Email</Label>
              <Input
                placeholder="grace@buyer.com"
                type="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>

            <div className="relative mt-4">
              <Label>Service Needs</Label>
              <Textarea
                placeholder="Share cargo type, volume, factory location, and target destination."
                value={formData.serviceNeeds}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    serviceNeeds: event.target.value,
                  }))
                }
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                relative mt-6 w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em]
                text-black border border-black/50 opacity-90
                bg-gradient-to-r from-ink-900 to-ink-800
                shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]
                transition-transform duration-500 ease-out
                hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70
              "
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>

            <p className="relative mt-4 text-xs text-steel-600">
              We respond with shipment guidance and next steps for trial
              coordination.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

function Label({ children }: { children: ReactNode }) {
  return (
    <label className="text-[11px] font-semibold uppercase tracking-[0.28em] text-steel-600">
      {children}
    </label>
  )
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
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

function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
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
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <Input {...props} />
    </div>
  )
}
