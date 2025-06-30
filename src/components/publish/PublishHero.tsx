'use client';

import { BookOpen, Heart, Sparkles, Star, Palette, Globe } from 'lucide-react';

export default function PublishHero() {
  return (
    <section className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-reading-50 via-white to-accent-50">
      {/* Background Animations */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 opacity-40 animate-float animation-delay-1000">
        <span className="text-4xl">📚</span>
      </div>
      <div className="absolute top-40 right-20 opacity-40 animate-float animation-delay-600">
        <span className="text-3xl">✨</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-40 animate-float animation-delay-800">
        <span className="text-2xl">🎨</span>
      </div>
      <div className="absolute top-60 right-10 opacity-40 animate-float">
        <span className="text-3xl">📖</span>
      </div>
      <div className="absolute bottom-40 right-32 opacity-30 animate-float animation-delay-400">
        <span className="text-2xl">🌟</span>
      </div>
      <div className="absolute top-80 left-32 opacity-30 animate-float animation-delay-1200">
        <span className="text-xl">🎯</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Icon Section */}
          <div className="flex justify-center mb-12 animate-fly-in">
            <div className="relative group">
              {/* Main publish symbol */}
              <div className="relative w-40 h-40 bg-gradient-to-br from-reading-500 via-accent-500 to-primary-500 rounded-honeycomb flex items-center justify-center mb-6 shadow-honeycomb group-hover:scale-110 transition-all duration-700 animate-pulse-slow">
                <div className="relative">
                  <span className="text-8xl animate-float">📚</span>
                  {/* Publishing rays */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-3xl animate-wiggle">✨</div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-3xl animate-wiggle animation-delay-200">🎨</div>
                  <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-2xl animate-wiggle animation-delay-400">📖</div>
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-2xl animate-wiggle animation-delay-600">🌟</div>
                </div>
              </div>
              
              {/* Orbiting publishing elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce">🏆</div>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-3xl animate-bounce animation-delay-500">🌍</div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce animation-delay-1000">💝</div>
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-3xl animate-bounce animation-delay-750">🎵</div>
              </div>
              
              {/* Enhanced sparkle effects */}
              <Sparkles className="absolute -top-6 -right-6 text-accent-400 animate-sparkle" size={32} />
              <Sparkles className="absolute -bottom-6 -left-6 text-reading-400 animate-sparkle animation-delay-400" size={28} />
              <BookOpen className="absolute top-12 -left-8 text-primary-400 animate-sparkle animation-delay-800" size={24} />
              <Star className="absolute top-12 -right-8 text-cultural-400 animate-sparkle animation-delay-600" size={26} />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-12 animate-fly-in animation-delay-200">
            <h1 className="text-5xl md:text-7xl font-heading font-bold gradient-text mb-6 text-shadow-lg">
              What We Publish
            </h1>
            
            <p className="text-3xl md:text-4xl text-reading-600 mb-6 font-medium text-shadow leading-relaxed">
              A treasure trove of stories, 
              <br className="hidden md:block" />
              knowledge, and imagination
              <span className="inline-block animate-wiggle ml-2">📖</span>
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              From enchanting storybooks to educational adventures, discover our carefully curated collection of children&apos;s literature designed to inspire, educate, and entertain young minds across cultures and languages.
            </p>
          </div>

          {/* Publishing Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16 animate-fly-in animation-delay-400">
            {[
              { 
                icon: '📚', 
                label: 'Storybooks', 
                count: '15+',
                color: 'from-reading-400 to-reading-500',
                description: 'Magical tales & folktales'
              },
              { 
                icon: '🎵', 
                label: 'Poetry', 
                count: '8+',
                color: 'from-cultural-400 to-cultural-500',
                description: 'Rhythmic & meaningful verses'
              },
              { 
                icon: '🎓', 
                label: 'Educational', 
                count: '20+',
                color: 'from-nature-400 to-nature-500',
                description: 'Learning made fun'
              },
              { 
                icon: '🌍', 
                label: 'Language', 
                count: '12+',
                color: 'from-primary-400 to-primary-500',
                description: 'Bilingual & grammar books'
              },
              { 
                icon: '🎨', 
                label: 'Art & Creativity', 
                count: '10+',
                color: 'from-accent-400 to-accent-500',
                description: 'Creative expression guides'
              }
            ].map((category, index) => (
              <div
                key={index}
                className="card group hover-lift"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="p-6 text-center">
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-honeycomb 
                    bg-gradient-to-br ${category.color} 
                    flex items-center justify-center shadow-bee
                    group-hover:scale-125 group-hover:rotate-12 transition-all duration-500
                  `}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-1">{category.count}</div>
                  <h3 className="text-sm md:text-base font-bold text-gray-700 group-hover:text-primary-600 transition-colors mb-1">
                    {category.label}
                  </h3>
                  <p className="text-xs text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Publishing Promise */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto animate-fly-in animation-delay-600">
            <div className="flex items-center justify-center mb-6">
              <Palette className="w-12 h-12 text-accent-500 mr-4" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">Our Publishing Promise</h2>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium text-center italic mb-6">
              &ldquo;Every book we publish is a carefully crafted key that unlocks worlds of wonder, knowledge, and cultural understanding for young readers everywhere.&rdquo;
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Heart className="w-8 h-8 mx-auto mb-3 text-reading-500" />
                <h3 className="font-bold text-gray-800 mb-2">Child-Centered</h3>
                <p className="text-sm text-gray-600">Every book designed with children&apos;s development in mind</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 mx-auto mb-3 text-cultural-500" />
                <h3 className="font-bold text-gray-800 mb-2">Culturally Rich</h3>
                <p className="text-sm text-gray-600">Celebrating diversity through authentic representation</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 mx-auto mb-3 text-accent-500" />
                <h3 className="font-bold text-gray-800 mb-2">Quality First</h3>
                <p className="text-sm text-gray-600">Uncompromising standards in content and production</p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 animate-fly-in animation-delay-800">
            <div className="flex items-center gap-2 bg-gradient-to-r from-reading-100 to-accent-100 px-4 py-2 rounded-full">
              <BookOpen className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Explore our complete collection below</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}