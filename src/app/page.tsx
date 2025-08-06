import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import NeonDivider from "@/components/ui/NeonDivider"
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import problems from '@/components/Home/ProblemesSection'
import steps from '@/components/Home/MethodologieSection'
import SolutionsSection from '@/components/Home/solutionsData'
import points from '@/components/Home/ExpertiseSection'
import personas from '@/components/Home/PersonasSection'
import glossaire from '@/components/Home/GlossaireSection'
import FAQSection from '@/components/Home/FAQSection'
import TemoignageSection from '@/components/Home/TemoignageSection'
import CiblesSection from '@/components/Home/CiblesSection'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Agence IA & Automatisation | WebCressonTech – Solutions Python & RPA sur mesure',
  description:
    "Découvrez comment WebCressonTech transforme vos process grâce à l'IA, la RPA et Python. Audit gratuit & solutions personnalisées.",
  keywords: ['Agence IA', 'support automatisation', 'WebCressonTech', 'expert IA', 'Python'],
  alternates: {
    canonical: 'https://webcresson.com',
  },
  openGraph: {
    title: 'Agence IA & RPA | WebCressonTech',
    description: "WebCressonTech, votre partenaire pour l'IA et l'automatisation.",
    url: 'https://webcresson.com',
    siteName: 'WebCresson Tech',
    images: [
      {
        url: 'https://webcresson.com/images/Logo_webcressontech.webp',
        width: 1200,
        height: 630,
        alt: 'WebCressonTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "WebCressonTech, votre partenaire pour l'IA et l'automatisation",
    description: "Discutons de vos projets IA & automatisation.",
    images: ['https://webcresson.com/images/Logo_webcressontech.webp'],
    creator: '@WebCresson',
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Home() {
  return (
    <>
      <ServiceSchema
        serviceName="Entreprise Experte en IA | WebCressonTech"
        serviceDescription="Développez votre entreprise avec des solutions d'intelligence artificielle sur mesure : automatisation, machine learning et deep learning."
        serviceTypes={[
          "Intelligence Artificielle",
          "Machine Learning",
          "Deep Learning",
          "Solutions Technologiques",
          "Développement Python",
          "Automatisation Python",
        ]}
        faq={[
          {
            question: "Quels services propose WebCressonTech ?",
            answer: "Solutions sur mesure en intelligence artificielle, machine learning, deep learning et automatisation des processus.",
          },
          {
            question: "Pourquoi choisir WebCressonTech pour vos projets IA et Python ?",
            answer: "Nous offrons une expertise certifiée, un accompagnement complet et des solutions adaptées à vos besoins.",
          },
          {
            question: "Comment contacter WebCressonTech ?",
            answer: "Contactez-nous via notre page de contact ou par téléphone pour discuter de vos projets IA et développement Python.",
          },
          {
            question: "Quel est le prix d’une automatisation RPA ?",
            answer: "Chaque projet est unique. Après un audit gratuit, un devis personnalisé est proposé selon la complexité des tâches.",
          },
          {
            question: "Est-ce que WebCressonTech propose du support après livraison ?",
            answer: "Oui, nous assurons le support, la maintenance et l’amélioration continue si besoin.",
          },
        ]}
      />

      <main className="bg-black text-white px-4 sm:px-6 lg:px-12">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0f0f0f] via-black to-[#1a1a1a] text-white py-24 px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-2xl rounded-full animate-pulse-slow"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Libérez le pouvoir de l’IA dans votre entreprise
              </h1>
              <p className="text-lg text-gray-300 mb-8 animate-fade-in-up delay-200">
                Automatisation, agents IA, traitement de données, NLP, génération de contenu...
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Link
                  href="/solutions"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition flex items-center gap-2"
                >
                  🚀 Découvrir nos solutions
                </Link>
                <Link
                  href="/contact"
                  className="border border-white hover:bg-white hover:text-black text-white py-3 px-6 rounded-lg font-medium transition flex items-center gap-2"
                >
                  📞 Contactez-nous
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full h-64 md:h-96 animate-fade-in-up delay-500">
              <div className="w-full h-full rounded-xl overflow-hidden border-4 border-indigo-500/20 shadow-inner shadow-indigo-700/10">
                <Image
                  src="/images/hero-ia.jpg"
                  alt="Illustration IA"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />
        {/* Problèmes fréquents */}
        <section className="py-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Quels problèmes résolvons-nous ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Voici les défis récurrents que nous aidons nos clients à surmonter grâce à des solutions IA adaptées.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problems.map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/60 hover:shadow-cyan-500/10 hover:scale-[1.02] transition-all duration-300 text-left"
              >
                <h3 className="text-xl font-semibold mb-2 text-cyan-400 flex items-center gap-2">
                  💡 {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/IA"
              className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition"
            >
              💡 Voir comment l’IA peut résoudre ces problèmes
            </Link>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />
        {/* Étapes d'accompagnement */}
        <section className="py-16 px-4 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Notre Méthodologie</h2>
            <p className="text-lg text-gray-400 mb-12">
              Une approche structurée et efficace pour transformer vos idées en solutions concrètes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />
        {/* Nos expertises */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Nos Solutions IA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {SolutionsSection.map((sol, i) => (
                <Link
                  href={sol.link}
                  key={i}
                  className="group bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-800 hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.05] flex flex-col items-center text-center"
                >
                  <div className="text-5xl mb-6 text-indigo-400 group-hover:animate-bounce">{sol.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{sol.title}</h3>
                  <p className="text-gray-400 mb-6">{sol.desc}</p>
                  <span className="mt-auto text-indigo-400 group-hover:translate-x-2 transition-transform font-semibold">En savoir plus →</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/IA"
                className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition"
              >
                🔍 Explorer tous nos modèles IA
              </Link>
            </div>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />

        {/* Expertises IA */}
        <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">

            <h2 className="text-4xl font-extrabold mb-6">
              Notre expertise IA
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Nous concevons et déployons des solutions d’intelligence artificielle pour répondre aux besoins concrets des entreprises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              {points.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4"
                >
                  <CheckCircleIcon className="h-6 w-6 text-indigo-500 shrink-0" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />
        {/* Personas types */}
        <section className="py-20 max-w-6xl mx-auto bg-[#0d0d0d] rounded-xl px-6 border border-cyan-700/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-4">À qui s’adresse cet audit ?</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Pour les TPE, PME ou startups qui veulent booster leur efficacité grâce à l’IA, sans complexité.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((p, i) => (
              <div key={i} className="flex flex-col bg-[#111] p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-400/80 hover:scale-[1.02] transition">
                <Image src={p.img} alt={p.nom} width={80} height={80} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white text-center">{p.nom}</h3>
                <p className="text-sm text-gray-400 italic text-center mb-3">{p.role}</p>
                <p className="text-sm text-gray-300 text-center mb-2">{p.bio}</p>
                <p className="text-sm text-gray-400 text-center">{p.soluce}</p>
                <Link href={`/solutions/${p.nom.toLowerCase()}`} className="mt-4 mx-auto px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded">
                  Voir une démo
                </Link>
              </div>
            ))}
          </div>
        </section>
        <NeonDivider />
        <CiblesSection />
        {/* Glossaire IA */}
        <section className="py-20 px-4 md:px-12 bg-zinc-950 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Glossaire</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            Familiarisez-vous avec les concepts clés de l’IA, du machine learning, du deep learning, et de l’automatisation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {glossaire.map(({ terme, definition }, i) => (
              <div
                key={i}
                className="border border-zinc-800 rounded-lg p-6 bg-zinc-900 hover:scale-[1.02] hover:shadow-indigo-500/10 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-400 flex items-center gap-2">
                  <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">📘</span> {terme}
                </h3>
                <p className="text-gray-300 text-sm">{definition}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition"
            >
              📚 Lire des articles IA sur notre blog
            </Link>
          </div>
        </section>
        {/* Questions fréquentes */}
        <FAQSection />
        {/* Témoignage */}
        <TemoignageSection />
        {/* Divider */}
        <NeonDivider />
        {/* CTA final */}
        <section className="py-16 px-4 text-center bg-gradient-to-br from-black to-zinc-900 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à propulser votre business avec l&apos;IA ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Contactez-nous pour une démo gratuite ou découvrez nos plans adaptés à votre structure.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Contactez-nous
            </Link>
            <Link
              href="/pricing"
              className="border border-indigo-500 text-indigo-400 hover:bg-indigo-800 px-6 py-3 rounded-lg font-semibold transition"
            >
              Voir les tarifs
            </Link>
          </div>
        </section>
        <NeonDivider />
        {/* Audit gratuit CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="/services/audit-gratuit"
            className="bg-[#00e0ff] text-black px-5 py-3 rounded shadow hover:scale-105 transition"
          >
            📩 Audit IA gratuit
          </Link>
        </div>
        <NeonDivider />
      </main>
    </>
  )
}
