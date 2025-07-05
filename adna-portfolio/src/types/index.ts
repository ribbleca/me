export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  category: ProjectCategory;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  year: number;
  duration?: string;
  tech: Technology[];
  challenges?: string[];
  achievements?: string[];
  testimonial?: Testimonial;
}

export interface Technology {
  name: string;
  icon?: string;
  color?: string;
  category: TechCategory;
  proficiency: number; // 1-100
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 1-100
  icon?: string;
  description?: string;
  yearsOfExperience?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  location?: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship' | 'contract';
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description?: string;
  achievements?: string[];
  gpa?: string;
  location?: string;
  logo?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating?: number;
  avatar?: string;
  project?: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  tags: string[];
  category: BlogCategory;
  publishedAt: string;
  updatedAt?: string;
  readTime: number; // in minutes
  featured: boolean;
  status: 'published' | 'draft' | 'archived';
  author: Author;
  views?: number;
  likes?: number;
}

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
  social?: SocialLinks;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
  website?: string;
  medium?: string;
  dev?: string;
  youtube?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
  company?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
}

export interface MiniTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: ToolCategory;
  featured: boolean;
  component: string; // React component name
  path: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'certification' | 'milestone' | 'recognition';
  organization?: string;
  icon?: string;
  url?: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  bio: string;
  longBio: string;
  avatar: string;
  location: string;
  email: string;
  phone?: string;
  birthday?: string;
  nationality?: string;
  languages: Language[];
  interests: string[];
  funFacts: string[];
  availability: 'available' | 'busy' | 'not-available';
  social: SocialLinks;
  resume?: string;
}

export interface Language {
  name: string;
  level: 'native' | 'fluent' | 'conversational' | 'basic';
  flag?: string;
}

export interface Navigation {
  name: string;
  href: string;
  icon?: string;
  external?: boolean;
  badge?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  image: string;
  twitterHandle: string;
  locale: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  darkMode: boolean;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Enums
export type ProjectCategory = 
  | 'web-development' 
  | 'mobile-app' 
  | 'desktop-app' 
  | 'ai-ml' 
  | 'data-science' 
  | 'design' 
  | 'tools' 
  | 'game' 
  | 'other';

export type TechCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'devops' 
  | 'mobile' 
  | 'ai-ml' 
  | 'design' 
  | 'testing' 
  | 'other';

export type SkillCategory = 
  | 'programming' 
  | 'framework' 
  | 'tool' 
  | 'soft-skill' 
  | 'language' 
  | 'design' 
  | 'other';

export type BlogCategory = 
  | 'technology' 
  | 'tutorial' 
  | 'opinion' 
  | 'career' 
  | 'lifestyle' 
  | 'review' 
  | 'news' 
  | 'other';

export type ToolCategory = 
  | 'text' 
  | 'image' 
  | 'utility' 
  | 'converter' 
  | 'calculator' 
  | 'generator' 
  | 'validator' 
  | 'other';

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form validation types
export interface FormErrors {
  [key: string]: string | undefined;
}

export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  errors: FormErrors;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  loop?: boolean;
}

export interface MotionVariants {
  initial: object;
  animate: object;
  exit?: object;
  hover?: object;
  tap?: object;
}

// Easter egg types
export interface EasterEgg {
  id: string;
  name: string;
  description: string;
  trigger: 'click' | 'key' | 'scroll' | 'time' | 'konami';
  code?: string;
  element?: string;
  action: () => void;
  discovered: boolean;
}

// Statistics types
export interface Stats {
  projectsCompleted: number;
  yearsOfExperience: number;
  technologiesUsed: number;
  happyClients: number;
  coffeeCups: number;
  linesOfCode: number;
}

export default {};