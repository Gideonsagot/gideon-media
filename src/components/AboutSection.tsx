
import { CheckCircle, Users, Award, TrendingUp, Shield, Star, Clock } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: '50+',
      label: 'Happy Clients',
      description: 'Businesses we\'ve helped grow'
    },
    {
      icon: Award,
      number: '100+',
      label: 'Projects Delivered',
      description: 'Successful campaigns and websites'
    },
    {
      icon: TrendingUp,
      number: '2x',
      label: 'Average ROI',
      description: 'Return on investment for clients'
    }
  ];

  const values = [
    'Results-driven approach with measurable outcomes',
    'Transparent communication throughout the project',
    'Cutting-edge technology and best practices',
    'Dedicated support for long-term success',
    'Custom solutions tailored to your business',
    'Competitive pricing with exceptional value'
  ];

  const trustBadges = [
    {
      icon: Shield,
      title: 'Certified Professionals',
      description: 'Meta & Google Certified'
    },
    {
      icon: Star,
      title: '5-Star Reviews',
      description: 'Client Satisfaction Guaranteed'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Always Here When You Need Us'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Gideon Media
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are a passionate team of digital marketing experts and web developers 
              dedicated to helping businesses thrive in the digital landscape. With years 
              of experience and a proven track record, we transform your online presence 
              into a powerful growth engine.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is simple: to provide exceptional digital solutions that drive 
              real results. Whether you're a small local business or an international 
              company, we have the expertise and tools to help you succeed online.
            </p>

            {/* Values */}
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <badge.icon className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-gray-600">
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
                      <div className="text-lg font-semibold text-gray-900">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700 italic">
                "To empower businesses with exceptional digital solutions that drive 
                growth, enhance brand visibility, and create lasting success in the online world."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
