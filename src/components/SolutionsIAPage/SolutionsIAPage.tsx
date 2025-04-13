'use client';

import { motion } from 'framer-motion';
import { FileText, Filter, Brain, Lightbulb, Zap } from 'lucide-react';
import ServiceSchema from '../ServiceShema/ServiceSchema';

const étapes = [
    {
        titre: 'Données entrantes',
        desc: 'Texte, image, audio, PDF…',
        icone: FileText,
    },
    {
        titre: 'Prétraitement',
        desc: 'Nettoyage, vectorisation, encodage',
        icone: Filter,
    },
    {
        titre: 'Analyse IA',
        desc: 'Modèle NLP, vision, LLM, etc.',
        icone: Brain,
    },
    {
        titre: 'Résultat',
        desc: 'Prédiction, insight ou étiquette',
        icone: Lightbulb,
    },
    {
        titre: 'Action',
        desc: 'Décision, recommandation ou automatisation',
        icone: Zap,
    },
];
const étapesRPA = [
    {
        titre: 'Détection de tâche',
        desc: 'Observation des actions manuelles à automatiser',
        icone: Lightbulb,
    },
    {
        titre: 'Configuration du bot',
        desc: 'Création d’un robot logiciel adapté à vos besoins',
        icone: Zap,
    },
    {
        titre: 'Intégration système',
        desc: 'Connexion aux logiciels internes (ERP, CRM, Excel...)',
        icone: FileText,
    },
    {
        titre: 'Exécution automatique',
        desc: 'Le bot réalise les tâches en autonomie',
        icone: Brain,
    },
    {
        titre: 'Reporting & contrôle',
        desc: 'Suivi, logs, alertes et ajustements en continu',
        icone: Filter,
    },
];

const étapesScraping = [
    {
        titre: 'Ciblage',
        desc: 'Définition des sites, pages ou données à récupérer',
        icone: Lightbulb,
    },
    {
        titre: 'Scraping',
        desc: 'Extraction automatisée et sécurisée des contenus',
        icone: Zap,
    },
    {
        titre: 'Nettoyage',
        desc: 'Suppression des doublons, spam, HTML inutile',
        icone: Filter,
    },
    {
        titre: 'Structuration',
        desc: 'Mise en forme : JSON, Excel, API ou base SQL',
        icone: FileText,
    },
    {
        titre: 'Exploitation',
        desc: 'Utilisation dans vos outils, dashboards ou modèles IA',
        icone: Brain,
    },
];


