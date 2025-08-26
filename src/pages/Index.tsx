
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
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarInset } from '@/components/ui/sidebar';

const Index = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset className="flex-1">
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
      </SidebarInset>
    </div>
  );
};

export default Index;
