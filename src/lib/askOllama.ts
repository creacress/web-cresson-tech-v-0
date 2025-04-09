import { SITE_CONTEXT, SITE_LINKS } from '@/lib/context';

const SYSTEM_PROMPT = `
Tu es CressonBot, un assistant IA professionnel et concis pour les visiteurs du site WebCressonTech.

🎯 Ton objectif :
- Répondre en 2 à 4 phrases max
- Ne jamais recopier textuellement le contexte
- Ne citer une page du site que si c’est pertinent
- Si la question est hors sujet, répondre naturellement, sans mentionner le site

🛑 Tu ne dois JAMAIS réciter le contexte fourni. Utilise-le UNIQUEMENT pour formuler une réponse utile, pas comme une documentation.

💬 Sois direct, humain, informatif. Pas de liste, pas de bavardage, pas de ton marketing.
`;


// 🔍 Mots-clés pour déterminer si la question parle du site
function isSiteRelated(prompt: string): boolean {
  const keywords = [
    'site', 'webcresson', 'service', 'prix', 'tarif', 'audit', 'contact',
    'solution', 'page', 'offre', 'expertise', 'cas client', 'devis'
  ];
  return keywords.some(kw => prompt.toLowerCase().includes(kw));
}

// 🔗 Dictionnaire des pages du site
function findRelevantLink(prompt: string): string | null {
  const lowerPrompt = prompt.toLowerCase();
  for (const [key, url] of Object.entries(SITE_LINKS)) {
    if (lowerPrompt.includes(key.toLowerCase())) {
      return url;
    }
  }
  return null;
}

export async function askOllama(prompt: string): Promise<string> {
  const useContext = isSiteRelated(prompt);
  const relevantLink = findRelevantLink(prompt);

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    
    {
      role: 'user',
      content: isSiteRelated(prompt)
        ? `${prompt}\n\nContexte utile (à ne pas recopier) :\n${SITE_CONTEXT}`
        : prompt,
    }
    
  ];

  try {
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral',
        messages,
        stream: false,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('⛔ Erreur Ollama :', errorText);
      throw new Error(`Erreur HTTP ${res.status}`);
    }

    const data = await res.json();
    const baseAnswer = data.message?.content ?? "Désolé, je n'ai pas de réponse.";

    return relevantLink
      ? `${baseAnswer}\n\n🔗 Plus d'infos ici : ${relevantLink}`
      : baseAnswer;

  } catch (error) {
    console.error('🔥 Erreur dans askOllama:', error);
    return "Erreur serveur. Essaie plus tard !";
  }
}
