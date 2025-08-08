import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Développement API Python pour PME | FastAPI & Django REST – Web Cresson Tech",
  description:
    "Développement d'API performantes et sécurisées pour PME avec FastAPI & Django REST. Backends scalables, documentation OpenAPI, CI/CD & intégrations métiers.",
  openGraph: {
    title: "Développement API Python pour PME | FastAPI & Django REST",
    description:
      "Concevez des backends robustes avec FastAPI ou Django REST. Intégrations ERP/CRM, automatisations et SaaS. Audit gratuit.",
    url: "https://webcresson.com/services/developpement-api",
    images: [
      {
        url: "https://webcresson.com/images/api.webp",
        width: 1200,
        height: 630,
        alt: "Développement API Python pour PME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développement API PME – FastAPI & Django REST",
    description:
      "Backends performants et sécurisés pour PME, avec Python, FastAPI et Django REST.",
    images: ["https://webcresson.com/images/api.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/developpement-api",
  },
}

export default function DeveloppementApiPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      {/* Breadcrumb & JSON-LD */}
      <BreadcrumbJsonLd overrides={{ services: "Services", "developpement-api": "Développement API" }} />
      <ServiceSchema
        serviceName="Développement API Python pour PME"
        serviceDescription="Création d'API robustes et performantes avec FastAPI et Django REST. Sécurité, scalabilité, intégrations ERP/CRM et documentation automatisée."
        serviceTypes={["Développement Backend", "FastAPI", "Django REST", "API sécurisée", "Microservices"]}
        faq={[
          { question: "Pourquoi choisir FastAPI ou Django REST ?", answer: "FastAPI est parfait pour des microservices rapides et documentés. Django REST est idéal pour des applications structurées avec ORM." },
          { question: "Quelles intégrations sont possibles ?", answer: "ERP, CRM, SaaS, dashboards BI, automatisations internes." },
          { question: "Comment garantissez-vous la sécurité ?", answer: "Auth OAuth2/JWT, rate limiting, validation stricte, observabilité et logs." },
        ]}
      />

      {/* Hero */}
      <section className="text-center py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Des APIs robustes, rapides et sécurisées</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">Backends Python optimisés pour PME avec FastAPI ou Django REST. Scalabilité, intégrations et sécurité au cœur.</p>
        <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=api_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">Demander un audit gratuit</Link>
      </section>

      {/* Points forts */}
      <section className="grid md:grid-cols-4 gap-4 my-10">
        {[
          { t: "Performance", d: "FastAPI async et DRF optimisés pour haut débit et faible latence." },
          { t: "Sécurité", d: "Auth OAuth2/JWT, CORS, rate limiting, audit logs." },
          { t: "Scalabilité", d: "Docker, orchestration, CI/CD, cloud-ready." },
          { t: "Documentation", d: "OpenAPI/Swagger auto, tests et mock APIs." },
        ].map((b, i) => (
          <div key={i} className="group relative">
            <div className="bg-[#111] p-5 rounded-xl border border-[#00e0ff22] transition-all duration-300 hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
              <h3 className="font-semibold text-white">{b.t}</h3>
              <p className="text-gray-400 text-sm">{b.d}</p>
            </div>
            <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(400px_circle_at_50%_0%,#00e0ff22,transparent_60%)]"></span>
          </div>
        ))}
      </section>

      {/* Ce qu'on fait */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Ce que nous développons pour vous</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "API REST & GraphQL", d: "Endpoints performants, sécurisés et versionnés." },
            { t: "Intégrations métiers", d: "ERP, CRM, automatisations, SaaS." },
            { t: "Microservices", d: "Architecture découplée, scalable et maintenable." },
            { t: "Automatisations", d: "Jobs planifiés, traitement données en temps réel." },
            { t: "Observabilité", d: "Monitoring, alertes, tracing et logs structurés." },
            { t: "Tests & QA", d: "Unitaires, intégration, e2e, couverture 90%+" },
          ].map((c, i) => (
            <div key={i} className="group relative">
              <div className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
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
        <h2 className="text-3xl font-bold text-center mb-2">Packs API pour PME</h2>
        <p className="text-gray-400 text-center mb-8">Backends prêts à l’emploi, évolutifs ensuite.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'API Starter', price: 1990, sku: 'api-starter', features: ['1 service principal', 'Auth JWT + CORS', 'OpenAPI auto', 'CI/CD basique'], url: '/services/developpement-api' },
            { name: 'API Growth', price: 3990, sku: 'api-growth', features: ['3 services', 'RBAC + rate limiting', 'Tests & observabilité', 'CI/CD complet'], url: '/services/developpement-api' },
            { name: 'API Pro', price: 6990, sku: 'api-pro', features: ['5+ services', 'Microservices & cache', 'SLA & monitoring', 'Audit sécurité'], url: '/services/developpement-api' },
          ].map((p, i) => (
            <div key={i} className="group relative">
              <div className="rounded-xl border border-[#00e0ff44] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff88] hover:shadow-[0_12px_36px_-12px_#00e0ff88]">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-3xl font-extrabold my-2">{p.price}€</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc pl-5">
                  {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
                </ul>
                <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=api_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition">Démarrer</Link>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    name: p.name,
                    description: 'Pack Développement API pour PME',
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

      {/* Bande KPI */}
      <section className="my-16 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Impact mesurable</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">-50%</p><p className="text-gray-400">Temps de dev backend</p></div>
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">+200%</p><p className="text-gray-400">Capacité de requêtes</p></div>
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">99.9%</p><p className="text-gray-400">Disponibilité</p></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ — Développement API PME</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            { q: 'Quelles technos utilisez-vous ?', a: 'FastAPI, Django REST, PostgreSQL, MongoDB, Docker, CI/CD.' },
            { q: 'Pouvez-vous intégrer à mon ERP/CRM ?', a: 'Oui, via API REST/GraphQL sécurisée et stable.' },
            { q: 'Offrez-vous un audit ?', a: 'Oui, audit gratuit et plan d’intégration personnalisé.' },
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
            { '@type': 'Question', name: 'Quelles technos utilisez-vous ?', acceptedAnswer: { '@type': 'Answer', text: 'FastAPI, Django REST, PostgreSQL, MongoDB, Docker, CI/CD.' }},
            { '@type': 'Question', name: 'Pouvez-vous intégrer à mon ERP/CRM ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, via API REST/GraphQL sécurisée et stable.' }},
            { '@type': 'Question', name: 'Offrez-vous un audit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, audit gratuit et plan d’intégration personnalisé.' }},
          ]
        }) }} />
      </section>

      {/* AggregateOffer schema for all packs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AggregateOffer',
            url: 'https://webcresson.com/services/developpement-api',
            priceCurrency: 'EUR',
            lowPrice: 1990,
            highPrice: 6990,
            offerCount: 3,
            offers: [
              {
                '@type': 'Offer',
                price: 1990,
                priceCurrency: 'EUR',
                url: 'https://webcresson.com/services/developpement-api?plan=api-starter',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                price: 3990,
                priceCurrency: 'EUR',
                url: 'https://webcresson.com/services/developpement-api?plan=api-growth',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                price: 6990,
                priceCurrency: 'EUR',
                url: 'https://webcresson.com/services/developpement-api?plan=api-pro',
                availability: 'https://schema.org/InStock',
              },
            ],
          }),
        }}
      />

      {/* CTA final */}
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold mb-4">Prêt à lancer votre backend PME ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">Audit gratuit pour définir l’architecture idéale, estimer le ROI et planifier le déploiement.</p>
        <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=api_final_cta" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">Lancer mon audit gratuit</Link>
      </section>
    </main>
  )
}
