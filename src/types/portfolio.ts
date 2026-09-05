export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  simpleExplanation: string;
  technicalExplanation: string;
  realWorldImpact: string;
  category: 'AI & Healthcare' | 'NLP & Misinformation';
  badge: string;
  highlight: string;
  hostedOn: string;
  metrics: string;
  stack: string[];
  features: string[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  simulationSteps: {
    title: string;
    detail: string;
    iconType: string;
  }[];
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  plainEnglishSummary: string;
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
