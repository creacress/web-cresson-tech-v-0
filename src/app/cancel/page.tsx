"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-red-500/15 text-red-300 ring-1 ring-red-400/30">
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.3 13.9L13.4 13l2.9-2.9-1.4-1.4L12 11.6 9.1 8.7 7.7 10.1 10.6 13l-2.9 2.9 1.4 1.4L12 14.4l2.9 2.9 1.4-1.4z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Paiement annulé</h1>
          <p className="text-white/70">Votre commande n’a pas été finalisée.</p>
        </div>
      </div>

      {/* Card */}
      <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-6">
        <p className="text-white/80">Si c’était une erreur, vous pouvez réessayer ou choisir une autre offre.</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link href="/services/generateur-ia" className="rounded-lg bg-[#00e0ff] px-4 py-2 text-center font-semibold text-black hover:opacity-90">Réessayer</Link>
          <Link href="/" className="rounded-lg border border-white/20 px-4 py-2 text-center text-white/90 hover:bg-white/10">Retour à l’accueil</Link>
        </div>

        <p className="mt-4 text-xs text-white/60">
          Aucun paiement n’a été effectué. Votre carte n’a pas été débitée.
        </p>
      </div>

      {/* Conseils */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Besoin d’aide ?</h2>
        <p className="mt-2 text-sm text-white/70">
          Contactez notre <Link href="/contact" className="underline text-[#00e0ff]">support</Link> pour toute question sur votre commande ou pour finaliser votre paiement.
        </p>
      </section>
    </main>
  );
}
