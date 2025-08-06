"use client"
import React from "react"
import ModelCardHuggingFace from "./ModelCardHuggingFace"

interface FilteredModelSectionProps {
  selectedFilters: string[]
  handleSectorClick: (sector: string) => void
  loadingFilters: boolean
  groupedModels: Record<string, any>
  isModelVisible: (model: any) => boolean
}

export default function FilteredModelSection({
  selectedFilters,
  handleSectorClick,
  loadingFilters,
  groupedModels,
  isModelVisible,
}: FilteredModelSectionProps) {
  return (
    <section className="mt-24 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
        🌐 Modèles d'IA pour cas concrets
      </h2>
      <section className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">✨ Trouvez l'IA idéale selon votre secteur</h2>
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
              .sort((a: any, b: any) => (b.likes ?? 0) - (a.likes ?? 0))
            return (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">{category}</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
  )
}
