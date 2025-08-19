import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import LivreBlancComponent from "@/components/LivreBlanc/LivreBlanc"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
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
  title: "RPA pour PME — Automatisation intelligente & robots logiciels | Web Cresson Tech",
  description:
    "Automatisez vos processus métiers avec la RPA pour PME : robots logiciels fiables, réduction des coûts, zéro erreur, ROI rapide. Packs Starter à Pro. Audit gratuit.",
  openGraph: {
    type: "website",
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
    site: "@webcressontech",
    title: "RPA pour PME — Web Cresson Tech",
    description:
      "Automatisation intelligente des processus : ERP/CRM, factures, e‑mails. Audit gratuit.",
    images: ["https://webcresson.com/images/rpa.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/rpa-automatisation",
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

export default function RPAAutomatisationPage() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-black/80 focus:px-4 focus:py-2 focus:text-white">Aller au contenu</a>
      <main id="content" className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
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
        <section className="text-center py-16 animate-fade-in-up">
          <BreadcrumbNav />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="relative header-glow">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(56,189,248,0.45)]">
                RPA pour PME — Automatisez les tâches répétitives
              </span>
            </span>
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            Des <strong>robots logiciels</strong> fiables pour exécuter vos tâches à votre place : plus vite, sans erreur, 24/7.
          </p>
          <Link href="/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=rpa_hero" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition" aria-label="Demander un audit RPA gratuit">
            Demander un audit gratuit
          </Link>
        </section>

        <Section id="points-forts" title="Pourquoi la RPA en PME ?">
          <div className="grid md:grid-cols-4 gap-4">
            {[{ t: "Déploiement rapide", d: "POC en jours, mise en prod en 2–4 semaines." }, { t: "Zéro erreur", d: "Fiabilité, traçabilité, conformité." }, { t: "Intégrations faciles", d: "ERP/CRM, e‑mail, tableurs, webapps, APIs." }, { t: "ROI mesurable", d: "Temps gagné, coûts réduits, qualité accrue." }].map((b, i) => (
              <div key={i} className="tilt-wrap h-full">
                <Card className="h-full flex flex-col justify-between">
                  <h3 className="font-semibold text-white">{b.t}</h3>
                  <p className="text-white/80 text-sm">{b.d}</p>
                </Card>
              </div>
            ))}
          </div>
        </Section>

        <Section id="use-cases" title="Ce que nous automatisons" desc="Des robots logiciels fiables exécutent vos tâches à votre place : plus vite, sans erreur, 24/7.">
          <div className="grid md:grid-cols-3 gap-6">
            {[{ t: "Factures & commandes", d: "Lecture, vérification, rapprochement, export compta." }, { t: "Saisies ERP/CRM", d: "Création/MAJ fiches, imports, contrôles qualité." }, { t: "E‑mails & relances", d: "Rappels, réponses modèles, notifications pilotées." }, { t: "Onboarding RH", d: "Comptes, droits, dossiers, signatures électroniques." }, { t: "Extraction & scraping", d: "Collecte multi‑sites, CAPTCHAs, exports structurés." }, { t: "Reporting auto", d: "Consolidation, KPIs, diffusion périodique." }].map((c, i) => (
              <div key={i} className="tilt-wrap">
                <Card>
                  <h3 className="text-xl font-semibold mb-2">{c.t}</h3>
                  <p className="text-white/80 text-sm">{c.d}</p>
                </Card>
              </div>
            ))}
          </div>
        </Section>

        <Section id="packs" title="Packs RPA pour PME" desc="Démarrez vite, scalez ensuite.">
          <div className="grid md:grid-cols-3 gap-6">
            {[{ name: 'RPA Starter', price: 1490, sku: 'rpa-starter', features: ["Automatisation 1 processus", "Jusqu'à 2 robots", "Monitoring de base", "Support 30 jours"], url: '/services/rpa-automatisation' }, { name: 'RPA Growth', price: 2990, sku: 'rpa-growth', features: ["2–3 processus", "Robots parallèles", "Logs & alertes", "Connecteurs ERP/CRM"], url: '/services/rpa-automatisation' }, { name: 'RPA Pro', price: 4990, sku: 'rpa-pro', features: ["4+ processus", "Orchestrateur", "SLA & supervision", "Atelier équipes"], url: '/services/rpa-automatisation' }].map((p, i) => (
              <div key={i} className="tilt-wrap">
                <Card className="relative">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-3xl font-extrabold my-2">{p.price}€</p>
                  <ul className="text-white/80 text-sm space-y-1 mb-4 list-disc pl-5">
                    {p.features.map((f, fi) => (<li key={fi}>{f}</li>))}
                  </ul>
                  <Link href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=rpa_pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition" aria-label={`Démarrer le pack ${p.name}`}>Démarrer</Link>
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Product',
                      name: p.name,
                      description: 'Pack RPA pour PME',
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

        <Section id="methode" title="Méthode simple, résultats rapides">
          <div className="grid md:grid-cols-3 gap-6 text-white/85">
            <Card><h3 className="font-semibold text-xl mb-2">1. Audit & cadrage</h3><p>Gratuit. On identifie cas d’usage à ROI rapide.</p></Card>
            <Card><h3 className="font-semibold text-xl mb-2">2. POC rapide</h3><p>Prototype concret en quelques jours pour valider la valeur.</p></Card>
            <Card><h3 className="font-semibold text-xl mb-2">3. Mise en prod</h3><p>Intégrations, formation, suivi du ROI.</p></Card>
          </div>
        </Section>

        <Section id="kpi" title="Impact mesurable de la RPA">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
            <Card><p className="text-5xl font-extrabold text-[#00e0ff]">120h</p><p className="text-white/80">Heures gagnées par mois</p></Card>
            <Card><p className="text-5xl font-extrabold text-[#00e0ff]">-95%</p><p className="text-white/80">% d’erreurs sur les process</p></Card>
            <Card><p className="text-5xl font-extrabold text-[#00e0ff]">+40%</p><p className="text-white/80">Productivité des équipes</p></Card>
          </div>
        </Section>

        <Section id="apercu" title="RPA Control Center — aperçu réel" desc="Un exemple de tableau de bord opérationnel : lancement de robots, logs en direct, résultats téléchargeables.">
          <figure className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="relative w-full aspect-[16/7] overflow-hidden rounded-xl">
              <Image
                src="/images/solutions-rpa.png"
                alt="Interface RPA Control Center avec paramètres, logs temps réel et résultats téléchargeables"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority={false}
              />
            </div>
            <figcaption className="text-center text-white/70 text-sm mt-3">Vue opérateur : gestion des robots, logs temps réel, export des métriques.</figcaption>
          </figure>
        </Section>

        <Section id="faq" title="FAQ — RPA pour PME">
          <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
            {[{ q: 'Quels processus RPA prioriser ?', a: 'Facturation, relances, saisies répétitives, extraction de données, reporting.' }, { q: 'Délai de mise en production ?', a: 'POC en quelques jours, déploiement en 2–4 semaines selon la complexité.' }, { q: 'Budget d’entrée ?', a: 'Pack Starter dès 1 490€ (1 processus, 2 robots, support 30 jours).' }].map((item, i) => (
              <details key={i} className="group p-4 open:bg-[#0b0b0b]">
                <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">
                  {item.q}
                  <span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span>
                </summary>
                <p className="text-white/80 mt-2">{item.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: 'Quels processus RPA prioriser ?', acceptedAnswer: { '@type': 'Answer', text: 'Facturation, relances, saisies répétitives, extraction de données, reporting.' }}, { '@type': 'Question', name: 'Délai de mise en production ?', acceptedAnswer: { '@type': 'Answer', text: 'POC en quelques jours, déploiement en 2–4 semaines selon la complexité.' }}, { '@type': 'Question', name: 'Budget d’entrée ?', acceptedAnswer: { '@type': 'Answer', text: 'Pack Starter dès 1 490€ (1 processus, 2 robots, support 30 jours).' }} ] }) }} />
        </Section>

        <Section id="contact">
          <FinalCTA />
        </Section>
      </main>
    </>
  )
}
