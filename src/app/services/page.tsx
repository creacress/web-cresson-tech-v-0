import { Metadata } from "next"
import PricingSection from "@/components/Pricing/PricingSection"
import FinalCTA from "@/components/Pricing/FinalCTA"
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import ServiceLink from "@/components/ServiceLink/ServiceLink"
import { FaRobot, FaSearch, FaDatabase, FaCode, FaMagic, FaCompass, FaBrain, FaChartLine, FaLanguage } from "react-icons/fa"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Solutions IA, Apps & Sites Web pour PME | Web Cresson Tech",
  description:
    "Solutions IA et automatisation (RPA), développement d’applications métier et création de sites web modernes pour PME. Audit IA gratuit. IA générative, machine learning, data engineering et BI pour booster productivité & visibilité.",
  keywords: [
    "solutions IA PME",
    "automatisation RPA PME",
    "développement application entreprise",
    "site web moderne PME",
    "IA générative entreprise",
    "machine learning PME",
    "data engineering PME",
    "business intelligence PME",
    "audit IA gratuit",
    "scraping de données entreprise"
  ],
  alternates: {
    canonical: "https://webcresson.com/services",
  },
  openGraph: {
    title: "Solutions IA, Apps & Sites Web pour PME",
    description:
      "IA, RPA, prédiction, analyse sémantique, scraping intelligent et sites web modernes pour PME. Audit IA gratuit. Mise en place rapide & ROI mesurable.",
    url: "https://webcresson.com/services",
    siteName: "Web Cresson Tech",
    images: [
      {
        url: "https://webcresson.com/images/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions IA, Apps & Sites Web pour PME | Web Cresson Tech",
    description:
      "Automatisation, IA générative, ML & sites web modernes pour PME. Audit IA gratuit.",
    images: ["https://webcresson.com/images/Logo_webcressontech.webp"],
    creator: "@WebCresson",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <main className="relative px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      <span aria-hidden className="pointer-events-none absolute -top-24 right-[-20%] h-80 w-80 rounded-full bg-[#00e0ff22] blur-3xl" />
      <span aria-hidden className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <BreadcrumbJsonLd overrides={{ services: 'Services' }} />
      <ServiceSchema
        serviceName="Solutions IA & Développement pour PME"
        serviceDescription="Nous aidons les petites et moyennes entreprises à automatiser leurs processus (RPA), à créer des applications métier et des sites web modernes, et à exploiter la data grâce au machine learning."
        serviceTypes={[
          "Automatisation RPA",
          "IA Générative",
          "Machine Learning",
          "Développement d'applications",
          "Création de site web",
          "Data Engineering",
          "Business Intelligence"
        ]}
        faq={[
          {
            question: "En quoi l’IA peut aider une PME ?",
            answer:
              "L’IA automatise les tâches répétitives (RPA), anticipe les ventes et détecte les anomalies. Résultat : gain de temps, réduction des coûts et meilleures décisions."
          },
          {
            question: "Combien de temps pour un premier résultat ?",
            answer:
              "Nous livrons un prototype en quelques jours. Selon le périmètre, un premier déploiement peut se faire en 2 à 4 semaines."
          },
          {
            question: "Faut‑il beaucoup de données pour le machine learning ?",
            answer:
              "Pas forcément. Nous démarrons avec vos données disponibles, enrichissons si besoin et mettons en place des itérations courtes pour prouver la valeur."
          },
          {
            question: "Proposez‑vous un audit ou un diagnostic gratuit ?",
            answer:
              "Oui, un audit IA gratuit pour identifier des cas d’usage à ROI rapide et un plan d’action concret."
          },
          {
            question: "Faites‑vous aussi des sites web pour PME ?",
            answer:
              "Oui, des sites modernes, rapides et SEO‑first, connectés à vos outils (CRM, ERP) et prêts pour la génération de leads."
          }
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-16">
        <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 drop-shadow-[0_2px_10px_rgba(56,189,248,0.45)] header-glow">
          Solutions IA & Web, simples et efficaces pour votre PME
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          De l’automatisation intelligente à la création d’applications et sites web performants, nous aidons les petites et moyennes entreprises à gagner en productivité et en visibilité.
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Micro</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">PME</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">ETI</span>
        </div>
        <a href="/services/audit-gratuit" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
          Demander un audit gratuit
        </a>
      </section>

      {/* Quick nav */}
      <nav className="my-8 flex gap-3 flex-wrap justify-center">
        {groupedServices.map((g) => (
          <a
            key={g.anchor}
            href={`#${g.anchor}`}
            className="text-sm bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full transition-all hover:border-[#00e0ff66] hover:bg-white/[0.08] hover:scale-105"
          >
            {g.category}
          </a>
        ))}
      </nav>

      {/* Services phares */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-6">Nos services clés pour PME</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Conçus pour offrir un maximum d’impact, ces services combinent performance, retour sur investissement rapide et simplicité de mise en place.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:ring-1 hover:ring-cyan-400/30 shadow-sm hover:shadow-cyan-400/10"
            >
              {service.link === "/services/rpa-automatisation" && (
                <span className="absolute top-3 right-3 text-[10px] leading-4 px-1.5 py-0.5 rounded-sm bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">Tendances</span>
              )}
              <ServiceLink href={service.link} icon={service.icon} title={service.title} text={service.text} />
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(420px_circle_at_50%_0%,#00e0ff22,transparent_60%)]"></span>
              {typeof service.price !== 'undefined' && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Product',
                  name: service.title,
                  description: service.text,
                  sku: service.sku || undefined,
                  brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: service.priceCurrency || 'EUR',
                    price: service.price,
                    availability: 'https://schema.org/InStock',
                    url: `${service.link}?utm_source=services&utm_medium=card&utm_campaign=offer_schema`,
                  },
                  additionalProperty: Array.isArray(service.features) ? service.features.map((f) => ({ '@type': 'PropertyValue', name: 'Feature', value: f })) : undefined,
                }) }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section className="space-y-16">
        {groupedServices.map((group) => (
          <div key={group.anchor} id={group.anchor}>
            <h3 className="text-2xl font-bold mb-2 text-neon">{group.category}</h3>
            <p className="text-gray-400 mb-6">{group.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {group.services.map((service, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:ring-1 hover:ring-cyan-400/30 shadow-sm hover:shadow-cyan-400/10"
                >
                  {service.link === "/services/rpa-automatisation" && (
                    <span className="absolute top-3 right-3 text-[10px] leading-4 px-1.5 py-0.5 rounded-sm bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">Tendances</span>
                  )}
                  <ServiceLink href={service.link} icon={service.icon} title={service.title} text={service.text} />
                  <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(420px_circle_at_50%_0%,#00e0ff22,transparent_60%)]"></span>
                  {typeof service.price !== 'undefined' && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Product',
                      name: service.title,
                      description: service.text,
                      sku: service.sku || undefined,
                      brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
                      offers: {
                        '@type': 'Offer',
                        priceCurrency: service.priceCurrency || 'EUR',
                        price: service.price,
                        availability: 'https://schema.org/InStock',
                        url: `${service.link}?utm_source=services&utm_medium=card&utm_campaign=offer_schema`,
                      },
                      additionalProperty: Array.isArray(service.features) ? service.features.map((f) => ({ '@type': 'PropertyValue', name: 'Feature', value: f })) : undefined,
                    }) }} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href={`/services/audit-gratuit?utm_source=services&utm_medium=page&utm_campaign=category_cta&topic=${group.anchor}`}
                className="inline-block bg-[#00e0ff] text-black px-5 py-3 rounded font-semibold hover:scale-105 transition"
              >
                Demander un audit {group.category.includes('RPA') ? 'RPA' : group.category.includes('IA') ? 'IA' : group.category.includes('Web') ? 'Site Web' : 'dédié'}
              </a>
            </div>
            {['automatisation-rpa','ia-ml','web-ux'].includes(group.anchor) && (
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: (
                  group.anchor === 'automatisation-rpa' ? [
                    { '@type': 'Question', name: 'Quels processus RPA prioriser en PME ?', acceptedAnswer: { '@type': 'Answer', text: 'Facturation, relances, saisies répétitives, extraction de données, reporting.' }},
                    { '@type': 'Question', name: 'Quel délai pour un robot en production ?', acceptedAnswer: { '@type': 'Answer', text: 'Un POC en quelques jours, déploiement en 2–4 semaines selon la complexité.' }},
                    { '@type': 'Question', name: 'Quel est le coût d’entrée ?', acceptedAnswer: { '@type': 'Answer', text: 'Pack Starter dès 1 490€ incluant 1 processus et 2 robots, support 30 jours.' }}
                  ] : group.anchor === 'ia-ml' ? [
                    { '@type': 'Question', name: 'IA générative : quels cas d’usage pour PME ?', acceptedAnswer: { '@type': 'Answer', text: 'Création de contenus marketing, réponses client, FAQ dynamique, génération d’images produits.' }},
                    { '@type': 'Question', name: 'Données nécessaires ?', acceptedAnswer: { '@type': 'Answer', text: 'On démarre avec vos données actuelles, on enrichit si besoin. Fine-tuning ou prompts avancés selon le cas.' }},
                    { '@type': 'Question', name: 'Time-to-value ?', acceptedAnswer: { '@type': 'Answer', text: 'Premiers résultats en 1–2 semaines, itérations rapides pour optimiser la qualité.' }}
                  ] : [
                    { '@type': 'Question', name: 'Qu’est-ce qu’un site web “SEO-first” ?', acceptedAnswer: { '@type': 'Answer', text: 'Performance Core Web Vitals, structure sémantique, maillage interne, contenu optimisé et tracking.' }},
                    { '@type': 'Question', name: 'Combien de pages pour démarrer ?', acceptedAnswer: { '@type': 'Answer', text: 'Pack Starter 5 pages : Accueil, Services, À propos, Blog, Contact, avec formulaire et tracking.' }},
                    { '@type': 'Question', name: 'Intégration outils PME ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, connexion CRM/ERP, formulaires, analytics et automatisations de leads.' }}
                  ])
              }) }} />
            )}
          </div>
        ))}
      </section>

      {/* Cas clients */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-4">Ils nous font confiance</h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-8">
          Découvrez comment nous avons aidé d’autres PME à se transformer grâce à nos solutions IA et web.
        </p>
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4 max-w-2xl mx-auto">
          “Grâce à Web Cresson Tech, notre productivité a augmenté de 32% en 3 mois.”
        </blockquote>
        <p className="text-sm text-gray-500 text-center mb-6">— Responsable SI, PME du secteur industriel</p>
      </section>

      {/* FAQ (visible + SEO) */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ — IA & Web pour PME</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            {
              q: "En quoi l’IA peut aider une PME ?",
              a: "Elle prend en charge les tâches répétitives, aide à prévoir et améliore la relation client. Résultats : gain de temps et de qualité."
            },
            {
              q: "Combien de temps pour un premier résultat ?",
              a: "Un test rapide en quelques jours, puis un MVP entre 2 et 4 semaines selon le périmètre."
            },
            {
              q: "Quel budget prévoir pour une PME ?",
              a: "Des packs progressifs. L’audit gratuit sert à estimer un ROI réaliste avant de se lancer."
            },
            {
              q: "Pouvez‑vous intégrer nos outils existants (ERP/CRM) ?",
              a: "Oui. On crée des connecteurs et des API pour relier vos systèmes sans tout changer."
            },
            {
              q: "Faites‑vous aussi des sites web modernes et SEO‑first ?",
              a: "Oui : site rapide, accessible et optimisé SEO, avec formulaire et tracking intégrés."
            }
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
      </section>

      {/* Glossaire IA pour PME */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-6">Glossaire IA pour PME</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            { t: 'RPA (Robotic Process Automation)', d: 'Automatisation de tâches répétitives via des robots logiciels (clics, saisies, extractions).' },
            { t: 'NLP (Traitement du langage)', d: 'Analyse et génération de texte : chatbots, classification d’emails, résumés automatiques.' },
            { t: 'Fine-tuning', d: 'Ajustement d’un modèle IA sur vos données pour améliorer précision et pertinence.' },
            { t: 'LLM', d: 'Grand Modèle de Langage capable de générer et comprendre du texte (ex. assistants IA).' },
            { t: 'ETL/ELT', d: 'Processus d’extraction, transformation et chargement de données vers un entrepôt (data warehouse).' }
          ].map((g, i) => (
            <details key={i} className="group p-4 border border-[#1f1f1f] rounded">
              <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">
                {g.t}
                <span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span>
              </summary>
              <p className="text-gray-400 mt-2">{g.d}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Qu’est-ce que la RPA ?', acceptedAnswer: { '@type': 'Answer', text: 'Automatisation de tâches répétitives via des robots logiciels.' }},
            { '@type': 'Question', name: 'Qu’est-ce que le NLP ?', acceptedAnswer: { '@type': 'Answer', text: 'Traitement du langage naturel pour analyser et générer du texte.' }},
            { '@type': 'Question', name: 'Qu’est-ce que le fine-tuning ?', acceptedAnswer: { '@type': 'Answer', text: 'Ajuster un modèle IA sur vos données pour de meilleures performances.' }},
            { '@type': 'Question', name: 'Que signifie LLM ?', acceptedAnswer: { '@type': 'Answer', text: 'Grand Modèle de Langage (Large Language Model).' }},
            { '@type': 'Question', name: 'Que veut dire ETL/ELT ?', acceptedAnswer: { '@type': 'Answer', text: 'Pipelines de données pour charger des données dans un entrepôt.' }}
          ]
        }) }} />
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Prêt à passer au niveau supérieur ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Demandez votre audit gratuit et découvrez comment nos solutions peuvent booster vos performances.
        </p>
        <a href="/services/audit-gratuit" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
          Lancer mon audit gratuit
        </a>
      </section>
    </main>
  )
}


