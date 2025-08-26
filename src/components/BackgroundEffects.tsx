import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  // Generate random positions for particles
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 5,
  }));

  const cubes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 15,
    rotation: Math.random() * 360,
    duration: Math.random() * 40 + 25,
    delay: Math.random() * 3,
  }));

  const dots = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 4,
  }));

  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent via-purple-50/20 to-cyan-50/30 dark:from-blue-900/15 dark:via-transparent dark:via-purple-900/10 dark:to-cyan-900/15"
      />
      
      {/* Large Floating Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/5 via-purple-400/8 to-cyan-400/5 dark:from-blue-300/3 dark:via-purple-300/5 dark:to-cyan-300/3 blur-xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
          }}
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 dark:from-blue-300/20 dark:to-purple-300/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Floating Cubes */}
      {cubes.map((cube) => (
        <motion.div
          key={`cube-${cube.id}`}
          className="absolute border border-blue-200/40 dark:border-blue-400/30 bg-gradient-to-br from-blue-100/10 to-purple-100/10 dark:from-blue-400/5 dark:to-purple-400/5 backdrop-blur-sm"
          style={{
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            transform: `rotate(${cube.rotation}deg)`,
          }}
          animate={{
            rotate: [cube.rotation, cube.rotation + 360, cube.rotation + 720],
            y: [-40, 40, -40],
            x: [-20, 20, -20],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            ease: "linear",
            delay: cube.delay,
          }}
        />
      ))}

      {/* Small Dots */}
      {dots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400/40 to-blue-400/40 dark:from-cyan-300/25 dark:to-blue-300/25"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Enhanced Grid Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated Dot Pattern */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.1]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(147, 197, 253, 0.4) 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Enhanced Vector Lines */}
      <motion.svg 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 1.5 }}
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.08]"
      >
        <defs>
          <pattern id="vector-lines" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
            <motion.path 
              d="M0,150 Q75,75 150,150 T300,150" 
              stroke="url(#gradient1)" 
              strokeWidth="2" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 2 }}
            />
            <motion.path 
              d="M150,0 Q225,75 150,150 T150,300" 
              stroke="url(#gradient2)" 
              strokeWidth="2" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 2.5 }}
            />
            <motion.circle 
              cx="150" 
              cy="150" 
              r="3" 
              fill="url(#gradient1)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 3 }}
            />
          </pattern>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#vector-lines)" />
      </motion.svg>

      {/* Space Effect - Twinkling Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white dark:bg-blue-200 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Flowing Lines */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent dark:via-blue-300/15"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BackgroundEffects;