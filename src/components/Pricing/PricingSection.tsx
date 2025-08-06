'use client'

import { Rocket, Settings, Building, Puzzle, LucideIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import NeonDivider from '../ui/NeonDivider'

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
    <section id="pricing" className="bg-[#111] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <section aria-labelledby="pricing-title" className="max-w-6xl mx-auto text-center mb-14">
        <h1 id="pricing-title" className="text-3xl sm:text-4xl font-bold mb-4">Tarification</h1>
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
            Pour plus de détails ou un devis sur-mesure ou un <Link href="/audit" className="underline text-cyan-400 hover:text-cyan-300">audit gratuit</Link>, n’hésitez pas à <Link href="/contact" className="underline text-cyan-400 hover:text-cyan-300">contactez-nous</Link>. Tous nos projets sont éligibles aux aides à l’innovation (Crédit Impôt Recherche, subventions BPI, etc.).
          </p>
        </div>
      </section>
      <NeonDivider />
      {/* Section Abonnements mensuels (plans.map...) */}
      <section className="py-20 bg-zinc-950 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">📦 Abonnements mensuels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`h-full flex flex-col justify-between bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border shadow-md transition-all duration-300 hover:shadow-cyan-500/20 border-zinc-800 hover:border-cyan-500 p-6 ${
                plan.highlight ? 'scale-[1.03] border-cyan-500' : ''
              }`}
            >
              <div>
                <div className="flex justify-center text-cyan-400 mb-4">
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{plan.price}</p>
                <ul className="text-sm text-gray-300 text-left space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔️ {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  href={plan.ctaLink || '/contact'}
                  className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition"
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <NeonDivider />
      {/* Section Packs RPA */}
      <section className="py-20 bg-[#0c0c0c] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">🦾 Nos Packs RPA Clés en Main</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Pour automatiser efficacement vos tâches répétitives avec des robots logiciels sur mesure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pack RPA Simple */}
          <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#2c1b00] to-[#0c0c0c] p-6 rounded-xl border border-amber-600/30 shadow-xl hover:shadow-amber-500/10 transition">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">⚙️ Pack RPA Simple</h3>
              <p className="text-amber-400 font-medium mb-4">à partir de 3 900€</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left mb-4">
                <li>✔️ Extraction web / clics automatisés</li>
                <li>✔️ Script Python ou Rust sur mesure</li>
                <li>✔️ Déclenchement planifié ou manuel</li>
                <li>✔️ Livraison clé en main</li>
              </ul>
            </div>
            <div>
              <Link href="/contact?plan=rpa-simple" className="inline-block mt-4 bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded-lg font-semibold transition">Demander une démo</Link>
            </div>
          </div>

          {/* Pack RPA Intermédiaire */}
          <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#332400] to-[#0c0c0c] p-6 rounded-xl border border-amber-500 shadow-xl hover:shadow-amber-500/20 transition">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">🤖 Pack RPA Intermédiaire</h3>
              <p className="text-amber-400 font-medium mb-4">à partir de 7 900€</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left mb-4">
                <li>✔️ Automatisation de workflows multi-étapes</li>
                <li>✔️ Intégration aux outils internes</li>
                <li>✔️ Dashboard de suivi</li>
                <li>✔️ Maintenance incluse 6 mois</li>
              </ul>
            </div>
            <div>
              <Link href="/contact?plan=rpa-intermediaire" className="inline-block mt-4 bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded-lg font-semibold transition">Demander une démo</Link>
            </div>
          </div>

          {/* Pack RPA Avancé */}
          <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#3d2f00] to-[#0c0c0c] p-6 rounded-xl border border-amber-600/30 shadow-xl hover:shadow-amber-500/10 transition">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">🧠 Pack RPA Avancé</h3>
              <p className="text-amber-400 font-medium mb-4">à partir de 19 500€</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left mb-4">
                <li>✔️ Robots UiPath / Power Automate</li>
                <li>✔️ OCR, formulaires, mail, bases de données</li>
                <li>✔️ Orchestration cloud ou on-premise</li>
                <li>✔️ Intégration CRM / ERP possible</li>
              </ul>
            </div>
            <div>
              <Link href="/contact?plan=rpa-avance" className="inline-block mt-4 bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded-lg font-semibold transition">Demander une démo</Link>
            </div>
          </div>
        </div>
      </section>
      <NeonDivider />
      {/* Section Abonnement IA/RPA */}
      <section className="py-24 bg-gradient-to-br from-black via-zinc-950 to-black text-white text-center relative overflow-hidden border-t border-zinc-800">
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-indigo-500/10 blur-2xl rounded-full animate-pulse-slow" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4 animate-fade-in">🔁 L’abonnement IA/RPA</h2>
          <p className="text-gray-400 text-lg mb-8 animate-fade-in delay-100">
            Pour garantir la qualité, la sécurité et la pérennité de votre projet IA/RPA, nous proposons un abonnement <strong>mensuel ou annuel</strong> incluant :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm text-gray-300 animate-fade-in-up">
            <ul className="space-y-3 bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <li>✔️ Maintenance technique et mises à jour régulières</li>
              <li>✔️ Support prioritaire (48h) & correctifs garantis</li>
              <li>✔️ Monitoring et retraining IA mensuel</li>
            </ul>
            <ul className="space-y-3 bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <li>✔️ Améliorations continues & suivi proactif</li>
              <li>✔️ Supervision technique & hébergement sécurisé</li>
              <li>✔️ Option MLOps/RPA orchestré (CI/CD, dashboards)</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 italic mt-8 animate-fade-in-up delay-300">
            L’abonnement démarre à <strong>99€/mois</strong> pour les projets simples. Tarification ajustée selon volumétrie, nombre de modèles ou robots, et SLA souhaité.
          </p>
        </div>
      </section>
      <NeonDivider />
      {/* Section FAQ Tarifs */}
      <div className="max-w-4xl mx-auto mt-20 text-gray-400 text-sm text-left space-y-4">
        <h2 className="text-lg text-white font-semibold">FAQ Tarifs</h2>
        <p><strong>Quels sont les principaux facteurs de prix ?</strong> Le coût dépend du type d’IA ou RPA, de la complexité, du volume de données, des besoins d’intégration et de maintenance.</p>
        <p><strong>Proposez-vous des projets ponctuels ?</strong> Oui, nous réalisons des POC à partir de 5 000€ pour tester la faisabilité avant un déploiement complet.</p>
        <p><strong>Est-ce que je peux personnaliser une offre ?</strong> Absolument, notre plan “Personnalisé” est conçu pour ça.</p>
        <p><strong>Est-ce que vous travaillez avec les modèles GPT / Gemini / Claude ?</strong> Oui, nous intégrons ces modèles via API ou en version fine-tunée, et pouvons aussi héberger des modèles open-source.</p>
        <p><strong>Puis-je demander un audit gratuit ?</strong> Oui, inclus dans l’offre Starter.</p>
      </div>
      <NeonDivider />
      {/* Encadré entreprise : CIR, remises, mini-FAQ modernisé */}
      <section className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4 animate-fade-in">💼 Avantages Entreprises</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in delay-100">
              Nos services sont conçus pour les professionnels avec accompagnement aux aides publiques et des conditions préférentielles pour les projets stratégiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">🎯 Aides et financements</h3>
              <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                <li>✅ Éligibilité Crédit Impôt Recherche (CIR)</li>
                <li>✅ Subventions BPI et dispositifs régionaux</li>
                <li>✅ Aide à la constitution du dossier</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 animate-fade-in-up delay-100">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">📦 Remises pros</h3>
              <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                <li>✔️ Remises pour engagement de 6 à 12 mois</li>
                <li>✔️ Conditions préférentielles multi-filiales</li>
                <li>✔️ Tarifs sur mesure pour projets récurrents</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 mt-8 animate-fade-in-up delay-200">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">❓ FAQ Entreprise</h3>
            <ul className="text-sm text-gray-300 space-y-3 list-disc list-inside">
              <li>Puis-je régler par mandat administratif ou virement entreprise ? ✅ Oui.</li>
              <li>Fournissez-vous devis signés, contrats-cadres ? ✅ Sur demande.</li>
              <li>Compatible avec achats publics / appels d’offres ? ✅ Oui.</li>
              <li>Projets éligibles au CIR ? ✅ Oui, selon les cas.</li>
            </ul>
            <div className="text-center mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition-all animate-pulse"
              >
                📩 Discuter de votre projet
              </Link>
            </div>
          </div>
        </div>
      </section>
      <NeonDivider />
  
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quels sont les principaux facteurs de prix ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le coût dépend du type d’IA ou RPA, de la complexité, du volume de données, des besoins d’intégration et de maintenance."
              }
            },
            {
              "@type": "Question",
              "name": "Proposez-vous des projets ponctuels ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, nous réalisons des POC à partir de 5 000€ pour tester la faisabilité avant un déploiement complet."
              }
            },
            {
              "@type": "Question",
              "name": "Est-ce que je peux personnaliser une offre ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolument, notre plan “Personnalisé” est conçu pour ça."
              }
            },
            {
              "@type": "Question",
              "name": "Est-ce que vous travaillez avec les modèles GPT / Gemini / Claude ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, nous intégrons ces modèles via API ou en version fine-tunée, et pouvons aussi héberger des modèles open-source."
              }
            },
            {
              "@type": "Question",
              "name": "Puis-je demander un audit gratuit ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, inclus dans l’offre Starter."
              }
            }
          ]
        })}
      </script>
    </section>
  )
}
