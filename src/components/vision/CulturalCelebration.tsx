'use client';

import { Globe, Heart, Users, Star, Sparkles, BookOpen } from 'lucide-react';

export default function CulturalCelebration() {
  const culturalValues = [
    {
      title: 'Respect & Authenticity',
      description: 'We honor each culture with deep respect, working with native speakers and cultural experts to ensure authentic representation.',
      emoji: '🙏',
      examples: [
        'Native language consultations',
        'Cultural expert partnerships',
        'Community feedback integration',
        'Traditional story preservation'
      ],
      color: 'from-cultural-400 to-cultural-500'
    },
    {
      title: 'Celebration of Diversity',
      description: 'Every culture brings unique beauty to our world. We celebrate these differences as strengths that enrich our global community.',
      emoji: '🎉',
      examples: [
        'Festival and tradition stories',
        'Diverse character representation',
        'Cultural art styles',
        'Traditional wisdom sharing'
      ],
      color: 'from-reading-400 to-reading-500'
    },
    {
      title: 'Bridge Building',
      description: 'Stories have the power to build bridges between cultures, fostering understanding and friendship across all boundaries.',
      emoji: '🌉',
      examples: [
        'Cross-cultural friendships',
        'Shared human experiences',
        'Common values exploration',
        'Global citizenship themes'
      ],
      color: 'from-nature-400 to-nature-500'
    },
    {
      title: 'Future Harmony',
      description: 'We envision a future where cultural diversity is not just accepted but celebrated as the foundation of a beautiful world.',
      emoji: '🕊️',
      examples: [
        'Unity in diversity themes',
        'Peaceful coexistence stories',
        'Environmental stewardship',
        'Global collaboration narratives'
      ],
      color: 'from-accent-400 to-accent-500'
    }
  ];

  const culturalSpotlight = [
    {
      region: 'South Asia',
      highlight: 'Rich storytelling traditions and philosophical wisdom',
      languages: ['Hindi', 'Urdu', 'Malayalam', 'Kannada', 'Tamil'],
      stories: ['Ancient wisdom tales', 'Festival celebrations', 'Family values'],
      emoji: '🏛️',
      flag: '🇮🇳'
    },
    {
      region: 'Middle East',
      highlight: 'Beautiful poetry and timeless moral stories',
      languages: ['Arabic', 'Farsi'],
      stories: ['Desert adventures', 'Merchant tales', 'Hospitality values'],
      emoji: '🕌',
      flag: '🇸🇦'
    },
    {
      region: 'East Asia',
      highlight: 'Harmony with nature and respect for elders',
      languages: ['Japanese', 'Mandarin'],
      stories: ['Nature appreciation', 'Seasonal celebrations', 'Honor traditions'],
      emoji: '🏯',
      flag: '🇯🇵'
    },
    {
      region: 'Southeast Asia',
      highlight: 'Community spirit and tropical life adventures',
      languages: ['Indonesian', 'Malay'],
      stories: ['Island adventures', 'Community cooperation', 'Natural harmony'],
      emoji: '🏝️',
      flag: '🇮🇩'
    }
  ];

  const culturalImpact = [
    {
      stat: '9',
      label: 'Languages',
      description: 'Authentic stories in native scripts',
      icon: '🗣️'
    },
    {
      stat: '15+',
      label: 'Cultures',
      description: 'Represented with respect and authenticity',
      icon: '🎭'
    },
    {
      stat: '25+',
      label: 'Countries',
      description: 'Connected through shared stories',
      icon: '🗺️'
    },
    {
      stat: '100%',
      label: 'Authentic',
      description: 'Culturally accurate representations',
      icon: '✨'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-cultural-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating cultural elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">🌍</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">🎭</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">🤝</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Celebrating Cultural Diversity
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Culture is the 
            <span className="gradient-text font-bold"> heartbeat of humanity</span>. Through our books, we celebrate the beautiful tapestry of traditions, languages, and wisdom that make our world extraordinary.
          </p>
        </div>

        {/* Cultural Philosophy */}
        <div className="mb-20 animate-fly-in animation-delay-400">
          <div className="card max-w-5xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cultural-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <Globe className="w-16 h-16 text-cultural-400" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Heart className="w-12 h-12 text-accent-400" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cultural-500 to-accent-500 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8 gradient-text">
                Our Cultural Philosophy
              </h3>
              
              <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
                <p className="mb-6">
                  We believe that every culture is a treasure chest of wisdom, stories, and values that have been passed down through generations. Rather than simply translating stories, we work to capture the essence, spirit, and unique perspective of each culture we represent.
                </p>
                
                <p className="text-xl font-medium text-cultural-700 italic mb-6">
                  &ldquo;In every language lies a different way of seeing the world. In every story lies a bridge to understanding.&rdquo;
                </p>
                
                <p>
                  Our commitment goes beyond representation—we strive for authentic celebration that honors the depth and richness of each cultural tradition while finding the universal threads that connect us all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800 animate-fly-in animation-delay-600">
            How We Honor Every Culture 🎨
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {culturalValues.map((value, index) => (
              <div
                key={index}
                className="card group hover-lift animate-fly-in overflow-hidden"
                style={{ animationDelay: `${700 + index * 150}ms` }}
              >
                {/* Header */}
                <div className={`relative p-6 bg-gradient-to-br ${value.color} text-white`}>
                  <div className="absolute inset-0 honeycomb-pattern opacity-20" />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-honeycomb flex items-center justify-center">
                      <span className="text-3xl">{value.emoji}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold">{value.title}</h4>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {value.description}
                  </p>

                  <div>
                    <h5 className="font-bold text-gray-800 mb-3">Examples in our work:</h5>
                    <div className="space-y-2">
                      {value.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full" />
                          <span className="text-sm text-gray-600">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Spotlight */}
        <div className="mb-20 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Cultural Spotlights 🌟
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {culturalSpotlight.map((culture, index) => (
              <div
                key={index}
                className="card hover-lift animate-fly-in"
                style={{ animationDelay: `${900 + index * 150}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl">{culture.emoji}</span>
                      <span className="text-3xl">{culture.flag}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{culture.region}</h4>
                      <p className="text-gray-600 text-sm">{culture.highlight}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h5 className="font-bold text-gray-700 mb-2">Languages:</h5>
                      <div className="space-y-1">
                        {culture.languages.map((lang, idx) => (
                          <div key={idx} className="text-sm text-gray-600 bg-gray-100 rounded px-2 py-1">
                            {lang}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-700 mb-2">Story Themes:</h5>
                      <div className="space-y-1">
                        {culture.stories.map((story, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <BookOpen className="w-3 h-3 text-primary-500" />
                            <span className="text-sm text-gray-600">{story}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Impact */}
        <div className="mb-16 animate-fly-in animation-delay-1000">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Cultural Impact 📊
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {culturalImpact.map((impact, index) => (
              <div
                key={index}
                className="text-center animate-fly-in"
                style={{ animationDelay: `${1100 + index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-honeycomb flex items-center justify-center shadow-bee hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{impact.icon}</span>
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{impact.stat}</div>
                <div className="text-lg font-medium text-gray-800 mb-1">{impact.label}</div>
                <div className="text-sm text-gray-600">{impact.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Unity */}
        <div className="text-center animate-fly-in animation-delay-1200">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-reading-50 to-cultural-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">🌈</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🤝</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                Unity in Beautiful Diversity 🌈
              </h3>
              
              <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
                <p className="mb-6">
                  Our greatest achievement is not in the number of cultures we represent, but in the connections we create. When a child in Mumbai reads about a Japanese festival, or when a young reader in Jakarta learns about Arabic poetry, we see the magic of cultural exchange at work.
                </p>
                
                <p className="text-xl font-medium text-cultural-700 italic mb-6">
                  &ldquo;We are not building walls between cultures; we are building windows through which children can see the beautiful diversity of our shared human family.&rdquo;
                </p>
              </div>

              {/* Cultural celebration */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center mb-8">
                {['🇺🇸', '🇮🇳', '🇸🇦', '🇯🇵', '🇮🇩', '🇵🇰', '🏛️', '🕌'].map((emoji, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-white rounded-full shadow-bee flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce-slow"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <span className="text-2xl">{emoji}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600">
                Together, we&apos;re creating a generation that sees diversity as strength, difference as beauty, and cultural exchange as the foundation of a peaceful world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}