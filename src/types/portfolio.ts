export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI & Vision' | 'NLP & Full-Stack';
  stack: string[];
  metrics: string;
  features: string[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  hostedOn: string;
  badge: string;
  highlight: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  researchNote?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  field: string;
}
