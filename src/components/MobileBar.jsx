import { useEffect, useState } from 'react'
import { site } from '../site.js'
import { ArrowIcon, PhoneIcon } from './icons.jsx'

// Phone-only action bar: shows once the hero is off screen, hides over the form.
export default function MobileBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    const form = document.getElementById('preview')
    if (!hero || !form || !('IntersectionObserver' in window)) return
    let pastHero = false
    let formInView = false
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) pastHero = !entry.isIntersecting
        if (entry.target === form) formInView = entry.isIntersecting
      }
      setVisible(pastHero && !formInView)
    })
    io.observe(hero)
    io.observe(form)
    return () => io.disconnect()
  }, [])

  const tab = visible ? 0 : -1
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-char/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="grid grid-cols-[auto_1fr] gap-2.5">
        <a
          href={site.phoneHref}
          tabIndex={tab}
          className="inline-flex h-12 items-center gap-2 rounded-lg border border-line-2 px-4 text-sm font-semibold text-paper"
        >
          <PhoneIcon className="size-[18px] text-amber" />
          Call
        </a>
        <a
          href="#preview"
          tabIndex={tab}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber text-sm font-semibold text-char"
        >
          Free live preview
          <ArrowIcon className="size-4" />
        </a>
      </div>
    </div>
  )
}
