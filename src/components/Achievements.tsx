import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, Medal, Crown, Target } from 'lucide-react';
import SectionTransition from './SectionTransition';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const achievements = [
    {
      icon: Award,
      title: "Best Speaker Award",
      organization: "Microsoft Fabric Users Group",
      year: "2024",
      color: "from-blue-500 to-cyan-500",
      description: "Recognized for outstanding contribution to the tech community through speaking engagements"
    },
    {
      icon: Trophy,
      title: "National Award",
      organization: "MHRD India Government", 
      year: "2023",
      color: "from-orange-500 to-red-500",
      description: "Honored by the Ministry of Human Resource Development for technological innovation"
    },
    {
      icon: Star,
      title: "International Award",
      organization: "Sri Lanka Government",
      year: "2023", 
      color: "from-green-500 to-emerald-500",
      description: "International recognition for contributions to technology and innovation"
    },
    {
      icon: Medal,
      title: "Green Warrior Award",
      organization: "Asian Record Book",
      year: "2022",
      color: "from-teal-500 to-green-500",
      description: "Recognition for environmental sustainability initiatives in technology"
    },
    {
      icon: Crown,
      title: "Hung Sung Hero Award",
      organization: "Andhra Pradesh Government",
      year: "2022",
      color: "from-purple-500 to-pink-500",
      description: "State government recognition for exceptional service and innovation"
    },
    {
      icon: Target,
      title: "Indian Achiever Award 2020",
      organization: "Indian Achievers Forum",
      year: "2020",
      color: "from-indigo-500 to-purple-500",
      description: "National recognition for outstanding achievements in technology"
    },
    {
      icon: Award,
      title: "Business Leader Award 2020",
      organization: "Innovation Zone",
      year: "2020", 
      color: "from-yellow-500 to-orange-500",
      description: "Leadership excellence award for driving business innovation"
    },
    {
      icon: Trophy,
      title: "Innovation Leadership Award 2022",
      organization: "World Innovation Congress",
      year: "2022",
      color: "from-rose-500 to-pink-500",
      description: "Global recognition for innovation leadership and technological advancement"
    }
  ];

  const stats = [
    { number: "8+", label: "Awards & Recognition", color: "from-blue-500 to-purple-500" },
    { number: "7+", label: "Years Experience", color: "from-green-500 to-teal-500" },
    { number: "70+", label: "Team Members Led", color: "from-orange-500 to-red-500" },
    { number: "100+", label: "Projects Delivered", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTransition direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Recognition & Awards
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Achievements that reflect excellence in technology, leadership, and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </SectionTransition>

        {/* Stats Section */}
        <SectionTransition direction="scale" delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <SectionTransition
              key={stat.label}
              direction="scale"
              delay={0.3 + index * 0.1}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -8, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 transition-transform duration-200`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {stat.label}
                </div>
                <motion.div 
                  className={`mt-4 h-1 w-0 bg-gradient-to-r ${stat.color} rounded-full group-hover:w-full transition-all duration-500 mx-auto`}
                />
              </motion.div>
            </SectionTransition>
          ))}
        </SectionTransition>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <SectionTransition
              key={achievement.title}
              direction="up"
              delay={0.4 + index * 0.1}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.03, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500 cursor-pointer"
              >
                {/* Icon and Year */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} transition-transform duration-200`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full transition-transform duration-200"
                  >
                    {achievement.year}
                  </motion.span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {achievement.title}
                </h3>

                {/* Organization */}
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                  {achievement.organization}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {achievement.description}
                </p>

                {/* Decorative Element */}
                <motion.div 
                  className={`mt-4 h-1 w-0 bg-gradient-to-r ${achievement.color} rounded-full group-hover:w-full transition-all duration-500`}
                />
              </motion.div>
            </SectionTransition>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Create Impact Together?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Let's build something extraordinary that makes a difference in the world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Let's Collaborate
              <Award className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;