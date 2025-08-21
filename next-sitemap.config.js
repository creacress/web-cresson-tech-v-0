/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.webcresson.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*'],
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: 'weekly',
      priority: url === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    }
  },
}