'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PageIAEducation() {
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswer = (question: number, answer: string) => {
    setQuizAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  return (
    <main className="bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900 text-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-300">🌟 L’IA expliquée aux enfants ! 🤖</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-pink-300">Qu’est-ce que l’intelligence artificielle ?</h2>
          <p>
            L’IA, c’est comme un super cerveau d’ordinateur 🧠💻 ! Elle aide les machines à réfléchir un peu comme les humains.
            Par exemple, elle peut reconnaître des visages, parler comme nous, ou même jouer à des jeux ! 🎮
          </p>
        </section>

        {/* Nouvelle section pédagogique adaptée aux enfants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-orange-300">🧠 C’est quoi l’IA, en vrai ?</h2>
          <p>
            L’intelligence artificielle (IA), c’est comme une super machine qui essaie de penser comme un humain. Elle peut apprendre à parler, à comprendre des images, à résoudre des problèmes ou même à écrire des histoires !
          </p>
          <p>
            Mais attention : une IA, ce n’est pas un robot ! Un robot, c’est une machine avec un corps. L’IA, c’est comme le cerveau du robot. L’un ne va pas sans l’autre 🤖🧠.
          </p>
          <p>
            L’IA existe depuis très longtemps. La première IA capable de reconnaître des lettres a été inventée… en 1957 ! Et depuis, elle a appris plein de nouvelles choses.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-purple-300">🔍 Comment une IA apprend-elle ?</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-100">
            <li>On lui montre plein d’exemples (par exemple, des photos de chiens 🐶).</li>
            <li>Elle regarde les formes, les couleurs, les détails.</li>
            <li>Elle compare, elle teste, elle se trompe parfois...</li>
            <li>Mais à force d’essayer, elle apprend toute seule à reconnaître un chien !</li>
          </ol>
          <p>
            Comme nous, elle apprend en s’entraînant. Mais au lieu de cerveau, elle utilise… des ordinateurs très puissants ⚡
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300">🤔 Est-ce qu’elle est vraiment intelligente ?</h2>
          <p>
            Pas encore ! Elle fait des choses impressionnantes, mais elle ne comprend pas ce qu’elle fait. Elle ne pense pas vraiment. Et elle ne ressent rien non plus. C’est nous, les humains, qui lui apprenons tout 💡
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-pink-400">🚗 Peut-elle conduire une voiture ?</h2>
          <p>
            Oui ! Il existe déjà des voitures sans chauffeur qui utilisent des caméras, des radars et… de l’IA ! Elle détecte la route, les piétons, les panneaux et elle prend des décisions toutes seules. Impressionnant, non ? 😲
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-red-300">📸 Et les images, elle peut les créer ?</h2>
          <p>
            Une IA peut aussi dessiner, peindre ou même créer des photos qui n’existent pas vraiment ! Mais attention : parfois, ces images sont tellement réalistes qu’on peut croire qu’elles sont vraies… alors qu’elles sont 100% inventées !
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">😯 Est-ce qu’elle peut remplacer les humains ?</h2>
          <p>
            Non, pas vraiment. Elle peut aider dans des tâches précises, comme trier des données ou aider à soigner. Mais l’IA ne peut pas penser, ressentir ou créer comme toi. Ton imagination est unique 💛
          </p>
          <p>
            Et peut-être qu’un jour, ton métier n’existe pas encore… Tu pourrais devenir créateur d’IA, pilote de robot ou même entraîneur de chatbot ! 🚀
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-300">Où trouve-t-on l’IA dans la vie de tous les jours ?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Quand tu parles à Alexa ou Siri 🎤</li>
            <li>Quand YouTube te propose une nouvelle vidéo 📺</li>
            <li>Quand une voiture roule toute seule 🚗</li>
            <li>Quand un robot t'aide à faire tes devoirs 🤓</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-green-300">L’IA peut-elle aider la planète ? 🌍</h2>
          <p>
            Oui ! L’intelligence artificielle aide les scientifiques à mieux comprendre la nature, à prédire la météo, à économiser de l’énergie, et même à sauver des animaux en danger 🐼🦜.
          </p>
        </section>

        <section className="space-y-6 bg-black/20 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-yellow-200">🧠 Petit quiz sur l'IA !</h2>

          <div>
            <p className="font-bold text-white">1. Est-ce que l’IA peut apprendre toute seule ?</p>
            <div className="space-y-2 mt-2">
              {["Non", "Oui", "Seulement si elle est connectée à Internet"].map((choice) => (
                <button
                  key={choice}
                  onClick={() => handleAnswer(1, choice)}
                  className="block w-full text-left px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded text-white"
                >
                  {choice}
                </button>
              ))}
              {quizAnswers[1] && (
                <p className="mt-2 text-sm text-green-400">
                  {quizAnswers[1] === "Oui"
                    ? "✅ Bonne réponse !"
                    : "❌ Essaie encore. L’IA peut apprendre avec des données !"}
                </p>
              )}
            </div>
          </div>

          <div>
            <p className="font-bold text-white">2. Est-ce que ton robot aspirateur utilise l’IA ?</p>
            <div className="space-y-2 mt-2">
              {["Oui", "Non, il est télécommandé uniquement", "Non, c’est un jouet"].map((choice) => (
                <button
                  key={choice}
                  onClick={() => handleAnswer(2, choice)}
                  className="block w-full text-left px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded text-white"
                >
                  {choice}
                </button>
              ))}
              {quizAnswers[2] && (
                <p className="mt-2 text-sm text-green-400">
                  {quizAnswers[2] === "Oui"
                    ? "✅ Bravo ! Il utilise bien l’IA pour éviter les obstacles."
                    : "❌ Pas tout à fait. Réessaie !"}
                </p>
              )}
            </div>
          </div>

          <div>
            <p className="font-bold text-white">3. Que pourrait faire l’IA dans le futur ?</p>
            <div className="space-y-2 mt-2">
              {["Aider les médecins", "Protéger les animaux", "Inventer des jeux éducatifs"].map((choice) => (
                <button
                  key={choice}
                  onClick={() => handleAnswer(3, choice)}
                  className="block w-full text-left px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded text-white"
                >
                  {choice}
                </button>
              ))}
              {quizAnswers[3] && (
                <p className="mt-2 text-sm text-green-400">
                  ✅ Super ! L’IA peut faire tout ça dans le futur 🌟
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
