import { NextResponse } from 'next/server';
import { INDUSTRIES, APPLICATIONS, JOBS } from '@/lib/mockData';
import { ALL_PRODUCTS } from '@/lib/productsData';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://flowitec.com';
  
  const staticPages = [
    '',
    '/about',
    '/products',
    '/industries',
    '/applications',
    '/services',
    '/references',
    '/partners',
    '/careers',
    '/contact',
    '/quality'
  ];

  const productUrls = ALL_PRODUCTS.map(p => `/products/${p.category}/${p.slug}`);
  const industryUrls = INDUSTRIES.map(i => `/industries/${i.slug}`);
  const applicationUrls = APPLICATIONS.map(a => `/applications/${a.slug}`);
  const jobUrls = JOBS.filter(j => j.isActive).map(j => `/careers/${j.slug}`);

  const allUrls = [
    ...staticPages,
    ...productUrls,
    ...industryUrls,
    ...applicationUrls,
    ...jobUrls
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}