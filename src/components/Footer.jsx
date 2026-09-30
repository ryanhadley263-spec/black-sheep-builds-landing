import { site } from '../site.js'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-bold text-white">
            Black Sheep <span className="text-accent">Builds</span>
          </p>
          <p className="mt-1">{site.area}</p>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <a href={site.phoneHref} className="hover:text-white">{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
        </div>
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
