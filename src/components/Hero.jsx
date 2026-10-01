import { useEffect, useRef, useState } from 'react'
import { site, CTA_LABEL } from '../site.js'
import { ButtonLink } from './ui.jsx'
import { MessageIcon, PhoneIcon } from './icons.jsx'
import { ClientSite, PhoneFrame, StatusBar, themes } from './ClientSite.jsx'

const specs = [
  ['Setup', '$500'],
  ['Contract', 'None'],
  ['Due upfront', '$0'],
]

const rise = (ms) => ({ animationDelay: `${ms}ms` })

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_72%_42%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="rise label-mono text-amber">Websites for local service businesses</p>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[0.98] text-paper [text-wrap:pretty] sm:text-[3.4rem] lg:text-[3.7rem]">
            <span className="rise block" style={rise(80)}>
              Your phone should be ringing.
            </span>
            <span className="rise mt-2 block text-smoke" style={rise(170)}>
              We build the site that makes it.
            </span>
          </h1>
          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-fog sm:text-xl sm:leading-relaxed" style={rise(260)}>
            Fast, 1-page mobile websites for contractors, plumbers, HVAC, auto repair, and detailers. We connect
            you to Google Maps and send every lead straight to your cell, so the people searching for what you do
            book you, not the next guy.
          </p>
          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={rise(340)}>
            <ButtonLink href="#preview">{CTA_LABEL}</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              <PhoneIcon className="size-[18px] text-amber" />
              {site.phoneDisplay}
            </ButtonLink>
          </div>
          <dl className="rise mt-12 grid max-w-md grid-cols-3 border-y border-line" style={rise(420)}>
            {specs.map(([label, value], i) => (
              <div key={label} className={`py-4 ${i ? 'border-l border-line pl-4 sm:pl-5' : 'pr-4'}`}>
                <dt className="label-mono text-smoke">{label}</dt>
                <dd className="mt-1.5 font-display text-2xl text-paper">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise relative mx-auto w-full max-w-[19.5rem]" style={rise(260)}>
          <div aria-hidden="true" className="mb-4 flex items-center justify-between px-4">
            <span className="label-mono flex items-center gap-2 text-smoke">
              <span className="size-1.5 rounded-full bg-smoke" />
              Before
            </span>
            <span className="label-mono flex items-center gap-2 text-amber">
              After
              <span className="size-1.5 rounded-full bg-amber" />
            </span>
          </div>
          <PhoneFrame className="shadow-[0_50px_90px_-30px_rgb(0_0_0/0.9)]">
            <CompareSlider />
          </PhoneFrame>
          <LeadToasts />
          <p className="label-mono mt-6 text-center text-smoke">
            <span aria-hidden="true">← </span>Drag to compare<span aria-hidden="true"> →</span>
            <span className="text-line-2"> · </span>Sample build
          </p>
        </div>
      </div>
    </section>
  )
}

// Before/after: a dated desktop-only site vs. a Black Sheep build, split by a draggable divider.
function CompareSlider() {
  const box = useRef(null)
  const gesture = useRef(null)
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)

  // Swing the divider once when it first comes into view, so people see it moves.
  useEffect(() => {
    const el = box.current
    if (!el || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPos(38)
      return
    }
    let timers = []
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        timers = [setTimeout(() => setPos(74), 900), setTimeout(() => setPos(36), 1900)]
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [])

  // Capture keeps the drag going if the pointer leaves the phone; skip it if the browser refuses.
  const capture = (e) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      /* not an active pointer */
    }
  }

  const moveTo = (clientX) => {
    const r = box.current.getBoundingClientRect()
    setPos(Math.min(97, Math.max(3, ((clientX - r.left) / r.width) * 100)))
  }

  // Mouse drags right away; touch only once the swipe is clearly sideways, so the page still scrolls.
  const onPointerDown = (e) => {
    const mouse = e.pointerType === 'mouse'
    gesture.current = { x: e.clientX, y: e.clientY, active: mouse }
    if (mouse) {
      capture(e)
      setDragging(true)
      moveTo(e.clientX)
    }
  }
  const onPointerMove = (e) => {
    const g = gesture.current
    if (!g) return
    if (!g.active) {
      const dx = Math.abs(e.clientX - g.x)
      const dy = Math.abs(e.clientY - g.y)
      if (dx < 6 || dx < dy) return
      g.active = true
      capture(e)
      setDragging(true)
    }
    moveTo(e.clientX)
  }
  const onPointerEnd = () => {
    gesture.current = null
    setDragging(false)
  }

  const ease = dragging ? 'none' : '0.9s cubic-bezier(0.2, 0.7, 0.2, 1)'
  return (
    <div
      ref={box}
      className="relative h-[560px] cursor-ew-resize touch-pan-y select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
    >
      <ClientSite t={themes.ridgeline} />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, transition: dragging ? 'none' : `clip-path ${ease}` }}
      >
        <DatedSite />
      </div>

      <input
        type="range"
        min="3"
        max="97"
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare a dated website with a Black Sheep build"
        className="peer sr-only"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 peer-focus-visible:[&>.knob]:ring-4 peer-focus-visible:[&>.knob]:ring-amber"
        style={{ left: `${pos}%`, transition: dragging ? 'none' : `left ${ease}` }}
      >
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-[0_0_0_1px_rgb(0_0_0/0.12),0_0_18px_rgb(0_0_0/0.35)]" />
        <div className="knob absolute top-1/2 -ml-[19px] -mt-[19px] flex size-[38px] items-center justify-center gap-[3px] rounded-full bg-white text-char shadow-[0_6px_18px_rgb(0_0_0/0.35)]">
          <span className="text-[13px] leading-none">‹</span>
          <span className="text-[13px] leading-none">›</span>
        </div>
      </div>
    </div>
  )
}

