'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaWordpress, FaRobot, FaDatabase, FaExternalLinkAlt, FaFilePdf, FaGithub, FaTimes, FaLayerGroup } from 'react-icons/fa'
import { useLanguage } from '../../i18n/LanguageContext'
import ClueleakModal from './ClueleakModal'
import NibrasardModal from './NibrasardModal'
import JobuffModal from './JobuffModal'
import HighlightedProjects from './HighlightedProjects'
import OtherProjects from './OtherProjects'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()
  const [pdfOpen, setPdfOpen] = useState(false)
  const [clueleakOpen, setClueleakOpen] = useState(false)
  const [nibrasardOpen, setNibrasardOpen] = useState(false)
  const [jobuffOpen, setJobuffOpen] = useState(false)

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

        <div ref={ref} className="mb-24">
          <HighlightedProjects />
          <OtherProjects />
        </div>

        <ClueleakModal open={clueleakOpen} onClose={() => setClueleakOpen(false)} />
        <NibrasardModal open={nibrasardOpen} onClose={() => setNibrasardOpen(false)} />
        <JobuffModal open={jobuffOpen} onClose={() => setJobuffOpen(false)} />

        <AnimatePresence>
          {pdfOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setPdfOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-5 py-3 bg-gray-800 border-b border-white/10">
                  <span className="text-sm font-medium text-gray-200">TIPE: Autonomous Drone Presentation</span>
                  <button onClick={() => setPdfOpen(false)} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white flex-shrink-0 ml-4">
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
                <iframe
                  src="/images/drone_presentation.pdf"
                  className="w-full h-[calc(90vh-48px)]"
                  title="Drone Project Presentation"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}