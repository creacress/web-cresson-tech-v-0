"use client"
// Helper pour catégoriser les pipelines Hugging Face
export function getPipelineCategory(pipeline?: string): string {
  switch (pipeline) {
    case "text-generation":
    case "text2text-generation":
      return "Génération de texte"
    case "image-classification":
    case "image-segmentation":
    case "object-detection":
      return "Vision par ordinateur"
    case "text-classification":
    case "zero-shot-classification":
      return "Classification de texte"
    case "translation":
      return "Traduction"
    case "summarization":
      return "Résumé automatique"
    case "question-answering":
      return "Q/R automatique"
    case "audio-classification":
    case "automatic-speech-recognition":
      return "Analyse audio"
    default:
      return "Autres"
  }
}

import { useEffect, useState } from "react"
import { getUseCasesByPipelineTag } from "@/lib/grouping"

interface ModelCardProps {
  model: {
    id: string
    likes?: number
    downloads?: number
    pipeline_tag?: string
    library_name?: string
    businessTags?: string[]
  }
  isTop?: boolean
}

export default function ModelCardHuggingFace({ model, isTop }: ModelCardProps) {
  const [summary, setSummary] = useState("")

  useEffect(() => {
    console.log("Effet déclenché pour :", model.id);
    fetch(`/api/huggingface/${encodeURIComponent(model.id)}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Model details:", res);
        const summaryText =
          res.cardData?.summary ||
          res.cardData?.description ||
          res.description ||
          res.modelCard?.content ||
          res.pipeline_tag ||
          "Aucune description disponible."
        setSummary(summaryText)
      })
      .catch((err) => {
        console.error("Erreur de chargement du modèle :", err);
        setSummary("Erreur lors du chargement.")
      })
  }, [model.id])

  const useCases = getUseCasesByPipelineTag(model.pipeline_tag || "")
  const pipelineCategory = getPipelineCategory(model.pipeline_tag)
  const businessTagsToShow = model.businessTags ? model.businessTags.slice(0, 4) : []
  const remainingTagsCount = model.businessTags ? model.businessTags.length - businessTagsToShow.length : 0

  return (
    <a
      href={`/contact?model=${encodeURIComponent(model.id)}&pipeline=${encodeURIComponent(model.pipeline_tag || "")}`}
      className="w-full max-w-sm mx-auto relative pt-4 flex flex-col justify-between h-full min-h-[460px] bg-gradient-to-b from-gray-950 to-gray-900 p-6 rounded-2xl border border-cyan-800 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out"
      title={`Modèle ${model.id} – ${pipelineCategory}${model.businessTags && model.businessTags.length > 0 ? ` – ${model.businessTags.join(', ')}` : ''}`}
    >
      {isTop && (
        <div className="absolute -top-3 -right-3 bg-red-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10 animate-pulse">
          🔥 TOP
        </div>
      )}
      <h3 className="text-xl font-extrabold text-white mb-1 truncate">{model.id}</h3>
      <p className="text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wide">{pipelineCategory}</p>
      {(businessTagsToShow.length > 0 || model.library_name) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {businessTagsToShow.map((tag) => (
            <span key={tag} className="bg-cyan-900/40 border border-cyan-700 text-cyan-200 px-2 py-0.5 rounded-full backdrop-blur-sm">
              {tag}
            </span>
          ))}
          {remainingTagsCount > 0 && (
            <span className="bg-cyan-900/40 border border-cyan-700 text-cyan-200 px-2 py-0.5 rounded-full backdrop-blur-sm">
              +{remainingTagsCount}
            </span>
          )}
          {model.library_name && (
            <span className="bg-gray-800/60 border border-gray-600 text-gray-300 px-2 py-0.5 rounded-full backdrop-blur-sm">
              🛠 {model.library_name}
            </span>
          )}
        </div>
      )}
      <p aria-label={`Résumé du modèle ${model.id}`} className="text-sm text-gray-300 mb-4 line-clamp-4">
        {summary
          ? summary.slice(0, 160) + "..."
          : "Chargement de la description..."}
      </p>
      {useCases.length > 0 && (
        <ul className="text-xs text-gray-400 italic mb-4 list-disc list-inside">
          {useCases.map((useCase, idx) => (
            <li key={idx}>{useCase}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {/* Removed businessTags here as they are now above summary */}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
        <span>👍 {model.likes ?? 0}</span>
        <span>⬇️ {model.downloads ?? 0}</span>
      </div>
      <div className="mt-4 text-center text-sm font-semibold text-cyan-400 underline underline-offset-4 hover:text-white">
        👉 Je veux cette IA dans mon entreprise
      </div>
    </a>
  )
}