'use client'

import * as React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Feel free to reach out for opportunities, collaborations, or just to connect!</p>
          <div className="flex flex-wrap justify-center gap-8 text-[#80003c] text-lg font-medium">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:omar_ettalbi2@um5.ac.ma" className="hover:underline text-black dark:text-white">omar_ettalbi2@um5.ac.ma</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              <a href="tel:0604546427" className="hover:underline text-black dark:text-white">06 04 54 64 27</a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub />
              <a href="https://github.com/ettomarett" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">@ettomarett</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/omar-ettalbi" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">omar-ettalbi</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 