import React from 'react';

export const BackgroundZen: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Subtle Japanese Minimalist Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#211E1C 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient Drifting Warm Orb 1 (Terracotta) */}
      <div 
        className="absolute -top-24 -left-24 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-3xl opacity-40 animate-zen-drift-1"
        style={{
          background: 'radial-gradient(circle, rgba(186, 92, 68, 0.22) 0%, rgba(186, 92, 68, 0.05) 50%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Ambient Drifting Warm Orb 2 (Matcha Olive) */}
      <div 
        className="absolute top-1/3 -right-28 w-80 sm:w-[550px] h-80 sm:h-[550px] rounded-full blur-3xl opacity-35 animate-zen-drift-2"
        style={{
          background: 'radial-gradient(circle, rgba(90, 107, 82, 0.20) 0%, rgba(90, 107, 82, 0.04) 50%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Ambient Drifting Warm Orb 3 (Warm Ochre / Sand) */}
      <div 
        className="absolute bottom-1/4 -left-20 w-72 sm:w-[450px] h-72 sm:h-[450px] rounded-full blur-3xl opacity-30 animate-zen-drift-3"
        style={{
          background: 'radial-gradient(circle, rgba(201, 142, 56, 0.18) 0%, rgba(201, 142, 56, 0.03) 50%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Subtle Noise / Paper grain simulation overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F5F0]/20 to-[#F8F5F0]/40" />
    </div>
  );
};
