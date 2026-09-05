import React, { useState } from 'react';
import { Play, Sparkles, Shield, Scan, Database, CheckCircle2, ExternalLink, RefreshCw } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const InteractiveSimulator: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('ai-prescription-reader');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [simulationComplete, setSimulationComplete] = useState<boolean>(false);

  const currentProject = projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

  const runSimulation = () => {
    setIsRunning(true);
    setSimulationComplete(false);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < 4) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setSimulationComplete(true);
        setActiveStep(3);
      }
    }, 900);
  };

  const getStepIcon = (iconType: string, isCurrent: boolean, isDone: boolean) => {
    const className = `w-4 h-4 ${
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
    <section id="demo" className="py-20 sm:py-28 border-b border-[#E6E0D6] bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF] text-[#BA5C44] border border-[#D8D0C5] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#BA5C44]" />
            Interactive Visual Simulator
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-medium text-[#211E1C] tracking-tight">
            See the AI in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#6E675F] mt-2">
            Experience how Mayank's production models process real-world data step-by-step.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#EFEAE2] border border-[#D8D0C5]">
            {projectsData.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProjectId(project.id);
                  setActiveStep(0);
                  setSimulationComplete(false);
                  setIsRunning(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedProjectId === project.id
                    ? 'bg-[#FFFFFF] text-[#211E1C] shadow-xs'
                    : 'text-[#6E675F] hover:text-[#211E1C]'
                }`}
              >
                {project.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Simulation Sandbox Card */}
        <div className="bg-[#FFFFFF] border border-[#E6E0D6] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E0D6] pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#BA5C44] bg-[#F3EFEA] px-2 py-0.5 rounded">
                Live Simulation Mode
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#211E1C] mt-1">
                {currentProject.title}
              </h3>
              <p className="text-xs text-[#6E675F] mt-0.5 max-w-xl">
                {currentProject.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#FFFFFF] shadow-xs transition-all ${
                  isRunning
                    ? 'bg-[#8A8177] cursor-not-allowed opacity-80'
                    : 'bg-[#BA5C44] hover:bg-[#9B452F] cursor-pointer'
                }`}
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Run Pipeline
                  </>
                )}
              </button>

              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#211E1C] bg-[#FAF8F5] hover:bg-[#EFEAE2] border border-[#D8D0C5] transition-all"
              >
                Launch App
                <ExternalLink className="w-3 h-3 text-[#6E675F]" />
              </a>
            </div>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {currentProject.simulationSteps.map((step, idx) => {
              const isCurrent = isRunning && activeStep === idx;
              const isDone = simulationComplete || (isRunning && activeStep > idx);

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    isCurrent
                      ? 'bg-[#FAF8F5] border-[#BA5C44] shadow-xs'
                      : isDone
                      ? 'bg-[#FAF8F5]/80 border-[#5A6B52]/40'
                      : 'bg-[#FFFFFF] border-[#E6E0D6] opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#8A8177]">
                      0{idx + 1}
                    </span>
                    <div className="p-1.5 rounded-lg bg-[#FFFFFF] border border-[#E6E0D6]">
                      {getStepIcon(step.iconType, isCurrent, isDone)}
                    </div>
                  </div>
                  <div className={`text-xs font-bold ${isCurrent ? 'text-[#BA5C44]' : 'text-[#211E1C]'}`}>
                    {step.title}
                  </div>
                  <p className="text-[11px] text-[#6E675F] mt-1 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Simulated Real-Time Output Inspection Box */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#211E1C] flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${simulationComplete ? 'bg-[#5A6B52]' : isRunning ? 'bg-[#BA5C44] animate-ping' : 'bg-[#D8D0C5]'}`}></span>
                {simulationComplete ? '✓ Pipeline Execution Result (Verified)' : isRunning ? '⚡ Executing Neural Network & API Calls...' : 'Sample Inspection Result'}
              </span>
              <span className="text-[11px] font-mono text-[#8A8177]">
                {currentProject.hostedOn}
              </span>
            </div>

            {currentProject.id === 'ai-prescription-reader' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E6E0D6]">
                  <div className="text-[10px] uppercase font-semibold text-[#8A8177]">Patient Privacy Redacted</div>
                  <div className="font-mono font-bold text-[#5A6B52] mt-0.5">✓ Name & Signature Masked</div>
                  <div className="text-[10px] text-[#6E675F] mt-0.5">YOLOv8 91.4% mAP@50</div>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E6E0D6]">
                  <div className="text-[10px] uppercase font-semibold text-[#8A8177]">Detected Regimen</div>
                  <div className="font-mono font-bold text-[#211E1C] mt-0.5">Amoxicillin 500mg (TDS)</div>
                  <div className="text-[10px] text-[#6E675F] mt-0.5">ICD-10: J02.9 (Pharyngitis)</div>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E6E0D6]">
                  <div className="text-[10px] uppercase font-semibold text-[#8A8177]">100-Pt Audit Score</div>
                  <div className="font-mono font-bold text-[#BA5C44] mt-0.5">100 / 100 Compliant</div>
                  <div className="text-[10px] text-[#6E675F] mt-0.5">Zero Dosage Errors</div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E6E0D6]">
                  <div className="text-[10px] uppercase font-semibold text-[#8A8177]">Classification Confidence</div>
                  <div className="font-mono font-bold text-[#5A6B52] mt-0.5">97.49% Real Claim</div>
                  <div className="text-[10px] text-[#6E675F] mt-0.5">Stacking + RoBERTa</div>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E6E0D6]">
                  <div className="text-[10px] uppercase font-semibold text-[#8A8177]">Live Wikipedia Verification</div>
                  <div className="font-mono font-bold text-[#211E1C] mt-0.5">✓ Fact-Checked & Sourced</div>
                  <div className="text-[10px] text-[#6E675F] mt-0.5">Cross-referenced entity IDs</div>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E6E0D6]">
                  <div className="text-[10px] uppercase font-semibold text-[#8A8177]">Response Latency</div>
                  <div className="font-mono font-bold text-[#BA5C44] mt-0.5">&lt; 780ms Inference</div>
                  <div className="text-[10px] text-[#6E675F] mt-0.5">FastAPI on Render Cloud</div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
