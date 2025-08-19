import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"

export const revalidate = 86400

export const viewport = {
  themeColor: '#0b0f1a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "IA Générative pour PME — Contenus, Images & Assistants | Web Cresson Tech",
  description:
    "Solutions d’IA générative pour PME : contenus marketing, images produits, assistants IA et automatisations. Packs rapides, ROI mesurable. Audit gratuit.",
  openGraph: {
    type: "website",
    title: "IA Générative pour PME — Contenus, Images & Assistants",
    description:
      "Contenus, images, chatbots, templates SEO et automatisations pour PME. Déploiement rapide, ROI mesurable. Audit gratuit.",
    url: "https://webcresson.com/services/intelligence-artificielle",
    images: [
      {
        url: "https://webcresson.com/images/ia-generative.webp",
        width: 1200,
        height: 630,
        alt: "IA Générative — Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@webcressontech",
    title: "IA Générative pour PME — Web Cresson Tech",
    description:
      "Générez des contenus, images et assistants IA. Packs rapides, ROI mesurable. Audit gratuit.",
    images: ["https://webcresson.com/images/ia-generative.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/intelligence-artificielle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

function Section({ id, title, desc, children }: { id?: string; title?: string; desc?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="mx-auto my-16 max-w-6xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_20px_80px_-20px_rgba(0,0,0,0.4)] animate-slide-up">
      {title && (
        <h2 id={id ? `${id}-title` : undefined} className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>
      )}
      {desc && <p className="mt-2 text-white/80 max-w-2xl">{desc}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`animated-card rounded-xl border border-white/15 bg-white/[0.06] p-5 ring-1 ring-white/5 hover:border-cyan-400/40 hover:bg-white/[0.08] transition ${className}`}>
      {children}
    </div>
  )
}

export default function IaGenerativePage() {
  return (
<>
  <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-black/80 focus:px-4 focus:py-2 focus:text-white">Aller au contenu</a>
  <main id="content" className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
    {/* SEO Structuré */}
    <BreadcrumbJsonLd
      overrides={{
        services: "Services",
        "intelligence-artificielle": "IA Générative",
      }}
    />
    <ServiceSchema
      serviceName="IA Générative pour PME — Web Cresson Tech"
      serviceDescription="Contenus, images produits, assistants IA et automatisations pour petites et moyennes entreprises. Déploiement rapide et ROI mesurable."
      serviceTypes={["IA Générative", "Génération de contenu", "Génération d'images", "Assistants IA / Chatbots", "Automatisation marketing"]}
      faq={[
        { question: "Quels cas d’usage concrets pour une PME ?", answer: "Création de contenus marketing, images produits, FAQ dynamique, réponses client, scripts vidéo, templates SEO, e‑mails et SMS automatiques." },
        { question: "Combien de temps pour un premier résultat ?", answer: "Un POC en quelques jours, un MVP en 2–4 semaines selon la complexité." },
        { question: "Faut‑il beaucoup de données ?", answer: "Non. On démarre avec ce que vous avez, on enrichit progressivement (fine‑tuning si nécessaire)." },
      ]}
    />

    {/* Hero */}
    <section className="text-center py-16 animate-fade-in-up">
      <BreadcrumbNav />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
        <span className="relative header-glow">
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(56,189,248,0.45)]">
            IA Générative pour PME
          </span>
        </span>
      </h1>
      <p className="text-white/85 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '120ms' }}>
        Générez des <strong>contenus</strong>, des <strong>images produits</strong> et des <strong>assistants IA</strong> qui travaillent 24/7. Mise en place rapide, <strong>ROI mesurable</strong>.
      </p>
      <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=genai_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition" aria-label="Demander un audit IA générative">
        Demander un audit gratuit
      </Link>
    </section>

    {/* Points forts */}
    <Section id="points-forts" title="Pourquoi la GénAI en PME ?">
      <div className="grid md:grid-cols-4 gap-4">
        {[{ t: "Déploiement rapide", d: "POC en jours, MVP en 2–4 semaines." }, { t: "Mesure du ROI", d: "Trafic, leads, productivité — suivi concret." }, { t: "Intégrations PME", d: "CRM/ERP, CMS, e‑commerce, emailing." }, { t: "Conformité & sécurité", d: "Gouvernance des prompts & données." }].map((b, i) => (
          <div key={i} className="tilt-wrap h-full">
            <Card className="h-full flex flex-col justify-between">
              <h3 className="font-semibold text-white">{b.t}</h3>
              <p className="text-white/80 text-sm">{b.d}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>

    {/* Ce que nous faisons */}
    <Section id="use-cases" title="Tout ce qu’on peut faire pour vous">
      <div className="grid md:grid-cols-3 gap-6">
        {[{ t: "Contenus marketing", d: "Articles, landing pages, posts, emails, fiches produits." }, { t: "Images produits & visuels", d: "Mockups, variantes, uniformisation du catalogue." }, { t: "Assistants & chatbots", d: "FAQ dynamique, support client, base de connaissances." }, { t: "Templates SEO", d: "Structures prêtes à l’emploi pour générer à l’échelle." }, { t: "Automation e‑mail/SMS", d: "Campagnes, relances, nurturing pilotés par IA." }, { t: "Scripts vidéo & pubs", d: "Scripts YouTube/Ads, hooks, storyboards." }].map((c, i) => (
          <div key={i} className="tilt-wrap h-full">
            <Card className="h-full">
              <h3 className="text-xl font-semibold mb-2">{c.t}</h3>
              <p className="text-white/80 text-sm">{c.d}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>

    {/* Packs & prix (Product/Offer JSON‑LD) */}
    <Section id="packs" title="Packs GénAI pour PME" desc="Lancez‑vous sans friction. Évolutif ensuite.">
      <div className="grid md:grid-cols-3 gap-6">
        {[{ name: 'GenAI Starter', price: 1290, sku: 'genai-starter', features: ['Gabarits de contenu', 'Images + textes', "Workflow d'approbation", 'Formation 2h'], url: '/services/intelligence-artificielle' }, { name: 'GenAI Growth', price: 2490, sku: 'genai-growth', features: ['10 gabarits SEO', 'Assistant IA basique', 'Automations e‑mail', 'Tableau de bord ROI'], url: '/services/intelligence-artificielle' }, { name: 'GenAI Pro', price: 3990, sku: 'genai-pro', features: ['Assistant IA avancé', 'Fine‑tuning léger', 'Intégrations CRM/ERP', 'Atelier équipes'], url: '/services/intelligence-artificielle' }].map((p, i) => (
          <div key={i} className="tilt-wrap h-full">
            <Card className="relative h-full flex flex-col">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-3xl font-extrabold my-2">{p.price}€</p>
              <ul className="text-white/80 text-sm space-y-1 mb-4 list-disc pl-5">
                {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
              </ul>
              <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=genai_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition" aria-label={`Démarrer le pack ${p.name}`}>Démarrer</Link>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Product',
                  name: p.name,
                  description: 'Pack IA Générative pour PME',
                  sku: p.sku,
                  brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
                  offers: { '@type': 'Offer', priceCurrency: 'EUR', price: p.price, availability: 'https://schema.org/InStock', url: `${p.url}?utm_source=services&utm_medium=card&utm_campaign=offer_schema&plan=${p.sku}` },
                  additionalProperty: p.features.map((f) => ({ '@type': 'PropertyValue', name: 'Feature', value: f })),
                }) }}
              />
            </Card>
          </div>
        ))}
      </div>
    </Section>

    {/* Méthode */}
    <Section id="methode" title="Méthode simple, résultats rapides">
      <div className="grid md:grid-cols-3 gap-6 text-white/85">
        <Card><h3 className="font-semibold text-xl mb-2">1. Audit & cadrage</h3><p>Gratuit. On identifie cas d’usage à ROI rapide.</p></Card>
        <Card><h3 className="font-semibold text-xl mb-2">2. POC rapide</h3><p>Prototype concret en quelques jours pour valider la valeur.</p></Card>
        <Card><h3 className="font-semibold text-xl mb-2">3. Mise en prod</h3><p>Intégrations, formation, suivi du ROI.</p></Card>
      </div>
    </Section>

    {/* Bande KPI */}
    <Section id="kpi" title="Impact mesurable de la GénAI">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
        <Card><p className="text-5xl font-extrabold text-[#00e0ff]">x4</p><p className="text-white/80">Vitesse de production</p></Card>
        <Card><p className="text-5xl font-extrabold text-[#00e0ff]">-60%</p><p className="text-white/80">Temps passé sur contenus</p></Card>
        <Card><p className="text-5xl font-extrabold text-[#00e0ff]">+30%</p><p className="text-white/80">Leads/Conversion</p></Card>
      </div>
    </Section>

    {/* FAQ locale visible + JSON‑LD */}
    <Section id="faq" title="FAQ — IA Générative pour PME">
      <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
        {[{ q: 'IA générative : quels cas d’usage pour PME ?', a: 'Contenus marketing, images produits, FAQ dynamique, réponses client, scripts vidéo, templates SEO, automatisations e‑mail/SMS.' }, { q: 'Données nécessaires ?', a: 'On démarre avec vos données actuelles, on enrichit si besoin. Fine‑tuning ou prompts avancés selon le cas.' }, { q: 'Time‑to‑value ?', a: 'Premiers résultats en 1–2 semaines, itérations rapides pour la qualité.' }].map((item, i) => (
          <details key={i} className="group p-4 open:bg-[#0b0b0b]">
            <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">
              {item.q}
              <span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span>
            </summary>
            <p className="text-white/80 mt-2">{item.a}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: 'IA générative : quels cas d’usage pour PME ?', acceptedAnswer: { '@type': 'Answer', text: 'Contenus marketing, images produits, FAQ dynamique, réponses client, scripts vidéo, templates SEO, automatisations e‑mail/SMS.' }}, { '@type': 'Question', name: 'Données nécessaires ?', acceptedAnswer: { '@type': 'Answer', text: 'On démarre avec vos données actuelles, on enrichit si besoin. Fine‑tuning ou prompts avancés selon le cas.' }}, { '@type': 'Question', name: 'Time‑to‑value ?', acceptedAnswer: { '@type': 'Answer', text: 'Premiers résultats en 1–2 semaines, itérations rapides pour la qualité.' }} ] }) }} />
    </Section>

    <Section id="cta-transversal">
      <FinalCTA />
    </Section>
  </main>
</>
  )
}
