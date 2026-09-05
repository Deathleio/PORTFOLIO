import React from 'react';
import { Cpu, Code2, Brain, Globe, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Core Languages':
        return <Code2 className="w-4 h-4 text-[#BA5C44]" />;
      case 'AI, ML & Vision':
        return <Cpu className="w-4 h-4 text-[#5A6B52]" />;
      case 'GenAI, RAG & NLP':
        return <Brain className="w-4 h-4 text-[#C98E38]" />;
      case 'Web & Frameworks':
        return <Globe className="w-4 h-4 text-[#4A7C7A]" />;
      case 'Tools & Cloud':
        return <Wrench className="w-4 h-4 text-[#5C554E]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#BA5C44]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-[#E6E0D6] bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF] text-[#5A6B52] border border-[#D8D0C5] mb-3 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5A6B52]" />
            Verified Tooling
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-medium text-[#211E1C] tracking-tight">
            Technical Competencies
          </h2>
          <p className="text-xs sm:text-sm text-[#6E675F] mt-1 max-w-xl">
            Technologies and frameworks applied in production deployments and research.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E6E0D6] japandi-card-hover flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E6E0D6]">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#211E1C]">{category.title}</h3>
                    <div className="text-[11px] text-[#8A8177]">{category.description}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#FAF8F5] text-[#211E1C] border border-[#E6E0D6]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E6E0D6] text-[10px] font-mono text-[#8A8177]">
                {category.skills.length} verified technologies
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
