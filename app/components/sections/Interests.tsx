'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMicrophone, FaPalette, FaBroadcastTower, FaGamepad, FaMusic } from 'react-icons/fa'

const interests = [
  {
    category: 'Extracurricular',
    title: 'Founder & Lead — ENSIAS Radio',
    description: 'Student club leadership and radio broadcasting',
    icon: FaBroadcastTower,
    social: '@ensiasradiohq'
  },
  {
    category: 'Hobbies',
    title: 'Audio Processing',
    description: 'Music production and audio engineering',
    icon: FaMusic,
    social: null
  },
  {
    category: 'Hobbies',
    title: 'Embroidery',
    description: 'Creative textile arts and handcrafting',
    icon: FaPalette,
    social: null
  }
]

export default function Interests() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="interests" className="py-24 bg-gray-50 dark:bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Other Interests</h2>
            <div className="h-0.5 bg-primary/40 w-16 mb-8 mx-auto" />
            <p className="text-gray-600 dark:text-gray-400">
              Beyond software engineering, here are my extracurricular activities and personal interests
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={interest.title}
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
                        {interest.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {interest.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {interest.description}
                      </p>
                      {interest.social && (
                        <a
                          href={`https://instagram.com/${interest.social.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark text-sm font-medium"
                        >
                          {interest.social}
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
