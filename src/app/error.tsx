"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Erreur capturée :", error)
  }, [error])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-5xl font-extrabold text-red-500 mb-4">Une erreur est survenue</h1>
      <p className="text-gray-400 mb-6">
        Oups ! Quelque chose s’est mal passé. Essayez de recharger ou revenez plus tard.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#00e0ff] text-black font-semibold px-6 py-3 rounded hover:scale-105 transition"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="border border-[#00e0ff] text-[#00e0ff] px-6 py-3 rounded hover:bg-[#00e0ff] hover:text-black transition"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  )
}
