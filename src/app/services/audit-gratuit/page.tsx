import { Metadata } from "next"
import AuditForm from "@/components/AuditForm/AuditForm"
import Link from "next/link"
import Image from "next/image"
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Audit IA gratuit pour PME | Opportunités RPA, GénAI & Prédiction — Web Cresson Tech",
  description:
    "Obtenez un audit IA gratuit en 48h : identification des cas d’usage RPA, IA générative et Machine Learning pour TPE/PME. Plan d’action concret + estimation ROI.",
  alternates: { canonical: "https://webcresson.com/services/audit-gratuit" },
  openGraph: {
    title: "Audit IA gratuit — Web Cresson Tech",
    description:
      "Diagnostic IA en 48h pour TPE/PME : priorisation des cas d’usage, estimation ROI et feuille de route.",
    url: "https://webcresson.com/services/audit-gratuit",
    type: "website",
    images: [
      {
        url: "/images/ia-generative.webp",
        width: 1200,
        height: 630,
        alt: "Audit IA gratuit pour PME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit IA gratuit pour PME",
    description:
      "Diagnostic IA express : RPA, IA générative, ML. Résultats en 48h.",
    images: ["/images/ia-generative.webp"],
  },
}

export default function AuditGratuitPage() {
  return (
    <main className="pt-24 pb-12 px-6 text-white max-w-5xl mx-auto">

      {/* SEO Structuré */}
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "audit-gratuit": "Audit IA gratuit",
        }}
      />
      <ServiceSchema
        serviceName="Audit IA gratuit"
        serviceDescription="Bénéficiez d’un audit offert pour évaluer le potentiel de l’intelligence artificielle dans votre entreprise : automatisation, IA générative, prédiction..."
        serviceTypes={["Audit IA", "IA sur mesure", "Diagnostic automatisation"]}
        faq={[
          {
            question: "Pourquoi faire un audit IA ?",
            answer:
              "Un audit IA permet d’identifier les processus automatisables et les opportunités d’intégration de l’intelligence artificielle dans votre entreprise.",
          },
          {
            question: "Est-ce vraiment gratuit ?",
            answer:
              "Oui, l’audit initial est entièrement gratuit et sans engagement.",
          },
          {
            question: "Combien de temps prend l’analyse ?",
            answer:
              "Vous recevez un retour sous 24 à 48h après soumission du formulaire d’audit.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-12">
        <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Audit IA gratuit pour PME</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Obtenez un <strong>diagnostic IA en 48h</strong> : RPA, IA générative, prédiction. Cas d’usage priorisés, estimation du ROI et plan d’action.
        </p>
        <a href="#audit-form" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold transition-transform duration-300 hover:scale-105">
          Démarrer mon audit gratuit
        </a>
      </section>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Audit IA gratuit',
    description: 'Diagnostic IA en 48h pour TPE/PME : cas d\u2019usage, estimation ROI, feuille de route.',
    brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: 0,
      availability: 'https://schema.org/InStock',
      url: 'https://webcresson.com/services/audit-gratuit',
    },
  }) }}
