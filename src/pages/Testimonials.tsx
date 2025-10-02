import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import TestimonialsSection from '@/components/TestimonialsSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Testimonials = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useSEO({
    title: 'Client Testimonials | Success Stories & Reviews',
    description: 'Read what our clients say about our digital marketing services. Real testimonials and success stories from businesses we have helped grow.',
    canonical: 'https://gideonmedia.netlify.app/testimonials',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Client Testimonials",
      "description": "Read what our clients say about our digital marketing services. Real testimonials and success stories from businesses we have helped grow.",
      "url": "https://gideonmedia.netlify.app/testimonials"
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
              <h1 className="text-xl font-bold text-primary">Client Testimonials</h1>
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
        <TestimonialsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;