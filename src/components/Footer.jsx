import { site } from '../site.js'
import { Logo } from './Logo.jsx'

const links = [
  ['Services', '#services'],
  ['Sample builds', '#samples'],
  ['How it works', '#how-it-works'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
  ['Free preview', '#preview'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pb-24 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="sm:col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-smoke">{site.tagline}</p>
            <p className="mt-6 max-w-xs border-l-2 border-amber pl-3 text-sm leading-relaxed text-fog">
              Yes, we built this site too. Yours gets the same care.
            </p>
          </div>
          <div>
            <p className="label-mono text-smoke">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={site.phoneHref} className="text-fog transition-colors hover:text-paper">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-fog transition-colors hover:text-paper">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label-mono text-smoke">On this page</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-fog transition-colors hover:text-paper">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line py-6 text-xs text-smoke sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.area}</p>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[2.2vw] select-none whitespace-nowrap text-center font-display text-[11vw] leading-[0.8] text-char-3"
      >
        Black Sheep
      </p>
    </footer>
  )
}
