import { Metadata } from "next"
import NeonTitle from "@/components/ui/NeonTitle"
import AuditForm from "@/components/AuditForm/AuditForm"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import PricingSection from "@/components/Pricing/PricingSection"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Audit Gratuit en Intelligence Artificielle | Web Cresson Tech",
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
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit IA gratuit | Web Cresson Tech",
    description:
      "Bénéficiez d’un audit IA offert pour découvrir les opportunités d’automatisation dans votre activité.",
    images: ["/og-image.png"],
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
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          Audit Gratuit en Intelligence Artificielle
        </NeonTitle>
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

      {/* Process */}
      <section className="my-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Comment se déroule l’audit ?
        </h2>

        <div className="flex flex-col items-center gap-6 text-left max-w-xl mx-auto">
          {[
            "Vous remplissez le formulaire avec vos enjeux métiers",
            "Nous analysons vos données et cas d’usage",
            "Nous vous envoyons un rapport personnalisé sous 48h",
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-[#00e0ff] font-bold text-lg">{index + 1}.</div>
              <p className="text-gray-300">{step}</p>
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
          Vous préférez échanger directement avec nous ?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Prendre contact maintenant
        </Link>
      </section>


      {/* Tarification (même gratuite, pour cohérence) */}
      <PricingSection />
    </main>
  )
}
