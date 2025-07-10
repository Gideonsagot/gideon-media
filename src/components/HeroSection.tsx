
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          {/* Fallback for browsers that don't support video */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080')"
            }}
          />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/80 z-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Company Name */}
          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight animate-fade-in-up">
              Gideon Media
            </h1>
          </div>

          {/* Main Tagline */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              We Build.{' '}
              <span className="block text-blue-200">We Advertise.</span>
              <span className="block text-yellow-300">You Grow.</span>
            </h2>
          </div>

          {/* Services Subheading */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-blue-100 font-medium animate-fade-in-up">
              Meta Ads | Shopify & Small Business Websites | Pinterest Setup | Ad Strategy & Launch
            </p>
          </div>

          {/* Guarantee Statement */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white font-semibold bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 inline-block animate-fade-in-up">
              "We guarantee results or we work until you get them."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 group text-lg"
            >
              Get a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl group text-lg"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start Growing Now
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
            <div className="text-center animate-bounce-subtle">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center animate-bounce-subtle delay-500">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center animate-bounce-subtle delay-1000">
              <div className="text-4xl font-bold mb-2">2x</div>
              <div className="text-blue-200">Average ROI Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
