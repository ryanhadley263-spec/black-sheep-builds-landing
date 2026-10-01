const WOOL =
  'M25 17.6A3.72 3.72 0 1 1 31.2 19.26A3.72 3.72 0 1 1 35.74 23.8A3.72 3.72 0 1 1 37.4 30A3.72 3.72 0 1 1 35.74 36.2A3.72 3.72 0 1 1 31.2 40.74A3.72 3.72 0 1 1 25 42.4A3.72 3.72 0 1 1 18.8 40.74A3.72 3.72 0 1 1 14.26 36.2A3.72 3.72 0 1 1 12.6 30A3.72 3.72 0 1 1 14.26 23.8A3.72 3.72 0 1 1 18.8 19.26A3.72 3.72 0 1 1 25 17.6Z'

// The black sheep on a paper tile. Same drawing as public/favicon.svg.
export function SheepMark({ className = 'size-8' }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`shrink-0 ${className}`}>
      <rect width="64" height="64" rx="14" className="fill-paper" />
      <g className="fill-char">
        <rect x="16" y="37" width="5.2" height="14" rx="2.6" />
        <rect x="28.5" y="37" width="5.2" height="14" rx="2.6" />
        <path d={WOOL} />
      </g>
      <g className="fill-char stroke-paper" strokeWidth="2.4" paintOrder="stroke">
        <ellipse cx="38.6" cy="22.6" rx="5.4" ry="2.3" transform="rotate(-20 38.6 22.6)" />
        <rect x="40" y="21" width="11" height="17" rx="5.5" transform="rotate(-36 45.5 29.5)" />
      </g>
      <circle cx="47.8" cy="27.8" r="1.35" className="fill-paper" />
    </svg>
  )
}

// Just the sheep, no tile. `fill`/`cut` are Tailwind fill/stroke classes; `cut` should match the background.
export function Sheep({ className = 'size-10', fill = 'fill-char', cut = 'stroke-paper', eye = 'fill-paper', flip = false }) {
  return (
    <svg viewBox="9 13 46 42" aria-hidden="true" className={`shrink-0 ${flip ? '-scale-x-100' : ''} ${className}`}>
      <g className={fill}>
        <rect x="16" y="37" width="5.2" height="14" rx="2.6" />
        <rect x="28.5" y="37" width="5.2" height="14" rx="2.6" />
        <path d={WOOL} />
      </g>
      <g className={`${fill} ${cut}`} strokeWidth="2.4" paintOrder="stroke">
        <ellipse cx="38.6" cy="22.6" rx="5.4" ry="2.3" transform="rotate(-20 38.6 22.6)" />
        <rect x="40" y="21" width="11" height="17" rx="5.5" transform="rotate(-36 45.5 29.5)" />
      </g>
      <circle cx="47.8" cy="27.8" r="1.35" className={eye} />
    </svg>
  )
}

export function Logo({ className = '' }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Black Sheep Builds, back to top">
      <SheepMark className="size-8 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="font-display whitespace-nowrap text-[12px] uppercase leading-none tracking-[0.03em] text-paper sm:text-[13px] sm:tracking-[0.04em]">
        Black Sheep <span className="text-amber max-[379px]:hidden">Builds</span>
      </span>
    </a>
  )
}
