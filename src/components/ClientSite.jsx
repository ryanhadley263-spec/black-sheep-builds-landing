import { PhoneIcon } from './icons.jsx'

// Fictional sample businesses, drawn as small mobile sites. Phone numbers use the 555-01xx range reserved for fiction.
export const themes = {
  ridgeline: {
    name: 'RIDGELINE',
    sub: 'Plumbing & Drain',
    badge: 'Open now · Same-day service',
    headline: 'Leaky pipe? We’ll be there today.',
    blurb: 'Licensed plumbers serving the metro. Upfront prices, no surprises.',
    phone: '(555) 010-4477',
    trust: ['Licensed & insured', 'Upfront pricing', '7 days a week'],
    services: ['Drain cleaning', 'Water heaters', 'Leak repair', 'Sewer lines'],
    type: { family: 'Archivo', stretch: '116%', weight: 800, tracking: '-0.02em' },
    radius: '8px',
    c: {
      top: '#13263c', topText: '#ffffff', topMuted: '#b8c8d8', sub: '#9fb6cc',
      accent: '#e8a33d', accentText: '#13263c', page: '#ffffff', text: '#13263c',
      line: '#e6eaef', muted: '#6b7f93', badgeBg: 'rgb(255 255 255 / 0.1)', badgeText: '#cfe0ef',
      live: '#4ade80', ring: 'rgb(255 255 255 / 0.04)', outline: 'rgb(255 255 255 / 0.3)',
      trustText: '#3d5168', second: '#13263c', secondText: '#ffffff',
    },
  },
  northside: {
    name: 'Northside',
    sub: 'Heating & Air',
    badge: 'Same-day AC repair',
    headline: 'AC out? Cool again by tonight.',
    blurb: 'Repairs, tune-ups, and new systems. Straight answers on price.',
    phone: '(555) 010-6620',
    trust: ['Licensed techs', 'Flat-rate pricing', 'Nights & weekends'],
    services: ['AC repair', 'Furnace service', 'New systems', 'Maintenance plans'],
    type: { family: 'Georgia, "Times New Roman", serif', stretch: '100%', weight: 700, tracking: '-0.01em' },
    radius: '999px',
    c: {
      top: '#f3ede2', topText: '#1d1915', topMuted: '#5f564c', sub: '#a0412f',
      accent: '#c2412d', accentText: '#ffffff', page: '#ffffff', text: '#1d1915',
      line: '#ece6dc', muted: '#8a7f72', badgeBg: 'rgb(194 65 45 / 0.1)', badgeText: '#9b321f',
      live: '#c2412d', ring: 'rgb(194 65 45 / 0.06)', outline: 'rgb(29 25 21 / 0.22)',
      trustText: '#5f564c', second: '#1d1915', secondText: '#ffffff',
    },
  },
  glosslab: {
    name: 'GLOSS LAB',
    sub: 'Mobile Detailing',
    badge: 'We come to you',
    headline: 'Showroom shine in your driveway.',
    blurb: 'Mobile detailing, ceramic coating, and interior resets.',
    phone: '(555) 010-9083',
    trust: ['Fully mobile', 'Book in a minute', 'Water on board'],
    services: ['Full detail', 'Ceramic coating', 'Interior reset', 'Fleet washes'],
    type: { family: 'Archivo', stretch: '125%', weight: 700, tracking: '0.005em', upper: true },
    radius: '4px',
    c: {
      top: '#0b0c0e', topText: '#f4f7fb', topMuted: '#9aa6b2', sub: '#7dd3fc',
      accent: '#7dd3fc', accentText: '#04131c', page: '#121417', text: '#e8edf2',
      line: '#23272c', muted: '#6b7682', badgeBg: 'rgb(125 211 252 / 0.12)', badgeText: '#bae6fd',
      live: '#7dd3fc', ring: 'rgb(125 211 252 / 0.07)', outline: 'rgb(244 247 251 / 0.25)',
      trustText: '#9aa6b2', second: '#1e2227', secondText: '#f4f7fb',
    },
  },
  kessler: {
    name: 'KESSLER',
    sub: 'Auto Repair',
    badge: 'Open today · 7am–6pm',
    headline: 'Honest repairs. Straight answers.',
    blurb: 'Brakes, diagnostics, and maintenance for every make and model.',
    phone: '(555) 010-3517',
    trust: ['Certified techs', 'Written estimates', 'Free rides'],
    services: ['Brakes', 'Check engine light', 'Oil & maintenance', 'Tires & alignment'],
    type: { family: 'Archivo', stretch: '100%', weight: 800, tracking: '-0.035em' },
    radius: '2px',
    c: {
      top: '#202225', topText: '#ffffff', topMuted: '#a9adb3', sub: '#facc15',
      accent: '#facc15', accentText: '#17181a', page: '#ffffff', text: '#17181a',
      line: '#e7e7e7', muted: '#7a7d82', badgeBg: 'rgb(250 204 21 / 0.14)', badgeText: '#fde68a',
      live: '#4ade80', ring: 'rgb(255 255 255 / 0.04)', outline: 'rgb(255 255 255 / 0.28)',
      trustText: '#4a4d52', second: '#202225', secondText: '#ffffff',
    },
  },
  evergreen: {
    name: 'Evergreen',
    sub: 'Lawn & Landscape',
    badge: 'Weekly routes open',
    headline: 'A yard you’ll actually want to sit in.',
    blurb: 'Weekly mowing, seasonal cleanups, and new plantings.',
    phone: '(555) 010-5142',
    trust: ['Free estimates', 'Weekly routes', 'Fully insured'],
    services: ['Weekly mowing', 'Seasonal cleanup', 'Mulch & beds', 'Shrub care'],
    type: { family: 'Archivo', stretch: '100%', weight: 700, tracking: '-0.015em' },
    radius: '12px',
    c: {
      top: '#173a2a', topText: '#f5f1e6', topMuted: '#b9c9bd', sub: '#e9c46a',
      accent: '#e9c46a', accentText: '#173a2a', page: '#fbf8f1', text: '#173a2a',
      line: '#e8e2d4', muted: '#7a8a7e', badgeBg: 'rgb(245 241 230 / 0.12)', badgeText: '#e7efe4',
      live: '#a7f3d0', ring: 'rgb(245 241 230 / 0.05)', outline: 'rgb(245 241 230 / 0.3)',
      trustText: '#4f6356', second: '#173a2a', secondText: '#f5f1e6',
    },
  },
}

