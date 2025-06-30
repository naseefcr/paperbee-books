// Structured Data generators for SEO

export interface BookStructuredData {
  title: string;
  author?: string;
  description: string;
  isbn?: string;
  genre: string;
  language: string[];
  publisher: string;
  datePublished?: string;
  price?: string;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  image?: string;
  url?: string;
}

export interface PublisherStructuredData {
  name: string;
  description: string;
  url: string;
  logo: string;
  email: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  socialMedia: string[];
  foundingDate?: string;
}

// Generate Book structured data
export function generateBookStructuredData(book: BookStructuredData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: book.author ? {
      '@type': 'Person',
      name: book.author
    } : {
      '@type': 'Organization',
      name: 'PAPERBEE BOOKS'
    },
    description: book.description,
    publisher: {
      '@type': 'Organization',
      name: book.publisher,
      url: 'https://paperbee-books.vercel.app'
    },
    genre: book.genre,
    inLanguage: book.language,
    datePublished: book.datePublished,
    isbn: book.isbn,
    url: book.url,
    image: book.image,
    offers: book.price ? {
      '@type': 'Offer',
      price: book.price,
      priceCurrency: book.currency || 'INR',
      availability: `https://schema.org/${book.availability || 'InStock'}`,
      seller: {
        '@type': 'Organization',
        name: 'PAPERBEE BOOKS'
      }
    } : undefined,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Parent Review'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Excellent educational content that keeps children engaged while learning.'
      }
    ]
  };
}

// Generate Publisher/Organization structured data
export function generatePublisherStructuredData(publisher: PublisherStructuredData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://paperbee-books.vercel.app/#organization',
    name: publisher.name,
    alternateName: 'PAPERBEE',
    description: publisher.description,
    url: publisher.url,
    logo: {
      '@type': 'ImageObject',
      url: publisher.logo,
      width: '200',
      height: '60'
    },
    image: publisher.logo,
    email: publisher.email,
    telephone: publisher.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: publisher.address.streetAddress,
      addressLocality: publisher.address.addressLocality,
      addressRegion: publisher.address.addressRegion,
      postalCode: publisher.address.postalCode,
      addressCountry: publisher.address.addressCountry
    },
    sameAs: publisher.socialMedia,
    foundingDate: publisher.foundingDate,
    industry: 'Publishing',
    numberOfEmployees: '10-50',
    knowsAbout: [
      'Children\'s Literature',
      'Educational Publishing',
      'Multilingual Books',
      'Cultural Stories',
      'Language Learning'
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide'
    },
    serviceArea: {
      '@type': 'Place',
      name: 'Global'
    }
  };
}

// Generate Website structured data
export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://paperbee-books.vercel.app/#website',
    name: 'PAPERBEE BOOKS',
    description: 'Magical children\'s books in multiple languages - educational stories, bilingual books, and cultural tales.',
    url: 'https://paperbee-books.vercel.app',
    publisher: {
      '@id': 'https://paperbee-books.vercel.app/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://paperbee-books.vercel.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['en', 'hi'],
    copyrightYear: '2024',
    copyrightHolder: {
      '@id': 'https://paperbee-books.vercel.app/#organization'
    }
  };
}

// Generate Breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Generate Article structured data (for blog posts)
export function generateArticleStructuredData({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: author
    },
    publisher: {
      '@id': 'https://paperbee-books.vercel.app/#organization'
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: '1200',
      height: '630'
    },
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}

// Default structured data for PAPERBEE BOOKS
export const DEFAULT_PUBLISHER_DATA: PublisherStructuredData = {
  name: 'PAPERBEE BOOKS',
  description: 'Leading publisher of magical children\'s books in multiple languages, creating educational stories and cultural tales that inspire young minds worldwide.',
  url: 'https://paperbee-books.vercel.app',
  logo: 'https://paperbee-books.vercel.app/logo.png',
  email: 'paperbeebook@gmail.com',
  telephone: '+918590885155',
  address: {
    streetAddress: 'Near Scout Bhavan, Anangoor Vidyanagar PO',
    addressLocality: 'Kasaragod',
    addressRegion: 'Kerala',
    postalCode: '671123',
    addressCountry: 'IN'
  },
  socialMedia: [
    'https://wa.me/918590885155',
    // Add other social media URLs when available
  ],
  foundingDate: '2020'
};