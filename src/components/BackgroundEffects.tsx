import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  // Generate random positions for particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }));

  const cubes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    rotation: Math.random() * 360,
    duration: Math.random() * 30 + 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-300/10 dark:to-purple-300/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Cubes */}
      {cubes.map((cube) => (
        <motion.div
          key={cube.id}
          className="absolute border border-blue-200/30 dark:border-blue-400/20"
          style={{
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            transform: `rotate(${cube.rotation}deg)`,
          }}
          animate={{
            rotate: [cube.rotation, cube.rotation + 360],
            y: [-30, 30, -30],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(147, 197, 253, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Vector Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.05]">
        <defs>
          <pattern id="vector-lines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0,100 Q50,50 100,100 T200,100" stroke="url(#gradient)" strokeWidth="1" fill="none" />
            <path d="M100,0 Q150,50 100,100 T100,200" stroke="url(#gradient)" strokeWidth="1" fill="none" />
          </pattern>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#vector-lines)" />
      </svg>
    </div>
  );
};

export default BackgroundEffects;