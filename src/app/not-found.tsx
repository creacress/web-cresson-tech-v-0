// src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-white bg-black px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page introuvable</h1>
      <p className="text-gray-400 mb-6">
        Oups… la page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
      >
        Retour à l’accueil
      </Link>
    </main>
  )
}