/>

      {/* Bénéfices */}
      <section className="grid sm:grid-cols-3 gap-6 my-16 text-center">
        {[
          { title: "🎯 Audit ciblé", text: "On identifie précisément les processus à automatiser (RPA, GénAI, ML)." },
          { title: "⚙️ Recos concrètes", text: "Technos, intégrations, sécurité + feuille de route court terme." },
          { title: "⏱️ En 48h", text: "Retour rapide avec chiffrage du ROI et quick wins." },
        ].map(({ title, text }, i) => (
          <div key={i} className="group relative">
            <div className="bg-[#111] p-6 rounded-xl border border-[#00e0ff33] transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{text}</p>
            </div>
            <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(420px_circle_at_50%_0%,#00e0ff22,transparent_60%)]"></span>
          </div>
        ))}
      </section>

      {/* Bande KPI */}
      <section className="my-16 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Ce que vous obtenez</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">48h</p><p className="text-gray-400">Délai de restitution</p></div>
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">3 livrables</p><p className="text-gray-400">Cas d’usage, ROI, roadmap</p></div>
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">0€</p><p className="text-gray-400">Audit initial</p></div>
        </div>
      </section>

      {/* Solutions par profil */}
      <section className="py-20 max-w-4xl mx-auto bg-[#0c0c0c] rounded-xl px-6 border border-[#00e0ff11]">
        <h2 className="text-3xl sm:text-4xl font-bold text-neon text-center mb-6">À qui s’adresse cet audit ?</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">
        Cet audit s’adresse aux TPE, PME et startups souhaitant explorer l’automatisation, optimiser leurs processus ou gagner du temps grâce à l’intelligence artificielle.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300 text-center items-stretch">
          {[{
            img: "/avatars/julie.png",
            nom: "Julie",
            role: "TPE – Atelier de maroquinerie",
            bio: "Julie dirige seule sa micro-entreprise. Elle veut automatiser la facturation et les suivis clients pour se libérer du temps sans embaucher.",
            soluce: "👩‍💼 Outils simples : automatisation des tâches, génération de contenu, CRM intelligent."
          }, {
            img: "/avatars/marc.png",
            nom: "Marc",
            role: "PME – CTO d'une entreprise industrielle",
            bio: "Marc cherche à connecter ses outils internes avec des solutions IA fiables, et améliorer l'efficacité des équipes techniques.",
            soluce: "🏢 Optimisation des process, maintenance prédictive, marketing IA et prédiction des ventes."
          }, {
            img: "/avatars/lisa.png",
            nom: "Lisa",
            role: "Startup – CEO d'une startup IA",
            bio: "Lisa a levé des fonds et veut lancer un MVP IA rapide et innovant. Elle cherche un partenaire agile pour l'accompagner.",
            soluce: "🏛️ Stratégie IA, agents autonomes, intégration systèmes, gouvernance et conformité IA."
          }].map((p, i) => (
            <div key={i} className="flex flex-col justify-between bg-[#111] border border-[#00e0ff33] rounded-lg p-6 transition duration-300 hover:shadow-xl hover:scale-105 hover:border-[#00e0ff88]">
              <Image src={p.img} alt={p.nom} width={80} height={80} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">{p.nom}</h3>
              <p className="text-sm italic text-gray-400 mb-2">{p.role}</p>
              <p className="text-sm mb-4">{p.bio}</p>
              <p className="text-sm text-gray-400">{p.soluce}</p>
              {p.nom === "Julie" && (
                <Link href="/solutions/julie?utm_source=audit&utm_medium=page&utm_campaign=personas" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
              {p.nom === "Marc" && (
                <Link href="/solutions/marc?utm_source=audit&utm_medium=page&utm_campaign=personas" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
              {p.nom === "Lisa" && (
                <Link href="/solutions/lisa?utm_source=audit&utm_medium=page&utm_campaign=personas" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
      <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-[#00e0ff33] to-transparent" />

      {/* Process animé */}
      <section className="my-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Comment se déroule l’audit ?</h2>
        <div className="flex flex-col items-center gap-10 max-w-xl mx-auto relative">
          {[
            "Vous remplissez le formulaire avec vos enjeux métiers",
            "Nous analysons vos données et cas d’usage",
            "Nous vous envoyons un rapport personnalisé sous 48h",
          ].map((step, index) => (
            <div key={index} className="flex items-center gap-4 w-full group relative z-10">
              <div className="bg-cyan-500 text-black rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold group-hover:scale-110 transition duration-300 shadow-lg">
                {index + 1}
              </div>
              <div className="text-gray-300 text-sm sm:text-base transition-colors duration-300 group-hover:text-white">{step}</div>
              {index < 2 && (
                <div
                  className="absolute left-[1.55rem] sm:left-[1.75rem] top-[2.5rem] sm:top-[2.7rem] w-[2px] h-14 bg-cyan-500 z-0 transition-all duration-500"
                  aria-hidden="true"
                >
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 rotate-45 bg-cyan-500 shadow-md"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Comment se déroule l\u2019audit IA gratuit',
          totalTime: 'PT48H',
          step: [
            { '@type': 'HowToStep', position: 1, name: 'Décrivez vos enjeux', text: 'Remplissez le formulaire avec vos processus et objectifs.' },
            { '@type': 'HowToStep', position: 2, name: 'Analyse par nos équipes', text: 'Étude des cas d\u2019usage et estimation du ROI.' },
            { '@type': 'HowToStep', position: 3, name: 'Restitution en 48h', text: 'Rapport priorisé avec feuille de route.' },
          ],
        }) }}
      />

      {/* Exemples concrets modernisés */}
      <section className="my-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-neon text-center mb-10">
          Résultats concrets obtenus par nos clients
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-sm text-gray-300">
          {[
            {
              icon: "⚡",
              title: "+30% de productivité",
              text: "sur la gestion des relances clients grâce à l’automatisation intelligente.",
            },
            {
              icon: "🧠",
              title: "-40% de saisie manuelle",
              text: "via des flux de traitement automatisés et assistants intelligents.",
            },
            {
              icon: "🤖",
              title: "Assistant IA intégré",
              text: "capable de répondre aux demandes clients 24h/24, 7j/7.",
            },
          ].map(({ icon, title, text }, i) => (
            <div key={i} className="group relative">
              <div className="bg-[#111] border border-[#00e0ff33] p-6 rounded-xl transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400 text-sm">{text}</p>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(420px_circle_at_50%_0%,#00e0ff22,transparent_60%)]"></span>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire */}
      <section id="audit-form" className="scroll-mt-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Recevoir mon audit gratuit</h2>
        <AuditForm />
      </section>

      {/* FAQ visible */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ — Audit IA gratuit</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            { q: 'Pourquoi faire un audit IA ?', a: 'Identifier les processus automatisables, estimer les gains et bâtir une feuille de route.' },
            { q: 'Est‑ce vraiment gratuit ?', a: 'Oui, l’audit initial est offert et sans engagement.' },
            { q: 'Combien de temps ?', a: 'Retour sous 24–48h avec recommandations concrètes.' },
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
            { '@type': 'Question', name: 'Pourquoi faire un audit IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Identifier les processus automatisables, estimer les gains et bâtir une feuille de route.' }},
            { '@type': 'Question', name: 'Est‑ce vraiment gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, l’audit initial est offert et sans engagement.' }},
            { '@type': 'Question', name: 'Combien de temps ?', acceptedAnswer: { '@type': 'Answer', text: 'Retour sous 24–48h avec recommandations concrètes.' }},
          ]
        }) }} />
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “L’audit de WebCressonTech nous a permis d’identifier rapidement un potentiel énorme d’automatisation sur nos flux logistiques.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Responsable Innovation, Entreprise Retail</p>
      </section>

      {/* CTA alternatif */}
      <section className="bg-black border-t border-[#222] py-16 text-center">
        <p className="text-gray-400 mb-6">
          Vous préférez échanger directement avec nous ? <br />
          <Link href="/services?utm_source=audit&utm_medium=page&utm_campaign=alt_cta" className="underline text-[#00e0ff]">Voir nos autres services IA</Link>
        </p>
        <Link
          href="/contact?utm_source=audit&utm_medium=page&utm_campaign=alt_cta"
          className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Prendre contact maintenant
        </Link>
      </section>

      {/* Lien vers la page de tarification */}
      <div className="text-center my-16">
        <Link href="/pricing?utm_source=audit&utm_medium=page&utm_campaign=pricing_link" className="inline-block text-[#00e0ff] underline hover:text-white transition">
          Voir nos tarifs et services associés
        </Link>
      </div>
    </main>
  )
}
