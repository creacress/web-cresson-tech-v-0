"use client"

import React, { useState, FormEvent } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    comments: "",
  })

  const [status, setStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ email: "", name: "", phone: "", company: "", comments: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error)
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-[#111] border border-[#00e0ff33] p-6 sm:p-8 rounded-lg space-y-6 text-white"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { id: "email", label: "Email*", type: "email", required: true },
          { id: "name", label: "Nom Prénom*", type: "text", required: true },
          { id: "phone", label: "Téléphone*", type: "tel", required: true },
          { id: "company", label: "Entreprise", type: "text", required: false },
        ].map(({ id, label, type, required }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="mb-1 font-medium text-gray-300">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              placeholder={label}
              value={formData[id as keyof typeof formData]}
              onChange={handleChange}
              required={required}
              className="bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <label htmlFor="comments" className="mb-1 font-medium text-gray-300">
          Commentaires
        </label>
        <textarea
          id="comments"
          name="comments"
          placeholder="Votre message ou question"
          value={formData.comments}
          onChange={handleChange}
          rows={4}
          className="bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
        />
      </div>

      <button
        type="submit"
        className="bg-[#00e0ff] text-black font-semibold px-6 py-3 rounded hover:scale-105 transition"
      >
        ENVOYER LA DEMANDE
      </button>

      {status === "success" && (
        <p className="text-green-400 font-medium">✅ Merci ! Votre message a bien été envoyé.</p>
      )}
      {status === "error" && (
        <p className="text-red-500 font-medium">❌ Une erreur est survenue. Veuillez réessayer.</p>
      )}
    </form>
  )
}
