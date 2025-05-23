// components/Header.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'ar' as const, name: 'العربية', flag: '🇸🇦' },
    { code: 'ja' as const, name: '日本語', flag: '🇯🇵' },
    { code: 'ml' as const, name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'kn' as const, name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo placeholder - replace with actual logo */}
            <div className="h-12 w-12 relative">
              {/* You can replace this with your actual logo */}
              <Image
                src="/logo.png" // Place your logo in public/logo.png
                alt="Paperbee Books Logo"
                width={48}
                height={48}
                className="rounded-lg"
                onError={() => {
                  // Fallback if logo image doesn't exist
                  // e.currentTarget.style.display = 'none'
                  // e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Fallback logo */}
              <div className="h-12 w-12 bg-paperbee-yellow rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-paperbee-blue font-bold text-xl">🐝</span>
              </div>
            </div>
            <span className="text-xl font-bold text-paperbee-blue hidden sm:block">
              PAPERBEE BOOKS
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-paperbee-blue transition">
              {t('nav.home')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-paperbee-blue transition">
              {t('nav.about')}
            </Link>
            <Link href="/books" className="text-gray-700 hover:text-paperbee-blue transition">
              {t('nav.products')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-paperbee-blue transition">
              {t('nav.contact')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-1 text-gray-700 hover:text-paperbee-blue"
              >
                <Globe className="h-5 w-5" />
                <span className="hidden sm:inline">{language.toUpperCase()}</span>
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setShowLanguageMenu(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        language === lang.code 
                          ? 'bg-paperbee-yellow text-paperbee-blue' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-paperbee-blue" />
              <span className="absolute top-0 right-0 bg-paperbee-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 text-gray-700">{t('nav.home')}</Link>
            <Link href="/about" className="block py-2 text-gray-700">{t('nav.about')}</Link>
            <Link href="/books" className="block py-2 text-gray-700">{t('nav.products')}</Link>
            <Link href="/contact" className="block py-2 text-gray-700">{t('nav.contact')}</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header