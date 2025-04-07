"use client"

import React, { useState } from "react"

type FormDataType = {
  name: string
  email: string
  phone: string
  sector: string
  solutions: string[]
  needs: string
  consent: boolean
  website: string // 🕵️ Honeypot
}

export default function AuditPage() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    sector: "",
    solutions: [],
    needs: "",
    consent: false,
    website: "", // Init honeypot
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement

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

      const data = await res.json()
      if (res.ok) {
        setMessage("✅ Votre demande a bien été envoyée !")
        setFormData({
          name: "",
          email: "",
          phone: "",
          sector: "",
          solutions: [],
          needs: "",
          consent: false,
          website: "",
        })
      } else {
        setMessage(`❌ Erreur : ${data.error}`)
      }
    } catch (error) {
      setMessage("❌ Une erreur s'est produite, veuillez réessayer.")
    }

    setLoading(false)
  }

  return (
    <section className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-neon drop-shadow">
        Demandez votre audit gratuit
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* HONEYPOT */}
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

        {/* Rest of form unchanged, just as before... */}
        {/* Nom, Email, Phone, Sector, Solutions, Needs, Consent, Submit */}

        {/* ...[Ton formulaire existant]... */}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#00e0ff] text-black font-semibold px-6 py-3 rounded-md hover:scale-105 transition"
        >
          {loading ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>

        {message && (
          <p
            className={`mt-4 ${
              message.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </section>
  )
}
