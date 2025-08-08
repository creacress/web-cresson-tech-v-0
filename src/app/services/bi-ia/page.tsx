import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Business Intelligence (BI) augmentée pour PME | Dashboards prédictifs & alertes — Web Cresson Tech",
  description:
    "Dashboards IA pour PME : KPIs prédictifs, alertes intelligentes, intégrations ERP/CRM et automatisation des insights. Déploiement rapide, ROI mesurable.",
  openGraph: {
    title: "BI augmentée pour PME — Dashboards prédictifs & alertes",
    description:
      "Prédictions intégrées, alertes automatiques, visualisations dynamiques et intégrations data. Audit gratuit.",
    url: "https://webcresson.com/services/bi-ia",
    images: [
      { url: "https://webcresson.com/images/bi-augmentee.webp", width: 1200, height: 630, alt: "Dashboard intelligent BI IA" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BI augmentée pour PME — Web Cresson Tech",
    description:
      "KPIs prédictifs, alertes intelligentes, automatisation analytics. Déploiement rapide, ROI mesurable.",
    images: ["https://webcresson.com/images/bi-augmentee.webp"],
  },
  alternates: { canonical: "https://webcresson.com/services/bi-ia" },
}

export default function BIAugmenteePage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      {/* JSON-LD SEO */}
      <BreadcrumbJsonLd overrides={{ services: "Services", "bi-ia": "Business Intelligence augmentée" }} />

      <ServiceSchema
        serviceName="Business Intelligence augmentée pour PME — Web Cresson Tech"
        serviceDescription="Dashboards IA avec prédictions, alertes automatiques et automatisation des insights. Intégrations ERP/CRM et data pipelines."
        serviceTypes={["BI augmentée", "Visualisation IA", "Dashboard intelligent", "Prédiction KPI", "Automatisation analytique"]}
        faq={[
          { question: "Qu’est-ce que la BI augmentée ?", answer: "C’est la BI enrichie d’IA : prévisions, analyses prédictives, alertes automatiques et aide à la décision proactive." },
          { question: "Quels outils utilisez-vous ?", answer: "Superset, Metabase, Streamlit, Plotly, Python, FastAPI, entre autres." },
          { question: "Compatible avec mes données ?", answer: "Oui : SQL/NoSQL, CSV, APIs et votre stack BI existante." },
        ]}
      />

      {/* Hero */}
      <section className="text-center py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Business Intelligence augmentée par l’IA</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Des <strong>KPIs prédictifs</strong>, des <strong>alertes intelligentes</strong> et des <strong>dashboards dynamiques</strong> qui guident vos décisions.
        </p>
        <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=bi_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">Demander un audit gratuit</Link>
      </section>

      {/* Points forts */}
      <section className="grid md:grid-cols-4 gap-4 my-10">
        {[
          { t: "Prédictions intégrées", d: "Prévisions de ventes, stocks, cashflow dans vos dashboards." },
          { t: "Alertes proactives", d: "Anomalies, dérives et opportunités détectées automatiquement." },
          { t: "Intégrations data", d: "ERP/CRM, APIs, ETL/ELT, data warehouse & BI." },
          { t: "ROI mesurable", d: "Heures gagnées, erreurs réduites, décisions accélérées." },
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

      {/* Ce que nous livrons */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Ce que nous livrons</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Dashboards prédictifs', d: 'KPI futurs, scénarios et objectifs auto-ajustés.' },
            { t: 'Alerting & reporting auto', d: 'Diffusion périodique, alertes Slack/Email, playbooks.' },
            { t: 'Connecteurs & ETL', d: 'Pipelines robustes vers DWH/BI (Airbyte/DBT/Custom).'},
            { t: 'Self‑service analytics', d: 'Exploration guidée, filtres métiers, gouvernance.' },
            { t: 'APIs & intégrations', d: 'Exposez KPIs/insights à vos apps et outils.' },
            { t: 'Data quality & monitoring', d: 'Tests, validation schémas, observabilité.' },
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
        <h2 className="text-3xl font-bold text-center mb-2">Packs BI pour PME</h2>
        <p className="text-gray-400 text-center mb-8">Lancez vite, faites évoluer ensuite.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'BI Starter', price: 1990, sku: 'bi-starter', features: ['1 dashboard clé', 'Connecteur 1 source', 'Alertes de base', 'Formation 2h'], url: '/services/bi-ia' },
            { name: 'BI Growth', price: 3990, sku: 'bi-growth', features: ['3 dashboards', 'ETL + DWH léger', 'Alertes avancées', 'KPIs prédictifs'], url: '/services/bi-ia' },
            { name: 'BI Pro', price: 6990, sku: 'bi-pro', features: ['5+ dashboards', 'Monitoring data quality', 'Playbooks & SLA', 'Intégrations étendues'], url: '/services/bi-ia' },
          ].map((p, i) => (
            <div key={i} className="group relative">
              <div className="rounded-xl border border-[#00e0ff44] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff88] hover:shadow-[0_12px_36px_-12px_#00e0ff88]">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-3xl font-extrabold my-2">{p.price}€</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc pl-5">
                  {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
                </ul>
                <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=bi_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition">Démarrer</Link>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  '@context': 'https://schema.org', '@type': 'Product', name: p.name, description: 'Pack Business Intelligence pour PME', sku: p.sku, brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
                  offers: { '@type': 'Offer', priceCurrency: 'EUR', price: p.price, availability: 'https://schema.org/InStock', url: `${p.url}?utm_source=services&utm_medium=card&utm_campaign=offer_schema&plan=${p.sku}` },
                  additionalProperty: p.features.map((f) => ({ '@type': 'PropertyValue', name: 'Feature', value: f })),
                }) }} />
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(500px_circle_at_50%_0%,#00e0ff1f,transparent_60%)]"></span>
            </div>
          ))}
        </div>
      </section>

      {/* AggregateOffer schema for all packs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'AggregateOffer', url: 'https://webcresson.com/services/bi-ia', priceCurrency: 'EUR', lowPrice: 1990, highPrice: 6990, offerCount: 3,
        offers: [
          { '@type': 'Offer', price: 1990, priceCurrency: 'EUR', url: 'https://webcresson.com/services/bi-ia?plan=bi-starter', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 3990, priceCurrency: 'EUR', url: 'https://webcresson.com/services/bi-ia?plan=bi-growth', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 6990, priceCurrency: 'EUR', url: 'https://webcresson.com/services/bi-ia?plan=bi-pro', availability: 'https://schema.org/InStock' },
        ],
      }) }} />

      {/* Bande KPI */}
      <section className="my-16 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Impact mesurable de la BI augmentée</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">-70%</p><p className="text-gray-400">Temps passé en reporting</p></div>
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">+25%</p><p className="text-gray-400">Décisions basées données</p></div>
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">x3</p><p className="text-gray-400">Réactivité aux anomalies</p></div>
        </div>
      </section>

      {/* FAQ locale visible + JSON‑LD */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ — BI augmentée pour PME</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            { q: 'Quels KPIs peut-on prédire ?', a: 'Ventes, churn, taux de conversion, demande, cashflow, délais logistiques, etc.' },
            { q: 'Quels outils de BI intégrez-vous ?', a: 'Superset, Metabase, Power BI (selon besoin), Streamlit, Plotly, etc.' },
            { q: 'Comment démarre-t-on ?', a: 'Audit gratuit, POC rapide, puis industrialisation progressive.' },
          ].map((item, i) => (
            <details key={i} className="group p-4 open:bg-[#0b0b0b]">
              <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">{item.q}<span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span></summary>
              <p className="text-gray-400 mt-2">{item.a}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Quels KPIs peut-on prédire ?', acceptedAnswer: { '@type': 'Answer', text: 'Ventes, churn, taux de conversion, demande, cashflow, délais logistiques, etc.' }},
            { '@type': 'Question', name: 'Quels outils de BI intégrez-vous ?', acceptedAnswer: { '@type': 'Answer', text: 'Superset, Metabase, Power BI (selon besoin), Streamlit, Plotly, etc.' }},
            { '@type': 'Question', name: 'Comment démarre-t-on ?', acceptedAnswer: { '@type': 'Answer', text: 'Audit gratuit, POC rapide, puis industrialisation progressive.' }},
          ]
        }) }} />
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">“Grâce aux dashboards prédictifs mis en place par WebCressonTech, nos décisions commerciales sont basées sur des insights en temps réel.”</blockquote>
        <p className="text-sm text-gray-500 mb-6">— Direction Data, groupe retail</p>
      </section>

      {/* CTA final */}
      <section className="text-center my-20">
        <h2 className="text-3xl font-bold mb-4">Vous voulez prendre de meilleures décisions, plus vite ?</h2>
        <p className="text-gray-400 mb-6">Parlons dashboards intelligents, prédictions et automatisation de vos KPIs.</p>
        <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=bi_final_cta" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">Discuter de mon projet BI</Link>
      </section>

      <FinalCTA />
    </main>
  )
}
