import React from 'react';

export const BackgroundGradients: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Center Glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] rounded-full" />
      
      {/* Top Right Cyan Glow */}
      <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* Mid Left Blue Glow */}
      <div className="absolute top-[45%] -left-[15%] w-[700px] h-[700px] bg-blue-700/10 blur-[160px] rounded-full" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]" />

      {/* Radial Gradient Mask for Subtlety */}
      <div className="absolute inset-0 bg-[#030712]/60 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,#030712_100%)]" />
    </div>
  );
};
