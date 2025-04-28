'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLayout, FiSmartphone, FiPenTool, FiCode } from 'react-icons/fi'

const services = [
  {
    title: 'Software Development',
    description: 'Building robust, scalable solutions with hands-on experience in full-stack development and a focus on the latest technologies.',
    icon: FiCode,
    delay: 0,
  },
  {
    title: 'Automation & Integration',
    description: 'Automating workflows and integrating platforms like Make.com to enhance efficiency and minimize manual intervention.',
    icon: FiSmartphone,
    delay: 0.2,
  },
  {
    title: 'Artificial Intelligence',
    description: 'Developing AI solutions, including reinforcement learning for MMO combat, with a focus on strategic decision-making and applied research.',
    icon: FiLayout,
    delay: 0.4,
  },
  {
    title: 'SaaS & Startup Development',
    description: 'Leading SaaS projects like Sibaqy, overseeing product design, customer experience, and seamless UI development.',
    icon: FiPenTool,
    delay: 0.6,
  },
  {
    title: 'Multidisciplinary Interests',
    description: 'Music production, mixing engineering, embroidery, sketching, and learning 3D modeling with Blender to balance technical and creative skills.',
    icon: FiPenTool,
    delay: 0.8,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
}

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
          >
            Key Areas of Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Here are the main domains where I focus my energy, combining technical skills and creativity to deliver impactful results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                custom={service.delay}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 dark:bg-primary/20 rounded-xl group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 