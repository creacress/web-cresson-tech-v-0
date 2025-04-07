import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const { EMAIL_USER, EMAIL_PASS, EMAIL_RECIPIENT } = process.env

export async function POST(req: Request) {
  try {
    const { name, email, phone, sector, solutions, needs, consent } = await req.json()

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

    const solutionList = solutions && solutions.length > 0 ? solutions.join(", ") : "Non spécifiées"

    // Admin mail
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

    // Auto-reply user
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
    console.error("Erreur audit :", error)
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 })
  }
}
