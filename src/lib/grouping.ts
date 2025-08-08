// -----------------------------------------------------------------------------
// grouping.ts – Regroupement des modèles + tags métier intelligents (SEO friendly)
// -----------------------------------------------------------------------------
// Objectif:
//  - Grouper les modèles Hugging Face en catégories stables (Vision, NLP, Audio…)
//  - Déduire des "businessTags" pertinents (TPE, PME, Marketing, E‑commerce, RH…)
//  - Préserver la compatibilité avec le code existant (signatures exportées)
// -----------------------------------------------------------------------------

export type HFModel = {
  id: string
  likes?: number
  pipeline_tag?: string
  task?: string
  name?: string
  tags?: string[]
  businessTags?: string[]
  [key: string]: any
}

// Labels de catégories (avec emojis pour l'UI)
const CAT_TEXT_GEN = "📝 Génération de texte"
const CAT_NLP = "🧠 NLP"
const CAT_VISION = "🖼️ Vision"
const CAT_OCR = "🔎 OCR"
const CAT_AUDIO = "🎧 Audio"
const CAT_MULTIMODAL = "🧩 Multimodal"
const CAT_AGENT = "🤖 Agent"
const CAT_AUTRES = "📦 Autres"

// Aliases courants -> catégorie
const CATEGORY_ALIASES: Record<string, string> = {
  // Texte / NLP
  "text-generation": CAT_TEXT_GEN,
  "text-classification": CAT_NLP,
  "token-classification": CAT_NLP,
  "question-answering": CAT_NLP,
  "summarization": CAT_NLP,
  "translation": CAT_NLP,
  "fill-mask": CAT_NLP,
  "sentence-similarity": CAT_NLP,
  "text-ranking": CAT_NLP,

  // Vision / OCR
  "image-classification": CAT_VISION,
  "zero-shot-image-classification": CAT_VISION,
  "object-detection": CAT_VISION,
  "image-segmentation": CAT_VISION,
  "image-to-image": CAT_VISION,
  "image-to-text": CAT_VISION,
  "ocr": CAT_OCR,
  "visual-document-retrieval": CAT_OCR,

  // Audio
  "automatic-speech-recognition": CAT_AUDIO,
  "speech-to-text": CAT_AUDIO,
  "text-to-speech": CAT_AUDIO,
  "audio-classification": CAT_AUDIO,
  "audio-text-to-text": CAT_AUDIO,
  "text-to-audio": CAT_AUDIO,

  // Multimodal / Agents
  "image-text-to-text": CAT_MULTIMODAL,
  "multimodal": CAT_MULTIMODAL,
  "any-to-any": CAT_MULTIMODAL,
  "agent": CAT_AGENT,
}

// --- Helpers internes --------------------------------------------------------
function normList(l?: string[]): string[] {
  return (l || []).map((x) => x?.toLowerCase?.() || "").filter(Boolean)
}

function getCategory(model: HFModel): string {
  const tag = (model.pipeline_tag || model.task || "").toLowerCase()
  if (CATEGORY_ALIASES[tag]) return CATEGORY_ALIASES[tag]

  const tags = normList(model.tags)
  const name = `${model.name || model.id}`.toLowerCase()
  const hay = (k: string) => name.includes(k) || tags.some((t) => t.includes(k))

  // Heuristiques
  if (hay("layoutlm") || hay("invoice") || hay("document-ai") || hay("ocr")) return CAT_OCR
  if (hay("yolo") || hay("detect") || hay("vision") || hay("segmentation")) return CAT_VISION
  if (hay("asr") || hay("speech") || hay("audio")) return CAT_AUDIO
  if (hay("llava") || hay("blip") || hay("multimodal")) return CAT_MULTIMODAL
  if (hay("tool-calling") || hay("agent") || hay("assistant")) return CAT_AGENT
  if (hay("generate") || hay("llm") || hay("gpt")) return CAT_TEXT_GEN

  return CAT_NLP
}

// ----------------------------------------------------------------------------
// Tags métiers intelligents – utilisés par les filtres de la page
// ----------------------------------------------------------------------------
export function getBusinessTags(model: any): string[] {
  const m = model as HFModel
  const name = `${m.name || m.id}`.toLowerCase()
  const tags = normList(m.tags)
  const has = (keys: string[]) => keys.some((k) => name.includes(k) || tags.some((t) => t.includes(k)))

  const out = new Set<string>()

  // E‑commerce / Marketing
  if (has(["recommend", "recsys", "ctr", "ab-test", "product", "catalog", "retrieval", "search"])) out.add("E-commerce")
  if (has(["sentiment", "keyword", "topic", "summariz", "seo", "copy", "ad", "classification"])) out.add("Marketing")

  // RH / Relation client
  if (has(["resume", "cv", "skills", "matching", "ner"])) out.add("RH")
  if (has(["assistant", "chat", "intent", "faq", "asr", "speech", "tts"])) out.add("Relation client")

  // Industrie / logistique
  if (has(["yolo", "barcode", "defect", "inspection", "layoutlm", "invoice", "ocr", "time-series"])) out.add("Industrie/logistique")

  // Taille par défaut (toujours pertinentes)
  out.add("TPE")
  out.add("PME")

  return Array.from(out)
}

