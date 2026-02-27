/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://template-vitrine-nextjs.vercel.app/', // Ton URL de production
  generateRobotsTxt: true, // Génère aussi robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [],
};