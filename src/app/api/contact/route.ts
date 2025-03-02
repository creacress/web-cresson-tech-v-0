import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Utilisation de variables d'environnement sécurisées
const { EMAIL_USER, EMAIL_PASS, EMAIL_RECIPIENT } = process.env;

export async function POST(req: Request) {
  try {
    const { email, name, phone, company, comments } = await req.json();

    // Validation des champs obligatoires
    if (!email || !name || !phone || !company) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // E-mail destiné à l'administrateur
    const adminMailOptions = {
      from: `"WebCressonTech" <${EMAIL_USER}>`,
      to: EMAIL_RECIPIENT,
      subject: `Nouvelle soumission de formulaire de ${name}`,
      text: `
        Détails de la soumission :
        - Nom : ${name}
        - Email : ${email}
        - Téléphone : ${phone}
        - Entreprise : ${company}
        - Commentaires : ${comments}
      `,
    };

    // E-mail de confirmation à l'utilisateur
    const userMailOptions = {
      from: `"WebCressonTech" <${EMAIL_USER}>`,
      to: email,
      subject: 'Confirmation de votre soumission',
      text: `
        Bonjour ${name},

        Merci d'avoir pris contact avec nous. Nous avons bien reçu votre demande et nous reviendrons vers vous dans les plus brefs délais.

        Voici un récapitulatif de votre message :
        - Nom : ${name}
        - Téléphone : ${phone}
        - Entreprise : ${company}
        - Commentaires : ${comments}

        Cordialement,
        L'équipe WebCressonTech
      `,
    };

    // Envoi des e-mails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Emails envoyés avec succès !' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails :', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
