import Image from "next/image"
import { headers } from 'next/headers'
import Link from "next/link"
import type { Metadata, Viewport } from "next"
import NeonDivider from "@/components/ui/NeonDivider"
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import problems from '@/components/Home/ProblemesSection'
import steps from '@/components/Home/MethodologieSection'
import SolutionsSection from '@/components/Home/solutionsData'
import points from '@/components/Home/ExpertiseSection'
import personas from '@/components/Home/PersonasSection'
import glossaire from '@/components/Home/GlossaireSection'
import FAQSection from '@/components/Home/FAQSection'
import TemoignageSection from '@/components/Home/TemoignageSection'
import CiblesSection from '@/components/Home/CiblesSection'
import { HoverPreview, KpiCounter, SafeLink } from '@/components/Home/HomeInteractive'
export const dynamic = 'force-dynamic';

export const revalidate = 86400

// Viewport configuration for SEO & CWV
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0b",
  colorScheme: "dark",
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webcresson.com"),
  title: {
    default: "Agence d’Automatisation & RPA | WebCressonTech – Workflows & scripts Python sur mesure",
    template: "%s | WebCressonTech",
  },
  description:
    "Automatisez vos processus avec WebCressonTech : RPA, intégrations n8n/Zapier/Power Automate et scripts Python fiables. Audit gratuit & solutions concrètes.",
  keywords: [
    "Automatisation",
    "RPA",
    "Workflows n8n",
    "Zapier",
    "Power Automate",
    "Python",
    "Intégrations API",
    "Audit automatisation gratuit"
  ],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Agence d’Automatisation & RPA | WebCressonTech",
    description: "WebCressonTech, votre partenaire pour l’automatisation et la RPA.",
    url: "/",
    siteName: "WebCressonTech",
    images: [
      {
        url: "/images/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCressonTech, votre partenaire pour l’automatisation et la RPA",
    description: "Discutons de vos projets d’automatisation, RPA et intégrations.",
    images: ["/images/Logo_webcressontech.webp"],
    site: "@WebCresson",
    creator: "@WebCresson",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  other: {
    "geo.region": "FR",
    "geo.country": "FR",
    "geo.placename": "France",
  },
};


export default async function Home() {
  let nonce: string | undefined;
  try {
    nonce = (await headers()).get('x-nonce') || undefined;
  } catch {
    nonce = undefined;
  }
  return (
    <>
      <ServiceSchema
        serviceName="Entreprise experte en automatisation | WebCressonTech"
        serviceDescription="Automatisez vos processus avec des workflows RPA, des intégrations API et des scripts Python robustes."
        serviceTypes={[
          "Automatisation",
          "RPA",
          "Orchestration de workflows",
          "Intégrations API",
          "Développement Python",
          "Automatisation n8n / Zapier"
        ]}
        faq={[
          {
            question: "Quels services propose WebCressonTech ?",
            answer: "Workflows RPA, intégrations (n8n/Zapier/Power Automate), scripts Python et automatisation des processus.",
          },
          {
            question: "Pourquoi choisir WebCressonTech pour vos projets d’automatisation et Python ?",
            answer: "Expertise opérationnelle, accompagnement de bout en bout et solutions adaptées à vos contraintes.",
          },
          {
            question: "Comment contacter WebCressonTech ?",
            answer: "Contactez-nous via notre page de contact ou par téléphone pour discuter de vos projets IA et développement Python.",
          },
          {
            question: "Quel est le prix d’une automatisation RPA ?",
            answer: "Chaque projet est unique. Après un audit gratuit, un devis personnalisé est proposé selon la complexité des tâches.",
          },
          {
            question: "Est-ce que WebCressonTech propose du support après livraison ?",
            answer: "Oui, nous assurons le support, la maintenance et l’amélioration continue si besoin.",
          },
        ]}
      />
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WebCressonTech",
            "url": "https://webcresson.com",
            "logo": "https://webcresson.com/images/Logo_webcressontech.webp",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61579372888241",
              "https://twitter.com/WebCresson",
              "https://www.linkedin.com/in/alexis-cresson/",
              "https://wa.me/33766029632"
            ]
          })
        }}
      />
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'WebCressonTech',
            url: 'https://webcresson.com',
            inLanguage: 'fr',
            publisher: { '@type': 'Organization', name: 'WebCressonTech' },
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://webcresson.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'WebCressonTech',
            url: 'https://webcresson.com',
            areaServed: [{ '@type': 'Country', name: 'France' }],
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'FR'
            },
            sameAs: ['https://x.com/WebCresson'],
            image: 'https://webcresson.com/images/Logo_webcressontech.webp'
          })
        }}
      />

      <main className="bg-black text-white px-4 sm:px-6 lg:px-12">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0f0f0f] via-black to-[#1a1a1a] text-white py-24 px-6 md:px-12 overflow-hidden">
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          {/* Glowing blobs */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-2xl rounded-full animate-pulse-slow"></div>
          </div>
          <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient bg-[200%_auto]">
                  Automatisez vos processus, gagnez du temps
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 animate-fade-in-up delay-200">
                Automatisez vos tâches avec la RPA (L’automatisation robotisée des processus), des intégrations puissantes (n8n, Zapier, Power Automate) et des scripts Python connectés à vos outils métier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Link
                  href="/automatisation?utm_source=home&utm_medium=hero&utm_campaign=cta_primary"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition flex items-center gap-2 shadow-lg hover:shadow-indigo-400/50 hover:scale-105 animate-glow"
                  style={{ boxShadow: "0 0 12px 2px #6366F1" }}
                >
                  🚀 Découvrir l’automatisation
                </Link>
                <Link
                  href="/contact?utm_source=home&utm_medium=hero&utm_campaign=cta_secondary"
                  className="border border-white hover:bg-white hover:text-black text-white py-3 px-6 rounded-lg font-medium transition flex items-center gap-2 hover:shadow-cyan-400/40 hover:scale-105 animate-glow"
                  style={{ boxShadow: "0 0 12px 2px #22d3ee" }}
                >
                  📞 Parler à un expert
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full h-64 md:h-96 animate-fade-in-up delay-500">
              <div className="w-full h-full rounded-xl overflow-hidden border-4 border-indigo-500/20 shadow-inner shadow-indigo-700/10">
                <Image
                  src="/images/hero-ia.webp"
                  alt="Automatisation RPA et workflows pour PME par WebCressonTech"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1200px"
                  priority
                  loading="eager"
                  quality={90}
                  className="object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var loaded = false;
  function loadGTM(){
    if(loaded) return; loaded = true;
    if (window.dataLayer) return;
    window.dataLayer = window.dataLayer || [];
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX';
    s.async = true; s.defer = true;
    document.head.appendChild(s);
  }
  window.addEventListener('scroll', loadGTM, { once: true, passive: true });
  window.addEventListener('click', loadGTM, { once: true });
})();
    `,
          }}
        />
        <NeonDivider />
        {/* Problèmes fréquents */}
        <section className="py-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Vos priorités d’automatisation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Des cas d’usage concrets que nous mettons en production pour gagner du temps, fiabiliser vos opérations et connecter vos outils.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problems.map((item, i) => {
              // Icônes orientées bénéfices
              let icon = "⚡";
              const t = item.title.toLowerCase();
              if (t.includes("temps")) icon = "⏳";
              else if (t.includes("erreur")) icon = "🛡️";   // protection / qualité
              else if (t.includes("coût")) icon = "💰";      // économies
              else if (t.includes("saisie")) icon = "⌨️";
              else if (t.includes("données")) icon = "📊";
              else if (t.includes("répétitif")) icon = "🔁";
              else if (t.includes("qualité")) icon = "✨";
              else if (t.includes("retard")) icon = "🚀";    // accélération
              else if (t.includes("analyse")) icon = "🔎";
              else if (t.includes("communication")) icon = "🤝";

              return (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/60 hover:shadow-cyan-500/10 hover:scale-[1.02] transition-all duration-300 text-left animate-fade-in-up opacity-0 will-change-transform"
                  style={{ animationDelay: `${i * 100 + 100}ms`, animationFillMode: "forwards" }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400 flex items-center gap-2">
                    <span className="text-2xl animate-bounce">{icon}</span> {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/automatisation?utm_source=home&utm_medium=problems&utm_campaign=see_how_auto_helps"
              className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition"
            >
              ⚡ Voir des exemples d’automatisation
            </Link>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />
        {/* Étapes d'accompagnement */}
        <section className="py-16 px-4 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Notre Méthodologie</h2>
            <p className="text-lg text-gray-400 mb-12 text-center">
              Une approche structurée et efficace pour transformer vos idées en solutions concrètes.
            </p>
            <div className="relative flex flex-col items-center">
              {/* Glowing vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-2 bg-gradient-to-b from-cyan-400/60 via-indigo-500/40 to-fuchsia-600/30 rounded-full blur-sm pointer-events-none"></div>
              <div className="flex flex-col gap-16 w-full z-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-center gap-8"
                  >
                    {/* Numbered step as large, low-opacity background text */}
                    <div className="relative flex-shrink-0">
                      <span className="text-[5rem] md:text-[7rem] font-extrabold text-cyan-400/10 absolute -top-8 -left-4 select-none pointer-events-none leading-none z-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-8 w-8 md:h-12 md:w-12 bg-cyan-500/80 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white relative z-10 shadow-lg border-4 border-white/20 animate-glow">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-lg flex-1 ml-4">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />
        {/* Nos expertises */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Nos solutions d’automatisation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {SolutionsSection.map((sol, i) => (
                <HoverPreview
                  key={i}
                  trigger={
                    <div
                      className="group relative bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-zinc-800 hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.05] flex flex-col items-center text-center cursor-pointer transform hover:rotate-1"
                    >
                      <div className="text-5xl mb-6 text-indigo-400 group-hover:animate-bounce">{sol.icon}</div>
                      <h3 className="text-2xl font-semibold mb-3">{sol.title}</h3>
                      <p className="text-gray-400 mb-6">{sol.desc}</p>
                      <span className="mt-auto text-indigo-400 group-hover:translate-x-2 transition-transform font-semibold cursor-pointer underline decoration-dotted">En savoir plus →</span>
                    </div>
                  }
                  title={sol.title}
                  description={sol.longDesc || sol.desc}
                  imageSrc={sol.img}
                  href={undefined}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/automatisation?utm_source=home&utm_medium=solutions&utm_campaign=explore_workflows"
                className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition"
              >
                🔍 Explorer nos workflows d’automatisation
              </Link>
            </div>
          </div>
        </section>
        {/* KPI Band */}
        <section className="py-12 bg-gradient-to-r from-cyan-900/40 via-black to-indigo-900/40 text-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-10 items-center">
            <div className="flex-1 text-center">
              <KpiCounter to={120} suffix="h" className="text-6xl font-extrabold text-cyan-400" />
              <div className="uppercase text-sm text-gray-300 tracking-wide">heures économisées/mois</div>
            </div>
            <div className="flex-1 text-center">
              <KpiCounter to={35} prefix="-" suffix="%" className="text-6xl font-extrabold text-indigo-300" />
              <div className="uppercase text-sm text-gray-300 tracking-wide">taux d’erreur réduit</div>
            </div>
            <div className="flex-1 text-center">
              <KpiCounter to={250} prefix="+" suffix="%" className="text-6xl font-extrabold text-pink-400" />
              <div className="uppercase text-sm text-gray-300 tracking-wide">ROI boosté</div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />

        {/* Expertises IA */}
        <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">

            <h2 className="text-4xl font-extrabold mb-6">
              Notre expertise en automatisation & RPA
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Nous concevons et déployons des workflows qui éliminent les tâches répétitives, réduisent les erreurs et connectent vos outils (ERP, CRM, e-commerce, bureautique).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              {points.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4"
                >
                  <CheckCircleIcon className="h-6 w-6 text-indigo-500 shrink-0" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Divider */}
        <NeonDivider />
        <CiblesSection />
        {/* Glossaire IA */}
        <section className="py-20 px-4 md:px-12 bg-zinc-950 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Glossaire de l’automatisation (RPA & data)</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            Familiarisez-vous avec les concepts clés de l’automatisation : RPA, orchestrateurs, intégrations API, files d’attente, webhooks, ETL, etc.
          </p>
          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Rechercher un terme..."
              className="w-full px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
              id="glossary-search"
            />
            <script nonce={nonce} dangerouslySetInnerHTML={{
              __html: `
  (function(){
    var input = document.getElementById('glossary-search');
    if (!input) return;
    input.addEventListener('input', function(e){
      var v = (e.target && e.target.value || '').toLowerCase();
      document.querySelectorAll('.glossary-term').forEach(function(div){
        var term = (div.getAttribute('data-term') || '').toLowerCase();
        div.style.display = term.indexOf(v) !== -1 ? '' : 'none';
      });
    });
  })();
