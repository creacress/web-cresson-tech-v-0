import { getModels, getTopModels } from "./huggingface"
import { groupModelsByCategory, getBusinessTags } from "./grouping"

export async function getModelsByBusinessTag(tag: string, limit = 6) {
  const models = await getModels()
  const enriched = models.map((m: any) => ({
    ...m,
    businessTags: getBusinessTags(m)
  }))
  console.log("Models enrichis avec businessTags :", enriched.slice(0, 5))

  const filtered = enriched.filter((m: any) => {
    const hasTag = m.businessTags.includes(tag)
    if (hasTag) {
      console.log("✅ Match trouvé pour", tag, "dans le modèle :", m.modelId || m.id)
    }
    return hasTag
  })

  return filtered
    .sort((a: any, b: any) => (b.likes ?? 0) - (a.likes ?? 0))
    .slice(0, limit)
}