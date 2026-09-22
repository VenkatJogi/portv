import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Monitor, Zap, Brain } from 'lucide-react';
import SectionTransition from './SectionTransition';

const Skills: React.FC = () => {
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
        "FastAPI",
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
      icon: Brain,
      title: "AI & Intelligent Systems",
      color: "from-rose-500 to-violet-600",
      skills: [
        "Artificial Intelligence",
        "Agentic AI",
        "Natural Language Processing",
        "Machine Learning",
        "LangChain",
        "Microsoft AutoGen",
        "n8n"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        "Microsoft Fabric",
        "Databricks",
        "Snowflake",
        "Google Cloud Platform (GCP)",
        "Azure DevOps", 
        "Jira",
        "AWS"
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
        "Power Apps",
        "Microsoft Copilot Studio"
      ]
    }
  ];

  return (
    <section id="skills" className="py-14 md:py-16 bg-white/15 dark:bg-white/[0.015] backdrop-blur-[1px]">
      <div className="container mx-auto px-6">
        <SectionTransition direction="up" className="text-left mb-10 md:mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mastering the latest technologies to create innovative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mt-4"></div>
        </SectionTransition>

        {/* Technical Skills Matrix */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#101522]/70 shadow-[0_24px_70px_rgba(15,23,42,0.1)] backdrop-blur-2xl">
          {skillCategories.map((category, categoryIndex) => (
            <SectionTransition
              key={category.title}
              direction="left"
              delay={categoryIndex * 0.06}
              className="border-b border-slate-200/80 dark:border-white/10 last:border-b-0"
            >
              <motion.div
                whileHover={{ x: 4 }}
                className="group grid md:grid-cols-[64px_240px_1fr] items-start gap-5 px-5 md:px-7 py-6 transition-colors duration-300 hover:bg-orange-50/60 dark:hover:bg-orange-500/[0.04]"
              >
                <div className="flex md:block items-center justify-between">
                  <span className="text-xs font-black tracking-[0.2em] text-slate-400 dark:text-slate-500">
                    {String(categoryIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="md:hidden text-xs text-slate-400">{category.skills.length} tools</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{category.skills.length} technologies</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:pt-1">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:border-orange-300 hover:text-orange-700 dark:hover:border-orange-500/40 dark:hover:text-orange-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </SectionTransition>
          ))}
        </div>

        {/* AI & Innovation Focus */}
        {/* <SectionTransition direction="up" delay={0.4} className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI & Innovation Focus
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Specialized expertise in artificial intelligence and cutting-edge technologies
          </p>
        </SectionTransition> */}

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSpecialties.map((specialty, index) => (
            <SectionTransition
              key={specialty.title}
              direction="scale"
              delay={0.6 + index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.05, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${specialty.color} mb-4 transition-transform duration-200`}
                >
                  <specialty.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {specialty.title}
                </h4>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium transition-transform duration-200"
                >
                  🚀 {specialty.level}
                </motion.div>
                <motion.div 
                  className={`mt-4 h-1 w-0 bg-gradient-to-r ${specialty.color} rounded-full group-hover:w-full transition-all duration-500 mx-auto`}
                />
              </motion.div>
            </SectionTransition>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
