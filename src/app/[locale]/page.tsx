import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Languages from '@/components/sections/Languages';
import BookCategories from '@/components/sections/BookCategories';
import GlobalReach from '@/components/sections/GlobalReach';
import About from '@/components/sections/About';
import Books from '@/components/sections/Books';
import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Languages />
      <BookCategories />
      <GlobalReach />
      <About />
      <Books />
      <Contact />
      <Footer />
    </main>
  );
}