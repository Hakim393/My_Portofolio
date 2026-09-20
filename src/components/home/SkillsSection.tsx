import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { skillCategories } from '../../data/skills';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';

export const SkillsSection: React.FC = () => {
  const { t, localize } = usePortfolio();

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t((d) => d.skills.sectionTag)}
          title={t((d) => d.skills.title)}
          subtitle={t((d) => d.skills.subtitle)}
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-stone-950 dark:text-white">
                    {localize(category.title)}
                  </h3>
                  <Badge variant="neutral" size="sm">
                    {category.skills.length} Technologies
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mb-5 leading-relaxed">
                  {localize(category.description)}
                </p>

                {/* Skills inside category */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-stone-950 dark:text-white font-mono">
                          {skill.name}
                        </span>
                        <span className="text-[11px] uppercase font-mono tracking-wider font-semibold text-stone-600 dark:text-stone-300">
                          {skill.category}
                        </span>
                      </div>
                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-normal">
                        {localize(skill.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note */}
        <div className="mt-8 text-center text-xs font-mono text-stone-500 dark:text-stone-400">
          ✦ {t((d) => d.skills.noFakeNote)}
        </div>
      </div>
    </section>
  );
};
