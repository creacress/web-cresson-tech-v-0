import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import NeonTitle from "@/components/ui/NeonTitle"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Développement API Python | FastAPI & Django REST – Web Cresson Tech",
  description:
    "Développement d'API performantes et sécurisées avec FastAPI & Django REST. Backends scalables, documentation OpenAPI, CI/CD & intégrations faciles.",
  openGraph: {
    title: "Développement API Python | FastAPI & Django REST",
    description:
      "Créez des backends robustes et rapides avec FastAPI ou Django REST. Idéal pour vos applis métiers, automatisations ou SaaS.",
    url: "https://webcresson.com/services/developpement-api",
    images: [
      {
        url: "https://webcresson.com/images/api.webp",
        width: 1200,
        height: 630,
        alt: "Développement API Python avec WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développement API – FastAPI & Django REST",
    description:
      "Développement de backends performants avec Python, FastAPI et Django REST.",
    images: ["https://webcresson.com/images/Logo_webcressontech.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/developpement-api",
  },
}

export default function DeveloppementApiPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">

      {/* Breadcrumb & JSON-LD */}
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "developpement-api": "Développement API",
        }}
      />
      <ServiceSchema
        serviceName="Développement API Python"
        serviceDescription="Création d'API performantes avec FastAPI et Django REST. Sécurité, scalabilité, intégration rapide et documentation automatisée."
        serviceTypes={["Développement Backend", "FastAPI", "Django REST", "API sécurisée", "Microservices"]}
        faq={[
          {
            question: "Pourquoi choisir FastAPI ou Django REST ?",
            answer:
              "FastAPI est parfait pour des microservices rapides, asynchrones et documentés. Django REST est idéal pour des applications plus structurées avec ORM.",
          },
          {
            question: "Que proposez-vous en développement backend ?",
            answer:
              "API REST/GraphQL, tests automatisés, CI/CD, intégration avec frontends ou apps métiers, sécurité OAuth2/JWT.",
          },
          {
            question: "Quels sont les cas d’usage typiques ?",
            answer:
              "Applications SaaS, automatisations internes, dashboards personnalisés, interconnexion d’outils métiers, plateformes API-first.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-12">
        {/* 🧭 Breadcrumb UX */}
        <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Des APIs robustes, rapides et sécurisées
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Créez un backend scalable avec FastAPI ou Django REST. Pour vos applications métier, SaaS ou automatisations avancées.
        </p>
      </section>

      {/* Stack & outils */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-6">Notre stack backend Python</h2>
        <ul className="grid sm:grid-cols-2 gap-6 text-gray-400 list-disc pl-5">
          <li>FastAPI (async, typage Pydantic, OpenAPI auto)</li>
          <li>Django REST Framework (ORM, sécurité, auth)</li>
          <li>Authentification OAuth2, JWT, API Key</li>
          <li>Tests (pytest, coverage, integration & e2e)</li>
          <li>CI/CD : GitHub Actions, Docker, Railway/Render</li>
          <li>Base de données : PostgreSQL, SQLite, MongoDB</li>
        </ul>
      </section>

      {/* Architecture & bonnes pratiques */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Architecture & bonnes pratiques</h2>
        <p className="text-gray-400 mb-6 max-w-3xl">
          Nous appliquons les meilleures pratiques d’architecture backend pour garantir des APIs maintenables, sécurisées et testées.
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Architecture Clean ou Hexagonale (Domain-Driven Design)</li>
          <li>Endpoints versionnés (v1, v2...) et design RESTful</li>
          <li>Validation stricte avec Pydantic ou DRF Serializers</li>
          <li>Gestion fine des erreurs, logs structurés, tracing</li>
          <li>Observabilité : Prometheus, Sentry, OpenTelemetry</li>
        </ul>
      </section>

      {/* Exemples d’usage */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Exemples d’applications API</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Plateformes SaaS avec front React/Next.js</li>
          <li>Automatisations Python exposées en endpoints API</li>
          <li>Backends pour dashboards BI & reporting</li>
          <li>Microservices asynchrones communicants</li>
          <li>Gateways API pour outils internes ou externes</li>
        </ul>
      </section>

      {/* Design & Documentation */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">API Design, sécurité & documentation</h2>
        <p className="text-gray-400 mb-4 max-w-3xl">
          Nos API sont pensées pour être auto-documentées, sécurisées et facilement testables :
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Documentation OpenAPI/Swagger automatisée</li>
          <li>Tests unitaires & intégration avec couverture 90%</li>
          <li>Sécurité renforcée : CORS, auth, rate limiting</li>
          <li>Mock API pour tests front & sandbox client</li>
        </ul>
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Grâce à l’API conçue par WebCressonTech, notre plateforme traite 5x plus de requêtes avec une documentation OpenAPI complète.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— CTO, Startup Énergie</p>
      </section>

      {/* CTA final */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Un projet backend à lancer ?</h2>
        <p className="text-gray-400 mb-6">
          Nos experts FastAPI et Django REST vous accompagnent de l’architecture au déploiement.
        </p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Discuter de mon projet backend
        </Link>
      </section>

      {/* Tarifs */}
      <PricingSection />
    </main>
  )
}
