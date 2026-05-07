'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaDatabase, FaCogs, FaChartLine, FaDocker, FaGithub } from 'react-icons/fa'
import { SiPostgresql, SiNextdotjs, SiTypescript, SiDocker, SiGithubactions } from 'react-icons/si'

const experiences = [
  {
    title: 'End-of-Studies Intern — Digitalization & Data Analytics',
    company: 'Diehl Aviation',
    period: 'PFE 2026 · Toulouse, France',
    type: 'Current',
    description: 'Digitalization of operational shop floor processes in the MRO aviation sector using SAP technologies.',
    achievements: [
      'Digitalization of shop floor operational processes using SAP S/4HANA.',
      'Data processing and pipeline design with SAP Datasphere.',
      'Data visualization and dashboarding with SAP Analytics Cloud.',
    ],
    technologies: ['SAP S/4HANA', 'SAP Datasphere', 'SAP Analytics Cloud'],
    icon: FaChartLine
  },
  {
    title: 'Full-Stack Developer — International Student Ops Platform',
    company: 'RaiseUp Consulting',
    period: '2nd Year Internship · 2025',
    type: 'Finished',
    description: 'End-to-end web application consolidating the international study lifecycle: document management, appointments, visa tracking, and payments with role-based dashboards.',
    achievements: [
      'Built Next.js 15 / TypeScript application with Prisma ORM and PostgreSQL.',
      'Implemented RBAC authentication, document upload & review workflows, appointment booking with rescheduling.',
      'Designed application/visa progression tracking, payment system with receipts, and audit trails.',
      'Created role-based dashboards (Student vs. Admin) with structured status progression workflows.',
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'RBAC'],
    icon: FaCode
  },
  {
    title: 'Front-End Developer — Corporate Website',
    company: 'RaiseUp Consulting',
    period: '1st Year Internship · 2024',
    type: 'Previous',
    description: 'Designed and developed the company\'s official website front-end, which was adopted as the production version and deployed to the company\'s domain.',
    achievements: [
      'UX/UI research (Behance, Dribbble) and responsive design with Next.js (SSR/SSG) and Bootstrap.',
      'Built reusable component architecture, navigation management, and visual interaction effects.',
      'Site adopted as official production version — led to extended collaboration for mobile app development.',
    ],
    technologies: ['Next.js', 'Bootstrap', 'SSR/SSG', 'React'],
    icon: FaCode
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Professional Experience</h2>
            <div className="h-0.5 bg-primary/40 w-16 mb-8 mx-auto" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey in software engineering, focusing on full-stack development, data-driven solutions, and production-ready applications.
            </p>
          </motion.div>

          <div ref={ref} className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Current' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                            : exp.type === 'Finished'
                            ? 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-primary font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 