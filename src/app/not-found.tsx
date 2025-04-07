import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-6xl font-extrabold text-neon mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page introuvable</h2>
      <p className="text-gray-400 mb-6">
        Oups ! La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="bg-[#00e0ff] text-black font-semibold px-6 py-3 rounded hover:scale-105 transition"
      >
        Retour à l’accueil
      </Link>
    </main>
  )
}
