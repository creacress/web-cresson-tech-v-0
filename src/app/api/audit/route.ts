import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { checkRateLimit } from "@/lib/rate-limit"
import dns from "node:dns/promises"

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
  RECAPTCHA_SECRET,
} = process.env

const isProd = NODE_ENV === "production"

// -- Utils ----------------------------------------------------
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "tempmail.com",
])

const BAD_WORDS = [
  "caca",
  "shit",
  "test",
  "spam",
  "fake",
]

function escapeHTML(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function isLikelyGibberish(text: string) {
  const t = text.toLowerCase().trim()
  if (t.length < 20) return true
  // doit contenir au moins 2 voyelles et un espace
  const vowels = (t.match(/[aeiouyàâäéèêëîïôöùûü]/g) || []).length
  if (vowels < 2) return true
  if (!/\s/.test(t)) return true
  // suite de lettres aléatoires
  if (/\b[a-z]{4,}\s[a-z]{4,}\b/.test(t) && /[bcdfghjklmnpqrstvwxz]{4,}/.test(t)) {
    return true
  }
  // mots interdits
  if (BAD_WORDS.some(w => t.includes(w))) return true
  return false
}

async function hasValidMx(domain: string) {
  try {
    const records = await dns.resolveMx(domain)
    return Array.isArray(records) && records.length > 0
  } catch {
    return false
  }
}

async function isValidEmail(email: string) {
  if (!EMAIL_REGEX.test(email)) return false
  const domain = email.split("@")[1]?.toLowerCase() || ""
  if (!domain || DISPOSABLE_DOMAINS.has(domain)) return false
  return await hasValidMx(domain)
}

async function verifyRecaptcha(token: string | undefined, remoteip: string) {
  if (!isProd) {
    // en DEV on n'impose pas reCAPTCHA
    return true
  }
  if (!RECAPTCHA_SECRET) return false
  if (!token) return false
  try {
    const form = new URLSearchParams({
      secret: RECAPTCHA_SECRET,
      response: token,
      remoteip,
    })
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    })
    const data: any = await res.json()
    // v3: success + score >= 0.5
    return !!data?.success && (typeof data?.score !== "number" || data.score >= 0.5)
  } catch (e) {
    console.warn("reCAPTCHA verify error:", e)
    return false
  }
}

export async function POST(req: Request) {
  const ipHeader =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]

  const ip = ipHeader || "0.0.0.0"

  // 🛡 Rate limiting
  if (!checkRateLimit(ip)) {
    console.warn(`🚫 Rate limit dépassé | IP: ${ip}`)
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez plus tard." },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()
    const {
      name,
      email,
      phone,
      sector,
      solutions,
      needs,
      consent,
      website, // honeypot
      recaptchaToken,
    } = body || {}

    // 🕵️‍♂️ Honeypot
    if (typeof website === "string" && website.trim() !== "") {
      console.warn("🤖 Bot détecté - honeypot")
      return NextResponse.json({ error: "Requête non autorisée" }, { status: 400 })
    }

    // 🧠 reCAPTCHA (v3 ou hCaptcha compatible côté front)
    const captchaOk = await verifyRecaptcha(recaptchaToken, ip)
    if (!captchaOk) {
      return NextResponse.json(
        { error: "Vérification anti-robot échouée." },
        { status: 400 }
      )
    }

    // 📝 Validation stricte
    if (!name || !email || !sector || !needs || consent !== true) {
      return NextResponse.json(
        { error: "Champs requis manquants ou consentement absent." },
        { status: 400 }
      )
    }

    if (!(await isValidEmail(String(email)))) {
      return NextResponse.json(
        { error: "Adresse e-mail invalide ou non délivrable." },
        { status: 400 }
      )
    }

    if (isLikelyGibberish(String(needs))) {
      return NextResponse.json(
        { error: "Message trop court ou non pertinent." },
        { status: 400 }
      )
    }

    // Normalisation & échappement
    const safe = {
      name: escapeHTML(String(name).slice(0, 100)),
      email: escapeHTML(String(email).slice(0, 150)),
      phone: escapeHTML(String(phone || "").slice(0, 50)),
      sector: escapeHTML(String(sector).slice(0, 120)),
      needs: escapeHTML(String(needs).slice(0, 5000)),
    }

    const solutionList =
      Array.isArray(solutions) && solutions.length > 0
        ? solutions.map((s: any) => String(s)).slice(0, 10).join(", ")
        : "Non spécifiées"

    // 📦 Setup du transport SMTP (DEV/PROD + fallback Ethereal)
    let transporter: nodemailer.Transporter

    if (isProd) {
      // En prod, on exige les identifiants
      if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_RECIPIENT) {
        console.error("[Audit] Vars manquantes en production", {
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
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
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
          auth: { user: EMAIL_USER, pass: EMAIL_PASS },
        })
      } else {
        const testAccount = await nodemailer.createTestAccount()
        transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: { user: testAccount.user, pass: testAccount.pass },
        })
        console.warn("[Audit] DEV sans creds SMTP → Ethereal")
      }
    }

    // ✉️ Envoi à l’équipe
    const teamInfo = await transporter.sendMail({
      from: `"WebCressonTech" <${EMAIL_USER}>`,
      to: EMAIL_RECIPIENT,
      subject: `🔍 Nouvelle demande d'audit IA de ${safe.name}`,
      html: `
        <h2>📊 Nouvelle demande d'audit IA</h2>
        <p><strong>Nom :</strong> ${safe.name}</p>
        <p><strong>Email :</strong> ${safe.email}</p>
        <p><strong>Téléphone :</strong> ${safe.phone || "Non spécifié"}</p>
        <p><strong>Secteur d'activité :</strong> ${safe.sector}</p>
        <p><strong>Solutions IA choisies :</strong> ${escapeHTML(solutionList)}</p>
        <p><strong>Message :</strong><br/>${safe.needs.replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p><small>IP: ${ip}</small></p>
      `,
    })

    if (!isProd && (nodemailer as any).getTestMessageUrl) {
      const preview = (nodemailer as any).getTestMessageUrl(teamInfo)
      if (preview) console.log("[Audit] Preview équipe:", preview)
    }

    // ✅ Confirmation client
    const clientInfo = await transporter.sendMail({
      from: `"WebCressonTech" <${EMAIL_USER}>`,
      to: safe.email,
      subject: "✅ Confirmation de votre demande d'audit IA",
      html: `
        <p>Bonjour ${safe.name},</p>
        <p>Merci pour votre demande d'audit IA. Nous l’avons bien reçue et reviendrons vers vous très rapidement.</p>
        <h4>📋 Récapitulatif :</h4>
        <ul>
          <li><strong>Email :</strong> ${safe.email}</li>
          <li><strong>Téléphone :</strong> ${safe.phone || "Non spécifié"}</li>
          <li><strong>Secteur :</strong> ${safe.sector}</li>
          <li><strong>Solutions IA :</strong> ${escapeHTML(solutionList)}</li>
          <li><strong>Message :</strong><br/>${safe.needs.replace(/\n/g, "<br/>")}</li>
        </ul>
        <p>Cordialement,<br/>L’équipe WebCressonTech</p>
      `,
    })

    if (!isProd && (nodemailer as any).getTestMessageUrl) {
      const preview = (nodemailer as any).getTestMessageUrl(clientInfo)
      if (preview) console.log("[Audit] Preview client:", preview)
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
