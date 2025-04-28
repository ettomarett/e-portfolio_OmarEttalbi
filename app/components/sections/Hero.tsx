'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/ettomarett' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/omar-ettalbi' },
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-lg text-primary mb-2">Hi, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
              Omar Ettalbi
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
              Software Engineering Student | Aspiring Entrepreneur | Multi-disciplinary Technologist
            </h2>
          
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors cursor-pointer"
              >
                Contact Me
              </ScrollLink>
              <a
                href="images\cvomar.pdf"
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-colors"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-8">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full" />
            <Image
              src="\images\omar.png"
              alt="Omar Ettalbi"
              width={400}
              height={400}
              className="rounded-full"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 