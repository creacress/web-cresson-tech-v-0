"use client";
import CTA from "@/components/CTAButton/CTAButton";
import * as React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function MarcDemoPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">
        🤖 Démo IA personnalisée – Marc, PME digitale
      </h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Marc dirige une PME moderne. Il veut améliorer sa productivité et suivre son activité sans perdre de temps : dashboards, automatisation, suivi intelligent. Voici une démo de notre Pack IA PME – pensé pour lui.
      </p>

      <img
        src="/avatars/marc.png"
        alt="Marc - Persona PME"
        className="w-32 h-32 mx-auto mb-10 rounded-full border border-cyan-500 shadow-lg"
      />

      <section className="flex flex-col items-center my-20 relative">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">⚙️ Processus IA adapté pour Marc</h2>

        <div className="relative flex flex-col items-center gap-16 w-full">
          <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-2">⚙️ Étape 1 – Automatisations personnalisées</h3>
            <p className="text-gray-400 text-sm">
              Marc n’a plus besoin d’extraire ses fichiers ni de relancer manuellement. L’IA le fait à sa place.
            </p>
          </div>

          <svg className="w-6 h-6 text-cyan-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>

          <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in delay-200">
            <h3 className="text-xl font-bold text-white mb-2">📊 Étape 2 – Dashboard IA en temps réel</h3>
            <p className="text-gray-400 text-sm">
              Un tableau de bord regroupe automatiquement les données clés et détecte les anomalies.
            </p>
          </div>

          <svg className="w-6 h-6 text-cyan-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>

          <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in delay-400">
            <h3 className="text-xl font-bold text-white mb-2">📬 Étape 3 – Suivi client automatisé</h3>
            <p className="text-gray-400 text-sm">
              L’IA détecte les clients à risque et alerte Marc avec des actions proposées.
            </p>
          </div>
        </div>

        <div className="mt-12 w-[320px] h-[320px] mx-auto">
          <DotLottieReact
            src="https://lottie.host/cd6675fe-c94f-457b-b674-f7067cc74375/EzyzHwH8nw.lottie"
            loop={true}
            autoplay={true}
          />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mt-24">
        <div className="bg-zinc-900 border border-cyan-800/20 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold text-white mb-2">✅ Intégration facile</h3>
          <p className="text-gray-400 text-sm">
            L’IA se connecte à vos outils existants (ERP, CRM, Google Sheets...).
          </p>
        </div>
        <div className="bg-zinc-900 border border-cyan-800/20 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold text-white mb-2">📈 Gains mesurables</h3>
          <p className="text-gray-400 text-sm">
            Gain de temps moyen : 12h/semaine. Moins de stress. Plus de visibilité.
          </p>
        </div>
        <div className="bg-zinc-900 border border-cyan-800/20 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold text-white mb-2">🔐 Données sécurisées</h3>
          <p className="text-gray-400 text-sm">
            Hébergement en France 🇫🇷, données chiffrées et auditables.
          </p>
        </div>
      </section>

      <section className="space-y-12 mt-24">
        <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">1. Export automatique des fichiers</h2>
          <p className="text-gray-400">
            L’IA connectée aux outils internes de Marc déclenche chaque matin l’extraction des rapports, sans action manuelle.
          </p>
        </div>

        <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">2. Rapport mensuel automatisé</h2>
          <p className="text-gray-400">
            Un PDF synthétique est généré chaque mois et envoyé par email à Marc avec des indicateurs clés.
          </p>
        </div>

        <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">3. Alertes client intelligentes</h2>
          <p className="text-gray-400">
            L’IA détecte les clients inactifs depuis trop longtemps et suggère une relance ou une action commerciale.
          </p>
        </div>
      </section>

      {/* Section: Best IA Models Hugging Face pour TPE */}
      <section className="mt-24 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          ✨ Vous pouvez découvrir ici mon petit Hub d'IA
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Explorez notre sélection des meilleurs modèles d’IA pour les TPE. Vous serez redirigé vers la bonne catégorie automatiquement.
        </p>
        <a
          href="/IA?sector=TPE#sector-selector"
          className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition"
        >
          Voir les modèles IA pour PME
        </a>
      </section>

      {/* Autres cas d’usage IA utiles pour Marc */}
      <section className="mt-24 space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">🏢 Autres cas d’usage IA utiles pour Marc</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: "📑",
              title: "Analyse automatique des contrats",
              desc: "L’IA lit les documents et extrait automatiquement échéances, montants, clauses spécifiques..."
            },
            {
              icon: "📈",
              title: "Prévision des ventes ou de la charge",
              desc: "Anticipez les pics d’activité avec une IA qui apprend de vos historiques."
            },
            {
              icon: "🤖",
              title: "Copilote IA connecté aux outils internes",
              desc: "Un agent IA répond aux questions internes (ex : « Quel est le CA du mois ? »)."
            },
            {
              icon: "📂",
              title: "Organisation automatique des fichiers",
              desc: "L’IA trie les documents reçus et les classe dans les bons dossiers selon leur contenu."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#111] border border-[#00e0ff33] p-5 rounded-lg">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center mt-16">
        <CTA label="Demander ce Pack IA pour ma PME" />
      </div>
      {/* Section: Navigation vers autres personas */}
      <section className="mt-24">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-white">🔁 Explorer d'autres cas concrets</h2>
        <div className="flex justify-center gap-4 flex-wrap"> 
          <a href="/solutions/julie" className="bg-cyan-900 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg transition">Voir Julie (TPE)</a>
          <a href="/solutions/marc" className="bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold">Marc (vous êtes ici)</a>
          <a href="/solutions/lisa" className="bg-cyan-900 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg transition">Lisa </a>
        </div>
      </section>
    </main>
  );
}