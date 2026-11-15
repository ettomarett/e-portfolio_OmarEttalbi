'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaWordpress, FaRobot, FaDatabase, FaExternalLinkAlt, FaFilePdf, FaGithub, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../../i18n/LanguageContext'
import { projectMeta, projectStyles } from './projectsData'

export default function OtherProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()
  const [pdfOpen, setPdfOpen] = useState(false)

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">{t.projects.otherProjects}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectMeta.map((project, index) => {
          const meta = project
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
              {meta.image ? (
                <img src={meta.image} alt={meta.title} className="w-full h-48 object-cover" />
              ) : (
                <div className={`flex items-center justify-center h-48 w-full ${style.bg}`}>
                  <Icon className={`${style.color} text-6xl`} />
                </div>
              )}
              <div className="flex-1 flex flex-col p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{meta.title}</h3>
                  <span className={`text-xs ${style.bg} ${style.color} px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2`}>{meta.year}</span>
                  </div>
                <div className="flex items-center gap-2 mb-3">
                  {meta.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-[#6C5CE7]/20 text-[#a29bfe]">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{meta.description}</p>
                <div className="flex flex-wrap gap-3">
                  {meta.repo && (
                    <a
                      href={meta.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C5CE7]/20 text-[#a29bfe] rounded-xl text-sm font-medium hover:opacity-80 transition-opacity border border-[#a29bfe]/30"
                    >
                      <FaGithub className="text-xs" /> GitHub
                    </a>
                  )}
                  {meta.pdf && (
                    <button
                      onClick={() => setPdfOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C5CE7]/20 text-[#a29bfe] rounded-xl text-sm font-medium hover:opacity-80 transition-opacity border border-[#a29bfe]/30"
                    >
                      <FaFilePdf className="text-xs" /> View PDF
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}