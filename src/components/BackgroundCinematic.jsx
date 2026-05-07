import React from 'react';

const BackgroundCinematic = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020203] overflow-hidden pointer-events-none">
      <style>{`
        @keyframes drift {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .anim-drift { animation: drift 20s ease-in-out infinite alternate; will-change: transform; }
        .anim-pulse { animation: pulse 10s ease-in-out infinite; will-change: opacity; }
        .nebula-1 { background: radial-gradient(circle at center, rgba(147, 51, 234, 0.08) 0%, transparent 70%); }
        .nebula-2 { background: radial-gradient(circle at center, rgba(79, 70, 229, 0.05) 0%, transparent 70%); }
      `}</style>

      {/* Static Galaxy Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0f051a_0%,#020203_80%)]" />

      {/* Large Optimized Nebulas (No Blur, uses Gradient instead) */}
      <div className="absolute -top-[20%] -left-[10%] w-[100%] h-[100%] nebula-1 anim-pulse" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[100%] h-[100%] nebula-2 anim-pulse" style={{ animationDelay: '-5s' }} />

      {/* Drift Layer (Single Container for Performance) */}
      <div className="absolute inset-0 anim-drift opacity-40">
        {[...Array(40)].map((_, i) => (
          <div 
            key={`star-${i}`}
            className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full"
            style={{ 
              top: `${(Math.sin(i) * 50 + 50).toFixed(2)}%`, 
              left: `${(Math.cos(i * i) * 50 + 50).toFixed(2)}%`,
              animation: `twinkle ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${-i}s`
            }}
          />
        ))}
      </div>

      {/* Clean Aesthetic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
    </div>
  );
};

export default BackgroundCinematic;