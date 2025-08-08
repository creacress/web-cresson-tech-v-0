'use client'

import React from 'react'
import Link from 'next/link'
import { TiltCard, KpiCounter, SafeLink } from '@/components/Home/HomeInteractive'

// --- Shared tiny components ---
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">{children}</h2>
}

function Hero({ title, subtitle, utm }: { title: string; subtitle: React.ReactNode; utm: string }) {
  return (
    <header className="text-center mb-12">
      <h1 className="font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 text-4xl sm:text-5xl">
        {title}
      </h1>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">{subtitle}</p>
      <Link href={`/services/audit-gratuit?${utm}`} className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
        Demander un audit gratuit
      </Link>
    </header>
  )
}

function KPIBand({ items }: { items: { to: number; prefix?: string; suffix: string; label: string; cls?: string }[] }) {
  return (
    <section className="my-8 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
        {items.map((k, i) => (
          <div key={i}>
            <KpiCounter to={k.to} prefix={k.prefix} suffix={k.suffix} className={`text-5xl font-extrabold ${k.cls || 'text-cyan-400'}`} />
            <p className="text-gray-400">{k.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Process({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <section className="my-10">
      <SectionTitle>🚀 Processus IA simplifié</SectionTitle>
      <div className="flex flex-wrap gap-6 justify-center">
        {steps.map((s, i) => (
          <TiltCard key={i}>
            <div className="bg-[#1a1a1a] border border-cyan-700/30 rounded-xl p-6 text-center max-w-sm w-full shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

function UseCases({ cases }: { cases: { icon: string; title: string; desc: string }[] }) {
  return (
    <section className="my-12">
      <SectionTitle>🧰 Cas d’usage IA utiles</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((item, i) => (
          <TiltCard key={i}>
            <div className="bg-[#111] border border-[#00e0ff33] p-5 rounded-lg">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

function FooterCTA({ personaKey }: { personaKey: string }) {
  return (
    <div className="text-center mt-16 space-y-4">
      <SafeLink
        href={`/services/audit-gratuit?utm_source=persona_${personaKey}&utm_medium=cta&utm_campaign=audit`}
        className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
      >
        Demander ce Pack IA pour mon entreprise
      </SafeLink>
      <div>
        <Link href={`/contact?utm_source=persona_${personaKey}&utm_medium=cta&utm_campaign=contact`} className="text-sm text-cyan-400 underline decoration-dotted">
          Parler à un expert →
        </Link>
      </div>
    </div>
  )
}

// --- Julie ---
export default function JulieClient() {
  return (
    <main className="px-6 pt-10 pb-16 text-white max-w-6xl mx-auto">
      <Hero
        title="🧠 Démo IA personnalisée — Julie (TPE artisanale)"
        subtitle={<>
          Automatiser la facturation, relancer les clients et suivre les ventes — sans complexité. Voici comment notre <strong>Pack IA TPE</strong> aide Julie à gagner du temps et réduire les erreurs.
        </>}
        utm="utm_source=persona_julie&utm_medium=hero&utm_campaign=audit"
      />

      {/* Avatar */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/avatars/julie.png" alt="Persona Julie" className="w-28 h-28 rounded-full mx-auto mb-4" />

      <KPIBand
        items={[
          { to: 20, suffix: 'h', label: 'Heures économisées / mois', cls: 'text-cyan-400' },
          { to: 60, prefix: '-', suffix: '%', label: 'Temps passé sur l’administratif', cls: 'text-indigo-300' },
          { to: 90, prefix: '+', suffix: '%', label: 'Tâches automatisées', cls: 'text-pink-400' },
        ]}
      />

      <Process
        steps={[
          { title: '📥 Étape 1 – Saisie automatique', desc: 'Glissez vos devis/factures. L’IA extrait les champs clés.' },
          { title: '📨 Étape 2 – Relances IA', desc: 'Scénarios de relance adaptés aux clients, envoi auto.' },
          { title: '📊 Étape 3 – Dashboard & assistant', desc: 'KPIs de ventes + pilotage à la voix si besoin.' },
        ]}
      />

      <UseCases
        cases={[
          { icon: '📧', title: 'Lecture intelligente des e-mails', desc: 'Classement auto, priorisation, réponses proposées.' },
          { icon: '🗂️', title: 'CRM IA simplifié', desc: 'Fiches auto-remplies, rappels intelligents, tâches.' },
          { icon: '📝', title: 'Contenu local généré', desc: 'Posts réseaux, promos, fiches produits.' },
          { icon: '📦', title: 'Stocks simplifiés', desc: 'Prévision basique + alertes de réassort.' },
          { icon: '💬', title: 'Chat d’assistance', desc: 'Réponses 24/7 aux questions fréquentes.' },
          { icon: '🔗', title: 'Intégrations', desc: 'Email, tableur, facturation, e‑commerce.' },
        ]}
      />

      <div className="text-center mt-8">
        <Link href="/IA?sector=TPE&utm_source=persona_julie&utm_medium=hub&utm_campaign=open_models#sector-selector" className="text-sm text-cyan-400 underline decoration-dotted">
          Voir les modèles IA adaptés aux TPE →
        </Link>
      </div>

      <FooterCTA personaKey="julie" />

      {/* Switcher */}
      <nav className="mt-16 text-center text-sm text-gray-400 space-x-4">
        <a href="/solutions/julie?utm_source=persona_julie&utm_medium=switcher&utm_campaign=self">Julie</a>
        <a href="/solutions/marc?utm_source=persona_julie&utm_medium=switcher&utm_campaign=to_marc">Marc</a>
        <a href="/solutions/lisa?utm_source=persona_julie&utm_medium=switcher&utm_campaign=to_lisa">Lisa</a>
      </nav>
    </main>
  )
}

// --- Marc ---
export function MarcClient() {
  return (
    <main className="px-6 pt-10 pb-16 text-white max-w-6xl mx-auto">
      <Hero
        title="💼 Démo IA — Marc (PME services)"
        subtitle={<>
          Prioriser les leads, automatiser le reporting et assister les équipes. Le <strong>Pack IA PME</strong> pour accélérer les ventes.
        </>}
        utm="utm_source=persona_marc&utm_medium=hero&utm_campaign=audit"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/avatars/marc.png" alt="Persona Marc" className="w-28 h-28 rounded-full mx-auto mb-4" />

      <KPIBand
        items={[
          { to: 30, suffix: 'h', label: 'Heures gagnées sur le reporting', cls: 'text-cyan-400' },
          { to: 25, prefix: '+', suffix: '%', label: 'Taux de conversion', cls: 'text-pink-400' },
          { to: 40, prefix: '-', suffix: '%', label: 'Saisie manuelle', cls: 'text-indigo-300' },
        ]}
      />

      <Process
        steps={[
          { title: '🔎 Scoring des leads', desc: 'Classe automatiquement les prospects par probabilité de conversion.' },
          { title: '📈 Reporting auto', desc: 'Dashboards dynamiques + alertes hebdomadaires.' },
          { title: '🤖 Assistants d’équipe', desc: 'Aide à la réponse, rédaction d’offres et résumés.' },
        ]}
      />

      <UseCases
        cases={[
          { icon: '📊', title: 'Prédiction des ventes', desc: 'Prévisions par produit / commercial.' },
          { icon: '📨', title: 'Relances intelligentes', desc: 'Séquences email/SMS pilotées par IA.' },
          { icon: '🧾', title: 'Extraction de docs', desc: 'OCR + structuration contrats / devis.' },
          { icon: '💬', title: 'Assistant CRM', desc: 'Notes auto, résumé appels, recommandations.' },
          { icon: '🧠', title: 'NLP helpdesk', desc: 'Routage, priorisation tickets, réponses.' },
          { icon: '🔗', title: 'Intégrations ERP/CRM', desc: 'Connecteurs et APIs dédiées.' },
        ]}
      />

      <div className="text-center mt-8">
        <Link href="/IA?sector=PME&utm_source=persona_marc&utm_medium=hub&utm_campaign=open_models#sector-selector" className="text-sm text-cyan-400 underline decoration-dotted">
          Voir les modèles IA pour PME →
        </Link>
      </div>

      <FooterCTA personaKey="marc" />

      <nav className="mt-16 text-center text-sm text-gray-400 space-x-4">
        <a href="/solutions/julie?utm_source=persona_marc&utm_medium=switcher&utm_campaign=to_julie">Julie</a>
        <a href="/solutions/marc?utm_source=persona_marc&utm_medium=switcher&utm_campaign=self">Marc</a>
        <a href="/solutions/lisa?utm_source=persona_marc&utm_medium=switcher&utm_campaign=to_lisa">Lisa</a>
      </nav>
    </main>
  )
}

// --- Lisa ---
export function LisaClient() {
  return (
    <main className="px-6 pt-10 pb-16 text-white max-w-6xl mx-auto">
      <Hero
        title="🏭 Démo IA — Lisa (Industrie/Opérations)"
        subtitle={<>
          Maintenance prédictive, contrôle qualité et optimisation des stocks. Le <strong>Pack IA Industrie</strong> pour fiabiliser l’opérationnel.
        </>}
        utm="utm_source=persona_lisa&utm_medium=hero&utm_campaign=audit"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/avatars/lisa.png" alt="Persona Lisa" className="w-28 h-28 rounded-full mx-auto mb-4" />

      <KPIBand
        items={[
          { to: 15, suffix: 'h', label: 'Temps de diagnostic gagné', cls: 'text-cyan-400' },
          { to: 50, prefix: '-', suffix: '%', label: 'Arrêts non planifiés', cls: 'text-indigo-300' },
          { to: 20, prefix: '+', suffix: '%', label: 'Taux de service', cls: 'text-pink-400' },
        ]}
      />

      <Process
        steps={[
          { title: '🛠️ Capteurs & collecte', desc: 'Récupération télémétrie / historiques pannes.' },
          { title: '📉 Modèles prédictifs', desc: 'Détection dérives, prédiction pannes & qualité.' },
          { title: '📦 Planification', desc: 'Ordonnancement, maintenance, réassort optimisés.' },
        ]}
      />

      <UseCases
        cases={[
          { icon: '🔧', title: 'Maintenance prédictive', desc: 'Alerte précoce et planification.' },
          { icon: '🔍', title: 'Inspection visuelle', desc: 'Vision par ordinateur pour controle qualité.' },
          { icon: '🏷️', title: 'Traçabilité', desc: 'Suivi lots & conformité.' },
          { icon: '📦', title: 'Gestion des stocks', desc: 'Prévision demande & réassort.' },
          { icon: '⚙️', title: 'Pilotage atelier', desc: 'KPI temps réel & alertes.' },
          { icon: '🔗', title: 'Intégrations MES/ERP', desc: 'Connecteurs, APIs et dashboards.' },
        ]}
      />

      <div className="text-center mt-8">
        <Link href="/IA?sector=industrie&utm_source=persona_lisa&utm_medium=hub&utm_campaign=open_models#sector-selector" className="text-sm text-cyan-400 underline decoration-dotted">
          Voir les modèles IA pour l’industrie →
        </Link>
      </div>

      <FooterCTA personaKey="lisa" />

      <nav className="mt-16 text-center text-sm text-gray-400 space-x-4">
        <a href="/solutions/julie?utm_source=persona_lisa&utm_medium=switcher&utm_campaign=to_julie">Julie</a>
        <a href="/solutions/marc?utm_source=persona_lisa&utm_medium=switcher&utm_campaign=to_marc">Marc</a>
        <a href="/solutions/lisa?utm_source=persona_lisa&utm_medium=switcher&utm_campaign=self">Lisa</a>
      </nav>
    </main>
  )
}
