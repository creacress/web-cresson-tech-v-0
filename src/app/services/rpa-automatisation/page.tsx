import { Metadata } from "next"
import Link from "next/link"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import LivreBlancComponent from "@/components/LivreBlanc/LivreBlanc"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"


export const revalidate = 86400

export const metadata: Metadata = {
  title: "RPA pour PME — Automatisation intelligente & robots logiciels | Web Cresson Tech",
  description:
    "Automatisez vos processus métiers avec la RPA pour PME : robots logiciels fiables, réduction des coûts, zéro erreur, ROI rapide. Packs Starter à Pro. Audit gratuit.",
  openGraph: {
    title: "RPA pour PME — Automatisation intelligente & robots logiciels | Web Cresson Tech",
    description:
      "Bots RPA pour PME : factures, saisies, relances, ERP/CRM, e‑mails. Déploiement rapide, ROI mesurable. Audit gratuit.",
    url: "https://webcresson.com/services/rpa-automatisation",
    images: [
      {
        url: "https://webcresson.com/images/rpa.webp",
        width: 1200,
        height: 630,
        alt: "RPA Automatisation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPA pour PME — Web Cresson Tech",
    description:
      "Automatisation intelligente des processus : ERP/CRM, factures, e‑mails. Audit gratuit.",
    images: ["https://webcresson.com/images/rpa.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/rpa-automatisation",
  },
  robots: { index: true, follow: true },
}

export default function RPAAutomatisationPage() {
  return (
<main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
  {/* SEO Structuré */}
  <BreadcrumbJsonLd
    overrides={{
      services: "Services",
      "rpa-automatisation": "RPA Automatisation",
    }}
  />
  <ServiceSchema
    serviceName="RPA Automatisation pour PME — Web Cresson Tech"
    serviceDescription="Automatisez vos processus métiers avec des robots logiciels : factures, saisies, relances, ERP/CRM, e‑mails. Déploiement rapide et ROI mesurable."
    serviceTypes={[
      "RPA Automatisation",
      "Automatisation des tâches",
      "Intégrations ERP/CRM",
      "Scraping & extraction de données",
    ]}
    faq={[
      { question: "Quels processus RPA prioriser en PME ?", answer: "Facturation, relances, saisies répétitives, extraction de données, reporting." },
      { question: "Quel délai pour un robot en production ?", answer: "POC en quelques jours, déploiement en 2–4 semaines selon la complexité." },
      { question: "Quel budget d’entrée ?", answer: "Pack Starter dès 1 490€ incluant 1 processus et 2 robots, support 30 jours." },
    ]}
  />

  {/* Hero */}
  <section className="text-center py-16">
    <BreadcrumbNav />
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">RPA pour PME — Automatisez les tâches répétitives</h1>
    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
      Des <strong>robots logiciels</strong> fiables pour exécuter vos tâches à votre place : plus vite, sans erreur, 24/7.
    </p>
    <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=rpa_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
      Demander un audit gratuit
    </Link>
  </section>

  {/* Points forts */}
  <section className="grid md:grid-cols-4 gap-4 my-10">
    {[
      { t: "Déploiement rapide", d: "POC en jours, mise en prod en 2–4 semaines." },
      { t: "Zéro erreur", d: "Fiabilité, traçabilité, conformité." },
      { t: "Intégrations faciles", d: "ERP/CRM, e‑mail, tableurs, webapps, APIs." },
      { t: "ROI mesurable", d: "Temps gagné, coûts réduits, qualité accrue." },
    ].map((b, i) => (
      <div key={i} className="group relative">
        <div className="bg-[#111] p-5 rounded-xl border border-[#00e0ff22] transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
          <h3 className="font-semibold text-white">{b.t}</h3>
          <p className="text-gray-400 text-sm">{b.d}</p>
        </div>
        <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(400px_circle_at_50%_0%,#00e0ff22,transparent_60%)]"></span>
      </div>
    ))}
  </section>

  {/* Ce que nous automatisons */}
  <section className="my-16">
    <h2 className="text-3xl font-bold mb-6 text-neon text-center">Ce que nous automatisons</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { t: "Factures & commandes", d: "Lecture, vérification, rapprochement, export compta." },
        { t: "Saisies ERP/CRM", d: "Création/MAJ fiches, imports, contrôles qualité." },
        { t: "E‑mails & relances", d: "Rappels, réponses modèles, notifications pilotées." },
        { t: "Onboarding RH", d: "Comptes, droits, dossiers, signatures électroniques." },
        { t: "Extraction & scraping", d: "Collecte multi‑sites, CAPTCHAs, exports structurés." },
        { t: "Reporting auto", d: "Consolidation, KPIs, diffusion périodique." },
      ].map((c, i) => (
        <div key={i} className="group relative">
          <div className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
            <h3 className="text-xl font-semibold mb-2">{c.t}</h3>
            <p className="text-gray-400 text-sm">{c.d}</p>
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(400px_circle_at_50%_0%,#00e0ff22,transparent_60%)]"></span>
        </div>
      ))}
    </div>
  </section>

  {/* Packs & prix (Product/Offer JSON‑LD) */}
  <section className="my-16">
    <h2 className="text-3xl font-bold text-center mb-2">Packs RPA pour PME</h2>
    <p className="text-gray-400 text-center mb-8">Démarrez vite, scalez ensuite.</p>
    <div className="grid md:grid-cols-3 gap-6">
      {[ 
        { name: 'RPA Starter', price: 1490, sku: 'rpa-starter', features: ["Automatisation 1 processus", "Jusqu'à 2 robots", "Monitoring de base", "Support 30 jours"], url: '/services/rpa-automatisation' },
        { name: 'RPA Growth', price: 2990, sku: 'rpa-growth', features: ["2–3 processus", "Robots parallèles", "Logs & alertes", "Connecteurs ERP/CRM"], url: '/services/rpa-automatisation' },
        { name: 'RPA Pro', price: 4990, sku: 'rpa-pro', features: ["4+ processus", "Orchestrateur", "SLA & supervision", "Atelier équipes"], url: '/services/rpa-automatisation' },
      ].map((p, i) => (
        <div key={i} className="group relative">
          <div className="rounded-xl border border-[#00e0ff44] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff88] hover:shadow-[0_12px_36px_-12px_#00e0ff88]">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-3xl font-extrabold my-2">{p.price}€</p>
            <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc pl-5">
              {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
            </ul>
            <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=rpa_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition">Démarrer</Link>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: p.name,
                description: 'Pack RPA pour PME',
                sku: p.sku,
                brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'EUR',
                  price: p.price,
                  availability: 'https://schema.org/InStock',
                  url: `${p.url}?utm_source=services&utm_medium=card&utm_campaign=offer_schema&plan=${p.sku}`,
                },
                additionalProperty: p.features.map((f) => ({ '@type': 'PropertyValue', name: 'Feature', value: f })),
              }) }}
            />
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(500px_circle_at_50%_0%,#00e0ff1f,transparent_60%)]"></span>
        </div>
      ))}
    </div>
  </section>

  {/* Méthode */}
  <section className="my-16 text-center">
    <h2 className="text-3xl font-bold mb-6">Méthode simple, résultats rapides</h2>
    <div className="grid md:grid-cols-3 gap-6 text-gray-300">
      <div>
        <h3 className="font-semibold text-xl mb-2">1. Audit & cadrage</h3>
        <p>Gratuit. On identifie cas d’usage à ROI rapide.</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">2. POC rapide</h3>
        <p>Prototype concret en quelques jours pour valider la valeur.</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">3. Mise en prod</h3>
        <p>Intégrations, formation, suivi du ROI.</p>
      </div>
    </div>
  </section>

  {/* Bande KPI */}
  <section className="my-16 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8 text-center">
    <h2 className="text-3xl font-bold mb-8">Impact mesurable de la RPA</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
      <div>
        <p className="text-5xl font-extrabold text-[#00e0ff]">120h</p>
        <p className="text-gray-400">Heures gagnées par mois</p>
      </div>
      <div>
        <p className="text-5xl font-extrabold text-[#00e0ff]">-95%</p>
        <p className="text-gray-400">% d’erreurs sur les process</p>
      </div>
      <div>
        <p className="text-5xl font-extrabold text-[#00e0ff]">+40%</p>
        <p className="text-gray-400">Productivité des équipes</p>
      </div>
    </div>
  </section>

  {/* FAQ locale visible + JSON‑LD */}
  <section className="my-20">
    <h2 className="text-3xl font-bold text-center mb-6">FAQ — RPA pour PME</h2>
    <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
      {[
        { q: 'Quels processus RPA prioriser ?', a: 'Facturation, relances, saisies répétitives, extraction de données, reporting.' },
        { q: 'Délai de mise en production ?', a: 'POC en quelques jours, déploiement en 2–4 semaines selon la complexité.' },
        { q: 'Budget d’entrée ?', a: 'Pack Starter dès 1 490€ (1 processus, 2 robots, support 30 jours).' },
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Quels processus RPA prioriser ?', acceptedAnswer: { '@type': 'Answer', text: 'Facturation, relances, saisies répétitives, extraction de données, reporting.' }},
        { '@type': 'Question', name: 'Délai de mise en production ?', acceptedAnswer: { '@type': 'Answer', text: 'POC en quelques jours, déploiement en 2–4 semaines selon la complexité.' }},
        { '@type': 'Question', name: 'Budget d’entrée ?', acceptedAnswer: { '@type': 'Answer', text: 'Pack Starter dès 1 490€ (1 processus, 2 robots, support 30 jours).' }}
      ]
    }) }} />
  </section>

  {/* CTA transversal */}
  <FinalCTA />
</main>
  )
}
