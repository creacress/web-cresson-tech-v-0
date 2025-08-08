"use client"
import { useState, useMemo } from "react"
import ClientSearchParams from "@/lib/ClientSearchParams"
import ModelCardHuggingFace from "@/components/ModelCardHuggingFace"

// This component stays client-side for interactivity (filters, instant updates)
// For best SEO, pair it with a server `page.tsx` that fetches data and exports `metadata`. See chat for an example.

type Props = {
  hfModels: any[]
  groupedModels: { [key: string]: any[] }
  topModels: any[]
}

export default function IAClientPage({ hfModels, groupedModels, topModels }: Props) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [loadingFilters, setLoadingFilters] = useState(false)

  // visibility rule kept simple & fast
  const isModelVisible = (model: any) =>
    selectedFilters.length === 0 || selectedFilters.some((tag) => model.businessTags?.includes(tag))

  // derive counts for UX feedback & a11y
  const visibleCounts = useMemo(() => {
    const all = hfModels?.filter(isModelVisible)?.length ?? 0
    const perCat: Record<string, number> = {}
    Object.entries(groupedModels || {}).forEach(([cat, models]) => {
      perCat[cat] = (models || []).filter(isModelVisible).length
    })
    return { all, perCat }
  }, [hfModels, groupedModels, selectedFilters])

  const toggleFilter = (tag: string) => {
    setLoadingFilters(true)
    setSelectedFilters((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
    // small delay just to show skeleton state on fast machines
    setTimeout(() => setLoadingFilters(false), 300)
  }

  const handleSectorClick = (sector: string) => {
    setLoadingFilters(true)
    setSelectedFilters([sector])
    setTimeout(() => setLoadingFilters(false), 300)
  }

  return (
    <>
      {/* JSON-LD service snippet (harmless in client, boosts rich results) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IA pour TPE, PME & Startups",
            description:
              "Catalogue d’IA métiers (Hugging Face) avec filtrage par secteur : TPE, PME, Marketing, E‑commerce, Industrie, RH, Relation client.",
            areaServed: "FR",
            provider: { "@type": "Organization", name: "Pep’s" },
            offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
          }),
        }}
      />

      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-cyan-600 text-white px-3 py-2 rounded">
        Aller au contenu
      </a>

      <main id="contenu" className="bg-black text-white px-6 py-16 sm:py-20 min-h-screen">
        <ClientSearchParams
          onExtract={(sector) => {
            if (sector) handleSectorClick(sector)
          }}
        />

        {/* Hero */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient bg-[200%_auto]">
              🚀 IA pour TPE, PME & Startups
            </span>
          </h1>
          <p className="mt-3 text-base md:text-lg text-cyan-300/90">
            Des modèles IA prêts à l’emploi, sélectionnés pour vos cas métiers. Filtrez par secteur et démarrez vite.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href="/contact"
              title="Formulaire de contact IA"
              aria-label="Formulaire de contact IA"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
            >
              👉 Discuter de mon besoin IA
            </a>
            <a
              href="#catalogue"
              className="inline-block border border-cyan-500/60 hover:bg-cyan-700/20 font-medium py-3 px-6 rounded-full transition"
            >
              Voir le catalogue ({visibleCounts.all})
            </a>
          </div>
        </section>

        {/* Top models */}
        <section id="top" className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-10">
            ⭐️ Modèles Hugging Face mis en avant
          </h2>
          {topModels.length === 0 ? (
            <div className="text-center text-gray-400 animate-pulse" aria-live="polite">
              Chargement des modèles populaires...
            </div>
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

        {/* Sector chips */}
        <section className="mt-24 max-w-7xl mx-auto" aria-labelledby="h2-cas-concrets">
          <h2 id="h2-cas-concrets" className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
            🌐 Modèles d'IA par besoin métier
          </h2>

          <div className="max-w-5xl mx-auto text-center">
            <h3 id="sector-selector" className="text-xl md:text-2xl font-semibold text-white mb-2">
              ✨ Filtrez selon votre secteur
            </h3>
            <p className="text-gray-400 mb-6">Choisissez votre domaine pour afficher les IA les plus adaptées.</p>
            <div
              role="group"
              aria-labelledby="sector-selector"
              className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
            >
              {["TPE", "PME", "Marketing", "E-commerce", "Industrie/logistique", "RH", "Relation client"].map(
                (sector) => (
                  <button
                    key={sector}
                    onClick={() => handleSectorClick(sector)}
                    aria-pressed={selectedFilters.includes(sector)}
                    className={`min-w-[120px] text-sm px-4 sm:px-5 py-2.5 rounded-full border border-cyan-500 text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:ring-offset-2 focus:ring-offset-black ${selectedFilters.includes(sector) ? "bg-cyan-600" : "bg-gray-800 hover:bg-cyan-700/30"
                      }`}
                  >
                    {sector}
                  </button>
                )
              )}
              <button
                onClick={() => setSelectedFilters([])}
                className="min-w-[120px] text-sm px-4 sm:px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-800 transition"
              >
                Réinitialiser
              </button>
            </div>
          </div>

          {/* Catalogue */}
          <section id="catalogue" className="mt-10" aria-live="polite" aria-busy={loadingFilters}>
            <p className="sr-only">{visibleCounts.all} modèles visibles actuellement.</p>

            {loadingFilters ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-10">
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
              <div className="md:w-3/4">
                {Object.entries(groupedModels).map(([category, models]) => {
                  const sortedModels = models
                    .filter(isModelVisible)
                    .sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0))

                  if (sortedModels.length === 0) return null

                  return (
                    <div key={category} className="mb-12">
                      <div className="flex items-baseline gap-3 mb-4">
                        <h3 className="text-2xl font-semibold text-white">{category}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-900/40 border border-cyan-800/60 text-cyan-300">
                          {visibleCounts.perCat[category] ?? sortedModels.length} modèles
                        </span>
                      </div>
                      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {sortedModels.map((model: any) => (
                          <div key={model.id} className="animate-fade-in h-full">
                            <ModelCardHuggingFace model={model} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>
        </section>

        {/* Use cases */}
        <section className="mt-28 max-w-6xl mx-auto text-white text-center px-6" aria-labelledby="h2-usecases">
          <h2 id="h2-usecases" className="text-3xl md:text-4xl font-bold text-amber-400 mb-8">
            🚀 Cas d’usage concrets
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              {
                title: "PME industrielle",
                content:
                  "Agent IA pour traitement automatique des bons de commande : OCR + intégration API vers l’ERP.",
              },
              {
                title: "Startup SaaS",
                content:
                  "Assistant IA d’onboarding client : réduction mesurée de 30% des demandes au support.",
              },
              {
                title: "Cabinet RH",
                content:
                  "Synthèses automatiques de profils + matching intelligent avec les offres en cours.",
              },
            ].map((usecase, i) => (
              <article key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/50 transition">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">{usecase.title}</h3>
                <p className="text-gray-300 text-sm">{usecase.content}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}