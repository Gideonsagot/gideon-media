
import { 
  ShoppingCart, 
  Code, 
  Palette, 
  Zap, 
  Settings, 
  TrendingUp,
  CreditCard,
  Package,
  Search,
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ShopifyServicesSection = () => {
  const shopifyServices = [
    {
      icon: ShoppingCart,
      title: 'Shopify Store Setup',
      description: 'Complete Shopify store setup from scratch with professional design and essential features.',
      features: ['Store Configuration', 'Product Catalog Setup', 'Payment Gateway Integration', 'Shipping Configuration', 'Tax Settings', 'Domain Setup'],
      price: 'Starting at $500',
      color: 'text-green-600'
    },
    {
      icon: Palette,
      title: 'Custom Theme Development',
      description: 'Unique, brand-focused Shopify themes designed to convert visitors into customers.',
      features: ['Custom Design', 'Brand Integration', 'Mobile Responsive', 'SEO Optimized', 'Performance Focused', 'User Experience'],
      price: 'Starting at $800',
      color: 'text-purple-600'
    },
    {
      icon: Code,
      title: 'Shopify App Development',
      description: 'Custom Shopify apps to extend functionality and automate business processes.',
      features: ['Custom Functionality', 'API Integrations', 'Automated Workflows', 'Data Analytics', 'Third-party Connections', 'Scalable Architecture'],
      price: 'Starting at $1,200',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Store Migration',
      description: 'Seamless migration from other platforms to Shopify with data preservation.',
      features: ['Data Migration', 'SEO Preservation', 'URL Redirects', 'Design Transfer', 'Testing & Validation', 'Minimal Downtime'],
      price: 'Starting at $600',
      color: 'text-orange-600'
    },
    {
      icon: Settings,
      title: 'Store Optimization',
      description: 'Improve existing Shopify store performance, speed, and conversion rates.',
      features: ['Speed Optimization', 'Conversion Rate Optimization', 'SEO Enhancement', 'Mobile Optimization', 'User Experience Audit', 'Performance Monitoring'],
      price: 'Starting at $400',
      color: 'text-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Shopify Marketing Setup',
      description: 'Complete marketing automation and advertising setup for your Shopify store.',
      features: ['Email Marketing', 'Abandoned Cart Recovery', 'Product Recommendations', 'Social Media Integration', 'Analytics Setup', 'Marketing Automation'],
      price: 'Starting at $350',
      color: 'text-pink-600'
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing setup with multiple payment options.',
      features: ['Multiple Payment Methods', 'Secure Transactions', 'Payment Testing', 'Fraud Protection', 'International Payments', 'Subscription Billing'],
      price: 'Starting at $200',
      color: 'text-yellow-600'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Advanced inventory management system setup for efficient stock control.',
      features: ['Inventory Tracking', 'Stock Alerts', 'Multi-location Management', 'Automated Reordering', 'Reporting & Analytics', 'Supplier Integration'],
      price: 'Starting at $300',
      color: 'text-indigo-600'
    },
    {
      icon: Search,
      title: 'Shopify SEO',
      description: 'Comprehensive SEO optimization for better search engine visibility.',
      features: ['On-page SEO', 'Technical SEO', 'Product SEO', 'Schema Markup', 'Site Speed', 'Local SEO'],
      price: 'Starting at $250',
      color: 'text-teal-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native mobile app development for iOS and Android connected to your Shopify store.',
      features: ['Native iOS App', 'Native Android App', 'Push Notifications', 'Offline Capability', 'App Store Optimization', 'Analytics Integration'],
      price: 'Starting at $2,000',
      color: 'text-gray-600'
    }
  ];

  return (
    <section id="shopify-services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Shopify Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From store setup to advanced customization, we offer comprehensive Shopify solutions 
            to help your e-commerce business thrive and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {shopifyServices.map((service, index) => (
            <Card 
              key={index}
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
                <div className="text-lg font-semibold text-primary mt-2">
                  {service.price}
                </div>
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
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Shopify Solution?</h3>
          <p className="text-lg mb-6 opacity-90">
            Have a unique requirement? We create custom Shopify solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gideonmedia@hotmail.com&su=Custom Shopify Solution Request', '_blank')}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Custom Quote
            </Button>
            <a
              href="https://wa.me/2347067133828?text=Hi, I need a custom Shopify solution"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyServicesSection;
