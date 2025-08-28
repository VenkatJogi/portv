import React from 'react';
import { Brain, Code, Users, Lightbulb, Puzzle, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTransition from './SectionTransition';

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const traits = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Passionate about artificial intelligence and its applications in solving real-world problems."
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Experienced in building end-to-end applications with modern technologies and best practices."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Proven ability to lead cross-functional teams, foster collaboration, and deliver high-impact results."
    },
    // {
    //   icon: Lightbulb,
    //   title: "Innovation Driver",
    //   description: "Constantly exploring new technologies and methodologies to create cutting-edge solutions."
    // },
    // {
    //   icon: Puzzle,
    //   title: "Problem Solver",
    //   description: "Specialized in identifying complex challenges and developing strategic, scalable solutions."
    // },
    // {
    //   icon: Handshake,
    //   title: "Collaborative Leader",
    //   description: "Building strong partnerships and fostering environments where teams thrive and innovate together."
    // }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-blue-900/80">
      <div className="container mx-auto px-6">
        <SectionTransition direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </SectionTransition>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {traits.map((trait, index) => (
            <SectionTransition
              key={trait.title}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 transition-transform duration-200"
                  >
                    <trait.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {trait.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {trait.description}
                </p>
                <motion.div 
                  className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"
                />
              </motion.div>
            </SectionTransition>
          ))}
        </div>

        <SectionTransition direction="up" delay={0.6} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              My Journey
            </h3>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                With over <span className="font-semibold text-blue-600 dark:text-blue-400">8+ years of experience</span> in full stack development and AI, 
                I specialize in creating intelligent solutions that combine cutting-edge technology with practical business applications.
              </p>
              <p>
                My journey in tech has been driven by a passion for innovation and a commitment to building solutions that make a real difference in people's lives.
              </p>
              <p>
                From AI chatbots to data automation, I've consistently delivered solutions that drive business growth and enhance user experiences, 
                leading teams of <span className="font-semibold text-purple-600 dark:text-purple-400">40+ professionals</span> while fostering a culture of innovation and excellence.
              </p>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default About;