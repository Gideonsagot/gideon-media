
import { AlertTriangle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useStaggerAnimation } from '@/hooks/useScrollAnimation';

const problemKeys = ['outdated', 'noConvert', 'noVisibility', 'struggling'];

const ProblemSection = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useStaggerAnimation(1);
  const { ref: gridRef, isVisible: gridVisible, getItemStyle } = useStaggerAnimation(problemKeys.length);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <AlertTriangle className="h-4 w-4" />
            {t('problem.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('problem.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('problem.subtitle')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problemKeys.map((key, index) => (
            <div
              key={key}
              style={getItemStyle(index)}
              className="bg-card rounded-xl p-6 border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 rounded-lg p-2 flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <X className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t(`problem.items.${key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(`problem.items.${key}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="text-center mt-12 transition-all duration-700"
          style={{ opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.5s' }}
        >
          <p className="text-xl font-semibold text-foreground">
            {t('problem.cta')} <span className="text-primary">{t('problem.ctaHighlight')}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
