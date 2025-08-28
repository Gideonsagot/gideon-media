import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
              <h1 className="text-xl font-bold text-primary">Gideon Media - {t('header.about')}</h1>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">{t('about.title')}</h1>
            <p className="text-xl text-muted-foreground">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('about.mission.title')}</h2>
              <p className="text-muted-foreground">{t('about.mission.description')}</p>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('about.vision.title')}</h2>
              <p className="text-muted-foreground">{t('about.vision.description')}</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">{t('about.story.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.story.paragraph1')}</p>
              <p>{t('about.story.paragraph2')}</p>
              <p>{t('about.story.paragraph3')}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;