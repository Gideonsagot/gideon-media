
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

const ServicesSection = () => {
  const services = [
    {
      icon: Facebook,
      title: 'Meta Ads Setup',
      description: 'Professional Facebook and Instagram advertising campaigns, including WhatsApp Ads integration for maximum reach and engagement.',
      features: ['Campaign Strategy', 'Ad Creative Design', 'WhatsApp Integration', 'Performance Tracking'],
      color: 'text-blue-600'
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Development',
      description: 'Custom Shopify stores that convert visitors into customers with optimized user experience and seamless checkout processes.',
      features: ['Custom Design', 'Payment Integration', 'SEO Optimization', 'Mobile Responsive'],
      color: 'text-green-600'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites for small businesses that establish credibility and drive growth in the digital marketplace.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Ready', 'Content Management'],
      color: 'text-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Pinterest Setup',
      description: 'Strategic Pinterest presence setup to drive traffic and increase brand visibility through engaging visual content.',
      features: ['Profile Optimization', 'Board Strategy', 'Pin Design', 'Analytics Setup'],
      color: 'text-red-600'
    },
    {
      icon: Target,
      title: 'Ads Strategy & Launch',
      description: 'Comprehensive advertising strategy development and campaign management across multiple digital platforms.',
      features: ['Market Research', 'Audience Targeting', 'Campaign Management', 'ROI Optimization'],
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From digital marketing to web development, we provide comprehensive solutions 
            to help your business establish a strong online presence and drive growth.
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
                  Learn More
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
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
