export type Language = 'en' | 'id';
export type Theme = 'light' | 'dark';

export interface LocalizedString {
  en: string;
  id: string;
}

export interface LocalizedArray {
  en: string[];
  id: string[];
}

export interface ProfileData {
  name: string;
  headline: LocalizedString;
  location: LocalizedString;
  university: LocalizedString;
  major: LocalizedString;
  status: LocalizedString;
  bioSummary: LocalizedString;
  aboutFull: LocalizedArray;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  whatsappUrl: string;
  cvPath: string;
  avatarPath: string;
}

export interface SkillCategory {
  title: LocalizedString;
  description: LocalizedString;
  skills: {
    name: string;
    description: LocalizedString;
    category: 'web' | 'backend' | 'frontend' | 'database' | 'orm' | 'tools';
    iconName?: string;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  role: LocalizedString;
  architectureHighlights: LocalizedArray;
  keyFeatures: LocalizedArray;
  technologies: string[];
  category: 'Full-Stack' | 'Backend' | 'Frontend' | 'Web Portal';
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export type ActivityCategory =
  | 'All'
  | 'Organization'
  | 'Event Experience'
  | 'Certificate'
  | 'Work Experience'
  | 'Personal Project';

export interface ActivityGalleryItem {
  src: string;
  alt: LocalizedString;
  caption: LocalizedString;
}

export interface Activity {
  slug: string;
  title: LocalizedString;
  date: string;
  category: ActivityCategory;
  role: LocalizedString;
  organization: LocalizedString;
  summary: LocalizedString;
  story: LocalizedArray;
  responsibilities: LocalizedArray;
  takeaways: LocalizedArray;
  coverImage: string;
  gallery?: ActivityGalleryItem[];
  tags: string[];
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: LocalizedString;
  type: LocalizedString; // Full-time, Internship, Organization, etc.
  period: LocalizedString;
  location: LocalizedString;
  summary: LocalizedString;
  responsibilities: LocalizedArray;
  achievements?: LocalizedArray;
  technologies?: string[];
  badge?: LocalizedString;
}

export interface CertificateItem {
  id: string;
  title: LocalizedString;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skillsCovered: string[];
  description: LocalizedString;
}
