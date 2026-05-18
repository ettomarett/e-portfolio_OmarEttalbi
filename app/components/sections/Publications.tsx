'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBook, FaExternalLinkAlt, FaBrain } from 'react-icons/fa'

export default function Publications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            Scientific Publication
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Published research bridging neuroscience, content analysis, and viewer behavior.
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
                  Scientific Publication
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Khozai — Understanding Content Engagement Through Neuroscience
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                A formal scientific framework connecting the physics of video content to the biology of the human brain to the behavior of real viewers. The book spans 13 chapters across 5 parts — covering brain architecture, dimensions of experience, behavioral measurement vectors, mutation and correlation engines, inference chains, calibration and governance, and real-world applications. A multidisciplinary work at the intersection of neuroscience, data science, and content analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Neuroscience', 'Content Analytics', 'Behavioral Science', 'Data Science', 'Formal Framework'].map((tag) => (
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
                Read on khozai.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
