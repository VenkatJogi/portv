import React from 'react';
import { ArrowRight, Zap, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTransition from './SectionTransition';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = ['React', 'AI/ML', 'Node.js', 'Python', 'Azure', 'Power Platform'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-blue-900/80 pt-20 relative">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTransition direction="fade" duration={1.5}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Available for exciting opportunities
            </div>
          </SectionTransition>
            
          <SectionTransition direction="up" duration={1.2} delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Innovative Tech Leader
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                & AI Enthusiast
              </span>
            </h1>
          </SectionTransition>
            
          <SectionTransition direction="up" duration={1.0} delay={0.6}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Transforming Ideas into Impactful Solutions
            </p>
          </SectionTransition>
            
          <SectionTransition direction="up" duration={0.8} delay={0.9}>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Development | AI Chatbot Development & Automation | Data Flow Automation using Power Platform tools | 
              Embedded Analytics and Dashboard Development | Project Leadership & Cross-Functional Team Management
            </p>
          </SectionTransition>

          <SectionTransition direction="scale" duration={0.8} delay={1.2} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-200"
            >
              View Projects
              <Zap className="w-5 h-5 ml-2 text-yellow-500" />
            </motion.button>
          </SectionTransition>

          <SectionTransition direction="up" duration={0.8} delay={1.5} className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/20"
              >
                {tech}
              </motion.div>
            ))}
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Hero;