import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import SectionTransition from './SectionTransition';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      title: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      year: "2025",
      category: "Data Science",
      color: "from-blue-500 to-cyan-500",
      description: "Advanced certification in Azure Machine Learning and data science workflows",
      skills: ["Machine Learning", "Azure ML", "Data Science", "Python", "R"]
    },
    {
      title: "Microsoft Certified: Azure AI Engineer Associate", 
      issuer: "Microsoft",
      year: "2024",
      category: "AI Engineering",
      color: "from-purple-500 to-pink-500",
      description: "Expertise in designing and implementing AI solutions on Microsoft Azure",
      skills: ["AI Solutions", "Cognitive Services", "Bot Framework", "Azure AI"]
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft", 
      year: "2024",
      category: "AI Fundamentals",
      color: "from-green-500 to-teal-500",
      description: "Foundation knowledge in artificial intelligence and machine learning concepts",
      skills: ["AI Concepts", "ML Fundamentals", "Azure AI Services"]
    },
    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate",
      issuer: "Microsoft",
      year: "2024", 
      category: "Data Analytics",
      color: "from-orange-500 to-red-500",
      description: "Advanced analytics engineering with Microsoft Fabric platform",
      skills: ["Microsoft Fabric", "Data Engineering", "Analytics", "Power BI"]
    },
    {
      title: "Certified Full Stack Development",
      issuer: "Sagar Software Solutions",
      year: "2021",
      category: "Development",
      color: "from-indigo-500 to-purple-500",
      description: "Comprehensive full stack web development certification",
      skills: ["React", "Node.js", "Database Design", "APIs"]
    },
    {
      title: "Certified Data Scientist",
      issuer: "Sagar Software Solutions", 
      year: "2021",
      category: "Data Science",
      color: "from-teal-500 to-green-500", 
      description: "Professional certification in data science methodologies and tools",
      skills: ["Python", "Machine Learning", "Statistics", "Data Analysis"]
    },
    {
      title: "Certified Django Developer",
      issuer: "Asian Technologies",
      year: "2021",
      category: "Framework",
      color: "from-rose-500 to-pink-500",
      description: "Specialized certification in Django web framework development",
      skills: ["Django", "Python", "Web Development", "REST APIs"]
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-blue-900/80">
      <div className="container mx-auto px-6">
        <SectionTransition direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Development
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Certifications that validate expertise and commitment to continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </SectionTransition>

        {/* Category Statistics */}
        <SectionTransition direction="scale" delay={0.2} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const count = certifications.filter(cert => cert.category === category).length;
            return (
              <SectionTransition
                key={category}
                direction="scale"
                delay={0.3 + index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {category} ({count})
                  </span>
                </motion.div>
              </SectionTransition>
            );
          })}
        </SectionTransition>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <SectionTransition
              key={cert.title}
              direction="up"
              delay={0.4 + index * 0.1}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.03, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 cursor-pointer"
              >
                {/* Header Gradient */}
                <motion.div 
                  className={`h-2 bg-gradient-to-r ${cert.color} group-hover:h-3 transition-all duration-300`}
                />
              
                <div className="p-6">
                  {/* Category and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium transition-transform duration-200"
                    >
                      {cert.category}
                    </motion.span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <Calendar className="w-4 h-4 mr-1" />
                      </motion.div>
                      {cert.year}
                    </div>
                  </div>

                  {/* Certificate Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${cert.color} mb-4 transition-transform duration-200`}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className={`font-semibold text-sm mb-3 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium transition-transform duration-200 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Verify Button */}
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200`}
                  >
                    <motion.div whileHover={{ rotate: 15 }}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                    </motion.div>
                    Verify Certificate
                  </motion.button>
                </div>
                <motion.div 
                  className={`h-1 w-0 bg-gradient-to-r ${cert.color} group-hover:w-full transition-all duration-700`}
                />
              </motion.div>
            </SectionTransition>
          ))}
        </div>

        {/* Professional Development Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Commitment to Excellence
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              These certifications represent my ongoing commitment to staying at the forefront of technology, 
              continuously expanding my knowledge in AI, cloud computing, data science, and software development 
              to deliver cutting-edge solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Microsoft Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Verified</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;