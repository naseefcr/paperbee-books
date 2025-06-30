import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paperbee-books.vercel.app';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/en/',
          '/hi/',
          '/about',
          '/vision-mission',
          '/what-we-publish',
          '/books/',
          '/images/',
          '/api/og-image',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/temp/',
          '/draft/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/en/',
          '/hi/',
          '/about',
          '/vision-mission', 
          '/what-we-publish',
          '/books/',
          '/images/',
          '/api/og-image',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/en/',
          '/hi/',
          '/about',
          '/vision-mission',
          '/what-we-publish',
          '/books/',
          '/images/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      // Block social media crawlers from sensitive pages
      {
        userAgent: 'facebookexternalhit',
        allow: [
          '/',
          '/en/',
          '/hi/',
          '/about',
          '/what-we-publish',
          '/images/',
          '/api/og-image',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Twitterbot',
        allow: [
          '/',
          '/en/',
          '/hi/',
          '/about',
          '/what-we-publish',
          '/images/',
          '/api/og-image',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      // WhatsApp crawler for link previews
      {
        userAgent: 'WhatsApp',
        allow: [
          '/',
          '/en/',
          '/hi/',
          '/about',
          '/what-we-publish',
          '/books/',
          '/images/',
          '/api/og-image',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}