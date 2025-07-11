
import { CheckCircle, Globe, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalMarketingBanner = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20start%20my%20free%20strategy%20call%20with%20Gideon%20Media', '_blank');
  };

  return (
    <div className="w-[1080px] h-[1080px] bg-black flex flex-col items-center justify-center text-center p-16 relative overflow-hidden">
      {/* Main Content Container */}
      <div className="space-y-12 max-w-4xl">
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-white leading-tight">
            We Advertise.{' '}
            <span className="text-yellow-400">You Grow.</span>
          </h1>
        </div>

        {/* Services Subtext */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-2xl text-gray-300 font-medium">
          <div className="flex items-center gap-3">
            <Smartphone className="h-8 w-8 text-yellow-400" />
            <span>Meta Ads</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-3">
            <Globe className="h-8 w-8 text-yellow-400" />
            <span>Shopify & Small Business Websites</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-yellow-400" />
            <span>Pinterest Setup</span>
          </div>
          <span className="text-gray-400">•</span>
          <span>Ad Strategy & Launch</span>
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl">
            <p className="text-3xl text-white font-semibold leading-relaxed">
              "We guarantee results — or we work until you get them."
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-8">
          <Button 
            onClick={openWhatsApp}
            className="bg-transparent hover:bg-yellow-400/10 text-white border-2 border-yellow-400 hover:border-yellow-300 px-12 py-6 rounded-full font-bold text-2xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/20 group"
          >
            Start My Free Strategy Call
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust Indicator */}
        <div className="flex items-center justify-center gap-4 text-white text-xl font-medium">
          <CheckCircle className="h-6 w-6 text-yellow-400" />
          <span>100+ Projects Completed — Trusted by Global Businesses</span>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-yellow-400/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-yellow-400/10 rounded-full"></div>
      <div className="absolute top-1/3 left-10 w-2 h-2 bg-yellow-400 rounded-full"></div>
      <div className="absolute bottom-1/3 right-10 w-1 h-1 bg-yellow-400 rounded-full"></div>
    </div>
  );
};

export default DigitalMarketingBanner;
