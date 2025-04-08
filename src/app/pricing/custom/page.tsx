import { Metadata } from 'next'
import Head from 'next/head'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ServiceSchema from '@/components/ServiceShema/ServiceSchema'
import CustomPlanForm from '@/components/CustomPlanForm/CustomPlanForm'

export const metadata: Metadata = {
    title: 'Plan Personnalisé - WebCressonTech',
    description: 'Créez votre plan personnalisé en intelligence artificielle avec WebCressonTech.',
    alternates: {
        canonical: 'https://webcresson.com/pricing/custom',
    },
    openGraph: {
        title: 'Plan Personnalisé - WebCressonTech',
        description: 'Créez votre plan IA sur mesure avec WebCressonTech.',
        url: 'https://webcresson.com/pricing/custom',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Plan Personnalisé - WebCressonTech',
        description: 'Créez votre solution IA personnalisée avec WebCressonTech.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function CustomPlanPage() {
    return (
        <>
            {/* SEO + JSON-LD */}
            <BreadcrumbJsonLd overrides={{ pricing: 'Tarification', custom: 'Personnalisé' }} />
            <ServiceSchema
                serviceName="Plan Personnalisé - WebCressonTech"
                serviceDescription="Créez votre propre plan IA adapté à vos besoins spécifiques avec WebCressonTech."
                serviceTypes={[
                    'Plan personnalisé IA',
                    'Solutions IA sur mesure',
                    'Services technologiques personnalisés',
                ]}
                faq={[
                    {
                        question: 'Que comprend un plan personnalisé ?',
                        answer:
                            'Un accompagnement sur mesure selon vos besoins : cadrage, intégration, MLOps, déploiement, etc.',
                    },
                    {
                        question: 'Est-ce adapté aux grandes entreprises ?',
                        answer:
                            'Oui, nous pouvons adapter notre accompagnement aux contraintes techniques, sécurité, et processus métier.',
                    },
                ]}
            />


            {/* Canonical fallback */}
            <Head>
                <link rel="canonical" href="https://webcresson.com/pricing/custom" />
            </Head>

            <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
                {/* Héro */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Créez votre plan IA personnalisé
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Remplissez le formulaire ci-dessous pour concevoir une solution adaptée à vos besoins en intelligence artificielle.
                    </p>
                </section>

                {/* Formulaire de plan personnalisé */}
                <CustomPlanForm />
            </main>
        </>
    )
}
