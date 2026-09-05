import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Play, RefreshCw, Shield, Scan, Database } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectShowcaseProps {
  isTechMode: boolean;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ isTechMode }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSimulations, setActiveSimulations] = useState<Record<string, { step: number; isRunning: boolean; isComplete: boolean }>>({
    'ai-prescription-reader': { step: 0, isRunning: false, isComplete: false },
    'veritas-ai': { step: 0, isRunning: false, isComplete: false },
  });

  const currentProject = projectsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

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
    }, 750);
  };

  const getStepIcon = (iconType: string, isCurrent: boolean, isDone: boolean) => {
    const className = `w-3.5 h-3.5 ${
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

  const sim = activeSimulations[currentProject.id] || { step: 0, isRunning: false, isComplete: false };

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[#E6E0D6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF]/90 text-[#BA5C44] border border-[#D8D0C5] mb-2 shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              Interactive Project Slider
            </div>
            <h2 className="text-2xl sm:text-4xl font-editorial font-medium text-[#211E1C] tracking-tight">
              Featured Systems
            </h2>
          </div>

          {/* Slider Arrows & Indicators */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-[#FFFFFF]/90 rounded-2xl border border-[#D8D0C5] shadow-2xs">
              {projectsData.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'bg-[#BA5C44] text-[#FFFFFF] shadow-xs'
                      : 'text-[#6E675F] hover:text-[#211E1C]'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-[#FFFFFF]/90 hover:bg-[#F3EFEA] border border-[#D8D0C5] text-[#211E1C] transition-all shadow-2xs cursor-pointer active:scale-95"
                title="Previous project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-[#FFFFFF]/90 hover:bg-[#F3EFEA] border border-[#D8D0C5] text-[#211E1C] transition-all shadow-2xs cursor-pointer active:scale-95"
                title="Next project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Project Slide Card */}
        <div className="bg-[#FFFFFF]/95 backdrop-blur-xs border border-[#E6E0D6] rounded-3xl overflow-hidden shadow-sm transition-all duration-300">
          
          {/* Browser-style Top Bar */}
          <div className="px-5 py-3.5 bg-[#FAF8F5] border-b border-[#E6E0D6] flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D8D0C5]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#D8D0C5]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#D8D0C5]"></div>
              <div className="ml-2 px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E6E0D6] text-[11px] font-mono text-[#5C554E] max-w-[170px] sm:max-w-xs truncate">
                {currentProject.liveUrl}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#5A6B52]/10 text-[#5A6B52] border border-[#5A6B52]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A6B52] animate-pulse"></span>
                Live on Vercel
              </span>
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-[#6E675F] hover:text-[#BA5C44] transition-colors"
                title="Open live app"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project Body */}
          <div className="p-5 sm:p-7 space-y-5">
            
            {/* Title & Core Badges */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <div className="text-xs font-mono font-semibold text-[#BA5C44] uppercase tracking-wider mb-1">
                  Project 0{currentIndex + 1} of 0{projectsData.length} • {currentProject.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#211E1C] tracking-tight">
                  {currentProject.title}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-[#5A6B52] mt-0.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentProject.highlight}
                </div>
              </div>

              <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#FAF8F5] text-[#211E1C] border border-[#D8D0C5] shrink-0 self-start">
                {currentProject.metrics}
              </span>
            </div>

            {/* Concise Value Statement */}
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6] flex items-start gap-2.5 text-xs sm:text-sm text-[#3E3A36] leading-relaxed">
              <span className="font-bold text-[#BA5C44] shrink-0">⚡ Core Build:</span>
              <span>{isTechMode ? currentProject.technicalExplanation : currentProject.simpleExplanation}</span>
            </div>

            {/* Impact Pill */}
            <div className="p-3 rounded-xl bg-[#5A6B52]/10 border border-[#5A6B52]/20 text-xs text-[#354331] flex items-center gap-2">
              <span className="font-bold text-[#5A6B52]">🎯 Impact:</span>
              <span className="truncate">{currentProject.realWorldImpact}</span>
            </div>

            {/* Dynamic AI Execution Stepper */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5]/80 border border-[#E6E0D6] space-y-3">
              <div className="flex items-center justify-between border-b border-[#E6E0D6] pb-2.5">
                <div className="text-xs font-bold text-[#211E1C] flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${sim.isComplete ? 'bg-[#5A6B52]' : sim.isRunning ? 'bg-[#BA5C44] animate-ping' : 'bg-[#D8D0C5]'}`}></span>
                  <span>Pipeline Execution Flow</span>
                </div>

                <button
                  onClick={() => handleRunSimulation(currentProject.id)}
                  disabled={sim.isRunning}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#FFFFFF] shadow-xs transition-all active:scale-[0.98] ${
                    sim.isRunning
                      ? 'bg-[#8A8177] cursor-not-allowed opacity-80'
                      : 'bg-[#BA5C44] hover:bg-[#9B452F] cursor-pointer'
                  }`}
                >
                  {sim.isRunning ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      Run Live Simulation
                    </>
                  )}
                </button>
              </div>

              {/* 4-Step Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {currentProject.simulationSteps.map((step, idx) => {
                  const isCurrent = sim.isRunning && sim.step === idx;
                  const isDone = sim.isComplete || (sim.isRunning && sim.step > idx);

                  return (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border transition-all ${
                        isCurrent
                          ? 'bg-[#FFFFFF] border-[#BA5C44] shadow-xs'
                          : isDone
                          ? 'bg-[#FFFFFF]/90 border-[#5A6B52]/40'
                          : 'bg-[#FFFFFF]/60 border-[#E6E0D6] opacity-75'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-mono text-[#8A8177]">0{idx + 1}</span>
                        {getStepIcon(step.iconType, isCurrent, isDone)}
                      </div>
                      <div className={`text-[11px] font-bold truncate ${isCurrent ? 'text-[#BA5C44]' : 'text-[#211E1C]'}`}>
                        {step.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-bold text-[#8A8177] uppercase tracking-wider mr-1">Stack:</span>
              {currentProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#FAF8F5] text-[#211E1C] border border-[#D8D0C5]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-3.5 border-t border-[#E6E0D6] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(currentProject)}
                className="text-xs font-semibold text-[#BA5C44] hover:text-[#9B452F] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                Deep-Dive Architecture
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2.5">
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#211E1C] bg-[#FAF8F5] hover:bg-[#EFEAE2] border border-[#D8D0C5] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                )}
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
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

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
