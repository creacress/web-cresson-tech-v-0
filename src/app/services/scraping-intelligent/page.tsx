import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"


export const revalidate = 86400

export const metadata: Metadata = {
  title: "Scraping Web Intelligent (Rust + Selenium) pour PME | Web Cresson Tech",
  description:
    "Scraping intelligent pour PME : Rust + Selenium pour extraire des données sur sites dynamiques (JS), à haute performance et conforme. Packs rapides, ROI mesurable. Audit gratuit.",
  openGraph: {
    title: "Scraping Web Intelligent (Rust + Selenium) pour PME",
    description:
      "Extraction de données fiable, performante et conforme (robots.txt, CGU). Intégrations ERP/CRM et APIs.",
    url: "https://webcresson.com/services/scraping-intelligent",
    images: [
      {
        url: "https://webcresson.com/images/scraping-rust-selenium.webp",
        width: 1200,
        height: 630,
        alt: "Scraping Intelligent avec Rust et Selenium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scraping Web Intelligent — Rust + Selenium",
    description:
      "Collecte de données avancée pour PME (sites dynamiques JS). Déploiement rapide, ROI mesurable. Audit gratuit.",
    images: ["https://webcresson.com/images/scraping-rust-selenium.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/scraping-intelligent",
  },
}

export default function ScrapingIntelligentPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      {/* Breadcrumb & JSON-LD */}
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "scraping-intelligent": "Scraping Intelligent",
        }}
      />
      <ServiceSchema
        serviceName="Scraping Intelligent (Rust + Selenium) pour PME — Web Cresson Tech"
        serviceDescription="Extraction de données fiable sur sites dynamiques (JS) avec Rust + Selenium : performances, robustesse, conformité et intégrations."
        serviceTypes={["Scraping Web", "Automatisation", "Rust", "Selenium", "Extraction de Données"]}
        faq={[
          {
            question: "Pourquoi utiliser Rust et Selenium ?",
            answer:
              "Rust apporte performance/sécurité; Selenium permet l'interaction avec les sites dynamiques (JS) : login, clics, pagination, etc.",
          },
          {
            question: "Conformité légale ?",
            answer:
              "Respect des robots.txt/CGU, throttling, authentification propriétaire et stockage conforme (RGPD).",
          },
          {
            question: "Quelles intégrations PME ?",
            answer:
              "Exports CSV/JSON, APIs, CRM/ERP, dashboards BI et data warehouse.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Scraping Web Intelligent pour PME</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Rust + Selenium pour extraire des données à grande vitesse sur des sites <strong>dynamiques</strong>, <strong>sûrs</strong> et <strong>conformes</strong>.
        </p>
        <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=scraping_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
          Demander un audit gratuit
        </Link>
      </section>

      {/* Points forts */}
      <section className="grid md:grid-cols-4 gap-4 my-10">
        {[
          { t: "Haute performance", d: "Pipeline Rust multi‑threads; Selenium pour l'interaction fine." },
          { t: "Résilience", d: "Retries, anti‑blocage, sélecteurs robustes, monitoring." },
          { t: "Conformité", d: "robots.txt/CGU respectés, RGPD, journaux d’audit." },
          { t: "Intégrations", d: "CSV/JSON, API, ERP/CRM, BI, Data Warehouse." },
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

      {/* Ce que nous faisons */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6 text-neon text-center">Tout ce qu’on peut faire pour vous</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Login & navigation", d: "Auth, cookies, formulaires, pagination, filtrage avancé." },
            { t: "Extraction dynamique", d: "Contenu généré JS, SPA, iframes, tables virtuelles." },
            { t: "Anti‑blocage", d: "Rotation UA/IP, délais aléatoires, gestion erreurs." },
            { t: "Normalisation", d: "Nettoyage, déduplication, validation schémas." },
            { t: "Exports & APIs", d: "CSV/JSON, endpoints sécurisés, webhooks." },
            { t: "Automations", d: "Plannings, surveillance prix/stock, alertes e‑mail." },
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
        <h2 className="text-3xl font-bold text-center mb-2">Packs Scraping pour PME</h2>
        <p className="text-gray-400 text-center mb-8">Démarrez vite, scalez ensuite.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            { name: 'Scraping Starter', price: 1490, sku: 'scrape-starter', features: ['1 source dynamique', 'Login + pagination', 'Export CSV/JSON', 'Monitoring 30 jours'], url: '/services/scraping-intelligent' },
            { name: 'Scraping Growth', price: 2990, sku: 'scrape-growth', features: ['3 sources', 'Anti‑blocage avancé', 'API & webhooks', 'Dashboard ROI'], url: '/services/scraping-intelligent' },
            { name: 'Scraping Pro', price: 4990, sku: 'scrape-pro', features: ['5+ sources', 'Orchestrateur + alertes', 'DWH/BI', 'SLA & supervision'], url: '/services/scraping-intelligent' },
          ].map((p, i) => (
            <div key={i} className="group relative">
              <div className="rounded-xl border border-[#00e0ff44] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff88] hover:shadow-[0_12px_36px_-12px_#00e0ff88]">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-3xl font-extrabold my-2">{p.price}€</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc pl-5">
                  {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
                </ul>
                <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=scraping_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition">Démarrer</Link>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    name: p.name,
                    description: 'Pack Scraping pour PME',
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
        <h2 className="text-3xl font-bold mb-8">Impact mesurable du scraping</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div>
            <p className="text-5xl font-extrabold text-[#00e0ff]">x5</p>
            <p className="text-gray-400">Vitesse de collecte</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-[#00e0ff]">-90%</p>
            <p className="text-gray-400">Temps manuel</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-[#00e0ff]">24/7</p>
            <p className="text-gray-400">Collecte continue</p>
          </div>
        </div>
      </section>

      {/* FAQ locale visible + JSON‑LD */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ — Scraping pour PME</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            { q: 'Est‑ce légal ?', a: 'Nous respectons robots.txt/CGU, mettons en place un throttling et sécurisons l’accès/authentification.' },
            { q: 'Sites dynamiques ?', a: 'Oui : JS/SPAs, login, formulaires, pagination, iframes…' },
            { q: 'Intégrations ?', a: 'CSV/JSON, API, CRM/ERP, BI/DWH selon vos besoins.' },
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
            { '@type': 'Question', name: 'Est‑ce légal ?', acceptedAnswer: { '@type': 'Answer', text: 'Respect de robots.txt/CGU, throttling et sécurité des accès.' }},
            { '@type': 'Question', name: 'Gérez‑vous les sites dynamiques ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui : JS/SPAs, login, formulaires, pagination, iframes…' }},
            { '@type': 'Question', name: 'Quelles intégrations sont possibles ?', acceptedAnswer: { '@type': 'Answer', text: 'CSV/JSON, API, CRM/ERP, BI/DWH selon les besoins.' }}
          ]
        }) }} />
      </section>

      {/* CTA final */}
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold mb-4">Prêt à industrialiser votre collecte de données ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">Audit gratuit pour identifier les meilleures sources, estimer le ROI et planifier la mise en production.</p>
        <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=scraping_final_cta" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
          Lancer mon audit gratuit
        </Link>
      </section>

      <FinalCTA />
    </main>
  )
}
