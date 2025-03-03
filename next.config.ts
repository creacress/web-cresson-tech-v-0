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
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              img-src 'self' data: https://webcresson.com;
              script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com;
              style-src 'self' 'nonce-${nonce}';
              connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com;
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
  return Math.random().toString(36).slice(2); // Génère un nonce unique
}

module.exports = nextConfig;
