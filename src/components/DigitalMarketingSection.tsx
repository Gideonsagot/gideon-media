
import { 
  Facebook, Target, TrendingUp, MessageCircle, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const marketingKeys = ['metaAds', 'social', 'pinterest', 'adStrategy'];
const marketingIcons = [Facebook, TrendingUp, MessageCircle, Target];

const DigitalMarketingSection = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, getItemStyle } = useStaggerAnimation(marketingKeys.length);

  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20discuss%20digital%20marketing%20services%20with%20Gideon%20Media', '_blank');
  };

  return (
    <section id="marketing" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            {t('marketing.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('marketing.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('marketing.subtitle')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {marketingKeys.map((key, index) => {
            const Icon = marketingIcons[index];
            const features = t(`marketing.items.${key}.features`, { returnObjects: true }) as string[];
            return (
              <Card 
                key={key}
                style={getItemStyle(index)}
                className="border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-card"
              >
                <CardHeader className="pb-3">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {t(`marketing.items.${key}.title`)}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`marketing.items.${key}.description`)}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {Array.isArray(features) && features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t('marketing.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
