'use client'

import * as React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading uppercase tracking-wide">Professional Experience</h2>
          <div className="h-0.5 bg-primary/40 w-16 mb-8 mx-auto" />
          <div className="bg-white dark:bg-secondary p-6 rounded-2xl shadow-lg flex flex-col gap-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">Internship at Raise Up Consulting</h3>
            <p className="text-primary font-semibold">Full Stack Developer for 3 months</p>
          </div>
        </div>
      </div>
    </section>
  )
} 