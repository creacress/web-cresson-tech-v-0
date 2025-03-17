import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Utilisation des variables d'environnement
const { EMAIL_USER, EMAIL_PASS, EMAIL_RECIPIENT } = process.env;

export async function POST(req: Request) {
  try {
    const { name, email, phone, sector, solutions, needs, consent } = await req.json();

    // 🔍 Validation des champs obligatoires
    if (!name || !email || !sector || !needs || !consent) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    // 📬 Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // 🔧 Adapte selon ton hébergeur SMTP
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // 📩 E-mail pour l'administrateur
    const adminMailOptions = {
      from: `"WebCressonTech" <${EMAIL_USER}>`,
      to: EMAIL_RECIPIENT,
      subject: `Nouvelle demande d'audit IA de ${name}`,
      text: `
        📊 Détails de la demande d'audit :

        - 🏷️ Nom : ${name}
        - 📧 Email : ${email}
        - 📞 Téléphone : ${phone || 'Non spécifié'}
        - 🏢 Secteur d'activité : ${sector}
        - 🛠️ Solutions IA sélectionnées : ${solutions.length > 0 ? solutions.join(', ') : 'Non spécifiées'}
        - 📝 Description du besoin :
          ${needs}
      `,
    };

    // 📨 E-mail de confirmation pour l'utilisateur
    const userMailOptions = {
      from: `"WebCressonTech" <${EMAIL_USER}>`,
      to: email,
      subject: 'Confirmation de votre demande d\'audit IA',
      text: `
        Bonjour ${name},

        Merci d'avoir fait une demande d'audit IA chez Web Cresson Tech. Nous avons bien reçu votre demande et nous vous contacterons sous peu.

        📊 Récapitulatif de votre demande :
        - 📧 Email : ${email}
        - 📞 Téléphone : ${phone || 'Non spécifié'}
        - 🏢 Secteur d'activité : ${sector}
        - 🛠️ Solutions IA sélectionnées : ${solutions.length > 0 ? solutions.join(', ') : 'Non spécifiées'}
        - 📝 Votre message :
          ${needs}

        Nous vous remercions de votre intérêt et vous contacterons rapidement !

        Cordialement,
        L'équipe WebCressonTech
      `,
    };

    // 🚀 Envoi des e-mails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Audit soumis avec succès et e-mails envoyés !" }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi des emails :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
