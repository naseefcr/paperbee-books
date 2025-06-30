'use client';

import { useState } from 'react';
import { Globe, BookOpen, Users, Star, Heart, Sparkles, ChevronRight } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function Languages() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languages = [
    {
      code: 'en',
      name: 'English',
      native: 'English',
      flag: '🇺🇸',
      books: 25,
      popular: true,
      sample: 'Once upon a time...',
      description: 'Classic storytelling in the universal language of imagination',
      regions: ['North America', 'Europe', 'Australia', 'India'],
      color: 'from-blue-400 to-blue-500'
    },
    {
      code: 'hi',
      name: 'Hindi',
      native: 'हिंदी',
      flag: '🇮🇳',
      books: 18,
      popular: true,
      sample: 'एक बार की बात है...',
      description: 'Rich cultural narratives in the heart language of India',
      regions: ['North India', 'Central India'],
      color: 'from-orange-400 to-orange-500'
    },
    {
      code: 'ar',
      name: 'Arabic',
      native: 'العربية',
      flag: '🇸🇦',
      books: 12,
      popular: false,
      sample: 'في قديم الزمان...',
      description: 'Timeless tales in the beautiful Arabic script',
      regions: ['Middle East', 'North Africa'],
      color: 'from-green-400 to-green-500'
    },
    {
      code: 'ja',
      name: 'Japanese',
      native: '日本語',
      flag: '🇯🇵',
      books: 8,
      popular: false,
      sample: 'むかしむかし...',
      description: 'Delicate stories reflecting Japanese culture and values',
      regions: ['Japan'],
      color: 'from-red-400 to-red-500'
    },
    {
      code: 'id',
      name: 'Indonesian',
      native: 'Bahasa Indonesia',
      flag: '🇮🇩',
      books: 10,
      popular: false,
      sample: 'Pada zaman dahulu...',
      description: 'Vibrant stories from the Indonesian archipelago',
      regions: ['Indonesia', 'Malaysia'],
      color: 'from-purple-400 to-purple-500'
    },
    {
      code: 'ml',
      name: 'Malayalam',
      native: 'മലയാളം',
      flag: '🇮🇳',
      books: 7,
      popular: false,
      sample: 'ഒരു കാലത്ത്...',
      description: 'Beautiful stories in God\'s Own Country language',
      regions: ['Kerala', 'Lakshadweep'],
      color: 'from-teal-400 to-teal-500'
    },
    {
      code: 'kn',
      name: 'Kannada',
      native: 'ಕನ್ನಡ',
      flag: '🇮🇳',
      books: 6,
      popular: false,
      sample: 'ಒಂದು ಕಾಲದಲ್ಲಿ...',
      description: 'Engaging tales from the Silicon Valley of India',
      regions: ['Karnataka'],
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      code: 'ta',
      name: 'Tamil',
      native: 'தமிழ்',
      flag: '🇮🇳',
      books: 9,
      popular: false,
      sample: 'ஒரு காலத்தில்...',
      description: 'Ancient wisdom in one of the world\'s oldest languages',
      regions: ['Tamil Nadu', 'Sri Lanka'],
      color: 'from-pink-400 to-pink-500'
    },
    {
      code: 'ur',
      name: 'Urdu',
      native: 'اردو',
      flag: '🇵🇰',
      books: 5,
      popular: false,
      sample: 'ایک دفعہ کا ذکر ہے...',
      description: 'Poetic storytelling in the language of poetry',
      regions: ['Pakistan', 'North India'],
      color: 'from-indigo-400 to-indigo-500'
    }
  ];

  const totalBooks = languages.reduce((sum, lang) => sum + lang.books, 0);
  const popularLanguages = languages.filter(lang => lang.popular);

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-cultural-50 to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating cultural elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">🌍</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">📚</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">✨</span>
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-float animation-delay-400">
        <span className="text-3xl">🎨</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Languages We Publish
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 animate-fly-in animation-delay-200">
            Celebrating diversity through <span className="gradient-text font-bold">multilingual storytelling</span>. 
            Every language opens a new world of imagination and cultural understanding.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 animate-fly-in animation-delay-400">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{languages.length}</div>
              <div className="text-gray-600">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{totalBooks}</div>
              <div className="text-gray-600">Total Books</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-600">Regions Covered</div>
            </div>
          </div>
        </div>

        {/* Popular Languages Showcase */}
        <div className="mb-16 animate-fly-in animation-delay-600">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-gray-800">
            Most Popular Languages 🌟
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {popularLanguages.map((lang, index) => (
              <div
                key={lang.code}
                className="card group hover-lift cursor-pointer transition-all duration-500 overflow-hidden"
                onClick={() => setSelectedLanguage(selectedLanguage === lang.code ? null : lang.code)}
                style={{ animationDelay: `${700 + index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{lang.flag}</div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                          {lang.name}
                        </h4>
                        <p className="text-xl text-gray-600">{lang.native}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary-600">{lang.books}</div>
                      <div className="text-sm text-gray-500">Books</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-600 italic mb-2">&ldquo;{lang.sample}&rdquo;</p>
                    <p className="text-gray-700">{lang.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {lang.regions.map((region, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${lang.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Language Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-gray-800">
            Explore All Languages 🗺️
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {languages.map((lang, index) => (
              <div
                key={lang.code}
                className={`
                  language-card group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300
                  ${selectedLanguage === lang.code 
                    ? 'border-primary-400 bg-primary-50 shadow-bee' 
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-lg'
                  }
                  animate-fly-in hover-lift
                `}
                onClick={() => setSelectedLanguage(selectedLanguage === lang.code ? null : lang.code)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {lang.flag}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">
                    {lang.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{lang.native}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                    <BookOpen className="w-3 h-3" />
                    <span>{lang.books} books</span>
                  </div>
                </div>

                {/* Active indicator */}
                {selectedLanguage === lang.code && (
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Language Details Panel */}
        {selectedLanguage && (
          <div className="mb-16 animate-fly-in">
            {(() => {
              const lang = languages.find(l => l.code === selectedLanguage);
              if (!lang) return null;
              
              return (
                <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-10`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="text-8xl">{lang.flag}</div>
                      <div>
                        <h3 className="text-4xl font-heading font-bold text-gray-800 mb-2">
                          {lang.name} ({lang.native})
                        </h3>
                        <p className="text-xl text-gray-600 mb-4">{lang.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{lang.books} available books</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            <span>{lang.regions.length} regions</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Sample Text</h4>
                        <div className="bg-white/80 rounded-lg p-4 mb-4">
                          <p className="text-2xl text-gray-800 font-medium">{lang.sample}</p>
                        </div>
                        
                        <h4 className="font-bold text-gray-800 mb-3">Available Regions</h4>
                        <div className="flex flex-wrap gap-2">
                          {lang.regions.map((region, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                            >
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Order Books</h4>
                        <p className="text-gray-600 mb-4">
                          Interested in our {lang.name} collection? Get in touch to explore our {lang.books} available titles.
                        </p>
                        
                        <a
                          href={generateWhatsAppLink(`Hello! I'm interested in your ${lang.name} (${lang.native}) book collection from PAPERBEE BOOKS. Can you share more details?`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center space-x-3 py-3 px-6"
                        >
                          <span>Order {lang.name} Books</span>
                          <ChevronRight size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">🌈</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">📖</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-text">
                Don&apos;t See Your Language? 🤔
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                We&apos;re constantly expanding our multilingual collection. Let us know which language you&apos;d like to see next, 
                and we&apos;ll work on bringing those magical stories to your children!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={generateWhatsAppLink("Hello! I'd like to request books in a specific language that's not currently available in your collection.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 min-w-64 text-lg py-4 px-8 hover:scale-105"
                >
                  <Globe size={24} />
                  <span>Request a Language</span>
                </a>
                
                <a
                  href="#books"
                  className="btn-outline inline-flex items-center justify-center min-w-48 text-lg py-4 px-8 hover:scale-105"
                >
                  Browse All Books
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex justify-center items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-reading-500" />
                  <span>Cultural Authenticity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent-500" />
                  <span>Native Speakers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cultural-500" />
                  <span>Community Reviewed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}