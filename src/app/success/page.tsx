

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function SuccessPage() {
  const sp = useSearchParams();
  const sessionId = sp.get("session_id");

  const shortId = useMemo(() => {
    if (!sessionId) return null;
    return sessionId.length > 12 ? `${sessionId.slice(0, 6)}…${sessionId.slice(-4)}` : sessionId;
  }, [sessionId]);

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Paiement confirmé</h1>
          <p className="text-white/70">Merci ! Votre commande est bien enregistrée.</p>
        </div>
      </div>

      {/* Card */}
      <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-6">
        <div className="flex flex-col gap-2 text-sm text-white/80">
          <div className="flex items-center justify-between">
            <span>Statut</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-200">Payé</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Référence</span>
            <span className="font-mono text-white/90">{shortId ?? "—"}</span>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link href="/" className="rounded-lg border border-white/20 px-4 py-2 text-center text-white/90 hover:bg-white/10">Retour à l’accueil</Link>
          <Link href="/contact" className="rounded-lg bg-[#00e0ff] px-4 py-2 text-center font-semibold text-black hover:opacity-90">Contacter le support</Link>
        </div>

        <p className="mt-4 text-xs text-white/60">
          Astuce : Vous recevrez votre facture Stripe par email. Si besoin, indiquez-nous l’identifiant de session affiché ci‑dessus pour toute question.
        </p>
      </div>

      {/* Next steps */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Prochaines étapes</h2>
        <ul className="mt-3 space-y-2 text-white/80 text-sm">
          <li>• Un email de confirmation arrive avec votre reçu/facture.</li>
          <li>• Notre équipe prépare l’accès / la mise en service selon votre offre.</li>
          <li>• Vous pouvez répondre au mail pour toute précision (brief, fichiers, etc.).</li>
        </ul>
      </section>
    </main>
  );
}