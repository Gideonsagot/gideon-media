
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call%20with%20Gideon%20Media', '_blank');
  };

  const trustPoints = [
    t('hero.trust1'),
    t('hero.trust2'),
    t('hero.trust3'),
  ];

  const stats = [
    { number: '100+', label: t('hero.stats.projects') },
    { number: '50+', label: t('hero.stats.clients') },
    { number: '2x', label: t('hero.stats.roi') },
    { number: '95%', label: t('hero.stats.satisfaction') },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 max-w-5xl py-20">
        <div className="space-y-10">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">{t('hero.badge')}</span>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight animate-fade-in-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              {t('hero.title')}{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p 
              className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
            >
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Trust points */}
          <div 
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/80 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div 
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: '1s', animationFillMode: 'both' }}
          >
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-500 text-white px-10 py-7 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              {t('hero.cta')}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-white/50 text-sm">{t('hero.ctaSub')}</p>
          </div>

          {/* Stats Strip */}
          <div 
            className="max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
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
