import type { Metadata } from "next"
import Link from "next/link"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import { BuyUnitButton, SubscribeStarterButton, SubscribeProButton } from "@/components/Stripe/CheckoutButton"

// ————————————————————————————
// SEO METADATA
// ————————————————————————————
export const metadata: Metadata = {
  title: "Générateur Vidéo IA — TikTok, Reels & Shorts | WebCressonTech",
  description:
    "Générez automatiquement des vidéos optimisées TikTok, Instagram Reels & YouTube Shorts. Auto-post, analyse des performances, presets de marque, API.",
  keywords: [
    "générateur vidéo IA",
    "générateur IA",
    "TikTok",
    "Instagram Reels",
    "YouTube Shorts",
    "UGC",
    "créateur de contenu",
    "automation IA",
    "auto-post",
    "WebCressonTech",
  ],
  alternates: { canonical: "https://webcresson.com/services/generateur-ia" },
  openGraph: {
    title: "Générateur Vidéo IA — TikTok, Reels & Shorts | WebCressonTech",
    description:
      "Vidéos courtes prêtes à poster : génération auto, auto-post, analytics, presets de marque.",
    url: "https://webcresson.com/services/generateur-ia",
    siteName: "WebCressonTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur Vidéo IA — TikTok, Reels & Shorts | WebCressonTech",
    description:
      "Produisez et publiez automatiquement sur TikTok/IG/Shorts. Analytics et API inclus.",
  },
  robots: { index: true, follow: true },
}
export const viewport = {
  themeColor: "#0B1020",
}

export const revalidate = 3600
const SITE_URL = "https://webcresson.com"

export const dynamic = "force-static"

// ————————————————————————————
// JSON-LD (AI/SEO)
// ————————————————————————————
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Générateur Vidéo IA — TikTok & Instagram",
  provider: { "@type": "Organization", name: "WebCressonTech", url: "https://webcresson.com" },
  serviceType: "AI Short-Form Video Generation",
  areaServed: "FR",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: "https://webcresson.com/contact",
  },
}

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Générateur Vidéo IA — TikTok, Reels & Shorts",
  description:
    "Génération vidéo courte par IA : scripts, formats 9:16, auto-post, analytics, presets de marque.",
  brand: { "@type": "Organization", name: "WebCressonTech" },
  sku: "genai-video-shortform",
  image: [
    `${SITE_URL}/assets/generateur-ia/cat-music-IA.webp`,
    `${SITE_URL}/assets/generateur-ia/spider-man-IA.webp`,
    `${SITE_URL}/assets/generateur-ia/terre-generateur-IA.webp`,
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "99.00",
    highPrice: "149.00",
    offerCount: "3",
    url: "https://webcresson.com/services/generateur-ia#pricing",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "37" },
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Publiez-vous directement sur TikTok et Instagram ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui. Notre pipeline peut générer et auto-publier sur TikTok, Instagram Reels et YouTube Shorts via intégrations et webhooks.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous une analyse des performances ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le plan Growth inclut un tableau de bord (vues, taux de complétion, CTR) et des recommandations de contenu.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je imposer un style de marque ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui. Presets de marque (palettes, typos, hooks, ratios) appliqués automatiquement.",
      },
    },
    {
      "@type": "Question",
      name: "Avez-vous une API ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui. API sécurisée + webhooks, compatible n8n/Make/Zapier pour automatiser briefs, génération et publication.",
      },
    },
    {
      "@type": "Question",
      name: "Et la conformité RGPD ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hébergement UE, DPA, chiffrement et journalisation. Aucune donnée vendue à des tiers.",
      },
    },
  ],
}

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Services", item: "https://webcresson.com/services" },
    { "@type": "ListItem", position: 2, name: "Générateur IA", item: "https://webcresson.com/services/generateur-ia" },
  ],
}

const processLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Processus de création vidéo & image IA",
  step: [
    { "@type": "HowToStep", name: "Brief & objectifs", text: "Formats, audience, styles de marque." },
    { "@type": "HowToStep", name: "Storyboard & styleguide", text: "Script, moodboard, voix." },
    { "@type": "HowToStep", name: "Génération & QA", text: "Rendus en lots, upscaling 4K, corrections." },
    { "@type": "HowToStep", name: "Livraison & diffusion", text: "Exports multi-formats + webhooks/API." },
  ],
}

// ————————————————————————————
// MEDIA GALLERY DATA
// ————————————————————————————
const MEDIA: {
  type: "image" | "video"
  src: string
  alt: string
  label: string
  month: string
  ratio?: "16/9" | "9/16" | "1/1"
}[] = [
  { type: "video", src: "/assets/generateur-ia/video-generative-cafe-surf.mp4", alt: "Publicité vidéo générative café surf", label: "Vidéo vertical 9:16", month: "Août 2025", ratio: "9/16" },
  { type: "video", src: "/assets/generateur-ia/video-generative-youtube.mp4", alt: "Publicité vidéo générative youtube ", label: "Vidéo vertical 9:16", month: "Août 2025", ratio: "9/16" },
  { type: "video", src: "/assets/generateur-ia/video-generateur-commerce.mp4", alt: "Publicité vidéo générative commerce ", label: "Vidéo vertical 9:16", month: "Août 2025", ratio: "9/16" },
  { type: "video", src: "/assets/generateur-ia/video-generative-mouton.mp4", alt: "Publicité vidéo générative mouton ", label: "Vidéo vertical 9:16", month: "Août 2025", ratio: "9/16" },
  { type: "image", src: "/assets/generateur-ia/cat-music-IA.webp", alt: "Image produit e-commerce — Packshot", label: "Image produit e-commerce", month: "Août 2025", ratio: "16/9" },
  { type: "image", src: "/assets/generateur-ia/spider-man-IA.webp", alt: "Thumbnail YouTube — Produit X", label: "Thumbnail YouTube", month: "Août 2025", ratio: "16/9" },
  { type: "image", src: "/assets/generateur-ia/terre-generateur-IA.webp", alt: "Terre générative IA", label: "Terre générative IA", month: "Août 2025", ratio: "16/9" },
]

