import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Catalog from '@/components/Catalog';
import StoreVisit from '@/components/StoreVisit';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Catalog />
      <StoreVisit />
      <Reviews />
      <Faq />
    </>
  );
}
