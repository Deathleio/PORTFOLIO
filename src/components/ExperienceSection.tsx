import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, FileText } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

interface ExperienceSectionProps {
  isTechMode: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isTechMode }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-[#E6E0D6] bg-[#F8F5F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF] text-[#BA5C44] border border-[#D8D0C5] mb-3 shadow-2xs">
                <Briefcase className="w-3.5 h-3.5 text-[#BA5C44]" />
                Industry Experience
              </div>
              <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-[#211E1C] tracking-tight">
                Experience & Research
              </h2>
            </div>

            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E6E0D6] rounded-3xl p-6 sm:p-7 space-y-5 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#E6E0D6] pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#211E1C]">{exp.role}</h3>
                    <div className="text-xs sm:text-sm font-semibold text-[#BA5C44] mt-0.5">{exp.company}</div>
                  </div>
                  <div className="text-xs text-[#8A8177] space-y-1 sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end text-[#5C554E]">
                      <Calendar className="w-3.5 h-3.5 text-[#BA5C44]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end text-[#8A8177]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Plain English vs Tech View */}
                {!isTechMode && (
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6] text-xs text-[#3E3A36] leading-relaxed">
                    <strong className="text-[#211E1C] block mb-0.5 font-semibold">Summary for Recruiters:</strong>
                    {exp.plainEnglishSummary}
                  </div>
                )}

                {/* Bullet Highlights */}
                <ul className="space-y-2.5 text-xs text-[#3E3A36]">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 bg-[#FAF8F5] p-3 rounded-xl border border-[#E6E0D6]">
                      <CheckCircle2 className="w-4 h-4 text-[#5A6B52] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Research Note */}
                {exp.researchNote && (
                  <div className="p-3.5 rounded-2xl bg-[#5A6B52]/10 border border-[#5A6B52]/20 flex items-start gap-2.5 text-xs text-[#354331]">
                    <FileText className="w-4 h-4 text-[#5A6B52] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{exp.researchNote}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Education & Honors */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF] text-[#5A6B52] border border-[#D8D0C5] mb-3 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#5A6B52]" />
                Education
              </div>
              <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-[#211E1C] tracking-tight">
                Academic Record
              </h2>
            </div>

            {/* College Card */}
            <div className="bg-[#FFFFFF] border border-[#E6E0D6] rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-[#211E1C]">{educationData.degree}</h3>
                  <div className="text-xs sm:text-sm text-[#5C554E] font-medium mt-0.5">{educationData.institution}</div>
                  <div className="text-xs text-[#8A8177] mt-1">{educationData.location} • {educationData.period}</div>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#D8D0C5] text-center shrink-0">
                  <div className="text-base font-mono font-bold text-[#BA5C44]">{educationData.cgpa}</div>
                  <div className="text-[10px] text-[#8A8177] uppercase font-semibold">CGPA</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6] text-xs space-y-1">
                <div className="text-[#8A8177] font-medium">Department:</div>
                <div className="text-[#211E1C] font-mono font-semibold">{educationData.field}</div>
              </div>
            </div>

            {/* Key Milestones Card */}
            <div className="bg-[#FFFFFF] border border-[#E6E0D6] rounded-3xl p-6 space-y-3 shadow-xs">
              <div className="text-sm font-bold text-[#211E1C]">
                Key Academic Honors
              </div>
              <div className="space-y-2.5 text-xs text-[#3E3A36]">
                <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                  <strong className="text-[#211E1C] block mb-0.5">National Conference on e-Governance</strong>
                  <span className="text-[#6E675F] leading-relaxed">
                    Submitted research paper on automated clinical prescription auditing and HIPAA compliance.
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                  <strong className="text-[#211E1C] block mb-0.5">Zero Backlogs Standing</strong>
                  <span className="text-[#6E675F] leading-relaxed">
                    Maintained consistent 8.13 CGPA standing across all completed semesters.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
