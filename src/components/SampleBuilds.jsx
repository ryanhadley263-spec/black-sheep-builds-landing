import { Section, Reveal } from './ui.jsx'
import { ClientSite, PhoneFrame, themes } from './ClientSite.jsx'

const builds = [
  { key: 'northside', trade: 'HVAC' },
  { key: 'glosslab', trade: 'Mobile detailing' },
  { key: 'kessler', trade: 'Auto repair' },
  { key: 'evergreen', trade: 'Landscaping' },
]

export default function SampleBuilds() {
  return (
    <Section
      id="samples"
      tone="paper"
      index="03"
      eyebrow="Sample builds"
      title="Built around your trade, not a template."
      intro="A few sample concepts. Your preview is designed around your business, your services, and your town."
    >
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
        {builds.map(({ key, trade }, i) => (
          <Reveal key={key} delay={i * 90} className="shrink-0 snap-center">
            <figure className={i % 2 ? 'lg:mt-16' : ''}>
              <div className="mx-auto h-[466px] w-[234px]">
                <div className="w-[292px] origin-top-left scale-[0.8]">
                  <PhoneFrame className="shadow-[0_40px_70px_-30px_rgb(21_23_26/0.55)]">
                    <ClientSite t={themes[key]} />
                  </PhoneFrame>
                </div>
              </div>
              <figcaption className="mx-auto mt-5 flex w-[234px] items-baseline justify-between border-t border-paper-line pt-3">
                <span className="font-semibold text-ink">{trade}</span>
                <span className="label-mono text-slate/70">Concept 0{i + 1}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="label-mono mt-6 text-slate/70 lg:hidden">Swipe for more →</p>
    </Section>
  )
}
