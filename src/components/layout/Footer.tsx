import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MessageSquare, Instagram, ArrowUp } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const { t } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t((d) => d.nav.home), path: '/' },
    { label: t((d) => d.nav.about), path: '/#about' },
    { label: t((d) => d.nav.skills), path: '/#skills' },
    { label: t((d) => d.nav.projects), path: '/projects' },
    { label: t((d) => d.nav.activities), path: '/activities' },
    { label: t((d) => d.nav.experience), path: '/#experience' },
    { label: t((d) => d.nav.certificates), path: '/certificates' },
    { label: t((d) => d.nav.contact), path: '/contact' },
  ];

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800/80 bg-stone-50 dark:bg-[#0c0d0f] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Col 1: Bio & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-md bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-mono font-bold flex items-center justify-center text-xs">
                FH
              </span>
              <span className="text-lg font-bold tracking-tight text-stone-950 dark:text-white">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-stone-700 dark:text-stone-300 max-w-md leading-relaxed">
              {t((d) => d.footer.description)}
            </p>
            <p className="text-xs font-mono font-medium text-stone-600 dark:text-stone-400">
              Gunadarma University • Informatics Engineering
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 dark:text-white">
              {t((d) => d.footer.quickLinks)}
            </h3>
            <ul className="space-y-2 text-sm text-stone-700 dark:text-stone-300">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="hover:text-stone-950 dark:hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Channels & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 dark:text-white">
              {t((d) => d.footer.socials)}
            </h3>
            <div className="flex flex-col space-y-2 text-sm text-stone-700 dark:text-stone-300">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-stone-950 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-stone-950 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-stone-950 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-stone-950 dark:hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-stone-950 dark:hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 dark:text-stone-400">
          <p>© {new Date().getFullYear()} Fikhi Hakim. {t((d) => d.footer.copyright)}</p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono">{t((d) => d.footer.builtWith)}</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1 font-semibold text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
