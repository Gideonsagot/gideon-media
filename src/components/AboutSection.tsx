
import { CheckCircle, Users, Award, TrendingUp, Shield, Star, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const achievements = [
    {
      icon: Users,
      number: '50+',
      label: t('about.achievements.clients'),
      description: t('about.achievements.clientsDesc')
    },
    {
      icon: Award,
      number: '100+',
      label: t('about.achievements.projects'),
      description: t('about.achievements.projectsDesc')
    },
    {
      icon: TrendingUp,
      number: '2x',
      label: t('about.achievements.roi'),
      description: t('about.achievements.roiDesc')
    }
  ];

  const values = t('about.values', { returnObjects: true }) as string[];

  const trustBadges = [
    {
      icon: Shield,
      title: t('about.trustBadges.certified'),
      description: t('about.trustBadges.certifiedDesc')
    },
    {
      icon: Star,
      title: t('about.trustBadges.reviews'),
      description: t('about.trustBadges.reviewsDesc')
    },
    {
      icon: Clock,
      title: t('about.trustBadges.support'),
      description: t('about.trustBadges.supportDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description2')}
            </p>

            {/* Values */}
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-muted rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <badge.icon className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats and Trust Image */}
          <div className="lg:pl-8">
            {/* Trust Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&h=600" 
                alt="Professional team meeting discussing digital marketing strategies"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <achievement.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        {achievement.number}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-muted rounded-xl border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground italic">
                "{t('about.mission')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
