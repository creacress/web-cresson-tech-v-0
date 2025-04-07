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
        <div>
          <label className="block font-medium mb-1">
            Nom et Prénom *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 bg-[#111] border border-[#333] rounded focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
            />
          </label>
        </div>

        <div>
          <label className="block font-medium mb-1">
            Email *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 bg-[#111] border border-[#333] rounded focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
            />
          </label>
        </div>

        <div>
          <label className="block font-medium mb-1">
            Numéro de téléphone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full p-3 bg-[#111] border border-[#333] rounded focus:outline-none"
            />
          </label>
        </div>

        <div>
          <label className="block font-medium mb-1">
            Secteur d’Activité *
            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 bg-[#111] border border-[#333] rounded focus:outline-none"
            >
              <option value="">Sélectionnez votre secteur</option>
              <option value="ecommerce">E-commerce</option>
              <option value="industrie">Industrie</option>
              <option value="santé">Santé</option>
              <option value="finance">Finance</option>
              <option value="marketing">Marketing</option>
              <option value="autre">Autre</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Quelle(s) solution(s) IA vous intéressent ? *
          </label>
          <div className="space-y-2 ml-2">
            {[
              { label: "Automatisation (RPA)", value: "automatisation" },
              { label: "IA Générative", value: "ia-generative" },
              { label: "Machine Learning", value: "machine-learning" },
              { label: "Deep Learning", value: "deep-learning" },
              { label: "Je ne sais pas, j’ai besoin d’un audit", value: "audit" },
            ].map((option) => (
              <label key={option.value} className="block">
                <input
                  type="checkbox"
                  name="solutions"
                  value={option.value}
                  checked={formData.solutions.includes(option.value)}
                  onChange={handleChange}
                  className="mr-2 accent-[#00e0ff]"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">
            Décrivez votre besoin *
            <textarea
              name="needs"
              value={formData.needs}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 bg-[#111] border border-[#333] rounded focus:outline-none"
            />
          </label>
        </div>

        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mr-2 accent-[#00e0ff]"
            />
            J'accepte les conditions.
          </label>
        </div>

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
