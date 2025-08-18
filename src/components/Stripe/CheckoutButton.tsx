"use client";

import { useState } from "react";

export type CheckoutMode = "payment" | "subscription";

export type CheckoutButtonProps = {
  priceId: string;                 // Stripe Price ID (price_xxx)
  mode?: CheckoutMode;             // "payment" | "subscription"
  quantity?: number;               // default 1
  label?: string;                  // texte du bouton
  className?: string;              // classes tailwind
  customerEmail?: string;          // pré-remplir email
  successUrl?: string;             // override
  cancelUrl?: string;              // override
  clientRef?: string;              // ref interne
};

export default function CheckoutButton({
  priceId,
  mode = "payment",
  quantity = 1,
  label = "Acheter",
  className = "",
  customerEmail,
  successUrl,
  cancelUrl,
  clientRef,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, mode, quantity, customerEmail, successUrl, cancelUrl, clientRef }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erreur de paiement");
      if (data?.url) window.location.href = data.url;
    } catch (e: any) {
      alert(e?.message || "Impossible de démarrer le paiement Stripe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      aria-busy={loading}
      className={[
        "rounded-lg bg-[#00e0ff] px-5 py-3 text-black font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      ].join(" ")}
    >
      {loading ? "Redirection…" : label}
    </button>
  );
}

/** Helpers branchés sur les env NEXT_PUBLIC_STRIPE_PRICE_* */
export function BuyUnitButton(
  props: Partial<Omit<CheckoutButtonProps, "priceId" | "mode" | "label">>
) {
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_UNIT as string;
  return <CheckoutButton priceId={priceId} mode="payment" label="Commander à l'unité" {...props} />;
}

export function SubscribeStarterButton(
  props: Partial<Omit<CheckoutButtonProps, "priceId" | "mode" | "label">>
) {
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER as string;
  return <CheckoutButton priceId={priceId} mode="subscription" label="S'abonner — Starter" {...props} />;
}

export function SubscribeProButton(
  props: Partial<Omit<CheckoutButtonProps, "priceId" | "mode" | "label">>
) {
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO as string;
  return <CheckoutButton priceId={priceId} mode="subscription" label="S'abonner — Pro" {...props} />;
}