// The kind of site we replace: desktop-only, tiny on a phone, phone number buried.
function DatedSite() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#cfcfcf]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <StatusBar bg="#ffffff" fg="#000000" />
      <div className="w-[200%] origin-top-left scale-50 bg-white text-black">
        <div className="bg-[#000080] px-3 py-3 text-center text-white">
          <p className="text-[30px] font-bold italic leading-tight">Ridgeline Plumbing</p>
          <p className="text-[14px]">~ Quality Service Since 1998 ~</p>
        </div>
        <div className="flex justify-center gap-2 border-y-2 border-[#808080] bg-[#c0c0c0] py-1 text-[13px]">
          {['Home', 'About Us', 'Services', 'Coupons', 'Contact Us'].map((l, i) => (
            <span key={l} className="flex gap-2">
              {i > 0 && <span>|</span>}
              <span className="text-[#0000ee] underline">{l}</span>
            </span>
          ))}
        </div>
        <div className="grid grid-cols-[150px_1fr] gap-3 p-3">
          <div className="space-y-1.5 border-r border-[#999] pr-2 text-[12px]">
            <p className="font-bold underline">Quick Links</p>
            {['Drains', 'Water Heaters', 'Repairs', 'Our Truck', 'Guestbook'].map((l) => (
              <p key={l} className="text-[#0000ee] underline">
                {l}
              </p>
            ))}
            <div className="mt-4 border border-[#666] bg-black px-1 py-0.5 text-center font-mono text-[12px] text-[#00ff00]">
              004127
            </div>
            <p className="text-[10px]">visitors since 2009</p>
          </div>
          <div>
            <p className="text-center text-[24px] font-bold text-[#cc0000]">Welcome to our Website!!</p>
            <div className="mx-auto mt-2 grid h-28 w-4/5 place-items-center border-2 border-dashed border-[#999] bg-[#eee] text-[12px] text-[#777]">
              [ photo coming soon ]
            </div>
            <p className="mt-3 text-[13px] leading-snug">
              Ridgeline Plumbing has proudly served the area since 1998. We offer a wide variety of plumbing services
              for residential and commercial customers including drains, water heaters, repairs and much more. Please
              contact us at your earliest convenience for more information regarding our services and pricing. We
              look forward to serving you!
            </p>
            <p className="mt-3 text-center text-[14px] font-bold text-[#008000]">*** ASK ABOUT OUR SPECIALS ***</p>
            <p className="mt-3 text-[12px]">For a quote please call during business hours: (555) 010-4477</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-3 pb-3">
          <div className="border border-[#999]">
            <p className="bg-[#000080] px-2 py-0.5 text-[13px] font-bold text-white">Our Services</p>
            <ul className="list-disc py-1.5 pl-6 pr-2 text-[12px] leading-snug">
              {['Drain Cleaning', 'Water Heaters (Gas & Electric)', 'Leak Detection', 'Sewer & Septic', 'Faucets & Toilets', 'Garbage Disposals'].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-dashed border-black bg-[#ffffcc] p-2 text-center">
            <p className="text-[12px] font-bold">✂ CLIP &amp; SAVE ✂</p>
            <p className="text-[26px] font-bold leading-tight text-[#cc0000]">$10 OFF</p>
            <p className="text-[12px]">any drain cleaning!</p>
            <p className="mt-1 text-[10px] italic">Must present coupon. Expires 12/31/2012.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-3 pb-3 text-[12px]">
          <div>
            <p className="font-bold underline">Hours of Operation</p>
            <p>Monday - Friday: 8:00am - 4:30pm</p>
            <p>Saturday &amp; Sunday: CLOSED</p>
            <p className="mt-2">We accept: Cash and Check</p>
          </div>
          <div>
            <p className="font-bold underline">About Us</p>
            <p className="leading-snug">
              Family owned and operated. We are a full service plumbing company and we take pride in our work. No job
              too big or too small! Call today.
            </p>
          </div>
        </div>
        <div className="mx-3 mb-3 border-2 border-black p-1 [background:repeating-linear-gradient(-45deg,#ffd400_0_12px,#111_12px_24px)]">
          <p className="bg-black py-1 text-center text-[13px] font-bold tracking-widest text-[#ffd400]">
            PAGE UNDER CONSTRUCTION
          </p>
        </div>
        <p className="px-3 pb-2 text-center text-[12px]">
          <span className="text-[#0000ee] underline">Sign our Guestbook!</span> ·{' '}
          <span className="text-[#0000ee] underline">Links</span> ·{' '}
          <span className="text-[#0000ee] underline">Site Map</span>
        </p>
        <p className="px-3 pb-3 text-center text-[10px] text-[#555]">Best viewed at 800 x 600 resolution</p>
        <p className="bg-[#c0c0c0] py-1 text-center text-[11px]">© 2011 Ridgeline Plumbing · Last updated 03/14/2011</p>
        <div className="h-40 bg-white" />
      </div>
    </div>
  )
}

