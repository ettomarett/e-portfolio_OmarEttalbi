'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaDatabase, FaReact, FaGitAlt, FaDocker, FaCode, FaLinux, FaExternalLinkAlt, FaFilePdf, FaTimes } from 'react-icons/fa'
import { SiPostgresql, SiSpringboot, SiTypescript, SiTensorflow, SiPytorch, SiApachespark, SiBlender } from 'react-icons/si'
import { useLanguage } from '../../i18n/LanguageContext'
import Image from 'next/image'

const skills = [
  { name: 'Python', icon: FaPython },
  { name: 'Java / Spring Boot', icon: SiSpringboot },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React / Next.js', icon: FaReact },
  { name: 'PostgreSQL / SQL', icon: SiPostgresql },
  { name: 'TensorFlow / Keras', icon: SiTensorflow },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'Docker / CI-CD', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Linux', icon: FaLinux },
  { name: 'Power BI / Tableau', icon: FaDatabase },
  { name: 'SAP S/4HANA', icon: FaCode },
  { name: 'Spark / dbt', icon: SiApachespark },
  { name: 'XML / XSLT / XSD', icon: FaCode },
  { name: 'Blender', icon: SiBlender },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const { t } = useLanguage()
  const [openPdf, setOpenPdf] = useState<{ title: string; src: string } | null>(null)

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
          >
            {t.about.title}
          </motion.h2>
        </div>

        <div id="about-me-card" className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">{t.about.title}</h3>
            <div className="bg-gray-50 dark:bg-secondary-light p-4 rounded-xl shadow-sm">
              <div className="text-gray-700 dark:text-gray-300">
                <p className="mb-4">{t.about.bio1}</p>
                <p className="mb-4">{t.about.bio2}</p>
                <p>{t.about.bio3}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="education-card" className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">{t.about.education}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.about.edu.map((edu) => (
                <div key={edu.school} className="bg-gray-50 dark:bg-secondary-light p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-lg mb-1">{edu.school}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{edu.degree}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{edu.location}</div>
                  <div className="text-xs text-gray-400">{edu.years}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="skills-card" className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">{t.about.skills}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <span className="text-3xl mb-2"><skill.icon /></span>
                  <span className="text-xs text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={ref} id="certifications-card" className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-primary">{t.about.certifications}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.about.certs.map((cert) => (
                <div key={cert.name} className="bg-gray-50 dark:bg-secondary-light p-5 rounded-xl shadow-sm flex flex-col items-center gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={cert.badge}
                      alt={cert.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center flex-1">
                    <div className="font-bold text-sm mb-1 leading-snug">{cert.name}</div>
                    <div className="text-xs text-gray-400 mb-1">{cert.issuer}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{cert.year}</div>
                  </div>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setOpenPdf({ title: cert.name, src: cert.pdf })}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-primary/10 text-primary rounded-lg text-xs font-medium hover:bg-primary/20 transition-colors"
                    >
                      <FaFilePdf className="text-xs" />
                      View
                    </button>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 dark:bg-white/[0.07] text-gray-300 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      Visit
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setOpenPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 bg-gray-800 border-b border-white/10">
                <span className="text-sm font-medium text-gray-200 truncate pr-4">{openPdf.title}</span>
                <button
                  onClick={() => setOpenPdf(null)}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white flex-shrink-0"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
              <iframe
                src={openPdf.src}
                className="w-full h-[calc(90vh-48px)]"
                title={openPdf.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
