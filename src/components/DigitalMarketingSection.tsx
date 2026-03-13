
import { 
  Facebook, 
  Target, 
  TrendingUp, 
  MessageCircle,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const marketingServices = [
  {
    icon: Facebook,
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Targeted advertising campaigns that put your business in front of the right people at the right time — driving leads and sales on autopilot.',
    features: ['Campaign Strategy & Setup', 'Audience Research & Targeting', 'Ad Creative Design', 'Performance Optimization & Reporting'],
  },
  {
    icon: TrendingUp,
    title: 'Social Media Marketing',
    description: 'Build a loyal audience and consistent brand presence across social platforms that keeps your business top-of-mind.',
    features: ['Content Strategy & Calendar', 'Engagement & Community Management', 'Brand Consistency', 'Growth Analytics'],
  },
  {
    icon: MessageCircle,
    title: 'Pinterest Marketing',
    description: 'Tap into Pinterest\'s high-intent audience to drive massive organic traffic to your website and products.',
    features: ['Profile & Board Optimization', 'Pin Design & Strategy', 'Pinterest SEO', 'Traffic & Conversion Tracking'],
  },
  {
    icon: Target,
    title: 'Ad Strategy & Campaign Launch',
    description: 'Not sure where to start? We create a custom advertising strategy tailored to your goals, budget, and target audience.',
    features: ['Market & Competitor Analysis', 'Budget Planning & Allocation', 'Multi-Platform Strategy', 'Launch & Optimization'],
  },
];

const DigitalMarketingSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20discuss%20digital%20marketing%20services%20with%20Gideon%20Media', '_blank');
  };

  return (
    <section id="marketing" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Drive More Traffic & Sales
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Digital Marketing That Delivers Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A great website needs great marketing. We drive targeted traffic to your site and turn that traffic into revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {marketingServices.map((service) => (
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
            Get a Marketing Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
