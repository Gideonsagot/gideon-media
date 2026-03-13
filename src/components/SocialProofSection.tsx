
import { Award, Users, TrendingUp, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Award, number: '100+', label: 'Projects Completed', description: 'Websites and campaigns delivered across industries' },
  { icon: Users, number: '50+', label: 'Happy Clients', description: 'Businesses that trust Gideon Media for their growth' },
  { icon: TrendingUp, number: '2x', label: 'Average ROI', description: 'Our clients see real, measurable returns' },
  { icon: ThumbsUp, number: '95%', label: 'Client Satisfaction', description: 'Because results speak louder than promises' },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Numbers Don't Lie
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We let our results do the talking. Here's what we've achieved for businesses like yours.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm font-semibold mb-1 text-primary-foreground/90">{stat.label}</div>
              <p className="text-xs text-primary-foreground/60 max-w-[180px] mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
