import { CTA_LABEL } from '../site.js'

export function CtaButton({ className = '', children = CTA_LABEL }) {
  return (
    <a
      href="#preview"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-ink transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  )
}

export function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="border-t border-line px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg text-zinc-400">{intro}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

export function Check({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`size-5 shrink-0 text-accent ${className}`}>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}
