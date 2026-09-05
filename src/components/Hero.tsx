import React from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo, recruiterHighlights } from '../data/portfolioData';

interface HeroProps {
  isTechMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isTechMode }) => {
  return (
    <section className="pt-28 pb-14 sm:pt-40 sm:pb-20 border-b border-[#E6E0D6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#D8D0C5] text-[11px] sm:text-xs font-medium text-[#5C554E] mb-5 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#5A6B52]"></span>
          <span className="text-[#211E1C] font-semibold">{personalInfo.statusBadge}</span>
          <span className="text-[#D8D0C5]">|</span>
          <span className="text-[#BA5C44]">Kolkata, India</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-editorial font-medium text-[#211E1C] tracking-tight leading-[1.2] max-w-4xl">
          Hi, I'm {personalInfo.name} — <br />
          <span className="italic text-[#BA5C44]">building practical AI</span> that solves real-world problems.
        </h1>

        {/* Narrative */}
        <div className="mt-5 sm:mt-6 max-w-3xl space-y-2.5 sm:space-y-3">
          <p className="text-sm sm:text-lg text-[#3E3A36] leading-relaxed">
            {isTechMode ? (
              <span>
                Computer Science (AIML) undergraduate at <strong className="text-[#211E1C]">RCCIIT Kolkata</strong> (8.13 CGPA). Experienced in building clinical computer vision pipelines (<strong className="text-[#211E1C]">YOLOv8</strong>), RAG architectures (<strong className="text-[#211E1C]">ChromaDB</strong>), and multi-source NLP ensembles (<strong className="text-[#211E1C]">RoBERTa</strong>).
              </span>
            ) : (
              <span>
                I build clean, intelligent software that takes complex human tasks — like reading messy handwritten doctor prescriptions or verifying online news in real time — and solves them reliably with artificial intelligence.
              </span>
            )}
          </p>

          <p className="text-xs sm:text-base text-[#6E675F] leading-relaxed">
            Interned at the <strong className="text-[#211E1C]">Centre of Excellence on Data Science and Machine Learning</strong>. Author of a research paper on clinical transcription auditing submitted to the <strong className="text-[#211E1C]">National Conference on e-Governance</strong>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-6">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#BA5C44] hover:bg-[#9B452F] transition-all shadow-xs active:scale-[0.98]"
          >
            Explore Live Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#211E1C] bg-[#FFFFFF] hover:bg-[#F3EFEA] border border-[#D8D0C5] transition-all shadow-2xs active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-[#BA5C44]" />
            Try Interactive AI Demo
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Mayank_Shah_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#5C554E] hover:text-[#211E1C] transition-colors"
          >
            <Download className="w-4 h-4 text-[#BA5C44]" />
            Resume (PDF)
          </a>
        </div>

        {/* Recruiter 3-Pillar Zen Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-10 sm:mt-12 pt-8 border-t border-[#E6E0D6]">
          {recruiterHighlights.map((card, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-2xs border border-[#E6E0D6] japandi-card-hover space-y-1.5 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F3EFEA] text-[#BA5C44]">
                  {card.tag}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#5A6B52]"></span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-[#211E1C]">{card.title}</h2>
              <p className="text-xs text-[#6E675F] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-3.5">
          {personalInfo.stats.map((stat) => (
            <div key={stat.label} className="p-3.5 sm:p-4 rounded-xl bg-[#FFFFFF]/80 border border-[#E6E0D6]">
              <div className="text-xl sm:text-3xl font-bold font-mono text-[#211E1C]">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-[#BA5C44] mt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#8A8177]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
