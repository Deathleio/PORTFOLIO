import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isTechMode, setIsTechMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#211E1C] font-sans-clean">
      {/* Sticky Header with Audience View Switcher */}
      <Navbar isTechMode={isTechMode} setIsTechMode={setIsTechMode} />

      {/* Main Sections */}
      <main>
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
