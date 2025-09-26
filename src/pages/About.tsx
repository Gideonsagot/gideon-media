import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useSEO({
    title: 'About Gideon Media | Our Mission & Team',
    description: 'Learn about the mission and expert team behind Gideon Media. We are dedicated to delivering transparent and effective digital marketing results.',
    canonical: 'https://gideonmedia.netlify.app/about',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "name": "About Gideon Media",
          "description": "Learn about the mission and expert team behind Gideon Media. We are dedicated to delivering transparent and effective digital marketing results.",
          "url": "https://gideonmedia.netlify.app/about"
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
              "name": "About Us"
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
              <div className="text-xl font-bold text-primary">About Gideon Media</div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">{t('about.title')}</h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in delay-300">{t('about.subtitle')}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-500">{t('about.description')}</p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-xl p-8 border shadow-sm hover-scale transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform hover:scale-110">
                <div className="w-6 h-6 bg-primary rounded animate-pulse"></div>
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{t('about.mission.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('about.mission.description')}</p>
            </div>
            <div className="bg-card rounded-xl p-8 border shadow-sm hover-scale transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform hover:scale-110">
                <div className="w-6 h-6 bg-primary rounded animate-pulse"></div>
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{t('about.vision.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('about.vision.description')}</p>
            </div>
          </div>

          {/* Company Story */}
          <div className="bg-card rounded-xl p-8 border shadow-sm mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-6">{t('about.story.title')}</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">{t('about.story.description')}</p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('about.expertise.title')}</h3>
                  <p>{t('about.expertise.description')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('about.approach.title')}</h3>
                  <p>{t('about.approach.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Values */}
          <div className="bg-card rounded-xl p-8 border shadow-sm mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">{t('about.values.title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.values.innovation.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('about.values.innovation.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.values.quality.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('about.values.quality.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.values.partnership.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('about.values.partnership.description')}</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">{t('about.whyChoose.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{t('about.whyChoose.point1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{t('about.whyChoose.point2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{t('about.whyChoose.point3')}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{t('about.whyChoose.point4')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{t('about.whyChoose.point5')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{t('about.whyChoose.point6')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;