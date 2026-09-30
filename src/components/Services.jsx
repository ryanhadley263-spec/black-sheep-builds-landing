import { Section } from './ui.jsx'

const services = [
  {
    tag: '$500 setup',
    title: 'Mobile-First 1-Page Website',
    body: 'A clean, fast site designed for the phone in your customer’s hand. Your services, your service area, and a call button that is always one thumb away.',
    points: ['Loads fast on any connection', 'Copy written for you', 'Tap-to-call and quote form built in'],
  },
  {
    tag: 'Add-on',
    title: 'Google Maps & GBP Local Search Boost',
    body: 'Most local jobs start in the map results. We set up or clean up your Google Business Profile and link it to your site so you show up where people are already looking.',
    points: ['Profile setup or cleanup', 'Right categories, services, and service area', 'Linked to your new site'],
  },
  {
    tag: 'Add-on',
    title: 'Instant SMS Lead Capture & Direct Call',
    body: 'When someone fills out your form, you get a text with their name, number, and what they need. No dashboard to check, no inbox to dig through. Just call them back.',
    points: ['Leads texted straight to your cell', 'One-tap calling from every screen', 'Nothing new to log into'],
  },
]

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="What you get"
      title="Three things that turn searches into booked jobs"
      intro="Start with the site. Add the rest when you're ready."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="flex flex-col rounded-2xl border border-line bg-panel p-7">
            <span className="self-start rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {s.tag}
            </span>
            <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-zinc-400">{s.body}</p>
            <ul className="mt-auto space-y-2 pt-6 text-sm text-zinc-300">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-accent">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
