'use client';

import { Eye, Heart, Globe, Star, Sparkles, BookOpen } from 'lucide-react';

export default function VisionHero() {
  return (
    <section className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cultural-50 via-primary-50 to-reading-50">
      {/* Background Animations */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />
      
      {/* Animated Background Elements - Educational Theme */}
      <div className="absolute top-20 left-10 opacity-40 animate-float animation-delay-1000">
        <span className="text-4xl">🌟</span>
      </div>
      <div className="absolute top-40 right-20 opacity-40 animate-float animation-delay-600">
        <span className="text-3xl">🎯</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-40 animate-float animation-delay-800">
        <span className="text-2xl">💡</span>
      </div>
      <div className="absolute top-60 right-10 opacity-40 animate-float">
        <span className="text-3xl">🚀</span>
      </div>
      <div className="absolute bottom-40 right-32 opacity-30 animate-float animation-delay-400">
        <span className="text-2xl">🔮</span>
      </div>
      <div className="absolute top-80 left-32 opacity-30 animate-float animation-delay-1200">
        <span className="text-xl">🌈</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Icon Section - Vision Theme */}
          <div className="flex justify-center mb-12 animate-fly-in">
            <div className="relative group">
              {/* Main vision symbol */}
              <div className="relative w-40 h-40 bg-gradient-to-br from-cultural-500 via-primary-500 to-reading-500 rounded-honeycomb flex items-center justify-center mb-6 shadow-honeycomb group-hover:scale-110 transition-all duration-700 animate-pulse-slow">
                <div className="relative">
                  <span className="text-8xl animate-float">🔮</span>
                  {/* Vision rays */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-3xl animate-wiggle">✨</div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-3xl animate-wiggle animation-delay-200">💫</div>
                  <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-2xl animate-wiggle animation-delay-400">⭐</div>
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-2xl animate-wiggle animation-delay-600">🌟</div>
                </div>
              </div>
              
              {/* Orbiting vision elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce">🎯</div>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-3xl animate-bounce animation-delay-500">🌍</div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce animation-delay-1000">💝</div>
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-3xl animate-bounce animation-delay-750">📚</div>
              </div>
              
              {/* Enhanced sparkle effects */}
              <Sparkles className="absolute -top-6 -right-6 text-cultural-400 animate-sparkle" size={32} />
              <Sparkles className="absolute -bottom-6 -left-6 text-primary-400 animate-sparkle animation-delay-400" size={28} />
              <Eye className="absolute top-12 -left-8 text-reading-400 animate-sparkle animation-delay-800" size={24} />
              <Star className="absolute top-12 -right-8 text-accent-400 animate-sparkle animation-delay-600" size={26} />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-12 animate-fly-in animation-delay-200">
            <h1 className="text-5xl md:text-7xl font-heading font-bold gradient-text mb-6 text-shadow-lg">
              Our Vision & Mission
            </h1>
            
            <p className="text-3xl md:text-4xl text-cultural-600 mb-6 font-medium text-shadow leading-relaxed">
              Building bridges through books,
              <br className="hidden md:block" />
              one story at a time
              <span className="inline-block animate-wiggle ml-2">🌉</span>
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Our vision extends far beyond publishing books. We envision a world where every child, regardless of their background, has access to stories that celebrate diversity, foster understanding, and inspire dreams that know no boundaries.
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 animate-fly-in animation-delay-400">
            {[
              { 
                icon: '🎯', 
                label: 'Clear Purpose', 
                color: 'from-cultural-400 to-cultural-500',
                description: 'Every book serves a purpose'
              },
              { 
                icon: '🌍', 
                label: 'Global Impact', 
                color: 'from-primary-400 to-primary-500',
                description: 'Reaching children worldwide'
              },
              { 
                icon: '💝', 
                label: 'Heartfelt Care', 
                color: 'from-reading-400 to-reading-500',
                description: 'Created with love and attention'
              },
              { 
                icon: '🚀', 
                label: 'Future Ready', 
                color: 'from-accent-400 to-accent-500',
                description: 'Preparing minds for tomorrow'
              }
            ].map((pillar, index) => (
              <div
                key={index}
                className="card group hover-lift"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="p-6 text-center">
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-honeycomb 
                    bg-gradient-to-br ${pillar.color} 
                    flex items-center justify-center shadow-bee
                    group-hover:scale-125 group-hover:rotate-12 transition-all duration-500
                  `}>
                    <span className="text-2xl">{pillar.icon}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-700 group-hover:text-primary-600 transition-colors mb-2">
                    {pillar.label}
                  </h3>
                  <p className="text-xs text-gray-600">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vision Statement Preview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto animate-fly-in animation-delay-600">
            <div className="flex items-center justify-center mb-6">
              <Eye className="w-12 h-12 text-cultural-500 mr-4" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">Our Vision</h2>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium text-center italic">
              &ldquo;A world where every child sees themselves as a hero in their own story, equipped with the knowledge, empathy, and cultural understanding to create a more beautiful and united planet.&rdquo;
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cultural-100 to-primary-100 px-4 py-2 rounded-full">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">Scroll down to explore our complete vision</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600 mt-12 animate-fly-in animation-delay-800">
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Heart className="w-6 h-6 text-reading-500" />
              <span className="font-medium">Purpose-Driven</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Star className="w-6 h-6 text-accent-500" />
              <span className="font-medium">Globally Minded</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Globe className="w-6 h-6 text-cultural-500" />
              <span className="font-medium">Future Focused</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}