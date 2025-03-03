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
    ignoreBuildErrors: true, // ⚠️ Désactive les erreurs TS lors du build
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignorer ESLint lors du build
  },
  async headers() {
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
              script-src 'self' https://www.googletagmanager.com 'unsafe-inline';  // Ajout de 'unsafe-inline'
              style-src 'self' 'unsafe-inline';  // Ajout de 'unsafe-inline' pour les styles inline
              connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com ws:;
              font-src 'self';
            `.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
