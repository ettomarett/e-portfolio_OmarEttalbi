'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link as ScrollLink } from 'react-scroll'
import { useLanguage } from '../../i18n/LanguageContext'

const navKeys = ['home', 'about', 'services', 'projects', 'publications', 'experience', 'languages', 'interests', 'contact'] as const
const navHrefs = ['hero', 'about', 'services', 'projects', 'publications', 'experience', 'languages', 'interests', 'contact']

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, t, toggleLanguage } = useLanguage()

  if (pathname === '/curriculum') return null

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : ''
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0" />

          <div className="hidden md:flex items-center space-x-8">
            {navKeys.map((key, i) => (
              <ScrollLink
                key={key}
                to={navHrefs[i]}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-300 hover:text-primary transition-colors cursor-pointer"
              >
                {t.nav[key]}
              </ScrollLink>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full border border-gray-600 hover:border-primary text-gray-300 hover:text-primary transition-colors text-sm font-medium"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-300" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
              onClick={() => setIsOpen(false)}
            />
            <div className="md:hidden mt-4 relative z-50 animate-in slide-in-from-top-2 fade-in duration-300">
              <div className="bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-700/50 shadow-xl">
                <div className="flex flex-col space-y-2 py-4 px-4">
                  {navKeys.map((key, i) => (
                    <ScrollLink
                      key={key}
                      to={navHrefs[i]}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-gray-300 hover:text-primary transition-all duration-200 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-800/50 transform hover:translate-x-1"
                      onClick={() => setIsOpen(false)}
                      style={{
                        animationDelay: `${i * 50}ms`,
                        animation: 'slideInFromLeft 0.3s ease-out forwards'
                      }}
                    >
                      {t.nav[key]}
                    </ScrollLink>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
