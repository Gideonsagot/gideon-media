
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

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
            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:pl-8">
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
