import { Metadata } from "next"
import NeonTitle from "@/components/ui/NeonTitle"
import AuditForm from "@/components/AuditForm/AuditForm"
import Script from "next/script"
import Link from "next/link"

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
    <>
      {/* JSON-LD Service */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Audit Gratuit en Intelligence Artificielle",
            "provider": {
              "@type": "Organization",
              "name": "WebCressonTech",
              "url": "https://webcresson.com",
              "logo": "https://webcresson.com/images/logo.png",
            },
            "serviceType": "Audit IA personnalisé",
            "areaServed": { "@type": "Place", "name": "France" },
            "description":
              "Profitez d’un audit gratuit pour découvrir comment l'intelligence artificielle peut optimiser vos processus et automatiser vos tâches.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* JSON-LD FAQ */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Pourquoi faire un audit IA ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Un audit IA permet d’identifier les processus automatisables et les opportunités d’intégration de l’intelligence artificielle dans votre entreprise.",
                },
              },
              {
                "@type": "Question",
                "name": "Est-ce vraiment gratuit ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, l’audit initial est entièrement gratuit et sans engagement.",
                },
              },
              {
                "@type": "Question",
                "name": "Combien de temps prend l’analyse ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Vous recevez un retour sous 24 à 48h après soumission du formulaire d’audit.",
                },
              },
            ],
          }),
        }}
      />

      <main className="pt-24 pb-12 px-6 text-white max-w-5xl mx-auto">
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
        <section className="my-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Comment se déroule l’audit ?
          </h2>
          <ol className="list-decimal pl-6 text-gray-400 space-y-3 max-w-2xl mx-auto">
            <li>Vous remplissez le formulaire avec vos enjeux métiers</li>
            <li>Nous analysons vos données et cas d’usage</li>
            <li>Nous vous envoyons un rapport personnalisé sous 48h</li>
          </ol>
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
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Vous préférez échanger directement avec nous ?
          </p>
          <Link
            href="/contact"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Prendre contact maintenant
          </Link>
        </div>
      </main>
    </>
  )
}
