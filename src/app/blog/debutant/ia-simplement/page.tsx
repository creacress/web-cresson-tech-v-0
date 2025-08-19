import React from 'react';
import NeonDivider from '@/components/ui/NeonDivider';

export const metadata = {
  title: "L’intelligence artificielle expliquée simplement",
  description: "Une introduction complète et accessible à l’intelligence artificielle, ses définitions, cas d’usage, et métaphores pour mieux comprendre.",
  openGraph: {
    title: "L’intelligence artificielle expliquée simplement",
    description: "Une introduction complète et accessible à l’intelligence artificielle, ses définitions, cas d’usage, et métaphores pour mieux comprendre.",
    url: "https://www.webcressontech.com/blog/debutant/ia-simplement",
    siteName: "Web Cresson Tech",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "L’intelligence artificielle expliquée simplement",
    description: "Une introduction complète et accessible à l’intelligence artificielle, ses définitions, cas d’usage, et métaphores pour mieux comprendre.",
    site: "@webcressontech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: 'https://www.webcressontech.com/blog/debutant/ia-simplement' },
};

export const viewport = {
  themeColor: '#0b0f1a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

function Section({ id, title, desc, children }: { id?: string; title?: string; desc?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="mx-auto my-16 max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_20px_80px_-20px_rgba(0,0,0,0.4)] animate-slide-up">
      {title && (
        <h2 id={id ? `${id}-title` : undefined} className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>
      )}
      {desc && <p className="mt-2 text-white/80 max-w-2xl">{desc}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`animated-card rounded-xl border border-white/15 bg-white/[0.06] p-5 ring-1 ring-white/5 hover:border-cyan-400/40 hover:bg-white/[0.08] transition ${className}`}>
      {children}
    </div>
  )
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "L’intelligence artificielle expliquée simplement",
  "description": "Une introduction complète et accessible à l’intelligence artificielle, ses définitions, cas d’usage, et métaphores pour mieux comprendre.",
  "author": {
    "@type": "Person",
    "name": "Web Cresson Tech"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Web Cresson Tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.webcressontech.com/logo.png"
    }
  },
  "url": "https://www.webcressontech.com/blog/debutant/ia-simplement",
  "mainEntityOfPage": "https://www.webcressontech.com/blog/debutant/ia-simplement",
  "datePublished": "2024-06-01",
  "dateModified": "2024-06-01"
};

export default function IASimplement() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-black/80 focus:px-4 focus:py-2 focus:text-white">Aller au contenu</a>
      <main id="content" className="max-w-5xl mx-auto px-6 py-12 font-sans text-white space-y-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 tracking-tight animate-fade-in-up">
          <span className="relative header-glow">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(56,189,248,0.45)]">
              L’intelligence artificielle expliquée simplement
            </span>
          </span>
        </h1>

        <Section>
          <article>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4 leading-relaxed">
              L’intelligence artificielle (IA) est un domaine fascinant qui transforme notre monde à une vitesse incroyable. Mais qu’est-ce que l’IA exactement ? Comment fonctionne-t-elle ? Et pourquoi est-elle si importante aujourd’hui ? Dans cet article, nous allons explorer ces questions de manière simple, claire et accessible à tous, sans jargon technique.
            </p>
            <p className="mb-4 leading-relaxed">
              Nous aborderons les définitions clés, des cas d’usage concrets, des métaphores pour mieux visualiser les concepts, ainsi que des schémas textuels pour clarifier les idées. Enfin, nous conclurons avec une réflexion sur l’avenir de l’IA.
            </p>
          </article>
        </Section>
        <NeonDivider />
        <Section>
          <article>
            <h2 className="text-2xl font-bold mb-4">Qu’est-ce que l’intelligence artificielle ?</h2>
            <p className="mb-4 leading-relaxed">
              L’intelligence artificielle désigne la capacité d’une machine à imiter des fonctions cognitives humaines telles que l’apprentissage, la résolution de problèmes, la reconnaissance vocale ou visuelle, et la prise de décision. Elle repose sur des algorithmes, des données, et souvent sur des réseaux de neurones artificiels inspirés du cerveau humain.
            </p>
            <p className="mb-4 leading-relaxed">
              Il existe plusieurs types d’IA :
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>IA faible (ou étroite) :</strong> conçue pour une tâche spécifique, comme la reconnaissance faciale ou les assistants vocaux.</li>
              <li><strong>IA générale :</strong> capable de comprendre, apprendre et appliquer des connaissances dans différents domaines, comme un humain.</li>
              <li><strong>IA superintelligente :</strong> hypothétique, surpassant l’intelligence humaine dans tous les domaines.</li>
            </ul>
          </article>
        </Section>
        <NeonDivider />
        <Section>
          <article>
            <h2 className="text-2xl font-bold mb-4">Cas d’usage de l’intelligence artificielle</h2>
            <p className="mb-4 leading-relaxed">
              L’IA est déjà présente dans notre quotidien, parfois sans que nous le réalisions. Voici quelques exemples concrets :
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Assistants personnels :</strong> Siri, Alexa, Google Assistant qui comprennent et répondent à nos questions.</li>
              <li><strong>Recommandations :</strong> Netflix, YouTube, Amazon utilisent l’IA pour suggérer des films, vidéos ou produits adaptés à nos goûts.</li>
              <li><strong>Voitures autonomes :</strong> Les véhicules capables de se conduire seuls grâce à des capteurs et algorithmes complexes.</li>
              <li><strong>Santé :</strong> Analyse d’images médicales pour détecter des maladies plus rapidement et avec précision.</li>
              <li><strong>Finance :</strong> Détection de fraudes, gestion de portefeuilles automatisée, trading algorithmique.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Ces cas d’usage montrent l’impact profond de l’IA sur différents secteurs et notre manière de vivre.
            </p>
          </article>
        </Section>
        <NeonDivider />
        <Section>
          <article>
            <h2 className="text-2xl font-bold mb-4">Métaphores pour comprendre l’IA</h2>
            <p className="mb-4 leading-relaxed">
              Pour mieux saisir ce qu’est l’IA, voici quelques métaphores simples :
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>L’apprenti :</strong> L’IA est comme un élève qui apprend à partir d’exemples et pratique pour s’améliorer, mais qui ne comprend pas encore le sens profond.</li>
              <li><strong>Le cuisinier avec une recette :</strong> L’algorithme est la recette, les données sont les ingrédients, et l’IA suit la recette pour produire un plat (une décision ou une prédiction).</li>
              <li><strong>Le cerveau artificiel :</strong> Un réseau de neurones artificiels fonctionne un peu comme un cerveau simplifié, avec des neurones connectés qui transmettent des signaux.</li>
            </ul>
          </article>
        </Section>
        <NeonDivider />
        <Section>
          <article>
            <h2 className="text-2xl font-bold mb-4">Schémas textuels explicatifs</h2>
            <div className="bg-gray-800 text-green-300 font-mono text-sm p-6 rounded-lg whitespace-pre-wrap shadow-lg overflow-x-auto border border-gray-700 mb-6">
{`Données brutes
    ↓
Prétraitement (nettoyage, normalisation)
    ↓
Modèle d'IA (ex: réseau de neurones)
    ↓
Entraînement (apprentissage à partir des données)
    ↓
Modèle entraîné
    ↓
Prédiction ou décision
    ↓
Retour d'information pour amélioration`}
            </div>
            <div className="bg-gray-800 text-green-300 font-mono text-sm p-6 rounded-lg whitespace-pre-wrap shadow-lg overflow-x-auto border border-gray-700 mb-6">
{`Réseau de neurones artificiel (simplifié)

[Entrée] --> (neurone 1) ---+
                           |
[Entrée] --> (neurone 2) ---+--> (neurone de sortie) --> Résultat
                           |
[Entrée] --> (neurone 3) ---+`}
            </div>
            <p className="mb-4 leading-relaxed">
              Ces schémas montrent, en simplifiant, comment les données circulent et sont traitées au sein d’un système d’IA.
            </p>
          </article>
        </Section>
        <NeonDivider />
        <Section>
          <article>
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4 leading-relaxed">
              L’intelligence artificielle est une technologie puissante qui transforme notre monde. En comprenant ses principes de base, ses applications concrètes et ses limites, chacun peut mieux appréhender son impact et son potentiel.
            </p>
            <p className="mb-4 leading-relaxed">
              L’IA n’est pas une magie, mais le fruit d’algorithmes, de données, et d’efforts humains. Son avenir dépendra de la manière dont nous la développons et l’utilisons, avec responsabilité et éthique.
            </p>
            <p className="font-semibold text-lg mt-6 hover:text-indigo-600 transition-colors duration-300 cursor-pointer motion-safe:hover:scale-105">
              Merci de votre lecture, et continuez à explorer ce domaine passionnant !
            </p>
            <div className="mt-10 text-center">
              <a
                href="https://webcresson.com/solutions"
                aria-label="Découvrir les solutions IA de Web Cresson Tech"
                className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Découvrez nos solutions IA sur WebCressonTech.com 🚀
              </a>
            </div>
          </article>
        </Section>
      </main>
    </>
  );
}
