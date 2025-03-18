/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Désactive le mode strict pour éviter les erreurs
  images: {
    domains: ['webcresson.com'],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
              connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com;
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
