
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ServicesSection from '@/components/ServicesSection';
import DigitalMarketingSection from '@/components/DigitalMarketingSection';
import ProcessSection from '@/components/ProcessSection';
import SocialProofSection from '@/components/SocialProofSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PortfolioSection from '@/components/PortfolioSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ReviewWidget } from '@/components/ReviewWidget';
import { PurchaseNotification } from '@/components/PurchaseNotification';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  useSEO({
    title: 'Gideon Media | Websites & Digital Marketing That Drive Growth',
    description: 'Gideon Media builds high-converting websites and runs results-driven digital marketing for small businesses, startups, and e-commerce brands. Book your free strategy call today.',
    canonical: 'https://gideonmedia.netlify.app/',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Gideon Media | Websites & Digital Marketing That Drive Growth",
      "description": "We build websites that turn visitors into customers and run digital marketing that drives real business growth.",
      "url": "https://gideonmedia.netlify.app/",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Gideon Media",
        "url": "https://gideonmedia.netlify.app"
      }
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <DigitalMarketingSection />
        <ProcessSection />
        <SocialProofSection />
        <TestimonialsSection />
        <PortfolioSection />
        <GuaranteeSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ReviewWidget />
      <PurchaseNotification />
    </div>
  );
};

export default Index;
