"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Libérez le pouvoir de l’IA dans votre entreprise
          </h1>
          <p className="text-lg text-gray-300 mb-8 animate-fade-in-up delay-200">
            Automatisation, agents IA, traitement de données, NLP, génération de contenu...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link
              href="/solutions"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition">
              Découvrir nos solutions
            </Link>
            <Link
              href="/contact"
              className="border border-white hover:bg-white hover:text-black text-white py-3 px-6 rounded-lg font-medium transition">
              Contactez-nous
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full h-64 md:h-96 animate-fade-in-up delay-500">
          <Image
            src="/illustrations/hero-ia.webp"
            alt="Illustration IA"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}