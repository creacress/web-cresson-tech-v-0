"use client"
import { useState } from "react"
import Link from "next/link"

type Props = {
  hfModels: any[]
  groupedModels: { [key: string]: any[] }
  topModels: any[]
}

export default function IACurieuxPage({ hfModels, groupedModels, topModels }: Props) {
  return (
    <main className="relative bg-black text-white px-6 py-20 min-h-screen">
      <div className="bg-zinc-800 border-l-4 border-cyan-500 text-sm text-gray-300 px-4 py-4 rounded-xl shadow-md max-w-3xl mx-auto mb-10 mt-[-1rem]">
        <p className="flex items-start gap-2">
          <span className="text-cyan-400 text-lg">ℹ️</span>
          <span>
            Cette page est conçue pour les <span className="text-cyan-400 font-medium">curieux</span> et <span className="text-blue-400 font-medium">développeurs</span> souhaitant explorer les modèles IA.
            <br />
            Pour découvrir nos solutions IA adaptées aux entreprises, <Link href="/solutions" className="text-cyan-400 underline hover:text-cyan-300">cliquez ici</Link>.
          </span>
        </p>
      </div>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient bg-[200%_auto]">
            Intelligence Artificielle : Pour DEV et Curieux
          </span>
        </h1>
        <p className="text-md text-gray-400 max-w-xl mx-auto mb-6">
          Cette page présente des outils et modèles d’intelligence artificielle pour des usages professionnels et pratiques.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
        >
          Contactez un expert
        </Link>
      </section>

      <section className="mt-16 max-w-6xl mx-auto text-left">
        <h2 className="text-2xl font-bold text-white mb-4">Terminologie clé</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-300">
          {[
            { terme: "Intelligence Artificielle (IA)", def: "Systèmes capables de simuler des tâches cognitives humaines, comme comprendre ou générer du langage." },
            { terme: "Modèle IA", def: "Un algorithme entraîné pour effectuer des tâches spécifiques, par exemple la reconnaissance d’images ou la génération de texte." },
            { terme: "NLP", def: "Traitement automatique du langage naturel, utilisé pour les chatbots, la traduction ou le résumé de texte." },
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl">
              <h3 className="text-cyan-400 font-semibold mb-1">📖 {item.terme}</h3>
              <p>{item.def}</p>
            </div>
          ))}
        </div>
      </section>
      {/* 1. Section Nouveautés HuggingFace */}
      <section className="mt-20 max-w-6xl mx-auto px-6">
        {/* 🧪 Explication Nouveautés */}
        <div className="flex items-start gap-3 bg-zinc-800/60 border border-zinc-700 p-4 rounded-xl mb-6">
          <span className="text-cyan-400 text-xl">🧪</span>
          <div>
            <h3 className="font-semibold text-cyan-300 mb-1">Dernières nouveautés</h3>
            <p className="text-sm text-gray-400">
              Découvrez les modèles IA les plus récents, fraîchement publiés ou mis à jour sur Hugging Face. L’idéal pour rester à la pointe !
            </p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">🧪 Nouveautés Hugging Face</h2>
        <p className="text-gray-400 mb-6">Modèles IA récemment publiés ou mis à jour sur la plateforme Hugging Face.</p>
        <p className="text-sm text-gray-500 italic mb-4">Cliquez sur une IA pour en savoir plus sur Hugging Face.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hfModels.slice(0, 6).map((model, i) => (
            <a key={i} href={`https://huggingface.co/${model.modelId}`} target="_blank" rel="noopener noreferrer"
              className="relative group block bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition h-full overflow-hidden">
              <h3 className="text-white font-bold mb-1 flex items-center gap-2">🧠 {model.modelId}</h3>
              <p className="text-cyan-400 text-sm mb-1">{model.pipeline_tag || "Type inconnu"}</p>
              <p className="text-gray-400 text-sm line-clamp-3">{model.description || "Modèle récent sans description."}</p>
              <span className="absolute top-4 right-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition">
                🔗
              </span>
            </a>
          ))}
        </div>
      </section>
      {/* 🔥 Section Populaires (top likes/downloads) */}
      <section className="mt-32 max-w-6xl mx-auto px-6">
        {/* 🔥 Explication Populaires */}
        <div className="flex items-start gap-3 bg-zinc-800/60 border border-zinc-700 p-4 rounded-xl mb-6">
          <span className="text-indigo-400 text-xl">🔥</span>
          <div>
            <h3 className="font-semibold text-indigo-300 mb-1">Modèles stars</h3>
            <p className="text-sm text-gray-400">
              Ces modèles sont les plus téléchargés ou aimés. Une valeur sûre pour vos projets IA ou vos tests personnels.
            </p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4">🔥 Les plus populaires</h2>
        <p className="text-gray-400 mb-6">Modèles IA les plus téléchargés ou likés sur Hugging Face.</p>
        <p className="text-sm text-gray-500 italic mb-4">Cliquez sur une IA pour en savoir plus sur Hugging Face.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topModels.map((model) => {
            const name = model.cardData?.name || model.modelId || model.name
            const description = model.cardData?.description || model.description || "Modèle populaire sans description détaillée."
            const pipeline = model.pipeline_tag || "IA"
            const thumb = model.cardData?.thumbnail

            const emojiMap: Record<string, string> = {
              "text-generation": "📝",
              "image-classification": "🖼️",
              "fill-mask": "🔍",
              "sentence-similarity": "🔗",
              "token-classification": "🏷️",
              "text2text-generation": "🔄",
            }

            const colorMap: Record<string, string> = {
              "text-generation": "text-pink-400",
              "image-classification": "text-yellow-400",
              "fill-mask": "text-green-400",
              "sentence-similarity": "text-blue-400",
              "token-classification": "text-orange-400",
              "text2text-generation": "text-teal-400",
            }

            return (
              <a
                key={model.id}
                href={`https://huggingface.co/${model.modelId || model.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition overflow-hidden"
              >
                {thumb && (
                  <img src={thumb} alt={name} className="rounded-md w-full h-32 object-cover mb-3" />
                )}
                <h3 className="text-white font-bold mb-1 flex items-center gap-2">
                  ⭐️ {name}
                </h3>
                <p className={`${colorMap[pipeline] || "text-gray-400"} text-sm mb-1`}>
                  {emojiMap[pipeline] || "🤖"} {pipeline}
                </p>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {description}
                </p>
                <span className="absolute top-4 right-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition">
                  🔗
                </span>
              </a>
            )
          })}
        </div>
      </section>
      {/* 3. Section triée par spécialités uniques */}
      <section className="mt-32 max-w-6xl mx-auto px-6">
        {/* 🗂️ Explication par spécialité */}
        <div className="flex items-start gap-3 bg-zinc-800/60 border border-zinc-700 p-4 rounded-xl mb-6">
          <span className="text-amber-400 text-xl">🗂️</span>
          <div>
            <h3 className="font-semibold text-amber-300 mb-1">Tri par usage</h3>
            <p className="text-sm text-gray-400">
              Explorez des modèles IA classés par spécialité : NLP, classification, génération de texte... Chaque domaine a ses pépites.
            </p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">🗂️ Explorer par spécialité</h2>
        <p className="text-gray-400 mb-6">Découvrez nos modèles IA triés par usage spécifique : NLP, classification, génération, etc.</p>
        <p className="text-sm text-gray-500 italic mb-4">Cliquez sur une IA pour en savoir plus sur Hugging Face.</p>

        {Object.entries(groupedModels)
          .filter(([, models]) => models.length > 0)
          .sort((a, b) => b[1].length - a[1].length)
          .map(([tag, models], i) => (
            <div key={i} className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-2">📌 {tag}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.slice(0, 3).map((model, j) => (
                  <a key={j} href={`https://huggingface.co/${model.modelId || model.name}`} target="_blank" rel="noopener noreferrer"
                    className="relative group block bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-amber-500 hover:shadow-lg hover:shadow-cyan-500/10 transition overflow-hidden">
                    <h4 className="text-white font-bold mb-1">{model.modelId || model.name}</h4>
                    <p className="text-amber-400 text-sm mb-1">{model.pipeline_tag || tag}</p>
                    <p className="text-gray-400 text-sm line-clamp-3">{model.description || "Modèle IA par usage spécifique."}</p>
                    <span className="absolute top-4 right-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition">
                      🔗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
      </section>
      <section className="mt-32 max-w-6xl mx-auto text-white text-center px-6">
        {/* 🚀 Explication applications concrètes */}
        <div className="flex items-start gap-3 bg-zinc-800/60 border border-zinc-700 p-4 rounded-xl mb-10 text-left">
          <span className="text-cyan-400 text-xl">🚀</span>
          <div>
            <h3 className="font-semibold text-cyan-300 mb-1">Exemples concrets</h3>
            <p className="text-sm text-gray-400">
              Inspirez-vous de cas d’usage réels pour comprendre comment l’IA peut booster votre activité ou vos projets.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-amber-400 mb-8">Applications concrètes</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {[
            {
              title: "Génération de contenu professionnel",
              content: "Utilisez des modèles de génération de texte pour créer des articles, posts ou rapports rapidement.",
            },
            {
              title: "Synthèse et résumé de documents",
              content: "Des modèles NLP permettent de résumer efficacement des documents complexes ou volumineux.",
            },
            {
              title: "Assistants virtuels intelligents",
              content: "Interagissez avec des assistants IA capables de comprendre et répondre à des questions métier.",
            },
          ].map((usecase, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/50 transition">
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">{usecase.title}</h3>
              <p className="text-gray-300 text-sm">{usecase.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mt-24">
        <h3 className="text-xl font-bold text-white mb-2">Prêt à découvrir l’IA ?</h3>
        <p className="text-gray-400 mb-4">Testez gratuitement ou contactez-nous pour un accompagnement personnalisé.</p>
        <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full transition">📩 Contactez-nous</Link>
      </section>
    </main>
  )
}