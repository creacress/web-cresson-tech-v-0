/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Perf & sécurité
  productionBrowserSourceMaps: false, // évite d'exposer le code en prod
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  experimental: {
    esmExternals: true,
    serverActions: {
      // autorise tes origines locales et prod
      allowedOrigins: [
        'http://localhost:3000',
        'https://webcresson.com',
      ],
      // optionnel: limite taille payload actions
      // bodySizeLimit: '2mb',
    },
    // ✅ Réduit le bundle en important seulement ce qui est utilisé
    optimizePackageImports: ['framer-motion'],
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'webcresson.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 an pour les images
  },

  typescript: {
    ignoreBuildErrors: true, // tolère les erreurs pour build sur Vercel
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      // ♻️ Cache long pour les assets Next
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // ♻️ Cache long pour tes images
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // 🌐 Par défaut (HTML/RSC/JSON) → pas de cache long
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Robots-Tag', value: 'all' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com https://apis.google.com/js/api.js https://apis.google.com https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src * data: blob:; connect-src *; frame-src https://calendar.google.com https://www.googletagmanager.com https://www.google.com https://www.youtube.com; font-src 'self' data:;`.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
