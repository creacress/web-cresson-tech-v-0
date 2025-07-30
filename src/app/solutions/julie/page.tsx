"use client";
import CTA from "@/components/CTAButton/CTAButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


export default function JulieDemoPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">
        🧠 Démo IA personnalisée – Julie, TPE artisanale
      </h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Julie dirige un atelier de maroquinerie. Elle veut automatiser sa facturation, relancer ses clients, et suivre ses ventes plus facilement.
        Voici une démo d’IA adaptée à ses besoins.
      </p>

      <img
        src="/avatars/julie.png"
        alt="Julie - Persona TPE"
        className="w-32 h-32 mx-auto mb-10 rounded-full border border-cyan-500 shadow-lg"
      />

      <section className="flex flex-col items-center my-20 relative">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">🚀 Processus IA simplifié pour Julie</h2>

        <div className="relative flex flex-col items-center gap-16 w-full">
          <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-2">📥 Étape 1 – Saisie automatique</h3>
            <p className="text-gray-400 text-sm">
              Julie glisse ses devis. L’IA lit et extrait les infos clés.
            </p>
          </div>

          <svg className="w-6 h-6 text-cyan-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>

          <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in delay-200">
            <h3 className="text-xl font-bold text-white mb-2">🤖 Étape 2 – Relance IA</h3>
            <p className="text-gray-400 text-sm">
              Envoi automatique d’emails de relance selon les profils.
            </p>
          </div>

          <svg className="w-6 h-6 text-cyan-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>

          <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in delay-400">
            <h3 className="text-xl font-bold text-white mb-2">📊 Étape 3 – Suivi visuel</h3>
            <p className="text-gray-400 text-sm">
              Visualisation des paiements et alertes dans un dashboard clair.
            </p>
          </div>
        </div>

        <div className="mt-12 w-[320px] h-[320px] mx-auto">
          <DotLottieReact
            src="https://lottie.host/cd6675fe-c94f-457b-b674-f7067cc74375/EzyzHwH8nw.lottie"
            loop
            autoplay
          />
        </div>
      </section>

      <section className="space-y-12">
        <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">1. Traitement automatique des factures</h2>
          <p className="text-gray-400">
            Grâce à un outil de lecture intelligent, Julie peut glisser ses devis, et l’IA extrait automatiquement : nom client, montant, échéance.
          </p>
        </div>

        <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">2. Relances automatisées des paiements</h2>
          <p className="text-gray-400">
            L’IA envoie des rappels personnalisés aux clients en retard, avec un ton adapté (ferme ou cordial), selon le contexte.
          </p>
        </div>

        <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">3. Tableau de bord simple et visuel</h2>
          <p className="text-gray-400">
            Julie visualise ses encaissements, les retards et les clients à fort potentiel sur un dashboard intuitif.
          </p>
        </div>
      </section>

      <section className="mt-24 space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">🧰 Autres cas d’usage IA utiles pour Julie</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: "📬",
              title: "Lecture intelligente des e-mails",
              desc: "L’IA extrait les infos clés (client, date, montant) depuis les emails entrants pour les trier automatiquement."
            },
            {
              icon: "🧠",
              title: "CRM IA simplifié",
              desc: "Julie peut accéder à un historique client sans avoir besoin de remplir de tableaux manuellement."
            },
            {
              icon: "📣",
              title: "Contenu local auto-généré",
              desc: "Publication automatique de posts Facebook ou Google Business optimisés pour sa visibilité locale."
            },
            {
              icon: "📦",
              title: "Gestion simplifiée des stocks",
              desc: "Alertes automatiques basées sur les ventes pour éviter les ruptures."
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
        <CTA label="Essayer cette solution pour ma TPE" />
      </div>
      {/* Section: Navigation vers autres personas */}
      <section className="mt-24">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-white">🔁 Explorer d'autres cas concrets</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/solutions/julie" className="bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold">Julie (vous êtes ici)</a>
          <a href="/solutions/marc" className="bg-cyan-900 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg transition">Voir Marc</a>
          <a href="/solutions/lisa" className="bg-cyan-900 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg transition">Voir Lisa</a>
        </div>
      </section>
    </main>
  );
}