import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, AlertTriangle, Lightbulb, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            Featured Work
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Production-Deployed Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
            Real systems deployed to the cloud, featuring deep-learning pipelines, multimodal vision, vector search, and clean web architectures.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors shadow-sm"
            >
              {/* Browser-style Top Bar */}
              <div className="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="ml-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 max-w-xs truncate">
                    {project.liveUrl}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live on Vercel
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-zinc-400 hover:text-zinc-100 transition-colors"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Header Title & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
                      {project.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-indigo-400 mt-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {project.highlight}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-zinc-800 text-zinc-200 border border-zinc-700">
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technical Architecture Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {project.technicalChallenges.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/90 space-y-2.5">
                      <div className="flex items-start gap-2 text-xs font-semibold text-amber-300">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>Challenge: {item.challenge}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-zinc-300 pt-2 border-t border-zinc-800/80">
                        <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Solution: {item.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Highlights */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Key Engineering Capabilities</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300 bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-800/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Technologies Used</div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-950 text-zinc-300 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 transition-colors"
                  >
                    View Complete Architecture Breakdown
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-colors"
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-900 bg-zinc-100 hover:bg-white transition-all shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-900" />
                        Launch Live App
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
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
