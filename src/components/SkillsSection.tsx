import React from 'react';
import { Cpu, Code2, Brain, Globe, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Core Languages':
        return <Code2 className="w-4 h-4 text-indigo-400" />;
      case 'AI, ML & Vision':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'GenAI, RAG & NLP':
        return <Brain className="w-4 h-4 text-purple-400" />;
      case 'Web & Frameworks':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'Tools & Cloud':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Skills & Tooling
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Technical Competencies
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
            Verified technologies and frameworks applied across machine learning, computer vision, data engineering, and web development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/60">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100">{category.title}</h3>
                    <div className="text-[11px] text-zinc-400">{category.description}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-950 text-zinc-300 border border-zinc-800/90"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/70 text-[10px] font-mono text-zinc-400">
                {category.skills.length} skills listed
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
