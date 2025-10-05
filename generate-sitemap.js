import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const baseUrl = 'https://gideonmedia.netlify.app';
const currentDate = new Date().toISOString().split('T')[0];

// Main pages sitemap
const mainPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'weekly', priority: '0.8' },
  { url: '/portfolio', changefreq: 'weekly', priority: '0.8' },
  { url: '/contact', changefreq: 'monthly', priority: '0.8' },
  { url: '/testimonials', changefreq: 'weekly', priority: '0.8' },
  { url: '/help', changefreq: 'monthly', priority: '0.6' },
];

// Blog pages - dynamically generated
const blogPages = [
  { url: '/blog', changefreq: 'weekly', priority: '0.8' },
  { url: '/blog/5-website-mistakes', changefreq: 'monthly', priority: '0.7', lastmod: '2025-01-10' },
  { url: '/blog/5-signs-you-need-seo', changefreq: 'monthly', priority: '0.7', lastmod: '2025-01-15' },
  { url: '/blog/why-seo-matters', changefreq: 'monthly', priority: '0.7', lastmod: '2025-01-20' },
];

const generateUrlEntry = (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;

const generateSitemapXML = (pages) => {
  const urls = pages.map(generateUrlEntry).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

const generateSitemapIndex = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-main.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-blog.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
};

const writeSitemapFiles = () => {
  try {
    // Ensure dist directory exists
    const distDir = join(process.cwd(), 'dist');
    if (!existsSync(distDir)) {
      mkdirSync(distDir, { recursive: true });
    }

    // Generate sitemaps
    const mainSitemap = generateSitemapXML(mainPages);
    const blogSitemap = generateSitemapXML(blogPages);
    const indexSitemap = generateSitemapIndex();

    // Write to public/ directory (for development)
    const publicDir = join(process.cwd(), 'public');
    writeFileSync(join(publicDir, 'sitemap-main.xml'), mainSitemap, 'utf8');
    writeFileSync(join(publicDir, 'sitemap-blog.xml'), blogSitemap, 'utf8');
    writeFileSync(join(publicDir, 'sitemap.xml'), indexSitemap, 'utf8');
    console.log('✅ Generated sitemaps in public/');

    // Write to dist/ directory (for production)
    writeFileSync(join(distDir, 'sitemap-main.xml'), mainSitemap, 'utf8');
    writeFileSync(join(distDir, 'sitemap-blog.xml'), blogSitemap, 'utf8');
    writeFileSync(join(distDir, 'sitemap.xml'), indexSitemap, 'utf8');
    console.log('✅ Generated sitemaps in dist/');

    console.log('✅ All sitemaps generated successfully!');
    console.log('   - sitemap.xml (index)');
    console.log('   - sitemap-main.xml');
    console.log('   - sitemap-blog.xml');
  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
};

writeSitemapFiles();
