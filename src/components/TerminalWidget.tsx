import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';
import { personalInfo, projectsData, skillsData } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'whoami',
      response: (
        <div className="space-y-1 text-slate-300">
          <div><span className="text-emerald-400 font-semibold">{personalInfo.name}</span> — {personalInfo.role}</div>
          <div className="text-slate-400 text-xs">{personalInfo.tagline}</div>
          <div className="text-slate-400 text-xs">🎓 B.Tech CSE (AIML) @ RCCIIT • CGPA: 8.13</div>
        </div>
      ),
    },
    {
      command: 'status',
      response: (
        <div className="flex items-center gap-2 text-emerald-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Ready to ship high-impact ML models, RAG pipelines & resilient APIs.
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-indigo-400 font-semibold">Available commands:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1 text-slate-400">
              <div><span className="text-emerald-400 font-mono">projects</span> - View production projects</div>
              <div><span className="text-emerald-400 font-mono">skills</span> - List verified tech stack</div>
              <div><span className="text-emerald-400 font-mono">experience</span> - Show internship experience</div>
              <div><span className="text-emerald-400 font-mono">contact</span> - Show email & socials</div>
              <div><span className="text-emerald-400 font-mono">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs">
            <div className="text-indigo-400 font-semibold">Hosted Production Projects:</div>
            {projectsData.map((p, idx) => (
              <div key={p.id} className="border-l-2 border-indigo-500/50 pl-2 text-slate-300">
                <div className="font-semibold text-slate-200">{idx + 1}. {p.title}</div>
                <div className="text-slate-400 text-[11px]">{p.description}</div>
                <div className="text-emerald-400 text-[11px] font-mono mt-0.5">Stack: {p.stack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1 text-xs">
            <div className="text-indigo-400 font-semibold">Verified Technical Stack:</div>
            {skillsData.map((cat) => (
              <div key={cat.title} className="text-slate-300">
                <span className="text-slate-400 font-medium">{cat.title}:</span>{' '}
                <span className="text-emerald-300 font-mono">{cat.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-indigo-400 font-semibold">Experience & Research:</div>
            <div className="text-slate-200 font-medium">Data Science & Engineering Intern @ Centre of Excellence on DS & ML</div>
            <div className="text-slate-400 text-[11px]">March 2026 – June 2026 | Kolkata, India</div>
            <div className="text-purple-300 text-[11px]">📄 Research Paper on Clinical Prescription Auditing submitted to National Conference on e-Governance.</div>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-indigo-400 font-semibold">Contact Coordinates:</div>
            <div>📧 Email: <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 underline">{personalInfo.email}</a></div>
            <div>📞 Phone: <span className="text-slate-200">{personalInfo.phone}</span></div>
            <div>🐙 GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-indigo-400 underline">github.com/Deathleio</a></div>
            <div>💼 LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-indigo-400 underline">linkedin.com/in/mayank-shah-b23969283</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = (
          <div className="text-xs text-rose-400">
            Command not recognized: '{trimmed}'. Type <span className="font-mono text-indigo-400 font-bold">help</span> to see available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, response }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickPills = ['help', 'projects', 'skills', 'experience', 'contact', 'clear'];

  return (
    <div className="w-full bg-slate-950/90 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/20 backdrop-blur-xl">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
            mayank@aiml-workstation:~
          </span>
        </div>
        <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Interactive CLI</div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-xs max-h-72 sm:max-h-80 overflow-y-auto space-y-3 custom-scroll">
        {history.map((item, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-indigo-400 font-bold">mayank@aiml:~$</span>
              <span className="text-emerald-400 font-semibold">{item.command}</span>
            </div>
            <div className="pl-4">{item.response}</div>
          </div>
        ))}

        {/* Active Command Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-indigo-400 font-bold">mayank@aiml:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'projects' or 'skills'..."
            className="flex-1 bg-transparent text-emerald-300 focus:outline-none placeholder-slate-600 text-xs font-mono"
            autoFocus={false}
          />
          <button type="submit" className="text-slate-500 hover:text-indigo-400 transition-colors p-1" title="Execute Command">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Suggestion Pills */}
      <div className="px-4 py-2.5 bg-slate-900/50 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-slate-500 font-sans flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-indigo-400" /> Quick queries:
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill}
            type="button"
            onClick={() => handleCommand(pill)}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 hover:bg-indigo-600/30 text-slate-300 hover:text-indigo-300 border border-slate-700 hover:border-indigo-500/50 transition-all"
          >
            {pill}
          </button>
        ))}
      </div>
    </div>
  );
};
