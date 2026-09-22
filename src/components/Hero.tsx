import React from 'react';
import { ArrowRight, ArrowUpRight, Briefcase, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTransition from './SectionTransition';

const Hero: React.FC = () => {
  const techStack = ['Python', 'React', 'AI', 'Agentic AI', 'Microsoft Fabric', 'Snowflake', 'Databricks', 'Azure', 'AWS', 'SQL'];

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[88vh] overflow-hidden pt-28 pb-14 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <div>
            <SectionTransition direction="fade" duration={0.6}>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/70 bg-orange-50/80 dark:border-orange-500/30 dark:bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300 mb-6">
                <Sparkles className="w-4 h-4" />
                Technical Lead · AI & Data
              </div>
            </SectionTransition>

            <SectionTransition direction="up" duration={0.65} delay={0.08}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-4">
                Jogi Ritish Venkat
              </p>
              <h1 className="text-[clamp(3.2rem,7vw,6.8rem)] font-black leading-[0.9] tracking-[-0.07em] text-slate-950 dark:text-white">
                Building
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600">
                  intelligence
                </span>
                into impact.
              </h1>
            </SectionTransition>

            <SectionTransition direction="up" duration={0.6} delay={0.16}>
              <p className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Innovative Tech Leader and AI & Data Enthusiast transforming complex data into scalable products, intelligent automation, and high-impact communities.
              </p>
            </SectionTransition>

            <SectionTransition direction="up" duration={0.55} delay={0.24} className="mt-8 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-white px-6 py-3.5 font-semibold text-white dark:text-slate-950 shadow-xl shadow-slate-900/15"
              >
                Explore my work <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-6 py-3.5 font-semibold text-slate-800 dark:text-white backdrop-blur-xl"
              >
                Start a conversation <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </SectionTransition>
          </div>

          <SectionTransition direction="left" duration={0.7} delay={0.18}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-orange-400/25 via-transparent to-cyan-400/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 dark:border-white/10 bg-white/75 dark:bg-[#101522]/80 p-6 md:p-8 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-2xl">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Current</p>
                    <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">Blend 360</h2>
                  </div>
                  <span className="flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Active
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 py-5">
                  <div className="rounded-2xl bg-slate-100/80 dark:bg-white/5 p-4">
                    <Briefcase className="w-5 h-5 text-orange-500 mb-3" />
                    <p className="text-xs uppercase tracking-wider text-slate-500">Clients</p>
                    <p className="mt-1 font-bold text-slate-900 dark:text-white">CDW · STEM · Charter</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100/80 dark:bg-white/5 p-4">
                    <MapPin className="w-5 h-5 text-teal-500 mb-3" />
                    <p className="text-xs uppercase tracking-wider text-slate-500">Based in</p>
                    <p className="mt-1 font-bold text-slate-900 dark:text-white">Hyderabad, India</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-slate-200 dark:border-white/10 py-5">
                  {[
                    ['8+', 'Years'],
                    ['15', 'Projects'],
                    ['16', 'Credentials'],
                    ['6', 'Communities']
                  ].map(([number, label]) => (
                    <div key={label}>
                      <p className="text-2xl font-black text-slate-950 dark:text-white">{number}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Core stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Hero;
