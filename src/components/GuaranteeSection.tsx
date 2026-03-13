
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GuaranteeSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call%20with%20Gideon%20Media', '_blank');
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Guarantee to You
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg mb-8">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              "We guarantee results — or we continue working until we achieve{' '}
              <span className="text-primary font-bold">measurable improvements</span> for your business."
            </p>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're not interested in taking your money and disappearing. We succeed when you succeed. 
            That's why every project comes with our performance commitment.
          </p>

          <Button 
            onClick={openWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Your Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
