import { CTA_LABEL } from '../site.js'
import { Section, ButtonLink, Reveal } from './ui.jsx'

const steps = [
  {
    meta: 'Free',
    title: 'We build your live preview',
    body: 'Tell us your business name and city. We build a real, working mockup of your site. Zero cost upfront, no card, no commitment.',
  },
  {
    meta: 'Free',
    title: 'You review it on your phone',
    body: 'We text you a link. Open it between jobs, tap around, and tell us what to change. Approve it when it looks right.',
  },
  {
    meta: '$500 flat, once you approve',
    title: 'We launch and leads hit your cell',
    body: 'We put the site live, link your Google listing, and point every call and quote request straight to your phone.',
  },
]

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      index="04"
      eyebrow="How it works"
      title="See it before you pay for it."
      intro="Three steps. Most of the work is on us."
    >
      <ol className="relative grid gap-12 before:absolute before:bottom-8 before:left-5 before:top-5 before:w-px before:bg-line-2 md:grid-cols-3 md:gap-10 md:before:inset-x-0 md:before:bottom-auto md:before:top-5 md:before:h-px md:before:w-auto">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 110} className="relative pl-16 md:pl-0">
            <span
              className={`absolute left-0 top-0 grid size-10 place-items-center rounded-full font-mono text-sm font-medium ring-8 ring-char md:relative ${i === steps.length - 1 ? 'bg-amber text-char' : 'bg-paper text-char'}`}
            >
              0{i + 1}
            </span>
            <p className="label-mono pt-3 text-amber md:mt-8 md:pt-0">{step.meta}</p>
            <h3 className="mt-2 font-display text-[1.4rem] leading-tight text-paper">{step.title}</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-fog">{step.body}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-16 flex flex-col gap-5 rounded-2xl border border-line bg-char-2 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="font-display text-xl text-paper sm:text-2xl">Step one costs nothing.</p>
          <p className="mt-1 text-fog">Four fields, under a minute. No card.</p>
        </div>
        <ButtonLink href="#preview">{CTA_LABEL}</ButtonLink>
      </Reveal>
    </Section>
  )
}
