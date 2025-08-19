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
  title: "Scraping Web Intelligent (Rust + Selenium) pour PME | Web Cresson Tech",
  description:
    "Scraping intelligent pour PME : Rust + Selenium pour extraire des données sur sites dynamiques (JS), à haute performance et conforme. Packs rapides, ROI mesurable. Audit gratuit.",
  openGraph: {
    type: "website",
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
    site: "@webcressontech",
  },
  alternates: {
    canonical: "https://webcresson.com/services/scraping-intelligent",
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

export default function ScrapingIntelligentPage() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-black/80 focus:px-4 focus:py-2 focus:text-white">Aller au contenu</a>
      <main id="content" className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
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
        <section className="text-center py-16 animate-fade-in-up">
          <BreadcrumbNav />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="relative header-glow">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(56,189,248,0.45)]">
                Scraping Web Intelligent pour PME
              </span>
            </span>
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            Rust + Selenium pour extraire des données à grande vitesse sur des sites <strong>dynamiques</strong>, <strong>sûrs</strong> et <strong>conformes</strong>.
          </p>
          <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=scraping_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition" aria-label="Demander un audit scraping">
            Demander un audit gratuit
          </Link>
        </section>

        <Section id="points-forts" title="Pourquoi notre scraping est différent ?">
          <div className="grid md:grid-cols-4 gap-4">
            {[{ t: "Haute performance", d: "Pipeline Rust multi‑threads; Selenium pour l'interaction fine." }, { t: "Résilience", d: "Retries, anti‑blocage, sélecteurs robustes, monitoring." }, { t: "Conformité", d: "robots.txt/CGU respectés, RGPD, journaux d’audit." }, { t: "Intégrations", d: "CSV/JSON, API, ERP/CRM, BI, Data Warehouse." }].map((b, i) => (
              <div key={i} className="tilt-wrap h-full">
                <Card className="h-full flex flex-col justify-between">
                  <h3 className="font-semibold text-white">{b.t}</h3>
                  <p className="text-white/80 text-sm">{b.d}</p>
                </Card>
              </div>
            ))}
          </div>
        </Section>

        <Section id="use-cases" title="Tout ce qu’on peut faire pour vous">
          <div className="grid md:grid-cols-3 gap-6">
            {[{ t: "Login & navigation", d: "Auth, cookies, formulaires, pagination, filtrage avancé." }, { t: "Extraction dynamique", d: "Contenu généré JS, SPA, iframes, tables virtuelles." }, { t: "Anti‑blocage", d: "Rotation UA/IP, délais aléatoires, gestion erreurs." }, { t: "Normalisation", d: "Nettoyage, déduplication, validation schémas." }, { t: "Exports & APIs", d: "CSV/JSON, endpoints sécurisés, webhooks." }, { t: "Automations", d: "Plannings, surveillance prix/stock, alertes e‑mail." }].map((c, i) => (
              <div key={i} className="tilt-wrap h-full">
                <Card className="h-full">
                  <h3 className="text-xl font-semibold mb-2">{c.t}</h3>
                  <p className="text-white/80 text-sm">{c.d}</p>
                </Card>
              </div>
            ))}
          </div>
        </Section>

        <Section id="packs" title="Packs Scraping pour PME" desc="Démarrez vite, scalez ensuite.">
          <div className="grid md:grid-cols-3 gap-6">
            {[{ name: 'Scraping Starter', price: 1490, sku: 'scrape-starter', features: ['1 source dynamique', 'Login + pagination', 'Export CSV/JSON', 'Monitoring 30 jours'], url: '/services/scraping-intelligent' }, { name: 'Scraping Growth', price: 2990, sku: 'scrape-growth', features: ['3 sources', 'Anti‑blocage avancé', 'API & webhooks', 'Dashboard ROI'], url: '/services/scraping-intelligent' }, { name: 'Scraping Pro', price: 4990, sku: 'scrape-pro', features: ['5+ sources', 'Orchestrateur + alertes', 'DWH/BI', 'SLA & supervision'], url: '/services/scraping-intelligent' }].map((p, i) => (
              <div key={i} className="tilt-wrap h-full">
                <Card className="relative h-full flex flex-col">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-3xl font-extrabold my-2">{p.price}€</p>
                  <ul className="text-white/80 text-sm space-y-1 mb-4 list-disc pl-5">
                    {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
                  </ul>
                  <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=scraping_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition" aria-label={`Démarrer le pack ${p.name}`}>Démarrer</Link>
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Product', name: p.name, description: 'Pack Scraping pour PME', sku: p.sku, brand: { '@type': 'Brand', name: 'Web Cresson Tech' }, offers: { '@type': 'Offer', priceCurrency: 'EUR', price: p.price, availability: 'https://schema.org/InStock', url: `${p.url}?utm_source=services&utm_medium=card&utm_campaign=offer_schema&plan=${p.sku}` }, additionalProperty: p.features.map((f) => ({ '@type': 'PropertyValue', name: 'Feature', value: f })), }) }} />
                </Card>
              </div>
            ))}
          </div>
        </Section>

        <Section id="methode" title="Méthode simple, résultats rapides">
          <div className="grid md:grid-cols-3 gap-6 text-white/85">
            <Card><h3 className="font-semibold text-xl mb-2">1. Audit & cadrage</h3><p>Gratuit. On identifie cas d’usage à ROI rapide.</p></Card>
            <Card><h3 className="font-semibold text-xl mb-2">2. POC rapide</h3><p>Prototype concret en quelques jours pour valider la valeur.</p></Card>
            <Card><h3 className="font-semibold text-xl mb-2">3. Mise en prod</h3><p>Intégrations, formation, suivi du ROI.</p></Card>
          </div>
        </Section>

        <Section id="kpi" title="Impact mesurable du scraping">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
            <Card><p className="text-5xl font-extrabold text-[#00e0ff]">x5</p><p className="text-white/80">Vitesse de collecte</p></Card>
            <Card><p className="text-5xl font-extrabold text-[#00e0ff]">-90%</p><p className="text-white/80">Temps manuel</p></Card>
            <Card><p className="text-5xl font-extrabold text-[#00e0ff]">24/7</p><p className="text-white/80">Collecte continue</p></Card>
          </div>
        </Section>

        <Section id="faq" title="FAQ — Scraping pour PME">
          <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
            {[{ q: 'Est‑ce légal ?', a: 'Nous respectons robots.txt/CGU, mettons en place un throttling et sécurisons l’accès/authentification.' }, { q: 'Sites dynamiques ?', a: 'Oui : JS/SPAs, login, formulaires, pagination, iframes…' }, { q: 'Intégrations ?', a: 'CSV/JSON, API, CRM/ERP, BI/DWH selon vos besoins.' }].map((item, i) => (
              <details key={i} className="group p-4 open:bg-[#0b0b0b]">
                <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">
                  {item.q}
                  <span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span>
                </summary>
                <p className="text-white/80 mt-2">{item.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: 'Est‑ce légal ?', acceptedAnswer: { '@type': 'Answer', text: 'Respect de robots.txt/CGU, throttling et sécurité des accès.' }}, { '@type': 'Question', name: 'Gérez‑vous les sites dynamiques ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui : JS/SPAs, login, formulaires, pagination, iframes…' }}, { '@type': 'Question', name: 'Quelles intégrations sont possibles ?', acceptedAnswer: { '@type': 'Answer', text: 'CSV/JSON, API, CRM/ERP, BI/DWH selon les besoins.' }} ] }) }} />
        </Section>

        <Section id="contact" title="Prêt à industrialiser votre collecte de données ?" desc="Audit gratuit pour identifier les meilleures sources, estimer le ROI et planifier la mise en production.">
          <div className="text-center">
            <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=scraping_final_cta" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition" aria-label="Lancer mon audit gratuit">
              Lancer mon audit gratuit
            </Link>
          </div>
        </Section>

        <FinalCTA />
      </main>
    </>
  )
}
