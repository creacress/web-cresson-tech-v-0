// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '0.0.0.0'

  if (!checkRateLimit(ip)) {
    console.warn(`🚨 Rate limit dépassé pour ${ip}`)
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429 })
  }

  const { name, email, phone, company, comments, plan, website, model, pipeline } = await req.json()

  if (typeof website === 'string' && website.trim() !== '') {
    return NextResponse.json({ error: 'Requête non autorisée' }, { status: 400 })
  }

  if (!name || !email || !comments) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  const isValid = (val: string | undefined, regex: RegExp) => typeof val === 'string' && regex.test(val)

  const modelValid = isValid(model, /^[\w\-\/]+$/)
  const pipelineValid = isValid(pipeline, /^[\w\-]+$/)

  if (model && !modelValid) {
    return NextResponse.json({ error: 'Modèle IA invalide.' }, { status: 400 })
  }

  if (pipeline && !pipelineValid) {
    return NextResponse.json({ error: 'Pipeline IA invalide.' }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `📬 Nouveau message de ${name} via WebCressonTech`,
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Entreprise :</strong> ${company || 'Non précisé'}</p>
        <p><strong>Plan choisi :</strong> ${plan || 'Non précisé'}</p>
        ${model ? `<p><strong>Modèle IA :</strong> ${model}</p>` : ''}
        ${pipeline ? `<p><strong>Tâche IA :</strong> ${pipeline}</p>` : ''}
        <p><strong>Message :</strong><br/>${comments.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Erreur envoi mail :', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
