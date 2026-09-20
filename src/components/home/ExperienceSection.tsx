import React from 'react';
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { experiences } from '../../data/experience';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';

export const ExperienceSection: React.FC = () => {
  const { t, localize, localizeArray } = usePortfolio();

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t((d) => d.experience.sectionTag)}
          title={t((d) => d.experience.title)}
          subtitle={t((d) => d.experience.subtitle)}
        />

        <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker node */}
              <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-white dark:bg-stone-900 border-2 border-stone-400 dark:border-stone-600 group-hover:border-stone-900 dark:group-hover:border-stone-100 transition-colors" />

              <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-950 dark:text-white tracking-tight">
                      {localize(exp.role)}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-semibold text-stone-800 dark:text-stone-200">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                        {localize(exp.company)}
                      </span>
                      <span className="text-stone-400 dark:text-stone-600">•</span>
                      <span className="flex items-center gap-1 text-xs text-stone-600 dark:text-stone-400 font-mono">
                        <MapPin className="w-3 h-3 text-stone-500 dark:text-stone-400" />
                        {localize(exp.location)}
                      </span>
                    </div>
                  </div>

                  {exp.badge && (
                    <Badge variant="neutral" size="sm" className="self-start sm:self-center">
                      {localize(exp.badge)}
                    </Badge>
                  )}
                </div>

                {/* Summary */}
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
                  {localize(exp.summary)}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-stone-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 dark:text-white mb-2">
                    {t((d) => d.experience.responsibilities)}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    {localizeArray(exp.responsibilities).map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
