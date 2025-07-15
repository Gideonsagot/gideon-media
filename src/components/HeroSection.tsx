
import { ArrowRight, CheckCircle, Globe, Smartphone, TrendingUp, Phone, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20start%20my%20free%20strategy%20call%20with%20Gideon%20Media', '_blank');
  };

  const services = [
    { icon: Smartphone, name: 'Meta Ads', description: 'Facebook & Instagram' },
    { icon: Globe, name: 'Shopify & Small Business Websites', description: 'E-commerce & Business Sites' },
    { icon: TrendingUp, name: 'Pinterest Setup', description: 'Visual Marketing' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fabf212b2e5325d5b14dff6c5ba0b41&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080')"
            }}
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 max-w-6xl">
        {/* Main Content */}
        <div className="space-y-12">
          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              We Advertise.{' '}
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text hover:scale-105 transition-transform duration-300 cursor-default relative">
                You Grow.
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </span>
            </h1>
          </div>

          {/* Services Section */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-white font-semibold text-lg text-center">{service.name}</h3>
                    <p className="text-gray-200 text-sm text-center">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-md">
                Ad Strategy & Launch
              </Badge>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                    We <span className="font-bold text-primary">guarantee</span> <span className="font-bold text-primary">results</span> — or we work until you get them.
                  </p>
                </div>
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1 rotate-180" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-8">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-500 text-white px-10 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-110 group border-2 border-primary/20"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Start My Free Strategy Call
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-3 text-gray-200">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="font-semibold text-lg">100+ Projects Completed — Trusted by Global Businesses</span>
            </div>

            {/* Client Credibility Strip */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-gray-300 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">2x</div>
                    <div className="text-gray-300 text-sm">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-gray-300 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-gray-300 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
