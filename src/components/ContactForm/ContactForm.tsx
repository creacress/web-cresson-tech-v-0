'use client'
declare global {
  interface Window {
    gtagSendEvent: (url: string) => void;
  }
}
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ContactFormProps = {
  plan?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ plan }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [website, setWebsite] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, company, comments, plan, website }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Erreur')
        toast.success('Message envoyé avec succès !')
        window.gtagSendEvent('/merci')
      })
      .catch(() => toast.error('Une erreur est survenue. Réessaie plus tard.'))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      {plan && (
        <>
          <div className="rounded border border-indigo-500 bg-indigo-950/50 text-indigo-300 text-sm px-4 py-2 flex items-center gap-2 shadow-md">
            <span className="font-semibold text-white">🎯 Offre sélectionnée :</span> {plan}
          </div>
          <input type="hidden" name="plan" value={plan} />
        </>
      )}
      <div>
        <label className="block text-sm font-medium mb-1">Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 text-white"
          rows={5}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Téléphone (optionnel)</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 text-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Entreprise (optionnel)</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 text-white"
        />
      </div>
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded"
      >
        Envoyer
      </button>
      <ToastContainer position="bottom-center" autoClose={4000} hideProgressBar newestOnTop closeOnClick theme="dark" />
    </form>
  )
}

export default ContactForm
