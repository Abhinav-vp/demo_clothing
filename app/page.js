import Hero from '@/components/Hero';
import FeaturedEditorial from '@/components/FeaturedEditorial';
import CategoryShowcase from '@/components/CategoryShowcase';
import CampaignSection from '@/components/CampaignSection';
import Catalog from '@/components/Catalog';
import Features from '@/components/Features';
import StoreVisit from '@/components/StoreVisit';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEditorial />
      <CategoryShowcase />
      <CampaignSection />
      <Catalog />
      <Features />
      <StoreVisit />
      <Reviews />
      <Faq />
    </>
  );
}
