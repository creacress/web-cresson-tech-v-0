import { Metadata } from 'next'
import { LisaClient } from '../PersonaClient'

export const metadata: Metadata = {
    title: 'Démo IA — Lisa (Industrie/Opérations) | Maintenance prédictive & Qualité — Web Cresson Tech',
    description:
        "Cas d’usage IA pour l’industrie : maintenance prédictive, inspection visuelle, optimisation des stocks et intégrations MES/ERP. Déploiement rapide, ROI mesurable.",
    openGraph: {
        title: 'Démo IA — Lisa (Industrie/Opérations) — Web Cresson Tech',
        description:
            'Maintenance prédictive, contrôle qualité et optimisation des stocks. Pack IA Industrie : fiable et mesurable.',
        url: 'https://webcresson.com/solutions/lisa',
        type: 'article',
        images: [
            { url: 'https://webcresson.com/avatars/lisa.png', width: 800, height: 800, alt: 'Persona Lisa — Industrie' },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Démo IA — Lisa (Industrie/Opérations)',
        description: 'Maintenance prédictive, vision, stocks — Pack IA Industrie.',
        images: ['https://webcresson.com/avatars/lisa.png'],
    },
    alternates: { canonical: 'https://webcresson.com/solutions/lisa' },
}

export default function Page() {
    return (
        <>
            {/* Breadcrumb JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://webcresson.com/' },
                            { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://webcresson.com/solutions' },
                            { '@type': 'ListItem', position: 3, name: 'Lisa (Industrie)', item: 'https://webcresson.com/solutions/lisa' },
                        ],
                    })
                }}
            />

            {/* HowTo JSON-LD (3 étapes) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org', '@type': 'HowTo',
                        name: "Déployer l'IA pour l'industrie (persona Lisa)",
                        totalTime: 'P21D',
                        step: [
                            { '@type': 'HowToStep', position: 1, name: 'Capteurs & collecte', text: 'Récupérer télémétrie et historiques pannes.' },
                            { '@type': 'HowToStep', position: 2, name: 'Modèles prédictifs', text: 'Détection de dérives, prédiction pannes & qualité.' },
                            { '@type': 'HowToStep', position: 3, name: 'Planification', text: 'Ordonnancement maintenance et réassort optimisés.' },
                        ],
                    })
                }}
            />

            {/* FAQ JSON-LD (persona Lisa) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org', '@type': 'FAQPage',
                        mainEntity: [
                            { '@type': 'Question', name: 'Combien de temps pour un premier résultat ?', acceptedAnswer: { '@type': 'Answer', text: 'POC en quelques jours, MVP en 2–4 semaines selon le périmètre.' } },
                            { '@type': 'Question', name: 'Intégration à nos systèmes ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, intégrations MES/ERP, APIs, dashboards et webhooks.' } },
                            { '@type': 'Question', name: 'Quel budget prévoir ?', acceptedAnswer: { '@type': 'Answer', text: 'Packs Industrie à partir de 1 990€ selon le périmètre; audit gratuit.' } },
                        ]
                    })
                }}
            />

            {/* ItemList JSON-LD (autres cas d’usage) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org', '@type': 'ItemList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Maintenance prédictive' },
                            { '@type': 'ListItem', position: 2, name: 'Inspection visuelle' },
                            { '@type': 'ListItem', position: 3, name: 'Traçabilité' },
                            { '@type': 'ListItem', position: 4, name: 'Gestion des stocks' },
                            { '@type': 'ListItem', position: 5, name: 'Pilotage atelier' },
                            { '@type': 'ListItem', position: 6, name: 'Intégrations MES/ERP' },
                        ],
                    })
                }}
            />


            {/* Client UI */}
            <LisaClient />
            {/* FAQ visible — persona Lisa */}
            <section className="my-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">FAQ — Persona Lisa (Industrie / Opérations)</h2>
                <div className="max-w-3xl mx-auto divide-y divide-[#1f1f1f] border border-[#1f1f1f] rounded">
                    {[
                        { q: 'Combien de temps pour un premier résultat ?', a: 'Un POC en quelques jours, un MVP en 2–4 semaines selon le périmètre.' },
                        { q: 'Intégration à nos systèmes ?', a: 'Oui, intégrations MES/ERP, APIs, dashboards et webhooks.' },
                        { q: 'Quel budget prévoir ?', a: 'Packs Industrie à partir de 1 990€ selon le périmètre; audit gratuit.' },
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
            </section>
        </>
    )
}