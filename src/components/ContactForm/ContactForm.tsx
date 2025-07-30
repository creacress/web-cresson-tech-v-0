'use client'
import React, { useState } from 'react'

type ContactFormProps = {
  plan?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ plan }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message, plan })
    alert('Message envoyé !')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      {plan && (
        <>
          <div className="text-sm text-gray-400">
            Offre sélectionnée : <span className="font-semibold text-white">{plan}</span>
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 text-white"
          rows={5}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded"
      >
        Envoyer
      </button>
    </form>
  )
}

export default ContactForm
