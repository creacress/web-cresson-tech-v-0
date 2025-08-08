'use client'

import React from 'react'
import Link from 'next/link'

// ---------- Utils ----------
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max))
}

// ---------- 1) TiltCard ----------
export type TiltCardProps = React.PropsWithChildren<{
  className?: string
  maxTilt?: number // deg
  scale?: number
  glow?: boolean
}>

export function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glow = true,
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [hover, setHover] = React.useState(false)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    const rY = clamp((px - 0.5) * (maxTilt * 2), -maxTilt, maxTilt)
    const rX = clamp(-(py - 0.5) * (maxTilt * 2), -maxTilt, maxTilt)
    el.style.transform = `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) scale(${scale})`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return (
    <div
      className={`relative ${className}`}
      tabIndex={0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        reset()
      }}
      onMouseMove={onMove}
      onFocus={() => setHover(true)}
      onBlur={() => {
        setHover(false)
        reset()
      }}
    >
      <div
        ref={ref}
        className="transition-transform duration-150 will-change-transform"
      >
        {children}
      </div>
      {glow && (
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 rounded-xl opacity-0 ${
            hover ? 'opacity-100' : ''
          } transition-opacity duration-300 bg-[radial-gradient(520px_circle_at_50%_0%,#00e0ff1f,transparent_60%)]`}
        />
      )}
    </div>
  )
}

// ---------- 2) FlipCard ----------
export type FlipCardProps = {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
  backHref?: string // when flipped, clicking the card navigates here
  backAriaLabel?: string // accessibility label for the back link
}

export function FlipCard({ front, back, className = '', backHref, backAriaLabel }: FlipCardProps) {
  const [flipped, setFlipped] = React.useState(false)
  return (
    <div
      className={`relative [transform-style:preserve-3d] transition-transform duration-500 ${
        flipped ? '[transform:rotateY(180deg)]' : ''
      } ${className}`}
      tabIndex={0}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
    >
      <div className="absolute inset-0 [backface-visibility:hidden]">
        {front}
      </div>
      <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        {back}
        {backHref && (
          <Link
            href={backHref}
            aria-label={backAriaLabel || 'Ouvrir la page liée'}
            className="absolute inset-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
          />
        )}
      </div>
    </div>
  )
}

// ---------- 3) KpiCounter ----------
export type KpiCounterProps = {
  to?: number
  duration?: number // ms
  prefix?: string
  suffix?: string
  className?: string
}

export function KpiCounter({
  from = 0,
  to = 0,
  duration = 1200,
  prefix = '',
  suffix = '',
  className = ''
}: KpiCounterProps & { from?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  let finalTo = to
  // Set meaningful default values if to is not provided or 0
  if (finalTo === 0) {
    if (suffix && suffix.includes('h')) finalTo = 120
    if (suffix && suffix.includes('%') && prefix !== '+') finalTo = 35
    if (suffix && suffix.includes('%') && prefix === '+') finalTo = 250
  }
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const start = performance.now()
    const frame = (now: number) => {
      const t = clamp((now - start) / duration, 0, 1)
      const val = Math.floor(from + (finalTo - from) * (1 - Math.pow(1 - t, 3))) // easeOutCubic
      el.textContent = `${prefix}${val.toLocaleString('fr-FR')}${suffix}`
      if (t < 1) requestAnimationFrame(frame)
    }
    const r = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(r)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalTo, duration, prefix, suffix, from])
  return <span ref={ref} className={className} />
}

// ---------- 4) HoverPreview (for solution cards) ----------
export type HoverPreviewProps = {
  trigger: React.ReactNode
  title: string
  description: string
  imageSrc?: string
  href?: string
}

export function HoverPreview({ trigger, title, description, imageSrc, href }: HoverPreviewProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {trigger}
      {open && (
        <div className="absolute z-20 mt-2 w-72 rounded-xl border border-[#00e0ff33] bg-[#0b0b0b]/95 backdrop-blur p-4 shadow-[0_12px_36px_-12px_#00e0ff66] animate-fade-in">
          <div className="text-sm font-semibold mb-1">{title}</div>
          <p className="text-xs text-gray-400 mb-3">{description}</p>
          {imageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageSrc} alt="aperçu" className="w-full h-28 object-cover rounded" />
          )}
          {href && (
            <Link href={href} className="mt-3 inline-block text-xs text-black bg-[#00e0ff] px-3 py-1 rounded font-semibold">Voir la page</Link>
          )}
        </div>
      )}
    </div>
  )
}

// ---------- 5) GlossarySearch ----------
export type GlossarySearchProps = {
  placeholder?: string
  onChange?: (value: string) => void
  className?: string
}

export function GlossarySearch({ placeholder = 'Rechercher un terme…', onChange, className = '' }: GlossarySearchProps) {
  const [q, setQ] = React.useState('')
  return (
    <input
      type="text"
      placeholder={placeholder}
      id="glossary-search"
      value={q}
      onInput={(e) => {
        const v = (e.target as HTMLInputElement).value
        setQ(v)
        onChange?.(v)
      }}
      className={`w-full max-w-md mx-auto block px-4 py-2 rounded-lg bg-[#0f0f0f] border border-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-[#00e0ff] ${className}`}
    />
  )
}

// ---------- 6) PulseFab (floating audit button) ----------
export type PulseFabProps = {
  href: string
  weeklyCount?: number
}

export function PulseFab({ href, weeklyCount = 12 }: PulseFabProps) {
  return (
    <Link
      href={href}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-[#00e0ff] text-black font-semibold px-5 py-3 shadow-[0_12px_36px_-12px_#00e0ff] animate-pulse hover:scale-105 transition"
    >
      📩 Audit IA gratuit
      <span className="text-xs bg-black/70 text-white px-2 py-0.5 rounded-full">{weeklyCount} cette semaine</span>
    </Link>
  )
}

// ---------- 7) AppearOnScroll wrapper ----------
export type AppearOnScrollProps = React.PropsWithChildren<{ className?: string }>

export function AppearOnScroll({ children, className = '' }: AppearOnScrollProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('animate-fade-up')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// ---------- 8) Helper styles (optional) ----------

export function SafeLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={className} onClick={(e) => { e.stopPropagation() }}>
      {children}
    </Link>
  )
}
// You can map these components in your Server page like:
// <TiltCard><div className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-6">…</div></TiltCard>
// <FlipCard front={<Front/>} back={<Back/>} className="h-40" />
// <KpiCounter to={120} suffix="h" className="text-5xl font-extrabold text-[#00e0ff]" />
// <HoverPreview trigger={<button>…</button>} title="…" description="…" imageSrc="/images/…" href="/services/…" />
// <GlossarySearch onChange={(q) => setFilter(q)} />
// <PulseFab href="/services/audit-gratuit?utm_source=home&utm_medium=fab&utm_campaign=audit_free" />
// <AppearOnScroll>…</AppearOnScroll>