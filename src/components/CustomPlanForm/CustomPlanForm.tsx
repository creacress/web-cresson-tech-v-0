'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

import { Info } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'

const formSchema = z.object({
    companyName: z.string().min(1, 'Le nom de l’entreprise est requis'),
    email: z.string().email('Email invalide'),
    projectDescription: z.string().min(10, 'Décrivez votre projet en quelques lignes'),
    budget: z.enum(['<1000€', '1000€-5000€', '>5000€'], {
        errorMap: () => ({ message: 'Sélectionnez un budget' }),
    }),
    projectTypes: z.array(z.string()).min(1, 'Choisissez au moins un type de projet IA'),
    techNeeds: z.array(z.string()).optional(),
    priorities: z.array(z.string()).optional(),
    website: z.string().optional(), // champ honeypot
})

type FormData = z.infer<typeof formSchema>

const projectTypeOptions = [
    'Analyse de texte (NLP)',
    'Détection d’image (vision)',
    'Prédiction / Forecasting',
    'Recommandation',
    'Classification',
    'RPA / Automatisation',
]

const techNeedsOptions = [
    'Intégration API',
    'Dashboard personnalisé',
    'MLOps / retraining automatique',
    'Hébergement privé',
    'Support expert dédié',
]

const priorityOptions = [
    'Rapidité de livraison',
    'Budget maîtrisé',
    'Performance du modèle',
    'Sécurité & conformité',
]

export default function CustomPlanForm() {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: FormData) => {
        setError(null)
        try {
            const res = await fetch('/api/custom-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                const json = await res.json()
                throw new Error(json.error || 'Erreur inconnue')
            }

            toast.success('Demande envoyée avec succès ✨')
            setSubmitted(true)
            reset()
        } catch (err: any) {
            console.error('Erreur submit:', err)
            toast.error(err.message || 'Erreur inattendue.')
            setError(err.message || 'Erreur inattendue.')
        }
    }


    if (submitted) {
        return (
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center text-[#00e0ff] text-xl font-semibold mt-12"
            >
                Merci pour votre demande 🙏<br />Un expert IA vous répondra sous peu.
            </motion.div>
        )
    }

    return (
        <div className="grid gap-6 px-4 max-w-6xl mx-auto lg:grid-cols-2 lg:gap-10">
            {/* -------- Formulaire -------- */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-[2px] rounded-xl bg-gradient-to-br from-[#00e0ff] via-transparent to-[#00e0ff55]"
            >
                <div className="rounded-[10px] bg-[#111] p-6 space-y-6 shadow-[0_0_40px_#00e0ff22] backdrop-blur-md">
                    {/* Honeypot */}
                    <input type="hidden" {...register('website')} />

                    {/* Champs classiques */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Nom de l’entreprise</label>
                        <input
                            type="text"
                            {...register('companyName')}
                            className="w-full bg-[#0d0d0d] text-white px-4 py-2 border border-[#00e0ff33] rounded focus:ring-[#00e0ff]"
                        />
                        {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Email professionnel</label>
                        <input
                            type="email"
                            {...register('email')}
                            className="w-full bg-[#0d0d0d] text-white px-4 py-2 border border-[#00e0ff33] rounded focus:ring-[#00e0ff]"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Description du projet</label>
                        <textarea
                            rows={4}
                            {...register('projectDescription')}
                            className="w-full bg-[#0d0d0d] text-white px-4 py-2 border border-[#00e0ff33] rounded focus:ring-[#00e0ff]"
                        />
                        {errors.projectDescription && (
                            <p className="text-red-500 text-sm">{errors.projectDescription.message}</p>
                        )}
                    </div>

                    {/* Options IA */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">Types de projet IA souhaités</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {projectTypeOptions.map((option) => (
                                <label key={option} className="flex items-center gap-2 text-sm text-gray-300">
                                    <input type="checkbox" value={option} {...register('projectTypes')} />
                                    {option}
                                </label>
                            ))}
                        </div>
                        {errors.projectTypes && (
                            <p className="text-red-500 text-sm mt-1">{errors.projectTypes.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 mb-2">Fonctionnalités techniques souhaitées</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {techNeedsOptions.map((option) => (
                                <label key={option} className="flex items-center gap-2 text-sm text-gray-300">
                                    <input type="checkbox" value={option} {...register('techNeeds')} />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 mb-2">Vos priorités</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {priorityOptions.map((option) => (
                                <label key={option} className="flex items-center gap-2 text-sm text-gray-300">
                                    <input type="checkbox" value={option} {...register('priorities')} />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Budget estimé</label>
                        <select
                            {...register('budget')}
                            className="w-full bg-[#0d0d0d] text-white px-4 py-2 border border-[#00e0ff33] rounded focus:ring-[#00e0ff]"
                        >
                            <option value="">-- Sélectionnez --</option>
                            <option value="<1000€">&lt; 1000€</option>
                            <option value="1000€-5000€">1000€ - 5000€</option>
                            <option value=">5000€">&gt; 5000€</option>
                        </select>
                        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                    </div>

                    {/* Erreur API */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Bouton */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileTap={{ scale: 0.97 }}
                        className="bg-[#00e0ff] text-black px-6 py-2 rounded font-semibold hover:scale-105 transition w-full"
                    >
                        {isSubmitting ? 'Envoi...' : 'Envoyer ma demande'}
                    </motion.button>
                </div>
            </form>

            {/* -------- Bloc Info Client -------- */}
            <div className="rounded-xl p-[2px] bg-gradient-to-br from-[#00e0ff] via-transparent to-[#00e0ff55] shadow-[0_0_25px_#00e0ff22] h-fit">
                <div className="rounded-[10px] bg-[#111] p-6 text-[#00e0ff] text-sm leading-relaxed space-y-4 flex flex-col justify-center h-full">
                    <div className="flex items-center gap-3">
                        <Info className="w-5 h-5 text-[#00e0ff]" />
                        <h2 className="text-white text-lg font-semibold">Pas d’inquiétude 😌</h2>
                    </div>
                    <p>
                        Toutes les options proposées sont facultatives.<br />
                        Vous pouvez simplement remplir les infos principales<br />
                        et nous vous recontacterons pour affiner votre plan IA sur mesure.
                    </p>
                </div>
            </div>
        </div>
    )
}
