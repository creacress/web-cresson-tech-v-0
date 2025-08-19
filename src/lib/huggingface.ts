"use server"

import fs from "fs/promises"
import path from "path"

const MODELS_CACHE_PATH = path.resolve("./public/hfModelsCache.json")
const TOP_MODELS_CACHE_PATH = path.resolve("./public/hfTopModelsCache.json")
const CACHE_DURATION = 1000 * 60 * 60 * 6 // 6h

export async function getModels(limit: number = 1000) {
  const stat = await fs.stat(MODELS_CACHE_PATH).catch(() => null)
  const isFresh = stat && Date.now() - stat.mtimeMs < CACHE_DURATION

  if (isFresh) {
    const content = await fs.readFile(MODELS_CACHE_PATH, "utf-8")
    return JSON.parse(content)
  }

  const res = await fetch(`https://huggingface.co/api/models?limit=${limit}`, {
    headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN || ""}` },
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Erreur Hugging Face")
  const data = await res.json()

  await fs.writeFile(MODELS_CACHE_PATH, JSON.stringify(data), "utf-8")
  return data
}

export async function getTopModels(limit: number = 100) {
  const stat = await fs.stat(TOP_MODELS_CACHE_PATH).catch(() => null)
  const isFresh = stat && Date.now() - stat.mtimeMs < CACHE_DURATION

  if (isFresh) {
    const content = await fs.readFile(TOP_MODELS_CACHE_PATH, "utf-8")
    return JSON.parse(content)
  }

  const url = `https://huggingface.co/api/models?sort=downloads&direction=-1&limit=${limit}`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN || ""}` },
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Erreur Hugging Face (top models)")
  const data = await res.json()

  await fs.writeFile(TOP_MODELS_CACHE_PATH, JSON.stringify(data), "utf-8")
  return data
}