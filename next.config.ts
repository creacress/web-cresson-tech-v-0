const nextConfig: import('next').NextConfig = {
  reactStrictMode: false,

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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Robots-Tag', value: 'all' },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self' https: data:;
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://va.vercel-scripts.com
                https://apis.google.com
                https://www.google.com
                https://www.gstatic.com;
              style-src 'self' 'unsafe-inline';
              img-src * data:;
              connect-src *;
              frame-src https://calendar.google.com https://www.googletagmanager.com https://www.google.com;
              font-src 'self' data:;
            `.replace(/\n/g, ' ').trim(),
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
