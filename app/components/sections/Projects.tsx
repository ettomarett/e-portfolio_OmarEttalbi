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
    id: 6,
    title: 'Monolith to Microservices Migration Framework',
    category: 'AI & Cloud',
    image: '', // No image, will use icon
    tags: ['Python', 'Google-ADK', 'LLM', 'MCP Tools', 'Docker', 'Kubernetes'],
    description: 'A framework to migrate monolithic applications to microservices, featuring an AI agent developed with Google-ADK, Python, LLM, and MCP Tools, deployed using Docker and Kubernetes.'
  },
  {
    id: 1,
    title: 'Study Abroad Consultancy',
    category: 'Web Application',
    image: 'https://via.placeholder.com/600x400.png/3B82F6/FFFFFF?text=Study+Abroad',
    tags: ['Next JS', 'PostgreSQL', 'REST API', 'Typescript', 'CSS'],
    description: 'A consultancy platform for students to explore study abroad opportunities.'
  },
  {
    id: 2,
    title: 'Equipment Maintenance Supervisor',
    category: 'Web Application',
    image: 'https://via.placeholder.com/600x400.png/3B82F6/FFFFFF?text=Maintenance',
    tags: ['React JS', 'Spring Boot', 'REST API', 'Typescript', 'CSS'],
    description: 'A web app for managing and supervising equipment maintenance tasks.'
  },
  {
    id: 3,
    title: 'Articles and News Website',
    category: 'Website',
    image: 'https://via.placeholder.com/600x400.png/3B82F6/FFFFFF?text=News+Site',
    tags: ['WordPress', 'PHP', 'Javascript', 'HTML', 'CSS'],
    description: 'A dynamic website for publishing articles and news.'
  },
  {
    id: 4,
    title: 'Automated Data Analytics',
    category: 'Data Analytics',
    image: 'https://via.placeholder.com/600x400.png/3B82F6/FFFFFF?text=Data+Analytics',
    tags: ['Python', 'Pandas', 'Google Analytics API', 'Taboola API'],
    description: 'Automated data collection and analysis for business insights.'
  },
  {
    id: 5,
    title: 'Autonomous Drone RL',
    category: 'Machine Learning',
    image: 'https://via.placeholder.com/600x400.png/3B82F6/FFFFFF?text=Drone+RL',
    tags: ['Unity 3D', 'Tensorflow', 'ML-Agents', 'C#'],
    description: 'A reinforcement learning project for autonomous drone navigation and combat.'
  },
]

const categories = ['All', 'Web Application', 'Website', 'Data Analytics', 'Machine Learning']

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
}

const projectIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Web Application': FaReact,
  'Website': FaWordpress,
  'Data Analytics': FaDatabase,
  'Machine Learning': FaRobot,
  'AI & Cloud': FaRobot,
  'Spring Boot': SiSpring,
  'Unity 3D': SiUnity,
  'Tensorflow': SiTensorflow,
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
                  <h3 className="text-xl font-bold mb-1 text-primary">{project.title}</h3>
                  <span className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">{project.category}</span>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
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