import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CalendarDays, Lightbulb, Mic2, Network, Users } from 'lucide-react';
import SectionTransition from './SectionTransition';

const CommunityContributions: React.FC = () => {
  const communities = [
    {
      name: 'Microsoft AI Innovators Hub',
      role: 'Community Leader',
      affiliation: 'Microsoft Fabric user group',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Microsoft Power Platform Innovators',
      role: 'Community Leader',
      affiliation: 'Microsoft Power Platform user groups',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'AI Innovators Hub',
      role: 'Community Leader',
      affiliation: 'Microsoft technology community',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      name: 'Global AI Hyderabad',
      role: 'Community Leader',
      affiliation: 'Global AI Community chapter',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Global AI Puducherry',
      role: 'Community Leader',
      affiliation: 'Global AI Community chapter',
      color: 'from-amber-500 to-orange-500'
    },
    {
      name: 'Databricks User Group',
      role: 'Community Leader',
      affiliation: 'Databricks user community',
      color: 'from-red-500 to-rose-500'
    }
  ];

  const contributions = [
    { icon: CalendarDays, label: 'Organize', detail: 'Meetups, workshops, technical sessions, and hackathons' },
    { icon: Mic2, label: 'Speak', detail: 'Share practical knowledge on AI, data, cloud, and emerging technology' },
    { icon: Users, label: 'Build', detail: 'Create inclusive communities where professionals connect and collaborate' },
    { icon: BookOpen, label: 'Mentor', detail: 'Enable continuous learning and professional development' },
    { icon: Lightbulb, label: 'Innovate', detail: 'Turn new ideas into meaningful technical and community initiatives' },
    { icon: Network, label: 'Connect', detail: 'Bring experts, learners, and technology ecosystems together' }
  ];

  return (
    <section id="community" className="py-14 md:py-16 bg-white/15 dark:bg-white/[0.015] backdrop-blur-[1px]">
      <div className="container mx-auto px-6">
        <SectionTransition direction="up" className="text-left mb-10 md:mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Community Contributions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building communities and enabling professionals to learn, collaborate, and innovate across AI, data, and cloud technologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mt-4" />
        </SectionTransition>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {communities.map((community, index) => (
            <SectionTransition key={community.name} direction="up" delay={index * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full bg-white/85 dark:bg-[#101522]/85 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${community.color}`} />
                <div className="p-5">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${community.color} mb-4`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {community.name}
                  </h3>
                  <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{community.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{community.affiliation}</p>
                </div>
              </motion.div>
            </SectionTransition>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contributions.map((contribution, index) => (
            <SectionTransition key={contribution.label} direction="scale" delay={0.25 + index * 0.06} className="h-full">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="h-full flex items-start gap-4 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10"
              >
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                  <contribution.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{contribution.label}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{contribution.detail}</p>
                </div>
              </motion.div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityContributions;
