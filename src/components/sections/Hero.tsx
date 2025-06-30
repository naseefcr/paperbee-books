'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MessageCircle, BookOpen, Sparkles, Heart, Star, Globe, ChevronDown } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import LanguageBadge from '../ui/LanguageBadge';
import { useState } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [showLanguages, setShowLanguages] = useState(false);

  const whatsappMessage = `Hello! I'm interested in learning more about PAPERBEE BOOKS and your collection of children's books.`;

  const features = [
    { 
      icon: '📚', 
      label: 'Quality Stories',
      color: 'from-reading-400 to-reading-500',
      delay: '0ms'
    },
    { 
      icon: '✨', 
      label: 'Creative Learning',
      color: 'from-accent-400 to-accent-500',
      delay: '200ms'
    },
    { 
      icon: '🌍', 
      label: 'Global Reach',
      color: 'from-cultural-400 to-cultural-500',
      delay: '400ms'
    },
    { 
      icon: '🎨', 
      label: 'Art & Imagination',
      color: 'from-nature-400 to-nature-500',
      delay: '600ms'
    },
  ];

  const supportedLanguages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'ar', name: 'Arabic', native: 'العربية' },
    { code: 'ja', name: 'Japanese', native: '日本語' },
    { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia' },
  ];

  const switchLanguage = (langCode: string) => {
    window.location.href = `/${langCode}`;
  };

  return (
    <section id="home" className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 opacity-40 animate-float animation-delay-1000">
        <span className="text-4xl">🐝</span>
      </div>
      <div className="absolute top-40 right-20 opacity-40 animate-float animation-delay-600">
        <span className="text-3xl">📖</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-40 animate-float animation-delay-800">
        <span className="text-2xl">✨</span>
      </div>
      <div className="absolute top-60 right-10 opacity-40 animate-float">
        <span className="text-3xl">🌟</span>
      </div>
      <div className="absolute bottom-40 right-32 opacity-30 animate-float animation-delay-400">
        <span className="text-2xl">🎨</span>
      </div>
      <div className="absolute top-80 left-32 opacity-30 animate-float animation-delay-1200">
        <span className="text-xl">🌈</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Icon Section with Enhanced Animation */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              {/* Main bee logo with pulsing effect */}
              <div className="relative w-36 h-36 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-honeycomb flex items-center justify-center mb-6 shadow-honeycomb group-hover:scale-110 transition-all duration-700 animate-pulse-slow">
                <div className="relative">
                  <span className="text-7xl animate-float">🐝</span>
                  {/* Enhanced wing effects */}
                  <div className="absolute -top-6 -left-3 text-3xl opacity-80 animate-wiggle">✨</div>
                  <div className="absolute -top-6 -right-3 text-3xl opacity-80 animate-wiggle animation-delay-200">✨</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-lg opacity-60 animate-wiggle animation-delay-400">💫</div>
                </div>
              </div>
              
              {/* Enhanced orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce">📚</div>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-3xl animate-bounce animation-delay-500">📖</div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce animation-delay-1000">🎨</div>
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-3xl animate-bounce animation-delay-750">🌍</div>
              </div>
              
              {/* Enhanced sparkle effects */}
              <Sparkles className="absolute -top-6 -right-6 text-accent-400 animate-sparkle" size={32} />
              <Sparkles className="absolute -bottom-6 -left-6 text-primary-400 animate-sparkle animation-delay-400" size={28} />
              <Sparkles className="absolute top-12 -left-8 text-reading-400 animate-sparkle animation-delay-800" size={24} />
              <Sparkles className="absolute top-12 -right-8 text-cultural-400 animate-sparkle animation-delay-600" size={26} />
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-heading font-bold gradient-text mb-6 animate-fly-in text-shadow-lg">
              Welcome to PAPERBEE BOOKS
            </h1>
            
            <p className="text-2xl md:text-4xl text-gray-700 mb-6 font-medium text-shadow animate-fly-in animation-delay-200 leading-relaxed">
              Bringing stories, creativity, and learning 
              <br className="hidden md:block" />
              to children everywhere 
              <span className="inline-block animate-wiggle ml-2">🌈</span>
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-400">
              Discover magical worlds, learn new languages, and explore cultures through our carefully crafted collection of children&apos;s books designed to inspire young minds across the globe.
            </p>
          </div>

          {/* Enhanced Language Selector */}
          <div className="mb-12 animate-fly-in animation-delay-600">
            <div className="flex flex-col items-center">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-honeycomb shadow-bee hover:shadow-honeycomb transition-all duration-300 hover:scale-105 mb-4"
              >
                <Globe className="w-5 h-5 text-cultural-500 animate-float" />
                <span className="text-gray-700 font-medium">Choose Your Language</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${showLanguages ? 'rotate-180' : ''}`} />
              </button>
              
              {showLanguages && (
                <div className="flex justify-center flex-wrap gap-3 animate-fly-in">
                  {supportedLanguages.map((lang, index) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className="animate-fly-in hover-lift"
                      style={{ animationDelay: `${index * 100}ms` }}
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
              )}
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fly-in animation-delay-800">
            <a
              href="#books"
              className="btn-primary inline-flex items-center space-x-3 min-w-64 justify-center text-xl py-5 px-10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <BookOpen size={28} />
              <span>Explore Our Books</span>
            </a>
            
            <a
              href={generateWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center space-x-3 min-w-64 justify-center text-xl py-5 px-10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl animate-pulse-slow"
            >
              <MessageCircle size={28} />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card group hover-lift animate-fly-in relative overflow-hidden"
                style={{ animationDelay: feature.delay }}
              >
                <div className="p-6 md:p-8 text-center relative z-10">
                  {/* Enhanced Feature Icon */}
                  <div className={`
                    w-20 h-20 mx-auto mb-6 rounded-honeycomb 
                    bg-gradient-to-br ${feature.color} 
                    flex items-center justify-center shadow-bee
                    group-hover:scale-125 group-hover:rotate-12 transition-all duration-500
                  `}>
                    <span className="text-3xl filter drop-shadow-sm animate-bounce-slow">
                      {feature.icon}
                    </span>
                  </div>
                  
                  {/* Feature Label */}
                  <h3 className="text-base md:text-lg font-bold text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.label}
                  </h3>
                </div>
                
                {/* Enhanced hover effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Sparkles className="w-4 h-4 text-accent-400 animate-sparkle" />
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600 animate-fly-in animation-delay-1000">
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Heart className="w-6 h-6 text-reading-500" />
              <span className="font-medium">Child-Safe Content</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Star className="w-6 h-6 text-accent-500" />
              <span className="font-medium">Educational Excellence</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Globe className="w-6 h-6 text-cultural-500" />
              <span className="font-medium">Cultural Diversity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}