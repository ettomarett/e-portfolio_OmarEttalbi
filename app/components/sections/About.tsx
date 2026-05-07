'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaJava, FaDatabase, FaReact, FaGitAlt, FaDocker, FaCode, FaLinux } from 'react-icons/fa'
import { SiPostgresql, SiSpringboot, SiNextdotjs, SiTypescript, SiTensorflow, SiPytorch, SiApachespark, SiBlender } from 'react-icons/si'

const skills = [
  { name: 'Python', icon: FaPython },
  { name: 'Java / Spring Boot', icon: SiSpringboot },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React / Next.js', icon: FaReact },
  { name: 'PostgreSQL / SQL', icon: SiPostgresql },
  { name: 'TensorFlow / Keras', icon: SiTensorflow },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'Docker / CI-CD', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Linux', icon: FaLinux },
  { name: 'Power BI / Tableau', icon: FaDatabase },
  { name: 'SAP S/4HANA', icon: FaCode },
  { name: 'Spark / dbt', icon: SiApachespark },
  { name: 'XML / XSLT / XSD', icon: FaCode },
  { name: 'Blender', icon: SiBlender },
]

const education = [
  {
    school: 'ENSIAS — Université Mohammed V',
    degree: 'Cycle d\'Ingénieur — Génie Logiciel (Software Engineering)',
    location: 'Rabat, Morocco',
    years: '2022–2026 (3ème Année — S6 PFE in progress)'
  },
  {
    school: 'CPGE TSI — Classes Préparatoires, Settat',
    degree: 'Maths, Physics & Engineering Sciences — CNC top 18%',
    location: 'Settat, Morocco',
    years: '2020–2022'
  },
]

const certifications = [
  { name: 'IBM AI Analyst Professional Certificate', year: '2025' },
  { name: 'DataCamp — Deep Reinforcement Learning in Python', year: '2025' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
          >
            About Me
          </motion.h2>
        </div>

        {/* About Me Card - above Education */}
        <div id="about-me-card" className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">About Me</h3>
            <div className="bg-gray-50 dark:bg-secondary-light p-4 rounded-xl shadow-sm">
              <div className="text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  Final-year Software Engineering student at ENSIAS (Université Mohammed V, Rabat). My training spans the full software lifecycle — from algorithms and formal methods to enterprise architecture, AI, and DevOps — with a strong foundation in mathematics and engineering sciences from CPGE TSI (top 18% CNC).
                </p>

                <p className="mb-4">
                  I have hands-on experience building multi-agent AI systems, full-stack web platforms, ML pipelines, and data-driven dashboards. I work across Python, Java/Spring Boot, TypeScript/React/Next.js, and modern data tools (dbt, Spark, SAP).
                </p>

                <p>
                  Currently completing my end-of-studies internship at Diehl Aviation (Toulouse, France), working on digitalization of shop floor processes with SAP S/4HANA, SAP Datasphere, and SAP Analytics Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div id="education-card" className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((edu) => (
                <div key={edu.school} className="bg-gray-50 dark:bg-secondary-light p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-lg mb-1">{edu.school}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{edu.degree}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{edu.location}</div>
                  <div className="text-xs text-gray-400">{edu.years}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div id="skills-card" className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <span className="text-3xl mb-2"><skill.icon /></span>
                  <span className="text-xs text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div id="certifications-card" className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-gray-50 dark:bg-secondary-light p-4 rounded-xl shadow-sm flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-bold text-sm">{cert.name}</div>
                    <div className="text-xs text-gray-400">{cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 