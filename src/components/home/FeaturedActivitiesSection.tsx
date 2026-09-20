import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Building, Award, Images } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { activities } from '../../data/activities';
import { ActivityCategory } from '../../types';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';

export const FeaturedActivitiesSection: React.FC = () => {
  const { t, localize } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('All');

  const categories: ActivityCategory[] = [
    'All',
    'Organization',
    'Event Experience',
    'Work Experience',
  ];

  const filteredActivities =
    selectedCategory === 'All'
      ? activities
      : activities.filter((act) => act.category === selectedCategory);

  return (
    <section id="activities" className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/40 dark:bg-[#0c0d0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <SectionTitle
            eyebrow={t((d) => d.activities.sectionTag)}
            title={t((d) => d.activities.title)}
            subtitle={t((d) => d.activities.subtitle)}
            className="mb-0"
          />
          <Link
            to="/activities"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors self-start md:self-end"
          >
            <span>{t((d) => d.common.viewAll)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="toolbar" aria-label="Activity filter">
          <span className="text-xs font-mono text-stone-500 dark:text-stone-400 mr-2">
            {t((d) => d.activities.filterCategory)}
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs'
                  : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Activities Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredActivities.map((act) => (
            <article
              key={act.slug}
              className="flex flex-col justify-between rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-16/10 bg-stone-100 dark:bg-stone-950 overflow-hidden border-b border-stone-200 dark:border-stone-800">
                  <img
                    src={act.coverImage}
                    alt={localize(act.title)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" size="sm">
                      {act.category}
                    </Badge>
                  </div>
                  {act.gallery && act.gallery.length > 0 && (
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono flex items-center gap-1">
                      <Images className="w-3 h-3" />
                      <span>{act.gallery.length} Photos</span>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono font-medium text-stone-600 dark:text-stone-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {act.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-950 dark:text-white tracking-tight leading-snug">
                    <Link
                      to={`/activities/${act.slug}`}
                      className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                    >
                      {localize(act.title)}
                    </Link>
                  </h3>

                  <div className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                    <p className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-stone-100">
                      <Award className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 shrink-0" />
                      <span>{localize(act.role)}</span>
                    </p>
                    <p className="flex items-center gap-1.5 font-medium">
                      <Building className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 shrink-0" />
                      <span>{localize(act.organization)}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 line-clamp-3 leading-relaxed pt-1">
                    {localize(act.summary)}
                  </p>
                </div>
              </div>

              {/* Bottom footer link */}
              <div className="px-5 sm:px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
                <Link
                  to={`/activities/${act.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-950 dark:text-white group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors"
                >
                  <span>{t((d) => d.activities.readArticle)}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
