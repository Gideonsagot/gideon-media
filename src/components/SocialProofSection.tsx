
import { Award, Users, TrendingUp, ThumbsUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const statKeys = ['projects', 'clients', 'roi', 'satisfaction'];
const statIcons = [Award, Users, TrendingUp, ThumbsUp];

const SocialProofSection = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, getItemStyle } = useStaggerAnimation(statKeys.length);

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('socialProof.title')}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t('socialProof.subtitle')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {statKeys.map((key, index) => {
            const Icon = statIcons[index];
            return (
              <div key={key} className="text-center group" style={getItemStyle(index)}>
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-1">{t(`socialProof.stats.${key}.number`)}</div>
                <div className="text-sm font-semibold mb-1 text-primary-foreground/90">{t(`socialProof.stats.${key}.label`)}</div>
                <p className="text-xs text-primary-foreground/60 max-w-[180px] mx-auto">{t(`socialProof.stats.${key}.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
