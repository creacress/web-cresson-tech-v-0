function getPipelineCategory(tag: string) {
    const categories: Record<string, string> = {
      "text-generation": "📝 Génération de texte",
      "text-classification": "🏷️ Classification de texte",
      "image-classification": "🖼️ Classification d’image",
      "object-detection": "🎯 Détection d’objets",
      "text-to-image": "🎨 Texte vers image",
      "text-to-video": "🎞️ Texte vers vidéo",
      "image-to-3d": "🏗️ Image vers 3D",
      "image-text-to-text": "🔄 Image+Texte vers Texte",
      "automatic-speech-recognition": "🧠 Reconnaissance vocale automatique",
      "feature-extraction": "📊 Extraction de caractéristiques",
      "question-answering": "❓ Question/Réponse",
      "translation": "🌍 Traduction",
      "conversational": "💬 Conversation",
      "summarization": "🧾 Résumé",
      "speech-to-text": "🎙️ Audio vers texte",
      "text-to-speech": "🔊 Texte vers audio",
      "image-to-text": "🖼️→📝 Image vers texte",
      "fill-mask": "🧩 Remplir les blancs",
      "token-classification": "🔤 Étiquetage de tokens",
      "image-to-video": "🎬 Image vers vidéo",
      "image-to-image": "🖼️→🖼️ Image vers image",
      "sentence-similarity": "🔗 Similarité de phrases",
      "audio-text-to-text": "🔄 Audio+Texte vers Texte",
      "text-to-audio": "📝→🔊 Texte vers audio",
      "any-to-any": "🔁 Toute entrée vers toute sortie",
      "video-text-to-text": "🎞️→📝 Vidéo vers texte",
      "visual-document-retrieval": "📄🔍 Recherche documentaire visuelle",
      "text-ranking": "📊 Classement de texte",
      "zero-shot-image-classification": "🖼️❌ Classification image sans apprentissage",
      "visual-question-answering": "🖼️❓ Q/R visuelle",
      "zero-shot-classification": "❌🏷️ Classification sans apprentissage",
      "robotics": "🤖 Robotique",
      "image-feature-extraction": "🖼️📊 Extraction de caractéristiques image",
      "image-segmentation": "🖼️✂️ Segmentation d'image",
      "audio-classification": "🔉🏷️ Classification audio",
      "mask-generation": "🎭 Génération de masque",
      "time-series-forecasting": "📈 Prédiction séries temporelles",
      "tabular-classification": "📋🏷️ Classification tabulaire",
      "zero-shot-object-detection": "🎯❌ Détection d’objet sans apprentissage"
    };
  
    return categories[tag] || "📦 Autres";
  }
  
  export function getBusinessTags(model: any): string[] {
    const tagMap: Record<string, string[]> = {
      "text-generation": ["Marketing", "Relation client", "TPE", "PME"],
      "summarization": ["Marketing", "RH", "TPE", "PME"],
      "text-ranking": ["Marketing"],
      "sentence-similarity": ["RH", "E-commerce"],
      "translation": ["Marketing", "Relation client", "PME"],
      "conversational": ["Relation client"],
      "question-answering": ["Relation client", "RH"],
      "speech-to-text": ["Relation client"],
      "text-to-speech": ["Relation client"],
      "image-classification": ["E-commerce", "Industrie/logistique", "TPE"],
      "image-segmentation": ["Industrie/logistique"],
      "object-detection": ["Industrie/logistique"],
      "feature-extraction": ["Industrie/logistique"],
      "audio-classification": ["Industrie/logistique"],
      "time-series-forecasting": ["Industrie/logistique"],
      "zero-shot-classification": ["RH", "Marketing", "TPE", "PME"],
      "zero-shot-image-classification": ["E-commerce"],
      "visual-question-answering": ["E-commerce", "TPE", "PME"],
      "tabular-classification": ["RH"]
    };

    return tagMap[model.pipeline_tag] || [];
  }

export function groupModelsByCategory(models: any[]) {
  const groups: { [category: string]: any[] } = {}

  for (const model of models) {
    const category = getPipelineCategory(model.pipeline_tag)
    if (!groups[category]) {
      groups[category] = []
    }
    model.businessTags = getBusinessTags(model);
    groups[category].push(model)
  }

  return groups
}

