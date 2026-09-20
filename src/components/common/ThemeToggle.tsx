import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme, t } = usePortfolio();

  const isLight = theme === 'light';
  const label = isLight
    ? t((dict) => dict.nav.themeDark)
    : t((dict) => dict.nav.themeLight);

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:border-stone-300 dark:hover:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600 active:scale-95 shadow-xs cursor-pointer ${className}`}
    >
      {/* 
        When in Light Mode (isLight=true): shows '🌙' emote. Clicking it turns into Dark Mode.
        When in Dark Mode (isLight=false): shows '☀️' logo. Clicking it turns into Light Mode.
      */}
      <span
        className="text-base select-none leading-none transition-transform duration-200 hover:scale-110"
        aria-hidden="true"
      >
        {isLight ? '🌙' : '☀️'}
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
};

