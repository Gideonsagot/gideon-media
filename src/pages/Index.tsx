
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandVideo from '@/components/BrandVideo';
import ServicesSection from '@/components/ServicesSection';
import AllServicesSection from '@/components/AllServicesSection';
import ShopifyServicesSection from '@/components/ShopifyServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import UpworkBanner from '@/components/UpworkBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ReviewWidget } from '@/components/ReviewWidget';
import { PurchaseNotification } from '@/components/PurchaseNotification';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  useSEO({
    title: 'Gideon Media: Expert Digital Marketing & Content Creation',
    description: 'Gideon Media offers professional digital marketing services, including SEO, content creation, and social media management to help your business grow.',
    canonical: 'https://gideonmedia.com/',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage", 
      "name": "Drive Growth with Expert Digital Marketing",
      "description": "Gideon Media offers professional digital marketing services, including SEO, content creation, and social media management to help your business grow.",
      "url": "https://gideonmedia.com/",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Gideon Media",
        "url": "https://gideonmedia.com"
      }
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BrandVideo />
        <ServicesSection />
        <AllServicesSection />
        <ShopifyServicesSection />
        <PortfolioSection />
        <AboutSection />
        <UpworkBanner />
        <TestimonialsSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
      <ReviewWidget />
      <PurchaseNotification />
    </div>
  );
};

export default Index;
