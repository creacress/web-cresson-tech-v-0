

"use client";
import React from "react";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

const features = [
  "+30% de temps gagné sur la gestion des relances clients",
  "Réduction de 40% du temps de saisie manuelle",
  "Mise en place d’un assistant IA pour le support client",
];

export default function PlanDetails() {
  return (
    <section className="px-6 py-12 md:py-16 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Exemples de résultats concrets
        </h2>
        <ul className="space-y-6 text-left max-w-xl mx-auto">
          {features.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircleIcon className="h-6 w-6 text-green-400 shrink-0" />
              <span className="text-base md:text-lg">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}