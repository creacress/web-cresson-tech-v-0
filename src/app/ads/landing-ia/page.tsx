'use client'

import { useEffect } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NeonTitle from '@/components/ui/NeonTitle'
import ContactForm from '@/components/ContactForm/ContactForm'
import ServiceSchema from '@/components/ServiceShema/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Boostez votre entreprise avec l'IA | WebCressonTech",
  description: "Automatisez vos tâches chronophages, réduisez les erreurs et gagnez du temps grâce à nos solutions IA sur mesure pour PME et indépendants.",
  alternates: {
    canonical: 'https://webcresson.com/ads/landing-ia',
  },
  openGraph: {
    title: "Automatisation IA pour TPE & PME | WebCressonTech",
    description: "IA, automatisation et gain de productivité : boostez votre entreprise avec WebCressonTech.",
    url: 'https://webcresson.com/ads/landing-ia',
    images: ['https://webcresson.com/images/og-home.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Automatisation IA PME",
    description: "Automatisez vos processus métiers dès aujourd’hui.",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function LandingIA() {
  useEffect(() => {
    const button = document.getElementById('cta-contact')
    button?.addEventListener('click', () => {
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/label1234',
      })
    })
  }, [])

  return (
    <>
      <BreadcrumbSchema />

      <ServiceSchema
        serviceName="Solutions IA pour PME & Indépendants"
        serviceDescription="Automatisez vos processus métiers, réduisez les erreurs et gagnez du temps grâce à nos solutions IA sur mesure."
        serviceTypes={['Automatisation IA', 'Services IA pour PME', 'Productivité augmentée']}
        faq={[
          {
            question: 'Combien de temps pour une automatisation ?',
            answer: '1 à 2 semaines en moyenne pour automatiser un processus (data, mails, factures, etc.)',
          },
          {
            question: 'Est-ce compatible avec mes outils ?',
            answer: 'Oui : Google Sheets, Notion, ERP, Zapier, CRM, etc.',
          },
          {
            question: 'Quel budget faut-il prévoir ?',
            answer: 'À partir de 890€, avec ROI en moins d’un mois dans 70% des cas.',
          },
        ]}
      />

      <main className="bg-black text-white px-6 py-20 max-w-4xl mx-auto">
        {/* Hero */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NeonTitle as="h1" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Automatisez vos tâches avec l’IA
          </NeonTitle>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Libérez du temps, réduisez les erreurs, augmentez vos marges. Un expert IA vous rappelle sous 24h.
          </p>
          <button
            id="cta-contact"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Je veux être recontacté
          </button>
        </motion.section>

        {/* Bénéfices */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Pourquoi automatiser maintenant ?</h2>
          <ul className="list-none text-gray-400 space-y-4 pl-0">
            {[
              '✔️ 5 à 15h de travail manuel économisé par semaine',
              '✔️ Plus d’erreurs dans vos factures ou emails',
              '✔️ Vos données sont exploitées en temps réel',
              '✔️ Un ROI visible dès le 1er mois',
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-[#00e0ff] mr-2 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Cas d’usage */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Cas concrets d’automatisation</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            {[
              {
                title: '📄 Génération automatique de contrats',
                desc: 'Vos documents juridiques produits automatiquement selon les infos clients.',
              },
              {
                title: '📧 Traitement des emails entrants',
                desc: 'Classement, réponses et extraction de données sans intervention humaine.',
              },
              {
                title: '📊 Prévision de chiffre d’affaires',
                desc: 'Anticipation des ventes et achats grâce au machine learning.',
              },
              {
                title: '🤖 Assistant IA pour service client',
                desc: 'Chatbot intelligent relié à vos FAQs, CRM et produits.',
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-[#111] border border-[#00e0ff33] p-6 rounded">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Formulaire */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Décrivez-nous votre besoin</h2>
          <p className="text-gray-400 text-center mb-6">
            L’équipe WebCressonTech vous accompagne dès aujourd’hui.
          </p>
          <ContactForm />
        </motion.section>

        {/* Témoignage */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
            “WebCressonTech a automatisé notre back-office en 10 jours. 18h/semaines gagnées. C’est simple et rentable.”
          </blockquote>
          <p className="text-sm text-gray-500">— CEO d’une startup e-commerce</p>
        </motion.section>

        {/* Garantie */}
        <section className="text-center">
          <h3 className="text-xl font-bold mb-2">✔️ Satisfaction garantie</h3>
          <p className="text-gray-400 text-sm">
            On adapte la solution IA jusqu’à ce qu’elle vous convienne parfaitement. Sans surcoût.
          </p>
        </section>
      </main>
    </>
  )
}
