export const revalidate = 21600; // revalidate data every 6h to match HF cache

import { getModels, getTopModels } from "@/lib/huggingface";
import { groupModelsByCategory } from "@/lib/grouping";
import IADevPage from "./IADevPage";

export default async function IAHub() {
  // fetch in parallel to avoid waterfalls
  const [models, top] = await Promise.all([
    getModels(),
    getTopModels(6),
  ]);

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