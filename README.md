# 🚀 WebCressonTech — Plateforme IA & Automatisation

Ce projet est une application web développée avec **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, et une intégration poussée de composants UI modernes, SEO, et JSON-LD.

> 🧠 Objectif : mettre en avant des services autour de l'IA (Machine Learning, NLP, RPA), du développement Python, et des dashboards intelligents.



## 🛠 Stack technique

- **Next.js 15** (App Router, Server Actions, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/ui + Radix UI**
- **Framer Motion** (animations subtiles)
- **React Hook Form + Zod**
- **Lucide-react** (icônes modernes)
- **next-seo + JSON-LD** (SEO technique + structuré)



## 🚧 Démarrage du projet

Installe les dépendances :

```bash
npm install
# ou
yarn install
```

Lance le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Le projet sera dispo sur 👉 [http://localhost:3000](http://localhost:3000)



## 📁 Arborescence clé

```
src/
│
├── app/                # Pages Next.js 15 (App Router)
│   ├── page.tsx        # Page d'accueil
│   └── ...             # Pages /services, /contact, etc.
│
├── components/         # Composants UI (Header, Footer, Formulaires...)
├── styles/             # Global CSS + variables
├── lib/                # Fonctions utilitaires (SEO, mails, etc.)
└── public/             # Images, livres blancs, favicon
```



## ✅ Fonctionnalités SEO intégrées

- Metadonnées dynamiques (`metadata.ts`)
- JSON-LD structuré : `Article`, `FAQ`, `Service`, `Breadcrumb`
- Canonical tags + OpenGraph + Twitter Cards
- Sitemaps dynamiques (`/sitemap.xml`, `/sitemap-pages.xml`, `/sitemap-images.xml`)
- Robots.txt optimisé



## ✨ Déploiement

Déployé automatiquement sur **Vercel** avec pré-rendu ISR (`revalidate = 86400`) et support du server-side only.

🔗 [Vercel Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)



## 📦 À venir

- 💬 Blog technique auto-généré (MDX + JSON-LD)
- 🔐 Zone client avec authentification
- 📊 Admin UI simple pour les contenus dynamiques



## 👨‍💻 Auteur

**Alexis Cresson**  
> 📧 [contact@webcresson.com](mailto:contact@webcresson.com)  
> 🌐 [webcresson.com](https://webcresson.com)



## ⚖️ Mentions Légales & CGV

- [`/legal-mentions`](https://webcresson.com/legal-mentions)
- [`/terms-of-sale`](https://webcresson.com/terms-of-sale)