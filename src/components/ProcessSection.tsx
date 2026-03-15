
import { ClipboardList, PenTool, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const stepKeys = ['strategy', 'design', 'launch'];
const stepIcons = [ClipboardList, PenTool, Rocket];

const ProcessSection = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, getItemStyle } = useStaggerAnimation(stepKeys.length);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            {t('process.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('process.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stepKeys.map((key, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={key} className="relative text-center group" style={getItemStyle(index)}>
                {/* Connector line */}
                {index < stepKeys.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-border z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-9 w-9 text-primary" />
                  </div>
                  <div className="text-xs font-bold text-primary mb-2 tracking-widest uppercase">
                    {t('common.getStarted').split(' ')[0]} {t(`process.steps.${key}.step`)}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(`process.steps.${key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{t(`process.steps.${key}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
