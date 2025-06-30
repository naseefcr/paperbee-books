import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VisionHero from '@/components/vision/VisionHero';
import VisionStatement from '@/components/vision/VisionStatement';
import MissionPoints from '@/components/vision/MissionPoints';
import CulturalCelebration from '@/components/vision/CulturalCelebration';
import GlobalImpact from '@/components/vision/GlobalImpact';

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VisionHero />
      <VisionStatement />
      <MissionPoints />
      <CulturalCelebration />
      <GlobalImpact />
      <Footer />
    </main>
  );
}