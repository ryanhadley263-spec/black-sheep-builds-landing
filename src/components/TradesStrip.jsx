const trades = [
  'Plumbers',
  'HVAC',
  'Electricians',
  'Roofers',
  'Auto repair',
  'Detailers',
  'Landscapers',
  'General contractors',
  'Painters',
  'Garage doors',
  'Pest control',
  'Cleaning crews',
]

export default function TradesStrip() {
  return (
    <div className="border-y border-line bg-char-2/70">
      <p className="sr-only">Built for {trades.join(', ')}.</p>
      <div
        aria-hidden="true"
        className="flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <ul className="flex shrink-0 animate-marquee items-center motion-reduce:animate-none">
          {[...trades, ...trades].map((trade, i) => (
            <li key={i} className="label-mono flex items-center whitespace-nowrap text-smoke">
              <span className="px-6">{trade}</span>
              <span className="size-1 rotate-45 bg-amber/70" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