export const featuredServices = [
  {
    icon: <FaRobot className="text-3xl text-[#00e0ff]" />,
    title: "Automatisation intelligente pour PME",
    text: "On automatise les tâches répétitives (saisie, relances, reporting) pour vous faire gagner du temps, sans changer vos outils.",
    link: "/services/rpa-automatisation",
    price: 1490, priceCurrency: "EUR", sku: "rpa-starter", features: ["Automatisation 1 processus", "Jusqu'à 2 robots", "Monitoring de base", "Support 30 jours"]
  },
  {
    icon: <FaMagic className="text-3xl text-[#00e0ff]" />,
    title: "IA Générative & Création de contenu",
    text: "Produisez vite des textes et visuels adaptés à votre marque pour votre site et vos réseaux, prêts à publier.",
    link: "/services/ia-generative",
    price: 1290, priceCurrency: "EUR", sku: "genai-starter", features: ["Gabarits de contenu", "Images + textes", "Workflow d'approbation", "Formation 2h"]
  },
  {
    icon: <FaChartLine className="text-3xl text-[#00e0ff]" />,
    title: "Machine Learning prédictif",
    text: "On construit des modèles qui anticipent ventes, ruptures ou fraudes pour mieux décider au quotidien.",
    link: "/services/machine-deep-learning",
    price: 2990, priceCurrency: "EUR", sku: "ml-pilot", features: ["POC prédictif", "Nettoyage dataset", "Notebook & API", "Workshop 2h"]
  },
  {
    icon: <FaMagic className="text-3xl text-[#00e0ff]" />,
    title: "Générateur IA — Vidéos & Images",
    text: "Générez en quelques clics des vidéos 9:16 et des images nettes pour booster vos campagnes.",
    link: "/services/generateur-ia",
    price: 990, priceCurrency: "EUR", sku: "genai-video-img", features: [
      "Vidéos 9:16",
      "Images HD réalistes",
      "Optimisation SEO & réseaux sociaux",
      "Livraison rapide"
    ]
  },
];

