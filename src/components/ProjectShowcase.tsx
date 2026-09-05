import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, AlertTriangle, Lightbulb, Sparkles, Play, RefreshCw, Shield, Scan, Database } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectShowcaseProps {
  isTechMode: boolean;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ isTechMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSimulations, setActiveSimulations] = useState<Record<string, { step: number; isRunning: boolean; isComplete: boolean }>>({
    'ai-prescription-reader': { step: 0, isRunning: false, isComplete: false },
    'veritas-ai': { step: 0, isRunning: false, isComplete: false },
  });

  const handleRunSimulation = (projectId: string) => {
    setActiveSimulations((prev) => ({
      ...prev,
      [projectId]: { step: 0, isRunning: true, isComplete: false },
    }));

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < 4) {
        setActiveSimulations((prev) => ({
          ...prev,
          [projectId]: { step, isRunning: true, isComplete: false },
        }));
      } else {
        clearInterval(interval);
        setActiveSimulations((prev) => ({
          ...prev,
          [projectId]: { step: 3, isRunning: false, isComplete: true },
        }));
      }
    }, 850);
  };

  const getStepIcon = (iconType: string, isCurrent: boolean, isDone: boolean) => {
    const className = `w-3.5 h-3.5 sm:w-4 sm:h-4 ${
      isCurrent ? 'text-[#BA5C44] animate-pulse' : isDone ? 'text-[#5A6B52]' : 'text-[#8A8177]'
    }`;
    switch (iconType) {
      case 'shield':
        return <Shield className={className} />;
      case 'scan':
        return <Scan className={className} />;
      case 'database':
        return <Database className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-[#E6E0D6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF]/90 text-[#BA5C44] border border-[#D8D0C5] mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              Featured Production Systems
            </div>
            <h2 className="text-2xl sm:text-4xl font-editorial font-medium text-[#211E1C] tracking-tight">
              Hosted Flagship Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#6E675F] mt-1 max-w-xl">
              {isTechMode
                ? 'Deep learning, multimodal vision, and NLP architectures with sub-second API inference.'
                : 'Real applications solving critical problems in healthcare transcription and misinformation verification.'}
            </p>
          </div>

          <div className="text-xs text-[#5C554E] bg-[#FFFFFF]/90 border border-[#D8D0C5] rounded-xl p-3 shadow-2xs">
            <div className="font-bold text-[#5A6B52] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#5A6B52] animate-pulse"></span>
              2 Verified Live Applications
            </div>
            <div className="text-[#8A8177] mt-0.5">Deployed to Vercel with cloud backend APIs</div>
          </div>
        </div>

        {/* Projects List (Rendered ONCE) */}
        <div className="space-y-12">
          {projectsData.map((project) => {
            const sim = activeSimulations[project.id] || { step: 0, isRunning: false, isComplete: false };

            return (
              <div
                key={project.id}
                className="bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#E6E0D6] rounded-3xl overflow-hidden japandi-card-hover shadow-xs"
              >
                {/* Browser-style Top Bar */}
                <div className="px-5 py-3.5 bg-[#FAF8F5] border-b border-[#E6E0D6] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D8D0C5]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D8D0C5]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D8D0C5]"></div>
                    <div className="ml-2 px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E6E0D6] text-[11px] font-mono text-[#5C554E] max-w-[150px] sm:max-w-xs truncate">
                      {project.liveUrl}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#5A6B52]/10 text-[#5A6B52] border border-[#5A6B52]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5A6B52] animate-pulse"></span>
                      Live on Vercel
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-[#6E675F] hover:text-[#BA5C44] transition-colors"
                      title="Open live website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Project Card Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Header Title & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#211E1C] tracking-tight">
                        {project.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-medium text-[#BA5C44] mt-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        {project.highlight}
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#FAF8F5] text-[#211E1C] border border-[#D8D0C5] shrink-0">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Explanation: Simple vs Technical */}
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6] space-y-1.5">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#BA5C44]">
                      {isTechMode ? 'Technical Architecture' : 'What this solves (Plain English)'}
                    </div>
                    <p className="text-xs sm:text-sm text-[#3E3A36] leading-relaxed">
                      {isTechMode ? project.technicalExplanation : project.simpleExplanation}
                    </p>
                  </div>

                  {/* Real-World Impact Callout */}
                  <div className="p-3.5 rounded-xl bg-[#5A6B52]/10 border border-[#5A6B52]/20 text-xs text-[#354331] flex items-start gap-2.5">
                    <span className="font-bold text-[#5A6B52] shrink-0">🎯 Real-World Impact:</span>
                    <span className="leading-relaxed">{project.realWorldImpact}</span>
                  </div>

                  {/* Interactive Live Simulation Sandbox */}
                  <div className="p-5 rounded-2xl bg-[#FAF8F5]/80 border border-[#E6E0D6] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E0D6] pb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#BA5C44]">
                          Interactive AI Sandbox
                        </span>
                        <div className="text-xs font-bold text-[#211E1C] mt-0.5">
                          Step-by-step neural network execution simulator
                        </div>
                      </div>

                      <button
                        onClick={() => handleRunSimulation(project.id)}
                        disabled={sim.isRunning}
                        className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#FFFFFF] shadow-xs transition-all active:scale-[0.98] ${
                          sim.isRunning
                            ? 'bg-[#8A8177] cursor-not-allowed opacity-80'
                            : 'bg-[#BA5C44] hover:bg-[#9B452F] cursor-pointer'
                        }`}
                      >
                        {sim.isRunning ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            Running Simulation...
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            Test Live Pipeline
                          </>
                        )}
                      </button>
                    </div>

                    {/* Stepper Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {project.simulationSteps.map((step, idx) => {
                        const isCurrent = sim.isRunning && sim.step === idx;
                        const isDone = sim.isComplete || (sim.isRunning && sim.step > idx);

                        return (
                          <div
                            key={idx}
                            className={`p-3.5 rounded-2xl border transition-all ${
                              isCurrent
                                ? 'bg-[#FFFFFF] border-[#BA5C44] shadow-xs'
                                : isDone
                                ? 'bg-[#FFFFFF]/90 border-[#5A6B52]/40'
                                : 'bg-[#FFFFFF]/60 border-[#E6E0D6] opacity-75'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] font-mono text-[#8A8177]">
                                0{idx + 1}
                              </span>
                              <div className="p-1 rounded-lg bg-[#FAF8F5] border border-[#E6E0D6]">
                                {getStepIcon(step.iconType, isCurrent, isDone)}
                              </div>
                            </div>
                            <div className={`text-xs font-bold ${isCurrent ? 'text-[#BA5C44]' : 'text-[#211E1C]'}`}>
                              {step.title}
                            </div>
                            <p className="text-[11px] text-[#6E675F] mt-0.5 leading-relaxed">
                              {step.detail}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Simulation Result Badge */}
                    <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E6E0D6] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${sim.isComplete ? 'bg-[#5A6B52]' : sim.isRunning ? 'bg-[#BA5C44] animate-ping' : 'bg-[#D8D0C5]'}`}></span>
                        <span className="text-[#211E1C] font-semibold text-[11px] sm:text-xs">
                          {sim.isComplete ? '✓ Pipeline Verification: Completed & Passed' : sim.isRunning ? 'Executing Neural Network & RAG Lookup...' : 'Click "Test Live Pipeline" to simulate this AI model'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8A8177] hidden sm:inline">
                        {project.hostedOn}
                      </span>
                    </div>
                  </div>

                  {/* Technical Challenges (If in Tech Mode) */}
                  {isTechMode ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {project.technicalChallenges.map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E6E0D6] space-y-2 text-xs">
                          <div className="flex items-start gap-2 font-semibold text-[#BA5C44]">
                            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>Challenge: {item.challenge}</span>
                          </div>
                          <div className="flex items-start gap-2 text-[#3E3A36] pt-2 border-t border-[#E6E0D6]">
                            <Lightbulb className="w-4 h-4 text-[#5A6B52] shrink-0 mt-0.5" />
                            <span>Solution: {item.solution}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#3E3A36] bg-[#FAF8F5]/60 p-2.5 rounded-xl border border-[#E6E0D6]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5A6B52] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div>
                    <div className="text-[11px] font-semibold text-[#8A8177] uppercase tracking-wider mb-2">
                      Technology Stack
                    </div>
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

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-[#E6E0D6] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-[#BA5C44] hover:text-[#9B452F] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Deep-Dive Architecture Breakdown
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[#211E1C] bg-[#FAF8F5] hover:bg-[#EFEAE2] border border-[#D8D0C5] transition-colors"
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
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
