import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { profile } from '../../data/profile';
import { ThemeToggle } from '../common/ThemeToggle';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Navbar: React.FC = () => {
  const { t } = usePortfolio();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/' && !location.hash) return true;
    if (path.startsWith('/#') && location.pathname === '/' && location.hash === path.substring(1)) return true;
    if (!path.startsWith('/#') && path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fafaf9]/90 dark:bg-[#0f1012]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-stone-400 rounded-md p-1"
        >
          <span className="w-8 h-8 rounded-md bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-mono font-bold flex items-center justify-center text-sm tracking-tight group-hover:scale-105 transition-transform">
            FH
          </span>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-tight text-stone-950 dark:text-white group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors">
              {profile.name}
            </span>
            <span className="text-[10px] font-mono font-medium text-stone-600 dark:text-stone-400 hidden sm:inline-block -mt-0.5">
              Informatics Student
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActiveLink(link.path);
            const isAnchor = link.path.includes('#');

            if (isAnchor) {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                    active
                      ? 'text-stone-950 dark:text-white font-bold bg-stone-200 dark:bg-stone-800 shadow-2xs'
                      : 'text-stone-800 dark:text-stone-200 font-semibold hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  active
                    ? 'text-stone-950 dark:text-white font-bold bg-stone-200 dark:bg-stone-800 shadow-2xs'
                    : 'text-stone-800 dark:text-stone-200 font-semibold hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls (Theme, Language, CV, Mobile Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Download CV CTA */}
          <a
            href={profile.cvPath}
            download="Fikhi_Hakim_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors shadow-xs active:scale-95 cursor-pointer"
            title={t((d) => d.common.downloadCvPdf)}
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{t((d) => d.nav.downloadCv)}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t((d) => d.nav.close) : t((d) => d.nav.menu)}
            className="lg:hidden p-2 rounded-lg text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fafaf9] dark:bg-[#0f1012] border-b border-stone-200 dark:border-stone-800 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isAnchor = link.path.includes('#');
              if (isAnchor) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-sm font-semibold rounded-md text-stone-900 dark:text-stone-100 hover:bg-stone-200/70 dark:hover:bg-stone-800 transition-colors"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-semibold rounded-md text-stone-900 dark:text-stone-100 hover:bg-stone-200/70 dark:hover:bg-stone-800 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <a
                href={profile.cvPath}
                download="Fikhi_Hakim_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
              >
                <FileDown className="w-4 h-4" />
                <span>{t((d) => d.nav.downloadCv)} (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
