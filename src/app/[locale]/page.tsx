import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
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
      <About />
      <Books />
      <Contact />
      <Footer />
    </main>
  );
}