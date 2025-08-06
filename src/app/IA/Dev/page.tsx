import dynamic from 'next/dynamic'
import VoiceAgent from "@/components/VoiceAgent"
import IAServiceCard from "@/components/IAServiceCard"
import { getModels, getTopModels } from "@/lib/huggingface"
import { groupModelsByCategory } from "@/lib/grouping"
import IADevPage from './IADevPage'

// TODO: Ajouter gestion SEO avec next/head ou metadata côté serveur

export default async function IAHub() {
  const models = await getModels()
  const groupedModels = groupModelsByCategory(models)
  const top = await getTopModels(6)
  const topSorted = top.sort((a: any, b: any) => (b.likes ?? 0) - (a.likes ?? 0))

  return (
    <IADevPage
      hfModels={models}
      groupedModels={groupedModels}
      topModels={topSorted}
    />
  )
}