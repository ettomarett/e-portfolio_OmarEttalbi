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
    title: 'Smart Sleep Tracker — ML Closed-Loop Recommendation System',
    category: 'AI & Cloud',
    image: '',
    tags: ['CatBoost', 'LightGBM', 'React Native', 'FastAPI', 'dbt', 'PostgreSQL'],
    description: 'Dual-model closed-loop system: Model A (CatBoost) for sleep quality prediction and Model B (LightGBM Ranker) for optimizing personalized intervention policies. Learns from user feedback to refine recommendations. Modern data stack with Great Expectations for data quality.',
    year: '2026'
  },
  {
    id: 2,
    title: 'Mo-To-Mi — Multi-Agent LLM Migration Framework',
    category: 'AI & Cloud',
    image: '',
    tags: ['Python', 'LLM', 'Multi-Agent', 'Google ADK', 'Docker', 'Spring Boot'],
    description: 'Multi-agent AI system for automated migration of monolithic Spring Boot apps to microservices. 5 specialized autonomous agents (Architect, Observer, Strategist, Builder, Validator), each powered by dedicated LLMs with domain-specific prompts and tools. Tested on real applications.',
    year: '2025'
  },
  {
    id: 3,
    title: 'Morocco Rainfall & Wealth Analysis',
    category: 'Data Analytics',
    image: '',
    tags: ['Python', 'Prophet', 'ARIMA', 'Leaflet', 'Geospatial', 'Pandas'],
    description: 'Individual project: multi-source geospatial data integration (45-year rainfall records, Relative Wealth Index). Interactive dashboards with Leaflet maps. Benchmarked 4 time series models — Prophet achieved best MAE (8.41). Full Python pipeline with point-in-polygon analysis.',
    year: '2025'
  },
  {
    id: 4,
    title: 'RAG Architecture — Technical Research Report',
    category: 'AI & Cloud',
    image: '',
    tags: ['RAG', 'LLM', 'Vector DB', 'LangChain', 'FAISS', 'Pinecone'],
    description: 'Research report on RAG pipeline architecture: document retrieval, embedding, chunking, vector databases. Comparative analysis vs. fine-tuning and traditional search. Market analysis of RAG ecosystem. Systematic literature review (2022–2025) with structured scoring matrices.',
    year: '2026'
  },
  {
    id: 5,
    title: 'SI Relevés — AI-Assisted Meter Reading Management',
    category: 'Web Application',
    image: '',
    tags: ['AI Coding', 'Vitest', 'Cursor IDE', 'Full-Stack', 'ERP'],
    description: 'AI-assisted web application for meter reading management with AI-driven requirements extraction, use case modeling, dashboards with statistics, and ERP simulation module. 75 tests (45 backend, 30 frontend) with Vitest. AI-augmented software engineering workflow.',
    year: '2026'
  },
  {
    id: 6,
    title: 'Equipment Supervision Tool',
    category: 'Web Application',
    image: '',
    tags: ['Spring Boot', 'Angular', 'JWT', 'PostgreSQL', 'REST APIs'],
    description: 'Full-stack web application for equipment supervision, maintenance request tracking, and role-based access control (RBAC). UML design, CRUD operations, and user-friendly dashboard for supervisors and employees.',
    year: '2023'
  },
  {
    id: 7,
    title: 'TIPE — Autonomous Drone Navigation with Deep RL',
    category: 'AI & Cloud',
    image: '',
    tags: ['Unity 3D', 'ML-Agents', 'Deep RL', 'C#', 'Python'],
    description: 'Individual CPGE research project: modeled a city environment, drone, and sensors in Unity 3D. Trained an autonomous navigation agent using the ML-Agents toolkit with deep RL (Q-learning, policy gradients, reward shaping) for waste management network navigation.',
    year: '2022'
  },
]

const categories = ['All', 'Web Application', 'Website', 'Data Analytics', 'AI & Cloud']

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
}

const projectStyles: { [key: string]: { icon: React.ComponentType<{ className?: string }>, color: string, bg: string } } = {
  'Web Application': { icon: FaReact, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/15' },
  'Website': { icon: FaWordpress, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/15' },
  'Data Analytics': { icon: FaDatabase, color: 'text-[#6C5CE7]', bg: 'bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/15' },
  'AI & Cloud': { icon: FaRobot, color: 'text-[#E8763A]', bg: 'bg-[#E8763A]/10 dark:bg-[#E8763A]/15' },
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
        <div className="max-w-6xl mx-auto text-center mb-16">
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
            const style = projectStyles[project.category as string] || projectStyles['AI & Cloud']
            const Icon = style.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group flex flex-col overflow-hidden"
              >
                <div className={`flex items-center justify-center h-48 w-full ${style.bg}`}>
                  <Icon className={`${style.color} text-6xl`} />
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`text-xs ${style.bg} ${style.color} px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2`}>
                      {project.year}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">{project.category}</span>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 dark:bg-white/[0.07] text-gray-300 rounded-full text-xs font-medium"
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