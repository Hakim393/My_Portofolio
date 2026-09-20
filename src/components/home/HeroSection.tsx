import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown, Mail, ShieldCheck, Terminal, MapPin } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { profile } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const { t, localize } = usePortfolio();

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-stone-200/80 dark:border-stone-800/80 overflow-hidden">
      {/* Restrained architectural background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio, and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {localize(profile.status)}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700">
                <MapPin className="w-3 h-3 text-stone-500 dark:text-stone-400" />
                {localize(profile.location)}
              </span>
            </div>

            {/* Main Title & Headline */}
            <div className="space-y-3">
              <p className="text-sm font-mono tracking-wide font-semibold text-stone-600 dark:text-stone-300">
                {t((d) => d.hero.greeting)}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 dark:text-white">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {localize(profile.headline)}
              </p>
            </div>

            {/* Editorial Bio */}
            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
              {t((d) => d.hero.tagline)}
            </p>

            {/* University & Focus Pill row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 dark:text-stone-300 font-mono font-medium pt-1">
              <span className="inline-flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                {t((d) => d.hero.focusTag)}
              </span>
              <span className="text-stone-400 dark:text-stone-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                {t((d) => d.hero.studentTag)}
              </span>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-sm active:scale-95"
              >
                <span>{t((d) => d.hero.viewProjects)}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={profile.cvPath}
                download="Fikhi_Hakim_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all shadow-xs active:scale-95"
              >
                <FileDown className="w-4 h-4 text-stone-500" />
                <span>{t((d) => d.nav.downloadCv)}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-stone-400" />
                <span>{t((d) => d.hero.contactMe)}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Thoughtfully Composed Editorial Portrait Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative framing */}
              <div className="relative rounded-2xl p-2 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm">
                <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900">
                  <img
                    src={profile.avatarPath}
                    alt={`${profile.name} - Full-Stack & Backend Developer`}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-102"
                  />
                </div>

                {/* Floating bottom badge */}
                <div className="mt-2.5 px-3 py-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-600 dark:text-stone-300 font-medium">STATUS:</span>
                  <span className="text-stone-950 dark:text-white font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    ACTIVELY CODING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