// Mapping des cas d’usage concrets pour chaque pipeline_tag
export function getUseCasesByPipelineTag(tag: string): string[] {
  const useCaseMap: Record<string, string[]> = {
    "text-generation": [
      "Génération automatique d'emails",
      "Création de contenu marketing",
      "Rédaction assistée"
    ],
    "summarization": [
      "Résumé de rapports RH",
      "Synthèse de mails clients",
      "Lecture rapide de documents"
    ],
    "translation": [
      "Traduction de documents techniques",
      "Traduction de pages produit"
    ],
    "question-answering": [
      "Chatbot interne",
      "FAQ automatique",
      "Support client IA"
    ],
    "text-classification": [
      "Tri d'e-mails",
      "Analyse de sentiments",
      "Détection de spam"
    ],
    "image-classification": [
      "Contrôle qualité visuel",
      "Reconnaissance d’objets",
      "Inspection automatisée"
    ],
    "object-detection": [
      "Détection de défauts produits",
      "Sécurité périmétrique",
      "Analyse de scènes"
    ],
    "audio-classification": [
      "Reconnaissance vocale",
      "Transcription de réunions",
      "Commandes vocales"
    ],
    "zero-shot-classification": [
      "Catégorisation sans entraînement",
      "Analyse de tickets SAV",
      "Étiquetage dynamique"
    ],
    "text-to-image": [
      "Création d'illustrations à partir de descriptions",
      "Génération de visuels marketing"
    ],
    "text-to-video": [
      "Production de vidéos explicatives automatiques",
      "Création de clips promotionnels"
    ],
    "image-to-3d": [
      "Modélisation 3D à partir d'images",
      "Prototypage rapide de produits"
    ],
    "image-text-to-text": [
      "Résumé de documents avec images",
      "Extraction d'informations combinées"
    ],
    "automatic-speech-recognition": [
      "Transcription automatique de conférences",
      "Sous-titrage en temps réel"
    ],
    "feature-extraction": [
      "Extraction de caractéristiques pour analyse",
      "Prétraitement de données visuelles"
    ],
    "conversational": [
      "Assistants virtuels",
      "Chatbots de support client"
    ],
    "speech-to-text": [
      "Transcription vocale pour CRM",
      "Analyse de conversations téléphoniques"
    ],
    "text-to-speech": [
      "Synthèse vocale pour assistants",
      "Lecture automatisée de contenu"
    ],
    "image-to-text": [
      "Reconnaissance de texte dans les images",
      "Automatisation de saisie de données"
    ],
    "fill-mask": [
      "Correction automatique de texte",
      "Suggestions de complétion"
    ],
    "token-classification": [
      "Extraction d'entités nommées",
      "Analyse syntaxique"
    ],
    "image-to-video": [
      "Création de vidéos à partir d'images",
      "Animations promotionnelles"
    ],
    "image-to-image": [
      "Amélioration d'images",
      "Transformation de style visuel"
    ],
    "sentence-similarity": [
      "Recherche sémantique",
      "Détection de plagiat"
    ],
    "audio-text-to-text": [
      "Transcription enrichie",
      "Analyse de contenu audio"
    ],
    "text-to-audio": [
      "Création de podcasts automatisés",
      "Génération de messages audio"
    ],
    "any-to-any": [
      "Conversion multi-format",
      "Interopérabilité de données"
    ],
    "video-text-to-text": [
      "Résumé automatique de vidéos",
      "Analyse de contenu vidéo"
    ],
    "visual-document-retrieval": [
      "Recherche dans documents scannés",
      "Indexation de contenus visuels"
    ],
    "text-ranking": [
      "Classement de résultats de recherche",
      "Priorisation de contenu"
    ],
    "zero-shot-image-classification": [
      "Classification rapide sans données d'entraînement",
      "Identification d'objets inconnus"
    ],
    "visual-question-answering": [
      "Réponses automatiques sur images",
      "Support visuel interactif"
    ],
    "robotics": [
      "Contrôle de robots autonomes",
      "Automatisation industrielle"
    ],
    "image-feature-extraction": [
      "Extraction de points clés d'images",
      "Analyse de contenu visuel"
    ],
    "image-segmentation": [
      "Segmentation pour imagerie médicale",
      "Détection de zones d'intérêt"
    ],
    "mask-generation": [
      "Création de masques pour retouche",
      "Préparation de données annotées"
    ],
    "time-series-forecasting": [
      "Prévision de ventes",
      "Analyse de tendances financières"
    ],
    "tabular-classification": [
      "Classification de données tabulaires",
      "Analyse de risque"
    ],
    "zero-shot-object-detection": [
      "Détection d'objets sans entraînement spécifique",
      "Surveillance intelligente"
    ]
  };
  return useCaseMap[tag] || ["Autres cas d’usage IA pro"];
}