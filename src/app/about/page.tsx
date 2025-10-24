import React from 'react';
import type { Metadata } from 'next';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import Link from 'next/link';
import {
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaUsers,
  FaLeaf,
} from 'react-icons/fa';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "À propos — WebCressonTech | Experts IA, RPA & Automatisation pour PME",
  description:
    "WebCressonTech est née d’une conviction simple : l’IA et l’automatisation doivent aider les petites et moyennes entreprises à gagner du temps, de la clarté et de la sérénité. Découvrez notre histoire, notre méthode et nos engagements — sans jargon, avec du concret.",
  keywords: [
    "à propos",
    "WebCressonTech",
    "IA PME",
    "RPA",
    "automatisation Python",
    "data engineering",
    "intelligence artificielle",
    "France",
  ],
  alternates: { canonical: "https://webcresson.com/about" },
  openGraph: {
    title: "WebCressonTech – Mission, équipe et expertise IA/RPA",
    description:
      "Une équipe d'experts en IA, RPA et automatisation Python au service de votre croissance.",
    url: "https://webcresson.com/about",
    siteName: "WebCresson Tech",
    images: [
      {
        url: "https://webcresson.com/images/og-about.webp",
        width: 1200,
        height: 630,
        alt: "Équipe WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de WebCressonTech",
    description: "Experts IA & automatisation pour PME. Mission, valeurs, équipe.",
    images: ["https://webcresson.com/images/og-about.webp"],
    creator: "@WebCresson",
  },
  robots: { index: true, follow: true },
}


export default function About() {
  return (
    <>
      <BreadcrumbSchema />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'À propos — WebCressonTech',
          url: 'https://webcresson.com/about',
          primaryImageOfPage: 'https://webcresson.com/images/og-about.webp',
          breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://webcresson.com/' },
            { '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://webcresson.com/about' },
          ]},
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Alexis Cresson',
          jobTitle: 'Fondateur & Data Engineer',
          worksFor: { '@type': 'Organization', name: 'WebCressonTech' },
          url: 'https://webcresson.com',
          image: 'https://webcresson.com/images/portrait-cresson-alexis.jpeg'
        }) }}
      />

      <ServiceSchema
        serviceName="À propos de WebCressonTech"
        serviceDescription={metadata.description || ''}
        serviceTypes={[
          'Innovation technologique',
          'Intelligence Artificielle',
          'Solutions sur mesure',
        ]}
        faq={[
          {
            question: 'Quelle est la mission de WebCressonTech ?',
            answer:
              'Accompagner les entreprises avec des solutions d\'IA et de tech avancées, sur mesure et performantes.',
          },
          {
            question: 'Quelles sont les valeurs fondamentales ?',
            answer:
              'Innovation, excellence, collaboration, engagement humain et responsabilité environnementale.',
          },
          {
            question: 'Comment contacter WebCressonTech ?',
            answer: (
              <>
                Via notre <Link href="/contact" className="underline text-[#00e0ff] hover:text-white">page contact</Link> ou par e-mail à{' '}
                <a href="mailto:contact@webcresson.com" className="underline text-[#00e0ff] hover:text-white">contact@webcresson.com</a>.
              </>
            ),
          },
          {
            question: 'Quels projets accompagnez-vous ?',
            answer:
              'Du POC IA au déploiement SaaS complet, pour PME ou grands groupes dans tous les secteurs.',
          },
          {
            question: 'Pourquoi vous choisir ?',
            answer:
              'Approche sur mesure, techno maîtrisée, proximité client et accompagnement durable.',
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-white">
        {/* 🧭 Fil d'Ariane visible */}
        <BreadcrumbNav />

        {/* Header — Hero humain & vivant */}
        <section className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
            L’histoire derrière WebCressonTech
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            On ne lance pas une boîte de tech pour faire « compliqué ». On la lance pour <span className="text-white font-semibold">simplifier la vie des équipes</span>.
            Chez WebCressonTech, on transforme des problèmes très concrets — <em>emails saturés</em>, <em>process lents</em>, <em>données éparpillées</em> — en systèmes fluides, automatisés et mesurables.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 justify-center max-w-4xl mx-auto text-left mt-8 animate-slide-up delay-200">
            <img
              src="/images/portrait-cresson-alexis.jpeg"
              alt="Portrait Alexis Cresson – Fondateur de WebCressonTech"
              className="w-44 h-44 rounded-full object-cover ring-2 ring-cyan-400/60 shadow-[0_0_80px_-20px_#00e0ff]"
            />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">👋 Moi c’est Alexis Cresson</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Data engineer de formation et entrepreneur par envie, j’ai créé WebCressonTech en 2024 après des années à voir des PME perdre du temps
                sur des tâches répétitives. Mon objectif : <strong className="text-white">faire gagner des heures chaque semaine</strong> grâce à la RPA, l’IA générative et des workflows n8n bien pensés.
              </p>
              <blockquote className="mt-4 border-l-2 border-cyan-500/40 pl-4 text-gray-400 italic">
                « La bonne technologie, au bon endroit, avec une équipe alignée — c’est là que la magie opère. »
              </blockquote>
              <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
                <span className="px-2 py-1 rounded border border-[#1f1f1f] bg-[#0b0b0b]">🇫🇷 Basé en France</span>
                <span className="px-2 py-1 rounded border border-[#1f1f1f] bg-[#0b0b0b]">RGPD‑by‑design</span>
                <span className="px-2 py-1 rounded border border-[#1f1f1f] bg-[#0b0b0b]">Open‑source friendly</span>
                <span className="px-2 py-1 rounded border border-[#1f1f1f] bg-[#0b0b0b]">PME / TPE / ETI</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs px-2 py-1 rounded bg-white/[0.04] border border-white/10">Mise en qualité des données</span>
            <span className="text-xs px-2 py-1 rounded bg-white/[0.04] border border-white/10">Automatisation de tâches récurrentes</span>
            <span className="text-xs px-2 py-1 rounded bg-white/[0.04] border border-white/10">Workflows n8n</span>
            <span className="text-xs px-2 py-1 rounded bg-white/[0.04] border border-white/10">Scraping intelligent (OSINT)</span>
            <span className="text-xs px-2 py-1 rounded bg-white/[0.04] border border-white/10">Migrations de SI</span>
            <span className="text-xs px-2 py-1 rounded bg-white/[0.04] border border-white/10">IA générative &amp; chatbots</span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/contact?utm_source=about&utm_medium=cta&utm_campaign=contact"
              className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
            >
              Discutons de vos besoins
            </Link>
            <Link
              href="/services?utm_source=about&utm_medium=cta&utm_campaign=services"
              className="border border-[#00e0ff] text-[#00e0ff] px-6 py-3 rounded hover:bg-[#00e0ff22] transition"
            >
              Voir nos services
            </Link>
          </div>
        </section>

        {/* Notre histoire en 3 actes */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Notre histoire en 3 actes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative bg-[#111] p-5 rounded-xl border border-[#00e0ff22] transition-all hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
              <h3 className="text-lg font-semibold mb-1">Acte I — Le déclic</h3>
              <p className="text-gray-400 text-sm">En mission chez des PME, nous voyons la même scène : des équipes noyées sous les emails, des Excel géants, des copier‑coller sans fin. On décide d’agir.</p>
            </div>
            <div className="group relative bg-[#111] p-5 rounded-xl border border-[#00e0ff22] transition-all hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
              <h3 className="text-lg font-semibold mb-1">Acte II — Les premiers workflows</h3>
              <p className="text-gray-400 text-sm">On conçoit des automatisations simples mais efficaces (n8n, Playwright, Python) et on mesure : fermeture des tickets plus rapide, moins d’erreurs, et des équipes soulagées.</p>
            </div>
            <div className="group relative bg-[#111] p-5 rounded-xl border border-[#00e0ff22] transition-all hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
              <h3 className="text-lg font-semibold mb-1">Acte III — L’IA utile</h3>
              <p className="text-gray-400 text-sm">On ajoute l’IA générative et des copilotes métiers : réponses automatiques supervisées, extraction de données, génération de contenus et reporting en temps réel.</p>
            </div>
          </div>
        </section>

        {/* Ce qu’on fait concrètement (orienté besoin) */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Concrètement, on vous aide à…</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Désengorger vos emails", text: "Tri automatique, réponses assistées, routage intelligent et priorisation." },
              { title: "Standardiser et fiabiliser la donnée", text: "Mise en qualité, normalisation, dédoublonnage, enrichissement." },
              { title: "Accélérer vos processus", text: "Automatisations RPA low‑code/no‑code, scripts Python, intégrations SaaS." },
              { title: "Migrer sereinement vos SI", text: "Cartographie, plan de migration, tests et monitoring post‑déploiement." },
              { title: "Scraper intelligemment le web", text: "OSINT, veille concurrentielle, détection de tendances, alertes." },
              { title: "Mettre l’IA au service du métier", text: "Chatbots internes, copilotes de saisie, génération de documents, résumés." },
            ].map(({ title, text }, i) => (
              <div key={i} className="group relative bg-[#111] p-5 rounded-xl border border-[#00e0ff22] transition-all duration-300 hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p className="text-gray-400 text-sm">{text}</p>
                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(420px_circle_at_50%_0%,#00e0ff22,transparent_60%)]" />
              </div>
            ))}
          </div>
        </section>

        {/* Notre méthode en 3 étapes */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Notre méthode (simple et éprouvée)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-5 rounded-xl border border-[#00e0ff22]">
              <h3 className="font-semibold mb-2">1. Audit &amp; cadrage</h3>
              <p className="text-gray-400 text-sm">On part de vos irritants du quotidien et des KPI qui comptent. Objectif : des quick wins visibles en quelques jours.</p>
            </div>
            <div className="bg-[#111] p-5 rounded-xl border border-[#00e0ff22]">
              <h3 className="font-semibold mb-2">2. Prototype &amp; itération</h3>
              <p className="text-gray-400 text-sm">On livre un POC rapide, on mesure, on ajuste. Transparence totale sur les résultats et le ROI.</p>
            </div>
            <div className="bg-[#111] p-5 rounded-xl border border-[#00e0ff22]">
              <h3 className="font-semibold mb-2">3. Déploiement &amp; suivi</h3>
              <p className="text-gray-400 text-sm">On industrialise, on documente, on forme vos équipes et on reste disponibles pour faire évoluer vos workflows.</p>
            </div>
          </div>
        </section>

        {/* Impact en chiffres (social proof légère) */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Quelques repères</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">48h</div>
              <p className="text-xs text-gray-400">Audit initial</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">5–10h/sem</div>
              <p className="text-xs text-gray-400">Temps gagné (cas moyens)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">99,9%</div>
              <p className="text-xs text-gray-400">Exécution fiable (monitorée)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">+ROI</div>
              <p className="text-xs text-gray-400">Pilotage par résultats</p>
            </div>
          </div>
        </section>

        {/* Témoignages (placeholder sans logos) */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Ils en parlent le mieux</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Dirigeant PME", text: "On a stoppé les copier‑coller et réduit les erreurs. L’équipe a retrouvé du temps pour les clients." },
              { name: "Resp. Opérations", text: "Le workflow n8n + IA a désengorgé notre support. Mise en place rapide, mesurable, efficace." },
            ].map((t, i) => (
              <div key={i} className="bg-[#111] p-5 rounded-xl border border-[#00e0ff22]">
                <p className="text-gray-300 text-sm">“{t.text}”</p>
                <p className="text-xs text-gray-500 mt-3">— {t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center mt-12 animate-fade-in-up delay-500">
          <Link
            href="/contact?utm_source=about&utm_medium=cta&utm_campaign=contact"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Parlez‑nous de vos processus
          </Link>
          <Link
            href="/services"
            className="border border-[#00e0ff] text-[#00e0ff] px-6 py-3 rounded hover:bg-[#00e0ff22] transition"
          >
            Explorer nos offres
          </Link>
        </section>

        <section className="my-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">FAQ — À propos</h2>
          <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
            {[
              { q: 'Avec quels types d’entreprises travaillez‑vous ?', a: 'Principalement TPE/PME, mais aussi ETI sur des périmètres ciblés.' },
              { q: 'Pouvez‑vous intervenir à distance ?', a: 'Oui, interventions à distance en France/Europe, et sur site si nécessaire.' },
              { q: 'Proposez‑vous un audit gratuit ?', a: 'Oui, un audit initial en 48h pour identifier rapidement des quick wins.' },
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
              { '@type': 'Question', name: 'Avec quels types d’entreprises travaillez‑vous ?', acceptedAnswer: { '@type': 'Answer', text: 'TPE/PME principalement, ETI sur périmètre défini.' }},
              { '@type': 'Question', name: 'Pouvez‑vous intervenir à distance ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, France/Europe à distance, et sur site si besoin.' }},
              { '@type': 'Question', name: 'Proposez‑vous un audit gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, audit initial en 48h pour quick wins.' }},
            ]
          }) }} />
        </section>

      </main>
    </>
  );
}
