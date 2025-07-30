import { Metadata } from "next"
import NeonTitle from "@/components/ui/NeonTitle"
import NeonDivider from "@/components/ui/NeonDivider"
import AuditForm from "@/components/AuditForm/AuditForm"
import Link from "next/link"
import Image from "next/image"
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import PricingSection from "@/components/Pricing/PricingSection"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Audit Gratuit en Intelligence Artificielle | WebCressonTech",
  description:
    "Profitez d’un audit IA gratuit avec Web Cresson Tech pour évaluer vos besoins et découvrir comment l'intelligence artificielle peut optimiser votre activité.",
  alternates: {
    canonical: "https://webcresson.com/services/audit-gratuit",
  },
  openGraph: {
    title: "Audit Gratuit en Intelligence Artificielle | Web Cresson Tech",
    description:
      "Profitez d’un audit IA gratuit et découvrez comment booster votre entreprise avec l’intelligence artificielle sur-mesure.",
    url: "https://webcresson.com/services/audit-gratuit",
    type: "website",
    images: ["/images/Logo_webcressontech.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit IA gratuit | Web Cresson Tech",
    description:
      "Bénéficiez d’un audit IA offert pour découvrir les opportunités d’automatisation dans votre activité.",
    images: ["/images/Logo_webcressontech.webp"],
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
        {/* 🧭 Breadcrumb UX */}
        <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Audit Gratuit en Intelligence Artificielle
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Obtenez une analyse personnalisée en remplissant ce formulaire. Nous évaluons gratuitement vos processus et vous proposons des solutions IA sur mesure.
        </p>
      </section>

      {/* Bénéfices */}
      <section className="grid sm:grid-cols-3 gap-6 my-16 text-center">
        {[
          {
            title: "🎯 Audit ciblé",
            text: "Nous identifions précisément les processus à automatiser grâce à l’IA.",
          },
          {
            title: "⚙️ Recommandations concrètes",
            text: "Vous recevez des suggestions techniques + stratégiques sur-mesure.",
          },
          {
            title: "⏱️ Réponse rapide",
            text: "Un retour sous 24–48h après réception de votre demande.",
          },
        ].map(({ title, text }, i) => (
          <div key={i} className="bg-[#111] p-6 rounded border border-[#00e0ff33]">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{text}</p>
          </div>
        ))}
      </section>
      <NeonDivider />
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
                <Link href="/solutions/julie" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
              {p.nom === "Marc" && (
                <Link href="/solutions/marc" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
              {p.nom === "Lisa" && (
                <Link href="/solutions/lisa" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
      <NeonDivider />

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
            <div key={i} className="bg-[#111] border border-[#00e0ff33] p-6 rounded-xl hover:border-[#00e0ff88] transition">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
              <p className="text-gray-400 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Formulaire */}
      <AuditForm />

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
          <Link href="/services" className="underline text-[#00e0ff]">Voir nos autres services IA</Link>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Prendre contact maintenant
        </Link>
      </section>


      {/* Lien vers la page de tarification */}
      <div className="text-center my-16">
        <Link href="/pricing" className="inline-block text-[#00e0ff] underline hover:text-white transition">
          Voir nos tarifs et services associés
        </Link>
      </div>
    </main>
  )
}
