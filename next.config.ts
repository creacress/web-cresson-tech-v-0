/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: false, // Plus relax pour le dev

  experimental: {
    esmExternals: true,
  },

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
        source: '/(.*)', // Appliqué à toutes les routes
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Robots-Tag', value: 'all' }, // Aide Googlebot
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com https://apis.google.com/js/api.js https://apis.google.com https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src * data:; connect-src *; frame-src https://calendar.google.com https://www.googletagmanager.com https://www.google.com https://www.youtube.com; font-src 'self' data:;`.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
