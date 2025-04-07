import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { checkRateLimit } from "@/lib/rate-limit"

const { EMAIL_USER, EMAIL_PASS, EMAIL_RECIPIENT } = process.env

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "0.0.0.0"

  // 🛡 Rate limit
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
      website, // 🕵️‍♂️ Honeypot
    } = await req.json()

    // 🚨 Honeypot check
    if (typeof website === "string" && website.trim() !== "") {
      console.warn("🤖 Bot détecté - requête bloquée")
      return NextResponse.json({ error: "Requête non autorisée" }, { status: 400 })
    }

    // 📋 Champs obligatoires
    if (!name || !email || !sector || !needs || !consent) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const solutionList =
      solutions && solutions.length > 0 ? solutions.join(", ") : "Non spécifiées"

    // ✉️ Mail vers admin
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

    // ✅ Auto-reply
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

    return NextResponse.json(
      { message: "Audit soumis avec succès et e-mails envoyés !" },
      { status: 200 }
    )
  } catch (error) {
    console.error("❌ Erreur API Audit :", error)
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 })
  }
}
