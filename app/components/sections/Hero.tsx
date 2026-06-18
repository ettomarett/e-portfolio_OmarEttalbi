'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaLinkedin, FaChess, FaMedium } from 'react-icons/fa'
import { useLanguage } from '../../i18n/LanguageContext'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/ettomarett' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/omar-ettalbi' },
  { name: 'Chess', icon: FaChess, href: 'https://www.chess.com/member/7iyy' },
  { name: 'Medium', icon: FaMedium, href: 'https://medium.com/@ettomarett' },
]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-lg text-primary mb-2">{t.hero.greeting}</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
              Ettalbi Omar
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
              {t.hero.subtitle}
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors cursor-pointer"
              >
                {t.hero.contactMe}
              </ScrollLink>
              <a
                href="/curriculum"
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-colors"
              >
                {t.hero.fullCurriculum}
              </a>
            </div>

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

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full" />
            <Image
              src="/images/omar.png"
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
