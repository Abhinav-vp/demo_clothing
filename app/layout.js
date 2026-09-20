import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Padma Men's Wear & Textiles | Kariyad, Kerala",
  description: "Padma Men's Wear & Textiles in Kariyad (Near KNUP School, Peringathur, Kerala). Explore exclusive men's Kerala Kasavu Mundu & Jubba sets, festive kurtas, pure linen shirts, wedding sherwanis, and formal attire. In-store shopping & WhatsApp inquiries.",
  keywords: ["Padma Kariyad", "Padma clothing", "Padma textiles Kariyad", "mens wear Kariyad", "Kerala kasavu mundu Kariyad", "wedding kurta Peringathur", "mens clothing shop Kariyad Kannur"],
  openGraph: {
    title: "Padma Men's Wear & Textiles | Kariyad, Kerala",
    description: "Exclusive Men's Collection in Kariyad - Traditional Kasavu Mundu sets, Festive Kurtas, Pure Linen Shirts, and Groom Attire.",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
