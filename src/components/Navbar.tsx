import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  isTechMode: boolean;
  setIsTechMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isTechMode, setIsTechMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Interactive Demo', href: '#demo' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F5F0]/90 backdrop-blur-md border-b border-[#E6E0D6] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#211E1C] text-[#F8F5F0] flex items-center justify-center font-bold text-xs">
            MS
          </div>
          <div>
            <div className="text-base font-bold font-editorial text-[#211E1C] tracking-tight flex items-center gap-1.5">
              {personalInfo.name}
              <span className="w-2 h-2 rounded-full bg-[#BA5C44]"></span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#6E675F] hover:text-[#211E1C] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Audience Toggle & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Plain English vs Tech View Toggle */}
          <button
            onClick={() => setIsTechMode(!isTechMode)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium border border-[#D8D0C5] bg-[#FFFFFF] hover:bg-[#F3EFEA] text-[#211E1C] transition-all shadow-2xs"
            title="Toggle between recruiter-friendly and technical explanation"
          >
            <Sparkles className="w-3 h-3 text-[#BA5C44]" />
            <span>{isTechMode ? '⚙️ Tech Mode' : '🌱 Plain English'}</span>
          </button>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[#6E675F] hover:text-[#211E1C] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[#6E675F] hover:text-[#211E1C] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Mayank_Shah_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#FFFFFF] bg-[#BA5C44] hover:bg-[#9B452F] transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setIsTechMode(!isTechMode)}
            className="px-2.5 py-1 rounded-full text-[10px] font-medium border border-[#D8D0C5] bg-[#FFFFFF] text-[#211E1C]"
          >
            {isTechMode ? '⚙️ Tech' : '🌱 Plain'}
          </button>
          <a
            href={personalInfo.resumeUrl}
            download="Mayank_Shah_Resume.pdf"
            className="p-1.5 rounded-lg text-xs font-semibold text-white bg-[#BA5C44]"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#211E1C]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F8F5F0] border-b border-[#E6E0D6] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#211E1C] hover:bg-[#EAE4D8] rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-[#E6E0D6]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#FFFFFF] border border-[#D8D0C5] text-[#211E1C] rounded-lg text-xs font-medium"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#FFFFFF] border border-[#D8D0C5] text-[#211E1C] rounded-lg text-xs font-medium"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
