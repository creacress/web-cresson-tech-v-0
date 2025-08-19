export const runtime = "nodejs";
export const revalidate = 21600; // revalidate data every 6h to match HF cache

import { getModels, getTopModels } from "@/lib/huggingface";
import { groupModelsByCategory } from "@/lib/grouping";
import IADevPage from "./IADevPage";

export default async function IAHub() {
  // Fetch en parallèle + tolérance aux erreurs pour éviter un 500 RSC en prod
  const [modelsRes, topRes] = await Promise.allSettled([
    getModels(),
    getTopModels(6),
  ]);

  const models: any[] = modelsRes.status === "fulfilled" ? modelsRes.value : [];
  const top: any[] = topRes.status === "fulfilled" ? topRes.value : [];

  const groupedModels = groupModelsByCategory(models);
  const topSorted = [...top].sort((a: any, b: any) => (b.likes ?? 0) - (a.likes ?? 0));

  return (
    <IADevPage
      hfModels={models}
      groupedModels={groupedModels}
      topModels={topSorted}
    />
  );
}