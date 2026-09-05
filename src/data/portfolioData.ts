import type { Project, SkillCategory, Experience, Education } from '../types/portfolio';

export const personalInfo = {
  name: "Mayank Shah",
  role: "AI & Full-Stack Engineer",
  tagline: "Computer Science (AIML) undergraduate specializing in Computer Vision, RAG pipelines, and high-performance web systems.",
  email: "dhruv.shah1409@gmail.com",
  phone: "+91-7980349041",
  location: "Kolkata, West Bengal, India",
  github: "https://github.com/Deathleio",
  linkedin: "https://linkedin.com/in/mayank-shah-b23969283",
  resumeUrl: "/resume.pdf",
  statusBadge: "Open to Full-Time & Internship Opportunities",
  stats: [
    { label: "Academic Record", value: "8.13", sub: "CGPA (CSE - AIML)" },
    { label: "YOLOv8 Detection", value: "91.4%", sub: "mAP@50 PII Redaction" },
    { label: "Transformer Accuracy", value: "97.49%", sub: "Stacking + RoBERTa" },
    { label: "Dataset Scale", value: "75,000+", sub: "Articles Processed" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "ai-prescription-reader",
    title: "AI Prescription Reader & Clinical Audit Engine",
    subtitle: "PharmaHelp — Automated EMR Transcription & Compliance Auditing",
    category: "AI & Vision",
    badge: "91.4% mAP@50 YOLOv8 + Gemini Vision",
    highlight: "Presented at National Conference on e-Governance",
    hostedOn: "Vercel + FastAPI Cloud",
    metrics: "91.4% mAP@50 • 100-Pt Audit",
    description:
      "A production clinical transcription system that dynamically redacts sensitive patient PII and doctor signatures using custom YOLOv8, structures complex handwritten regimens into ICD-10 codes via Gemini Multimodal Vision, and performs dual-layer automated audit compliance.",
    stack: [
      "FastAPI",
      "YOLOv8",
      "ChromaDB",
      "Gemini Multimodal Vision",
      "React.js",
      "Python",
      "Docker"
    ],
    features: [
      "Custom YOLOv8 object detector achieving 91.4% mAP@50 for automated patient PII and doctor signature redaction.",
      "Gemini Multimodal Vision integration parsing noisy handwritten doctor prescriptions into standardized ICD-10 diagnostic codes.",
      "ChromaDB Vector RAG retrieval indexing official CMS formularies to phonetically match imperfect medical shorthand.",
      "Dual-layer 100-point audit engine combining strict deterministic regex rules with an LLM critic to catch transcript omissions."
    ],
    technicalChallenges: [
      {
        challenge: "Noisy, ambiguous handwritten doctor abbreviations causing significant transcription inaccuracies.",
        solution: "Engineered a Vector RAG retrieval pipeline in ChromaDB against official CMS formularies for phonetic and contextual drug shorthand resolution."
      },
      {
        challenge: "Preventing dangerous medical transcript omissions and hallucinations in clinical workflows.",
        solution: "Built a 100-point dual audit pipeline pairing strict deterministic rule validators with an LLM reasoning critic to cross-validate extractions."
      }
    ],
    githubUrl: "https://github.com/Deathleio",
    liveUrl: "https://pharmahelp.vercel.app/"
  },
  {
    id: "veritas-ai",
    title: "VeritasAI — Explainable Fake News Detection Platform",
    subtitle: "Real-Time NLP Classification with Wikipedia Claim Verification",
    category: "NLP & Full-Stack",
    badge: "97.49% Model Accuracy • Sub-Second Inference",
    highlight: "Trained on 75K+ Multi-Source Benchmark Corpus",
    hostedOn: "Vercel (UI) + Render (FastAPI API)",
    metrics: "97.49% Accuracy • 75K+ Corpus",
    description:
      "An end-to-end NLP platform trained on 75,000+ benchmark articles across WELFake, LIAR, and CoAID datasets. Leverages a calibrated stacking ensemble with fine-tuned RoBERTa transformers to deliver transparent veracity scores, keyword attention heatmaps, and live Wikipedia claim validation.",
    stack: [
      "Python",
      "RoBERTa",
      "FastAPI",
      "Scikit-Learn",
      "PostgreSQL",
      "React.js",
      "Tailwind CSS",
      "Render"
    ],
    features: [
      "Unified NLP preprocessing pipeline consolidating 75,000+ articles across WELFake, LIAR, and CoAID datasets.",
      "Calibrated Stacking Ensemble and fine-tuned RoBERTa transformer achieving 97.49% classification accuracy.",
      "Transparent explainability layer showing word-level attention scores and validating facts against the live Wikipedia knowledge graph.",
      "Containerized FastAPI microservice with lazy model loading and CORS support, serving sub-second real-time inferences."
    ],
    technicalChallenges: [
      {
        challenge: "High memory overhead and cold-start latency when serving large transformer models on cloud instances.",
        solution: "Implemented lazy-loading mechanisms and optimized model serialization with Joblib pipelines for sub-second REST API response times."
      },
      {
        challenge: "The explainability gap in black-box deep learning fake news classifiers.",
        solution: "Engineered a transparent explainability module providing token-level attention scores and cross-verifying claims against the live Wikipedia knowledge graph."
      }
    ],
    githubUrl: "https://github.com/Deathleio",
    liveUrl: "https://fakenwz.vercel.app/"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Core Languages",
    description: "Foundational programming & database querying",
    skills: [
      { name: "Python" },
      { name: "SQL (MySQL, noSQL)" },
      { name: "Java" },
      { name: "JavaScript" }
    ]
  },
  {
    title: "AI, ML & Vision",
    description: "Object detection, deep learning & applied logic",
    skills: [
      { name: "PyTorch" },
      { name: "Scikit-Learn" },
      { name: "YOLOv8" },
      { name: "OpenCV" },
      { name: "Fuzzy Logic (Mamdani)" },
      { name: "Pandas" },
      { name: "NumPy" }
    ]
  },
  {
    title: "GenAI, RAG & NLP",
    description: "Vector search, LLM orchestration & transformers",
    skills: [
      { name: "LangChain" },
      { name: "ChromaDB" },
      { name: "Transformers (RoBERTa)" },
      { name: "LLM models" },
      { name: "Claude code" },
      { name: "Power BI" }
    ]
  },
  {
    title: "Web & Frameworks",
    description: "Production APIs & responsive web interfaces",
    skills: [
      { name: "FastAPI" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "RESTful APIs" },
      { name: "POSTMAN API" }
    ]
  },
  {
    title: "Tools & Cloud",
    description: "Containers, version control & cloud hosting",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Linux / Bash" },
      { name: "Render" },
      { name: "Vercel" }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    role: "Data Science & Engineering Intern",
    company: "Centre of Excellence on Data Science and Machine Learning",
    location: "Kolkata, India",
    period: "March 2026 – June 2026",
    highlights: [
      "Engineered the clinical transcription pipeline for the AI Prescription Reader, integrating YOLOv8 for patient PII redaction and Gemini Multimodal Vision to structure EMR data and ICD-10 codes.",
      "Architected a Dual-Layer Audit Engine combining regex rules with ChromaDB formulary vector search; authored and submitted a research paper on the system for the National Conference on e-Governance.",
      "Collaborated across an 18-member engineering cohort to build automated validation scripts, data sanitization routines, and reporting dashboards for unstructured datasets."
    ],
    researchNote: "Submitted research paper on clinical prescription auditing presented for the National Conference on e-Governance."
  }
];

export const educationData: Education = {
  degree: "B.Tech in Computer Science and Engineering (AIML)",
  institution: "RCC Institute of Information Technology",
  location: "Kolkata, West Bengal",
  period: "Aug. 2023 – Present",
  cgpa: "8.13 / 10.0",
  field: "Artificial Intelligence & Machine Learning (Zero Backlogs)"
};
