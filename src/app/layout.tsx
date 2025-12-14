import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mypaperbee.com'),
  title: {
    default: 'Paperbee Books | Where Billion Minds Become Brilliant Minds',
    template: '%s | Paperbee Books'
  },
  description: "Paperbee Books publishes vibrant, multilingual children's literature and educational materials. Discover stories that inspire imagination and learning in English, Arabic, Japanese, and more.",
  keywords: ['Children\'s Books', 'Multilingual Books', 'Educational Books', 'Storybooks', 'Kids Literature', 'Paperbee Books', 'Learning', 'Imagination'],
  authors: [{ name: 'Paperbee Books' }],
  creator: 'Paperbee Books',
  publisher: 'Paperbee Books',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/logo_only.png',
    apple: '/images/logo_only.png',
  },
  openGraph: {
    title: 'Paperbee Books | Where Billion Minds Become Brilliant Minds',
    description: "Paperbee Books publishes vibrant children's literature and educational materials in multiple languages.",
    url: 'https://mypaperbee.com',
    siteName: 'Paperbee Books',
    images: [
      {
        url: '/images/logo_black.jpeg', // Using the black logo on white background for social cards as it pops better
        width: 800,
        height: 800,
        alt: 'Paperbee Books Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paperbee Books',
    description: "Paperbee Books publishes vibrant children's literature and educational materials in multiple languages.",
    images: ['/images/logo_black.jpeg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Paperbee Books',
    url: 'https://mypaperbee.com',
    logo: 'https://mypaperbee.com/images/logo_black.jpeg',
    sameAs: [
      'https://www.instagram.com/paperbeebooks',
      // Add other social profiles here if available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-0000000000', // Update with actual if available or remove
      contactType: 'customer service',
      email: 'paperbeebook@gmail.com'
    },
    description: "Paperbee Books is a global children’s publishing company committed to nurturing young readers through meaningful stories and purposeful learning materials in multiple languages."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}