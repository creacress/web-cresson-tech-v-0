import { NextResponse } from "next/server"
import Stripe from "stripe"

// ✅ Use a valid, stable API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-07-30.basil" })
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("[Stripe] STRIPE_SECRET_KEY is not set — checkout will fail.")
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const priceId: string | undefined = body.priceId
    const mode: "payment" | "subscription" = body.mode === "subscription" ? "subscription" : "payment"
    const quantity = Number(body.quantity ?? 1) || 1
    const customerEmail: string | undefined = body.customerEmail

    if (!priceId) {
      return NextResponse.json({ error: "priceId manquant" }, { status: 400 })
    }

    // Build absolute URLs required by Stripe (must include scheme)
    const incomingOrigin = req.headers.get("origin") || undefined
    const envBase = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || incomingOrigin || "http://localhost:3000"

    const toAbsolute = (u: string) => {
      try {
        return new URL(u).toString() // already absolute
      } catch {
        return new URL(u.replace(/^\/*/, "/"), envBase).toString() // relative -> absolute
      }
    }

    const successUrl = toAbsolute(body.successUrl || "/success?session_id={CHECKOUT_SESSION_ID}")
    const cancelUrl = toAbsolute(body.cancelUrl || "/cancel")

    const session = await stripe.checkout.sessions.create({
      mode,
      // French VAT / EU: let Stripe compute VAT automatically
      automatic_tax: { enabled: true },
      allow_promotion_codes: true,
      billing_address_collection: "required",
      customer_email: customerEmail,
      client_reference_id: body.clientRef || undefined,
      line_items: [
        { price: priceId, quantity },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    })

    return NextResponse.json({ id: session.id, url: session.url })
  } catch (err: any) {
    console.error("/api/checkout error", err)
    const message = err?.message || "Erreur côté serveur"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}