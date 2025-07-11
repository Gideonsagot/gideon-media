
import { ArrowRight, CheckCircle, Globe, Smartphone, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20start%20my%20free%20strategy%20call%20with%20Gideon%20Media', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-10"
          poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fabf212b2e5325d5b14dff6c5ba0b41&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080')"
            }}
          />
        </video>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 max-w-6xl">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
              We Build.{' '}
              <span className="block">We Advertise.</span>
              <span className="block text-gray-800">You Grow.</span>
            </h1>
          </div>

          {/* Services Subheading */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-lg text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <span>Meta Ads</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Shopify & Small Business Websites</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Pinterest Setup</span>
              </div>
              <span className="text-gray-400">•</span>
              <span>Ad Strategy & Launch</span>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <p className="text-lg md:text-xl text-gray-800 font-semibold">
                "We guarantee results — or we work until you get them."
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              Start My Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium">100+ Projects Completed — Trusted by Global Businesses</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-black">100+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-black">50+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-black">2x</div>
              <div className="text-gray-600 font-medium">Average ROI Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
