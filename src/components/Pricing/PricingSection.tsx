'use client'

import { Rocket, Settings, Building, Puzzle, LucideIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

type Plan = {
  name: string
  price: string
  features: string[]
  ctaLabel: string
  ctaLink?: string
  icon: LucideIcon
  highlight?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '99€/mois',
    features: [
      '1 projet IA simple',
      'Audit de données offert',
      'Déploiement sur cloud sécurisé',
      'Dashboard de monitoring',
      'Support par email (48h)',
      'Sans engagement',
    ],
    ctaLabel: 'Choisir Starter',
    icon: Rocket,
  },
  {
    name: 'Pro',
    price: '299€/mois',
    features: [
      'Jusqu’à 3 projets IA actifs',
      'IA personnalisée (NLP / Vision / ML)',
      'Intégration via API REST / FastAPI',
      'Dashboards interactifs & prédictifs',
      'Suivi mensuel + retraining manuel',
      'Support prioritaire (24h)',
      'Accès à 2 ateliers IA/an',
    ],
    ctaLabel: 'Choisir Pro',
    highlight: true,
    icon: Settings,
  },
  {
    name: 'Entreprise',
    price: 'Sur devis',
    features: [
      'Projets IA illimités (multi-sites)',
      'Audit stratégique + cadrage UX',
      'MLOps : CI/CD, monitoring, retraining auto',
      'Hébergement HDS / RGPD',
      'Support dédié + expert IA attitré',
      'Workshops IA sur-mesure',
      'Intégration à vos systèmes métiers (ERP, CRM, LIMS...)',
    ],
    ctaLabel: 'Demander un devis',
    icon: Building,
  },
  {
    name: 'Personnalisé',
    price: 'Sur-mesure',
    features: [
      'Solutions IA 100% adaptées',
      'Fonctionnalités à la carte',
      'Accompagnement stratégique',
      'Support dédié',
      'Options d’intégration avancées',
    ],
    ctaLabel: 'Créer mon plan',
    ctaLink: '/pricing/custom',
    icon: Puzzle,
  }
]

export default function PricingSection() {
  return (
    <section className="bg-[#111] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tarification</h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Des offres flexibles selon vos besoins en IA. De la startup au grand compte.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, idx) => {
          const isCustom = plan.name === 'Personnalisé'
          const ctaLink = plan.ctaLink || `/contact?plan=${encodeURIComponent(plan.name)}`

          return (
            <div
              key={idx}
              className={`relative rounded border p-6 flex flex-col items-center text-center bg-[#1a1a1a] transition-transform duration-300 hover:scale-[1.02] ${plan.highlight
                ? 'border-[#00e0ff] shadow-xl shadow-cyan-500/10'
                : 'border-[#00e0ff33]'
                }`}
            >
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-[#00e0ff] text-black text-xs font-semibold px-2 py-1 rounded uppercase">
                  Le + populaire
                </span>
              )}

              {/* Badge icône stylé */}
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full border border-[#00e0ff33] bg-[#00e0ff11] animate-pulse shadow-sm shadow-[#00e0ff44]">
                <plan.icon className="w-5 h-5 text-[#00e0ff]" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>

              <ul className="text-sm text-gray-400 mb-8 space-y-2 w-full max-w-xs mx-auto text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00e0ff]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={ctaLink}
                className={`mt-auto px-6 py-2 rounded font-semibold transition w-full max-w-[200px] text-center ${plan.highlight
                  ? 'bg-[#00e0ff] text-black hover:scale-105'
                  : 'border border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff22]'
                  }`}
              >
                {plan.ctaLabel}
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
