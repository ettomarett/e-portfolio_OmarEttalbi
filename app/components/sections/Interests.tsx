'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBroadcastTower, FaMusic, FaChess, FaCamera, FaCubes } from 'react-icons/fa'
import { useLanguage } from '../../i18n/LanguageContext'

const interestMeta = [
  { icon: FaBroadcastTower, category: 'extracurricular', social: '@ensiasradiohq' },
  { icon: FaCamera, category: 'hobbies', social: null },
  { icon: FaCubes, category: 'hobbies', social: null },
  { icon: FaChess, category: 'hobbies', social: null },
  { icon: FaMusic, category: 'hobbies', social: null },
]

export default function Interests() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  return (
    <section id="interests" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">{t.interests.title}</h2>
            <div className="h-0.5 bg-primary/40 w-16 mb-8 mx-auto" />
            <p className="text-gray-600 dark:text-gray-400">{t.interests.subtitle}</p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.interests.items.map((interest, index) => {
              const meta = interestMeta[index]
              const Icon = meta.icon
              const categoryLabel = meta.category === 'extracurricular' ? t.interests.extracurricular : t.interests.hobbies
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-secondary p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">
                        {categoryLabel}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{interest.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{interest.description}</p>
                      {meta.social && (
                        <a
                          href={`https://instagram.com/${meta.social.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark text-sm font-medium"
                        >
                          {meta.social}
                        </a>
                      )}
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
