import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Clock, Target, BookOpen, Lightbulb } from 'lucide-react';

const Strengths: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const strengths = [
    {
      icon: TrendingUp,
      title: "Adaptability",
      subtitle: "Love to Upskill myself",
      description: "Constantly embracing new technologies and methodologies to stay ahead of industry trends. My passion for continuous learning drives me to master emerging tools and frameworks.",
      color: "from-blue-500 to-cyan-500",
      stats: { label: "New Tech Stack", value: "Every Quarter" }
    },
    {
      icon: Users,
      title: "Leadership",
      subtitle: "Establishing clear objectives, guiding and motivating individuals",
      description: "Proven ability to lead cross-functional teams of 40+ professionals, establishing clear objectives and ensuring alignment with organizational goals while fostering innovation and collaboration.",
      color: "from-purple-500 to-pink-500",
      stats: { label: "Team Members Led", value: "70+" }
    },
    {
      icon: Clock,
      title: "Time Management",
      subtitle: "I prioritize essential tasks",
      description: "Expert in prioritizing critical tasks and managing multiple projects simultaneously. Utilizing advanced project management methodologies to deliver results on time and within scope.",
      color: "from-green-500 to-emerald-500",
      stats: { label: "On-Time Delivery", value: "95%" }
    },
    {
      icon: Target,
      title: "Strategic Thinking", 
      subtitle: "Long-term vision and execution",
      description: "Ability to see the big picture while managing intricate details. Developing comprehensive strategies that align with business objectives and drive sustainable growth.",
      color: "from-orange-500 to-red-500",
      stats: { label: "Strategic Projects", value: "15+" }
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      subtitle: "Knowledge is power",
      description: "Committed to lifelong learning through certifications, workshops, and hands-on experience. Staying current with industry best practices and emerging technologies.",
      color: "from-indigo-500 to-purple-500",
      stats: { label: "Certifications", value: "7+" }
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      subtitle: "Creative problem solving",
      description: "Approaching challenges with creativity and innovation. Developing unique solutions that combine technical expertise with business acumen to drive meaningful impact.",
      color: "from-teal-500 to-cyan-500", 
      stats: { label: "Innovative Solutions", value: "50+" }
    }
  ];

  const coreValues = [
    "Excellence in Execution",
    "Collaborative Leadership", 
    "Continuous Innovation",
    "Customer-Centric Approach",
    "Technical Excellence",
    "Strategic Vision"
  ];

  return (
    <section id="strengths" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Core Competencies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Strengths that drive success and enable exceptional results
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500"
            >
              {/* Icon and Stats */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${strength.color} group-hover:scale-110 transition-transform duration-200`}>
                  <strength.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${strength.color} bg-clip-text text-transparent`}>
                    {strength.stats.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {strength.stats.label}
                  </div>
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {strength.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${strength.color} bg-clip-text text-transparent`}>
                  {strength.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {strength.description}
              </p>

              {/* Decorative Element */}
              <div className={`mt-6 h-1 w-full bg-gradient-to-r ${strength.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Core Values & Principles
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                  {value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:p-12 rounded-3xl text-center text-white">
            <div className="text-6xl mb-4 opacity-20">"</div>
            <blockquote className="text-xl md:text-2xl font-light italic mb-6 max-w-4xl mx-auto leading-relaxed">
              Success in technology leadership comes from the perfect blend of technical expertise, 
              strategic thinking, and the ability to inspire teams to achieve extraordinary results.
            </blockquote>
            <div className="text-lg font-semibold">
              — Ritish Jogi
            </div>
            <div className="text-sm opacity-80 mt-1">
              Technical Lead & AI Enthusiast
            </div>
          </div>
        </motion.div>

        {/* Mentorship CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl border border-gray-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Mentorship?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm passionate about sharing knowledge and helping others grow in their tech careers. 
              Reach out if you're looking for guidance in AI, full-stack development, or leadership.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Users className="w-5 h-5 mr-2" />
              Connect for Mentorship
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Strengths;