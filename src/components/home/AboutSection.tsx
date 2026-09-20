import React from 'react';
import { Server, Users2, Database, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { profile } from '../../data/profile';
import { SectionTitle } from '../common/SectionTitle';

export const AboutSection: React.FC = () => {
  const { language, t } = usePortfolio();

  const paragraphs = profile.aboutFull[language] || profile.aboutFull.en;

  const coreStrengths = [
    {
      icon: Server,
      title: t((d) => d.about.h1Title),
      desc: t((d) => d.about.h1Desc),
    },
    {
      icon: Users2,
      title: t((d) => d.about.h2Title),
      desc: t((d) => d.about.h2Desc),
    },
    {
      icon: Database,
      title: t((d) => d.about.h3Title),
      desc: t((d) => d.about.h3Desc),
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t((d) => d.about.sectionTag)}
          title={t((d) => d.about.title)}
          subtitle={t((d) => d.about.subtitle)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Narrative (Text provided by user) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-normal">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="relative pl-0">
                {para}
              </p>
            ))}

            <div className="pt-2 flex items-center gap-3 text-xs font-mono font-medium text-stone-600 dark:text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Full academic record &amp; coursework detailed in CV.</span>
            </div>
          </div>

          {/* Three Focused Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 dark:text-white mb-2">
              {t((d) => d.about.keyHighlightsTitle)}
            </h3>

            {coreStrengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 transition-all hover:border-stone-300 dark:hover:border-stone-700 shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-950 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