// ----------------------------------------------------------------------------
// Groupement principal utilisé par la page (tri par likes desc)
// ----------------------------------------------------------------------------
export function groupModelsByCategory(models: any[]) {
  const groups: { [category: string]: HFModel[] } = {}

  for (const raw of models || []) {
    const model: HFModel = { ...raw }

    // Enrichir les businessTags si absents
    if (!model.businessTags || model.businessTags.length === 0) {
      model.businessTags = getBusinessTags(model)
    }

    const category = getCategory(model)
    if (!groups[category]) groups[category] = []
    groups[category].push(model)
  }

  // Tri par popularité dans chaque catégorie
  Object.keys(groups).forEach((cat) => {
    groups[cat].sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0))
  })

  return groups
}

// ----------------------------------------------------------------------------
// Cas d’usage (existant) – conservé pour compatibilité
// ----------------------------------------------------------------------------
export function getUseCasesByPipelineTag(tag: string): string[] {
  const useCaseMap: Record<string, string[]> = {
    "text-generation": [
      "Génération automatique d'emails",
      "Création de contenu marketing",
      "Rédaction assistée",
    ],
    "summarization": [
      "Résumé de rapports RH",
      "Synthèse de mails clients",
      "Lecture rapide de documents",
    ],
    "translation": [
      "Traduction de documents techniques",
      "Traduction de pages produit",
    ],
    "question-answering": [
      "Chatbot interne",
      "FAQ automatique",
      "Support client IA",
    ],
    "text-classification": [
      "Tri d'e-mails",
      "Analyse de sentiments",
      "Détection de spam",
    ],
    "image-classification": [
      "Contrôle qualité visuel",
      "Reconnaissance d’objets",
      "Inspection automatisée",
    ],
    "object-detection": [
      "Détection de défauts produits",
      "Sécurité périmétrique",
      "Analyse de scènes",
    ],
    "audio-classification": [
      "Reconnaissance vocale",
      "Transcription de réunions",
      "Commandes vocales",
    ],
    "zero-shot-classification": [
      "Catégorisation sans entraînement",
      "Analyse de tickets SAV",
      "Étiquetage dynamique",
    ],
    "text-to-image": [
      "Création d'illustrations à partir de descriptions",
      "Génération de visuels marketing",
    ],
    "text-to-video": [
      "Production de vidéos explicatives automatiques",
      "Création de clips promotionnels",
    ],
    "image-to-3d": [
      "Modélisation 3D à partir d'images",
      "Prototypage rapide de produits",
    ],
    "image-text-to-text": [
      "Résumé de documents avec images",
      "Extraction d'informations combinées",
    ],
    "automatic-speech-recognition": [
      "Transcription automatique de conférences",
      "Sous-titrage en temps réel",
    ],
    "feature-extraction": [
      "Extraction de caractéristiques pour analyse",
      "Prétraitement de données visuelles",
    ],
    "conversational": [
      "Assistants virtuels",
      "Chatbots de support client",
    ],
    "speech-to-text": [
      "Transcription vocale pour CRM",
      "Analyse de conversations téléphoniques",
    ],
    "text-to-speech": [
      "Synthèse vocale pour assistants",
      "Lecture automatisée de contenu",
    ],
    "image-to-text": [
      "Reconnaissance de texte dans les images",
      "Automatisation de saisie de données",
    ],
    "fill-mask": [
      "Correction automatique de texte",
      "Suggestions de complétion",
    ],
    "token-classification": [
      "Extraction d'entités nommées",
      "Analyse syntaxique",
    ],
    "image-to-video": [
      "Création de vidéos à partir d'images",
      "Animations promotionnelles",
    ],
    "image-to-image": [
      "Amélioration d'images",
      "Transformation de style visuel",
    ],
    "sentence-similarity": [
      "Recherche sémantique",
      "Détection de plagiat",
    ],
    "audio-text-to-text": [
      "Transcription enrichie",
      "Analyse de contenu audio",
    ],
    "text-to-audio": [
      "Création de podcasts automatisés",
      "Génération de messages audio",
    ],
    "any-to-any": [
      "Conversion multi-format",
      "Interopérabilité de données",
    ],
    "video-text-to-text": [
      "Résumé automatique de vidéos",
      "Analyse de contenu vidéo",
    ],
    "visual-document-retrieval": [
      "Recherche dans documents scannés",
      "Indexation de contenus visuels",
    ],
    "text-ranking": [
      "Classement de résultats de recherche",
      "Priorisation de contenu",
    ],
    "zero-shot-image-classification": [
      "Classification rapide sans données d'entraînement",
      "Identification d'objets inconnus",
    ],
    "visual-question-answering": [
      "Réponses automatiques sur images",
      "Support visuel interactif",
    ],
    "robotics": [
      "Contrôle de robots autonomes",
      "Automatisation industrielle",
    ],
    "image-feature-extraction": [
      "Extraction de points clés d'images",
      "Analyse de contenu visuel",
    ],
    "image-segmentation": [
      "Segmentation pour imagerie médicale",
      "Détection de zones d'intérêt",
    ],
    "mask-generation": [
      "Création de masques pour retouche",
      "Préparation de données annotées",
    ],
    "time-series-forecasting": [
      "Prévision de ventes",
      "Analyse de tendances financières",
    ],
    "tabular-classification": [
      "Classification de données tabulaires",
      "Analyse de risque",
    ],
    "zero-shot-object-detection": [
      "Détection d'objets sans entraînement spécifique",
      "Surveillance intelligente",
    ],
  }
  return useCaseMap[tag] || ["Autres cas d’usage IA pro"]
}