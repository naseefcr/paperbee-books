import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Languages from '@/components/sections/Languages';
import BookCategories from '@/components/sections/BookCategories';
import GlobalReach from '@/components/sections/GlobalReach';
import About from '@/components/sections/About';
import Books from '@/components/sections/Books';
import Contact from '@/components/sections/Contact';
import JoinUs from '@/components/sections/JoinUs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/seo/SEOHead';
import { SEOConfigs } from '@/components/seo/SEOHead';
import { generateBreadcrumbStructuredData, generateFAQStructuredData } from '@/lib/structuredData';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paperbee-books.vercel.app';
  
  return {
    title: 'Home',
    description: locale === 'hi' 
      ? 'बच्चों के लिए जादुई किताबें कई भाषाओं में। PAPERBEE BOOKS शैक्षिक कहानियां, द्विभाषी पुस्तकें और सांस्कृतिक कहानियां प्रदान करता है।'
      : 'Discover magical children\'s books in multiple languages. PAPERBEE BOOKS offers educational stories, bilingual books, and cultural tales that inspire young minds worldwide.',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'hi': `${baseUrl}/hi`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: locale === 'hi' 
        ? 'PAPERBEE BOOKS - बहुभाषी बच्चों की किताबें'
        : 'PAPERBEE BOOKS - Magical Children\'s Books in Multiple Languages',
      description: locale === 'hi'
        ? 'दुनिया भर के बच्चों के लिए जादुई कहानियां और शैक्षिक सामग्री खोजें।'
        : 'Discover magical stories and educational materials for children worldwide.',
      url: `${baseUrl}/${locale}`,
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
    },
  };
}

// FAQ data for structured data
const faqs = [
  {
    question: "What languages are your books available in?",
    answer: "Our books are available in 9+ languages including English, Hindi, Arabic, Japanese, Indonesian, Malayalam, Kannada, Tamil, and Urdu."
  },
  {
    question: "How can I order books from PAPERBEE BOOKS?",
    answer: "You can easily order our books via WhatsApp by clicking any 'Order Now' button on our website. We'll help you choose the perfect books for your child."
  },
  {
    question: "Are your books suitable for different age groups?",
    answer: "Yes! We offer books for various age groups from 2-4 years to 12+ years, with content specifically designed for each developmental stage."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship our books to 28+ countries worldwide. Contact us via WhatsApp for shipping details to your location."
  }
];

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paperbee-books.vercel.app';
  
  // Generate structured data
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Home', url: `${baseUrl}/${locale}` }
  ]);
  
  const faqData = generateFAQStructuredData(faqs);
  
  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbData,
      faqData
    ]
  };

  return (
    <>
      <SEOHead
        {...SEOConfigs.home}
        canonicalUrl={`${baseUrl}/${locale}`}
        structuredData={combinedStructuredData}
        alternateLanguages={[
          { locale: 'en', url: `${baseUrl}/en` },
          { locale: 'hi', url: `${baseUrl}/hi` }
        ]}
      />
      
      <main id="main-content" className="min-h-screen" role="main">
        <Header />
        <Hero />
        <Mission />
        <Languages />
        <BookCategories />
        <GlobalReach />
        <About />
        <Books />
        <JoinUs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}