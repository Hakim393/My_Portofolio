import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { SkillsSection } from '../components/home/SkillsSection';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { FeaturedActivitiesSection } from '../components/home/FeaturedActivitiesSection';
import { ExperienceSection } from '../components/home/ExperienceSection';
import { CertificatesSection } from '../components/home/CertificatesSection';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  const location = useLocation();

  // Smooth scroll to anchor on page load or anchor change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <FeaturedActivitiesSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  );
};
