import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AccessibilitySkipLink from '@/components/a11y/AccessibilitySkipLink'
import { generateWebsiteStructuredData, generatePublisherStructuredData, DEFAULT_PUBLISHER_DATA } from '@/lib/structuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://paperbee-books.vercel.app'),
  title: {
    default: 'PAPERBEE BOOKS - Magical Children\'s Books in Multiple Languages',
    template: '%s | PAPERBEE BOOKS'
  },
  description: 'Discover magical stories and educational materials for children in multiple languages. PAPERBEE BOOKS offers storybooks, poetry, and learning resources in English, Hindi, Arabic, Japanese, and more.',
  keywords: [
    'children books',
    'multilingual books', 
    'educational books',
    'kids stories',
    'bilingual books',
    'children literature',
    'picture books',
    'learning books',
    'cultural books',
    'family reading',
    'Arabic books',
    'Hindi books', 
    'Japanese books',
    'Indonesian books',
    'Malayalam books',
    'Tamil books',
    'Kannada books',
    'Urdu books'
  ],
  authors: [{ name: 'PAPERBEE BOOKS', url: 'https://paperbee-books.vercel.app' }],
  creator: 'PAPERBEE BOOKS',
  publisher: 'PAPERBEE BOOKS',
  category: 'Education',
  classification: 'Children\'s Literature',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['hi_IN'],
    url: 'https://paperbee-books.vercel.app',
    siteName: 'PAPERBEE BOOKS',
    title: 'PAPERBEE BOOKS - Magical Children\'s Books in Multiple Languages',
    description: 'Discover magical stories and educational materials for children worldwide. Quality literature in 9+ languages.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PAPERBEE BOOKS - Children\'s Literature',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@paperbeebooks',
    creator: '@paperbeebooks',
    title: 'PAPERBEE BOOKS - Magical Children\'s Books',
    description: 'Quality children\'s literature in multiple languages',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
    // Add other verification IDs as needed
  },
  alternates: {
    canonical: 'https://paperbee-books.vercel.app',
    languages: {
      'en': 'https://paperbee-books.vercel.app/en',
      'hi': 'https://paperbee-books.vercel.app/hi',
      'x-default': 'https://paperbee-books.vercel.app/en',
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteStructuredData = generateWebsiteStructuredData();
  const publisherStructuredData = generatePublisherStructuredData(DEFAULT_PUBLISHER_DATA);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#F59E0B" />
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(publisherStructuredData) }}
        />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure',
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body 
        className={`${inter.className} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <AccessibilitySkipLink />
        <div id="root" className="min-h-screen">
          {children}
        </div>
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('web-vitals' in window) {
                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                  getCLS(console.log);
                  getFID(console.log);
                  getFCP(console.log);
                  getLCP(console.log);
                  getTTFB(console.log);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}