const leads = [
  { who: 'Dana · (555) 010-2231', msg: 'Water heater’s leaking. Can you come out today?' },
  { who: 'Marcus · (555) 010-7714', msg: 'Kitchen sink is backed up. Free this afternoon?' },
  { who: 'Priya · (555) 010-3398', msg: 'Can I get a quote on a new water heater?' },
]

// New-lead texts that keep arriving while the page is open.
function LeadToasts() {
  const [i, setI] = useState(0)
  const first = useRef(true)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      first.current = false
      setI((n) => (n + 1) % leads.length)
    }, 5200)
    return () => clearInterval(id)
  }, [])

  const lead = leads[i]
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -left-3 top-[61%] w-[15.5rem] sm:-left-24">
      <div
        key={i}
        className="toast-in rounded-2xl border border-white/10 bg-[#222529]/92 p-3.5 shadow-2xl shadow-black/60 backdrop-blur-md"
        style={first.current ? { animationDelay: '1.3s' } : undefined}
      >
        <div className="flex items-center gap-2 text-[11px] text-smoke">
          <span className="grid size-5 place-items-center rounded-[6px] bg-[#34c759] text-white">
            <MessageIcon className="size-3" strokeWidth={2.4} />
          </span>
          <span className="font-semibold uppercase tracking-wide">Messages</span>
          <span className="ml-auto">now</span>
        </div>
        <p className="mt-2 text-[13px] font-semibold text-paper">New lead from your website</p>
        <p className="mt-0.5 text-[12.5px] leading-snug text-fog">
          {lead.who} — “{lead.msg}”
        </p>
      </div>
    </div>
  )
}
