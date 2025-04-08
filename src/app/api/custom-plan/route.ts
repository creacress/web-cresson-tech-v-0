// app/api/custom-plan/route.ts

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '0.0.0.0'

  if (!checkRateLimit(ip)) {
    console.warn(`🚨 Rate limit dépassé pour ${ip}`)
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429 })
  }

  const {
    companyName,
    email,
    projectDescription,
    budget,
    projectTypes,
    techNeeds,
    priorities,
    website, // champ honeypot
  } = await req.json()

  // Protection anti-spam
  if (typeof website === 'string' && website.trim() !== '') {
    return NextResponse.json({ error: 'Requête suspecte détectée.' }, { status: 400 })
  }

  // Champs requis
  if (!companyName || !email || !projectDescription || !budget) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
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
      from: `"WebCressonTech Form" <${process.env.SMTP_USER}>`,
      to: process.env.CUSTOM_PLAN_TO_EMAIL,
      subject: `📨 Demande de plan personnalisé - ${companyName}`,
      html: `
        <h2>Nouvelle demande de plan IA personnalisé</h2>
        <p><strong>Entreprise :</strong> ${companyName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Description :</strong><br/>${projectDescription.replace(/\n/g, '<br/>')}</p>
        <p><strong>Budget :</strong> ${budget}</p>
        <p><strong>Types IA :</strong> ${projectTypes?.join(', ') || 'Non précisé'}</p>
        <p><strong>Besoins techniques :</strong> ${techNeeds?.join(', ') || 'Non précisé'}</p>
        <p><strong>Priorités :</strong> ${priorities?.join(', ') || 'Non précisé'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('❌ Erreur envoi mail plan personnalisé :', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
