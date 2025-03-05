/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webcresson.com',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    const nonce = generateNonce(); // Génère un nonce unique pour chaque requête

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }, // Permet l'intégration de frames sur le même domaine
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              img-src 'self' data: https://webcresson.com;
              script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com;
              script-src-elem 'self' https://www.googletagmanager.com 'unsafe-inline';
              style-src 'self' 'nonce-${nonce}' 'unsafe-inline'; 
              connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com;
              frame-src 'self' https://calendar.google.com; /* Autorise l'iframe Google Agenda */
              font-src 'self';
            `.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

// Fonction pour générer un nonce unique
function generateNonce() {
  return Math.random().toString(36).slice(2);
}

module.exports = nextConfig;
