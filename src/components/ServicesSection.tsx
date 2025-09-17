
import { 
  Facebook, 
  ShoppingCart, 
  Globe, 
  MessageCircle, 
  Target, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Facebook,
      title: t('services.metaAds.title'),
      description: t('services.metaAds.description'),
      features: t('services.metaAds.features', { returnObjects: true }) as string[],
      color: 'text-blue-600'
    },
    {
      icon: ShoppingCart,
      title: t('services.shopify.title'),
      description: t('services.shopify.description'),
      features: t('services.shopify.features', { returnObjects: true }) as string[],
      color: 'text-green-600'
    },
    {
      icon: Globe,
      title: t('services.website.title'),
      description: t('services.website.description'),
      features: t('services.website.features', { returnObjects: true }) as string[],
      color: 'text-purple-600'
    },
    {
      icon: MessageCircle,
      title: t('services.pinterest.title'),
      description: t('services.pinterest.description'),
      features: t('services.pinterest.features', { returnObjects: true }) as string[],
      color: 'text-red-600'
    },
    {
      icon: Target,
      title: t('services.adsStrategy.title'),
      description: t('services.adsStrategy.description'),
      features: t('services.adsStrategy.features', { returnObjects: true }) as string[],
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="gradient-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 ${service.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gideonmedia@hotmail.com&su=Quote Request for ' + service.title, '_blank')}
                >
                  {t('services.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t('services.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
