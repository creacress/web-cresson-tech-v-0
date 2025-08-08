import { Metadata } from 'next'
import { MarcClient } from '../PersonaClient'

export const metadata: Metadata = {
  title: 'Démo IA — Marc (PME services) | Leads, Reporting & Assistants — Web Cresson Tech',
  description:
    "Cas d’usage IA pour PME services : scoring de leads, reporting automatisé, assistants d’équipe et intégrations CRM/ERP. Déploiement rapide, ROI mesurable.",
  openGraph: {
    title: 'Démo IA — Marc (PME services) — Web Cresson Tech',
    description:
      'Prioriser les leads, automatiser le reporting et assister les équipes. Pack IA PME pour accélérer les ventes.',
    url: 'https://webcresson.com/solutions/marc',
    type: 'article',
    images: [
      { url: 'https://webcresson.com/avatars/marc.png', width: 800, height: 800, alt: 'Persona Marc — PME services' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Démo IA — Marc (PME services)',
    description: 'Leads, reporting, assistants — Pack IA PME.',
    images: ['https://webcresson.com/avatars/marc.png'],
  },
  alternates: { canonical: 'https://webcresson.com/solutions/marc' },
}

export default function Page() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://webcresson.com/' },
              { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://webcresson.com/solutions' },
              { '@type': 'ListItem', position: 3, name: 'Marc (PME services)', item: 'https://webcresson.com/solutions/marc' },
            ],
          })
        }}
      />

      {/* HowTo JSON-LD (3 étapes) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'HowTo',
            name: "Déployer l'IA pour une PME services (persona Marc)",
            totalTime: 'P14D',
            step: [
              { '@type': 'HowToStep', position: 1, name: 'Scoring des leads', text: 'Classer automatiquement les prospects par probabilité de conversion.' },
              { '@type': 'HowToStep', position: 2, name: 'Reporting auto', text: 'Générer dashboards et alertes hebdomadaires sans effort.' },
              { '@type': 'HowToStep', position: 3, name: 'Assistants d’équipe', text: 'Aide à la réponse, rédaction d’offres et résumés.' },
            ],
          })
        }}
      />

      {/* FAQ JSON-LD (persona Marc) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Combien de temps pour un premier résultat ?', acceptedAnswer: { '@type': 'Answer', text: 'POC en quelques jours, MVP en 2–4 semaines selon le périmètre.' } },
              { '@type': 'Question', name: 'Compatibilité CRM/ERP ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, intégrations natives ou via API (ERP/CRM, tableurs, outils métiers).' } },
              { '@type': 'Question', name: 'Quel budget prévoir ?', acceptedAnswer: { '@type': 'Answer', text: 'Packs PME à partir de 1 990€ selon le périmètre; audit gratuit.' } },
            ]
          })
        }}
      />

      {/* ItemList JSON-LD (autres cas d’usage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'ItemList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Prédiction des ventes' },
              { '@type': 'ListItem', position: 2, name: 'Relances intelligentes' },
              { '@type': 'ListItem', position: 3, name: 'Extraction de documents' },
              { '@type': 'ListItem', position: 4, name: 'Assistant CRM' },
              { '@type': 'ListItem', position: 5, name: 'NLP Helpdesk' },
              { '@type': 'ListItem', position: 6, name: 'Intégrations ERP/CRM' },
            ],
          })
        }}
      />

      {/* Client UI */}
      <MarcClient />
      {/* FAQ visible — persona Marc */}
      <section className="my-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">FAQ — Persona Marc (PME services)</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            { q: 'Combien de temps pour un premier résultat ?', a: 'Un POC en quelques jours, un MVP en 2–4 semaines selon le périmètre.' },
            { q: 'Compatibilité CRM/ERP ?', a: 'Oui, intégrations natives ou via API (ERP/CRM, tableurs, outils métiers).' },
            { q: 'Quel budget prévoir ?', a: 'Packs PME à partir de 1 990€ selon le périmètre; audit gratuit.' },
          ].map((item, i) => (
            <details key={i} className="group p-4 open:bg-[#0b0b0b]">
              <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">
                {item.q}
                <span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span>
              </summary>
              <p className="text-gray-400 mt-2">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}