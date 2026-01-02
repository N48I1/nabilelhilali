export interface Project {
  title: string;
  tech: string[];
  description: string;
  details?: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  tasks: string[];
  imageUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  status: string;
  logoUrl?: string;
  pdfUrl?: string;
  imageUrl?: string;
}

export interface Profile {
  username: string;
  fullName: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface UI {
  status: string;
  greeting: string;
  viewOperations: string;
  contactMe: string;
  systemSpecs: string;
  locationLabel: string;
  focusLabel: string;
  experienceLabel: string;
  downloadResume: string;
  aboutMe: string;
  technicalArsenal: string;
  technicalArsenalDesc: string;
  featuredOperations: string;
  featuredOperationsDesc: string;
  viewGithub: string;
  professionalTimeline: string;
  academicBackground: string;
  communityTeaching: string;
  communityTeachingDesc: string;
  designedBy: string;
  rightsReserved: string;
}