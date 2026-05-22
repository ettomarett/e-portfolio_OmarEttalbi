'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLayout, FiSmartphone, FiPenTool, FiCode } from 'react-icons/fi'
import { useLanguage } from '../../i18n/LanguageContext'

const serviceStyles = [
  { icon: FiCode, delay: 0, color: 'text-[#E8763A]', bg: 'bg-[#E8763A]/10 dark:bg-[#E8763A]/20', bgHover: 'group-hover:bg-[#E8763A]/20 dark:group-hover:bg-[#E8763A]/30' },
  { icon: FiLayout, delay: 0.2, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/20', bgHover: 'group-hover:bg-[#4CAF7D]/20 dark:group-hover:bg-[#4CAF7D]/30' },
  { icon: FiPenTool, delay: 0.4, color: 'text-[#6C5CE7]', bg: 'bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/20', bgHover: 'group-hover:bg-[#6C5CE7]/20 dark:group-hover:bg-[#6C5CE7]/30' },
  { icon: FiSmartphone, delay: 0.6, color: 'text-[#E8763A]', bg: 'bg-[#E8763A]/10 dark:bg-[#E8763A]/20', bgHover: 'group-hover:bg-[#E8763A]/20 dark:group-hover:bg-[#E8763A]/30' },
  { icon: FiCode, delay: 0.8, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/20', bgHover: 'group-hover:bg-[#4CAF7D]/20 dark:group-hover:bg-[#4CAF7D]/30' },
  { icon: FiCode, delay: 1.0, color: 'text-[#6C5CE7]', bg: 'bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/20', bgHover: 'group-hover:bg-[#6C5CE7]/20 dark:group-hover:bg-[#6C5CE7]/30' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
}

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.services.items.map((service, index) => {
            const style = serviceStyles[index]
            const Icon = style.icon
            return (
              <motion.div
                key={index}
                custom={style.delay}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className={`mb-6 inline-block p-4 ${style.bg} rounded-xl ${style.bgHover} transition-colors`}>
                  <Icon className={`w-8 h-8 ${style.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
