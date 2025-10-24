"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CiblesSection = () => {
  const router = useRouter();

  const cibles = [
    {
      title: "Startups & microentreprises",
      icon: "🚀",
      description:
        "Démarrez vite : automatisations prêtes à l’emploi, coûts maîtrisés, itérations rapides.",
      link: "/solutions/startups",
      benefit: "Mise en place en quelques jours",
    },
    {
      title: "PME",
      icon: "🏢",
      description:
        "Gagnez du temps au quotidien : RPA, intégrations (n8n, Zapier, Power Automate) et scripts Python fiables.",
      link: "/solutions/pme",
      benefit: "+20–40% de productivité opérationnelle",
    },
    {
      title: "ETI & grandes entreprises",
      icon: "🏛️",
      description:
        "Workflows robustes, sécurité et intégrations complexes (ERP/CRM/BI). Gouvernance et support.",
      link: "/solutions/grandes-entreprises",
      benefit: "Scalabilité & conformité",
    },
  ];

  const go = (href: string) =>
    router.push(`${href}?utm_source=home&utm_medium=section_cibles&utm_campaign=segment_click`);

  return (
    <section id="cibles" aria-labelledby="cibles-title" className="py-16 bg-zinc-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="cibles-title" className="text-3xl md:text-4xl font-extrabold text-white">
            Qui accompagnons‑nous ?
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Des parcours adaptés à votre taille d’entreprise et à vos objectifs d’automatisation.
          </p>
        </div>

        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cibles.map(({ title, icon, description, link, benefit }) => (
            <li key={title} role="listitem">
              <div
                tabIndex={0}
                onClick={() => go(link)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go(link)}
                aria-label={`${title} – en savoir plus`}
                className="group cursor-pointer h-full rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 p-6 shadow-lg transition transform hover:-translate-y-0.5 hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              >
                <div className="text-4xl mb-4 drop-shadow-sm" aria-hidden>
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {description}
                </p>
                {benefit && (
                  <span className="inline-flex items-center text-xs font-medium text-cyan-300/90 bg-cyan-500/10 rounded-full px-3 py-1">
                    {benefit}
                  </span>
                )}

                <div className="mt-6 flex items-center gap-2 text-cyan-400 font-medium">
                  <span className="underline decoration-dotted underline-offset-4">Voir les cas d’usage</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CiblesSection;
