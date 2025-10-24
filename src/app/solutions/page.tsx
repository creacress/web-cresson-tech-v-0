

import Link from 'next/link'
import { Metadata } from 'next'
import { HoverPreview, KpiCounter, SafeLink } from '@/components/Home/HomeInteractive'

export const metadata: Metadata = {
  title: 'Solutions IA & Automatisation — Micro‑entreprises, PME, ETI | WebCressonTech',
  description:
    "Accélérez vos opérations avec des solutions concrètes : automatisation (RPA), assistants IA, prédiction et sites/applications modernes. Audit gratuit sous 48 h.",
  keywords: ['automatisation', 'RPA', 'assistants IA', 'prédiction', 'modèles prédictifs', 'sites web', 'Next.js', 'PME', 'ETI', 'micro‑entreprise', 'WebCressonTech'],
  alternates: { canonical: 'https://webcresson.com/solutions' },
  openGraph: {
    title: 'Solutions IA & Automatisation — WebCressonTech',
    description: "Automatisation, assistants IA, prédiction, sites & apps — pensés pour micro‑entreprises, PME et ETI.",
    url: 'https://webcresson.com/solutions',
    images: [
      { url: 'https://webcresson.com/images/solutions-hero.webp', width: 1200, height: 630, alt: 'Solutions IA & Automatisation' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions IA & Automatisation',
    description: 'Des gains rapides et mesurables pour micro‑entreprises, PME et ETI. Audit gratuit sous 48 h.',
    images: ['https://webcresson.com/images/solutions-hero.webp'],
  },
}

export default function Page() {
  return (
    <main className="px-6 pt-10 pb-20 text-white max-w-7xl mx-auto">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://webcresson.com/' },
            { '@type': 'ListItem', position: 2, name: 'Solutions IA & Automatisation', item: 'https://webcresson.com/solutions' },
          ],
        }) }}
      />

      {/* WebPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'WebPage',
          name: 'Solutions IA & Automatisation — WebCressonTech',
          url: 'https://webcresson.com/solutions',
          inLanguage: 'fr',
          isPartOf: { '@type': 'WebSite', name: 'WebCressonTech', url: 'https://webcresson.com' },
          audience: {
            '@type': 'Audience',
            audienceType: ['Micro‑entreprise', 'PME', 'ETI']
          }
        }) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden text-center py-24 sm:py-28 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-2xl border border-[#1f1f1f]">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-12 sm:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
          IA et automatisation pour startups, PME et ETI
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Gagnez du temps et de la clarté. Nous installons des automatisations simples (RPA = robots logiciels), des assistants IA concrets et des sites/applications modernes. Objectif : moins de tâches répétitives, des données fiables et des décisions plus rapides.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/services/audit-gratuit?utm_source=solutions&utm_medium=hero&utm_campaign=audit" className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
            Demander un audit gratuit
          </Link>
          <Link href="/contact?utm_source=solutions&utm_medium=hero&utm_campaign=contact" className="inline-block border border-[#00e0ff55] text-white px-6 py-3 rounded hover:bg-white/10 transition">
            Parler à un expert
          </Link>
        </div>
        <div className="mt-6 max-w-4xl mx-auto grid sm:grid-cols-3 gap-4 text-left text-sm text-gray-300">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-1">Simplifier</h3>
            <p>On clarifie vos façons de faire et on enlève les actions inutiles.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-1">Automatiser</h3>
            <p>Des robots logiciels gèrent l’email, les factures, les exports et les copies entre outils.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-1">Valoriser la donnée</h3>
            <p>Des tableaux de bord et alertes compréhensibles pour savoir quoi faire, au bon moment.</p>
          </div>
        </div>
        <span aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.15),transparent_60%)]" />
      </section>

      {/* PROOF / KPI */}
      <section className="my-16 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Résultats concrets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div>
            <KpiCounter to={120} suffix="h" className="text-5xl font-extrabold text-cyan-400" />
            <p className="text-gray-400">heures économisées / mois</p>
          </div>
          <div>
            <KpiCounter to={30} prefix="+" suffix="%" className="text-5xl font-extrabold text-indigo-300" />
            <p className="text-gray-400">processus plus fiables</p>
          </div>
          <div>
            <KpiCounter to={250} prefix="+" suffix="%" className="text-5xl font-extrabold text-pink-400" />
            <p className="text-gray-400">vitesse de traitement</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="my-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Nos solutions clés
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🤖',
              title: 'Automatisation & RPA',
              desc: 'Robots logiciels qui exécutent vos tâches répétitives (email, factures, exports).',
              link: '/services/rpa',
              img: '/images/rpa.webp',
              longDesc: 'Nous créons des robots fiables pour saisir, extraire et transférer des données entre vos outils. Résultat : gain de temps et continuité de service.'
            },
            {
              icon: '🧠',
              title: 'Assistants IA (générative)',
              desc: 'Assistants virtuels pour le support, la qualification de prospects et la rédaction.',
              link: '/services/intelligence-artificielle',
              img: '/images/ia-générative.png',
              longDesc: 'Des assistants connectés à vos données avec des règles claires (droits d’accès, journaux, hébergement UE quand nécessaire). Utiles au quotidien et faciles à piloter.'
            },
            {
              icon: '🎬',
              title: 'Générateur IA — Vidéos & Images',
              desc: 'Création rapide de vidéos 9:16 et visuels e‑commerce cohérents avec votre marque.',
              link: '/services/generateur-ia',
              img: '/assets/generateur-ia/spider-man-IA.webp',
              longDesc: 'Un pipeline clé en main pour produire des contenus visuels en quelques clics (9:16, 16:9, 1:1), optimisés pour les réseaux et vos fiches produit.'
            },
            {
              icon: '📈',
              title: 'Prédiction & alertes',
              desc: 'Prévisions de ventes, détection d’anomalies, maintenance anticipée.',
              link: '/services/bi',
              img: '/images/Création_IA_sur_mesure.webp',
              longDesc: 'Des modèles simples à interpréter, avec suivi de performance. Vous savez quoi faire et pourquoi le faire.'
            },
            {
              icon: '🌐',
              title: 'Sites & Apps modernes',
              desc: 'Sites rapides et portails clients intégrés à vos outils (ERP/CRM).',
              link: '/website',
              img: '/images/pexels-kevin-ku-92347-577585.webp',
              longDesc: 'Design premium, formulaires avancés et SEO soigné. Objectif : visibilité et efficacité.'
            },
          ].map((sol, i) => (
            <HoverPreview
              key={i}
              trigger={
                <Link href={`${sol.link}?utm_source=solutions&utm_medium=grid&utm_campaign=${encodeURIComponent(sol.title)}`}
                  className="group relative bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-zinc-800 hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.03] flex flex-col items-center text-center">
                  <div className="text-5xl mb-6 text-indigo-400 group-hover:animate-bounce">{sol.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{sol.title}</h3>
                  <p className="text-gray-400 mb-6">{sol.desc}</p>
                  <span className="mt-auto text-indigo-400 group-hover:translate-x-2 transition-transform font-semibold underline decoration-dotted">Découvrir →</span>
                </Link>
              }
              title={sol.title}
              description={sol.longDesc}
              imageSrc={sol.img}
              href={`${sol.link}?utm_source=solutions&utm_medium=preview&utm_campaign=${encodeURIComponent(sol.title)}`}
            />
          ))}
        </div>
      </section>

      {/* How it works (Timeline) */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-10">Déploiement simple et rapide</h2>
        <ol className="relative border-l border-[#1f1f1f] max-w-3xl mx-auto pl-6">
          {[
            { t: 'Audit 48 h', d: 'Vous décrivez vos processus. Nous remettons un diagnostic clair, des actions rapides et une estimation de gains.' },
            { t: 'POC rapide', d: 'Un premier cas d’usage pour valider la valeur et l’adoption terrain.' },
            { t: 'MVP 2–4 semaines', d: 'Intégrations, sécurité, suivi et formation des équipes.' },
            { t: 'Run & évolutions', d: 'Supervision, nouvelles fonctions et montée en charge.' },
          ].map((s, i) => (
            <li key={i} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] mt-2" />
              <h3 className="text-lg font-semibold">{`${i + 1}. ${s.t}`}</h3>
              <p className="text-gray-400 text-sm">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Audience section (revamped: concrete solutions by size) */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-3">Solutions prêtes selon votre taille</h2>
        <p className="text-gray-400 text-center mb-8">Des exemples concrets et des mots simples. Cliquez pour voir la démo détaillée.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Micro‑entreprise */}
          <Link href="/solutions/micro?utm_source=solutions&utm_medium=audience_cards&utm_campaign=micro" className="group block rounded-xl border border-[#00e0ff22] hover:border-[#00e0ff88] bg-[#0b0b0b] p-6 transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold">Micro‑entreprise</h3>
              <span className="text-sm px-2 py-1 rounded bg-white/5 border border-white/10">Idéal pour démarrer</span>
            </div>
            <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
              <li>Boîte mail allégée : réponses auto simples, tri & relances</li>
              <li>Devis → facture → suivi payé (workflow léger)</li>
              <li>Site vitrine rapide + prise de contact/WhatsApp</li>
              <li>Posts auto (LinkedIn/TikTok) à partir de vos idées</li>
              <li>Tableau de bord : rendez‑vous, paiements, stocks</li>
            </ul>
            <span className="mt-4 inline-block text-[#00e0ff] font-semibold underline decoration-dotted">Voir la démo Micro →</span>
          </Link>

          {/* PME */}
          <Link href="/solutions/pme?utm_source=solutions&utm_medium=audience_cards&utm_campaign=pme" className="group block rounded-xl border border-[#00e0ff22] hover:border-[#00e0ff88] bg-[#0b0b0b] p-6 transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold">PME</h3>
              <span className="text-sm px-2 py-1 rounded bg-white/5 border border-white/10">Gain de temps immédiat</span>
            </div>
            <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
              <li>Mise en qualité des données (contacts, produits, tarifs)</li>
              <li>Automatisation des tâches récurrentes (commandes, SAV)</li>
              <li>Connecteurs ERP/CRM : exports, imports, synchronisation</li>
              <li>Reporting en temps réel (ventes, marge, ruptures)</li>
              <li>Assistants IA pour support et prospection (scripts guidés)</li>
            </ul>
            <span className="mt-4 inline-block text-[#00e0ff] font-semibold underline decoration-dotted">Voir la démo PME →</span>
          </Link>

          {/* ETI */}
          <Link href="/solutions/eti?utm_source=solutions&utm_medium=audience_cards&utm_campaign=eti" className="group block rounded-xl border border-[#00e0ff22] hover:border-[#00e0ff88] bg-[#0b0b0b] p-6 transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold">ETI</h3>
              <span className="text-sm px-2 py-1 rounded bg-white/5 border border-white/10">Scalabilité & fiabilité</span>
            </div>
            <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
              <li>Migrations de systèmes d’information (SI) sans rupture</li>
              <li>Architecture de données fiable (catalogue, traçabilité)</li>
              <li>Workflows n8n orchestrés (droits, journaux, supervision)</li>
              <li>Détection d’anomalies & alertes (qualité, finance, prod)</li>
              <li>Portails clients & APIs sécurisées, intégrées à vos outils</li>
            </ul>
            <span className="mt-4 inline-block text-[#00e0ff] font-semibold underline decoration-dotted">Voir la démo ETI →</span>
          </Link>
        </div>
        <p className="text-center text-xs text-gray-500 mt-4">SI = système d’information. Tout est expliqué avec des mots simples lors de l’audit.</p>
      </section>
      {/* Problems to solutions (client‑friendly) */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-6">Problèmes courants → solutions rapides</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold mb-2">Emails et demandes qui s’accumulent</h3>
            <p className="text-gray-300">Tri auto, réponses modèles, relances programmées, assignation au bon interlocuteur.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold mb-2">Factures / devis en retard</h3>
            <p className="text-gray-300">Chaîne devis → facture → paiement, rappels automatiques et suivi des impayés.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold mb-2">Données dispersées ou incohérentes</h3>
            <p className="text-gray-300">Mise en qualité (doublons, formats), synchronisation ERP/CRM et tableau de bord clair.</p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'AggregateOffer', url: 'https://webcresson.com/solutions', priceCurrency: 'EUR', lowPrice: 1490, highPrice: 2490, offerCount: 4,
        offers: [
          { '@type': 'Offer', price: 1490, priceCurrency: 'EUR', url: 'https://webcresson.com/solutions?plan=rpa-starter', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 1990, priceCurrency: 'EUR', url: 'https://webcresson.com/solutions?plan=genai-starter', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 2490, priceCurrency: 'EUR', url: 'https://webcresson.com/solutions?plan=ml-starter', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 990, priceCurrency: 'EUR', url: 'https://webcresson.com/solutions?plan=genai-media-starter', availability: 'https://schema.org/InStock' },
        ],
      }) }} />

      {/* Personas entry points */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Voir une démo selon votre besoin</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { key: 'micro', t: 'Micro‑entreprise', href: '/solutions/micro' },
            { key: 'pme', t: 'PME', href: '/solutions/pme' },
            { key: 'eti', t: 'ETI', href: '/solutions/eti' },
          ].map((p) => (
            <Link key={p.key} href={`${p.href}?utm_source=solutions&amp;utm_medium=personas&amp;utm_campaign=${p.key}`} className="px-4 py-3 rounded-lg border border-[#00e0ff33] hover:border-[#00e0ff66] hover:bg-white/5 transition inline-block">
              {p.t}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ visible + JSON-LD */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ — Solutions IA</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            { q: 'Quand verrai‑je un premier résultat ?', a: 'Un POC en quelques jours, un MVP en 2–4 semaines selon le périmètre. On vise des gains visibles dès le 1er mois.' },
            { q: 'Comment gérez‑vous la sécurité et le RGPD ?', a: 'Droits d’accès, journaux, cloisonnement, hébergement en UE si nécessaire. Nous expliquons chaque mesure simplement et par écrit.' },
            { q: 'Quel budget prévoir ?', a: 'Packs Starter 1 490–2 490€, puis projet sur mesure selon vos objectifs. L’audit gratuit permet de cadrer précisément.' },
          ].map((item, i) => (
            <details key={i} className="group p-4 open:bg-[#0b0b0b]">
              <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">{item.q}<span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span></summary>
              <p className="text-gray-400 mt-2">{item.a}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "inLanguage": "fr",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quand verrai‑je un premier résultat ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un POC en quelques jours, un MVP en 2–4 semaines selon le périmètre. On vise des gains visibles dès le 1er mois."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment gérez‑vous la sécurité et le RGPD ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Droits d’accès, journaux, cloisonnement, hébergement en UE si nécessaire. Nous expliquons chaque mesure simplement et par écrit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quel budget prévoir ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Packs Starter 1 490–2 490€, puis projet sur mesure selon vos objectifs. L’audit gratuit permet de cadrer précisément."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* Final CTA */}
      <section className="text-center mt-10">
        <SafeLink href="/services/audit-gratuit?utm_source=solutions&utm_medium=final_cta&utm_campaign=audit" className="inline-block bg-[#00e0ff] text-black px-7 py-3 rounded font-semibold hover:scale-105 transition">
          Commencer avec un audit gratuit
        </SafeLink>
      </section>
    </main>
  )
}