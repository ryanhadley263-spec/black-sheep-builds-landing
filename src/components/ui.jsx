import { useEffect, useRef, useState } from 'react'
import { ArrowIcon } from './icons.jsx'

const buttonBase =
  'group inline-flex items-center justify-center gap-2.5 rounded-lg font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber'

const buttonVariants = {
  primary:
    'bg-amber text-char shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_10px_30px_-12px_rgb(232_163_61/0.6)] hover:bg-amber-hi',
  secondary: 'border border-line-2 text-paper hover:border-smoke hover:bg-char-2',
}

export function ButtonLink({ href, variant = 'primary', arrow = variant === 'primary', className = '', children }) {
  return (
    <a href={href} className={`${buttonBase} ${buttonVariants[variant]} h-13 px-6 text-[15px] ${className}`}>
      {children}
      {arrow && <ArrowIcon className="size-[18px] transition-transform group-hover:translate-x-0.5" />}
    </a>
  )
}

export function SectionLabel({ index, paper = false, children }) {
  return (
    <p className={`label-mono flex items-center gap-3 ${paper ? 'text-slate' : 'text-smoke'}`}>
      <span className={paper ? 'text-ochre' : 'text-amber'}>{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  )
}

export function Section({ id, tone = 'dark', index, eyebrow, title, intro, children, className = '' }) {
  const paper = tone === 'paper'
  return (
    <section id={id} className={`px-5 py-24 sm:py-32 ${paper ? 'bg-paper text-slate' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <SectionLabel index={index} paper={paper}>
            {eyebrow}
          </SectionLabel>
          <h2
            className={`mt-5 font-display text-[2.15rem] leading-[1.02] sm:text-5xl ${paper ? 'text-ink' : 'text-paper'}`}
          >
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed">{intro}</p>}
        </Reveal>
        <div className="mt-14 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}

// Fades content up the first time it scrolls into view.
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
