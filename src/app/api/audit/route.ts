import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { checkRateLimit } from "@/lib/rate-limit"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const {
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_RECIPIENT,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  NODE_ENV,
} = process.env

const isProd = NODE_ENV === "production"

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "0.0.0.0"

  // 🛡 Rate limiting
  if (!checkRateLimit(ip)) {
    console.warn(`🚫 Rate limit dépassé | IP: ${ip}`)
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez plus tard." },
      { status: 429 }
    )
  }

  try {
    const {
      name,
      email,
      phone,
      sector,
      solutions,
      needs,
      consent,
      website,
    } = await req.json()

    // 🕵️‍♂️ Honeypot
    if (typeof website === "string" && website.trim() !== "") {
      console.warn("🤖 Bot détecté - requête bloquée")
      return NextResponse.json({ error: "Requête non autorisée" }, { status: 400 })
    }

    // 📝 Validation minimale
    if (!name || !email || !sector || !needs || !consent) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      )
    }

    // 📦 Setup du transport SMTP (DEV/PROD + fallback Ethereal)
    let transporter: nodemailer.Transporter

    if (isProd) {
      // En prod, on exige les identifiants
      if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_RECIPIENT) {
        console.error("[Audit] Variables d'environnement manquantes en production: ", {
          hasUser: !!EMAIL_USER,
          hasPass: !!EMAIL_PASS,
          hasRecipient: !!EMAIL_RECIPIENT,
        })
        return NextResponse.json(
          { error: "Configuration e-mail incomplète côté serveur." },
          { status: 500 }
        )
      }

      const host = SMTP_HOST || "smtp.hostinger.com"
      const port = Number(SMTP_PORT || 465)
      const secure = String(SMTP_SECURE || "true").toLowerCase() === "true" || port === 465

      transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      })
    } else {
      // En DEV: si identifiants fournis, on les utilise; sinon Ethereal
      if (EMAIL_USER && EMAIL_PASS) {
        const host = SMTP_HOST || "smtp.hostinger.com"
        const port = Number(SMTP_PORT || 587)
        const secure = String(SMTP_SECURE || "false").toLowerCase() === "true" || port === 465

        transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
          },
        })
      } else {
        const testAccount = await nodemailer.createTestAccount()
        transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        })
        console.warn("[Audit] Mode DEV sans creds SMTP: utilisation d'Ethereal. Aperçus dispo dans les logs.")
      }
    }

    const solutionList =
      Array.isArray(solutions) && solutions.length > 0
        ? solutions.join(", ")
        : "Non spécifiées"

    // ✉️ Envoi à l’équipe
    await transporter.sendMail({
      from: `"WebCressonTech" <${EMAIL_USER}>`,
      to: EMAIL_RECIPIENT,
      subject: `🔍 Nouvelle demande d'audit IA de ${name}`,
      html: `
        <h2>📊 Nouvelle demande d'audit IA</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non spécifié"}</p>
        <p><strong>Secteur d'activité :</strong> ${sector}</p>
        <p><strong>Solutions IA choisies :</strong> ${solutionList}</p>
        <p><strong>Message :</strong><br/>${needs.replace(/\n/g, "<br/>")}</p>
      `,
    })
    // 🔎 Log de prévisualisation Ethereal en DEV
    if (!isProd) {
      const infoPreview = nodemailer.getTestMessageUrl?.(arguments?.[0] as any)
      if (infoPreview) console.log("[Audit] Prévisualisation équipe:", infoPreview)
    }

    // ✅ Confirmation client
    await transporter.sendMail({
      from: `"WebCressonTech" <${EMAIL_USER}>`,
      to: email,
      subject: "✅ Confirmation de votre demande d'audit IA",
      html: `
        <p>Bonjour ${name},</p>
        <p>Merci pour votre demande d'audit IA. Nous l’avons bien reçue et reviendrons vers vous très rapidement.</p>

        <h4>📋 Récapitulatif :</h4>
        <ul>
          <li><strong>Email :</strong> ${email}</li>
          <li><strong>Téléphone :</strong> ${phone || "Non spécifié"}</li>
          <li><strong>Secteur :</strong> ${sector}</li>
          <li><strong>Solutions IA :</strong> ${solutionList}</li>
          <li><strong>Message :</strong><br/>${needs.replace(/\n/g, "<br/>")}</li>
        </ul>

        <p>Cordialement,<br/>L’équipe WebCressonTech</p>
      `,
    })
    if (!isProd) {
      const infoPreview2 = nodemailer.getTestMessageUrl?.(arguments?.[0] as any)
      if (infoPreview2) console.log("[Audit] Prévisualisation client:", infoPreview2)
    }

    return NextResponse.json(
      { message: "Audit soumis avec succès et e-mails envoyés !" },
      { status: 200 }
    )
  } catch (error: any) {
    const message = (error && error.message) || String(error)
    const isMissingPlain = message.includes('Missing credentials for "PLAIN"')
    if (isMissingPlain) {
      console.error("❌ Erreur API Audit (auth manquante) :", message)
      return NextResponse.json(
        { error: "Configuration SMTP manquante: EMAIL_USER/EMAIL_PASS." },
        { status: 500 }
      )
    }

    console.error("❌ Erreur API Audit :", error)
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 })
  }
}
