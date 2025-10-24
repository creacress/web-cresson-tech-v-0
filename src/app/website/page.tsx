import { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import FinalCTA from "@/components/Pricing/FinalCTA"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Création de site web moderne pour PME | Vitrine, E‑commerce, Portail client — Web Cresson Tech',
  description:
    'Sites web ultra‑rapides (Core Web Vitals), SEO technique, e‑commerce, portail client et intégrations métier. Conçus pour TPE/PME. Audit gratuit en 48h.',
  keywords: [
    'création site web PME', 'site vitrine moderne', 'site e‑commerce Next.js', 'agence site web Paris', 'SEO technique', 'Core Web Vitals', 'portail client', 'intégration CRM', 'hébergement managé', 'refonte site', 'performance web', 'accessibilité', 'schema.org', 'Lighthouse 90+' 
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: { canonical: 'https://webcresson.com/website' },
  openGraph: {
    type: 'website',
    title: 'Sites web modernes pour PME — Web Cresson Tech',
    description:
      'Vitrine, e‑commerce, portail client : SEO + performance, design premium et intégrations. Audit gratuit en 48h.',
    url: 'https://webcresson.com/website',
    images: [
      { url: 'https://webcresson.com/images/website-hero.webp', width: 1200, height: 630, alt: 'Création de site web moderne' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Création de site web moderne — Web Cresson Tech',
    description: 'Core Web Vitals, SEO, e‑commerce, intégrations. Audit gratuit en 48h.',
    images: ['https://webcresson.com/images/website-hero.webp'],
  },
}

export default function WebCreationPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://webcresson.com/' },
            { '@type': 'ListItem', position: 2, name: 'Création de site web', item: 'https://webcresson.com/website' },
          ],
        }) }}
      />
      <BreadcrumbJsonLd
        overrides={{
          services: 'Création de site web',
        }}
      />

      <ServiceSchema
        serviceName="Création de site web"
        serviceDescription="Sites web responsives, ultra‑rapides et orientés conversion : vitrine, e‑commerce, portail client, intégrations ERP/CRM et SEO technique."
        serviceTypes={[
          'Site vitrine',
          'E‑commerce',
          'Portail client',
          'Landing page',
          'Blog professionnel',
          'SEO technique',
          'Intégrations métier',
        ]}
        faq={[
          {
            question: 'Faites-vous des sites pour les petites entreprises ?',
            answer:
              'Oui, nous proposons des packs abordables et évolutifs pour les TPE et auto-entrepreneurs.',
          },
          {
            question: 'Puis-je gérer moi-même mon site une fois livré ?',
            answer:
              'Absolument, nous intégrons des CMS comme WordPress ou Strapi pour une gestion autonome.',
          },
          {
            question: 'Offrez-vous l’hébergement et la maintenance ?',
            answer:
              'Oui, nous proposons des offres avec hébergement, nom de domaine et support inclus.',
          },
        ]}
      />

      <section className="relative overflow-hidden text-center py-20 px-6 sm:px-12 md:px-24 bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
        <BreadcrumbNav />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
          Création de site web sur mesure pour PME
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Sites vitrines, e‑commerce et portails clients — <strong>rapides</strong>, <strong>SEO‑friendly</strong> et <strong>orientés conversion</strong>. Conçus pour les TPE/PME.
        </p>
        <nav aria-label="Appels à l'action" className="mt-8 flex items-center justify-center gap-3">
          <Link href="/services/audit-gratuit?utm_source=website&utm_medium=hero&utm_campaign=audit" className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
            Demander un audit gratuit
          </Link>
          <Link href="/contact?utm_source=website&utm_medium=hero&utm_campaign=contact" className="inline-block border border-[#00e0ff55] text-white px-6 py-3 rounded hover:bg-white/10 transition">
            Parler à un expert
          </Link>
        </nav>
        <span aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.15),transparent_60%)]" />
      </section>

      {/* Marquee logos — preuve sociale */}
      <section aria-labelledby="logos-title" className="my-16">
        <h2 id="logos-title" className="sr-only">Ils nous font confiance</h2>
        <div className="relative overflow-hidden rounded-xl border border-[#00e0ff22] bg-[#0b0b0b]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_circle_at_10%_20%,#00e0ff14,transparent_60%)]" aria-hidden />
          <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] flex gap-16 animate-[marquee_30s_linear_infinite] py-6 px-8 whitespace-nowrap">
            {['/images/logos/client1.svg','/images/logos/client2.svg','/images/logos/client3.svg','/images/logos/client4.svg','/images/logos/client5.svg','/images/logos/client6.svg'].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt="Logo client" className="h-10 w-auto opacity-80" />
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <section className="my-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Quels problèmes résolvons‑nous ?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { t: 'Pas de présence en ligne', d: 'On vous guide et on livre un site pro en quelques jours.' },
            { t: 'Site obsolète', d: 'On refond : design moderne, mobile‑first, SEO + performance.' },
            { t: 'Trop complexe à gérer', d: 'Back‑office simple + formation pour une autonomie totale.' },
          ].map((b, i) => (
            <div key={i} className="group relative">
              <div className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_#00e0ff66] hover:border-[#00e0ff66]">
                <h3 className="text-lg font-semibold mb-2 text-white">{b.t}</h3>
                <p className="text-gray-400 text-sm">{b.d}</p>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(420px_circle_at_50%_0%,#00e0ff22,transparent_60%)]" />
            </div>
          ))}
        </div>
      </section>

      {/* Templates par profil */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Templates & parcours par profil</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { k: 'particulier', t: '👤 Particulier', d: 'Portfolio, blog, CV pro. Simple et élégant.', img: '/images/templates/particulier.png' },
            { k: 'tpe', t: '🧑‍💼 TPE', d: 'Vitrine locale + prise de contact rapide.', img: '/images/templates/tpe.png' },
            { k: 'pme', t: '🏢 PME', d: 'Présentation, offres, intégrations outils métiers.', img: '/images/templates/PME.png' },
            { k: 'entreprise', t: '🏛️ Entreprise', d: 'Corporate, portail client, conformité & sécurité.', img: '/images/templates/entreprise.png' },
            { k: 'association', t: '🤝 Association', d: 'Valorisation des actions, dons en ligne, membres.', img: '/images/templates/association.png' },
          ].map((c, i) => (
            <div key={i} className="group relative">
              <div className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.t} className="rounded shadow object-contain h-40 w-full mb-4" />
                <h3 className="text-xl font-semibold mb-1">{c.t}</h3>
                <p className="text-gray-400 text-sm mb-4">{c.d}</p>
                <div className="flex gap-2">
                  <Link href={`/services/audit-gratuit?utm_source=website&utm_medium=templates&utm_campaign=${c.k}`} className="px-4 py-2 bg-[#00e0ff] text-black rounded font-semibold hover:scale-105 transition">Voir le template</Link>
                  <Link href={`/contact?utm_source=website&utm_medium=templates&utm_campaign=${c.k}`} className="px-4 py-2 border border-[#00e0ff55] rounded hover:bg-white/10 transition">Parler à un expert</Link>
                </div>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(420px_circle_at_50%_0%,#00e0ff22,transparent_60%)]" />
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Impact mesurable</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">90+</p><p className="text-gray-400">Scores Lighthouse & Core Web Vitals</p></div>
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">-60%</p><p className="text-gray-400">Temps de chargement moyen (TTFB/LCP)</p></div>
          <div><p className="text-5xl font-extrabold text-[#00e0ff]">+30%</p><p className="text-gray-400">Taux de conversion formulaires</p></div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="my-20" aria-labelledby="cases-title">
        <h2 id="cases-title" className="text-3xl font-bold text-center mb-8">Études de cas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { slug: 'refonte-boulangerie', title: 'Refonte boulangerie locale', kpi: '+112% trafic SEO', img: '/images/cases/boulangerie.webp' },
            { slug: 'ecommerce-b2b', title: 'E‑commerce B2B connecté ERP', kpi: 'x3 CA en 6 mois', img: '/images/cases/b2b.webp' },
            { slug: 'portail-client-pme', title: 'Portail client sécurisé pour PME', kpi: '-45% tickets support', img: '/images/cases/portail.webp' },
          ].map((c, i) => (
            <article key={i} className="group relative rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-4 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.title} className="h-40 w-full object-cover rounded" />
              <header className="mt-3">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-[#00e0ff] font-medium">{c.kpi}</p>
              </header>
              <Link href={`/cases/${c.slug}`} className="mt-4 inline-block px-4 py-2 bg-[#00e0ff] text-black rounded font-semibold group-hover:scale-105 transition">Voir le projet</Link>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(500px_circle_at_50%_0%,#00e0ff1f,transparent_60%)]" />
            </article>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: [
          { '@type': 'ListItem', position: 1, url: 'https://webcresson.com/cases/refonte-boulangerie' },
          { '@type': 'ListItem', position: 2, url: 'https://webcresson.com/cases/ecommerce-b2b' },
          { '@type': 'ListItem', position: 3, url: 'https://webcresson.com/cases/portail-client-pme' },
        ]
      }) }} />

      <section className="mt-20 bg-[#0f0f0f] rounded-xl p-8 shadow-md border border-[#1f2937]">
        <h2 className="text-3xl font-bold mb-6 text-center">⚙️ Fonctionnalités disponibles</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          <li>Core Web Vitals optimisés (LCP, CLS, INP)</li>
          <li>SEO technique (schema.org, sitemap, robots, meta)</li>
          <li>E‑commerce (paiement, panier, emails transactionnels)</li>
          <li>Portail client sécurisé (auth, rôles, espace documents)</li>
          <li>Intégrations (ERP/CRM, outils no‑code, webhooks)</li>
          <li>Formulaires avancés (anti‑bot, analytics, UTM)</li>
        </ul>
      </section>

      {/* Processus / HowTo */}
      <section className="my-20" aria-labelledby="process-title">
        <h2 id="process-title" className="text-3xl font-bold text-center mb-6">Notre process en 5 étapes</h2>
        <ol className="grid md:grid-cols-5 gap-4 text-gray-300">
          {[
            { t: 'Audit & objectifs', d: 'Audit gratuit, périmètre et KPIs.' },
            { t: 'UX & contenu', d: 'Wireframes, SEO sémantique, planning éditorial.' },
            { t: 'Design & dev', d: 'Design system, Next.js, tests CWV.' },
            { t: 'Mise en ligne', d: 'SEO technique, redirections, suivi analytics.' },
            { t: 'Croissance', d: 'A/B tests, optimisation, netlinking.' },
          ].map((s, i) => (
            <li key={i} className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-4">
              <p className="text-sm text-[#00e0ff]">Étape {i+1}</p>
              <h3 className="font-semibold">{s.t}</h3>
              <p className="text-sm text-gray-400">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'HowTo', name: 'Création de site web pour PME — process',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Audit & objectifs' },
          { '@type': 'HowToStep', position: 2, name: 'UX & contenu' },
          { '@type': 'HowToStep', position: 3, name: 'Design & développement' },
          { '@type': 'HowToStep', position: 4, name: 'Mise en ligne' },
          { '@type': 'HowToStep', position: 5, name: 'Croissance continue' }
        ]
      }) }} />

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-2">Packs site web</h2>
        <p className="text-gray-400 text-center mb-8">Lancez vite, faites évoluer ensuite.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            { name: 'Website Starter', price: 1290, sku: 'web-starter', features: ['1 page vitrine', 'Formulaire contact', '1 template personnalisé', 'Hébergement 1 mois'], url: '/website' },
            { name: 'Website Growth', price: 2990, sku: 'web-growth', features: ['5 pages', 'Blog/actus', 'SEO technique', 'Optimisation CWV'], url: '/website' },
            { name: 'Website Pro', price: 4990, sku: 'web-pro', features: ['10+ pages', 'Portail client / e‑commerce', 'Intégrations métiers', 'Monitoring & SLA'], url: '/website' },
          ].map((p, i) => (
            <div key={i} className="group relative">
              <div className="rounded-xl border border-[#00e0ff44] bg-[#0b0b0b] p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff88] hover:shadow-[0_12px_36px_-12px_#00e0ff88]">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-3xl font-extrabold my-2">{p.price}€</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc pl-5">
                  {p.features.map((f: string, fi: number) => (<li key={fi}>{f}</li>))}
                </ul>
                <Link href={`/services/audit-gratuit?utm_source=website&utm_medium=pricing&utm_campaign=pack&plan=${p.sku}`} className="inline-block bg-[#00e0ff] text-black px-5 py-2 rounded font-semibold hover:scale-105 transition">Choisir</Link>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Product',
                  name: p.name,
                  description: 'Pack site web pour PME',
                  sku: p.sku,
                  image: 'https://webcresson.com/images/website-hero.webp',
                  brand: { '@type': 'Brand', name: 'Web Cresson Tech' },
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: 'EUR',
                    price: p.price,
                    availability: 'https://schema.org/InStock',
                    url: `https://webcresson.com/website?plan=${p.sku}`,
                    hasMerchantReturnPolicy: {
                      '@type': 'MerchantReturnPolicy',
                      name: 'Pas de retour (prestation de service)',
                      applicableCountry: 'FR',
                      returnPolicyCategory: 'https://schema.org/NoReturn'
                    },
                    shippingDetails: {
                      '@type': 'OfferShippingDetails',
                      shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'EUR' },
                      shippingDestination: { '@type': 'DefinedRegion', name: 'FR' }
                    }
                  },
                  additionalProperty: p.features.map((f: string) => ({ '@type': 'PropertyValue', name: 'Feature', value: f }))
                }) }} />
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(500px_circle_at_50%_0%,#00e0ff1f,transparent_60%)]"></span>
            </div>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'AggregateOffer', url: 'https://webcresson.com/website', priceCurrency: 'EUR', lowPrice: 1290, highPrice: 4990, offerCount: 3,
        offers: [
          { '@type': 'Offer', price: 1290, priceCurrency: 'EUR', url: 'https://webcresson.com/website?plan=web-starter', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 2990, priceCurrency: 'EUR', url: 'https://webcresson.com/website?plan=web-growth', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', price: 4990, priceCurrency: 'EUR', url: 'https://webcresson.com/website?plan=web-pro', availability: 'https://schema.org/InStock' },
        ],
      }) }} />

      {/* Avis clients */}
      <section className="my-20" aria-labelledby="reviews-title">
        <h2 id="reviews-title" className="text-3xl font-bold text-center mb-6">Avis clients</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: 'Camille D.', r: 5, t: 'Livraison rapide et SEO au top.' },
            { n: 'Yassine B.', r: 5, t: 'Notre portail client a divisé par deux les emails support.' },
            { n: 'Lucie M.', r: 4.8, t: 'Design moderne, équipe réactive. On recommande !' },
          ].map((v, i) => (
            <figure key={i} className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-6">
              <figcaption className="font-semibold">{v.n}</figcaption>
              <p className="text-sm text-gray-400">★★★★★ <span className="sr-only">{v.r} sur 5</span></p>
              <blockquote className="mt-2 text-white">{v.t}</blockquote>
            </figure>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Product', name: 'Création de site web — prestation',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '37' },
        review: [
          { '@type': 'Review', author: { '@type': 'Person', name: 'Camille D.' }, reviewRating: { '@type': 'Rating', ratingValue: 5 } },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Yassine B.' }, reviewRating: { '@type': 'Rating', ratingValue: 5 } },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Lucie M.' }, reviewRating: { '@type': 'Rating', ratingValue: 4.8 } }
        ]
      }) }} />

      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ — Création de site web</h2>
        <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
          {[
            { q: 'En combien de temps livrez‑vous ?', a: 'Vitrine simple : 1–2 semaines. PME/Pro : 3–6 semaines selon périmètre.' },
            { q: 'Gérez‑vous l’hébergement ?', a: 'Oui. Hébergement managé, domaine et certificats inclus selon pack.' },
            { q: 'Est‑ce optimisé SEO ?', a: 'Oui : métadonnées, schema.org, sitemap, robots, performance Core Web Vitals.' },
          ].map((item, i) => (
            <details key={i} className="group p-4 open:bg-[#0b0b0b]">
              <summary className="cursor-pointer font-semibold text-white flex items-center justify-between">{item.q}<span className="ml-4 transition group-open:rotate-45 text-[#00e0ff]">+</span></summary>
              <p className="text-gray-400 mt-2">{item.a}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          inLanguage: 'fr',
          mainEntity: [
            { '@type': 'Question', name: 'En combien de temps livrez‑vous ?', acceptedAnswer: { '@type': 'Answer', text: 'Vitrine 1–2 semaines. PME/Pro 3–6 semaines selon périmètre.' }},
            { '@type': 'Question', name: 'Gérez‑vous l’hébergement ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Hébergement managé, domaine et certificats selon pack.' }},
            { '@type': 'Question', name: 'Est‑ce optimisé SEO ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui : métadonnées, schema.org, sitemap, robots, Core Web Vitals.' }},
          ]
        }) }} />
      </section>

      {/* Stack & conformité */}
      <section className="my-20 bg-[#0b0b0b] rounded-xl border border-[#00e0ff22] p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Stack & conformité</h2>
        <ul className="grid md:grid-cols-3 gap-4 text-gray-300 list-disc pl-6">
          <li>Next.js 15, React Server Components, Edge Runtime</li>
          <li>Tailwind CSS, images next/gen, optimisations INP/LCP</li>
          <li>CMS headless (Strapi), e‑commerce (Medusa/Shopify)</li>
          <li>Auth sécurisée (JWT/OAuth), RGPD & cookies conformes</li>
          <li>Accessibilité (WCAG 2.2 AA), tests Lighthouse</li>
          <li>Monitoring (Vercel Analytics, Sentry), SLA</li>
        </ul>
      </section>

      {/* Sticky CTA */}
      <div role="complementary" aria-label="Barre d'appel à l'action" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] md:w-auto">
        <div className="mx-auto flex items-center gap-3 rounded-full border border-[#00e0ff55] bg-black/70 backdrop-blur px-4 py-2 shadow-[0_10px_40px_-10px_#00e0ff88]">
          <span className="hidden md:inline text-sm text-gray-300">Besoin d'un site rapide & SEO‑ready ?</span>
          <Link href="/services/audit-gratuit?utm_source=website&utm_medium=sticky-cta&utm_campaign=audit" className="bg-[#00e0ff] text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition">Audit gratuit</Link>
          <Link href="/contact?utm_source=website&utm_medium=sticky-cta&utm_campaign=contact" className="px-4 py-2 rounded-full border border-[#00e0ff55] hover:bg-white/10 transition">Parler à un expert</Link>
        </div>
      </div>
      < FinalCTA />
      <style>{`
        :focus-visible { outline: 2px dashed #00e0ff; outline-offset: 3px; }
      `}</style>
    </main>
  );
}