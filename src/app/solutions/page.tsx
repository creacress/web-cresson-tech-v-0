

import Link from 'next/link'
import { Metadata } from 'next'
import { HoverPreview, KpiCounter, SafeLink } from '@/components/Home/HomeInteractive'

export const metadata: Metadata = {
  title: 'Solutions IA pour PME — RPA, IA générative, Prédiction & Sites | Web Cresson Tech',
  description:
    "Tout ce qu'il faut pour accélérer votre PME avec l'IA : automatisation RPA, IA générative (agents), modèles prédictifs, apps & sites modernes. Audit gratuit en 48h.",
  alternates: { canonical: 'https://webcresson.com/solutions' },
  openGraph: {
    title: 'Solutions IA pour PME — Web Cresson Tech',
    description: "RPA, GénAI, Prédictif, Apps & Sites : nos solutions prêtes à déployer pour PME.",
    url: 'https://webcresson.com/solutions',
    images: [
      { url: 'https://webcresson.com/images/solutions-hero.webp', width: 1200, height: 630, alt: 'Solutions IA pour PME' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions IA pour PME',
    description: 'Automatisation RPA, IA générative, prédiction, apps & sites modernes. Audit gratuit en 48h.',
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
            { '@type': 'ListItem', position: 2, name: 'Solutions IA', item: 'https://webcresson.com/solutions' },
          ],
        }) }}
      />

      {/* WebPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'WebPage',
          name: 'Solutions IA pour PME — Web Cresson Tech',
          url: 'https://webcresson.com/solutions',
          inLanguage: 'fr',
          isPartOf: { '@type': 'WebSite', name: 'WebCressonTech', url: 'https://webcresson.com' },
        }) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden text-center py-16 sm:py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-2xl border border-[#1f1f1f]">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
          Solutions IA pour les PME
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Automatisation <strong>RPA</strong>, <strong>IA générative</strong>, <strong>modèles prédictifs</strong> et <strong>apps & sites modernes</strong>.
          Des résultats concrets, en semaines, pas en mois.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/services/audit-gratuit?utm_source=solutions&utm_medium=hero&utm_campaign=audit" className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
            Demander un audit gratuit
          </Link>
          <Link href="/contact?utm_source=solutions&utm_medium=hero&utm_campaign=contact" className="inline-block border border-[#00e0ff55] text-white px-6 py-3 rounded hover:bg-white/10 transition">
            Parler à un expert
          </Link>
        </div>
        <span aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.15),transparent_60%)]" />
      </section>

      {/* PROOF / KPI */}
      <section className="my-16 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Impact mesurable</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div>
            <KpiCounter to={120} suffix="h" className="text-5xl font-extrabold text-cyan-400" />
            <p className="text-gray-400">heures économisées / mois</p>
          </div>
          <div>
            <KpiCounter to={35} prefix="-" suffix="%" className="text-5xl font-extrabold text-indigo-300" />
            <p className="text-gray-400">erreurs en moins</p>
          </div>
          <div>
            <KpiCounter to={250} prefix="+" suffix="%" className="text-5xl font-extrabold text-pink-400" />
            <p className="text-gray-400">ROI sur 6–12 mois</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="my-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Nos 4 piliers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🤖',
              title: 'Automatisation RPA',
              desc: 'Bots Python/low-code pour supprimer la saisie répétitive et orchestrer vos workflows.',
              link: '/services/rpa',
              img: '/images/services/rpa-preview.jpg',
              longDesc: 'Gagnez du temps et fiabilisez la production : extraction de données, ETL, emails, factures.'
            },
            {
              icon: '🧠',
              title: 'IA générative (agents)',
              desc: 'Agents IA pour support, qualification prospects et rédaction assistée.',
              link: '/services/intelligence-artificielle',
              img: '/images/services/ia-preview.jpg',
              longDesc: 'Assistants connectés à vos données/outils avec garde-fous (RGPD, logs, rôles).'
            },
            {
              icon: '🎬',
              title: 'Générateur IA — Vidéos & Images',
              desc: 'Vidéos verticales 9:16 et visuels e‑commerce réalistes, exports social‑ready.',
              link: '/services/generateur-ia',
              img: '/images/services/generateur-ia-preview.jpg',
              longDesc: 'Pipeline IA pour créer rapidement des vidéos et images de haute qualité (9:16, 16:9, 1:1), cohérentes avec votre charte. Optimisé réseaux sociaux et e‑commerce.'
            },
            {
              icon: '📈',
              title: 'Modèles prédictifs',
              desc: 'Prévision ventes, détection d’anomalies, maintenance prédictive.',
              link: '/services/bi',
              img: '/images/services/ml-preview.jpg',
              longDesc: 'Des modèles utiles, monitorés et expliqués (features & drift).'
            },
            {
              icon: '🌐',
              title: 'Apps & Sites modernes',
              desc: 'Sites rapides (CWV), portails clients, intégrations ERP/CRM.',
              link: '/website',
              img: '/images/website-hero.webp',
              longDesc: 'Design premium, sécurité, formulaires avancés, analytics & SEO.'
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
        <h2 className="text-3xl font-bold text-center mb-10">Comment on déploie (sans frictions)</h2>
        <ol className="relative border-l border-[#1f1f1f] max-w-3xl mx-auto pl-6">
          {[ 
            { t: 'Audit 48h', d: 'Vous décrivez vos processus. On rend un diagnostic + quick wins + ROI.' },
            { t: 'POC rapide', d: '1 cas d’usage prioritaire pour valider la valeur en conditions réelles.' },
            { t: 'MVP 2–4 semaines', d: 'Intégrations, sécurité, logs, monitoring. Formation des équipes.' },
            { t: 'Run & amélioration', d: 'SLA, supervision, nouvelles features selon vos retours.' },
          ].map((s, i) => (
            <li key={i} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] mt-2" />
              <h3 className="text-lg font-semibold">{`${i + 1}. ${s.t}`}</h3>
              <p className="text-gray-400 text-sm">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Packs (Offer JSON-LD + AggregateOffer) */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-2">Packs prêts à démarrer</h2>
        <p className="text-gray-400 text-center mb-8">Choisissez un point d’entrée, on adapte ensuite.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            { name: 'Pack RPA Starter', price: 1490, sku: 'rpa-starter', url: '/services/rpa' },
            { name: 'Pack GénAI Starter', price: 1990, sku: 'genai-starter', url: '/services/intelligence-artificielle' },
            { name: 'Pack Prédictif Starter', price: 2490, sku: 'ml-starter', url: '/services/bi' },
            { name: 'Pack Générateur IA — Médias', price: 990, sku: 'genai-media-starter', url: '/services/generateur-ia' },
          ].map((p, i) => (
            <div key={i} className="group relative">
              <div className="rounded-xl border border-[#00e0ff44] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff88] hover:shadow-[0_12px_36px_-12px_#00e0ff88]">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-3xl font-extrabold my-2">{p.price}€</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc pl-5">
                  <li>Atelier cadrage & ROI</li>
                  <li>Implémentation rapide (1 use case)</li>
                  <li>Intégrations & sécurité</li>
                  <li>Formation & transfert</li>
                </ul>
                <Link href={`${p.url}?utm_source=solutions&utm_medium=pricing&utm_campaign=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition">Choisir</Link>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  '@context': 'https://schema.org', '@type': 'Product', name: p.name, description: 'Pack IA pour PME', sku: p.sku, brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
                  offers: { '@type': 'Offer', priceCurrency: 'EUR', price: p.price, availability: 'https://schema.org/InStock', url: `https://webcresson.com/solutions?plan=${p.sku}` }
                }) }} />
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(500px_circle_at_50%_0%,#00e0ff1f,transparent_60%)]"></span>
            </div>
          ))}
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
        <h2 className="text-3xl font-bold mb-6">Voir une démo adaptée à votre profil</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { key: 'julie', t: 'Julie — TPE', href: '/solutions/julie' },
            { key: 'marc', t: 'Marc — PME services', href: '/solutions/marc' },
            { key: 'lisa', t: 'Lisa — Industrie', href: '/solutions/lisa' },
          ].map((p) => (
            <Link key={p.key} href={`${p.href}?utm_source=solutions&utm_medium=personas&utm_campaign=${p.key}`} className="px-4 py-3 rounded-lg border border-[#00e0ff33] hover:border-[#00e0ff66] hover:bg-white/5 transition inline-block">
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
            { q: 'Combien de temps pour un premier résultat ?', a: 'Un POC en quelques jours, un MVP en 2–4 semaines selon la complexité.' },
            { q: 'Et la sécurité / RGPD ?', a: 'Contrôles d’accès, journalisation, cloisonnement des données, hébergement en UE lorsque requis.' },
            { q: 'Budget type ?', a: 'Packs Starter 1 490–2 490€, projets sur mesure selon périmètre. Audit gratuit pour cadrer.' },
          ].map((item, i) => (
            <details key={i} className="group p-4 open:bg-[#0b0b0b]">
              <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">{item.q}<span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span></summary>
              <p className="text-gray-400 mt-2">{item.a}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Combien de temps pour un premier résultat ?', acceptedAnswer: { '@type': 'Answer', text: 'POC en quelques jours, MVP en 2–4 semaines.' }},
            { '@type': 'Question', name: 'Et la sécurité / RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'Contrôles d’accès, journalisation, cloisonnement des données, hébergement en UE lorsque requis.' }},
            { '@type': 'Question', name: 'Budget type ?', acceptedAnswer: { '@type': 'Answer', text: 'Packs Starter 1490–2490€, projets sur mesure via audit.' }},
          ]
        }) }} />
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