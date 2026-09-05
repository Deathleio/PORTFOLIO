import type { Project, SkillCategory, Experience, Education } from '../types/portfolio';

export const personalInfo = {
  name: "Mayank Shah",
  role: "AI & Full-Stack Engineer",
  tagline: "I build practical AI systems that solve real problems — from healthcare document intelligence to high-speed fact verification.",
  email: "dhruv.shah1409@gmail.com",
  phone: "+91-7980349041",
  location: "Kolkata, West Bengal, India",
  github: "https://github.com/Deathleio",
  linkedin: "https://linkedin.com/in/mayank-shah-b23969283",
  resumeUrl: "/resume.pdf",
  statusBadge: "Available for Full-Time & Internship Roles",
  stats: [
    { label: "Academic Standing", value: "8.13", sub: "CGPA • B.Tech AIML" },
    { label: "AI Vision Precision", value: "91.4%", sub: "mAP@50 Redaction" },
    { label: "Model Accuracy", value: "97.49%", sub: "Stacking + RoBERTa" },
    { label: "Corpus Scale", value: "75,000+", sub: "Articles Processed" },
  ]
};

export const recruiterHighlights = [
  {
    title: "Real-World Impact",
    desc: "Trained vision models that automate clinical transcription and redact sensitive patient data in hospitals.",
    tag: "Clinical AI"
  },
  {
    title: "Research-Backed",
    desc: "Co-authored and submitted a peer-reviewed research paper to the National Conference on e-Governance.",
    tag: "Published Research"
  },
  {
    title: "Full-Stack Deployment",
    desc: "Takes machine learning models from Jupyter prototypes to live, sub-second web applications on Vercel & Render.",
    tag: "Production Ready"
  }
];

