"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Qu’est-ce que WebCressonTech propose exactement ?",
    answer:
      "Nous développons des solutions IA et RPA sur mesure pour automatiser les tâches répétitives, optimiser les processus métiers et booster la performance des entreprises.",
  },
  {
    question: "À qui s’adressent vos services ?",
    answer:
      "Nos services s’adressent principalement aux TPE, PME, start-up et indépendants qui souhaitent gagner du temps et se concentrer sur l’essentiel.",
  },
  {
    question: "Puis-je tester vos outils gratuitement ?",
    answer:
      "Oui, certains services offrent une version gratuite avec un nombre limité d’utilisations. Des plans personnalisés sont aussi disponibles.",
  },
  {
    question: "Comment se déroule un accompagnement IA ?",
    answer:
      "Nous commençons par un audit gratuit, puis nous définissons les objectifs, concevons la solution IA ou RPA, et accompagnons le déploiement complet.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-zinc-900 py-16 px-4 text-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 bg-zinc-800 hover:bg-zinc-700 transition-colors"
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-700 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
