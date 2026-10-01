import { useState } from 'react'
import { site, CTA_LABEL } from '../site.js'
import { Reveal, SectionLabel } from './ui.jsx'
import { ArrowIcon, CheckIcon, PhoneIcon } from './icons.jsx'

const FORM_NAME = 'preview-request'
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const fields = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name', placeholder: 'Mike Alvarez' },
  { name: 'business', label: 'Business name', type: 'text', autoComplete: 'organization', placeholder: 'Alvarez Plumbing' },
  { name: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel', placeholder: '(555) 123-4567' },
  { name: 'details', label: 'City & industry', type: 'text', autoComplete: 'off', placeholder: 'Tulsa, HVAC' },
]

const nextSteps = [
  'You send the basics, right here.',
  'We build your preview and text you the link.',
  'You decide. Nothing is due until you approve it.',
]

// Netlify Forms by default; set VITE_FORM_ENDPOINT (e.g. Formspree) on other hosts.
function submitLead(data) {
  if (ENDPOINT) {
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
  }
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'form-name': FORM_NAME, ...data }).toString(),
  })
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    if (data['bot-field']) return
    delete data['bot-field']
    setStatus('sending')
    try {
      const res = await submitLead(data)
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`)
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="preview" className="bg-paper px-5 py-24 text-slate sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <Reveal>
          <SectionLabel index="07" paper>
            Free live preview
          </SectionLabel>
          <h2 className="mt-5 font-display text-[2.15rem] leading-[1.02] text-ink sm:text-5xl">
            See your new site before you spend a dollar.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed">
            Four fields, under a minute. We’ll build a working preview for your business and text you the link. If
            you don’t love it, you owe nothing.
          </p>
          <ol className="mt-10 space-y-4 border-t border-paper-line pt-8">
            {nextSteps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-sm text-ochre">0{i + 1}</span>
                <span className="text-ink">{step}</span>
              </li>
            ))}
          </ol>
          <a
            href={site.phoneHref}
            className="mt-10 inline-flex items-center gap-3 rounded-lg border border-paper-line bg-white/60 px-4 py-3 text-ink transition hover:border-slate/40 hover:bg-white"
          >
            <PhoneIcon className="size-5 text-ochre" />
            <span>
              Rather talk? <span className="font-semibold">Call or text {site.phoneDisplay}</span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-paper-line bg-white shadow-[0_30px_70px_-35px_rgb(21_23_26/0.45)]">
            <div className="flex items-center justify-between border-b border-paper-line bg-paper-2/50 px-6 py-4 sm:px-8">
              <p className="font-display text-lg text-ink">Preview request</p>
              <p className="label-mono text-slate/70">About a minute</p>
            </div>

            {status === 'sent' ? (
              <div role="status" className="px-6 py-16 text-center sm:px-8">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-amber text-char">
                  <CheckIcon className="size-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">Got it. We’re on it.</h3>
                <p className="mx-auto mt-3 max-w-sm leading-relaxed">
                  We’ll text your preview link to the number you gave us. Keep an eye on your phone.
                </p>
              </div>
            ) : (
              <form name={FORM_NAME} onSubmit={handleSubmit} className="px-6 py-7 sm:px-8 sm:py-8">
                <p className="hidden">
                  <label>
                    Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="mb-2 block text-sm font-semibold text-ink">
                        {f.label}
                      </label>
                      <input
                        id={f.name}
                        required
                        {...f}
                        className="h-12 w-full rounded-lg border border-paper-line bg-paper/50 px-4 text-base text-ink transition placeholder:text-slate/45 focus:border-ink focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber/30"
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group mt-7 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-amber text-base font-semibold text-char shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition hover:bg-amber-hi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-wait disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : CTA_LABEL}
                  {status !== 'sending' && (
                    <ArrowIcon className="size-[18px] transition-transform group-hover:translate-x-0.5" />
                  )}
                </button>
                {status === 'error' && (
                  <p role="alert" className="mt-4 text-sm text-rust">
                    That didn’t go through. Please try again, or call us at{' '}
                    <a href={site.phoneHref} className="font-semibold underline">
                      {site.phoneDisplay}
                    </a>
                    .
                  </p>
                )}
                <p className="mt-5 text-center text-xs text-slate/80">
                  No payment info. No spam. We only use your number to send your preview.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
