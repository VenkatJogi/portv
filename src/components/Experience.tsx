import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: "Technical Lead",
      company: "Quadrant Technologies",
      client: "Microsoft",
      location: "Hyderabad, India",
      period: "March 2024 - Present",
      team: "40+ People",
      type: "current",
      achievements: [
        "Developed and deployed innovative platforms integrating React JS, SQL, and Cosmos DB to deliver embedded analytics with custom insights",
        "Built automation tools like M.O.N.I.T.O.R. to optimize PR reviews, a chatbot using OpenAI APIs for querying PSDL data, and Flask apps for predictive modeling",
        "Designed dynamic UIs and advanced data visualization tools, leveraging modern frameworks and cloud technologies like Azure, Databricks, and Synapse",
        "Successfully managing and leading a team of 40+ professionals"
      ]
    },
    {
      title: "Team Lead & Sr Software Developer",
      company: "MEDIEN DIGITAL NETWORKS",
      location: "Hyderabad, India",
      period: "April 2023 - March 2024",
      type: "past",
      achievements: [
        "Redesigned project management and reporting tools with advanced analytics, including Gen AI-based chatbots for HR and IT queries",
        "Automated document data extraction using AWS Textract and Comprehend, custom classifiers, and pipelines",
        "Delivered solutions with embedded analytics, PR review automation, predictive modeling, and advanced data visualizations using cutting-edge frameworks and cloud technologies"
      ]
    },
    {
      title: "Team Lead",
      company: "Sagar Soft",
      location: "Hyderabad, India",
      period: "March 2019 - April 2023",
      type: "past",
      achievements: [
        "Designed and developed diverse applications, including project management, multi-vendor e-commerce, and school management tools, with complete DevOps pipelines",
        "Led innovation efforts through market analysis, emerging technology adoption, and guiding research teams toward CE-certified breakthroughs",
        "Proficient in React, Angular, Ionic, Node.js, and MySQL technologies"
      ]
    },
    {
      title: "Founder",
      company: "Startup",
      location: "Hyderabad, India",
      period: "2018 - 2019",
      team: "70+ People",
      type: "startup",
      achievements: [
        "Worked on various cutting-edge technology innovations across domains, including Public and Private Sector projects",
        "Successfully managed and scaled a team of 70+ professionals",
        "Delivered innovative solutions for government and enterprise clients"
      ]
    },
    {
      title: "Application Developer",
      company: "Asian Technology Solutions",
      location: "Hyderabad, India", 
      period: "March 2017 - March 2019",
      type: "past",
      achievements: [
        "Built Internal Job Portal Application (Web & Android App)",
        "Responsible for end-to-end application development and deployment",
        "Technologies used: HTML, PHP, IONIC, MySQL, Android Studio"
      ]
    }
  ];

  const internships = [
    { company: "Chi-Square Consultants", role: "Data Scientist", period: "2017 (3 months)" },
    { company: "Technodom", role: "Web Development", period: "2017 (3 months)" },
    { company: "Swarnakart", role: "Web Development", period: "2016 (3 months)" },
    { company: "Thub Hyderabad", role: "Web Development", period: "2016 (3 months)" }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Main Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                        {exp.client && <span className="ml-2 text-gray-500">– Client: {exp.client}</span>}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'current'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : exp.type === 'startup'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {exp.type === 'current' ? 'Current' : exp.type === 'startup' ? 'Startup' : 'Past'}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    {exp.team && (
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Handling {exp.team}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Internships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {internship.company}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                  {internship.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  {internship.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;