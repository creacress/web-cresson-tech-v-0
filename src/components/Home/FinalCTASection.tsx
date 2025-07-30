"use client";

import React from "react";
import Link from "next/link";

const FinalCTASection = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-br from-black to-zinc-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Prêt à propulser votre business avec l&apos;IA ?
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
        Contactez-nous pour une démo gratuite ou découvrez nos plans adaptés à votre structure.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          href="/contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Contactez-nous
        </Link>
        <Link
          href="/pricing"
          className="border border-indigo-500 text-indigo-400 hover:bg-indigo-800 px-6 py-3 rounded-lg font-semibold transition"
        >
          Voir les tarifs
        </Link>
      </div>
    </section>
  );
};

export default FinalCTASection;