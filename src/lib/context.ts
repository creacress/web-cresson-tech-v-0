// src/lib/context.ts

// Connaissance du site WebCressonTech
export const SITE_CONTEXT = `
Voici les pages clés du site WebCressonTech. 
Tu peux t’appuyer dessus pour répondre aux utilisateurs avec pertinence, sans jamais inventer de section :

- Page d’accueil (/): Vue d’ensemble de WebCressonTech, notre mission, et ce qu’on peut faire pour vous avec l’IA et l’automatisation.
- IA pour la finance (/solutions/ia-finance): Comment l’IA peut booster la détection de fraude, la prévision et l’analyse financière.
- IA pour les RH (/solutions/ia-ressources-humaines): On automatise le tri de CV, les entretiens vidéo, la gestion des talents.
- IA en santé (/solutions/ia-sante): Prédiction médicale, traitement de données patient, ou analyse d’imagerie médicale.
- IA pour la logistique (/solutions/logistique-ia): Optimisation des tournées, prévision de stock, robotisation des tâches.
- Tarifs (/pricing): Nos forfaits classiques pour vos projets IA & automatisation.
- Tarifs custom (/pricing/custom): Pour les projets sur-mesure qui ne rentrent dans aucune case (et on adore ça).
- Scraping intelligent (/scraping-intelligent): Outils pour collecter et structurer des données web sans prise de tête.
- Page de contact (/contact): Pour discuter avec nous. Promis, on mord pas.
- À propos (/about): L’histoire, l’équipe, notre vision, et pourquoi on fait ce métier avec passion.
- Études de cas (/etude-de-cas): Ce qu’on a déjà fait concrètement. Spoiler : ça marche bien.
- Audit gratuit IA (/services/audit-gratuit): On analyse vos process gratuitement et on vous dit ce qu’on peut automatiser.
- Deep Learning (/services/deep-learning): Réseaux neuronaux puissants pour vos modèles prédictifs ou de vision.
- IA en archéologie (/services/ia-archeologie): Oui oui, même ça. On scanne, on classe, on révèle.
- IA générative (/services/ia-generative): Chatbots, texte, image, son : vos contenus créés par IA.
- BI & IA (/services/bi-ia): Analyse augmentée de données, dashboards intelligents.
- Machine Learning avancé (/services/machine-learning-deep-learning): Pour aller plus loin que l’automatisation simple.
- IA généraliste (/services/intelligence-artificielle): Page qui regroupe tout ce qu’on peut faire avec de l’IA.
- Machine Learning (/services/machine-learning): Modèles prédictifs, classifieurs, recommandations… classiques mais efficaces.
- Page services (/services/page-services): Liste complète de nos expertises techniques et sectorielles.
- RPA & automatisation (/services/rpa-automatisation): Robots logiciels pour supprimer les tâches manuelles ennuyeuses.
- CGV (/terms-of-sale): Les petites lignes (mais on reste cool).
- Mentions légales (/legal-mentions): Le juridique obligatoire, sans chichi.
`;

export const SITE_LINKS: Record<string, string> = {
    services: 'https://webcresson.com/services/page-services',
    audit: 'https://webcresson.com/services/audit-gratuit',
    contact: 'https://webcresson.com/contact',
    tarifs: 'https://webcresson.com/pricing',
    deepLearning: 'https://webcresson.com/services/deep-learning',
    scraping: 'https://webcresson.com/scraping-intelligent',
    etudes: 'https://webcresson.com/etude-de-cas',
    about: 'https://webcresson.com/about',
    rpa: 'https://webcresson.com/services/rpa-automatisation',
  };
export const SITE_NAME = 'WebCressonTech';
export const SITE_DESCRIPTION =
  'WebCressonTech est une société spécialisée dans l’IA et l’automatisation. Nous aidons les entreprises à optimiser leurs processus grâce à des solutions sur mesure.';
export const SITE_URL = 'https://webcresson.com';  