export function StatusBar({ bg, fg }) {
  return (
    <div
      className="flex h-11 items-end justify-between px-6 pb-1.5 font-sans text-[10px] font-semibold"
      style={{ background: bg, color: fg }}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[2px]">
          {[4, 6, 8, 10].map((h) => (
            <span key={h} className="w-[3px] rounded-[1px]" style={{ height: h, background: fg }} />
          ))}
        </span>
        <span className="h-[10px] w-[20px] rounded-[3px] border p-[1.5px]" style={{ borderColor: fg }}>
          <span className="block h-full w-3/4 rounded-[1px]" style={{ background: fg }} />
        </span>
      </span>
    </div>
  )
}

// One sample client site at phone size (fills a 560px-tall screen).
export function ClientSite({ t }) {
  const c = t.c
  const head = {
    fontFamily: t.type.family,
    fontStretch: t.type.stretch,
    fontWeight: t.type.weight,
    letterSpacing: t.type.tracking,
    textTransform: t.type.upper ? 'uppercase' : undefined,
  }
  const button = { borderRadius: t.radius }
  return (
    <div aria-hidden="true" className="relative h-[560px] overflow-hidden" style={{ background: c.page, color: c.text }}>
      <StatusBar bg={c.top} fg={c.topText} />

      <div className="flex items-center justify-between px-5 pb-3 pt-2" style={{ background: c.top }}>
        <div className="leading-none">
          <p className="text-[14px]" style={{ ...head, textTransform: undefined, color: c.topText }}>
            {t.name}
          </p>
          <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.22em]" style={{ color: c.sub }}>
            {t.sub}
          </p>
        </div>
        <span className="grid size-8 place-items-center rounded-full" style={{ background: c.accent, color: c.accentText }}>
          <PhoneIcon className="size-4" strokeWidth={2.2} />
        </span>
      </div>

      <div className="relative overflow-hidden px-5 pb-7 pt-5" style={{ background: c.top }}>
        <div className="absolute -right-10 -top-6 size-40 rounded-full border-[14px]" style={{ borderColor: c.ring }} />
        <p
          className="relative inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-wider"
          style={{ background: c.badgeBg, color: c.badgeText }}
        >
          <span className="size-1.5 rounded-full" style={{ background: c.live }} />
          {t.badge}
        </p>
        <p className={`relative mt-3.5 leading-[1.04] ${t.type.upper ? 'text-[19px]' : 'text-[23px]'}`} style={{ ...head, color: c.topText }}>
          {t.headline}
        </p>
        <p className="relative mt-2.5 text-[11px] leading-snug" style={{ color: c.topMuted }}>
          {t.blurb}
        </p>
        <div className="relative mt-5 space-y-2">
          <div
            className="flex h-10 items-center justify-center gap-1.5 text-[12px] font-bold"
            style={{ ...button, background: c.accent, color: c.accentText }}
          >
            <PhoneIcon className="size-3.5" strokeWidth={2.4} />
            Call {t.phone}
          </div>
          <div
            className="flex h-10 items-center justify-center text-[12px] font-semibold"
            style={{ ...button, border: `1px solid ${c.outline}`, color: c.topText }}
          >
            Get a free quote
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 text-center" style={{ borderBottom: `1px solid ${c.line}` }}>
        {t.trust.map((x, i) => (
          <p
            key={x}
            className="px-1.5 py-3 text-[8.5px] font-semibold uppercase leading-tight tracking-wide"
            style={{ color: c.trustText, borderLeft: i ? `1px solid ${c.line}` : undefined }}
          >
            {x}
          </p>
        ))}
      </div>

      <div className="px-5 pt-4">
        <p className="font-mono text-[8px] uppercase tracking-[0.22em]" style={{ color: c.muted }}>
          Services
        </p>
        {t.services.map((s) => (
          <div
            key={s}
            className="flex items-center justify-between py-2.5 text-[12px] font-semibold"
            style={{ borderBottom: `1px solid ${c.line}` }}
          >
            {s}
            <span style={{ color: c.muted }}>›</span>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 grid grid-cols-[1fr_1.3fr] gap-2 px-3 pb-5 pt-2.5"
        style={{ background: c.page, borderTop: `1px solid ${c.line}` }}
      >
        <div
          className="flex h-10 items-center justify-center text-[12px] font-semibold"
          style={{ ...button, background: c.second, color: c.secondText }}
        >
          Text us
        </div>
        <div
          className="flex h-10 items-center justify-center gap-1.5 text-[12px] font-bold"
          style={{ ...button, background: c.accent, color: c.accentText }}
        >
          <PhoneIcon className="size-3.5" strokeWidth={2.4} />
          Call now
        </div>
      </div>
    </div>
  )
}

export function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`rounded-[2.9rem] bg-[#0c0d0f] p-[11px] ring-1 ring-white/10 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.25rem]">
        {children}
        <div className="pointer-events-none absolute left-1/2 top-2.5 h-[22px] w-[82px] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  )
}
