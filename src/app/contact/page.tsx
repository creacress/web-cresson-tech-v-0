export const dynamic = 'force-dynamic'
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceShema/ServiceSchema'
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav'
import ContactSection from '@/components/ContactSection/ContactSection'
import GoogleCalendar from '@/components/GoogleCalendar/GoogleCalendar'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — WebCressonTech | Experts IA & Automatisation pour PME',
  description:
    "Contactez WebCressonTech pour vos projets IA, RPA et sites/applications modernes. Réponse sous 24h. Audit gratuit en 48h.",
  alternates: { canonical: 'https://webcresson.com/contact' },
  openGraph: {
    title: 'Contact — WebCressonTech',
    description: 'Experts IA, RPA, sites & apps modernes pour TPE/PME. Réponse rapide.',
    url: 'https://webcresson.com/contact',
    images: [
      { url: 'https://webcresson.com/images/og-contact.webp', width: 1200, height: 630, alt: 'Contacter WebCressonTech' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — WebCressonTech',
    description: 'IA, RPA, sites & apps pour PME. Réponse sous 24h.',
    images: ['https://webcresson.com/images/og-contact.webp'],
  },
  robots: { index: true, follow: true },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema />
      <ServiceSchema
        serviceName="Contactez-nous | WebCressonTech"
        serviceDescription="Contact IA/RPA & sites/applications modernes pour TPE/PME : devis, cadrage, support. Réponse sous 24h, audit gratuit sous 48h."
        serviceTypes={[
          'Contact',
          'Support Client',
          'Devis & Audit IA',
          'Automatisation RPA',
          'Sites & Applications web',
        ]}
        faq={[
          {
            question: 'Comment puis-je contacter WebCressonTech ?',
            answer: (
              <>
                Vous pouvez nous contacter via ce formulaire ou par téléphone au{' '}
                <a href="tel:+33766029632" className="text-[#00e0ff] underline hover:text-white">
                  +33 7 66 02 96 32
                </a>
                .
              </>
            ),
          },
          {
            question: 'Quels services propose WebCressonTech ?',
            answer: (
              <>
                Nous proposons des solutions en IA, RPA, automatisation et technologies sur mesure. Découvrez nos services sur{' '}
                <a href="/services?utm_source=contact&utm_medium=faq&utm_campaign=services" className="text-[#00e0ff] underline hover:text-white">
                  cette page.
                </a>
              </>
            ),
          },
        ]}
      />
      <main className="max-w-4xl mx-auto px-6 py-24 text-white">
        <BreadcrumbNav />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'ContactPage',
            name: 'Contact — WebCressonTech', url: 'https://webcresson.com/contact',
            breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://webcresson.com/' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://webcresson.com/contact' },
            ]},
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Organization',
            name: 'WebCressonTech', url: 'https://webcresson.com',
            logo: 'https://webcresson.com/images/Logo_webcressontech.webp',
            sameAs: ['https://x.com/WebCresson'],
            contactPoint: [{
              '@type': 'ContactPoint', contactType: 'sales', availableLanguage: ['fr'],
              email: 'contact@webcresson.com', telephone: '+33 7 66 02 96 32', url: 'https://webcresson.com/contact'
            }]
          }) }}
        />

        <section className="relative overflow-hidden text-center mb-12 rounded-2xl border border-[#1f1f1f] bg-gradient-to-br from-zinc-900 via-black to-zinc-950 px-6 py-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">Parlons de votre projet</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            IA, RPA, sites & apps modernes pour TPE/PME. Réponse <strong>sous 24h</strong>, audit <strong>gratuit</strong> en 48h.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/services/audit-gratuit?utm_source=contact&utm_medium=hero&utm_campaign=audit" className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">Demander un audit gratuit</Link>
            <a href="tel:+33766029632" className="inline-block border border-[#00e0ff55] text-white px-6 py-3 rounded hover:bg-white/10 transition">Appeler le +33 7 66 02 96 32</a>
            <a href="mailto:contact@webcresson.com" className="inline-block border border-[#00e0ff55] text-white px-6 py-3 rounded hover:bg-white/10 transition">Écrire un e‑mail</a>
          </div>
          <span aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.15),transparent_60%)]" />
        </section>

        <section className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-4 text-center">
            <p className="text-3xl font-extrabold text-cyan-400"><span className="align-top">≈</span>24h</p>
            <p className="text-gray-400 text-sm">Délai de réponse</p>
          </div>
          <div className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-4 text-center">
            <p className="text-3xl font-extrabold text-cyan-400">48h</p>
            <p className="text-gray-400 text-sm">Audit initial</p>
          </div>
          <div className="rounded-xl border border-[#00e0ff22] bg-[#0b0b0b] p-4 text-center">
            <p className="text-3xl font-extrabold text-cyan-400">RGPD</p>
            <p className="text-gray-400 text-sm">Hébergement UE sur demande</p>
          </div>
        </section>

        <section aria-labelledby="contact-form" className="mb-16">
          <h2 id="contact-form" className="sr-only">Formulaire de contact</h2>
          <ContactSection />
        </section>
        <section className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Prenez rendez‑vous</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Réservez un appel de cadrage (30 min). Nous clarifions votre besoin et les premiers quick wins.</p>
        </section>

        <section className="mb-16">
          <GoogleCalendar />
        </section>
        <section className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Ou écrivez-nous à{' '}
            <a href="mailto:contact@webcresson.com" className="text-[#00e0ff] underline hover:text-white">
              contact@webcresson.com
            </a>{' '}
            – Nous répondons sous 24h.
          </p>
        </section>
        {/* Google tag (gtag.js) event */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion_event_submit_lead_form', {
                // event_parameters
              });
            `,
          }}
        />

        {/* Google tag (gtag.js) event - delayed navigation helper */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtagSendEvent(url) {
                var callback = function () {
                  if (typeof url === 'string') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion_event_submit_lead_form', {
                  'event_callback': callback,
                  'event_timeout': 2000
                });
                return false;
              }
            `,
          }}
        />

        <section className="my-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">FAQ — Contact</h2>
          <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
            {[
              { q: 'Sous combien de temps répondez‑vous ?', a: 'Sous 24h ouvrées, et souvent le jour même.' },
              { q: 'Faites‑vous un audit gratuit ?', a: 'Oui — un audit initial sous 48h pour identifier les quick wins.' },
              { q: 'Pouvez‑vous signer un NDA ?', a: 'Bien sûr. Nous pouvons signer votre NDA ou fournir le nôtre.' },
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
              { '@type': 'Question', name: 'Sous combien de temps répondez‑vous ?', acceptedAnswer: { '@type': 'Answer', text: 'Sous 24h ouvrées.' }},
              { '@type': 'Question', name: 'Faites‑vous un audit gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — audit initial sous 48h.' }},
              { '@type': 'Question', name: 'Pouvez‑vous signer un NDA ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — NDA possible à la demande.' }},
            ]
          }) }} />
        </section>
      </main>
    </>
  )
}
