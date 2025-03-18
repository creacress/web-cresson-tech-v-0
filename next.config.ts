/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Désactive le mode strict pour éviter les erreurs en double
  images: {
    domains: ['webcresson.com'], // Remplace remotePatterns par domains pour éviter les conflits
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true, // Continue la compilation même si des erreurs TypeScript existent
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint pendant la build
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
              img-src 'self' data: https://webcresson.com;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline';
              connect-src 'self' https://www.google-analytics.com;
              frame-src 'self' https://calendar.google.com;
              font-src 'self' data:;
            `.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
