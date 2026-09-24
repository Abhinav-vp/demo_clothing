import Hero from '@/components/Hero';
import CollectionIntro from '@/components/CollectionIntro';
import FeaturedProductStory from '@/components/FeaturedProductStory';
import ProductStoryDetails from '@/components/ProductStoryDetails';
import ProductCollectionShowcase from '@/components/ProductCollectionShowcase';
import CategoryTransition from '@/components/CategoryTransition';
import Catalog from '@/components/Catalog';
import CampaignSection from '@/components/CampaignSection';
import FinalShopCta from '@/components/FinalShopCta';
import ScrollProgress from '@/components/ScrollProgress';
import StoreVisit from '@/components/StoreVisit';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';

export default function HomePage() {
  return (
    <>
      {/* Floating VAEL-inspired Scroll & Section Tracker */}
      <ScrollProgress />

      {/* SECTION 01 — Full-screen Fashion Hero */}
      <Hero />

      {/* SECTION 02 — Collection Intro (New Collection 2026) */}
      <CollectionIntro />

      {/* SECTION 03 — Featured Product (Single Immersive Breakdown) */}
      <FeaturedProductStory />

      {/* SECTION 04 — Product Story (The Details // Weave Architecture) */}
      <ProductStoryDetails />

      {/* SECTION 05 — Product Collection (Hierarchical Staggered Layout) */}
      <ProductCollectionShowcase />

      {/* SECTION 06 — Category Transition (Large Typography & Scrim) */}
      <CategoryTransition />

      {/* SECTION 07 — Complete Product Catalog / Lookbook Grid */}
      <Catalog />

      {/* SECTION 08 — Brand Fashion Campaign (Full-width Visual & Statement) */}
      <CampaignSection />

      {/* SECTION 09 — Final Shop CTA (Find Your Next Look) */}
      <FinalShopCta />

      {/* Atelier Experience & Information */}
      <StoreVisit />
      <Reviews />
      <Faq />
    </>
  );
}
