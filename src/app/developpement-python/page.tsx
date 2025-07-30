import { Metadata } from "next"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import Link from "next/link"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Développement Python - IA, Analyse, Automatisation | Web Cresson Tech",
  description:
    "Développement Python sur mesure : Intelligence Artificielle, Data Science, Automatisation (RPA) et développement d'APIs.",
  openGraph: {
    title: "Développement Python - Solutions sur mesure | Web Cresson Tech",
    description:
      "Boostez vos projets avec Python : IA, Machine Learning, Automatisation, RPA, Data Science et API.",
    url: "https://webcresson.com/services/developpement-python",
    images: [
      {
        url: "https://webcresson.com/images/python-developpement.webp",
        width: 1200,
        height: 630,
        alt: "Développement Python",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développement Python - Solutions IA, RPA et Analyse | Web Cresson Tech",
    description:
      "Développement Python pour l'IA, la data science, l'automatisation et les APIs sur mesure.",
    images: ["https://webcresson.com/images/python-developpement.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/developpement-python",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DeveloppementPythonPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      {/* Structured Data */}
      <ServiceSchema
        serviceName="Développement Python"
        serviceDescription="Solutions Python avancées pour l'automatisation, l'intelligence artificielle, l'analyse de données et le développement d'APIs."
        serviceTypes={["Python", "IA", "RPA", "Data Science", "API REST"]}
        faq={[
          {
            question: "Quels types de projets réalisez-vous en Python ?",
            answer:
              "Nous développons des projets d'IA, d'automatisation, d'analyse de données et d'APIs backend à forte scalabilité.",
          },
          {
            question: "Utilisez-vous FastAPI ou Django ?",
            answer:
              "Selon le besoin : FastAPI pour la performance, Django REST pour des projets plus complets ou structurés.",
          },
          {
            question: "Puis-je demander un audit Python gratuit ?",
            answer:
              "Oui ! Nous analysons gratuitement vos besoins techniques et proposons une approche sur mesure.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Développement Python sur mesure
        </h1>
        <h1 className="text-5xl font-extrabold text-neon mb-4">Développement Python sur mesure</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          De l’IA à l’automatisation en passant par les APIs, notre expertise Python couvre tous vos besoins.
        </p>
      </section>

      {/* Python + IA */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Python pour l’Intelligence Artificielle</h2>
        <p className="text-gray-400 mb-4">
          Nous concevons des modèles IA avec <strong>TensorFlow</strong>, <strong>PyTorch</strong>, <strong>Scikit-Learn</strong> pour :
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Deep Learning & réseaux de neurones</li>
          <li>Analyse prédictive & recommandations intelligentes</li>
          <li>Traitement d’images, sons et vidéos</li>
          <li>Automatisation de prises de décision</li>
        </ul>
      </section>

      {/* Python + Data Science */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Python pour l’analyse de données</h2>
        <p className="text-gray-400 mb-4">
          Nous exploitons <strong>Pandas</strong>, <strong>Polars</strong>, <strong>NumPy</strong> et <strong>Matplotlib</strong> pour :
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Nettoyage et transformation de jeux de données</li>
          <li>Analyses statistiques et data visualisation</li>
          <li>Dashboards dynamiques & interactifs</li>
        </ul>
      </section>

      {/* Python + RPA */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Python pour l’automatisation (RPA)</h2>
        <p className="text-gray-400 mb-4">
          Grâce à <strong>Selenium</strong>, <strong>PyAutoGUI</strong> ou <strong>Robocorp</strong>, nous créons des robots pour :
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Automatiser des tâches métiers chronophages</li>
          <li>Extraire & structurer des données (scraping)</li>
          <li>Contrôler des applications ou navigateurs</li>
        </ul>
      </section>

      {/* Python + APIs */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Développement d’APIs en Python</h2>
        <p className="text-gray-400 mb-4">
          Nous bâtissons des APIs robustes avec <strong>FastAPI</strong> ou <strong>Django REST Framework</strong> :
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>APIs REST ou GraphQL sécurisées & performantes</li>
          <li>Connexion aux bases de données & services tiers</li>
          <li>Optimisation scalabilité, latence & sécurité</li>
        </ul>
      </section>

      {/* CTA final */}
      <section className="text-center my-20 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Besoin d’un dev Python expert ?</h2>
        <p className="text-gray-400 mb-6">Discutons de votre projet et recevez un audit technique gratuit.</p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Nous contacter
        </Link>
      </section>
    </main>
  )
}
