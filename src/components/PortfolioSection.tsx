
import { Globe, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "E-commerce Fashion Store",
    description: "Complete Shopify store with conversion-optimized design and Meta Ads driving 300% ROI.",
    category: "Shopify + Meta Ads",
    results: "300% ROI",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "Local Restaurant Chain",
    description: "Lead-generating website with local SEO and targeted ads driving 150% more orders.",
    category: "Website + Ads",
    results: "150% more orders",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "SaaS Startup",
    description: "Landing pages and lead generation strategy producing 500+ qualified leads monthly.",
    category: "Website + Marketing",
    results: "500+ qualified leads",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "Fitness Studio Network",
    description: "Multi-location website with booking system and Meta Ads bringing 400+ new members.",
    category: "Website + Ads",
    results: "400+ new members",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "Artisan Jewelry Brand",
    description: "Shopify Plus store with Pinterest marketing strategy driving 500% traffic increase.",
    category: "Shopify + Pinterest",
    results: "500% traffic growth",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "Real Estate Agency",
    description: "Premium website with lead capture and WhatsApp automation generating 250% more inquiries.",
    category: "Website + Automation",
    results: "250% more inquiries",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=400",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real businesses. Real results. See how we've helped companies like yours grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-foreground text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/30 rounded-lg p-3">
                  <div className="text-xs font-semibold text-green-800 dark:text-green-300">Results:</div>
                  <div className="text-base font-bold text-green-600 dark:text-green-400">{project.results}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
