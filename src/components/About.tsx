import React from 'react';
import { Award, BadgeCheck, Brain, Briefcase, Code, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTransition from './SectionTransition';

const About: React.FC = () => {
  const traits = [
    {
      icon: Brain,
      title: "AI & Data Enthusiast",
      description: "Passionate about artificial intelligence, data engineering, and their applications in solving real-world problems."
    },
    {
      icon: Code,
      title: "Forward Deployed AI Engineer",
      description: "Experienced in working directly with stakeholders to design, deploy, and scale end-to-end AI solutions for complex business needs."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Proven ability to lead cross-functional teams, foster collaboration, and deliver high-impact results."
    }
  ];

  const overview = [
    { icon: Briefcase, value: "8+", label: "Years of Experience", detail: "AI, data & engineering" },
    { icon: Users, value: "6", label: "Communities Led", detail: "Microsoft, Global AI & Databricks" },
    { icon: BadgeCheck, value: "16", label: "Credentials", detail: "AI, cloud, data & development" },
    { icon: Award, value: "8", label: "Awards", detail: "Leadership, speaking & innovation" }
  ];

  return (
    <section id="about" className="py-14 md:py-16 bg-orange-50/20 dark:bg-orange-950/5 backdrop-blur-[1px]">
      <div className="container mx-auto px-6">
        <SectionTransition direction="up" className="text-left mb-10 md:mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-teal-500"></div>
        </SectionTransition>

        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-5 mb-8 items-stretch">
          <SectionTransition direction="up" className="h-full">
            <div className="h-full rounded-[2rem] border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#101522]/80 p-6 md:p-8 shadow-[0_24px_70px_rgba(15,23,42,0.1)] backdrop-blur-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-orange-500" />
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950 dark:text-white">My Journey</h3>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <strong className="font-black text-slate-950 dark:text-white">Ritish Venkat Jogi</strong> is a <strong className="text-orange-600 dark:text-orange-400">Technical Lead and Forward Deployed AI Engineer</strong> with over <strong>8+ years of experience</strong> delivering enterprise applications, AI platforms, data engineering solutions, intelligent automation, and cloud-native products.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                He specializes in designing and deploying production-ready solutions using <strong>Python, React, Microsoft Fabric, Snowflake, Databricks, Azure, AWS, Power Platform, Generative AI, and Agentic AI</strong>. His work includes identity resolution and Customer 360 platforms, multi-agent analytics, healthcare conversation intelligence, embedded analytics, AI chatbots, and automated data workflows.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Ritish combines hands-on engineering with architecture, stakeholder collaboration, and technical leadership. He has led cross-functional teams of <strong>40+ professionals</strong>, translated complex business requirements into scalable systems, and delivered secure solutions with strong data governance, reliability, and measurable business impact.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Beyond enterprise delivery, he is an active <strong>AI &amp; Data community leader, speaker, and organizer</strong>, sharing practical knowledge and helping professionals learn, collaborate, and adopt emerging technologies.
              </p>
            </div>
          </SectionTransition>

          <SectionTransition direction="left" delay={0.12} className="h-full">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 h-full">
              {overview.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/75 dark:bg-white/5 p-4 backdrop-blur-xl">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-black leading-none text-slate-950 dark:text-white">{item.value}</p>
                    <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">{item.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionTransition>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {traits.map((trait, index) => (
            <SectionTransition key={trait.title} direction="up" delay={0.15 + index * 0.08} className="h-full">
              <motion.div whileHover={{ y: -5 }} className="group h-full bg-white/75 dark:bg-[#101522]/75 backdrop-blur-xl p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-orange-300 dark:hover:border-orange-500/40 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-teal-500 rounded-xl mr-4">
                    <trait.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 dark:text-white">{trait.title}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{trait.description}</p>
              </motion.div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
