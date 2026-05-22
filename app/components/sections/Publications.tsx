'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Publications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
          >
            {t.publications.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            {t.publications.subtitle}
          </motion.p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
          >
            <div className="flex items-center justify-center h-48 w-full bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/15">
              <FaBook className="text-[#6C5CE7] text-6xl" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#6C5CE7]/10 text-[#6C5CE7] rounded-full text-xs font-semibold uppercase tracking-wide">
                  {t.publications.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t.publications.bookTitle}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t.publications.bookDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.publications.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 dark:bg-white/[0.07] text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://khozai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6C5CE7] hover:bg-[#5A4BD5] text-white rounded-xl font-medium transition-colors"
              >
                <FaExternalLinkAlt className="text-sm" />
                {t.publications.readOn}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
