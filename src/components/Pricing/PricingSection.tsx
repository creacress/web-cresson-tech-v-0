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
      '1 projet IA ou RPA simple',
      'Audit de données offert',
      'Déploiement cloud sécurisé',
      'Dashboard de suivi',
      'Support email (48h)',
      'Sans engagement',
    ],
    ctaLabel: 'Choisir Starter',
    icon: Rocket,
  },
  {
    name: 'Pro',
    price: '299€/mois',
    features: [
      '3 projets IA ou RPA actifs',
      'IA personnalisée (NLP, Vision, ML)',
      'Intégration API REST / FastAPI',
      'Dashboards interactifs & prédictifs',
      'Retraining mensuel inclus',
      'Support prioritaire (24h)',
      '2 ateliers IA/RPA/an',
    ],
    ctaLabel: 'Choisir Pro',
    highlight: true,
    icon: Settings,
  },
  {
    name: 'Entreprise',
    price: 'Sur devis',
    features: [
      'Projets IA/RPA illimités',
      'Audit stratégique + roadmap IA/RPA',
      'MLOps & orchestration RPA (CI/CD, monitoring)',
      'Hébergement cloud dédié ou on-premise',
      'Expert IA & RPA attitré',
      'Workshops sur-mesure',
      'Connexion à vos systèmes (ERP, CRM, etc.)',
    ],
    ctaLabel: 'Demander un devis',
    icon: Building,
  },
  {
    name: 'Personnalisé',
    price: 'Sur-mesure',
    features: [
      'Solution 100% adaptée à vos besoins',
      'Choix des technos (GPT, Claude, Mistral, UiPath, etc.)',
      'Accompagnement stratégique complet',
      'Modèle IA fine-tuné ou RPA sur-mesure',
      'Support dédié et suivi mensuel',
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
        <div className="text-sm text-gray-400 max-w-3xl mx-auto mt-6 text-left">
          <p className="mb-4">
            Nos offres couvrent toute la chaîne de valeur de l’IA et de la RPA : de la simple automatisation d’un processus métier jusqu’à la conception complète de modèles d’intelligence artificielle (Machine Learning, Deep Learning, NLP, LLM).
          </p>
          <p className="mb-4">
            ➤ Pour les projets IA “simples” (classification, prédiction, détection…), nos forfaits débutent à 99€/mois. Pour des besoins plus spécifiques, nos plans Pro ou Entreprise incluent des intégrations personnalisées, du retraining, des ateliers et plus.
          </p>
          <p className="mb-4">
            ➤ Pour les projets IA avancés ou sur-mesure (LLM, MLOps, fine-tuning de GPT, Claude, Mistral…), nous proposons une offre dédiée entièrement personnalisable.
          </p>
          <p className="mb-4">
            ➤ Côté automatisation (RPA), nous proposons des robots sur mesure développés en Python, Rust ou via des plateformes comme UiPath et Power Automate, avec des packs adaptés à vos outils métiers.
          </p>
          <p className="mb-4">
            Pour plus de détails ou un devis sur-mesure, n’hésitez pas à nous contacter. Tous nos projets sont éligibles aux aides à l’innovation (Crédit Impôt Recherche, subventions BPI, etc.).
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* Tarifs IA */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">💡 Tarifs IA</h3>

          <div className="grid gap-8 md:grid-cols-3">
            {/* IA Simple */}
            <div className="bg-[#1a1a1a] border border-[#00e0ff33] rounded p-6">
              <h4 className="text-xl font-semibold text-white mb-2">IA Simple</h4>
              <p className="text-gray-400 text-sm mb-4">Classification, prédiction, détection d’objets ou de fraude sur données structurées.</p>
              <ul className="text-sm text-gray-300 mb-4 space-y-2">
                <li>✓ À partir de 3 000 €</li>
                <li>✓ Modèles standards ML / scikit-learn</li>
                <li>✓ Dashboard de prédiction intégré</li>
              </ul>
              <p className="text-xs text-gray-500">Parfait pour les TPE / PME souhaitant débuter avec l’IA sur un cas ciblé.</p>
            </div>

            {/* IA Intermédiaire */}
            <div className="bg-[#1a1a1a] border border-[#00e0ff] shadow-cyan-500/10 rounded p-6">
              <h4 className="text-xl font-semibold text-white mb-2">IA Intermédiaire</h4>
              <p className="text-gray-400 text-sm mb-4">NLP, computer vision, retraining mensuel, intégration API REST, dashboards dynamiques.</p>
              <ul className="text-sm text-gray-300 mb-4 space-y-2">
                <li>✓ 10 000 € à 30 000 €</li>
                <li>✓ Déploiement cloud & API</li>
                <li>✓ Ateliers IA / accompagnement</li>
              </ul>
              <p className="text-xs text-gray-500">Idéal pour structurer des modèles IA internes et automatiser leur usage métier.</p>
            </div>

            {/* IA Complexe */}
            <div className="bg-[#1a1a1a] border border-[#00e0ff33] rounded p-6">
              <h4 className="text-xl font-semibold text-white mb-2">IA Complexe</h4>
              <p className="text-gray-400 text-sm mb-4">LLM, fine-tuning de GPT/Mistral, MLOps, CI/CD, hébergement cloud ou on-premise.</p>
              <ul className="text-sm text-gray-300 mb-4 space-y-2">
                <li>✓ À partir de 30 000 €</li>
                <li>✓ Modèle personnalisé sur vos données</li>
                <li>✓ Infrastructure IA complète + suivi</li>
              </ul>
              <p className="text-xs text-gray-500">Pensé pour les grands comptes ou entreprises souhaitant déployer leur propre IA souveraine.</p>
            </div>
          </div>
        </div>

        {/* Tarifs RPA */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">🤖 Tarifs RPA</h3>

          <div className="grid gap-8 md:grid-cols-3">
            {/* RPA Simple */}
            <div className="bg-[#1a1a1a] border border-[#00e0ff33] rounded p-6">
              <h4 className="text-xl font-semibold text-white mb-2">RPA Simple</h4>
              <p className="text-gray-400 text-sm mb-4">Automatisation avec Python, Rust ou Selenium pour extractions, clics, mails...</p>
              <ul className="text-sm text-gray-300 mb-4 space-y-2">
                <li>✓ 2 000 € à 5 000 €</li>
                <li>✓ Script sur mesure</li>
                <li>✓ Déclenchement manuel ou planifié</li>
              </ul>
              <p className="text-xs text-gray-500">Idéal pour automatiser des tâches simples sans licence.</p>
            </div>

            {/* RPA Intermédiaire */}
            <div className="bg-[#1a1a1a] border border-[#00e0ff] shadow-cyan-500/10 rounded p-6">
              <h4 className="text-xl font-semibold text-white mb-2">RPA Intermédiaire</h4>
              <p className="text-gray-400 text-sm mb-4">Processus multi-étapes, gestion de flux, interactions avec outils métiers.</p>
              <ul className="text-sm text-gray-300 mb-4 space-y-2">
                <li>✓ 5 000 € à 15 000 €</li>
                <li>✓ Dashboard + reporting</li>
                <li>✓ Maintenance 6 mois incluse</li>
              </ul>
              <p className="text-xs text-gray-500">Pour structurer l’automatisation métier sans complexité excessive.</p>
            </div>

            {/* RPA Complexe */}
            <div className="bg-[#1a1a1a] border border-[#00e0ff33] rounded p-6">
              <h4 className="text-xl font-semibold text-white mb-2">RPA Complexe</h4>
              <p className="text-gray-400 text-sm mb-4">Robots UiPath, Power Automate, OCR, orchestrateur, connexion CRM / ERP.</p>
              <ul className="text-sm text-gray-300 mb-4 space-y-2">
                <li>✓ À partir de 15 000 €</li>
                <li>✓ Robots autonomes et scalables</li>
                <li>✓ Licences incluses si souhaité</li>
              </ul>
              <p className="text-xs text-gray-500">Pensé pour les grandes entreprises ou l’automatisation critique à fort ROI.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-gray-400 text-sm text-left space-y-4">
        <h4 className="text-lg text-white font-semibold">FAQ Tarifs</h4>
        <p><strong>Quels sont les principaux facteurs de prix ?</strong> Le coût dépend du type d’IA ou RPA, de la complexité, du volume de données, des besoins d’intégration et de maintenance.</p>
        <p><strong>Proposez-vous des projets ponctuels ?</strong> Oui, nous réalisons des POC à partir de 5 000€ pour tester la faisabilité avant un déploiement complet.</p>
        <p><strong>Est-ce que je peux personnaliser une offre ?</strong> Absolument, notre plan “Personnalisé” est conçu pour ça.</p>
        <p><strong>Est-ce que vous travaillez avec les modèles GPT / Gemini / Claude ?</strong> Oui, nous intégrons ces modèles via API ou en version fine-tunée, et pouvons aussi héberger des modèles open-source.</p>
        <p><strong>Puis-je demander un audit gratuit ?</strong> Oui, inclus dans l’offre Starter.</p>
      </div>
    </section>
  )
}
