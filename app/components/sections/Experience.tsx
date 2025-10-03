'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaDatabase, FaCogs, FaChartLine, FaDocker, FaGithub } from 'react-icons/fa'
import { SiPostgresql, SiNextdotjs, SiTypescript, SiDocker, SiGithubactions } from 'react-icons/si'

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Raise Up Consulting',
    period: 'Internship 2025 (3 months)',
    type: 'Finished',
    description: 'Led the end-to-end delivery of the Study-Abroad Platform (public site + role-based dashboards) and hardened it for production.',
    achievements: [
      'Architecture & Data: Scoped the domain model (Students, Applications, Documents, Payments, Tickets). Designed the PostgreSQL schema, migrations, and constraints.',
      'APIs & Backend: Built REST services with validation, pagination, and clear error contracts; JWT/RBAC for authN/authZ; basic OpenAPI docs; API tests with Postman collections.',
      'Frontend: Next.js (TypeScript) dashboards and forms (multi-step intake, document upload, status tracking); pragmatic charts and admin views.',
      'Ops & CI/CD: Containerized services with Docker; GitHub Actions pipelines (build/test/lint/image publish); env-based configs; health checks & structured logs; deployment runbooks.',
      'Dashboards & KPIs: Implemented basic operational views (e.g., applications by stage, backlog) with filters/exports; documented KPI definitions (conversion, time-to-decision).',
      'Platform features: Appointments (slot management, reminders), Payments (service tiers, receipts), Notifications (email/SMS), Help desk (tickets, priorities, attachments).'
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'GitHub Actions', 'REST APIs', 'JWT', 'RBAC'],
    icon: FaCode
  },
  {
    title: 'Full-Stack Developer',
    company: 'Raise Up Consulting',
    period: 'Internship 2024 (3 months)',
    type: 'Previous',
    description: 'Contributed across the stack to ship user-facing features with reliable delivery mechanics.',
    achievements: [
      'Frontend: Implemented reusable UI components and multi-step forms in React/Next.js (TypeScript); integrated REST endpoints; handled client-side routing and basic state.',
      'Backend & Data: Wrote data-access utilities and DTOs; assisted in PostgreSQL schema design (tables, indexes) and basic query optimization; created simple SQL views to support reporting needs.',
      'Dev Environment & Ops: Containerized local dev with Docker Compose; added app/service health checks and standardized env configs.',
      'Handoffs: Prepared export-friendly tables/CSVs for Excel and documented KPI definitions when stakeholders needed clarity.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'REST APIs'],
    icon: FaCode
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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