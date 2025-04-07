import { Metadata } from "next"
import AuditForm from "@/components/AuditForm/AuditForm"
import Script from "next/script"

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
            "areaServed": {
              "@type": "Place",
              "name": "France"
            },
            "description":
              "Profitez d’un audit gratuit pour découvrir comment l'intelligence artificielle peut optimiser vos processus et automatiser vos tâches.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

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
                    "Un audit IA permet d’identifier les processus automatisables et les opportunités d’intégration de l’intelligence artificielle dans votre entreprise."
                }
              },
              {
                "@type": "Question",
                "name": "Est-ce vraiment gratuit ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, l’audit initial est entièrement gratuit et sans engagement."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps prend l’analyse ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Vous recevez un retour sous 24 à 48h après soumission du formulaire d’audit."
                }
              }
            ]
          })
        }}
      />

      <main className="pt-24 pb-12 px-6 text-white max-w-5xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-neon mb-4">
            Audit Gratuit en Intelligence Artificielle
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Obtenez une analyse personnalisée en remplissant ce formulaire. Nous évaluons gratuitement vos processus et vous proposons des solutions IA sur mesure.
          </p>
        </section>

        {/* Le composant client AuditForm (déjà stylisé en Tailwind) */}
        <AuditForm />
      </main>
    </>
  )
}
