import { CTA_LABEL } from '../site.js'
import { Section, ButtonLink, Reveal } from './ui.jsx'
import { CheckIcon, MessageIcon, PinIcon } from './icons.jsx'

const included = [
  'Custom 1-page, mobile-first website',
  'Copy written for your trade and your city',
  'Tap-to-call button and quote request form',
  'Built for speed on any phone',
  'Live preview before you pay anything',
  'No long-term contract',
]

const addOns = [
  { Icon: PinIcon, name: 'Google Business Profile setup', desc: 'Get found in Maps and local search.' },
  { Icon: MessageIcon, name: 'SMS lead automation', desc: 'Every form lead texted to your cell.' },
]

export default function Pricing() {
  return (
    <Section
      id="pricing"
      tone="paper"
      index="05"
      eyebrow="Pricing"
      title="One price. No surprises."
      intro="You know the number before we start, and you don’t pay until you’ve seen your site."
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start [&>*]:min-w-0">
        <Reveal className="relative rounded-2xl border border-paper-line bg-[#fffdf8] text-slate shadow-[0_40px_80px_-40px_rgb(21_23_26/0.5)]">
          <div aria-hidden="true" className="stripes h-3 rounded-t-2xl" />
          <Stamp className="pointer-events-none absolute right-3 top-12 size-24 -rotate-[13deg] mix-blend-multiply sm:right-10 sm:top-10 sm:size-36" />

          <div className="px-6 pb-8 pt-7 sm:px-10 sm:pt-9">
            <p className="label-mono text-ochre">
              Work order <span className="hidden text-slate/60 sm:inline">· No. BSB-0001</span>
            </p>
            <h3 className="mt-2 pr-24 font-display text-2xl leading-tight text-ink sm:pr-40 sm:text-[1.9rem]">
              Flat-rate website build
            </h3>
            <ul className="mt-8 border-t border-paper-line">
              {included.map((item) => (
                <li key={item} className="flex items-center justify-between gap-4 border-b border-paper-line py-3.5">
                  <span className="flex items-start gap-3 text-[15px] leading-snug text-ink">
                    <CheckIcon className="mt-px size-[18px] text-ochre" />
                    {item}
                  </span>
                  <span className="label-mono hidden text-slate/60 sm:block">Included</span>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="relative h-6">
            <span className="absolute -left-3 top-0 size-6 rounded-full border-r border-paper-line bg-paper" />
            <span className="absolute -right-3 top-0 size-6 rounded-full border-l border-paper-line bg-paper" />
            <span className="absolute inset-x-6 top-1/2 border-t-2 border-dashed border-paper-line" />
          </div>

          <div className="px-6 pb-8 pt-5 sm:px-10 sm:pb-10">
            <dl>
              <div className="flex items-baseline justify-between gap-4 text-[15px]">
                <dt>Due before you see your preview</dt>
                <dd className="font-mono text-ink">$0</dd>
              </div>
              <div className="mt-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
                <dt className="label-mono whitespace-nowrap pb-2 text-ink">Total · one time</dt>
                <dd className="font-display text-6xl leading-none text-ink sm:text-7xl">$500</dd>
              </div>
            </dl>
            <ButtonLink href="#preview" className="mt-8 w-full">
              {CTA_LABEL}
            </ButtonLink>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={120} className="rounded-2xl bg-char p-7 text-fog shadow-[0_30px_60px_-35px_rgb(21_23_26/0.6)]">
            <p className="label-mono text-smoke">Optional add-ons</p>
            <ul className="mt-2 divide-y divide-line">
              {addOns.map(({ Icon, name, desc }) => (
                <li key={name} className="flex gap-4 py-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line-2 text-amber">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-paper">{name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-fog">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="border-t border-line pt-5 text-sm leading-relaxed text-smoke">
              Quoted as a flat price upfront. Take them or leave them.
            </p>
          </Reveal>
          <Reveal delay={200} className="rounded-2xl border border-dashed border-slate/30 p-7">
            <p className="font-display text-xl text-ink">Don’t love the preview?</p>
            <p className="mt-2 leading-relaxed">You owe nothing. That’s the whole deal.</p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

// Rubber stamp on the work order. The SVG filter knocks speckles out of the ink.
function Stamp({ className = '' }) {
  return (
    <svg viewBox="0 0 140 140" aria-hidden="true" className={className}>
      <defs>
        <path id="stamp-ring" d="M70 70m-51 0a51 51 0 1 1 102 0a51 51 0 1 1-102 0" />
        <filter id="stamp-ink" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="11" result="noise" />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.4 1.85"
            result="speckle"
          />
          <feComposite in="SourceGraphic" in2="speckle" operator="in" />
        </filter>
      </defs>
      <g filter="url(#stamp-ink)" className="fill-rust stroke-rust" opacity="0.92">
        <circle cx="70" cy="70" r="66" fill="none" strokeWidth="3.5" />
        <circle cx="70" cy="70" r="40" fill="none" strokeWidth="1.6" />
        <text stroke="none" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fontWeight="500" letterSpacing="1.9">
          <textPath href="#stamp-ring">NO PAYMENT UNTIL YOU APPROVE ★ FREE PREVIEW ★</textPath>
        </text>
        <text x="70" y="72" textAnchor="middle" stroke="none" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="30" style={{ fontStretch: '116%' }}>
          $0
        </text>
        <text x="70" y="88" textAnchor="middle" stroke="none" fontFamily="IBM Plex Mono, monospace" fontSize="8.5" letterSpacing="2">
          UPFRONT
        </text>
      </g>
    </svg>
  )
}
