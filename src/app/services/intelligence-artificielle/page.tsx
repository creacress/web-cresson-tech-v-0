import { Metadata } from "next"
import Link from "next/link"
import Head from "next/head"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Intelligence Artificielle - Deep Learning & Machine Learning | Web Cresson Tech",
  description: "Découvrez comment l'intelligence artificielle, le Deep Learning et le Machine Learning peuvent transformer vos processus métiers avec Web Cresson Tech.",
  openGraph: {
    title: "Intelligence Artificielle - Solutions IA sur mesure",
    description: "Web Cresson Tech propose des solutions sur mesure en intelligence artificielle : Deep Learning, Machine Learning, IA générative et traitement d'images.",
    url: "https://webcresson.com/services/intelligence-artificielle",
    images: [
      {
        url: "https://webcresson.com/IA-sante.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligence Artificielle | Web Cresson Tech",
    description: "Solutions IA sur mesure en Deep Learning, Machine Learning, IA générative et traitement d'images avec Web Cresson Tech.",
    images: ["https://webcresson.com/images/intelligence-artificielle.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/intelligence-artificielle",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function IntelligenceArtificiellePage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://webcresson.com/services/intelligence-artificielle" />
      </Head>

      <ServiceSchema
        serviceName="Services en Intelligence Artificielle"
        serviceDescription="Découvrez une large gamme de services en IA par Web Cresson Tech : automatisation, maintenance prédictive, IA générative, deep learning, machine learning et bien plus."
        serviceTypes={[
          "Automatisation",
          "IA Générative",
          "Deep Learning",
          "Machine Learning",
          "RPA",
        ]}
        faq={[
          {
            question: "Quels services propose Web Cresson Tech ?",
            answer: `Nous proposons des solutions sur mesure en intelligence artificielle, y compris l'automatisation (RPA), l'IA générative, le deep learning et le machine learning.`,
          },
          {
            question: "Comment l'IA peut-elle aider mon entreprise ?",
            answer: `L'IA permet d'automatiser des tâches répétitives, d'améliorer la prise de décision grâce aux données et d'innover avec des solutions personnalisées.`,
          },
          {
            question: "Proposez-vous des audits IA gratuits ?",
            answer: `Oui, nous offrons un audit gratuit pour évaluer vos besoins et déterminer comment l'IA peut optimiser vos processus métiers.`,
          },
        ]}
      />

      <main className="max-w-5xl mx-auto px-6 py-24 text-white">
        <section className="text-center mb-16">
          <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
            Transformez votre entreprise avec l’IA
          </NeonTitle>
          <p className="text-lg text-gray-300 mb-6">
            Maximisez votre efficacité avec nos solutions IA sur mesure : Deep Learning, Machine Learning, IA générative et traitement d’images.
          </p>
          <Link href="/contact" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
            Obtenez une consultation gratuite
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Qu’est-ce que l’intelligence artificielle ?</h2>
          <p className="text-gray-400">
            L’IA simule l’intelligence humaine pour exécuter des tâches complexes comme la reconnaissance d’images, l’analyse prédictive et l’automatisation. Elle apprend et s’adapte grâce au Deep Learning et au Machine Learning pour booster la performance de votre entreprise.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Deep Learning : performance maximale</h2>
          <p className="text-gray-400 mb-4">
            Le Deep Learning s’appuie sur des réseaux de neurones pour traiter de grandes quantités de données. C’est la technologie clé pour la vision par ordinateur, la détection d’anomalies ou la reconnaissance vocale.
          </p>
          <Link href="/services/deep-learning" className="text-[#00e0ff] underline hover:text-white">
            → Découvrez nos solutions Deep Learning
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Machine Learning : IA prédictive</h2>
          <p className="text-gray-400 mb-4">
            Le Machine Learning permet à vos systèmes d’apprendre automatiquement à partir de données. C’est l’idéal pour prédire les ventes, détecter les comportements clients ou analyser la rentabilité.
          </p>
          <Link href="/services/machine-learning" className="text-[#00e0ff] underline hover:text-white">
            → En savoir plus sur le Machine Learning
          </Link>
        </section>
      </main>
    </>
  )
}
