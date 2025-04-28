import type { Metadata } from 'next';
import React from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

export const metadata: Metadata = {
  title: 'My Portfolio | ETTALBI OMAR',
  description: 'Welcome to my portfolio website showcasing my work as a Software Engineer.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <footer className="w-full py-8 bg-gray-100 dark:bg-secondary text-center text-gray-500 dark:text-gray-400 text-sm mt-12">
        &copy; {new Date().getFullYear()} Omar Ettalbi. All rights reserved.
      </footer>
    </main>
  );
} 