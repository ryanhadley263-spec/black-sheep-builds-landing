import { Section, Check } from './ui.jsx'

const agency = [
  '$3,000 to $5,000 before you see a single page',
  'Weeks of meetings, revisions, and waiting',
  'Ten pages nobody reads and a blog you will never update',
  'Monthly retainers and contracts that are hard to leave',
  'Looks nice. Does not make the phone ring.',
]

const lean = [
  '$500 flat, and you see it live before you pay',
  'One page, built fast, with no meetings to sit through',
  'Answers three questions: what you do, where, and how to reach you',
  'No long-term contract',
  'Every button leads to a call, a text, or a quote request',
]

export default function Problem() {
  return (
    <Section
      eyebrow="The problem"
      title="You don't need a $5,000 website. You need more calls."
      intro="Someone with a dead battery or a flooded basement isn't browsing. They search on their phone, pick a business that looks legit, and tap call. Your site has one job: be the one they pick."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-panel p-7">
          <h3 className="text-lg font-semibold text-zinc-400">The traditional agency site</h3>
          <ul className="mt-5 space-y-3.5 text-zinc-400">
            {agency.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-zinc-600">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-accent/40 bg-panel p-7">
          <h3 className="text-lg font-semibold">The Black Sheep lead engine</h3>
          <ul className="mt-5 space-y-3.5 text-zinc-200">
            {lean.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
