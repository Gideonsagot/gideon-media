
import { 
  Facebook, 
  ShoppingCart, 
  Globe, 
  MessageCircle, 
  Target, 
  Code, 
  Palette, 
  Search,
  TrendingUp,
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AllServicesSection = () => {
  const services = [
    {
      category: "Digital Advertising",
      icon: Target,
      color: "text-blue-600",
      services: [
        {
          icon: Facebook,
          title: 'Meta Ads Management',
          description: 'Professional Facebook and Instagram advertising campaigns with advanced targeting and optimization.',
          features: ['Campaign Strategy', 'Ad Creative Design', 'Audience Research', 'A/B Testing', 'Performance Optimization', 'Detailed Reporting']
        },
        {
          icon: MessageCircle,
          title: 'WhatsApp Ads Integration',
          description: 'Connect with customers directly through WhatsApp advertising campaigns.',
          features: ['WhatsApp Business Setup', 'Click-to-Chat Ads', 'Automated Responses', 'Lead Generation']
        },
        {
          icon: TrendingUp,
          title: 'Google Ads Management',
          description: 'Strategic Google Ads campaigns to drive qualified traffic and conversions.',
          features: ['Search Campaigns', 'Display Advertising', 'Shopping Ads', 'YouTube Advertising']
        }
      ]
    },
    {
      category: "E-commerce Development",
      icon: ShoppingCart,
      color: "text-green-600",
      services: [
        {
          icon: ShoppingCart,
          title: 'Custom Shopify Store Development',
          description: 'Build high-converting Shopify stores tailored to your brand and business needs.',
          features: ['Custom Theme Design', 'Mobile Optimization', 'Payment Gateway Integration', 'Inventory Management', 'SEO Setup', 'Speed Optimization']
        },
        {
          icon: Code,
          title: 'Shopify App Development',
          description: 'Custom Shopify apps to extend your store functionality and improve operations.',
          features: ['Custom Functionality', 'Third-party Integrations', 'Automation Tools', 'Analytics Enhancement']
        },
        {
          icon: Palette,
          title: 'Shopify Theme Customization',
          description: 'Modify and enhance existing Shopify themes to match your brand perfectly.',
          features: ['Design Customization', 'Feature Addition', 'Mobile Responsiveness', 'Performance Optimization']
        }
      ]
    },
    {
      category: "Web Development",
      icon: Globe,
      color: "text-purple-600",
      services: [
        {
          icon: Globe,
          title: 'Business Website Development',
          description: 'Professional websites that establish credibility and drive business growth.',
          features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Content Management', 'Contact Forms', 'Analytics Integration']
        },
        {
          icon: Smartphone,
          title: 'Mobile-First Development',
          description: 'Websites designed and optimized for mobile devices and tablets.',
          features: ['Mobile Optimization', 'Touch-Friendly Design', 'App-like Experience', 'Progressive Web Apps']
        },
        {
          icon: Search,
          title: 'SEO & Performance Optimization',
          description: 'Improve your website visibility and performance in search engines.',
          features: ['On-Page SEO', 'Technical SEO', 'Speed Optimization', 'Schema Markup', 'Local SEO']
        }
      ]
    },
    {
      category: "Social Media Marketing",
      icon: MessageCircle,
      color: "text-red-600",
      services: [
        {
          icon: MessageCircle,
          title: 'Pinterest Marketing Setup',
          description: 'Strategic Pinterest presence to drive traffic and increase brand visibility.',
          features: ['Profile Optimization', 'Board Strategy', 'Pin Design', 'Pinterest SEO', 'Analytics Setup', 'Content Planning']
        },
        {
          icon: TrendingUp,
          title: 'Social Media Strategy',
          description: 'Comprehensive social media marketing across multiple platforms.',
          features: ['Content Strategy', 'Brand Consistency', 'Engagement Tactics', 'Influencer Outreach', 'Community Management']
        }
      ]
    }
  ];

  return (
    <section id="all-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Service Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing and development solutions to grow your business online.
          </p>
        </div>

        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 ${category.color} mr-4`}>
                <category.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card 
                  key={serviceIndex}
                  className="gradient-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 ${category.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
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
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <Button 
            size="lg"
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gideonmedia@hotmail.com&su=Project Inquiry', '_blank')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
