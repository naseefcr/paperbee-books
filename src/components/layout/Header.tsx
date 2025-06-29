'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe, MessageCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageBadge from '../ui/LanguageBadge';
import CTAButton from '../ui/CTAButton';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'books', href: '#books' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLanguage = (langCode: string) => {
    window.location.href = `/${langCode}`;
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled 
        ? 'glass-honey shadow-honeycomb py-2' 
        : 'bg-white/95 backdrop-blur-md shadow-bee py-4'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className={cn(
              'relative w-12 h-12 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500',
              'rounded-honeycomb flex items-center justify-center shadow-bee',
              'transition-all duration-500 group-hover:scale-110 group-hover:rotate-12',
              'group-hover:shadow-honeycomb'
            )}>
              {/* Bee icon with animation */}
              <div className="relative">
                <span className="text-white font-bold text-xl animate-float">🐝</span>
                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-3 h-3 text-accent-300 animate-sparkle" />
                </div>
              </div>
            </div>
            
            <div className="transition-all duration-300 group-hover:scale-105">
              <h1 className="text-xl md:text-2xl font-heading font-bold gradient-text">
                PAPERBEE
              </h1>
              <p className="text-xs md:text-sm text-honey -mt-1">
                BOOKS 📚
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  'relative text-gray-700 hover:text-primary-600 transition-all duration-300',
                  'font-medium hover-lift text-shadow-sm',
                  'before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5',
                  'before:bg-gradient-to-r before:from-primary-500 before:to-accent-500',
                  'before:transition-all before:duration-300 hover:before:w-full'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {t(item.key)}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={cn(
                  'flex items-center space-x-2 text-gray-700 hover:text-primary-600',
                  'transition-all duration-300 hover-lift p-2 rounded-honeycomb',
                  'hover:bg-primary-50 hover:shadow-bee'
                )}
              >
                <Globe className="w-4 h-4 animate-float" />
                <span className="text-sm font-medium">{t('languages')}</span>
              </button>
              
              {isLanguageOpen && (
                <div className={cn(
                  'absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-honeycomb',
                  'border border-primary-100 p-3 min-w-48 z-50',
                  'animate-fly-in'
                )}>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          switchLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className="w-full text-left hover:bg-primary-50 rounded-lg p-2 transition-colors"
                      >
                        <LanguageBadge
                          language={lang.code}
                          nativeName={lang.native}
                          isActive={locale === lang.code}
                          variant={locale === lang.code ? 'cultural' : 'default'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/918590885155?text=Hello! I'd like to know more about PAPERBEE BOOKS."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center space-x-2 text-sm py-2 px-4 ml-4"
            >
              <MessageCircle size={16} />
              <span>Order Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-honeycomb transition-all duration-300',
              'hover:bg-primary-50 hover:shadow-bee',
              isMenuOpen && 'bg-primary-100 shadow-bee'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 text-primary-600 animate-wiggle" /> : 
              <Menu className="w-6 h-6 text-gray-700 hover:text-primary-600" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={cn(
            'lg:hidden mt-4 pb-4 border-t border-primary-200',
            'animate-fly-in'
          )}>
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={cn(
                    'text-gray-700 hover:text-primary-600 transition-all duration-300',
                    'font-medium p-3 rounded-honeycomb hover:bg-primary-50',
                    'hover:shadow-bee border border-transparent hover:border-primary-200'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-2 border-t border-primary-100">
                <div className="text-sm font-medium text-gray-600 mb-2 px-3">
                  {t('languages')}:
                </div>
                <div className="flex flex-wrap gap-2 px-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                    >
                      <LanguageBadge
                        language={lang.code}
                        nativeName={lang.native}
                        isActive={locale === lang.code}
                        variant={locale === lang.code ? 'cultural' : 'default'}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-2 px-3">
                <a
                  href="https://wa.me/918590885155?text=Hello! I'd like to know more about PAPERBEE BOOKS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-2 w-full py-3 px-6"
                >
                  <MessageCircle size={20} />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Close language dropdown when clicking outside */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </header>
  );
}