` }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {glossaire.map(({ terme, definition }, i) => (
              <div
                key={i}
                className="glossary-term border border-zinc-800 rounded-lg p-6 bg-zinc-900 hover:scale-[1.02] hover:shadow-indigo-500/10 transition-all duration-300 group"
                data-term={terme}
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-400 flex items-center gap-2">
                  <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">📘</span> {terme}
                </h3>
                <p className="text-gray-300 text-sm">{definition}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Questions fréquentes */}
        <FAQSection />
        {/* Témoignage */}
        <TemoignageSection />
        {/* Divider */}
        <NeonDivider />
        {/* CTA final */}
        <section className="py-16 px-4 text-center bg-gradient-to-br from-black to-zinc-900 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à propulser votre business avec l’automatisation ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Contactez-nous pour une démo de workflows RPA ou découvrez nos plans adaptés à votre structure.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact?utm_source=home&utm_medium=final_cta&utm_campaign=contact"
              className="relative px-6 py-3 rounded-lg font-semibold transition bg-indigo-600 hover:bg-indigo-700 text-white"
              style={{ boxShadow: "0 0 0 2px #818cf8, 0 0 16px 2px #818cf8" }}
            >
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-400 animate-gradient border-gradient pointer-events-none z-0"></span>
              <span className="relative z-10">Contactez-nous</span>
            </Link>
            <Link
              href="/pricing?utm_source=home&utm_medium=final_cta&utm_campaign=pricing"
              className="border border-indigo-500 text-indigo-400 hover:bg-indigo-800 px-6 py-3 rounded-lg font-semibold transition"
            >
              Voir les tarifs
            </Link>
          </div>
          <style>{`
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient-move 3s ease-in-out infinite;
            }
            @keyframes gradient-move {
              0% {background-position: 0% 50%;}
              50% {background-position: 100% 50%;}
              100% {background-position: 0% 50%;}
            }
          `}</style>
        </section>
        <NeonDivider />
        {/* Audit gratuit CTA */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          <div className="mb-1 mr-1 bg-black/70 px-3 py-1 rounded-full text-xs text-cyan-300 font-semibold shadow border border-cyan-400/30 animate-fade-in-up">
            <span id="cta-demand-count">12</span> cette semaine
          </div>
          <Link
            href="/services/audit-gratuit?utm_source=home&utm_medium=fab&utm_campaign=audit_free"
            className="relative bg-[#00e0ff] text-black px-5 py-3 rounded shadow hover:scale-110 transition-all font-bold animate-pulse"
            style={{ boxShadow: "0 0 16px 4px #00e0ff55" }}
          >
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 animate-gradient pointer-events-none z-0 blur-sm opacity-60"></span>
            <span className="relative z-10">📩 Audit d’automatisation gratuit</span>
          </Link>
        </div>
      </main>
    </>
  )
}
