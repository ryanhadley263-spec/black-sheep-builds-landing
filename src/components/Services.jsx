import { Section, Reveal } from './ui.jsx'
import { CheckIcon } from './icons.jsx'

const services = [
  {
    tag: '$500 setup',
    title: 'Mobile-first 1‑page website',
    body: 'A clean, fast site designed for the phone in your customer’s hand. Your services, your service area, and a call button that’s always one thumb away.',
    points: ['Loads fast on any connection', 'Copy written for you', 'Tap-to-call and quote form built in'],
    Visual: SiteVisual,
  },
  {
    tag: 'Add-on',
    title: 'Google Maps & Business Profile boost',
    body: 'Most local jobs start in the map results. We set up or clean up your Google Business Profile and link it to your site, so you show up where people are already looking.',
    points: ['Profile setup or cleanup', 'Right categories, services, and service area', 'Linked to your new site'],
    Visual: MapVisual,
  },
  {
    tag: 'Add-on',
    title: 'Instant SMS lead capture',
    body: 'When someone fills out your form, you get a text with their name, number, and what they need. No dashboard to check, no inbox to dig through. Just call them back.',
    points: ['Leads texted straight to your cell', 'One-tap calling from every screen', 'Nothing new to log into'],
    Visual: SmsVisual,
  },
]

// Soft light that follows the pointer across a card.
function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Services() {
  return (
    <Section
      id="services"
      index="02"
      eyebrow="What you get"
      title="Three things that turn searches into booked jobs."
      intro="Start with the site. Add the rest when you’re ready."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map(({ tag, title, body, points, Visual }, i) => (
          <Reveal
            as="article"
            key={title}
            delay={i * 90}
            onPointerMove={spotlight}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-char-2 transition-colors hover:border-line-2"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 [background:radial-gradient(420px_circle_at_var(--mx)_var(--my),rgb(232_163_61/0.09),transparent_45%)] group-hover:opacity-100"
            />
            <div aria-hidden="true" className="relative h-60 overflow-hidden border-b border-line bg-char">
              <Visual />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="label-mono text-smoke">0{i + 1}</span>
                <span
                  className={`label-mono rounded-full border px-2.5 py-1 ${i === 0 ? 'border-amber/40 text-amber' : 'border-line-2 text-steel-hi'}`}
                >
                  {tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[1.4rem] leading-tight text-paper">{title}</h3>
              <p className="mt-3 leading-relaxed text-fog">{body}</p>
              <div className="mt-auto pt-7">
                <ul className="space-y-2.5 border-t border-line pt-5 text-[15px] text-fog">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <CheckIcon className="mt-[3px] size-4 text-amber" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

// Blueprint of a 1-page site with labeled parts.
function SiteVisual() {
  return (
    <div className="blueprint absolute inset-0">
      <div className="absolute left-4 top-8 w-36 rounded-[1.6rem] min-[380px]:left-6 sm:left-8 border border-line-2 bg-char p-2">
        <div className="h-64 rounded-[1.15rem] border border-line bg-char-2 px-3 pt-4">
          <div className="h-1.5 w-9 rounded-full bg-line-2" />
          <div className="mt-4 h-2.5 w-[88%] rounded-sm bg-paper/75" />
          <div className="mt-1.5 h-2.5 w-[62%] rounded-sm bg-paper/75" />
          <div className="mt-3 h-1.5 w-[92%] rounded-sm bg-smoke/35" />
          <div className="mt-1 h-1.5 w-[74%] rounded-sm bg-smoke/35" />
          <div className="mt-4 h-7 rounded-md bg-amber" />
          <div className="mt-1.5 h-7 rounded-md border border-line-2" />
          <div className="mt-4 grid grid-cols-3 gap-1">
            <div className="h-6 rounded-sm bg-line" />
            <div className="h-6 rounded-sm bg-line" />
            <div className="h-6 rounded-sm bg-line" />
          </div>
        </div>
      </div>
      <Callout className="left-[9.5rem] top-[5.1rem] min-[380px]:left-[10rem] sm:left-[10.5rem]">Trade + city</Callout>
      <Callout className="left-[9.5rem] top-[9.85rem] min-[380px]:left-[10rem] sm:left-[10.5rem]">Tap to call</Callout>
      <Callout className="left-[9.5rem] top-[11.95rem] min-[380px]:left-[10rem] sm:left-[10.5rem]">Quote form</Callout>
    </div>
  )
}

function Callout({ className = '', children }) {
  return (
    <div className={`absolute flex items-center gap-1.5 ${className}`}>
      <span className="size-1.5 rounded-full border border-steel-hi" />
      <span className="h-px w-5 bg-steel-hi/50" />
      <span className="label-mono whitespace-nowrap text-[9.5px] text-steel-hi">{children}</span>
    </div>
  )
}

// A dark map tile with a business pin and its listing card.
function MapVisual() {
  return (
    <div className="absolute inset-0 bg-[#191c20]">
      <div className="absolute inset-0 [background-image:linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="absolute -left-10 top-[64%] h-6 w-[140%] rotate-[6deg] bg-steel/25" />
      <div className="absolute -left-10 top-[36%] h-[7px] w-[140%] -rotate-[7deg] bg-line-2" />
      <div className="absolute -top-10 left-[24%] h-[150%] w-[5px] rotate-[13deg] bg-line" />
      <div className="absolute -top-10 left-[70%] h-[150%] w-1 -rotate-[5deg] bg-line" />
      <div className="absolute left-[44%] top-[18%] flex flex-col items-center">
        <span className="grid size-8 -rotate-45 place-items-center rounded-full rounded-bl-none bg-amber shadow-lg shadow-black/50">
          <span className="size-2.5 rounded-full bg-char" />
        </span>
        <span className="mt-1 h-1.5 w-4 rounded-full bg-black/50 blur-[2px]" />
      </div>
      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-line bg-char/95 p-3.5 shadow-xl shadow-black/40">
        <p className="text-[13px] font-semibold text-paper">Ridgeline Plumbing &amp; Drain</p>
        <p className="mt-0.5 text-[11px] text-smoke">
          Plumber · <span className="text-[#5ad08a]">Open 24 hours</span>
        </p>
        <div className="mt-3 flex gap-1.5">
          <span className="rounded-full bg-amber px-3 py-1 text-[10.5px] font-bold text-char">Call</span>
          <span className="rounded-full border border-line-2 px-3 py-1 text-[10.5px] font-semibold text-fog">Website</span>
          <span className="rounded-full border border-line-2 px-3 py-1 text-[10.5px] font-semibold text-fog">Directions</span>
        </div>
      </div>
    </div>
  )
}

// A lead arriving by text, and the reply.
function SmsVisual() {
  return (
    <div className="blueprint absolute inset-0 flex flex-col justify-center gap-2.5 px-6">
      <p className="label-mono text-center text-[9.5px] text-smoke">Today 7:42 AM</p>
      <div className="max-w-[86%] rounded-2xl rounded-bl-md bg-char-3 px-3.5 py-2.5 text-[12.5px] leading-snug text-paper">
        <p className="label-mono text-[9.5px] text-amber">New quote request</p>
        <p className="mt-1 font-semibold">Dana M. · (555) 010-2231</p>
        <p className="text-fog">“Water heater leaking in the basement.”</p>
      </div>
      <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-amber px-3.5 py-2.5 text-[12.5px] font-semibold leading-snug text-char">
        On my way. Be there by 10.
      </div>
      <p className="text-right text-[10px] text-smoke">Delivered</p>
    </div>
  )
}
