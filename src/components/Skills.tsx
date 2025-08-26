import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Cloud, Monitor, Zap, Brain, Bot, BarChart3, Cog } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "React Js",
        "Angular Js", 
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Ajax",
        "JQuery"
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        "Node.js",
        "Python",
        ".NET", 
        "PHP Core",
        "PHP Laravel",
        "PHP CodeIgniter"
      ]
    },
    {
      icon: Database,
      title: "Database",
      color: "from-purple-500 to-pink-500",
      skills: [
        "SQL Server",
        "MySQL",
        "Cosmos DB"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        "Microsoft Fabric",
        "Azure DevOps", 
        "AWS EC2",
        "AWS IAM",
        "AWS Lambda Functions",
        "AWS Comprehend",
        "AWS Code Whisperer"
      ]
    },
    {
      icon: Monitor,
      title: "IDE & Operating System",
      color: "from-indigo-500 to-blue-500",
      skills: [
        "Visual Studio Code",
        "Visual Studio",
        "Django",
        "Flask API",
        "Windows",
        "Linux",
        "iOS"
      ]
    },
    {
      icon: Zap,
      title: "Power Platform Tools",
      color: "from-yellow-500 to-orange-500",
      skills: [
        "Power BI",
        "Power Automate",
        "Power Apps"
      ]
    }
  ];

  const aiSpecialties = [
    { icon: Brain, title: "AI/ML", level: "Advanced", color: "from-purple-500 to-pink-500" },
    { icon: Bot, title: "Chatbot Development", level: "Expert", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart3, title: "Data Automation", level: "Advanced", color: "from-green-500 to-emerald-500" },
    { icon: Cog, title: "Cloud Architecture", level: "Expert", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mastering the latest technologies to create innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Expertise Level</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 flex-shrink-0`}></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI & Innovation Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI & Innovation Focus
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Specialized expertise in artificial intelligence and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSpecialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${specialty.color} mb-4`}>
                <specialty.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {specialty.title}
              </h4>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium">
                🚀 {specialty.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;