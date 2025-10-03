'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLanguage } from 'react-icons/fa'

const languages = [
  {
    name: 'French',
    level: 'Fluent',
    proficiency: 90
  },
  {
    name: 'Arabic',
    level: 'Native',
    proficiency: 100
  },
  {
    name: 'English',
    level: 'Fluent',
    proficiency: 95
  }
]

export default function Languages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="languages" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Languages</h2>
            <div className="h-0.5 bg-primary/40 w-16 mb-8 mx-auto" />
            <p className="text-gray-600 dark:text-gray-400">
              My language proficiency across different languages
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-secondary p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                    <FaLanguage className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{language.name}</h3>
                    <p className="text-sm text-primary font-medium">{language.level}</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${language.proficiency}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  {language.proficiency}% proficiency
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
