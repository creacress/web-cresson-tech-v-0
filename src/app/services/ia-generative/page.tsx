import { Metadata } from "next"
import Link from "next/link"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "IA Générative pour PME — Contenus, Images & Automations | Web Cresson Tech",
  description:
    "Solutions d’IA générative pour PME : contenus marketing, images produits, assistants IA et automatisations. Packs rapides, ROI mesurable. Audit gratuit.",
  openGraph: {
    title: "IA Générative pour PME — Contenus, Images & Automations | Web Cresson Tech",
    description:
      "Contenus, images, chatbots, templates SEO et automatisations pour PME. Déploiement rapide, ROI mesurable. Audit gratuit.",
    url: "https://webcresson.com/services/ia-generative",
    images: [
      {
        url: "https://webcresson.com/images/deep-learning.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Générative pour PME — Web Cresson Tech",
    description:
      "Générez des contenus, images et assistants IA. Packs rapides, ROI mesurable. Audit gratuit.",
    images: ["https://webcresson.com/images/deep-learning.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/ia-generative",
  },
}

export default function IAGenerativePage() {
  return (
<main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
  {/* SEO Structuré */}
  <BreadcrumbJsonLd
    overrides={{
      services: "Services",
      "ia-generative": "IA Générative",
    }}
  />
  <ServiceSchema
    serviceName="IA Générative pour PME — Web Cresson Tech"
    serviceDescription="Contenus, images produits, assistants IA et automatisations pour petites et moyennes entreprises. Déploiement rapide et ROI mesurable."
    serviceTypes={[
      "IA Générative",
      "Génération de contenu",
      "Génération d'images",
      "Assistants IA / Chatbots",
      "Automatisation marketing",
    ]}
    faq={[
      {
        question: "Quels cas d’usage concrets pour une PME ?",
        answer: "Création de contenus marketing, images produits, FAQ dynamique, réponses client, scripts vidéo, templates SEO, e‑mails et SMS automatiques.",
      },
      {
        question: "Combien de temps pour un premier résultat ?",
        answer: "Un POC en quelques jours, un MVP en 2–4 semaines selon la complexité.",
      },
      {
        question: "Faut‑il beaucoup de données ?",
        answer: "Non. On démarre avec ce que vous avez, on enrichit progressivement (fine‑tuning si nécessaire).",
      },
    ]}
  />

  {/* Hero */}
  <section className="text-center py-16">
    <BreadcrumbNav />
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">IA Générative pour PME</h1>
    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
      Générez des <strong>contenus</strong>, des <strong>images produits</strong> et des <strong>assistants IA</strong> qui travaillent 24/7. Mise en place rapide, <strong>ROI mesurable</strong>.
    </p>
    <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=genai_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
      Demander un audit gratuit
    </Link>
  </section>

  {/* Points forts */}
  <section className="grid md:grid-cols-4 gap-4 my-10">
    {[
      { t: "Déploiement rapide", d: "POC en jours, MVP en 2–4 semaines." },
      { t: "Mesure du ROI", d: "Trafic, leads, productivité — suivi concret." },
      { t: "Intégrations PME", d: "CRM/ERP, CMS, e‑commerce, emailing." },
      { t: "Conformité & sécurité", d: "Bonnes pratiques, gouvernance des prompts & données." },
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
        { t: "Contenus marketing", d: "Articles, landing pages, posts, emails, fiches produits." },
        { t: "Images produits & visuels", d: "Mockups, variantes, uniformisation du catalogue." },
        { t: "Assistants & chatbots", d: "FAQ dynamique, support client, base de connaissances." },
        { t: "Templates SEO", d: "Structures prêtes à l’emploi pour générer à l’échelle." },
        { t: "Automation e‑mail/SMS", d: "Campagnes, relances, nurturing pilotés par IA." },
        { t: "Scripts vidéo & pubs", d: "Scripts YouTube/Ads, hooks, storyboards." },
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
    <h2 className="text-3xl font-bold text-center mb-2">Packs rapides pour PME</h2>
    <p className="text-gray-400 text-center mb-8">Lancez‑vous sans friction. Évolutif ensuite.</p>
    <div className="grid md:grid-cols-3 gap-6">
      {[ 
        { name: 'GenAI Starter', price: 1290, sku: 'genai-starter', features: ['Gabarits de contenu', 'Images + textes', "Workflow d'approbation", 'Formation 2h'], url: '/services/ia-generative' },
        { name: 'GenAI Growth', price: 2490, sku: 'genai-growth', features: ['10 gabarits SEO', 'Assistant IA basique', 'Automations e‑mail', 'Tableau de bord ROI'], url: '/services/ia-generative' },
        { name: 'GenAI Pro', price: 3990, sku: 'genai-pro', features: ['Assistant IA avancé', 'Fine‑tuning léger', 'Intégrations CRM/ERP', 'Atelier équipes'], url: '/services/ia-generative' },
      ].map((p, i) => (
        <div key={i} className="group relative">
          <div className="rounded-xl border border-[#00e0ff44] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff88] hover:shadow-[0_12px_36px_-12px_#00e0ff88]">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-3xl font-extrabold my-2">{p.price}€</p>
            <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc pl-5">
              {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
            </ul>
            <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=genai_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition">Démarrer</Link>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: p.name,
                description: 'Pack IA Générative pour PME',
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

  {/* FAQ locale visible + JSON‑LD */}
  <section className="my-20">
    <h2 className="text-3xl font-bold text-center mb-6">FAQ — IA Générative pour PME</h2>
    <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
      {[
        { q: 'IA générative : quels cas d’usage pour PME ?', a: 'Contenus marketing, images produits, FAQ dynamique, réponses client, scripts vidéo, templates SEO, automatisations e‑mail/SMS.' },
        { q: 'Données nécessaires ?', a: 'On démarre avec vos données actuelles, on enrichit si besoin. Fine‑tuning ou prompts avancés selon le cas.' },
        { q: 'Time‑to‑value ?', a: 'Premiers résultats en 1–2 semaines, itérations rapides pour la qualité.' },
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
        { '@type': 'Question', name: 'IA générative : quels cas d’usage pour PME ?', acceptedAnswer: { '@type': 'Answer', text: 'Contenus marketing, images produits, FAQ dynamique, réponses client, scripts vidéo, templates SEO, automatisations e‑mail/SMS.' }},
        { '@type': 'Question', name: 'Données nécessaires ?', acceptedAnswer: { '@type': 'Answer', text: 'On démarre avec vos données actuelles, on enrichit si besoin. Fine‑tuning ou prompts avancés selon le cas.' }},
        { '@type': 'Question', name: 'Time‑to‑value ?', acceptedAnswer: { '@type': 'Answer', text: 'Premiers résultats en 1–2 semaines, itérations rapides pour la qualité.' }}
      ]
    }) }} />
  </section>

  {/* CTA */}
  <section className="text-center my-16">
    <h2 className="text-3xl font-bold mb-4">Prêt à lancer la GénAI dans votre PME ?</h2>
    <p className="text-gray-400 max-w-xl mx-auto mb-6">Audit gratuit pour identifier les meilleurs cas d’usage et un plan d’action concret.</p>
    <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=genai_final_cta" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
      Lancer mon audit gratuit
    </Link>
  </section>

  <FinalCTA />
</main>
  )
}
