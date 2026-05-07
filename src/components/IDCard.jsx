import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export const IDCard = ({ name, role, avatar, idNumber, className }) => {
  const cardRef = useRef(null);
  
  // Motion values for tilt position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics for high-end feel
  const springConfig = { damping: 30, stiffness: 200, mass: 1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Rotation logic: Aggressive 3D tilt
  const rotateX = useTransform(mouseY, [-200, 200], [35, -35]);
  const rotateY = useTransform(mouseX, [-200, 200], [-35, 35]);
  
  // Sheen/Dynamic Light logic (The "Blink" effect)
  const sheenX = useTransform(mouseX, [-200, 200], [-300, 300]);
  const sheenY = useTransform(mouseY, [-200, 200], [-300, 300]);
  const sheenOpacity = useTransform(
    [mouseX, mouseY],
    ([mx, my]) => Math.min(Math.abs(mx) / 80 + Math.abs(my) / 80, 0.7)
  );

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className={`relative perspective-[1800px] flex items-center justify-center ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-80 h-[480px] group transition-shadow duration-500"
      >
        {/* REAL 3D STACKED DEPTH - More layers for "Heavy" feel */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute inset-0 bg-zinc-800/90 border border-white/5 rounded-[2.5rem] pointer-events-none"
            style={{ transform: `translateZ(${-i * 1.2}px)` }}
          />
        ))}

        {/* MAIN CARD BODY */}
        <div 
          className="absolute inset-0 bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* PHOTO SECTION (Takes up almost the whole card, focused on top) */}
          <div className="absolute inset-0 z-0">
            <img 
              src={avatar} 
              className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out" 
              alt="Identity" 
            />
            {/* Dynamic Vignette that changes with tilt */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
          </div>

          {/* TEXT CONTENT (Floating on top) */}
          <div 
            className="absolute bottom-0 left-0 right-0 p-10 flex flex-col items-center pointer-events-none"
            style={{ transform: "translateZ(60px)" }}
          >
             <motion.div className="text-center">
                <h4 className="font-black text-white text-3xl tracking-tighter uppercase leading-none drop-shadow-2xl">
                  {name}
                </h4>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="h-[1px] w-8 bg-purple-500/50" />
                  <p className="text-[10px] text-purple-400 font-mono tracking-[0.6em] uppercase font-black italic">
                    {role}
                  </p>
                  <div className="h-[1px] w-8 bg-purple-500/50" />
                </div>
                <p className="text-[8px] text-zinc-500 font-mono tracking-[0.4em] uppercase mt-6 opacity-50">
                  ID: {idNumber}
                </p>
             </motion.div>
          </div>
          
          {/* HOLOGRAPHIC LIGHT BLINK (Top Layer) */}
          <motion.div 
            className="absolute inset-x-[-100%] inset-y-[-100%] bg-gradient-to-tr from-purple-500/40 via-white/50 to-purple-500/40 blur-3xl mix-blend-color-dodge pointer-events-none"
            style={{ 
              transform: "translateZ(80px)",
              translateX: sheenX,
              translateY: sheenY,
              opacity: sheenOpacity
            }}
          />

          {/* Glass Finish Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};