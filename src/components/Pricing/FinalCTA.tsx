

"use client";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Besoin d’un plan 100% sur mesure ?
      </h2>
      <p className="text-lg text-gray-400 mb-6">
        Nous créons des solutions adaptées à vos enjeux et à votre budget.
      </p>
      <Link
        href="/pricing/custom"
        className="inline-block bg-indigo-500 hover:bg-indigo-600 transition-colors text-white font-semibold py-3 px-6 rounded-full shadow-lg"
      >
        Demander un devis personnalisé
      </Link>
    </div>
  );
}