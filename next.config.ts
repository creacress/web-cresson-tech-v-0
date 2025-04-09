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
        source: '/(.*)', // global pour toutes les routes
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              img-src * data:;
             script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com;

              style-src 'self' 'unsafe-inline';
              connect-src 'self' http://localhost:3000 http://localhost:11434 *;
              frame-src https://calendar.google.com;
              font-src 'self' data:;
            `.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
