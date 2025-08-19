"use server"

import fs from "fs/promises"
import path from "path"

// Répertoire de cache runtime (RW en prod, ex: Vercel = /tmp)
const RUNTIME_CACHE_DIR = process.env.VERCEL
  ? "/tmp/hf-cache"
  : path.resolve("./.cache/hf-cache")

const CACHE_DURATION = 1000 * 60 * 60 * 6 // 6h

async function ensureCacheDir() {
  try { await fs.mkdir(RUNTIME_CACHE_DIR, { recursive: true }) } catch {}
}

function cachePath(filename: string) {
  return path.join(RUNTIME_CACHE_DIR, filename)
}

async function readJsonSafe<T = any>(p: string): Promise<T | null> {
  try {
    const stat = await fs.stat(p)
    if (Date.now() - stat.mtimeMs < CACHE_DURATION) {
      const content = await fs.readFile(p, "utf-8")
      return JSON.parse(content) as T
    }
  } catch {}
  return null
}

async function writeJsonSafe(p: string, data: unknown) {
  try {
    await ensureCacheDir()
    await fs.writeFile(p, JSON.stringify(data), "utf-8")
  } catch {
    // En environnements RO (edge/serverless), ignorer l'écriture
  }
}

function authHeaders() {
  const token = process.env.HUGGINGFACE_TOKEN
  return token ? { Authorization: `Bearer ${token}` } : undefined
}

export async function getModels(limit: number = 1000) {
  const file = cachePath("hfModelsCache.json")
  const cached = await readJsonSafe(file)
  if (cached) return cached

  const res = await fetch(`https://huggingface.co/api/models?limit=${limit}` , {
    headers: authHeaders(),
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`Erreur Hugging Face (${res.status})`)
  const data = await res.json()
  await writeJsonSafe(file, data)
  return data
}

export async function getTopModels(limit: number = 100) {
  const file = cachePath("hfTopModelsCache.json")
  const cached = await readJsonSafe(file)
  if (cached) return cached

  const url = `https://huggingface.co/api/models?sort=downloads&direction=-1&limit=${limit}`
  const res = await fetch(url, {
    headers: authHeaders(),
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`Erreur Hugging Face (top models) (${res.status})`)
  const data = await res.json()
  await writeJsonSafe(file, data)
  return data
}