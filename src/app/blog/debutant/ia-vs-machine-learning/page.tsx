
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
  title: "Différences entre IA, Machine Learning et Deep Learning",
  description: "Comprenez les différences précises entre Intelligence Artificielle, Machine Learning et Deep Learning.",
};

export default function BlogIAMLDL() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className="max-w-5xl mx-auto px-6 py-12 font-sans text-white space-y-24">
        <h1 className="text-4xl font-extrabold mb-12">Différences entre IA, Machine Learning et Deep Learning</h1>

        <section className="fade-in-section">
          <article>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Les termes Intelligence Artificielle (IA), Machine Learning (ML) et Deep Learning (DL) sont souvent utilisés de manière interchangeable. Pourtant, ils ont chacun leurs spécificités tout en appartenant à la même famille technologique.
            </p>
          </article>
        </section>

        <section className="fade-in-section">
          <article>
            <h2 className="text-2xl font-bold mb-4">Qu’est-ce que l’intelligence artificielle ?</h2>
            <div className="my-8">
              <Image
                src="/blog/debuter-ia.webp"
                alt="Image représentant l'intelligence artificielle"
                width={400}
                height={250}
                className="rounded-xl shadow-xl transition-transform transform hover:scale-105"
              />
            </div>
            <p className="mb-4">
              L’intelligence artificielle englobe toutes les technologies permettant à une machine d’accomplir des tâches qui nécessitent normalement une intelligence humaine. Cela comprend la reconnaissance vocale, l'analyse d'image, la prise de décision, etc.
            </p>
          </article>
        </section>

        <section className="fade-in-section">
          <article>
            <h2 className="text-2xl font-bold mb-4">Qu’est-ce que le Machine Learning ?</h2>
            <p className="mb-4">
              Le Machine Learning est une sous-branche de l’IA où les systèmes apprennent automatiquement à partir de données. Plutôt que d'être explicitement programmés, ils ajustent leur comportement en fonction des données disponibles.
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Apprentissage supervisé (avec labels)</li>
              <li>Apprentissage non supervisé (sans labels)</li>
              <li>Apprentissage par renforcement (avec récompenses)</li>
            </ul>
          </article>
        </section>

        <section className="fade-in-section">
          <article>
            <h2 className="text-2xl font-bold mb-4">Qu’est-ce que le Deep Learning ?</h2>
            <p className="mb-4">
              Le Deep Learning est une forme avancée du Machine Learning utilisant des réseaux de neurones profonds. Ces réseaux peuvent apprendre des représentations complexes directement à partir de grandes quantités de données brutes.
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Réseaux de neurones convolutifs (CNN)</li>
              <li>Réseaux de neurones récurrents (RNN)</li>
              <li>Transformers (pour le traitement du langage naturel)</li>
            </ul>
          </article>
        </section>

        <section className="fade-in-section">
          <article>
            <h2 className="text-2xl font-bold mb-4">Liens entre IA, ML et DL</h2>
            <div className="my-8">
              <Image
                src="/blog/ai-machine-deep-learning.png"
                alt="Schéma des relations entre IA, Machine Learning et Deep Learning"
                width={800}
                height={450}
                className="rounded-xl shadow-xl transition-transform transform hover:scale-105"
              />
            </div>
            <p className="mb-4">
              L’IA est la discipline globale, le ML une approche spécifique au sein de l'IA, et le DL une spécialisation encore plus précise au sein du ML. Pour visualiser :
            </p>
            <div className="bg-gray-800 text-green-300 font-mono text-sm p-6 rounded-lg whitespace-pre-wrap shadow-lg overflow-x-auto border border-gray-700">
              {`Intelligence Artificielle (IA)
      ├── Machine Learning (ML)
      │      ├── Supervised Learning
      │      ├── Unsupervised Learning
      │      └── Reinforcement Learning
      └── Deep Learning (DL)
             ├── CNN
             ├── RNN
             └── Transformers`}
            </div>
          </article>
        </section>

        <section className="fade-in-section">
          <article>
            <h2 className="text-2xl font-bold mb-4">Cas d'utilisation concrets</h2>
            <p className="mb-4">
              Quelques exemples pratiques pour distinguer les trois notions :
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li><strong>IA :</strong> Assistants virtuels comme Siri ou Alexa</li>
              <li><strong>ML :</strong> Systèmes de recommandation Netflix ou Amazon</li>
              <li><strong>DL :</strong> Reconnaissance faciale ou génération d’images réalistes</li>
            </ul>
          </article>
        </section>

        <section className="fade-in-section">
          <article>
            <h2 className="text-2xl font-bold mb-4">Schéma simplifié</h2>
            <div className="bg-gray-800 text-green-300 font-mono text-sm p-6 rounded-lg whitespace-pre-wrap shadow-lg overflow-x-auto border border-gray-700">
              {`IA : Décisions intelligentes générales
  ↓
ML : Apprentissage à partir de données
  ↓
DL : Apprentissage profond par réseaux de neurones`}
            </div>
          </article>
        </section>

        <section className="fade-in-section">
          <article>
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
              Bien que distincts, IA, ML et DL sont intimement liés et constituent une hiérarchie de techniques intelligentes allant du général au très spécifique.
            </p>
            <div className="mt-10 text-center">
              <a
                href="https://www.webcressontech.com"
                className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Découvrez nos solutions IA sur WebCressonTech.com 🚀
              </a>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}