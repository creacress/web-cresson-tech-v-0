"use client"

import React, { useState } from "react"
import { useRouter } from 'next/navigation'


type FormDataType = {
  name: string
  email: string
  phone: string
  sector: string
  solutions: string[]
  needs: string
  consent: boolean
  website: string
}

export default function AuditPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    sector: "",
    solutions: [],
    needs: "",
    consent: false,
    website: "",
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      if (name === "consent") {
        setFormData((prev) => ({ ...prev, consent: (e.target as HTMLInputElement).checked }))
      } else {
        setFormData((prev) => ({
          ...prev,
          solutions: (e.target as HTMLInputElement).checked
            ? [...prev.solutions, value]
            : prev.solutions.filter((s) => s !== value),
        }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")
  
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
  
      if (res.ok) {
        // ✅ Redirection vers la page de remerciement
        router.push("/merci")
        return
      } else {
        const data = await res.json()
        setMessage(`❌ Erreur : ${data.error}`)
      }
    } catch (error) {
      setMessage("❌ Une erreur s'est produite, veuillez réessayer.")
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <section className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-neon drop-shadow">
        Demandez votre audit gratuit
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
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
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#111] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email professionnel</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#111] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#111] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
          />
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
            className="w-full px-4 py-2 rounded bg-[#111] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
          >
            <option value="">-- Choisissez un secteur --</option>
            <option value="retail">Retail</option>
            <option value="industrie">Industrie</option>
            <option value="services">Services</option>
            <option value="santé">Santé</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Solutions */}
        <div>
          <label className="block mb-2 font-semibold">Solutions souhaitées</label>
          <div className="flex flex-wrap gap-4">
            {["Automatisation", "IA générative", "Analyse prédictive", "Autre"].map((sol) => (
              <label key={sol} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="solutions"
                  value={sol}
                  checked={formData.solutions.includes(sol)}
                  onChange={handleChange}
                  className="accent-[#00e0ff]"
                />
                <span>{sol}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Besoins */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="needs">Décrivez vos enjeux ou besoins</label>
          <textarea
            id="needs"
            name="needs"
            required
            rows={5}
            value={formData.needs}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#111] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
          />
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
            className="mt-1 accent-[#00e0ff]"
          />
          <label htmlFor="consent" className="text-sm">
            J’accepte que mes données soient utilisées pour me recontacter dans le cadre de cet audit.
          </label>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#00e0ff] text-black font-semibold px-8 py-3 rounded-md hover:scale-105 transition"
          >
            {loading ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>

          {message && (
            <p className={`mt-4 ${message.startsWith("✅") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>
      </form>
    </section>
  )
}
