'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaWordpress, FaRobot, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '../../i18n/LanguageContext'

const projectMeta = [
  { category: 'AI & Cloud', tags: ['CatBoost', 'LightGBM', 'React Native', 'FastAPI', 'dbt', 'PostgreSQL'], year: '2026' },
  { category: 'AI & Cloud', tags: ['Python', 'LLM', 'Multi-Agent', 'Google ADK', 'Docker', 'Spring Boot'], year: '2025' },
  { category: 'Data Analytics', tags: ['Python', 'Prophet', 'ARIMA', 'Leaflet', 'Geospatial', 'Pandas'], year: '2025' },
  { category: 'AI & Cloud', tags: ['RAG', 'LLM', 'Vector DB', 'LangChain', 'FAISS', 'Pinecone'], year: '2026' },
  { category: 'Web Application', tags: ['AI Coding', 'Vitest', 'Cursor IDE', 'Full-Stack', 'ERP'], year: '2026' },
  { category: 'Web Application', tags: ['Spring Boot', 'Angular', 'JWT', 'PostgreSQL', 'REST APIs'], year: '2023' },
  {
    category: 'AI & Cloud',
    tags: ['Unity 3D', 'ML-Agents', 'Deep RL', 'C#', 'Python'],
    year: '2022',
    link: { label: 'viewPresentation', href: 'https://github.com/ettomarett/Drone-Autonomous-Manoeuver/blob/main/Project_Presentation_2022_Autonomous_Drone.pdf' },
  },
]

const projectStyles: { [key: string]: { icon: React.ComponentType<{ className?: string }>, color: string, bg: string } } = {
  'Web Application': { icon: FaReact, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/15' },
  'Website': { icon: FaWordpress, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/15' },
  'Data Analytics': { icon: FaDatabase, color: 'text-[#6C5CE7]', bg: 'bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/15' },
  'AI & Cloud': { icon: FaRobot, color: 'text-[#E8763A]', bg: 'bg-[#E8763A]/10 dark:bg-[#E8763A]/15' },
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
          >
            {t.projects.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => {
            const meta = projectMeta[index]
            const style = projectStyles[meta.category] || projectStyles['AI & Cloud']
            const Icon = style.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group flex flex-col overflow-hidden"
              >
                <div className={`flex items-center justify-center h-48 w-full ${style.bg}`}>
                  <Icon className={`${style.color} text-6xl`} />
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`text-xs ${style.bg} ${style.color} px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2`}>
                      {meta.year}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">{meta.category}</span>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 dark:bg-white/[0.07] text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {meta.link && (
                    <a
                      href={meta.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 mt-4 px-4 py-2 ${style.bg} ${style.color} rounded-xl text-sm font-medium hover:opacity-80 transition-opacity w-fit`}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      {t.projects.viewPresentation}
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
