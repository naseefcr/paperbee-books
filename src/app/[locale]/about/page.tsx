import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import WhatMakesUsSpecial from '@/components/about/WhatMakesUsSpecial';
import PublishingSpecialties from '@/components/about/PublishingSpecialties';
import TeamSection from '@/components/about/TeamSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <WhatMakesUsSpecial />
      <PublishingSpecialties />
      <TeamSection />
      <Footer />
    </main>
  );
}