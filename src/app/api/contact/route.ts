import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, phone, company, comments } = await req.json()

  if (!name || !email || !comments) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true si port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `📬 Nouveau message de ${name} via WebCressonTech`,
      html: `
        <h2>Nouveau message via le formulaire WebCressonTech</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non fourni"}</p>
        <p><strong>Entreprise :</strong> ${company || "Non précisé"}</p>
        <p><strong>Message :</strong><br/>${comments.replace(/\n/g, "<br/>")}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Erreur envoi mail :", err)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
