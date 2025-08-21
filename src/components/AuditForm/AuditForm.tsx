"use client"

import React, { useState } from "react"
import { useRouter } from 'next/navigation'

const EMAIL_RE = /^(?:[a-z0-9_+.-]+)@(?:[a-z0-9.-]+)\.[a-z]{2,}$/i
const PHONE_RE = /^[0-9+().\s-]{6,}$/
const MAX_NEEDS = 1000

type UTM = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

type FormDataType = {
  name: string
  email: string
  phone: string
  sector: string
  solutions: string[]
  needs: string
  consent: boolean
  website: string // honeypot
  // tracking
  path?: string
  referrer?: string
} & UTM

function validate(data: FormDataType) {
  const errors: Partial<Record<keyof FormDataType, string>> = {}
  if (!data.name.trim()) errors.name = 'Nom requis'
  if (!EMAIL_RE.test(data.email)) errors.email = 'Email invalide'
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = 'Téléphone invalide'
  if (!data.sector) errors.sector = 'Secteur requis'
  if (!data.consent) errors.consent = 'Consentement requis'
  if (data.website) errors.website = 'Bot détecté'
  return errors
}

function loadDraft(): Partial<FormDataType> {
  try { return JSON.parse(localStorage.getItem('audit_draft') || '{}') } catch { return {} }
}
function saveDraft(d: Partial<FormDataType>) {
  try { localStorage.setItem('audit_draft', JSON.stringify(d)) } catch {}
}
function clearDraft() {
  try { localStorage.removeItem('audit_draft') } catch {}
}


// (keep only the more complete FormDataType definition above)

