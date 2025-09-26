import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import ServicesSection from '@/components/ServicesSection';
import AllServicesSection from '@/components/AllServicesSection';
import ShopifyServicesSection from '@/components/ShopifyServicesSection';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useSEO({
    title: 'Our Digital Marketing Services | SEO, Content & Social',
    description: 'Explore our full range of digital marketing services, including search engine optimization (SEO), content strategy, and social media management.',
    canonical: 'https://gideonmedia.netlify.app/services',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "name": "Our Digital Marketing Services",
          "description": "Explore our full range of digital marketing services, including search engine optimization (SEO), content strategy, and social media management.",
          "url": "https://gideonmedia.netlify.app/services"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://gideonmedia.netlify.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Our Services"
            }
          ]
        }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('common.back')}
              </Button>
              <h1 className="text-xl font-bold text-primary">Our Digital Marketing Services</h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8">
        <ServicesSection />
        <AllServicesSection />
        <ShopifyServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;