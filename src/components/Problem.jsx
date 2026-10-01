import { Reveal, SectionLabel } from './ui.jsx'
import { Sheep, SheepMark } from './Logo.jsx'
import { CheckIcon, XIcon } from './icons.jsx'

const rows = [
  ['Upfront cost', '$3,000–$5,000', '$500 flat'],
  ['When you see it', 'After you’ve paid', 'Before you pay a dime'],
  ['What you get', 'Ten pages nobody reads', 'One page built to get calls'],
  ['Your time', 'Weeks of meetings and revisions', 'Review it on your phone between jobs'],
  ['Contract', 'Monthly retainer', 'No long-term contract'],
  ['Built for', 'Looking good in a meeting', 'Making your phone ring'],
]

const grid = 'grid grid-cols-2 sm:grid-cols-[0.75fr_1fr_1fr]'

export default function Problem() {
  return (
    <section className="bg-paper px-5 py-24 text-slate sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal className="max-w-3xl">
            <SectionLabel index="01" paper>
              The problem
            </SectionLabel>
            <h2 className="mt-5 font-display text-[2.15rem] leading-[1.02] text-ink sm:text-5xl">
              You don’t need a $5,000 website. You need more calls.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed">
              Someone with a dead battery or a flooded basement isn’t browsing. They search on their phone, pick a
              business that looks legit, and tap call. Your site has one job: be the one they pick.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Flock />
          </Reveal>
        </div>

        <Reveal className="mt-14 sm:mt-16">
          <div
            role="table"
            aria-label="A typical agency website compared with Black Sheep Builds"
            className="overflow-hidden rounded-xl border border-paper-line bg-paper shadow-[0_24px_60px_-34px_rgb(21_23_26/0.45)]"
          >
            <div role="row" className={grid}>
              <div role="columnheader" className="label-mono hidden bg-paper-2 px-5 py-4 text-slate sm:block">
                Spec
              </div>
              <div role="columnheader" className="label-mono bg-paper-2 px-5 py-4 text-slate">
                Typical agency
              </div>
              <div role="columnheader" className="label-mono flex items-center gap-2.5 bg-char px-5 py-4 text-paper">
                <SheepMark className="size-5" />
                <span className="sm:hidden">Black Sheep</span>
                <span className="hidden sm:inline">Black Sheep Builds</span>
              </div>
            </div>
            {rows.map(([label, agency, us]) => (
              <div key={label} role="row" className={`${grid} border-t border-paper-line`}>
                <div
                  role="rowheader"
                  className="label-mono col-span-2 px-5 pt-5 text-slate sm:col-span-1 sm:flex sm:items-center sm:py-5"
                >
                  {label}
                </div>
                <div
                  role="cell"
                  className="flex items-start gap-2.5 px-5 pb-5 pt-2.5 text-[15px] leading-snug text-slate sm:items-center sm:py-5"
                >
                  <XIcon className="mt-0.5 size-4 text-rust sm:mt-0" />
                  {agency}
                </div>
                <div
                  role="cell"
                  className="flex items-start gap-2.5 bg-white px-5 pb-5 pt-2.5 text-[15px] font-semibold leading-snug text-ink sm:items-center sm:py-5"
                >
                  <CheckIcon className="mt-0.5 size-4 text-ochre sm:mt-0" />
                  {us}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// The whole brand in one picture: a flock all facing one way, and one black sheep that doesn't.
function Flock() {
  const perRow = 6
  return (
    <figure className="lg:pl-6">
      <div aria-hidden="true" className="flex flex-col gap-2 sm:gap-2.5">
        {[0, 1, 2].map((row) => (
          <div key={row} className={`flex gap-1.5 sm:gap-2.5 ${row === 1 ? 'pl-5 sm:pl-7' : ''}`}>
            {Array.from({ length: perRow }, (_, i) => {
              const you = row === 1 && i === 2
              return you ? (
                <span key={i} className="relative">
                  <span className="label-mono absolute -top-5 left-1/2 -translate-x-1/2 text-ochre">You</span>
                  <Sheep className="size-9 min-[380px]:size-10 sm:size-12" />
                </span>
              ) : (
                <Sheep key={i} flip className="size-9 min-[380px]:size-10 sm:size-12" fill="fill-paper-line" eye="fill-paper" />
              )
            })}
          </div>
        ))}
      </div>
      <figcaption className="mt-6 max-w-sm text-[15px] leading-relaxed">
        Most contractor sites look the same.{' '}
        <span className="font-semibold text-ink">Yours should be the one they remember, and call.</span>
      </figcaption>
    </figure>
  )
}
