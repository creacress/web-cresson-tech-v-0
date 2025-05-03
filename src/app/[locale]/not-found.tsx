'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()
  const isPT = pathname?.startsWith('/pt')
  const locale = isPT ? 'pt' : 'fr'

  const t = {
    title: isPT ? '404 - Página não encontrada' : '404 - Page introuvable',
    message: isPT
      ? 'Opa... a página que você procura não existe ou foi movida.'
      : 'Oups… la page que vous cherchez n’existe pas ou a été déplacée.',
    back: isPT ? 'Voltar à página inicial' : 'Retour à l’accueil',
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-white bg-black px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-gray-400 mb-6">{t.message}</p>
      <Link
        href={`/${locale}`}
        className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
      >
        {t.back}
      </Link>
    </main>
  )
}
