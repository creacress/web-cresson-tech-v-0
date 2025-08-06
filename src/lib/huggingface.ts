import fs from "fs/promises"
import path from "path"

const MODELS_CACHE_PATH = path.resolve("./public/hfModelsCache.json")
const TOP_MODELS_CACHE_PATH = path.resolve("./public/hfTopModelsCache.json")
const CACHE_DURATION = 1000 * 60 * 60 * 6 // 6 heures

export async function getModels(limit: number = 1000) {
  try {
    const stat = await fs.stat(MODELS_CACHE_PATH)
    const isFresh = Date.now() - stat.mtimeMs < CACHE_DURATION

    if (isFresh) {
      const content = await fs.readFile(MODELS_CACHE_PATH, "utf-8")
      return JSON.parse(content)
    }
  } catch {
    console.log("📦 Aucun cache valide pour getModels.")
  }

  const res = await fetch(`https://huggingface.co/api/models?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN || ""}`,
    },
  })

  if (!res.ok) throw new Error("Erreur lors de la récupération des modèles Hugging Face")

  const data = await res.json()
  await fs.writeFile(MODELS_CACHE_PATH, JSON.stringify(data), "utf-8")
  return data
}

export async function getModelDetails(modelId: string) {
  const res = await fetch(`https://huggingface.co/api/models/${modelId}`, {
    headers: {
      Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN || ""}`,
    },
  })
  if (!res.ok) throw new Error(`Erreur lors de la récupération de ${modelId}`)
  return res.json()
}

export async function getTopModels(limit: number = 10) {
  try {
    const stat = await fs.stat(TOP_MODELS_CACHE_PATH)
    const isFresh = Date.now() - stat.mtimeMs < CACHE_DURATION

    if (isFresh) {
      const content = await fs.readFile(TOP_MODELS_CACHE_PATH, "utf-8")
      return JSON.parse(content)
    }
  } catch {
    console.log("📦 Aucun cache valide pour getTopModels.")
  }

  const res = await fetch(`https://huggingface.co/api/models?sort=downloads&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN || ""}`,
    },
  })

  if (!res.ok) throw new Error("Erreur lors de la récupération des top modèles")

  const data = await res.json()
  await fs.writeFile(TOP_MODELS_CACHE_PATH, JSON.stringify(data), "utf-8")
  return data
}