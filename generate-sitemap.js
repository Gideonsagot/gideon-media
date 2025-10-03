import { writeFileSync } from 'fs';
import { join } from 'path';

const pages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'weekly', priority: '0.8' },
  { url: '/portfolio', changefreq: 'weekly', priority: '0.8' },
  { url: '/contact', changefreq: 'monthly', priority: '0.8' },
  { url: '/testimonials', changefreq: 'weekly', priority: '0.8' },
  { url: '/blog', changefreq: 'weekly', priority: '0.8' },
  { url: '/blog/5-website-mistakes', changefreq: 'monthly', priority: '0.7' },
  { url: '/blog/5-signs-you-need-seo', changefreq: 'monthly', priority: '0.7' },
  { url: '/blog/why-seo-matters', changefreq: 'monthly', priority: '0.7' },
  { url: '/help', changefreq: 'monthly', priority: '0.6' },
];

const baseUrl = 'https://gideonmedia.netlify.app';
const currentDate = new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  const urls = pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const publicPath = join(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(publicPath, sitemap, 'utf8');
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
};

generateSitemap();
