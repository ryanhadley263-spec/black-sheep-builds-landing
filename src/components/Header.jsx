import { site } from '../site.js'

const links = [
  ['Services', '#services'],
  ['How it works', '#how-it-works'],
  ['Pricing', '#pricing'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
          Black Sheep <span className="text-accent">Builds</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href={site.phoneHref} className="hidden text-sm font-medium text-zinc-300 hover:text-white sm:block">
            {site.phoneDisplay}
          </a>
          <a
            href="#preview"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Free Preview
          </a>
        </div>
      </div>
    </header>
  )
}
