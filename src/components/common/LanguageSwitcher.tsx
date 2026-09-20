import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = usePortfolio();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-0.5 text-xs font-medium ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        className={`px-2.5 py-1 rounded-md transition-all duration-150 ${
          language === 'id'
            ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs font-semibold'
            : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
        }`}
      >
        IDN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-2.5 py-1 rounded-md transition-all duration-150 ${
          language === 'en'
            ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs font-semibold'
            : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
        }`}
      >
        ENG
      </button>
    </div>
  );
};
