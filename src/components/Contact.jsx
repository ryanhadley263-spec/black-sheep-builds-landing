import { useState } from 'react'
import { site, CTA_LABEL } from '../site.js'

const FORM_NAME = 'preview-request'
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const fields = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name', placeholder: 'Mike Alvarez' },
  { name: 'business', label: 'Business name', type: 'text', autoComplete: 'organization', placeholder: 'Alvarez Plumbing' },
  { name: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel', placeholder: '(555) 123-4567' },
  { name: 'details', label: 'City & industry', type: 'text', autoComplete: 'off', placeholder: 'Tulsa, HVAC' },
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
    <section id="preview" className="border-t border-line px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Free live preview</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            See your new site before you spend a dollar.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-zinc-400">
            Four fields, under a minute. We'll build a working preview for your business and text you the link.
            If you don't love it, you owe nothing.
          </p>
          <p className="mt-8 text-zinc-400">
            Rather talk?{' '}
            <a href={site.phoneHref} className="font-semibold text-white underline decoration-accent underline-offset-4">
              Call or text {site.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
          {status === 'sent' ? (
            <div role="status" className="py-10 text-center">
              <h3 className="text-2xl font-bold">Got it. We're on it.</h3>
              <p className="mt-3 text-zinc-400">
                We'll text your preview link to the number you gave us. Keep an eye on your phone.
              </p>
            </div>
          ) : (
            <form name={FORM_NAME} onSubmit={handleSubmit} className="space-y-5">
              <p className="hidden">
                <label>
                  Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              {fields.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-zinc-200">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    required
                    {...f}
                    className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full cursor-pointer rounded-full bg-accent px-6 py-4 text-base font-semibold text-ink transition hover:brightness-110 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : CTA_LABEL}
              </button>
              {status === 'error' && (
                <p role="alert" className="text-sm text-red-400">
                  That didn't go through. Please try again, or call us at{' '}
                  <a href={site.phoneHref} className="underline">
                    {site.phoneDisplay}
                  </a>
                  .
                </p>
              )}
              <p className="text-center text-xs text-zinc-500">
                No payment info. No spam. We only use your number to send your preview.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
