"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CiblesSection = () => {
  const router = useRouter();

  const cibles = [
    {
      title: "Startups",
      icon: "🚀",
      description:
        "Solutions agiles et scalables adaptées aux jeunes entreprises ambitieuses.",
      link: "/solutions/startups",
    },
    {
      title: "PME",
      icon: "🏢",
      description:
        "Accompagnement sur mesure pour les petites et moyennes entreprises en pleine croissance.",
      link: "/solutions/pme",
    },
    {
      title: "Grandes entreprises",
      icon: "🏛️",
      description:
        "Stratégies robustes et intégrations complexes pour les grandes structures.",
      link: "/solutions/grandes-entreprises",
    },
  ];

  return (
    <section className="py-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Nos Cibles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cibles.map(({ title, icon, description, link }) => (
            <div
              key={title}
              className="cursor-pointer hover:scale-105 transition transform"
              onClick={() => router.push(link)}
            >
              <div className="bg-zinc-800 p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CiblesSection;
