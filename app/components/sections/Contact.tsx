'use client'

import * as React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaGlobe, FaChess } from 'react-icons/fa'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">{t.contact.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{t.contact.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-8 text-primary text-lg font-medium">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:omar_ettalbi2@um5.ac.ma" className="hover:underline text-black dark:text-white">omar_ettalbi2@um5.ac.ma</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              <a href="tel:+33766919824" className="hover:underline text-black dark:text-white">+33 7 66 91 98 24</a>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe />
              <a href="https://ettalbi.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">ettalbi.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub />
              <a href="https://github.com/ettomarett" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">@ettomarett</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/omar-ettalbi" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">omar-ettalbi</a>
            </div>
            <div className="flex items-center gap-2">
              <FaChess />
              <a href="https://www.chess.com/member/7iyy" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">7iyy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
