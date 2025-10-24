

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PME — IA & Automatisation concrètes | WebCressonTech',
  description:
    "Pour les PME : simplifier les processus, automatiser les tâches répétitives et valoriser la donnée. Robots logiciels (RPA), assistants IA, prédiction et sites/applications modernes. Déploiement en 2–4 semaines.",
  alternates: { canonical: 'https://webcresson.com/solutions/pme' },
  openGraph: {
    title: 'Solutions PME — IA & Automatisation',
    description:
      'Des gains rapides et mesurables pour les PME : RPA (robots logiciels), assistants IA, prédiction et sites/applications modernes.',
    url: 'https://webcresson.com/solutions/pme',
    images: [
      {
        url: 'https://webcresson.com/images/solutions-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Solutions IA & Automatisation pour PME',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PME — IA & Automatisation concrètes',
    description:
      'Automatisation des tâches, assistants IA, prédiction, sites & apps. Déploiement simple, accompagnement clair.',
    images: ['https://webcresson.com/images/solutions-hero.webp'],
  },
  keywords: [
    'PME',
    'automatisation',
    'RPA',
    'assistants IA',
    'prédiction',
    'site web PME',
    'application métier',
    'WebCressonTech',
    // Ajouts spécifiques PME
    'mise en qualité des données',
    'migration SI',
    'traitement email saturé',
    'automatisation de processus',
    'automatisation de tâches récurrentes',
    'intégration ERP',
    'intégration CRM',
    'reporting temps réel',
    'tableaux de bord',
    'détection d’anomalies',
    'scraping intelligent',
    'workflows n8n',
    'chatbots',
    'assistants IA PME',
    'Next.js 15',
  ],
};

export default function PagePME() {
  return (
    <>
      {/* JSON-LD — Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://webcresson.com/' },
              { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://webcresson.com/solutions' },
              { '@type': 'ListItem', position: 3, name: 'PME', item: 'https://webcresson.com/solutions/pme' },
            ],
          }),
        }}
      />
      {/* JSON-LD — WebPage + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Solutions IA & Automatisation pour PME — WebCressonTech',
            url: 'https://webcresson.com/solutions/pme',
            inLanguage: 'fr',
            isPartOf: { '@type': 'WebSite', name: 'WebCressonTech', url: 'https://webcresson.com' },
            audience: { '@type': 'Audience', audienceType: ['PME'] },
            mainEntity: {
              '@type': 'Service',
              name: 'Automatisation & IA pour PME',
              areaServed: ['France', 'Europe'],
              provider: { '@type': 'Organization', name: 'WebCressonTech', url: 'https://webcresson.com' },
              serviceType: ['Automatisation (RPA)', 'Assistants IA', 'Prédiction', 'Développement site/app'],
              offers: {
                '@type': 'Offer',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  price: '1490-2490',
                },
                description: 'Packs Starter, puis projets sur mesure selon objectifs.',
                url: 'https://webcresson.com/solutions/pme',
              },
            },
          }),
        }}
      />

      <section className="relative overflow-hidden text-center py-16 sm:py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-2xl border border-[#1f1f1f]">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
          IA & automatisation pour les PME
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Accélérez vos opérations avec des solutions claires : robots logiciels (<strong>RPA</strong> —{" "}
          <em>des logiciels qui réalisent vos tâches à votre place</em>), assistants IA, modèles de prédiction et
          sites/applications modernes. Déploiement simple, accompagnement pédagogique.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/services/audit-gratuit?utm_source=pme&amp;utm_medium=hero&amp;utm_campaign=audit"
            className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Demander un audit gratuit
          </Link>
          <Link
            href="/contact?utm_source=pme&amp;utm_medium=hero&amp;utm_campaign=contact"
            className="inline-block border border-[#00e0ff55] text-white px-6 py-3 rounded hover:bg-white/10 transition"
          >
            Parler à un expert
          </Link>
        </div>
        {/* Keywords chips bar */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {[
            'Mise en qualité des données',
            'Migration de SI',
            'Automatisation de process internes',
            'Automatisation de tâches récurrentes',
            'Traitement Email saturé',
            'Reporting temps réel',
            'Intégration ERP/CRM',
            'Scraping intelligent',
            'Workflows n8n',
            'Chatbots & Assistants IA',
          ].map((k) => (
            <span
              key={k}
              className="px-3 py-1 rounded-full text-sm border border-[#00e0ff33] text-gray-200 bg-white/5 hover:border-[#00e0ff66] hover:bg-white/10 transition"
            >
              {k}
            </span>
          ))}
        </div>
        <div className="mt-6 max-w-4xl mx-auto grid sm:grid-cols-3 gap-4 text-left text-sm text-gray-300">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-1">Simplifier</h3>
            <p>Des processus clairs et fluides, sans actions superflues.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-1">Automatiser</h3>
            <p>Des robots logiciels exécutent les tâches répétitives (emails, factures, reporting).</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-1">Valoriser la donnée</h3>
            <p>Des indicateurs clairs pour décider vite : prévisions, alertes, tableaux de bord.</p>
          </div>
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.15),transparent_60%)]"
        />
      </section>

      {/* Vos objectifs prioritaires */}
      <section className="my-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Vos objectifs prioritaires</h2>
        <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
          On démarre simple : un premier cas d’usage qui vous fait gagner du temps, fiabilise vos données et améliore l’expérience client.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Gagner du temps', d: 'Moins de saisies manuelles, plus d’actions utiles.' },
            { t: 'Diminuer les erreurs', d: 'Contrôles automatiques et données à jour.' },
            { t: 'Accélérer la facturation', d: 'Factures prêtes, relances cadrées, cash plus rapide.' },
            { t: 'Répondre plus vite aux clients', d: 'Templates et assistants pour rester réactif.' },
            { t: 'Voir clair dans la trésorerie', d: 'Tableaux de bord actualisés automatiquement.' },
            { t: 'Piloter en un coup d’œil', d: 'Indicateurs simples, décisions rapides.' },
          ].map((c, i) => (
            <div key={i} className="bg-white/5 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-1">{c.t}</h3>
              <p className="text-gray-300">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problèmes fréquents que l’on corrige */}
      <section className="my-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Problèmes fréquents que l’on corrige</h2>
        <ul className="max-w-3xl mx-auto space-y-3 text-gray-300">
          {[
            'Devis envoyés tard → relances irrégulières',
            'Factures PDF non intégrées en compta',
            'Double saisie entre CRM, Excel et ERP',
            'Aucune vision quotidienne des ventes et du cash',
            'Boîte mail support saturée, réponses hétérogènes',
            'Stocks et commandes non synchronisés',
          ].map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span aria-hidden className="mt-1">✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Besoins d'une PME */}
      <section className="my-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Les besoins concrets d’une PME</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              t: 'Comptabilité & Finance',
              d: 'Factures, rapprochements, notes de frais, relances. Objectif : flux rapides et documents à jour.',
            },
            {
              t: 'Ventes & Marketing',
              d: 'Devis, CRM, emails, publications sociales. Objectif : plus de contacts utiles et un suivi régulier.',
            },
            {
              t: 'Opérations & Production',
              d: 'Commandes, stocks, suivi qualité. Objectif : continuité, visibilité, délais maîtrisés.',
            },
            {
              t: 'Support & Service client',
              d: 'Réponses rapides, base de connaissances, suivi des demandes. Objectif : satisfaction et fidélité.',
            },
            {
              t: 'RH & Administration',
              d: 'Dossiers, contrats, planning, onboarding. Objectif : organisation simple, dossiers complets.',
            },
            {
              t: 'Direction & Pilotage',
              d: 'Indicateurs, prévisions, tableaux de bord. Objectif : décisions rapides, priorités claires.',
            },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-zinc-800 hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{c.t}</h3>
              <p className="text-gray-300">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comment l'automatisation aide */}
      <section className="my-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Comment l’automatisation aide une PME</h2>
      {/* Solutions en un coup d’œil */}
      <section className="my-16 max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-[radial-gradient(ellipse_at_top,rgba(0,224,255,0.15),transparent_60%)]" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
            Solutions en un coup d’œil
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🧼',
              t: 'Mise en qualité des données',
              d: 'Nettoyage, dédoublonnage, formats homogènes — pour des rapports fiables.',
            },
            {
              icon: '🧩',
              t: 'Migration de systèmes (SI)',
              d: 'Transfert serein de vos outils et données, avec tests et continuité de service.',
            },
            {
              icon: '📨',
              t: 'Traitement Email « saturé »',
              d: 'Classement, priorisation, réponses préparées et envoi de synthèses quotidiennes.',
            },
            {
              icon: '⚙️',
              t: 'Automatisation de process internes',
              d: 'Robots logiciels pour les enchaînements récurrents entre vos outils.',
            },
            {
              icon: '⏱️',
              t: 'Automatisation des tâches récurrentes',
              d: 'Extraction, saisie, export — fait automatiquement à horaires définis.',
            },
            {
              icon: '📈',
              t: 'Reporting & tableaux de bord',
              d: 'Indicateurs de ventes, cash et production mis à jour sans effort.',
            },
            {
              icon: '🔗',
              t: 'Intégrations ERP / CRM',
              d: 'Synchronisation contacts, commandes, stocks et documents.',
            },
            {
              icon: '🧠',
              t: 'Chatbots & Assistants IA',
              d: 'Qualification de prospects, support et rédaction assistée (avec validation humaine).',
            },
            {
              icon: '🕸️',
              t: 'Scraping intelligent & veille',
              d: 'Collecte et analyse de données web pour surveiller marché et concurrents.',
            },
            {
              icon: '🔄',
              t: 'Workflows n8n',
              d: 'Chaînes d’actions automatisées (imports, posts, notifications, synchronisations).',
            },
            {
              icon: '🚨',
              t: 'Détection d’anomalies',
              d: 'Alertes simples en cas d’écart inhabituel (ventes, trésorerie, qualité).',
            },
            {
              icon: '🌐',
              t: 'Sites & Apps Next.js 15',
              d: 'Portails rapides et SEO-friendly, intégrés à vos outils quand c’est pertinent.',
            },
          ].map((x, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-[#1f1f1f] rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-cyan-400/10 hover:shadow-xl transition"
            >
              <div className="text-3xl mb-3">{x.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{x.t}</h3>
              <p className="text-gray-300">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider before Cas d'usage */}
      <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#00e0ff33] to-transparent" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              t: 'Saisie & transfert de données',
              d: 'Les robots logiciels récupèrent des informations (PDF, emails, tableaux) et les déposent au bon endroit (compta, CRM, Excel partagé).',
            },
            {
              t: 'Relances & notifications',
              d: 'Rappels doux et réguliers pour devis, factures, rendez-vous, avec un suivi clair.',
            },
            {
              t: 'Reporting automatique',
              d: 'Des tableaux de bord mis à jour sans effort : ventes, trésorerie, production, satisfaction.',
            },
            {
              t: 'Assistants IA',
              d: 'Des assistants qui préparent des réponses, classent des messages et rédigent des comptes rendus — avec validation humaine.',
            },
            {
              t: 'Prédiction & alertes',
              d: 'Prévisions de ventes ou de charge, détection d’écarts inhabituels, alertes simples à comprendre.',
            },
            {
              t: 'Sites & applications',
              d: 'Formulaires intelligents, portails clients et intégrations aux outils existants (ERP/CRM) quand c’est pertinent.',
            },
          ].map((c, i) => (
            <div key={i} className="bg-[#0b0b0b] p-6 rounded-xl border border-[#1f1f1f]">
              <h3 className="text-lg font-semibold text-white mb-2">{c.t}</h3>
              <p className="text-gray-300">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Déploiement simple */}
      <section className="my-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Déploiement simple et rapide</h2>
        <ol className="relative border-l border-[#1f1f1f] max-w-3xl mx-auto pl-6">
          {[
            {
              t: 'Audit 48 h',
              d: 'Vous décrivez vos processus. Nous remettons un diagnostic clair, des actions rapides et une estimation de gains.',
            },
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

      {/* Packs conseillés pour PME */}
      <section className="my-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Packs conseillés pour PME</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: '1 490–2 490€',
              features: [
                'Audit 48 h + plan d’actions',
                '1 cas d’usage prioritaire (RPA ou assistant IA)',
                'Tableau de bord simple',
                'Formation courte',
              ],
              cta: '/contact?utm_source=pme&amp;utm_medium=packs&amp;utm_campaign=starter',
            },
            {
              name: 'Growth',
              price: 'sur devis',
              features: [
                '3–5 automatisations coordonnées',
                'Assistant IA connecté à vos données',
                'Portail simple (clients ou interne)',
                'Suivi mensuel et évolutions',
              ],
              cta: '/contact?utm_source=pme&amp;utm_medium=packs&amp;utm_campaign=growth',
            },
            {
              name: 'Pro',
              price: 'sur devis',
              features: [
                'Flux complets inter-outils',
                'Modèles de prédiction et alertes',
                'Portail avancé (ERP/CRM si pertinent)',
                'SLA de supervision',
              ],
              cta: '/contact?utm_source=pme&amp;utm_medium=packs&amp;utm_campaign=pro',
            },
          ].map((p, i) => (
            <div key={i} className="bg-white/5 border border-[#00e0ff22] rounded-xl p-6">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <span className="text-lg text-gray-300">{p.price}</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span aria-hidden>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={p.cta}
                className="mt-6 inline-block w-full text-center bg-[#00e0ff] text-black px-4 py-2 rounded font-semibold hover:scale-[1.02] transition"
              >
                Discuter de ce pack
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="my-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">FAQ — PME & automatisation</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            {
              q: 'Quels résultats concrets pour une PME ?',
              a: 'Des heures gagnées chaque mois, des documents prêts plus vite et des tableaux de bord toujours à jour.',
            },
            {
              q: 'Qu’entendez‑vous par RPA ?',
              a: 'RPA signifie « Robotic Process Automation » : des robots logiciels qui réalisent vos actions répétitives sur ordinateur, comme ouvrir un fichier, copier une information ou envoyer un email.',
            },
            {
              q: 'Comment gérez‑vous la sécurité et le RGPD ?',
              a: 'Droits d’accès, journaux, cloisonnement des données et hébergement en UE lorsque requis. Nous expliquons chaque mesure simplement.',
            },
            {
              q: 'Combien de temps pour un premier résultat ?',
              a: 'Un POC en quelques jours, un MVP en 2–4 semaines selon le périmètre.',
            },
            {
              q: 'Avec quels outils travaillez‑vous ?',
              a: 'Nous privilégions des outils modernes et durables (Next.js pour le web, n8n pour les workflows, Python pour les automatisations) lorsque c’est pertinent pour votre contexte.',
            },
          ].map((item, i) => (
            <details key={i} className="group p-4 open:bg-[#0b0b0b]">
              <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">
                {item.q}
                <span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span>
              </summary>
              <p className="text-gray-400 mt-2">{item.a}</p>
            </details>
          ))}
        </div>

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              inLanguage: 'fr',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Quels résultats concrets pour une PME ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Des heures gagnées chaque mois, des documents prêts plus vite et des tableaux de bord toujours à jour.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Qu’entendez‑vous par RPA ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'RPA signifie « Robotic Process Automation » : des robots logiciels qui réalisent vos actions répétitives sur ordinateur, comme ouvrir un fichier, copier une information ou envoyer un email.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Comment gérez‑vous la sécurité et le RGPD ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Droits d’accès, journaux, cloisonnement des données et hébergement en UE lorsque requis. Nous expliquons chaque mesure simplement.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Combien de temps pour un premier résultat ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Un POC en quelques jours, un MVP en 2–4 semaines selon le périmètre.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Avec quels outils travaillez‑vous ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nous privilégions des outils modernes et durables (Next.js pour le web, n8n pour les workflows, Python pour les automatisations) lorsque c’est pertinent pour votre contexte.',
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* CTA final */}
      <section className="my-16 text-center bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-10">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Prêt à lancer votre premier cas d’usage ?</h2>
        <p className="text-gray-300 mb-6">
          Nous proposons un audit gratuit pour cadrer une action rapide et mesurable.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/services/audit-gratuit?utm_source=pme&amp;utm_medium=cta&amp;utm_campaign=audit"
            className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Démarrer l’audit
          </Link>
          <Link
            href="/contact?utm_source=pme&amp;utm_medium=cta&amp;utm_campaign=contact"
            className="inline-block border border-[#00e0ff55] text-white px-6 py-3 rounded hover:bg-white/10 transition"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}