export const projectsData: Project[] = [
  {
    id: "ai-prescription-reader",
    title: "AI Prescription Reader & Clinical Audit Engine",
    shortTitle: "PharmaHelp (Clinical AI)",
    tagline: "Turns messy handwritten doctor notes into structured medical records & catches medication mistakes.",
    simpleExplanation:
      "Doctor handwriting is notoriously hard to read and often leads to prescription errors. PharmaHelp uses computer vision to automatically black out private patient signatures, reads handwritten medicines using Google Gemini Vision, and cross-checks every drug against official databases to ensure 100% safety.",
    technicalExplanation:
      "Trained a custom YOLOv8 detector (91.4% mAP@50) for HIPAA-compliant PII redaction. Deployed Gemini Multimodal Vision to map handwritten regimens to ICD-10 diagnostic codes, paired with a ChromaDB Vector RAG formulary matcher and a deterministic regex + LLM critic audit engine.",
    realWorldImpact: "Reduces transcription time from 15 minutes to under 3 seconds per prescription while eliminating clinical omissions.",
    category: "AI & Healthcare",
    badge: "91.4% mAP@50 YOLOv8 + Gemini Vision",
    highlight: "Presented at National Conference on e-Governance",
    hostedOn: "Live on Vercel + FastAPI Backend",
    metrics: "91.4% mAP@50 • 100-Point Audit",
    stack: [
      "FastAPI",
      "YOLOv8",
      "ChromaDB",
      "Gemini Vision",
      "React.js",
      "Python",
      "Docker"
    ],
    features: [
      "Automatic PII/Signature Redaction: Protects patient privacy by detecting and masking sensitive handwriting.",
      "Handwriting-to-Code: Converts complex medical prescriptions into universal ICD-10 diagnostic codes.",
      "Fuzzy Drug Lookup: Uses ChromaDB vector search to find the right medicine even if the name is misspelled or abbreviated.",
      "100-Point Audit Engine: Checks dosages and frequencies before clinical orders are approved."
    ],
    technicalChallenges: [
      {
        challenge: "Noisy, ambiguous handwritten doctor abbreviations causing dangerous prescription errors.",
        solution: "Engineered a Vector RAG retrieval pipeline in ChromaDB indexing official CMS formularies for phonetic matching."
      },
      {
        challenge: "Eliminating AI hallucinations and transcript omissions in high-stakes clinical workflows.",
        solution: "Architected a dual 100-point audit combining deterministic regex validation with an LLM reasoning critic."
      }
    ],
    simulationSteps: [
      {
        title: "Step 1: Patient Privacy Shield",
        detail: "Custom YOLOv8 identifies and masks patient name, address, and doctor signature.",
        iconType: "shield"
      },
      {
        title: "Step 2: Handwriting Transcription",
        detail: "Gemini Multimodal Vision converts cursive dosage instructions into digital text.",
        iconType: "scan"
      },
      {
        title: "Step 3: Formulary Vector Match",
        detail: "ChromaDB matches ambiguous drug names against CMS official drug database.",
        iconType: "database"
      },
      {
        title: "Step 4: 100-Point Compliance Audit",
        detail: "Automated engine flags potential omissions and outputs clean ICD-10 codes.",
        iconType: "check"
      }
    ],
    githubUrl: "https://github.com/Deathleio",
    liveUrl: "https://pharmahelp.vercel.app/"
  },
  {
    id: "veritas-ai",
    title: "VeritasAI — Explainable Fake News Detection Platform",
    shortTitle: "VeritasAI (Fact Verifier)",
    tagline: "Instant sub-second news veracity scoring with live Wikipedia evidence checking.",
    simpleExplanation:
      "Misinformation spreads faster than truth. VeritasAI lets anyone paste an article or headline and instantly see whether it's genuine or fabricated, highlights which words triggered suspicion, and cross-checks claims against live Wikipedia facts.",
    technicalExplanation:
      "Consolidated 75,000+ benchmark articles across WELFake, LIAR, and CoAID. Built a calibrated Stacking Ensemble with a fine-tuned RoBERTa transformer delivering 97.49% accuracy with sub-second lazy-loaded FastAPI inference on Render.",
    realWorldImpact: "Provides transparent reasoning and source validation so users aren't left guessing why an article is flagged.",
    category: "NLP & Misinformation",
    badge: "97.49% Accuracy • Sub-Second Speed",
    highlight: "Trained on 75,000+ Article Benchmark Corpus",
    hostedOn: "Live on Vercel + Render Cloud API",
    metrics: "97.49% Accuracy • 75K+ Corpus",
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
      "Sub-Second Classification: Analyzes full articles in under 800ms with high precision.",
      "Explainability Heatmap: Shows exactly which words or sentences sound exaggerated or misleading.",
      "Live Fact Verification: Automatically queries Wikipedia to confirm names, dates, and historical claims.",
      "Ensemble Stacking: Combines multiple ML models for calibrated confidence scores."
    ],
    technicalChallenges: [
      {
        challenge: "High cold-start latency when serving large transformer models on cloud platforms.",
        solution: "Engineered lazy-loading pipelines and serialized weights for sub-second REST API response times."
      },
      {
        challenge: "Black-box AI models that tell users an article is fake without explaining why.",
        solution: "Built a token-level attention heatmap and integrated Wikipedia API to provide verifiable evidence."
      }
    ],
    simulationSteps: [
      {
        title: "Step 1: Text Tokenization",
        detail: "Transforms raw article into high-dimensional semantic vectors using RoBERTa.",
        iconType: "scan"
      },
      {
        title: "Step 2: Stacking Ensemble Classification",
        detail: "Ensemble evaluates semantic cues to output a 97.49% calibrated trust score.",
        iconType: "shield"
      },
      {
        title: "Step 3: Live Fact Checking",
        detail: "Queries Wikipedia API in real time to verify factual claims and dates.",
        iconType: "database"
      },
      {
        title: "Step 4: Explainability Map",
        detail: "Highlights suspicious terminology so the user understands the decision.",
        iconType: "check"
      }
    ],
    githubUrl: "https://github.com/Deathleio",
    liveUrl: "https://fakenwz.vercel.app/"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Core Languages",
    description: "Programming & database querying",
    skills: [
      { name: "Python" },
      { name: "SQL (MySQL, noSQL)" },
      { name: "Java" },
      { name: "JavaScript" }
    ]
  },
  {
    title: "AI, ML & Vision",
    description: "Object detection & applied machine learning",
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
    description: "Vector search & transformer models",
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
    description: "APIs & responsive user interfaces",
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
    description: "Containers, version control & deployment",
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
    plainEnglishSummary: "Built an AI pipeline to digitize handwritten medical prescriptions for hospitals and submitted a research paper to the National Conference on e-Governance.",
    highlights: [
      "Engineered the clinical transcription pipeline for the AI Prescription Reader, integrating YOLOv8 for patient PII redaction and Gemini Multimodal Vision to structure EMR data and ICD-10 codes.",
      "Architected a Dual-Layer Audit Engine combining regex rules with ChromaDB formulary vector search; authored and submitted a research paper on the system for the National Conference on e-Governance.",
      "Collaborated across an 18-member engineering cohort to build automated validation scripts, data sanitization routines, and reporting dashboards for unstructured datasets."
    ],
    researchNote: "Submitted research paper on clinical prescription auditing for the National Conference on e-Governance."
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
