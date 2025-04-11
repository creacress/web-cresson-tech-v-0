'use client'

import React, { useState, useEffect, FormEvent } from 'react'
import { toast } from 'sonner'

type ContactFormProps = {
  selectedPlan?: string | null
}

export default function ContactForm({ selectedPlan }: ContactFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    company: '',
    plan: '',
    comments: '',
    website: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        plan: selectedPlan,
        comments: `Je suis intéressé par le plan ${selectedPlan}.`,
      }))
    }
  }, [selectedPlan])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Erreur inconnue')
      }

      toast.success('Message envoyé avec succès ✨')
      setFormData({
        email: '',
        name: '',
        phone: '',
        company: '',
        plan: '',
        comments: '',
        website: '',
      })
    } catch (err: any) {
      console.error('Erreur contact :', err)
      toast.error(err.message || 'Erreur lors de l’envoi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-[#111] border border-[#00e0ff33] p-6 sm:p-8 rounded-lg space-y-6 text-white"
    >
      {/* HONEYPOT */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
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

      {/* Champs principaux */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { id: 'email', label: 'Email*', type: 'email', required: true },
          { id: 'name', label: 'Nom Prénom*', type: 'text', required: true },
          { id: 'phone', label: 'Téléphone*', type: 'tel', required: true },
          { id: 'company', label: 'Entreprise', type: 'text', required: false },
        ].map(({ id, label, type, required }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="mb-1 font-medium text-gray-300">{label}</label>
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

      {/* Sélection de plan */}
      <div className="flex flex-col">
        <label htmlFor="plan" className="mb-1 font-medium text-gray-300">Plan souhaité</label>
        <select
          name="plan"
          id="plan"
          value={formData.plan}
          onChange={handleChange}
          className="bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
        >
          <option value="">Sélectionnez un plan</option>
          <option value="Starter">Starter</option>
          <option value="Pro">Pro</option>
          <option value="Entreprise">Entreprise</option>
          <option value="Personnalisé">Personnalisé</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      {/* Commentaires */}
      <div className="flex flex-col">
        <label htmlFor="comments" className="mb-1 font-medium text-gray-300">Commentaires</label>
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
        disabled={isSubmitting}
        className="bg-[#00e0ff] text-black font-semibold px-6 py-3 rounded hover:scale-105 transition"
      >
        {isSubmitting ? 'Envoi...' : 'ENVOYER LA DEMANDE'}
      </button>
    </form>
  )
}
