import React, { useEffect } from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { certificates } from '../data/certificates';
import { SectionTitle } from '../components/common/SectionTitle';
import { Badge } from '../components/common/Badge';

export const Certificates: React.FC = () => {
  const { t, localize } = usePortfolio();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main-content" className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t((d) => d.certificates.sectionTag)}
          title={t((d) => d.certificates.title)}
          subtitle={t((d) => d.certificates.subtitle)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200"
            >
              <div>
                <div className="relative aspect-16/10 bg-stone-100 dark:bg-stone-950 p-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={localize(cert.title)}
                    className="w-full h-full object-contain rounded-sm shadow-xs"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-900/85 text-white text-[10px] font-mono backdrop-blur-xs">
                      <Award className="w-3 h-3 text-amber-400" />
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-stone-950 dark:text-white tracking-tight leading-snug">
                    {localize(cert.title)}
                  </h3>

                  <div className="text-xs font-mono text-stone-600 dark:text-stone-400 space-y-1">
                    <p>
                      {t((d) => d.certificates.issuer)}{' '}
                      <span className="text-stone-950 dark:text-white font-bold">
                        {cert.issuer}
                      </span>
                    </p>
                    <p>
                      {t((d) => d.certificates.credentialId)}{' '}
                      <span className="text-stone-800 dark:text-stone-200">
                        {cert.credentialId}
                      </span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
                    {localize(cert.description)}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider block mb-1.5">
                      {t((d) => d.certificates.skillsCovered)}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <Badge key={skill} variant="neutral" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-stone-500 dark:text-stone-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Verified Completion
                </span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-950 dark:text-white hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                >
                  <span>{t((d) => d.certificates.viewCredential)}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
