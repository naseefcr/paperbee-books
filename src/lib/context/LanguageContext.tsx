/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/context/LanguageContext.tsx
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../translations'

type Language = 'en' | 'ar' | 'ja' | 'ml' | 'kn'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('paperbee-language') as Language
    if (savedLanguage && ['en', 'ar', 'ja', 'ml', 'kn'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem('paperbee-language', language)
    
    // Update HTML lang attribute
    document.documentElement.lang = language
    
    // Add RTL class for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.classList.add('arabic')
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.classList.remove('arabic')
    }
  }, [language])

  const t = (key: string): string => {
    const keys = key.split('.')
    let current: any = translations[language]
    
    for (const k of keys) {
      if (current[k] === undefined) return key
      current = current[k]
    }
    
    return current
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}