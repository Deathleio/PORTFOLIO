import React from 'react';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="font-medium text-zinc-200">{personalInfo.statusBadge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight leading-[1.15] max-w-4xl">
          Hi, I'm {personalInfo.name} — <br className="hidden sm:inline" />
          <span className="text-zinc-400">AI & Full-Stack Engineer</span>
        </h1>

        {/* Narrative Bio */}
        <p className="text-base sm:text-lg text-zinc-300 mt-6 leading-relaxed max-w-3xl">
          Computer Science (AIML) undergraduate at <strong className="text-zinc-100">RCCIIT Kolkata</strong> (8.13 CGPA). Experienced in building clinical computer vision pipelines, multi-source NLP ensembles, and production web services.
        </p>
        
        <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed max-w-3xl">
          Interned at the <strong className="text-zinc-200">Centre of Excellence on Data Science and Machine Learning</strong>, where I developed an AI clinical transcription pipeline and co-authored a research paper submitted to the <strong className="text-zinc-200">National Conference on e-Governance</strong>.
        </p>

        {/* Primary Actions */}
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-900 bg-zinc-100 hover:bg-white transition-all shadow-sm"
          >
            Explore Live Projects
            <ArrowRight className="w-4 h-4 text-zinc-900" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Mayank_Shah_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-colors"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            Download Resume (PDF)
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            {personalInfo.email}
          </a>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-zinc-800/80">
          {personalInfo.stats.map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-indigo-400 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
