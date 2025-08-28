import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Target, Lightbulb, Users, Zap } from 'lucide-react';
import { SectionTransition } from './SectionTransition';

const strengths = [
  {
    icon: Target,
    title: "Problem Solving",
    description: "Analytical approach to complex challenges with creative solutions"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and methodologies"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Effective collaboration and mentoring in diverse teams"
  },
  {
    icon: Zap,
    title: "Adaptability",
    description: "Quick learner who thrives in fast-paced environments"
  }
];

export default function Strengths() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionTransition direction="up">
      <section ref={ref} className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Strengths
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key attributes that drive my professional success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <strength.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}