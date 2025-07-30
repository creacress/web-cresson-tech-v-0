"use client";

import React from 'react';

export default function HeroSection() {
  return (
    <section className="text-center py-20 px-6 sm:px-12 md:px-24 bg-gradient-to-br from-zinc-900 to-black text-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Choisissez le plan qui booste votre entreprise 🚀
      </h1>

      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
        Des offres claires et flexibles pour automatiser, simplifier et propulser votre activité avec l’IA et le no-code.
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <a
          href="#plans"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition"
        >
          Voir les offres
        </a>
        <a
          href="/pricing/custom"
          className="border border-gray-500 hover:border-white text-gray-300 hover:text-white py-3 px-6 rounded-md transition"
        >
          Plan personnalisé
        </a>
      </div>
    </section>
  );
}