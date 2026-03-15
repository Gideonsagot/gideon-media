
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: "Johnson's Boutique",
    role: 'Store Owner',
    content: 'Gideon Media built our Shopify store from scratch and it now converts 3x better than our old site. Their Meta Ads strategy increased our revenue by 150% in just 3 months.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    company: 'Chen Electronics',
    role: 'Business Owner',
    content: 'They built us a professional website that perfectly represents our brand. Client inquiries doubled within the first month. The team is responsive and truly understands business growth.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Emma Rodriguez',
    company: 'Rodriguez Consulting',
    role: 'Consultant',
    content: 'Professional, reliable, and results-driven. Our new website and digital marketing strategy has brought in consistent leads every week. The ROI has been incredible.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'David Thompson',
    company: 'Thompson Fitness',
    role: 'Gym Owner',
    content: 'From zero online presence to 50+ new members in the first month. The website they built handles bookings automatically and the ads bring in new leads daily.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Lisa Park',
    company: 'Park Design Studio',
    role: 'Creative Director',
    content: 'They understood our vision and created a stunning portfolio website. It showcases our work beautifully and client inquiries have doubled since launch.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Robert Kim',
    company: "Kim's Restaurant",
    role: 'Restaurant Owner',
    content: 'The website and Meta Ads campaign they created brought so many new customers. Our online orders went from almost zero to over 100 per week.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
  }
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, getItemStyle } = useStaggerAnimation(testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            {t('testimonials.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              style={getItemStyle(index)}
              className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group bg-card"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote size={28} />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
