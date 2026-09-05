import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundZen } from './components/BackgroundZen';

export const App: React.FC = () => {
  const [isTechMode, setIsTechMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#211E1C] font-sans-clean relative selection:bg-[#BA5C44]/20 selection:text-[#BA5C44]">
      {/* Dynamic 60fps GPU Hardware-Accelerated Japandi Background */}
      <BackgroundZen />

      {/* Sticky Header with Audience View Switcher */}
      <Navbar isTechMode={isTechMode} setIsTechMode={setIsTechMode} />

      {/* Main Sections */}
      <main className="relative z-0">
        <Hero isTechMode={isTechMode} />
        <InteractiveSimulator />
        <ProjectShowcase isTechMode={isTechMode} />
        <SkillsSection />
        <ExperienceSection isTechMode={isTechMode} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
