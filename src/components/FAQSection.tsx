
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];

const FAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: listRef, getItemStyle } = useStaggerAnimation(faqKeys.length);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div ref={listRef} className="max-w-3xl mx-auto">
          {faqKeys.map((key, index) => (
            <Card 
              key={key} 
              style={getItemStyle(index)}
              className="mb-3 border border-border hover:border-primary/20 transition-colors duration-300"
            >
              <CardHeader 
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="cursor-pointer hover:bg-muted/50 transition-colors duration-200 py-4"
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-foreground pr-4">
                    {t(`faq.items.${key}.question`)}
                  </CardTitle>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300" />
                  )}
                </div>
              </CardHeader>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openFAQ === index ? '200px' : '0px',
                  opacity: openFAQ === index ? 1 : 0,
                }}
              >
                <CardContent className="pt-0 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`faq.items.${key}.answer`)}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
