"use client"
import Link from "next/link"

export default function PacksIA() {
  const packs = [
    {
      title: "🚀 Pack IA pour TPE",
      price: "à partir de 490€",
      description: "Pensé pour les petites structures qui veulent automatiser rapidement sans complexité.",
      features: [
        "📌 Résumé automatique de documents clients",
        "📌 Génération de réponses e-mail",
        "📌 Assistant vocal de prise de rendez-vous",
        "📌 Intégration simple à vos outils existants"
      ],
      href: "/solutions/julie"
    },
    {
      title: "🏢 Pack IA pour PME",
      price: "à partir de 1290€",
      description: "Un accompagnement complet pour booster votre efficacité métier.",
      features: [
        "📌 Analyse prédictive des ventes et données",
        "📌 Dashboard IA sur-mesure",
        "📌 Automatisation des tâches répétitives",
        "📌 Intégration API avec vos systèmes internes"
      ],
      href: "/solutions/marc"
    },
    {
      title: "🌐 Pack IA Startups",
      price: "à partir de 790€",
      description: "Pour accélérer votre MVP ou intégrer une IA innovante dans votre produit.",
      features: [
        "📌 MVP IA modulaire (texte, image, audio)",
        "📌 Agent conversationnel personnalisé",
        "📌 Générateur de contenu IA + API",
        "📌 Accès rapide à des modèles avancés"
      ],
      href: "/solutions/lisa"
    }
  ]

  return (
    <section className="py-24 bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 animate-fade-in-down">
          📦 Nos Packs IA Clés en Main
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Choisissez le pack qui correspond à votre entreprise. Chaque offre est personnalisable et peut être déployée rapidement dans vos outils existants.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((pack, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-[#111] border border-[#00e0ff33] hover:border-cyan-500 hover:shadow-cyan-500/30 rounded-xl p-6 shadow-md transition-all duration-500 ease-out hover:scale-[1.03] group"
            >
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-52 h-52 bg-cyan-400 opacity-10 rounded-full blur-3xl animate-[ping_4s_linear_infinite] z-0" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{pack.title}</h3>
                  <p className="text-sm text-cyan-400 mb-4 font-medium">{pack.price}</p>
                  <p className="text-sm text-gray-300 mb-4">{pack.description}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {pack.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400">✔</span> <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={pack.href}
                  className="mt-6 inline-block text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2.5 rounded-md hover:scale-[1.02] hover:brightness-110 transition-all"
                >
                  Demander une démo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
