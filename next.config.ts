/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Plus relax pour le dev

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webcresson.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  typescript: {
    ignoreBuildErrors: true, // tolère les erreurs pour build sur Vercel
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
              img-src * data:;
              script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline';
              connect-src *;
              frame-src https://calendar.google.com;
              font-src 'self' data:;
            `.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
