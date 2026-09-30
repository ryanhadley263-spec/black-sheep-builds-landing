import { CtaButton, Check } from './ui.jsx'

const proof = ['$500 flat', 'No contracts', 'Pay nothing until you approve it']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm text-zinc-300">
            Websites for contractors, plumbers, HVAC, auto repair &amp; detailers
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Your phone should be ringing. <span className="text-accent">We build the site that makes it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400 sm:text-xl">
            Black Sheep Builds makes fast, 1-page mobile websites for local service businesses, connects them to
            Google Maps, and sends every lead straight to your cell by call or text. So the people searching for
            what you do book you, not the next guy.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton className="w-full sm:w-auto" />
            <a href="#how-it-works" className="text-center text-sm font-medium text-zinc-300 hover:text-white">
              See how it works
            </a>
          </div>
          <ul className="mt-8 flex flex-col gap-2.5 text-sm text-zinc-300 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <PhoneMock />
      </div>
    </section>
  )
}

// Illustrative sample of the kind of site a client gets.
function PhoneMock() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[18rem]">
      <div className="rounded-[2.5rem] border border-line bg-panel p-3 shadow-2xl shadow-black">
        <div className="overflow-hidden rounded-[2rem] bg-zinc-950">
          <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 px-5 pb-6 pt-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-accent">Your Business Here</p>
            <p className="mt-2 font-display text-xl font-bold leading-tight text-white">
              Same-day service. Honest prices.
            </p>
            <p className="mt-2 text-xs text-zinc-400">Licensed &amp; insured · Serving your city</p>
            <div className="mt-4 rounded-full bg-accent py-2.5 text-center text-sm font-semibold text-ink">
              Tap to Call
            </div>
            <div className="mt-2 rounded-full border border-zinc-600 py-2.5 text-center text-sm font-semibold text-white">
              Get a Free Quote
            </div>
          </div>
          <div className="space-y-2 px-5 pb-24 pt-5">
            <div className="h-2 w-3/4 rounded bg-zinc-800" />
            <div className="h-2 w-full rounded bg-zinc-800" />
            <div className="h-2 w-2/3 rounded bg-zinc-800" />
          </div>
        </div>
      </div>
      <div className="absolute -left-2 bottom-8 w-56 rounded-2xl border border-line bg-ink p-3.5 shadow-xl shadow-black sm:-left-16">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-accent">New lead · just now</p>
        <p className="mt-1 text-sm text-white">“Water heater is leaking. Can you come out today?”</p>
      </div>
    </div>
  )
}
