import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const orbs = [
  { x: '-8%', y: '-10%', size: 520, color: 'bg-orange-400/20 dark:bg-orange-500/15', duration: 22 },
  { x: '70%', y: '4%', size: 460, color: 'bg-teal-400/20 dark:bg-teal-500/15', duration: 26 },
  { x: '18%', y: '48%', size: 390, color: 'bg-rose-300/20 dark:bg-rose-500/10', duration: 24 },
  { x: '74%', y: '68%', size: 520, color: 'bg-cyan-400/20 dark:bg-cyan-500/15', duration: 29 },
  { x: '-12%', y: '82%', size: 440, color: 'bg-violet-300/20 dark:bg-violet-500/10', duration: 27 }
];

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  x: (index * 37 + 11) % 100,
  y: (index * 61 + 7) % 100,
  size: 2 + (index % 3),
  duration: 7 + (index % 6),
  delay: (index % 8) * 0.45
}));

const BackgroundEffects: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#f7f3ea] dark:bg-[#080b12]">
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 12%, rgba(249, 115, 22, 0.18), transparent 32%),
            radial-gradient(circle at 85% 18%, rgba(20, 184, 166, 0.16), transparent 30%),
            radial-gradient(circle at 50% 72%, rgba(244, 63, 94, 0.10), transparent 38%),
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,247,237,0.35) 42%, rgba(240,253,250,0.48))
          `
        }}
      />

      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 10%, rgba(249, 115, 22, 0.17), transparent 34%),
            radial-gradient(circle at 88% 20%, rgba(20, 184, 166, 0.14), transparent 32%),
            radial-gradient(circle at 52% 75%, rgba(244, 63, 94, 0.09), transparent 38%),
            linear-gradient(145deg, #080b12 0%, #11151d 48%, #0b1114 100%)
          `
        }}
      />

      {orbs.map((orb, index) => (
        <motion.div
          key={orb.x + orb.y}
          className={`absolute rounded-full blur-3xl ${orb.color}`}
          style={{ left: orb.x, top: orb.y, width: orb.size, height: orb.size }}
          animate={reduceMotion ? undefined : {
            x: [0, index % 2 === 0 ? 70 : -60, 0],
            y: [0, index % 2 === 0 ? 45 : 70, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute -left-[20%] top-[18%] h-40 w-[140%] rotate-[-12deg] bg-gradient-to-r from-transparent via-orange-400/10 to-transparent blur-2xl dark:via-orange-400/10"
        animate={reduceMotion ? undefined : { x: ['-8%', '8%', '-8%'], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-[20%] top-[62%] h-48 w-[140%] rotate-[10deg] bg-gradient-to-r from-transparent via-teal-400/10 to-transparent blur-3xl dark:via-teal-400/10"
        animate={reduceMotion ? undefined : { x: ['8%', '-8%', '8%'], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to bottom, black, transparent 88%)'
        }}
      />

      <div
        className="absolute inset-0 opacity-35 dark:opacity-45"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(20, 184, 166, 0.28) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 72%)'
        }}
      />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-orange-500/35 shadow-[0_0_12px_rgba(249,115,22,0.45)] dark:bg-orange-300/45"
          style={{ left: `${particle.x}%`, top: `${particle.y}%`, width: particle.size, height: particle.size }}
          animate={reduceMotion ? undefined : { y: [0, -18, 0], opacity: [0.18, 0.75, 0.18] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(15,23,42,0.08)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.38)_100%)]" />
    </div>
  );
};

export default BackgroundEffects;
