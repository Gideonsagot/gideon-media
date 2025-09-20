
import { Globe, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Fashion Store",
      description: "Complete Shopify store setup with Meta Ads campaign resulting in 300% ROI",
      category: "Shopify + Meta Ads",
      results: "300% ROI",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=400",
      technologies: ["Shopify", "Meta Ads", "Pinterest"]
    },
    {
      title: "Local Restaurant Chain",
      description: "Multi-location restaurant marketing with targeted local ads and website optimization",
      category: "Local Business",
      results: "150% increase in orders",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=400",
      technologies: ["Website Design", "Meta Ads", "Local SEO"]
    },
    {
      title: "SaaS Startup Growth",
      description: "Complete digital marketing strategy for B2B SaaS platform including lead generation",
      category: "B2B SaaS",
      results: "500+ qualified leads",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
      technologies: ["Meta Ads", "LinkedIn Ads", "Landing Pages"]
    },
    {
      title: "Luxury Real Estate Agency",
      description: "Premium website design with integrated lead capture and WhatsApp automation",
      category: "Real Estate",
      results: "250% more inquiries",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=400",
      technologies: ["WordPress", "WhatsApp API", "SEO", "Google Ads"]
    },
    {
      title: "Fitness Studio Network",
      description: "Multi-location fitness business with membership management and local advertising",
      category: "Health & Fitness",
      results: "400+ new members",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=400",
      technologies: ["Custom Website", "Booking System", "Meta Ads", "Google My Business"]
    },
    {
      title: "Tech Consulting Firm",
      description: "Professional corporate website with client portal and automated lead nurturing",
      category: "B2B Services",
      results: "180% increase in consultations",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "CRM Integration", "LinkedIn Ads"]
    },
    {
      title: "Artisan Jewelry Brand",
      description: "Shopify store with Pinterest marketing strategy and influencer collaboration setup",
      category: "E-commerce",
      results: "500% Pinterest traffic",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&h=400",
      technologies: ["Shopify Plus", "Pinterest Ads", "Influencer Marketing", "Email Automation"]
    },
    {
      title: "Medical Practice Group",
      description: "Healthcare website with appointment booking and patient management system",
      category: "Healthcare",
      results: "300% online bookings",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=400",
      technologies: ["HIPAA Compliant", "Booking System", "Local SEO", "Google Ads"]
    },
    {
      title: "Home Services Company",
      description: "Lead generation website with service area targeting and review management",
      category: "Home Services",
      results: "600% lead increase",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&h=400",
      technologies: ["Lead Generation", "Google Ads", "Review Management", "Local SEO"]
    },
    {
      title: "Educational Platform",
      description: "Online learning platform with course management and student tracking system",
      category: "EdTech",
      results: "10,000+ active students",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Video Streaming", "Payment Gateway", "Progress Tracking"]
    },
    {
      title: "Food Delivery Service",
      description: "Multi-restaurant delivery platform with real-time tracking and payment integration",
      category: "Food & Beverage",
      results: "2M+ orders processed",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "GPS Tracking", "Payment Gateway", "Push Notifications"]
    },
    {
      title: "Automotive Dealership",
      description: "Car dealership website with inventory management and financing calculator",
      category: "Automotive",
      results: "200% increase in leads",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&h=400",
      technologies: ["Inventory System", "Financing Calculator", "Virtual Tours", "Lead Forms"]
    },
    {
      title: "Non-Profit Organization",
      description: "Donation platform with volunteer management and event coordination system",
      category: "Non-Profit",
      results: "$500K+ donations raised",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&h=400",
      technologies: ["Donation Gateway", "Volunteer Portal", "Event Management", "Email Automation"]
    },
    {
      title: "Photography Studio",
      description: "Portfolio website with booking system and client gallery management",
      category: "Creative Services",
      results: "300% booking increase",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&h=400",
      technologies: ["Portfolio System", "Booking Calendar", "Client Galleries", "Payment Integration"]
    },
    {
      title: "Financial Advisory Firm",
      description: "Professional services website with client portal and financial planning tools",
      category: "Financial Services",
      results: "150% client acquisition",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=400",
      technologies: ["Client Portal", "Financial Calculators", "Secure Documents", "Appointment Booking"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth through strategic digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="ml-4">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="text-sm font-semibold text-green-800">Results Achieved:</div>
                    <div className="text-lg font-bold text-green-600">{project.results}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">180+</div>
                <div className="text-gray-600 text-sm">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$8M+</div>
                <div className="text-gray-600 text-sm">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">400%</div>
                <div className="text-gray-600 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.5%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
