import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Activities } from './pages/Activities';
import { ActivityDetail } from './pages/ActivityDetail';
import { Certificates } from './pages/Certificates';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        {/* Skip to Content for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 rounded-md font-semibold text-xs shadow-lg"
        >
          Skip to main content
        </a>

        <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 dark:bg-[#0f1012] dark:text-stone-100 transition-colors duration-200 selection:bg-stone-800 selection:text-white dark:selection:bg-stone-200 dark:selection:text-stone-900 font-sans">
          <Navbar />
          <div className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/activities/:slug" element={<ActivityDetail />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </PortfolioProvider>
  );
}
