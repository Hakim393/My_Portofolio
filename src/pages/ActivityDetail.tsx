import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Building, Award, CheckCircle2, TrendingUp, ZoomIn, Images } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { activities } from '../data/activities';
import { Badge } from '../components/common/Badge';
import { Lightbox } from '../components/common/Lightbox';

export const ActivityDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, localize, localizeArray } = usePortfolio();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activity = activities.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!activity) {
    return (
      <main className="pt-36 pb-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">Activity Not Found</h1>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-6">
          The requested documentation entry could not be located.
        </p>
        <Link
          to="/activities"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t((d) => d.activities.backToActivities)}</span>
        </Link>
      </main>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    if (!activity.gallery) return;
    setCurrentImageIndex((prev) => (prev === 0 ? activity.gallery!.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!activity.gallery) return;
    setCurrentImageIndex((prev) => (prev === activity.gallery!.length - 1 ? 0 : prev + 1));
  };

  return (
    <main id="main-content" className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t((d) => d.activities.backToActivities)}</span>
          </button>
        </div>

        {/* Header Block */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent" size="sm">
              {activity.category}
            </Badge>
            <span className="text-xs font-mono font-medium text-stone-600 dark:text-stone-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {activity.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 dark:text-white leading-tight">
            {localize(activity.title)}
          </h1>

          <p className="text-base sm:text-lg font-semibold text-stone-700 dark:text-stone-300 leading-relaxed">
            {localize(activity.summary)}
          </p>

          {/* Meta card */}
          <div className="p-4 sm:p-5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <Award className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
              <div>
                <span className="text-stone-600 dark:text-stone-400 font-mono block text-[11px] uppercase font-medium">
                  {t((d) => d.activities.roleLabel)}
                </span>
                <span className="font-bold text-stone-950 dark:text-white">
                  {localize(activity.role)}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Building className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
              <div>
                <span className="text-stone-600 dark:text-stone-400 font-mono block text-[11px] uppercase font-medium">
                  {t((d) => d.activities.orgLabel)}
                </span>
                <span className="font-bold text-stone-950 dark:text-white">
                  {localize(activity.organization)}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Media */}
        <div className="rounded-2xl overflow-hidden bg-stone-950 border border-stone-200 dark:border-stone-800 shadow-sm">
          <img
            src={activity.coverImage}
            alt={localize(activity.title)}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* Narrative Article Story */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-stone-950 dark:text-white tracking-tight">
            Event Context &amp; Story
          </h2>
          <div className="space-y-4 text-base text-stone-800 dark:text-stone-200 leading-relaxed">
            {localizeArray(activity.story).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-stone-950 dark:text-white tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-stone-500 dark:text-stone-400" />
            <span>{t((d) => d.activities.keyResponsibilities)}</span>
          </h2>
          <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
            <ul className="space-y-3">
              {localizeArray(activity.responsibilities).map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-stone-800 dark:text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span className="leading-snug">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Lessons Learned / Growth */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-stone-950 dark:text-white tracking-tight flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-stone-500 dark:text-stone-400" />
            <span>{t((d) => d.activities.takeaways)}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {localizeArray(activity.takeaways).map((take, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-900 dark:text-stone-100 flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="leading-relaxed">{take}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Event Gallery with Lightbox */}
        {activity.gallery && activity.gallery.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-stone-950 dark:text-white tracking-tight flex items-center gap-2">
                <Images className="w-5 h-5 text-stone-500 dark:text-stone-400" />
                <span>{t((d) => d.activities.galleryTitle)}</span>
              </h2>
              <span className="text-xs font-mono font-medium text-stone-600 dark:text-stone-400">
                {t((d) => d.activities.clickToEnlarge)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activity.gallery.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-lg overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 aspect-4/3 text-left focus:outline-none focus:ring-2 focus:ring-stone-400"
                  aria-label={`Open photo ${idx + 1}: ${localize(item.alt)}`}
                >
                  <img
                    src={item.src}
                    alt={localize(item.alt)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                    <span className="p-2 rounded-full bg-white/90 text-stone-900 shadow-sm">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-[11px] text-white font-medium truncate">
                      {localize(item.caption)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4">
          {activity.tags.map((tag) => (
            <Badge key={tag} variant="neutral" size="sm">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Next / Back Action */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <Link
            to="/activities"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t((d) => d.activities.backToActivities)}</span>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activity.gallery && (
        <Lightbox
          images={activity.gallery}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </main>
  );
};
