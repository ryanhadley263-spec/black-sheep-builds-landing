import { site } from '../site.js'
import { Reveal, SectionLabel } from './ui.jsx'
import { PlusIcon } from './icons.jsx'

// Every answer restates something the page already promises. Keep it that way.
const faqs = [
  {
    q: 'What do I get for $500?',
    a: 'A custom, mobile-first one-page website: copy written for your trade and your city, a tap-to-call button, and a quote request form, built to load fast on any phone.',
  },
  {
    q: 'Do I pay anything before I see it?',
    a: 'No. We build a live preview first and text you the link. You pay the $500 only after you’ve seen it and approved it.',
  },
  {
    q: 'What if I don’t like the preview?',
    a: 'Tell us what to change. And if you don’t love it, you owe nothing.',
  },
  {
    q: 'Do I have to sign a contract?',
    a: 'No. There’s no long-term contract.',
  },
  {
    q: 'Do I need the add-ons?',
    a: 'No. Google Business Profile setup and SMS lead automation are optional. Each is quoted as a flat price upfront, so you can take them or leave them.',
  },
  {
    q: 'I already have a website. Can you still help?',
    a: 'Yes. We’ll build a preview of the new version so you can compare it side by side with what you have now.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionLabel index="06">Questions</SectionLabel>
          <h2 className="mt-5 font-display text-[2.15rem] leading-[1.02] text-paper sm:text-5xl">Straight answers.</h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed">The usual questions before you request a preview.</p>
          <p className="mt-8 text-fog">
            Don’t see yours?{' '}
            <a
              href={site.phoneHref}
              className="font-semibold text-paper underline decoration-amber decoration-2 underline-offset-4 transition-colors hover:text-amber"
            >
              Call or text {site.phoneDisplay}
            </a>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="border-t border-line">
            {faqs.map(({ q, a }, i) => (
              <details key={q} className="group border-b border-line" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-5 text-left text-[17px] font-semibold text-paper transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line-2 text-amber transition-transform duration-300 group-open:rotate-45">
                    <PlusIcon className="size-4" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-fog">{a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
