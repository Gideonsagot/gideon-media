
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Zap, 
  Palette, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: ShoppingCart,
    title: 'Shopify E-commerce Websites',
    description: 'Custom Shopify stores built to sell. From product pages to checkout — every element designed to maximize conversions and revenue.',
    features: ['Custom Store Design', 'Payment & Shipping Setup', 'Product Catalog Optimization', 'Mobile-Optimized Checkout'],
  },
  {
    icon: Globe,
    title: 'Small Business Websites',
    description: 'Professional websites that establish credibility, capture leads, and turn your online presence into your best salesperson.',
    features: ['Lead Capture Forms', 'Professional Design', 'Content Management', 'Analytics Integration'],
  },
  {
    icon: Palette,
    title: 'Conversion-Focused Design',
    description: 'Every page, button, and layout is strategically designed to guide visitors toward taking action — whether that\'s buying, booking, or calling.',
    features: ['Strategic Page Layouts', 'Clear Call-to-Actions', 'Trust-Building Elements', 'A/B Tested Templates'],
  },
  {
    icon: Smartphone,
    title: 'Fast, Mobile-Friendly Websites',
    description: 'Over 60% of traffic comes from mobile. Your website will look and perform flawlessly on every device, every time.',
    features: ['Responsive Design', 'Sub-3s Load Times', 'Touch-Optimized Navigation', 'Mobile-First Approach'],
  },
  {
    icon: Search,
    title: 'SEO-Ready Structure',
    description: 'Built from the ground up with search engines in mind. Your site will be structured to rank higher and attract organic traffic.',
    features: ['Technical SEO Setup', 'Schema Markup', 'Optimized Meta Tags', 'Site Speed Optimization'],
  },
  {
    icon: Zap,
    title: 'Website Migration & Optimization',
    description: 'Moving from another platform? We migrate your site seamlessly and optimize it for better performance and conversions.',
    features: ['Platform Migration', 'SEO Preservation', 'Speed Enhancement', 'Conversion Optimization'],
  },
];

const ServicesSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20project%20with%20Gideon%20Media', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Primary Service
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Websites That Work as Hard as You Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just build websites — we build growth engines. Every site we create is designed to attract visitors, build trust, and convert them into paying customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-card"
            >
              <CardHeader className="pb-3">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Discuss Your Website Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