export default function AuditPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataType>({
    ...loadDraft(),
    name: '',
    email: '',
    phone: '',
    sector: '',
    solutions: [],
    needs: '',
    consent: false,
    website: '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<Partial<Record<keyof FormDataType, string>>>({})
  const needsLen = formData.needs?.length || 0

  React.useEffect(() => {
    // UTM + context
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      const params = url.searchParams
      const utm: UTM = {
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
        utm_term: params.get('utm_term') || undefined,
        utm_content: params.get('utm_content') || undefined,
      }
      setFormData((prev) => ({ ...prev, ...utm, path: url.pathname, referrer: document.referrer || undefined }))
      // Load draft only once
      const draft = loadDraft()
      if (Object.keys(draft).length) setFormData((prev) => ({ ...prev, ...draft }))
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      if (name === 'consent') {
        const checked = (e.target as HTMLInputElement).checked
        setFormData((prev) => { const next = { ...prev, consent: checked }; saveDraft(next); return next })
      } else {
        const checked = (e.target as HTMLInputElement).checked
        setFormData((prev) => {
          const next = {
            ...prev,
            solutions: checked ? [...prev.solutions, value] : prev.solutions.filter((s) => s !== value),
          }
          saveDraft(next); return next
        })
      }
    } else {
      setFormData((prev) => { const next = { ...prev, [name]: value }; saveDraft(next); return next })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const v = validate(formData)
    setErrors(v)
    if (Object.keys(v).length) { setLoading(false); return }

    // Abort after 15s
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
        signal: controller.signal,
      })

      if (res.ok) {
        clearDraft()
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'submit_audit', { method: 'audit_form', ...formData })
        }
        router.push('/merci')
        return
      } else {
        const data = await res.json().catch(() => ({}))
        setMessage(`❌ Erreur : ${data.error || res.statusText}`)
      }
    } catch (error: any) {
      setMessage(error?.name === 'AbortError' ? '❌ Délai dépassé, réessayez.' : "❌ Une erreur s'est produite, veuillez réessayer.")
    } finally {
      clearTimeout(timer)
      setLoading(false)
    }
  }

  return (
    <section id="audit-form" className="max-w-3xl mx-auto py-16 px-4 text-white">
      <header className="text-center mb-10">
        <h2 className="text-3xl font-bold text-neon drop-shadow">Demandez votre audit gratuit</h2>
        <p className="text-sm text-gray-400 mt-2">Remplissez ce formulaire et recevez un diagnostic IA personnalisé sous 48h.</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input type="hidden" name="source" value="audit-page" />
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir</label>
          <input
            type="text"
            name="website"
            id="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Nom */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-2 rounded bg-[#111] border ${errors.name ? 'border-red-500' : 'border-[#333]'} focus:outline-none focus:ring-2 focus:ring-[#00e0ff]`}
          />
          {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email professionnel</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-2 rounded bg-[#111] border ${errors.email ? 'border-red-500' : 'border-[#333]'} focus:outline-none focus:ring-2 focus:ring-[#00e0ff]`}
          />
          {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Téléphone */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="ex: +33 6 12 34 56 78"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full px-4 py-2 rounded bg-[#111] border ${errors.phone ? 'border-red-500' : 'border-[#333]'} focus:outline-none focus:ring-2 focus:ring-[#00e0ff]`}
          />
          {errors.phone && <p id="phone-error" className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Secteur */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="sector">Secteur d’activité</label>
          <select
            id="sector"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
            aria-invalid={!!errors.sector}
            aria-describedby={errors.sector ? 'sector-error' : undefined}
            className={`w-full px-4 py-2 rounded bg-[#111] border ${errors.sector ? 'border-red-500' : 'border-[#333]'} focus:outline-none focus:ring-2 focus:ring-[#00e0ff]`}
          >
            <option value="">-- Choisissez un secteur --</option>
            <option value="retail">Retail</option>
            <option value="industrie">Industrie</option>
            <option value="services">Services</option>
            <option value="santé">Santé</option>
            <option value="autre">Autre</option>
          </select>
          {errors.sector && <p id="sector-error" className="text-red-400 text-xs mt-1">{errors.sector}</p>}
        </div>

        {/* Solutions */}
        <fieldset>
          <legend className="block mb-2 font-semibold">Solutions souhaitées</legend>
          <div className="flex flex-wrap gap-2">
            {['Automatisation', 'IA générative', 'Analyse prédictive', 'Autre'].map((sol) => (
              <label key={sol} className="cursor-pointer select-none px-3 py-2 rounded-full border border-[#333] bg-[#111] hover:border-[#00e0ff66] transition flex items-center gap-2">
                <input
                  type="checkbox"
                  name="solutions"
                  value={sol}
                  checked={formData.solutions.includes(sol)}
                  onChange={handleChange}
                  className="accent-[#00e0ff]"
                />
                <span className="text-sm">{sol}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Besoins */}
        <div>
          <div className="flex items-center justify-between">
            <label className="block mb-1 font-semibold" htmlFor="needs">Décrivez vos enjeux ou besoins</label>
          </div>
          <textarea
            id="needs"
            name="needs"
            required
            maxLength={MAX_NEEDS}
            aria-label="Décrivez vos besoins en IA"
            rows={5}
            value={formData.needs}
            onChange={handleChange}
            aria-invalid={!!errors.needs}
            aria-describedby={errors.needs ? 'needs-error' : undefined}
            className={`w-full px-4 py-2 rounded bg-[#111] border ${errors.needs ? 'border-red-500' : 'border-[#333]'} focus:outline-none focus:ring-2 focus:ring-[#00e0ff]`}
          />
          {errors.needs && <p id="needs-error" className="text-red-400 text-xs mt-1">{errors.needs}</p>}
        </div>

        {/* Consentement */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.consent}
            className="mt-1 accent-[#00e0ff]"
          />
          <label htmlFor="consent" className="text-sm">
            J’accepte que mes données soient utilisées pour me recontacter dans le cadre de cet audit.
          </label>
        </div>
        {errors.consent && <p className="text-red-400 text-xs -mt-2 mb-2">{errors.consent}</p>}

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading || !!Object.keys(validate(formData)).length}
            title={Object.keys(validate(formData)).length ? 'Complétez les champs requis' : 'Envoyer ma demande'}
            className={`bg-[#00e0ff] text-black font-semibold px-8 py-3 rounded-md transition ${loading ? 'animate-pulse opacity-80' : 'hover:scale-105'} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>

          {message && (
            <p className={`mt-4 ${message.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>
          )}
        </div>
      </form>
    </section>
  )
}
