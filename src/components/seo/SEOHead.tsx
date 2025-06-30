import Head from 'next/head';
import { useLocale } from 'next-intl';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'book' | 'profile';
  ogSiteName?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean;
  structuredData?: object;
  alternateLanguages?: { locale: string; url: string }[];
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/api/og-image',
  ogType = 'website',
  ogSiteName = 'PAPERBEE BOOKS',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,
  alternateLanguages = []
}: SEOHeadProps) {
  const locale = useLocale();
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paperbee-books.vercel.app';
  const fullCanonicalUrl = canonicalUrl || `${baseUrl}/${locale}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  const fullTitle = title === 'Home' 
    ? 'PAPERBEE BOOKS - Magical Children\'s Books in Multiple Languages'
    : `${title} | PAPERBEE BOOKS`;

  const defaultKeywords = [
    'children books',
    'multilingual books',
    'educational books',
    'kids stories',
    'bilingual books',
    'children literature',
    'picture books',
    'learning books',
    'cultural books',
    'family reading'
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="PAPERBEE BOOKS" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content={locale} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Alternate Languages */}
      {alternateLanguages.map(({ locale: altLocale, url }) => (
        <link
          key={altLocale}
          rel="alternate"
          hrefLang={altLocale}
          href={url}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content={`${title} - PAPERBEE BOOKS`} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'hi_IN'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={`${title} - PAPERBEE BOOKS`} />
      <meta name="twitter:site" content="@paperbeebooks" />
      <meta name="twitter:creator" content="@paperbeebooks" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#F59E0B" />
      <meta name="msapplication-TileColor" content="#F59E0B" />
      <meta name="application-name" content="PAPERBEE BOOKS" />
      <meta name="apple-mobile-web-app-title" content="PAPERBEE BOOKS" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://wa.me" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//wa.me" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}

// Preset SEO configurations
export const SEOConfigs = {
  home: {
    title: 'Home',
    description: 'Discover magical children\'s books in multiple languages. PAPERBEE BOOKS offers educational stories, bilingual books, and cultural tales that inspire young minds worldwide.',
    keywords: ['homepage', 'children\'s books', 'multilingual', 'educational', 'stories'],
    ogType: 'website' as const
  },
  
  about: {
    title: 'About Us',
    description: 'Learn about PAPERBEE BOOKS\' mission to create magical stories and educational content for children worldwide. Discover our commitment to multilingual literature and cultural diversity.',
    keywords: ['about', 'mission', 'vision', 'company', 'children\'s publisher'],
    ogType: 'website' as const
  },
  
  whatWePublish: {
    title: 'What We Publish',
    description: 'Explore our comprehensive collection of children\'s books including storybooks, poetry, educational materials, and language learning resources in 9+ languages.',
    keywords: ['books', 'catalog', 'storybooks', 'poetry', 'educational', 'multilingual'],
    ogType: 'website' as const
  },
  
  visionMission: {
    title: 'Vision & Mission',
    description: 'Our vision is to bridge cultures through storytelling. Learn about PAPERBEE BOOKS\' mission to provide quality children\'s literature in native languages worldwide.',
    keywords: ['vision', 'mission', 'values', 'cultural diversity', 'storytelling'],
    ogType: 'website' as const
  }
};