'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaChartLine, FaDocker } from 'react-icons/fa'
import { useLanguage } from '../../i18n/LanguageContext'

const expIcons = [FaChartLine, FaDocker, FaCode]
const expTechs = [
  ['SAP S/4HANA', 'SAP Datasphere', 'SAP Analytics Cloud'],
  ['Docker', 'Jenkins', 'CI/CD', 'Sonarqube', 'Trivy', 'Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL'],
  ['React', 'Next.js (SSR/SSG)', 'JavaScript', 'Bootstrap'],
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  const typeLabels: Record<string, string> = {
    Current: t.experience.current,
    Finished: t.experience.finished,
    Previous: t.experience.previous,
  }

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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">{t.experience.title}</h2>
            <div className="h-0.5 bg-primary/40 w-16 mb-8 mx-auto" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.experience.subtitle}</p>
          </motion.div>

          <div ref={ref} className="space-y-8">
            {t.experience.items.map((exp, index) => {
              const Icon = expIcons[index]
              const techs = expTechs[index]
              return (
                <motion.div
                  key={index}
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
                          {typeLabels[exp.type] || exp.type}
                        </span>
                      </div>
                      <p className="text-primary font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">{t.experience.keyAchievements}</h4>
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
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">{t.experience.technologiesUsed}</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
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
