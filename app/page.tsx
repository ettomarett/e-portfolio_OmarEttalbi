import type { Metadata } from 'next';
import React from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Languages from './components/sections/Languages';
import Interests from './components/sections/Interests';
import Contact from './components/sections/Contact';

export const metadata: Metadata = {
  title: 'My Portfolio | ETTALBI OMAR',
  description: 'Software Engineering Student at ENSIAS (Génie Logiciel). AI, Multi-Agent Systems, Full-Stack Development, Data Engineering & Model-Driven Engineering.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Languages />
      <Interests />
      <Contact />
      <footer className="w-full py-8 bg-secondary text-center text-gray-400 text-sm mt-12">
        &copy; {new Date().getFullYear()} Ettalbi Omar.      </footer>
    </main>
  );
} 