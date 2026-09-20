import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, LocalizedString, LocalizedArray, Theme } from '../types';
import { translations } from '../data/translations';

interface PortfolioContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (getter: (dict: typeof translations) => LocalizedString) => string;
  localize: (obj?: LocalizedString) => string;
  localizeArray: (obj?: LocalizedArray) => string[];
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme') as Theme | null;
      if (saved === 'light' || saved === 'dark') return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Language state
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang') as Language | null;
      if (saved === 'en' || saved === 'id') return saved;
      // Auto-detect Indonesian locale
      if (navigator.language.toLowerCase().startsWith('id')) {
        return 'id';
      }
    }
    return 'en';
  });

  // Apply theme class to HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      if (document.body) {
        document.body.classList.add('dark');
      }
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      if (document.body) {
        document.body.classList.remove('dark');
      }
    }
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // ignore storage quota errors
    }
  }, [theme]);

  // Apply lang attribute to HTML element
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio_lang', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const t = (getter: (dict: typeof translations) => LocalizedString): string => {
    try {
      const localized = getter(translations);
      return localized ? localized[language] || localized.en : '';
    } catch {
      return '';
    }
  };

  const localize = (obj?: LocalizedString): string => {
    if (!obj) return '';
    return obj[language] || obj.en || '';
  };

  const localizeArray = (obj?: LocalizedArray): string[] => {
    if (!obj) return [];
    return obj[language] || obj.en || [];
  };

  return (
    <PortfolioContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage,
        toggleLanguage,
        t,
        localize,
        localizeArray,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
