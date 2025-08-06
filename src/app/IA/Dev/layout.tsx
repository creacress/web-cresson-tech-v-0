export const metadata = {
    title: "Outils et modèles d’Intelligence Artificielle | Web Cresson Tech",
    description: "Découvrez les meilleurs modèles IA sur Hugging Face pour générer du texte, résumer, classer… adaptés aux usages professionnels.",
    keywords: [
        "intelligence artificielle",
        "modèles IA",
        "Hugging Face",
        "NLP",
        "génération de texte",
        "résumé automatique",
        "classification de texte",
        "chatbots",
        "automatisation des processus"
    ],
    robots: "index, follow",
    openGraph: {
        title: "Outils et modèles d’Intelligence Artificielle | Web Cresson Tech",
        description: "Découvrez les meilleurs modèles IA sur Hugging Face pour générer du texte, résumer, classer… adaptés aux usages professionnels.",
        url: "https://webcresson.com/IA/Dev",
        siteName: "Web Cresson Tech",
        type: "website",
        locale: "fr_FR",
        images: [
            {
                url: "https://webcresson.com/images/Logo_webcressontech.webp",
                width: 1200,
                height: 630,
                alt: "Web Cresson Tech"
            }
        ]
    },
    alternates: {
      canonical: "https://webcresson.com/IA/Dev",
    },
  }
  
  export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
  }