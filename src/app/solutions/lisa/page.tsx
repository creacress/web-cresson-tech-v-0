"use client";

import CTA from "@/components/CTAButton/CTAButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LisaDemoPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-20 text-white">
            <h1 className="text-4xl font-bold text-center mb-6">
                🤖 Démo IA personnalisée – Lisa, Start-up innovante
            </h1>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Lisa développe une solution SaaS. Elle veut automatiser l'onboarding client, interagir rapidement avec ses leads et générer de la valeur dès les premiers clics.
                Voici une démo de notre Pack IA Start-up – pensée pour elle.
            </p>

            <img
                src="/avatars/lisa.png"
                alt="Lisa - Persona Start-up"
                className="w-32 h-32 mx-auto mb-10 rounded-full border border-cyan-500 shadow-lg"
            />

            <section className="flex flex-col items-center my-20 relative">
                <h2 className="text-2xl font-bold text-center mb-8 text-white">⚙️ Processus IA adapté pour Lisa</h2>

                <div className="relative flex flex-col items-center gap-16 w-full">
                    <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in">
                        <h3 className="text-xl font-bold text-white mb-2">💬 Étape 1 – Agent conversationnel IA</h3>
                        <p className="text-gray-400 text-sm">
                            Un agent IA répond aux leads, les guide, et peut déclencher des actions dans le produit (prise de RDV, essai gratuit...)
                        </p>
                    </div>

                    <svg className="w-6 h-6 text-cyan-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>

                    <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in delay-200">
                        <h3 className="text-xl font-bold text-white mb-2">🛠️ Étape 2 – Générateur de contenu IA</h3>
                        <p className="text-gray-400 text-sm">
                            Lisa peut générer des réponses ou pages produit automatiquement selon les besoins du client.
                        </p>
                    </div>

                    <svg className="w-6 h-6 text-cyan-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>

                    <div className="bg-[#1a1a1a] border border-cyan-700/20 rounded-xl p-6 text-center max-w-sm w-full shadow-lg animate-fade-in delay-400">
                        <h3 className="text-xl font-bold text-white mb-2">🚀 Étape 3 – MVP IA modulaire</h3>
                        <p className="text-gray-400 text-sm">
                            Un prototype IA est mis en place avec modules texte / image / données en fonction de l’usage.
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

            <section className="space-y-12 mt-24">
                <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">1. Réponses IA dynamiques dès l'onboarding</h2>
                    <p className="text-gray-400">
                        Les leads qui remplissent un formulaire reçoivent instantanément une réponse personnalisée, avec lien vers la démo adaptée.
                    </p>
                </div>

                <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">2. Création de contenu automatisée</h2>
                    <p className="text-gray-400">
                        Les documents joints dans les candidatures ou demandes clients sont traités par l’IA sans effort.
                    </p>
                </div>

                <div className="bg-[#111] border border-neutral-700 p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">3. Suivi et amélioration continue via logs</h2>
                    <p className="text-gray-400">
                        Lisa voit immédiatement les leads les plus chauds, classés par pertinence et engagement.
                    </p>
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8 mt-24">
                <div className="bg-zinc-900 border border-cyan-800/20 rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-bold text-white mb-2">⚡ Ultra réactif</h3>
                    <p className="text-gray-400 text-sm">
                        Le système IA traite en temps réel les demandes entrantes.
                    </p>
                </div>
                <div className="bg-zinc-900 border border-cyan-800/20 rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-bold text-white mb-2">🧠 Prédictif</h3>
                    <p className="text-gray-400 text-sm">
                        Il anticipe les besoins du client selon ses interactions précédentes.
                    </p>
                </div>
                <div className="bg-zinc-900 border border-cyan-800/20 rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-bold text-white mb-2">🔐 Sécurisé</h3>
                    <p className="text-gray-400 text-sm">
                        Les données sensibles sont chiffrées et hébergées dans l’UE.
                    </p>
                </div>
            </section>

            <div className="text-center mt-16">
                <CTA label="Demander ce Pack IA pour ma Start-up" />
            </div>
            {/* Section: Best IA Models Hugging Face pour TPE */}
            <section className="mt-24 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white mb-4">
                    ✨ Vous pouvez découvrir ici mon petit Hub d'IA
                </h2>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                    Explorez notre sélection des meilleurs modèles d’IA pour les TPE. Vous serez redirigé vers la bonne catégorie automatiquement.
                </p>
                <a
                    href="/IA?sector=PME#sector-selector"
                    className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition"
                >
                    Voir les modèles IA pour Start-up
                </a>
            </section>
            {/* Section: Autres cas d’usage IA utiles pour Lisa */}
            <section className="mt-24 space-y-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">🚀 Autres cas d’usage IA utiles pour Lisa</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {[
                        {
                            icon: "🧠",
                            title: "Agent IA autonome",
                            desc: "Un assistant IA peut gérer une partie de la relation client ou commerciale automatiquement."
                        },
                        {
                            icon: "📊",
                            title: "Dashboard IA temps réel",
                            desc: "Analyse en direct de l’usage produit ou des conversions en cours."
                        },
                        {
                            icon: "🔍",
                            title: "Recommandations intelligentes",
                            desc: "L’IA propose des fonctionnalités, contenus ou offres selon les actions de l’utilisateur."
                        },
                        {
                            icon: "✅",
                            title: "Suivi RGPD et logs IA",
                            desc: "Journalisation des décisions IA et gestion transparente des données."
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
                <CTA label="Essayer cette solution pour ma Start-up" />
            </div>
            {/* Section: Navigation vers autres personas */}
            <section className="mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-white">🔁 Explorer d'autres cas concrets</h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a href="/solutions/julie" className="bg-cyan-900 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg transition">Voir Julie (TPE)</a>
                    <a href="/solutions/marc" className="bg-cyan-900 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg transition">Voir Marc (PME)</a>
                    <a href="/solutions/lisa" className="bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold">Lisa (vous êtes ici)</a>
                </div>
            </section>
        </main>
    );
}