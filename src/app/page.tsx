// app/page.tsx
import HeroSection from '@/components/HeroSection'
import FeaturedBooks from '@/components/FeaturedBooks'
import LanguageSection from '@/components/LanguageSection'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <LanguageSection />
      <FeaturedBooks />
      <StatsSection />
    </>
  )
}