import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PublishHero from '@/components/publish/PublishHero';
import BookCategories from '@/components/publish/BookCategories';
import BookShowcase from '@/components/publish/BookShowcase';
import PublishingStats from '@/components/publish/PublishingStats';

export default function WhatWePublishPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PublishHero />
      <BookCategories />
      <BookShowcase />
      <PublishingStats />
      <Footer />
    </main>
  );
}