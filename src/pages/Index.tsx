
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AllServicesSection from '@/components/AllServicesSection';
import ShopifyServicesSection from '@/components/ShopifyServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ReviewWidget } from '@/components/ReviewWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AllServicesSection />
        <ShopifyServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
      <ReviewWidget />
    </div>
  );
};

export default Index;
