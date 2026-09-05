import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#211E1C]/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#D8D0C5] rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E6E0D6] bg-[#FAF8F5] flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-[#BA5C44]/10 text-[#BA5C44] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {project.badge}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#211E1C]">{project.title}</h2>
            <p className="text-xs sm:text-sm text-[#6E675F] mt-1">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#FFFFFF] border border-[#D8D0C5] text-[#5C554E] hover:text-[#211E1C] transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          <div>
            <h3 className="text-[11px] font-bold text-[#8A8177] uppercase tracking-wider mb-2">Plain-English Summary</h3>
            <p className="text-xs sm:text-sm text-[#3E3A36] leading-relaxed bg-[#FAF8F5] p-4 rounded-2xl border border-[#E6E0D6]">
              {project.simpleExplanation}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-[#8A8177] uppercase tracking-wider mb-2">Technical Implementation</h3>
            <p className="text-xs sm:text-sm text-[#3E3A36] leading-relaxed bg-[#FAF8F5] p-4 rounded-2xl border border-[#E6E0D6]">
              {project.technicalExplanation}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-[#8A8177] uppercase tracking-wider mb-3">Technical Challenges & Solutions</h3>
            <div className="space-y-3">
              {project.technicalChallenges.map((tc, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6] space-y-2 text-xs">
                  <div className="flex items-start gap-2 font-semibold text-[#BA5C44]">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Challenge: {tc.challenge}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#3E3A36] pt-2 border-t border-[#E6E0D6]">
                    <Lightbulb className="w-4 h-4 text-[#5A6B52] shrink-0 mt-0.5" />
                    <span>Solution: {tc.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-[#8A8177] uppercase tracking-wider mb-3">Core Deliverables</h3>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3E3A36] bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E6E0D6]">
                  <CheckCircle2 className="w-4 h-4 text-[#5A6B52] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-[#8A8177] uppercase tracking-wider mb-2">Verified Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#FAF8F5] text-[#211E1C] border border-[#D8D0C5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E6E0D6] bg-[#FAF8F5] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#5C554E] hover:text-[#211E1C] bg-[#FFFFFF] border border-[#D8D0C5] transition-colors cursor-pointer"
          >
            Close
          </button>
          
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[#211E1C] bg-[#FFFFFF] hover:bg-[#FAF8F5] border border-[#D8D0C5] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#FFFFFF] bg-[#BA5C44] hover:bg-[#9B452F] transition-all shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Launch Live App
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
