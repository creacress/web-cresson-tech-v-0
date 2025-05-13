import Script from 'next/script'
import Link from 'next/link'
import { SiLinkedin } from 'react-icons/si'


export default function MerciPage() {
  return (
    <>
      {/* 🎯 Google Ads Conversion Tracking */}
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              send_to: 'AW-123456789/abcdEFGHijkLmnOPqr',
              value: 1.0,
              currency: 'EUR'
            });
          `,
        }}
      />

      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 text-white bg-black">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-neon drop-shadow">
          Merci pour votre demande ! 🙌
        </h1>
        <p className="text-lg max-w-xl mb-8 text-gray-300">
          Votre audit est en cours d’analyse. Nous vous contacterons sous 24–48h avec des recommandations personnalisées.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-white text-black rounded font-semibold hover:scale-105 transition"
        >
          Retour à l’accueil
        </Link>

        {/* 🔗 Réseau LinkedIn */}
        <div className="mt-12">
          <p className="text-gray-400 mb-4">Envie d’échanger en direct ?</p>
          <a
            href="https://www.linkedin.com/in/alexis-cresson/" // 🔁 change le lien ici
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            <SiLinkedin className="w-5 h-5" />
            Me contacter sur LinkedIn
          </a>
        </div>
      </main>
    </>
  )
}
