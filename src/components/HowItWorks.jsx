import { Section, CtaButton } from './ui.jsx'

const steps = [
  {
    title: 'We build your live preview',
    body: 'Tell us your business name and city. We build a real, working mockup of your site. Zero cost upfront, no card, no commitment.',
  },
  {
    title: 'You review it on your phone',
    body: 'We text you a link. Open it between jobs, tap around, and tell us what to change. Approve it when it looks right.',
  },
  {
    title: 'We launch and leads hit your cell',
    body: 'We put the site live, link your Google listing, and point every call and quote request straight to your phone.',
  },
]

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="See it before you pay for it"
      intro="Three steps. Most of the work is on us."
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-line bg-panel p-7">
            <span className="font-display text-5xl font-bold text-accent">{i + 1}</span>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-zinc-400">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <CtaButton className="w-full sm:w-auto" />
      </div>
    </Section>
  )
}
