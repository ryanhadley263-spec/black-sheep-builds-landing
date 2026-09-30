import { Section, CtaButton, Check } from './ui.jsx'

const included = [
  'Custom 1-page, mobile-first website',
  'Copy written for your trade and your city',
  'Tap-to-call button and quote request form',
  'Built for speed on any phone',
  'Live preview before you pay anything',
  'No long-term contract',
]

const addOns = [
  ['Google Business Profile setup', 'Get found in Maps and local search.'],
  ['SMS lead automation', 'Every form lead texted to your cell.'],
]

export default function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="One price. No surprises."
      intro="You know the number before we start, and you don't pay until you've seen your site."
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-accent/40 bg-panel p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Flat setup</p>
          <p className="mt-3 flex items-baseline gap-3">
            <span className="font-display text-6xl font-bold text-white sm:text-7xl">$500</span>
            <span className="text-zinc-400">one time</span>
          </p>
          <ul className="mt-8 grid gap-3.5 text-zinc-200 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <CtaButton className="mt-10 w-full sm:w-auto" />
        </div>
        <div className="rounded-3xl border border-line bg-panel p-8">
          <h3 className="text-lg font-semibold">Optional add-ons</h3>
          <ul className="mt-5 divide-y divide-line">
            {addOns.map(([name, desc]) => (
              <li key={name} className="py-4">
                <p className="font-medium text-white">{name}</p>
                <p className="mt-1 text-sm text-zinc-400">{desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-400">
            Add-ons are quoted as a flat price upfront. Take them or leave them.
          </p>
        </div>
      </div>
    </Section>
  )
}
