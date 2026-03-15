
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const GuaranteeSection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call%20with%20Gideon%20Media', '_blank');
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="max-w-3xl mx-auto text-center transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)' }}
        >
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('guarantee.title')}
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg mb-8">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              "{t('guarantee.quote')}{' '}
              <span className="text-primary font-bold">{t('guarantee.quoteHighlight')}</span>{' '}
              {t('guarantee.quoteEnd')}"
            </p>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('guarantee.description')}
          </p>

          <Button 
            onClick={openWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            {t('guarantee.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
