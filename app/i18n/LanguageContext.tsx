'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { translations, type Language, type Translations } from './translations'

interface LanguageContextType {
  lang: Language
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'))
  }, [])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
