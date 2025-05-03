import { Metadata } from "next"
import NeonTitle from "@/components/ui/NeonTitle"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import ServiceLink from "@/components/ServiceLink/ServiceLink"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import { servicesData } from "@/data/servicesData"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Nos Services en Intelligence Artificielle | Web Cresson Tech",
  description:
    "Découvrez les solutions innovantes de Web Cresson Tech en intelligence artificielle : maintenance prédictive, RPA, IA générative, audit IA et bien plus.",
  openGraph: {
    title: "Nos Services - Expertise en IA",
    description: "Solutions et expertises avancées en intelligence artificielle par Web Cresson Tech.",
    url: "https://webcresson.com/services",
    images: [
      {
        url: "/images/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services en Intelligence Artificielle",
    description:
      "Web Cresson Tech propose des solutions sur mesure en intelligence artificielle et automatisation des processus.",
    images: ["/images/Logo_webcressontech.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      <BreadcrumbJsonLd overrides={{ services: "Services" }} />

      <ServiceSchema
        serviceName="Services en Intelligence Artificielle"
        serviceDescription="Découvrez une large gamme de services en IA par Web Cresson Tech : automatisation, maintenance prédictive, IA générative, deep learning, machine learning et bien plus."
        serviceTypes={["Automatisation", "IA Générative", "Deep Learning", "Machine Learning", "RPA"]}
        faq={[
          {
            question: "Quels services propose Web Cresson Tech ?",
            answer:
              "Nous proposons des solutions sur mesure en intelligence artificielle, y compris l'automatisation (RPA), l'IA générative, le deep learning et le machine learning.",
          },
          {
            question: "Comment l'IA peut-elle aider mon entreprise ?",
            answer:
              "L'IA permet d'automatiser des tâches répétitives, d'améliorer la prise de décision et d'innover avec des solutions adaptées.",
          },
          {
            question: "Proposez-vous des audits IA gratuits ?",
            answer:
              "Oui, nous offrons un audit gratuit pour évaluer vos besoins et déterminer comment l'IA peut optimiser vos processus métiers.",
          },
        ]}
      />

      <section className="text-center mb-12">
        <BreadcrumbNav />
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          Passez à la vitesse supérieure avec l’IA sur mesure
        </NeonTitle>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Vos données sont une mine d’or. Nous les transformons en leviers de croissance grâce à nos solutions IA & SaaS
          personnalisées.
        </p>
        <a
          href="/services/audit-gratuit"
          className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Demander un audit gratuit
        </a>
      </section>

      <section className="grid md:grid-cols-2 gap-6 my-16">
        {[
          { icon: "⏱️", title: "Gagnez du temps", text: "Libérez vos équipes des tâches répétitives avec l’automatisation." },
          { icon: "🔮", title: "Anticipez mieux", text: "Utilisez la prédiction IA pour prévoir pannes et comportements clients." },
          { icon: "🧠", title: "Exploitez vos données", text: "Nos modèles extraient, traitent et valorisent vos données brutes." },
          { icon: "📈", title: "Boostez vos KPIs", text: "Des dashboards intelligents pilotés par vos données temps réel." },
        ].map(({ icon, title, text }, index) => (
          <div key={index} className="bg-[#111] p-6 rounded border border-[#00e0ff33]">
            <div className="text-4xl mb-2">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400">{text}</p>
          </div>
        ))}
      </section>

      <div className="text-center my-20">
        <h2 className="text-3xl font-bold text-neon mb-4">Nos domaines d’expertise</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Découvrez nos services d’IA, automatisation, NLP, visualisation intelligente et plus encore.
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-6 mb-16">
        {servicesData.map((service, index) => (
          <ServiceLink
            key={index}
            href={service.link}
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
        ))}
      </section>

      <section className="my-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Une méthode simple et efficace</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <h3 className="font-semibold text-xl mb-2">1. Audit & cadrage</h3>
            <p>Gratuit, sans engagement. On évalue ensemble vos enjeux.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">2. Prototype rapide</h3>
            <p>Un POC opérationnel en quelques jours pour tester une solution IA ciblée.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3. Déploiement</h3>
            <p>On met en prod et on forme vos équipes à l’utilisation.</p>
          </div>
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">IA appliquée à vos données</h2>
        <table className="table-auto w-full text-left text-sm text-gray-400 border border-gray-700">
          <thead>
            <tr className="bg-[#222]">
              <th className="p-2">Donnée d’entrée</th>
              <th className="p-2">Traitement IA</th>
              <th className="p-2">Sortie</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">Emails</td><td className="p-2">Classification</td><td className="p-2">Tickets triés</td></tr>
            <tr><td className="p-2">Logs machines</td><td className="p-2">Prédiction</td><td className="p-2">Alertes automatiques</td></tr>
            <tr><td className="p-2">Pages Web</td><td className="p-2">Scraping + Résumé</td><td className="p-2">Veille intelligente</td></tr>
          </tbody>
        </table>
      </section>

      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Grâce à Web Cresson Tech, nous avons automatisé 70% de notre traitement de données. +32% de productivité en 3 mois.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Responsable SI, Entreprise X</p>
        <a
          href="/services/audit-gratuit"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Lancer mon audit gratuit
        </a>
      </section>

      <PricingSection />
    </main>
  )
}
