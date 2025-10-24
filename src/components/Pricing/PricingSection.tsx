'use client'

import { Rocket, Settings, Building, Puzzle } from 'lucide-react'
import Link from 'next/link'
import NeonDivider from '../ui/NeonDivider'

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#111] text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* INTRO CLAIRE ET HUMAINE */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-cyan-400">💡 Des offres simples et claires</h1>
        <p className="text-gray-300 text-lg">
          Que vous soyez une PME, une ETI ou une start-up, WebCressonTech vous aide à gagner du temps et à automatiser vos tâches sans complexité.  
          Nos offres combinent accompagnement humain, technologies d’IA et automatisation sur mesure, à un prix clair et sans surprise.
        </p>
      </div>

      <NeonDivider />

      {/* PLANS PRINCIPAUX */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">📦 Nos formules principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: 'Starter',
              setup: 'Setup dès 600€',
              sub: 'Abonnement 99€/mois',
              icon: Rocket,
              features: [
                '1 robot ou agent IA inclus',
                'Suivi et maintenance assurés',
                'Support standard (48h)',
                'Sans engagement',
              ],
              cta: 'Choisir Starter',
              tag: 'Idéal micro‑entreprise',
            },
            {
              name: 'Pro',
              setup: 'Setup dès 800€',
              sub: 'Abonnement 149€/mois',
              icon: Settings,
              features: [
                '2 robots ou mini-assistants IA',
                'Tableau de bord d’activité',
                'Mise à jour mensuelle incluse',
                'Support prioritaire (24h)',
              ],
              cta: 'Choisir Pro',
              tag: 'PME / TPE',
            },
            {
              name: 'Entreprise',
              setup: 'Setup dès 1 000€',
              sub: 'Abonnement 199€/mois',
              icon: Building,
              features: [
                'Automatisations avancées',
                'Hébergement dédié sécurisé',
                'Accompagnement personnalisé',
                'Suivi mensuel complet',
              ],
              cta: 'Parler à un expert',
              tag: 'ETI / PME+',
            },
            {
              name: 'Personnalisé',
              setup: 'Sur devis',
              sub: 'Sur devis',
              icon: Puzzle,
              features: [
                'Solution sur mesure à vos besoins',
                'Choix des outils et des IA',
                'Conseil stratégique inclus',
                'Suivi dédié et évolutif',
              ],
              cta: 'Créer mon plan sur mesure',
              tag: 'Sur‑mesure',
            },
          ].map((plan, i) => (
            <div key={i} className="bg-zinc-900 rounded-xl border border-zinc-800 hover:border-cyan-500 transition-all p-6 flex flex-col justify-between relative">
              <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-md border border-white/15 bg-white/5 text-white/80 z-10">
                {plan.tag}
              </span>
              <div>
                <plan.icon className="text-cyan-400 w-8 h-8 mx-auto mt-6 mb-3" />
                <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                <div className="text-sm text-gray-400 mb-4">{plan.setup} — {plan.sub}</div>
                <ul className="text-left text-gray-300 space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✔️ {f}</li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition font-semibold"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <NeonDivider />

      {/* CAS D’USAGE CONCRETS */}
      <section className="text-center py-16 bg-zinc-950">
        <h2 className="text-3xl font-bold text-emerald-400 mb-10">🧠 Exemples concrets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: 'Agent IA de support',
              setup: 'Setup 800€',
              sub: '99€/mois',
              features: [
                'Répond à vos clients ou collaborateurs',
                'Intégration site, Slack ou Teams',
                'Évolutif selon vos besoins',
              ],
            },
            {
              title: 'Prévision de ventes',
              setup: 'Setup 1 000€',
              sub: '149€/mois',
              features: [
                'Analyse et anticipation automatique',
                'Mise à jour mensuelle des données',
                'Tableaux de bord clairs et visuels',
              ],
            },
            {
              title: 'Robot de traitement automatique',
              setup: 'Setup 2 990€',
              sub: '149€/mois',
              features: [
                'Automatise vos mails ou vos factures',
                'Gagnez plusieurs heures par semaine',
                'Suivi et maintenance inclus',
              ],
            },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-emerald-600/40 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{item.setup} — {item.sub}</p>
                <ul className="text-left text-gray-300 space-y-2">
                  {item.features.map((f, idx) => (
                    <li key={idx}>✔️ {f}</li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="mt-4 inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-4 py-2 rounded-lg transition">
                Demander un devis
              </Link>
            </div>
          ))}
        </div>
      </section>

      <NeonDivider />

      {/* POURQUOI UN ABONNEMENT */}
      <section className="py-20 bg-[#0c0c0c] text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">🔁 Pourquoi un abonnement ?</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8">
          Nos abonnements assurent la fiabilité et l’évolution de vos outils sans surcoût.  
          Vous bénéficiez d’une maintenance continue, de mises à jour automatiques et d’un suivi proactif.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left text-gray-300">
          <li>✔️ Maintenance et mises à jour régulières</li>
          <li>✔️ Assistance rapide et prioritaire</li>
          <li>✔️ Suivi mensuel et amélioration continue</li>
          <li>✔️ Sécurité et hébergement gérés pour vous</li>
        </ul>
      </section>

      <NeonDivider />

      {/* AVANTAGES ENTREPRISE */}
      <section className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">💼 Avantages pour les entreprises</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          Nos offres sont éligibles aux aides à l’innovation et aux financements publics (CIR, BPI, etc.).
          Nous vous accompagnons pour constituer les dossiers et optimiser vos coûts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
            <h3 className="text-xl text-cyan-300 font-semibold mb-2">🎯 Aides et financements</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>✅ Crédit Impôt Recherche (CIR)</li>
              <li>✅ Subventions régionales et BPI</li>
              <li>✅ Accompagnement administratif</li>
            </ul>
          </div>
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
            <h3 className="text-xl text-cyan-300 font-semibold mb-2">📦 Conditions préférentielles</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>✔️ Tarifs dégressifs dès 2 projets</li>
              <li>✔️ Engagement flexible 6 à 12 mois</li>
              <li>✔️ Devis et contrats simplifiés</li>
            </ul>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-block mt-10 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white font-semibold transition"
        >
          📩 Discuter de mon projet
        </Link>
      </section>
    </section>
  )
}