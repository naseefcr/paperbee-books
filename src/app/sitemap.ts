import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paperbee-books.vercel.app';
  const currentDate = new Date().toISOString();
  
  // Static pages for both languages
  const staticPages = [
    '',
    '/about',
    '/vision-mission',
    '/what-we-publish',
  ];
  
  const languages = ['en', 'hi'];
  
  // Generate URLs for all language combinations
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  languages.forEach(lang => {
    staticPages.forEach(page => {
      const url = `${baseUrl}/${lang}${page}`;
      
      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: getPriorityForPage(page),
        alternates: {
          languages: Object.fromEntries(
            languages.map(altLang => [
              altLang,
              `${baseUrl}/${altLang}${page}`
            ])
          )
        }
      });
    });
  });
  
  // Add individual book pages (when available)
  const bookSlugs = [
    'magic-honey-garden',
    'rainbow-rhymes-collection',
    'little-explorers-guide',
    'numbers-and-colors',
    'creative-art-adventures',
    'world-knowledge-kids',
    'animal-friends-stories',
    'space-adventure-tales',
    'ocean-mysteries'
  ];
  
  languages.forEach(lang => {
    bookSlugs.forEach(slug => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/books/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            languages.map(altLang => [
              altLang,
              `${baseUrl}/${altLang}/books/${slug}`
            ])
          )
        }
      });
    });
  });
  
  return sitemapEntries;
}

function getPriorityForPage(page: string): number {
  switch (page) {
    case '':
      return 1.0; // Homepage
    case '/what-we-publish':
      return 0.9; // Main product page
    case '/about':
      return 0.8;
    case '/vision-mission':
      return 0.7;
    default:
      return 0.6;
  }
}