import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useSEO({
    title: 'Contact Gideon Media | Get in Touch Today',
    description: 'Contact Gideon Media for a free consultation on your digital marketing needs. Reach out via our contact form, email, or phone.',
    canonical: 'https://gideonmedia.netlify.app/contact',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us",
      "description": "Contact Gideon Media for a free consultation on your digital marketing needs.",
      "url": "https://gideonmedia.netlify.app/contact"
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
              <h1 className="text-xl font-bold text-primary">Contact Us</h1>
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;