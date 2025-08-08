// @ts-nocheck
import { Metadata } from 'next'
import JulieClient from '../PersonaClient'

export const metadata: Metadata = {
  title: 'Démo IA pour Julie (TPE) — Automatisation, Relances & Dashboard | Web Cresson Tech',
  description:
    "Cas d’usage IA pour TPE : saisie automatique de devis/factures, relances clients par IA et dashboard simplifié. Gains de temps et réduction d’erreurs.",
  openGraph: {
    title: 'Démo IA pour Julie (TPE) — Web Cresson Tech',
    description:
      'Automatiser la facturation, relancer les clients et suivre les ventes. Pack IA TPE : rapide, concret, ROI mesurable.',
    url: 'https://webcresson.com/solutions/julie',
    type: 'article',
    images: [
      { url: 'https://webcresson.com/avatars/julie.png', width: 800, height: 800, alt: 'Persona Julie — TPE' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Démo IA pour Julie (TPE) — Web Cresson Tech',
    description: 'Saisie auto, relances IA, dashboard clair — Pack IA TPE.',
    images: ['https://webcresson.com/avatars/julie.png'],
  },
  alternates: { canonical: 'https://webcresson.com/solutions/julie' },
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
              { '@type': 'ListItem', position: 3, name: 'Julie (TPE)', item: 'https://webcresson.com/solutions/julie' },
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
            name: "Mettre en place l'automatisation IA pour TPE (persona Julie)",
            totalTime: 'P14D',
            step: [
              { '@type': 'HowToStep', position: 1, name: 'Saisie automatique', text: 'Importer les devis/factures pour extraction auto des champs.' },
              { '@type': 'HowToStep', position: 2, name: 'Relances IA', text: 'Définir les scénarios de relance adaptés aux profils clients.' },
              { '@type': 'HowToStep', position: 3, name: 'Dashboard & assistant', text: 'Suivre les KPIs et piloter à la voix si nécessaire.' },
            ],
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
              { '@type': 'ListItem', position: 1, name: 'Lecture intelligente des e-mails' },
              { '@type': 'ListItem', position: 2, name: 'CRM IA simplifié' },
              { '@type': 'ListItem', position: 3, name: 'Contenu local généré' },
              { '@type': 'ListItem', position: 4, name: 'Stocks simplifiés' },
            ],
          })
        }}
      />

      <JulieClient />
      {/* FAQ visible — persona Julie */}
      <section className="my-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">FAQ — Persona Julie (TPE)</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            { q: 'Combien de temps pour un premier résultat ?', a: 'Un POC en quelques jours, un MVP en 2–4 semaines selon la complexité.' },
            { q: 'Faut‑il changer d’outils ?', a: 'Non. On s’intègre à vos outils (email, tableur, facturation) et on automatise autour.' },
            { q: 'Quel budget prévoir ?', a: 'Packs TPE à partir de 1 290€ selon le périmètre; audit gratuit.' },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Combien de temps pour un premier résultat ?', acceptedAnswer: { '@type': 'Answer', text: 'POC en quelques jours, MVP en 2–4 semaines.' } },
              { '@type': 'Question', name: 'Faut‑il changer d’outils ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, intégration à vos outils existants.' } },
              { '@type': 'Question', name: 'Quel budget prévoir ?', acceptedAnswer: { '@type': 'Answer', text: 'Packs TPE à partir de 1290€ selon périmètre; audit gratuit.' } },
            ]
          })
        }} />
      </section>
    </>
  )
}