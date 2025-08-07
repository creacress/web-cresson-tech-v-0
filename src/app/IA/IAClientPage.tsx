"use client"
import { useState } from "react"
import ClientSearchParams from "@/lib/ClientSearchParams"
import ModelCardHuggingFace from "@/components/ModelCardHuggingFace"

type Props = {
  hfModels: any[]
  groupedModels: { [key: string]: any[] }
  topModels: any[]
}

export default function IAClientPage({ hfModels, groupedModels, topModels }: Props) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [loadingFilters, setLoadingFilters] = useState(false)


  const isModelVisible = (model: any) =>
    selectedFilters.length === 0 || selectedFilters.some((tag) => model.businessTags?.includes(tag))

  const handleCheckboxChange = (tag: string) => {
    setLoadingFilters(true)
    setSelectedFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
    setTimeout(() => setLoadingFilters(false), 600)
  }

  const handleSectorClick = (sector: string) => {
    setLoadingFilters(true)
    setSelectedFilters([sector])
    setTimeout(() => setLoadingFilters(false), 600)
  }

  return (
    <main className="bg-black text-white px-6 py-20 min-h-screen">
      <ClientSearchParams
        onExtract={(sector) => {
          if (sector) handleSectorClick(sector)
        }}
      />
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          🚀 IA pour TPE, PME & Startups
        </h1>
        <p className="mt-4 text-md text-cyan-400 italic">
          Nos IA sont 100% adaptables à vos besoins métiers.
        </p>
        <a
          href="/contact"
          title="Formulaire de contact IA"
          aria-label="Formulaire de contact IA"
          className="mt-8 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
        >
          👉 Discuter de mon besoin IA
        </a>
      </section>

      

      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-12">
          ⭐️ Best IA Models sur Hugging Face
        </h2>
        {topModels.length === 0 ? (
          <div className="text-center text-gray-400 animate-pulse">Chargement des modèles populaires...</div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {topModels.map((model) => (
              <div key={model.id} className="animate-fade-in h-full">
                <ModelCardHuggingFace model={model} isTop={true} />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
          🌐 Modèles d'IA pour cas concrets
        </h2>
        <section className="max-w-6xl mx-auto mt-20 text-center">
        <h2 id="sector-selector" className="text-3xl font-extrabold text-white mb-4">✨ Trouvez l'IA idéale selon votre secteur</h2>
        <p className="text-gray-400 mb-6">Choisissez votre domaine pour afficher les IA les plus adaptées à vos besoins.</p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {["TPE", "PME", "Marketing", "E-commerce", "Industrie/logistique", "RH", "Relation client"].map((sector) => (
            <button
              key={sector}
              onClick={() => handleSectorClick(sector)}
              className={`min-w-[120px] text-sm px-5 py-2.5 rounded-full border border-cyan-500 text-white hover:bg-cyan-700 transition ${
                selectedFilters.includes(sector) ? "bg-cyan-600" : "bg-gray-800"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </section>
          
          <div className="md:w-3/4">
            {loadingFilters ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-64 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl animate-pulse shadow-inner"
                  >
                    <div className="h-full w-full p-4 space-y-4 flex flex-col">
                      <div className="h-6 bg-gray-600 rounded w-2/3"></div>
                      <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                      <div className="h-20 bg-gray-700 rounded"></div>
                      <div className="h-8 bg-gray-600 rounded w-1/2 mt-auto"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              Object.entries(groupedModels).map(([category, models]) => {
                const sortedModels = models
                  .filter(isModelVisible)
                  .sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0))
                return (
                  <div key={category} className="mb-12">
                    <h3 className="text-2xl font-semibold text-white mb-4">{category}</h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {sortedModels.map((model: any) => (
                        <div key={model.id} className="animate-fade-in h-full">
                          <ModelCardHuggingFace model={model} />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })
            )}
          </div>
      </section>
      <section className="mt-32 max-w-6xl mx-auto text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-8">🚀 Cas d’usage concrets</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {[
            {
              title: "PME industrielle",
              content: "Mise en place d’un agent IA de traitement automatique des bons de commande, avec extraction OCR + API vers ERP.",
            },
            {
              title: "Startup SaaS",
              content: "Intégration d’un assistant IA pour onboarding client, réduction de 30% des demandes au support.",
            },
            {
              title: "Cabinet RH",
              content: "Génération automatique de synthèses de profils + matching IA avec offres en cours.",
            },
          ].map((usecase, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/50 transition">
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">{usecase.title}</h3>
              <p className="text-gray-300 text-sm">{usecase.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}