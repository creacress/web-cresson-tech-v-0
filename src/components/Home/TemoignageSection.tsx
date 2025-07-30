"use client";

import React, { useState } from "react";

const testimonials = [
  {
    name: "La Poste",
    text: "WebCressonTech nous a permis de moderniser nos processus internes grâce à des automatisations sur mesure. Un partenaire fiable et efficace.",
  },
  {
    name: "Primark",
    text: "Leur solution RPA nous a offert un gain de productivité énorme. Une équipe experte et très à l'écoute.",
  },
  {
    name: "Crédit Agricole",
    text: "Excellente collaboration avec WebCressonTech pour intégrer une IA de traitement documentaire. Résultat au-delà de nos attentes.",
  },
];

export default function TemoignageSection() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Ils nous font confiance</h2>
      <div className="relative max-w-2xl mx-auto">
            <p className="text-lg italic">&quot;{testimonials[index].text}&quot;</p>
            <p className="mt-4 font-semibold">{testimonials[index].name}</p>
        <div className="flex justify-between mt-6">
          <button onClick={prev} className="text-gray-400 hover:text-white">&larr;</button>
          <button onClick={next} className="text-gray-400 hover:text-white">&rarr;</button>
        </div>
      </div>
    </section>
  );
}