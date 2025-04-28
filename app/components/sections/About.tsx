'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaWordpress, FaJoomla, FaPhp, FaCode } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiSpring, SiNextdotjs, SiUml, SiAdobephotoshop, SiAdobeillustrator, SiC } from 'react-icons/si'

const skills = [
  { name: 'Python', icon: FaPython },
  { name: 'C', icon: SiC },
  { name: 'Java', icon: FaJava },
  { name: 'React JS', icon: FaReact },
  { name: 'Next JS', icon: SiNextdotjs },
  { name: 'Spring Boot', icon: SiSpring },
  { name: 'WordPress', icon: FaWordpress },
  { name: 'Joomla', icon: FaJoomla },
  { name: 'PHP', icon: FaPhp },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'MySQL', icon: FaDatabase },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: FaGitAlt },
  { name: 'UML', icon: SiUml },
  { name: 'SysML', icon: SiUml },
  { name: 'Photoshop', icon: SiAdobephotoshop },
  { name: 'Illustrator', icon: SiAdobeillustrator },
]

const personalInfo = [
  { label: 'Age', value: '24' },
  { label: 'Location', value: 'Morocco' },
  { label: 'Education', value: 'ENSIAS Student' },
  { label: 'Languages', value: 'EN, FR, AR, ES' },
]

const education = [
  {
    school: 'National School of Computer Science and System Analysis (ENSIAS)',
    degree: 'Software Engineering',
    location: 'Rabat, Morocco',
    years: '2nd year. (Currently)'
  },
  {
    school: 'CPGE Settat - Preparatory school',
    degree: 'Technology and Sciences option',
    location: 'Settat, Morocco',
    years: 'Graduated in 2023'
  },
  { school: 'Independent Study', degree: 'Programming, Web Dev, DBMS', location: 'Ouarzazate, Morocco', years: '2020–2022' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
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
        <div id="about-me-card" className="max-w-3xl mx-auto mb-12">
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">About Me</h3>
            <div className="bg-gray-50 dark:bg-secondary-light p-4 rounded-xl shadow-sm">
              <div className="text-gray-700 dark:text-gray-300">
                I am a 25-year-old software engineering student at ENSIAS, Morocco, passionate about technology, innovation, and practical applications that merge technical prowess and creativity. My journey spans software development, automation, AI, and SaaS, with a drive to build robust, scalable, and creative solutions.
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div id="education-card" className="max-w-3xl mx-auto mb-12">
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
        <div id="skills-card" className="max-w-3xl mx-auto mb-12">
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
      </div>
    </section>
  )
} 