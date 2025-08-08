import type { Metadata } from "next"
import IAClientPage from "./IAClientPage"
import { getModels, getTopModels } from "@/lib/huggingface"
import { groupModelsByCategory } from "@/lib/grouping"

// Revalidation ISR: refresh data every hour (adapt as needed)
export const revalidate = 3600

// Full SEO handled server-side for this route
export const metadata: Metadata = {
  title: "IA pour TPE, PME & Startups – Modèles Hugging Face triés par besoins",
  description:
    "Catalogue d’IA métiers (NLP, vision, agents) avec filtres par secteur : TPE, PME, Marketing, E‑commerce, Industrie/logistique, RH, Relation client.",
  keywords: [
    "IA entreprise",
    "IA PME",
    "Hugging Face",
    "modèles IA",
    "automatisation",
    "NLP",
    "OCR",
    "agent IA",
    "e‑commerce",
    "RH",
  ],
  alternates: { canonical: "/IA" },
  openGraph: {
    title: "IA pour TPE, PME & Startups",
    description:
      "Les meilleurs modèles IA par cas d’usage. Filtrez, comparez et déployez rapidement.",
    type: "website",
    url: "/IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA pour TPE, PME & Startups",
    description:
      "Catalogue d’IA métiers (Hugging Face) avec filtres par secteur et modèles mis en avant.",
  },
  robots: { index: true, follow: true },
}

export default async function IAHub() {
  try {
    // Parallel server-side fetches
    const [models, top] = await Promise.all([
      getModels(500),
      getTopModels(9),
    ])

    const groupedModels = groupModelsByCategory(models)
    const topSorted = (top || []).sort((a: any, b: any) => (b.likes ?? 0) - (a.likes ?? 0))

    return (
      <IAClientPage
        hfModels={models}
        groupedModels={groupedModels}
        topModels={topSorted}
      />
    )
  } catch (err) {
    // Fail gracefully for SEO: render page with empty data instead of 500
    console.error("[IAHub] Data fetch error:", err)
    return (
      <IAClientPage hfModels={[]} groupedModels={{}} topModels={[]} />
    )
  }
}