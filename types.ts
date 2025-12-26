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
  description: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  avatarUrl: string;
}