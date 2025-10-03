'use client'

import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Masonry from 'react-masonry-css'
import { FaReact, FaPython, FaWordpress, FaRobot, FaDatabase } from 'react-icons/fa'
import { SiSpring, SiUnity, SiTensorflow } from 'react-icons/si'

const projects = [
  {
    id: 1,
    title: 'Morocco Rainfall & Wealth Analysis',
    category: 'Data Analytics',
    image: '',
    tags: ['Python', 'Pandas', 'Prophet', 'statsmodels', 'ARIMA', 'SARIMA', 'Holt-Winters'],
    description: 'Unified geospatial–temporal dataset (admin boundaries, monthly rainfall, Relative Wealth Index) with lag/rolling features and drought/variability metrics; evaluated four forecasting approaches across 60 rolling test periods — Prophet (MAE 8.41), Holt–Winters (8.91), SARIMA (10.23), ARIMA (11.30) — and delivered a lightweight Python analysis dashboard (maps, trends, KPI cards) with documented assumptions and data lineage.',
    year: '2025'
  },
  {
    id: 2,
    title: 'Monolith → Microservices Migration Framework',
    category: 'AI & Cloud',
    image: '',
    tags: ['Python', 'LLM', 'DeepSeek', 'MCP Tools', 'Docker', 'Kubernetes', 'Google ADK'],
    description: 'AI-assisted framework that analyzes monolith boundaries and scaffolds microservices with a container-first approach. Generates per-service Dockerfiles/manifests, baseline REST stubs and tests, API-gateway routes, and health checks, with a local Compose runner to accelerate POC→MVP hand-off.',
    year: '2025'
  },
  {
    id: 3,
    title: 'Office Equipment Management Tool',
    category: 'Web Application',
    image: '',
    tags: ['React', 'TypeScript', 'Spring Boot', 'REST APIs', 'OpenAPI', 'Docker', 'GitHub Actions'],
    description: 'Web app for asset tracking and maintenance with clear service boundaries and strongly typed API contracts. Delivered an asset register plus maintenance request flows (create → status updates → history), with validated, paginated REST endpoints and a responsive React UI in TypeScript. Dockerized for dev/prod parity and wired to CI/CD for reliable releases.',
    year: '2025'
  },
  {
    id: 4,
    title: 'News & Blogging Website',
    category: 'Website',
    image: '',
    tags: ['WordPress', 'PHP', 'JavaScript', 'Docker', 'GitHub Actions'],
    description: 'Content site for articles/news with automated deployments.',
    year: '2024'
  },
  {
    id: 5,
    title: 'Data Analytics & Insights Pipeline',
    category: 'Data Analytics',
    image: '',
    tags: ['Python', 'Pandas', 'Google APIs', 'Taboola APIs', 'Docker', 'GitHub Actions'],
    description: 'Automated ingestion from multiple APIs, transformation with Pandas, and scheduled insights dashboards (idempotent jobs, schema checks).',
    year: '2024'
  }
]

const categories = ['All', 'Web Application', 'Website', 'Data Analytics', 'AI & Cloud']

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
}

const projectIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Web Application': FaReact,
  'Website': FaWordpress,
  'Data Analytics': FaDatabase,
  'AI & Cloud': FaRobot,
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All' ? true : project.tags.includes(activeCategory)
  )

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Here are some of my recent projects. Each one is crafted with attention to detail and focus on user experience.
          </motion.p>
        </div>

        {/* Projects Grid - Redesigned, no filter, with icons */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = projectIcons[project.category as string] || FaReact
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group flex flex-col overflow-hidden"
              >
                <div className="flex items-center justify-center h-48 w-full bg-primary/10 dark:bg-primary/20">
                  <Icon className="text-primary text-6xl" />
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <span className="text-xs bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-2 py-1 rounded-full font-medium">
                      {project.year}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">{project.category}</span>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 