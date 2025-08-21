import { Metadata } from "next"
import Link from "next/link"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"


export const revalidate = 86400
const SITE_URL = "https://webcresson.com"

export const metadata: Metadata = {
  title: "Machine Learning & Deep Learning pour PME | Prédiction, Anomalies, Vision — Web Cresson Tech",
  description:
    "Modèles de machine learning et deep learning pour PME : prévision des ventes, détection d’anomalies, scoring client, vision par ordinateur. Déploiement rapide, ROI mesurable.",
  openGraph: {
    title: "Machine Learning & Deep Learning pour PME",
    description:
      "Prédiction, détection d’anomalies, NLP et vision. Intégrations ERP/CRM, APIs et dashboards.",
    url: "https://webcresson.com/services/machine-deep-learning",
    images: [
      {
        url: "https://webcresson.com/images/machine-learning.webp",
        width: 1200,
        height: 630,
        alt: "Machine Learning pour PME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning & Deep Learning pour PME",
    description:
      "ML & DL pour PME : prévision, anomalies, scoring, vision. Audit gratuit.",
    images: ["https://webcresson.com/images/machine-learning.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/machine-deep-learning",
  },
}

export default function MachineLearningPage() {
  return (
<main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
  {/* Breadcrumb & JSON-LD */}
  <BreadcrumbJsonLd overrides={{ services: "Services", "machine-deep-learning": "Machine Learning" }} />
  <ServiceSchema
    serviceName="Machine Learning & Deep Learning pour PME — Web Cresson Tech"
    serviceDescription="Prédiction des ventes, détection d’anomalies, scoring client, NLP et vision par ordinateur. Déploiement rapide et ROI mesurable."
    serviceTypes={["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Anomaly Detection"]}
    faq={[
      { question: "Faut‑il beaucoup de données ?", answer: "Non. On démarre avec vos données actuelles, on enrichit si besoin (data augmentation, open data)." },
      { question: "Combien de temps pour des résultats ?", answer: "POC en quelques jours, MVP en 2–4 semaines selon la complexité." },
      { question: "Comment est mesuré le ROI ?", answer: "On suit des KPIs métiers (taux d’erreur, temps gagné, précision, CA incrémental)." },
    ]}
  />

  {/* Hero */}
  <section className="text-center py-16">
    <BreadcrumbNav />
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Machine Learning & Deep Learning pour PME</h1>
    <p className="text-gray-300 text-lg max-w-3xl mx-auto">Modèles prédictifs et IA avancée pour <strong>anticiper</strong>, <strong>détecter</strong> et <strong>automatiser</strong> vos décisions.</p>
    <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=mldl_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">Demander un audit gratuit</Link>
  </section>

  {/* Points forts */}
  <section className="grid md:grid-cols-4 gap-4 my-10">
    {[
      { t: "Précision métier", d: "Modèles adaptés à vos données et objectifs PME." },
      { t: "Déploiement rapide", d: "POC en jours, MVP en 2–4 semaines." },
      { t: "Intégrations", d: "API, ERP/CRM, dashboards, pipelines data." },
      { t: "Pilotage du ROI", d: "KPIs de précision, temps, coûts, revenus." },
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

  {/* Cas d’usage */}
  <section className="my-16">
    <h2 className="text-3xl font-bold mb-6 text-neon text-center">Cas d’usage concrets</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { t: "Prévision des ventes", d: "Estimations par produit/magasin; stocks optimisés." },
        { t: "Détection d’anomalies", d: "Fraude, pannes, écarts qualité en temps réel." },
        { t: "Scoring client", d: "Propension à acheter, churn, LTV, recommandations." },
        { t: "Vision par ordinateur", d: "Contrôle qualité, OCR, détection d’objets." },
        { t: "NLP", d: "Classification d’emails, priorisation tickets, résumés." },
        { t: "Maintenance prédictive", d: "Alerte sur dérives, planification intelligente." },
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
    <h2 className="text-3xl font-bold text-center mb-2">Packs ML/DL pour PME</h2>
    <p className="text-gray-400 text-center mb-8">Démarrez vite, itérez ensuite.</p>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { name: 'ML Starter', price: 2990, sku: 'ml-starter', features: ['POC prédictif', 'Nettoyage dataset', 'Notebook & API', 'Workshop 2h'], url: '/services/machine-deep-learning' },
        { name: 'ML Growth', price: 4990, sku: 'ml-growth', features: ['2 cas d’usage', 'Métriques & monitoring', 'CI/CD modèle', 'Dashboard ROI'], url: '/services/machine-deep-learning' },
        { name: 'ML Pro', price: 7990, sku: 'ml-pro', features: ['3+ cas', 'Pipeline MLOps', 'SLA & supervision', 'Atelier équipes'], url: '/services/machine-deep-learning' },
      ].map((p, i) => (
        <div key={i} className="group relative">
          <div className="rounded-xl border border-[#00e0ff44] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff88] hover:shadow-[0_12px_36px_-12px_#00e0ff88]">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-3xl font-extrabold my-2">{p.price}€</p>
            <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc pl-5">
              {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
            </ul>
            <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=ml_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition">Démarrer</Link>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: p.name,
                description: 'Pack Machine Learning pour PME',
                sku: p.sku,
                brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
                image: `${SITE_URL}/images/Machine_Learning.webp`,
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'EUR',
                  price: p.price,
                  availability: 'https://schema.org/InStock',
                  url: `${SITE_URL}${p.url}?utm_source=services&utm_medium=card&utm_campaign=offer_schema&plan=${p.sku}`,
                  itemCondition: 'https://schema.org/NewCondition'
                },
                additionalProperty: p.features.map((f) => ({ '@type': 'PropertyValue', name: 'Feature', value: f }))
              }) }}
            />
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(500px_circle_at_50%_0%,#00e0ff1f,transparent_60%)]"></span>
        </div>
      ))}
    </div>
  </section>

  {/* AggregateOffer schema for all packs */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AggregateOffer',
        url: 'https://webcresson.com/services/machine-deep-learning',
        priceCurrency: 'EUR',
        lowPrice: 2990,
        highPrice: 7990,
        offerCount: 3,
        offers: [
          { '@type': 'Offer', price: 2990, priceCurrency: 'EUR', url: 'https://webcresson.com/services/machine-deep-learning?plan=ml-starter', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 4990, priceCurrency: 'EUR', url: 'https://webcresson.com/services/machine-deep-learning?plan=ml-growth', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 7990, priceCurrency: 'EUR', url: 'https://webcresson.com/services/machine-deep-learning?plan=ml-pro', availability: 'https://schema.org/InStock' },
        ],
      }),
    }}
  />

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
    <h2 className="text-3xl font-bold mb-8">Impact mesurable du ML/DL</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
      <div><p className="text-5xl font-extrabold text-[#00e0ff]">+35%</p><p className="text-gray-400">Précision prévision</p></div>
      <div><p className="text-5xl font-extrabold text-[#00e0ff]">-60%</p><p className="text-gray-400">Temps d’analyse</p></div>
      <div><p className="text-5xl font-extrabold text-[#00e0ff]">x3</p><p className="text-gray-400">ROI campagnes</p></div>
    </div>
  </section>

  {/* FAQ locale visible + JSON‑LD */}
  <section className="my-20">
    <h2 className="text-3xl font-bold text-center mb-6">FAQ — Machine Learning pour PME</h2>
    <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
      {[
        { q: 'De quelles données avez‑vous besoin ?', a: 'Historique ventes, tickets, capteurs, CRM. On complète par data augmentation/open data si nécessaire.' },
        { q: 'Quelle maintenance du modèle ?', a: 'Suivi des dérives, ré‑entraînement périodique, surveillance métriques.' },
        { q: 'Peut‑on intégrer nos outils ?', a: 'Oui : APIs, ERP/CRM, dashboards BI, webhooks.' },
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
        { '@type': 'Question', name: 'De quelles données avez‑vous besoin ?', acceptedAnswer: { '@type': 'Answer', text: 'Historique ventes, tickets, capteurs, CRM. Data augmentation/open data si nécessaire.' }},
        { '@type': 'Question', name: 'Quelle maintenance du modèle ?', acceptedAnswer: { '@type': 'Answer', text: 'Suivi des dérives, ré‑entraînement périodique, surveillance métriques.' }},
        { '@type': 'Question', name: 'Peut‑on intégrer nos outils ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui : APIs, ERP/CRM, dashboards BI, webhooks.' }},
      ]
    }) }} />
  </section>

  {/* CTA final */}
  <section className="text-center my-16">
    <h2 className="text-3xl font-bold mb-4">Prêt à passer au prédictif ?</h2>
    <p className="text-gray-400 max-w-xl mx-auto mb-6">Audit gratuit pour choisir les bons cas d’usage, estimer le ROI et planifier le déploiement.</p>
    <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=ml_final_cta" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">Lancer mon audit gratuit</Link>
  </section>

  <FinalCTA />
</main>
  )
}
