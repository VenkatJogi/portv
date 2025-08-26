import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "E360 Platform – Embedded Analytics",
      description: "Created Power where Repos, Components, Visuals, Filter Details are added using Power App to SharePoint & using Power Automate, data is saved to Cosmos DB whenever SharePoint List is updated or created. Automated repository creation with pipelines and embedded Power BI reports in React with custom styles and filters.",
      category: "AI/Analytics",
      technologies: ["React Js", "Node Js", "Power Apps", "Power BI", "Power Automate", "SharePoint Lists", "Azure Databricks", "Cosmos DB", "Azure DevOps"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "PR Review Bot (M.O.N.I.T.O.R.)",
      description: "Developed M.O.N.I.T.O.R. to enhance PR review processes with Databricks notebooks. Automated contextual comments on PRs, addressed review quality issues, and optimized model.bim usage. Implemented auto-triggering comments with performance monitoring.",
      category: "AI/Automation",
      technologies: ["Python", "Copilot", "Azure AI", "Databricks", "Fabric", "Synapse"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      id: 3,
      title: "Data Model Visualizer",
      description: "Designed and implemented a UI using Coherence Fluent UI. Automated token generation and added advanced features such as toggles for inactive tables, primary key identification, null columns detection, and relationship analysis.",
      category: "Data Visualization",
      technologies: ["React Js", "Azure DevOps"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Data Model Visualizer (Chatbot)",
      description: "Developed a chatbot using OpenAI APIs for querying PSDL data and exploring relationships. It supports generating summary tables based on filters with data retrieved from SQL.",
      category: "AI/Chatbot",
      technologies: ["React Js", "SQL", "OpenAI APIs"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Flask ML Prediction App",
      description: "Built a Flask app integrating Cosmos DB with ML models for score prediction using libraries like XGBoost and Scikit-learn. Deployed the app on Azure for real-time predictions.",
      category: "Machine Learning",
      technologies: ["Cosmos DB", "Python", "Flask", "XGBoost", "Azure"],
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      id: 6,
      title: "Mach Tool - Project Management",
      description: "Redesigned a project management and reporting tool with LLM-based chatbots for employee queries. Generated reports on timesheets, productivity, and financial forecasts using OpenAI APIs.",
      category: "Management Tool",
      technologies: ["React Js", "HTML", "PHP", "Node.js", "Python", "MySQL"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 7,
      title: "Document Data Extraction Automation",
      description: "Automated data extraction with AWS Textract and Comprehend. Set up pipelines, annotations, and custom classifier training to streamline the document processing workflow.",
      category: "AI/Automation",
      technologies: ["Angular", "Python", "AWS Lambda", "Amazon Textract", "Amazon Comprehend", "MySQL"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 8,
      title: "Multi-Vendor E-commerce Platform",
      description: "Built a comprehensive multi-vendor e-commerce platform with end-to-end development, UI mock-ups, and deployment pipelines. Features include vendor management, payment integration, and order tracking.",
      category: "E-commerce",
      technologies: ["HTML5", "CSS3", "Ionic", "JavaScript", "Node.js", "MySQL"],
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const categories = ['All', 'AI/Analytics', 'AI/Automation', 'AI/Chatbot', 'Machine Learning', 'Data Visualization', 'Management Tool', 'E-commerce'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that showcase cutting-edge technology and AI-driven development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500"
              >
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium mb-4">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;