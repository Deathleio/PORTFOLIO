import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E6E0D6] bg-[#F8F5F0] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-center sm:text-left">
            <div className="text-base font-bold font-editorial text-[#211E1C]">{personalInfo.name}</div>
            <div className="text-xs text-[#6E675F] mt-0.5">B.Tech in CSE (AIML) • RCCIIT Kolkata</div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[#6E675F] hover:text-[#211E1C] hover:bg-[#FAF8F5] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[#6E675F] hover:text-[#211E1C] hover:bg-[#FAF8F5] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl text-[#6E675F] hover:text-[#211E1C] hover:bg-[#FAF8F5] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#5C554E] hover:text-[#211E1C] bg-[#FFFFFF] border border-[#D8D0C5] transition-colors shadow-2xs cursor-pointer"
            >
              Top
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#E6E0D6] text-center text-xs text-[#8A8177]">
          Designed with Japandi simplicity & recruiter clarity. &copy; {new Date().getFullYear()} Mayank Shah.
        </div>
      </div>
    </footer>
  );
};