// ————————————————————————————
// PAGE
// ————————————————————————————
export default function Page() {
  return (
    <main className="relative">
      {/* SEO/AI structured data */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(processLd) }} />

      <BreadcrumbNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,224,255,0.20),transparent_60%)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[1200px] w-[1200px] opacity-[0.08] [mask-image:radial-gradient(closest-side,white,transparent)]">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-pulse" aria-hidden>
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E0FF" stopOpacity=".6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="48" fill="none" stroke="url(#g)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="36" fill="none" stroke="url(#g)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="24" fill="none" stroke="url(#g)" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[12px] text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Nouveau : pipeline TikTok/Reels 9:16 ultra-rapide
          </div>
          <h1 className="text-balance text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-lg">
            Générateur Vidéo IA — TikTok, Reels & Shorts
          </h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg leading-relaxed">
            Passez du prompt au post : vidéos courtes 9:16 générées automatiquement, auto-publication TikTok/Instagram/Shorts, analytics et presets de marque.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="group rounded-lg bg-[#00e0ff] px-5 py-3 text-black font-semibold hover:opacity-90">
              <span className="mr-2 inline-block transition-transform group-hover:translate-x-0.5">🚀</span> Démarrer un projet
            </Link>
            <Link href="#portfolio" className="rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10">
              Voir des rendus
            </Link>
            <div className="ml-0 md:ml-3 flex items-center gap-2 text-white/70 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponibilité : <strong className="text-white">cette semaine</strong></span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-white/80">
            {["Optimisé TikTok/IG", "Auto-post multi-plateformes", "Analytics intégrées", "RGPD UE"].map((b) => (
              <div key={b} className="rounded-lg border border-white/20 px-3 py-2 text-center bg-white/[0.04]">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 border-y border-white/10 bg-[#070B18]/80 backdrop-blur supports-[backdrop-filter]:bg-[#070B18]/60">
        <div className="mx-auto max-w-6xl px-6 py-2 flex flex-wrap gap-4 text-sm text-white/80">
          <a href="#portfolio" className="hover:text-white">Rendus</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#automation" className="hover:text-white">Automatisation</a>
          <a href="#pricing" className="hover:text-white">Tarifs</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="mx-auto max-w-6xl px-6 pb-6 md:pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Vidéos courtes 9:16", d: "Hooks, sous-titres, formats TikTok/Reels/Shorts." },
            { t: "Auto-post & planification", d: "Publication directe + calendrier éditorial." },
            { t: "Analytics & itérations", d: "Tableau de bord, A/B, recommandations IA." },
          ].map((f) => (
            <div key={f.t} className="tilt-wrap">
              <div className="animated-card rounded-2xl border border-white/20 bg-white/[0.06] p-6 ring-1 ring-white/5 hover:border-cyan-400/50 hover:bg-white/[0.1] motion-reduce:transform-none">
                <h2 className="text-xl font-semibold text-white">{f.t}</h2>
                <p className="mt-2 text-white/85">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 overflow-hidden">
          <div className="flex gap-10 overflow-x-auto no-scrollbar whitespace-nowrap text-white/60">
            {Array(6).fill(0).map((_, i) => (
              <span key={i} className="text-xs md:text-sm">Confié par des équipes Marketing • E-commerce • RH • Éditorial</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14" id="process">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Notre processus en 4 étapes</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Brief & objectifs", d: "Formats, audience, KPI, style de marque." },
            { n: "02", t: "Storyboard & style", d: "Script, moodboard, voix & sous-titres." },
            { n: "03", t: "Génération & QA", d: "Rendus en lots, corrections, upscaling 4K." },
            { n: "04", t: "Livraison", d: "Exports multi-formats + intégration via API/webhooks." },
          ].map((s) => (
            <div key={s.n} className="animated-card rounded-2xl border border-white/20 bg-white/[0.06] p-6">
              <div className="text-sm text-cyan-300 font-mono">{s.n}</div>
              <div className="mt-1 text-lg font-semibold text-white">{s.t}</div>
              <div className="mt-1 text-white/85">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO / GALERIE RÉELS */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14" id="portfolio">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Exemples de rendus</h2>
        <p className="mt-2 text-white/85 max-w-2xl">Vidéos et images générées par notre pipeline IA.</p>
        <div className="mt-2 text-[12px] text-white/60">Survolez pour lire • Qualité réduite sur la page • Originaux 4K sur demande</div>

        {/* Group by month, then split by type */}
        {Array.from(new Set(MEDIA.map((m) => m.month))).map((month) => (
          <div key={month} className="mt-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">{month}</h3>

            {/* VIDEOS */}
            <div className="mt-4">
              <div className="text-sm uppercase tracking-widest text-white/70">Vidéos</div>
              <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {MEDIA.filter((m) => m.month === month && m.type === "video").map((m) => (
                  <div key={m.src} className="group rounded-2xl border border-white/20 bg-white/[0.04] hover:bg-white/[0.08]">
                    <div
                      className={[
                        "relative w-full overflow-hidden bg-black/20",
                        m.ratio === "9/16" ? "aspect-[9/16]" : m.ratio === "1/1" ? "aspect-square" : "aspect-video",
                      ].join(" ")}
                    >
                      <video
                        className="absolute inset-0 h-full w-full object-cover"
                        src={m.src}
                        playsInline
                        autoPlay
                        muted
                        loop
                        controls
                        preload="metadata"
                        poster="/assets/generateur-ia/erreur-404-video.webp"
                      />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/30 to-transparent" />
                    </div>
                    <div className="p-4 flex items-center justify-between min-h-[52px]">
                      <div className="text-white/90 text-sm font-medium truncate pr-2">{m.label}</div>
                      <span className="text-white/60 text-xs whitespace-nowrap">{m.ratio === "9/16" ? "9:16" : m.ratio === "1/1" ? "1:1" : "16:9"} • vidéo</span>
                    </div>
                  </div>
                ))}
                {MEDIA.filter((m) => m.month === month && m.type === "video").length === 0 && (
                  <div className="text-white/60 text-sm">Aucune vidéo ce mois.</div>
                )}
              </div>
            </div>

            {/* IMAGES */}
            <div className="mt-6">
              <div className="text-sm uppercase tracking-widest text-white/70">Images</div>
              <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {MEDIA.filter((m) => m.month === month && m.type === "image").map((m) => (
                  <div key={m.src} className="group rounded-2xl border border-white/20 bg-white/[0.04] hover:bg-white/[0.08]">
                    <div
                      className={[
                        "relative w-full overflow-hidden bg-black/20",
                        m.ratio === "1/1" ? "aspect-square" : "aspect-video",
                      ].join(" ")}
                    >
                      <img
                        src={m.src}
                        alt={m.alt}
                        loading="lazy"
                        decoding="async"
                        className={[
                          "absolute inset-0 h-full w-full",
                          m.label.toLowerCase().includes("e-commerce") ? "object-contain bg-white" : "object-cover",
                        ].join(" ")}
                        style={{ imageRendering: "-webkit-optimize-contrast" }}
                      />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/30 to-transparent" />
                    </div>
                    <div className="p-4 flex items-center justify-between min-h-[52px]">
                      <div className="text-white/90 text-sm font-medium truncate pr-2">{m.label}</div>
                      <span className="text-white/60 text-xs whitespace-nowrap">image</span>
                    </div>
                  </div>
                ))}
                {MEDIA.filter((m) => m.month === month && m.type === "image").length === 0 && (
                  <div className="text-white/60 text-sm">Aucune image ce mois.</div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-lg bg-[#00e0ff] px-4 py-2 text-black font-semibold hover:opacity-90">Demander le deck complet</Link>
          <Link href="#pricing" className="rounded-lg border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10">Voir les tarifs</Link>
        </div>
      </section>

      {/* FEATURES détaillés */}
      <section className="mx-auto max-w-6xl px-6 pb-6 md:pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Générateur vidéo IA",
              desc:
                "Scripts courts, hooks, sous-titres auto, formats 9:16 optimisés TikTok/IG/Shorts.",
              bullets: ["Hooks & sous-titres", "9:16 / 1:1 / 16:9", "Exports social-ready"],
            },
            {
              title: "Auto-post & calendrier",
              desc:
                "Publication directe ou planifiée sur TikTok/IG/Shorts, hashtags & descriptions.",
              bullets: ["Auto-post", "Planification", "Templates descriptions"],
            },
            {
              title: "Analytics & itérations",
              desc:
                "Tableau de bord vues/complétion/CTR, A/B testing et recommandations de hooks.",
              bullets: ["Dashboard", "A/B testing", "Recos IA"],
            },
            {
              title: "Sécurité & conformité",
              desc:
                "Hébergement UE, contrôle d’accès, chartes éthiques, DPA disponibles.",
              bullets: ["Hébergement UE", "DPA", "Journalisation"],
            },
          ].map((f) => (
            <div key={f.title} className="tilt-wrap">
              <div className="animated-card rounded-2xl border border-white/20 bg-white/[0.06] p-6 ring-1 ring-white/5 hover:border-cyan-400/50 hover:bg-white/[0.1] hover:shadow-cyan-400/10 motion-reduce:transform-none">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-white/85">{f.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="text-xs rounded-full border border-white/20 px-3 py-1 text-white/85 bg-white/[0.06]">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Cas d’usage</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { k: "Créateurs & UGC", t: "Calendrier Reels/Shorts à la chaîne" },
            { k: "Marques & Ads", t: "UGC ads à grande vitesse" },
            { k: "E-commerce", t: "Démonstrations produit verticales" },
            { k: "Médias", t: "News verticales, breaking clips" },
            { k: "RH & Formation", t: "Micro-learning en capsules" },
            { k: "Événementiel", t: "Teasers courts multi-formats" },
          ].map((c) => (
            <div key={c.t} className="tilt-wrap">
              <div className="animated-card rounded-2xl border border-white/20 p-6 bg-white/[0.06] hover:bg-white/[0.1] motion-reduce:transform-none">
                <div className="text-[11px] uppercase tracking-widest text-white/75">{c.k}</div>
                <div className="mt-2 text-lg font-semibold text-white">{c.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF / KPI */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "+300", l: "vidéos/mois gérées" },
            { n: "4.9/5", l: "satisfaction clients" },
            { n: "<48h", l: "délai moyen de livraison" },
          ].map((k) => (
            <div key={k.l} className="rounded-2xl border border-white/20 bg-white/[0.04] p-6 text-center">
              <div className="text-3xl font-extrabold text-white">{k.n}</div>
              <div className="mt-1 text-white/80">{k.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTOMATION */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14" id="automation">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Automatisation TikTok/Instagram</h2>
        <p className="mt-2 text-white/85 max-w-3xl">
          De l'idée à la publication : prompts guidés, génération, validation, puis auto-post sur TikTok, Instagram Reels et YouTube Shorts. Intégrations n8n/Make/Zapier et webhooks.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { k: "Création auto", t: "Scripts, voix, sous-titres, habillages." },
            { k: "Publication", t: "Auto-post + tags/hashtags + horaires optimisés." },
            { k: "Analyse", t: "Vues, complétion, CTR, itérations recommandées." },
          ].map((c) => (
            <div key={c.t} className="tilt-wrap">
              <div className="animated-card rounded-2xl border border-white/20 p-6 bg-white/[0.06] hover:bg-white/[0.1]">
                <div className="text-[11px] uppercase tracking-widest text-white/75">{c.k}</div>
                <div className="mt-2 text-lg font-semibold text-white">{c.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING — Unité + Abonnements */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-16" id="pricing">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Tarifs simples, adaptés à vos usages</h2>
          <p className="mt-2 text-white/85 max-w-3xl">
            Choisissez à l’unité pour tester rapidement, ou passez en abonnement et <strong>faites baisser le prix par rendu</strong>.
            Tous nos plans incluent le studio, les presets de marque et l’export multi-formats.
          </p>
        </div>

        {/* Pack Créateur de contenu */}
        <div className="rounded-2xl border border-white/20 bg-white/[0.06] p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-widest text-white/70">Pack créateur de contenu</div>
              <div className="mt-1 text-2xl font-semibold text-white">Vidéos courtes générées automatiquement</div>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm text-white/85">
                <li className="rounded-full border border-white/20 px-3 py-1 bg-white/[0.06]">9:16 optimisé TikTok/IG/Shorts</li>
                <li className="rounded-full border border-white/20 px-3 py-1 bg-white/[0.06]">Auto-post & planification</li>
                <li className="rounded-full border border-white/20 px-3 py-1 bg-white/[0.06]">Sous-titres & templates</li>
              </ul>
            </div>
            <div className="text-right md:min-w-[220px]">
              <div className="text-white/70 text-sm">à partir de</div>
              <div className="text-3xl font-extrabold text-white leading-none">99€</div>
              <div className="text-white/70 text-sm">par mois</div>
            </div>
          </div>
        </div>

        {/* Abonnements */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-white/80 text-sm">Abonnements —</span>
          <span className="text-[12px] rounded bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 px-2 py-0.5">prix unitaire bridé</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              price: "99€/mois",
              unit: "→ 15 vidéos générées",
              features: ["Auto-post TikTok/IG/Shorts", "Sous-titres & templates", "Support email"],
            },
            {
              name: "Growth",
              price: "149€/mois",
              unit: "→ 30 vidéos + analytics",
              features: ["Auto-post multi-plateformes", "Dashboard performances", "A/B des hooks"],
              highlight: true,
            },
            {
              name: "Pro",
              price: "Sur devis",
              unit: "→ Vidéos illimitées + automatisation",
              features: ["Automatisation multi-plateformes", "SLAs & DPA", "API + webhooks"],
            },
          ].map((p) => (
            <div
              key={p.name}
              className={[
                "animated-card rounded-2xl p-6 border transition h-full",
                p.highlight ? "border-cyan-400/40 bg-white/[0.04] shadow-cyan-400/10" : "border-white/20 bg-white/[0.06] hover:bg-white/[0.1]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                {p.highlight && (
                  <span className="text-[10px] rounded bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 px-2 py-0.5">Populaire</span>
                )}
              </div>
              <div className="mt-1 text-white text-2xl font-bold">{p.price}</div>
              <div className="text-white/75 text-sm">{p.unit}</div>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-white/85">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
              {p.name === "Starter" ? (
                <SubscribeStarterButton className="mt-5 w-full" />
              ) : p.name === "Growth" ? (
                <SubscribeProButton className="mt-5 w-full" />
              ) : (
                <Link href="/contact" className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#00e0ff] px-4 py-2 text-black font-semibold hover:opacity-90 w-full">
                  Demander un devis
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs text-white/70">
          * Les prix unitaires indiqués sont calculés sur la base du volume inclus et diminuent encore au-delà (paliers volume).
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16" id="faq">
        <h2 className="text-2xl md:text-3xl font-bold text-white">FAQ — Générateur IA</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            { q: "Publiez-vous automatiquement sur TikTok/IG ?", a: "Oui, via intégrations officielles et webhooks. Planification incluse." },
            { q: "Le plan Growth inclut quoi ?", a: "30 vidéos/mois, auto-post multi-plateformes et analytics (vues, complétion, CTR)." },
            { q: "Puis-je garder mon style ?", a: "Oui : presets de marque (palettes, typos, hooks) et templates de descriptions." },
            { q: "Avez-vous une API ?", a: "Oui : API sécurisée + webhooks, compatible n8n/Make/Zapier." },
            { q: "Quels formats livrez-vous ?", a: "MP4/H.264, WebM. Focus 9:16 (TikTok/Reels/Shorts), déclinaisons 1:1 / 16:9." },
            { q: "Et la conformité RGPD ?", a: "Hébergement UE, DPA, chiffrement, journalisation. Aucune revente de données." },
          ].map((f) => (
            <div key={f.q} className="tilt-wrap">
              <div className="animated-card rounded-2xl border border-white/20 p-5 bg-white/[0.06]">
                <div className="font-semibold text-white">{f.q}</div>
                <div className="mt-1 text-white/85">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="rounded-2xl border border-cyan-400/40 bg-white/[0.08] p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Prêt à générer vos contenus avec l’IA ?</h2>
          <p className="mt-2 text-white/85">
            Parlez-nous de vos besoins (formats, styles, volumes). On vous prépare un plan d’action en 24h ouvrées.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="rounded-lg bg-[#00e0ff] px-5 py-3 text-black font-semibold hover:opacity-90">
              Démarrer maintenant
            </Link>
            <Link href="/services" className="rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10">
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-30">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-3 rounded-xl border border-cyan-400/30 bg-[#0B1328]/80 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#0B1328]/60">
            <div className="text-sm text-white/80">Prêt à générer vos vidéos/images ?</div>
            <Link href="/contact" className="rounded-lg bg-[#00e0ff] px-4 py-2 text-black font-semibold hover:opacity-90">Contacter un expert</Link>
          </div>
        </div>
      </div>
    </main>
  )
}