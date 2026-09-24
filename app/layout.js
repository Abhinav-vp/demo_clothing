import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import SearchOverlay from '@/components/SearchOverlay';
import ProductModal from '@/components/ProductModal';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "PADMA // Modern Men's Wear & Kerala Handloom Atelier",
  description: "An experimental, premium menswear fashion atelier in Kariyad, Kerala. Discover authentic Kerala Kasavu double mundus, festive mulberry silks, bespoke wedding sherwanis, and European linens.",
  keywords: ["Padma Kariyad", "Padma Menswear", "Kerala Kasavu Mundu", "Streetwear Kerala", "Luxury menswear Kannur", "Wedding Kurta Peringathur"],
  openGraph: {
    title: "PADMA // Modern Men's Wear & Kerala Handloom Atelier",
    description: "An experimental, premium menswear fashion atelier in Kariyad, Kerala. Authentic Kasavu, Mulberry Silks, European Linens.",
    images: [{ url: '/assets/images/hero.jpg' }],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StoreProvider>
          <TopBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <CartDrawer />
          <WishlistDrawer />
          <SearchOverlay />
          <ProductModal />
        </StoreProvider>
      </body>
    </html>
  );
}
