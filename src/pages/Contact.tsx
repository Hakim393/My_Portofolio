import React, { useEffect } from 'react';
import { ContactSection } from '../components/home/ContactSection';

export const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main-content" className="pt-16 sm:pt-24">
      <ContactSection />
    </main>
  );
};
