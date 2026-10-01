import { site } from '../site.js'
import { Logo } from './Logo.jsx'
import { PhoneIcon } from './icons.jsx'

const links = [
  ['Services', '#services'],
  ['Samples', '#samples'],
  ['How it works', '#how-it-works'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-char/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 whitespace-nowrap text-sm text-fog lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-paper">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 font-mono text-[13px] text-fog transition-colors hover:text-paper lg:flex"
          >
            <PhoneIcon className="size-4 text-amber" />
            {site.phoneDisplay}
          </a>
          <a
            href="#preview"
            className="inline-flex h-10 items-center whitespace-nowrap rounded-lg bg-amber px-3.5 text-[13px] font-semibold sm:px-4 sm:text-sm text-char transition hover:bg-amber-hi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            Free preview
          </a>
        </div>
      </div>
    </header>
  )
}