export const groupedServices = [
  {
    category: "Automatisation & RPA",
    anchor: "automatisation-rpa",
    description: "Optimisez vos processus métiers et gagnez du temps avec des solutions d’automatisation fiables et adaptées aux PME.",
    services: [
      {
        icon: <FaRobot className="text-3xl text-[#00e0ff]" />,
        title: "Automatisation intelligente pour PME",
        text: "Automatisez les tâches répétitives (emails, factures, copier‑coller) et concentrez‑vous sur l’essentiel.",
        link: "/services/rpa-automatisation",
        price: 1490, priceCurrency: "EUR", sku: "rpa-starter", features: ["Automatisation 1 processus", "Jusqu'à 2 robots", "Monitoring de base", "Support 30 jours"]
      },
      {
        icon: <FaSearch className="text-3xl text-[#00e0ff]" />,
        title: "Scraping intelligent (collecte web)",
        text: "Récupérez automatiquement des données utiles (prix, fiches produits, annonces) même sur des sites dynamiques.",
        link: "/services/scraping-intelligent",
      },
      {
        icon: <FaCode className="text-3xl text-[#00e0ff]" />,
        title: "Développement API performant",
        text: "Exposez vos données et automatisez vos échanges entre outils avec des API stables et rapides.",
        link: "/services/developpement-api",
      },
    ],
  },
  {
    category: "IA & Machine Learning",
    anchor: "ia-ml",
    description: "Des modèles intelligents pour automatiser, prédire et analyser vos données métier, adaptés aux besoins des PME.",
    services: [
      {
        icon: <FaMagic className="text-3xl text-[#00e0ff]" />,
        title: "IA Générative & Création de contenu",
        text: "Des contenus clairs et cohérents avec votre ton de marque, générés et validés avec vous.",
        link: "/services/ia-generative",
        price: 1290, priceCurrency: "EUR", sku: "genai-starter", features: ["Gabarits de contenu", "Images + textes", "Workflow d'approbation", "Formation 2h"]
      },
      {
        icon: <FaChartLine className="text-3xl text-[#00e0ff]" />,
        title: "Machine Learning prédictif",
        text: "Des prévisions simples à lire pour planifier vos stocks, ventes et achats.",
        link: "/services/machine-deep-learning",
      },
      {
        icon: <FaBrain className="text-3xl text-[#00e0ff]" />,
        title: "Deep Learning & traitement complexe",
        text: "Analyse d’images, de vidéos ou de signaux quand un œil humain ne suffit pas.",
        link: "/services/machine-deep-learning",
      },
      {
        icon: <FaLanguage className="text-3xl text-[#00e0ff]" />,
        title: "Analyse sémantique & data intelligente",
        text: "Classez vos emails, comprenez les retours clients et tirez des tendances de vos textes.",
        link: "/services/analyse-semantique-nlp",
      },
      {
        icon: <FaMagic className="text-3xl text-[#00e0ff]" />,
        title: "Générateur IA — Vidéos & Images",
        text: "Créez rapidement des visuels et vidéos adaptés aux réseaux et à votre site.",
        link: "/services/generateur-ia",
        price: 990, priceCurrency: "EUR", sku: "genai-video-img", features: [
          "Vidéos 9:16",
          "Images HD réalistes",
          "Optimisation SEO & réseaux sociaux",
          "Livraison rapide"
        ]
      },
    ],
  },
  {
    category: "Data & Business Intelligence",
    anchor: "data-bi",
    description: "Transformez vos données en leviers de croissance grâce à des pipelines efficaces et des dashboards intelligents.",
    services: [
      {
        icon: <FaCompass className="text-3xl text-[#00e0ff]" />,
        title: "Exploration de données avancée",
        text: "Faites parler vos données pour trouver des leviers concrets de chiffre d’affaires ou d’économies.",
        link: "/services/ia-archeologie",
      },
      {
        icon: <FaDatabase className="text-3xl text-[#00e0ff]" />,
        title: "Data Engineering & Dashboards",
        text: "Nettoyez et organisez vos données pour obtenir des tableaux de bord clairs et fiables.",
        link: "/services/data-engineering",
      },
      {
        icon: <FaChartLine className="text-3xl text-[#00e0ff]" />,
        title: "Business Intelligence augmentée",
        text: "Des dashboards qui combinent vos chiffres et nos prédictions pour décider plus vite.",
        link: "/services/bi-ia",
      },
    ],
  },
  {
    category: "Web & Expérience utilisateur",
    anchor: "web-ux",
    description: "Des sites web modernes, rapides et optimisés SEO pour augmenter votre visibilité et convertir vos visiteurs.",
    services: [
      {
        icon: <FaCode className="text-3xl text-[#00e0ff]" />,
        title: "Sites web modernes et visibles",
        text: "Un site rapide, beau et bien référencé pour attirer des clients et recevoir des demandes.",
        link: "/website",
        price: 1990, priceCurrency: "EUR", sku: "site-starter", features: ["Design responsive", "SEO technique", "Jusqu'à 5 pages", "Formulaire & tracking"]
      },
    ],
  },
];
