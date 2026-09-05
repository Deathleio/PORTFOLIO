import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, FileText } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                Work History
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                Experience & Research
              </h2>
            </div>

            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-7 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">{exp.role}</h3>
                    <div className="text-sm font-semibold text-indigo-400">{exp.company}</div>
                  </div>
                  <div className="text-xs text-zinc-400 space-y-1 sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Research Note */}
                {exp.researchNote && (
                  <div className="p-3.5 rounded-xl bg-zinc-950 border border-indigo-500/30 flex items-start gap-3 text-xs text-indigo-200">
                    <FileText className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{exp.researchNote}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                Education
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                Academic Background
              </h2>
            </div>

            {/* College Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-zinc-100">{educationData.degree}</h3>
                  <div className="text-sm text-zinc-300 font-medium mt-0.5">{educationData.institution}</div>
                  <div className="text-xs text-zinc-400 mt-1">{educationData.location} • {educationData.period}</div>
                </div>
                <div className="px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-center shrink-0">
                  <div className="text-base font-mono font-bold text-zinc-100">{educationData.cgpa}</div>
                  <div className="text-[10px] text-zinc-400 uppercase font-semibold">CGPA</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs space-y-1">
                <div className="text-zinc-400 font-medium">Department & Specialization:</div>
                <div className="text-zinc-200 font-mono">{educationData.field}</div>
              </div>
            </div>

            {/* Recognition Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-3">
              <div className="text-sm font-bold text-zinc-200 flex items-center gap-2">
                <span>Key Milestones</span>
              </div>
              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <strong className="text-zinc-100 block mb-1">National Conference on e-Governance</strong>
                  <span className="text-zinc-400 leading-relaxed">
                    Submitted and presented research on automated dual-layer prescription auditing and clinical compliance.
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <strong className="text-zinc-100 block mb-1">Academic Standing</strong>
                  <span className="text-zinc-400 leading-relaxed">
                    Maintained 8.13 CGPA across all semesters with zero active or historic backlogs.
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