export default function SolutionsIAPage() {
    return (
        <>

            <ServiceSchema
                serviceName="Solutions en Intelligence Artificielle"
                serviceDescription="Nos solutions IA transforment vos données en actions : NLP, LLM, automatisation, scraping intelligent..."
                serviceTypes={[
                    'IA Générative',
                    'RPA',
                    'Scraping intelligent',
                    'Machine Learning',
                    'Analyse de sentiment',
                ]}
                faq={[
                    {
                        question: "Comment l’IA peut-elle vous aider ?",
                        answer:
                            "Elle permet d’automatiser les tâches répétitives, améliorer la productivité et générer des insights.",
                    },
                    {
                        question: "Proposez-vous des audits IA gratuits ?",
                        answer:
                            "Oui, un audit IA est offert pour identifier les opportunités de gain rapide.",
                    },
                ]}
            />
            <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-6">
                    Nos solutions IA sur-mesure
                </h1>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-20 text-lg">
                    Nous transformons vos données en décisions automatisées grâce à l'intelligence artificielle.
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
                    Pipeline d’automatisation IA
                </h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-20 text-lg">
                    Voici comment nous déployons nos IA pour automatiser et prédire vos tâches métiers.
                </p>
                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-10">
                    <div className="hidden sm:block absolute top-[52px] left-0 right-0 h-px z-0 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00F9FF] to-transparent animate-[pulseFlow_4s_linear_infinite]" />
                    </div>
                    {étapes.map((etape, i) => {
                        const Icone = etape.icone;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="z-10 bg-[#111] border border-neutral-700 rounded-xl p-5 w-[200px] shadow-lg flex flex-col items-center text-center relative hover:shadow-[0_0_20px_#00f9ff33] transition-all duration-300"
                            >
                                <div className="bg-neutral-900 p-3 rounded-full mb-3 border border-neutral-600">
                                    <Icone className="w-6 h-6 text-[#00F9FF]" />
                                </div>
                                <h3 className="text-white font-semibold text-lg">{etape.titre}</h3>
                                <p className="text-gray-400 text-sm mt-1">{etape.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>


            


            <section className="py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Cas d’usage concrets
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Extraction automatique de documents',
                            desc: 'Analyse et structuration automatique de PDF, courriers ou emails entrants.',
                        },
                        {
                            title: 'Scraping intelligent',
                            desc: 'Collecte automatisée de données web avec structuration intelligente.',
                        },
                        {
                            title: 'Analyse de sentiment',
                            desc: 'Compréhension du ressenti clients à partir de textes libres ou commentaires.',
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl text-white shadow-md hover:shadow-[0_0_20px_#00f9ff33] transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- RPA --- */}
            <ServiceSchema
                serviceName="Solutions RPA (Automatisation Robotique)"
                serviceDescription="Automatisez vos tâches manuelles, répétitives ou chronophages grâce à la RPA. Gagnez en efficacité et fiabilité."
                serviceTypes={['Automatisation de saisie', 'RPA + IA', 'Workflows bots', 'Intégration Excel/API', 'Traitement automatisé']}
                faq={[
                    {
                        question: "Quelles tâches peut-on automatiser avec la RPA ?",
                        answer: "Saisie de données, génération de rapports, envoi d’emails, surveillance de fichiers, et bien plus.",
                    },
                    {
                        question: "La RPA est-elle compatible avec nos logiciels internes ?",
                        answer: "Oui, nous développons des bots adaptés à vos outils existants (ERP, CRM, etc.).",
                    },
                ]}
            />
            <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
                    Pipeline d’automatisation RPA
                </h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-20 text-lg">
                    Voici comment nous déployons des robots logiciels pour automatiser vos tâches métiers.
                </p>

                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-10">
                    <div className="hidden sm:block absolute top-[52px] left-0 right-0 h-px z-0 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00F9FF] to-transparent animate-[pulseFlow_4s_linear_infinite]" />
                    </div>

                    {étapesRPA.map((etape, i) => {
                        const Icone = etape.icone;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="z-10 bg-[#111] border border-neutral-700 rounded-xl p-5 w-[200px] shadow-lg flex flex-col items-center text-center relative hover:shadow-[0_0_20px_#00f9ff33] transition-all duration-300"
                            >
                                <div className="bg-neutral-900 p-3 rounded-full mb-3 border border-neutral-600">
                                    <Icone className="w-6 h-6 text-[#00F9FF]" />
                                </div>
                                <h3 className="text-white font-semibold text-lg">{etape.titre}</h3>
                                <p className="text-gray-400 text-sm mt-1">{etape.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Cas d’usage RPA
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Automatisation de reporting',
                            desc: 'Générez automatiquement vos rapports Excel ou PDF à partir de vos données.',
                        },
                        {
                            title: 'Saisie automatisée de formulaires',
                            desc: 'Remplissez des formulaires internes ou web depuis des fichiers en un clic.',
                        },
                        {
                            title: 'Suivi de tâches automatisé',
                            desc: 'Mettez à jour des outils internes ou envoyez des rappels automatiquement.',
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl text-white shadow-md hover:shadow-[0_0_20px_#00f9ff33] transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- Scraping intelligent --- */}
            <ServiceSchema
                serviceName="Scraping intelligent de données web"
                serviceDescription="Récupérez des données utiles sur le web de manière légale et structurée. Idéal pour la veille, les bases produits, les comparateurs…"
                serviceTypes={['Scraping ciblé', 'Extraction intelligente', 'Nettoyage automatique', 'Structuration JSON/Excel', 'Veille concurrentielle']}
                faq={[
                    {
                        question: "Est-ce légal de scraper des sites web ?",
                        answer: "Oui, si c’est bien fait : respect des CGU, fréquence adaptée, et finalité légitime.",
                    },
                    {
                        question: "Livrez-vous des données prêtes à l’emploi ?",
                        answer: "Oui, nous structurons les résultats (Excel, CSV, API ou base de données).",
                    },
                ]}
            />
            <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
                    Pipeline scraping intelligent
                </h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-20 text-lg">
                    De la donnée brute à l’information structurée et exploitable.
                </p>

                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-10">
                    <div className="hidden sm:block absolute top-[52px] left-0 right-0 h-px z-0 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00F9FF] to-transparent animate-[pulseFlow_4s_linear_infinite]" />
                    </div>

                    {étapesScraping.map((etape, i) => {
                        const Icone = etape.icone;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="z-10 bg-[#111] border border-neutral-700 rounded-xl p-5 w-[200px] shadow-lg flex flex-col items-center text-center relative hover:shadow-[0_0_20px_#00f9ff33] transition-all duration-300"
                            >
                                <div className="bg-neutral-900 p-3 rounded-full mb-3 border border-neutral-600">
                                    <Icone className="w-6 h-6 text-[#00F9FF]" />
                                </div>
                                <h3 className="text-white font-semibold text-lg">{etape.titre}</h3>
                                <p className="text-gray-400 text-sm mt-1">{etape.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Cas d’usage scraping intelligent
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Veille tarifaire automatique',
                            desc: 'Scraping quotidien des prix ou promotions de vos concurrents.',
                        },
                        {
                            title: 'Extraction de bases B2B',
                            desc: 'Récupération d’annuaires professionnels ou de profils LinkedIn.',
                        },
                        {
                            title: 'Alimentation de fiches produits',
                            desc: 'Mise à jour automatique de vos fiches à partir de sources fiables.',
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl text-white shadow-md hover:shadow-[0_0_20px_#00f9ff33] transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA final */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <h3 className="text-3xl text-white font-bold mb-4">Prêt à automatiser votre business ?</h3>
                <p className="text-gray-400 mb-6">
                    Parlons de votre projet et construisons une solution IA, RPA ou scraping adaptée à vos besoins.
                </p>
                <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-[#00F9FF] text-black font-semibold rounded-full hover:opacity-90 transition"
                >
                    Contacter un expert
                </a>
            </section>
        </>
    );
}
