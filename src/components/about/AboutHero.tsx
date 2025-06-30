'use client';

import { BookOpen, Heart, Sparkles, Star, Globe } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
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
        <span className="text-3xl">🌟</span>
      </div>
      <div className="absolute bottom-40 right-32 opacity-30 animate-float animation-delay-400">
        <span className="text-2xl">🐝</span>
      </div>
      <div className="absolute top-80 left-32 opacity-30 animate-float animation-delay-1200">
        <span className="text-xl">🌈</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Icon Section */}
          <div className="flex justify-center mb-12 animate-fly-in">
            <div className="relative group">
              {/* Main bee logo with book */}
              <div className="relative w-40 h-40 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-honeycomb flex items-center justify-center mb-6 shadow-honeycomb group-hover:scale-110 transition-all duration-700 animate-pulse-slow">
                <div className="relative">
                  <span className="text-8xl animate-float">🐝</span>
                  {/* Book in bee's hands */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-4xl animate-wiggle animation-delay-200">📖</div>
                </div>
              </div>
              
              {/* Enhanced sparkle effects */}
              <Sparkles className="absolute -top-6 -right-6 text-accent-400 animate-sparkle" size={32} />
              <Sparkles className="absolute -bottom-6 -left-6 text-primary-400 animate-sparkle animation-delay-400" size={28} />
              <Heart className="absolute top-12 -left-8 text-reading-400 animate-sparkle animation-delay-800" size={24} />
              <Star className="absolute top-12 -right-8 text-cultural-400 animate-sparkle animation-delay-600" size={26} />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-12 animate-fly-in animation-delay-200">
            <h1 className="text-5xl md:text-7xl font-heading font-bold gradient-text mb-6 text-shadow-lg">
              About PAPERBEE BOOKS
            </h1>
            
            <p className="text-3xl md:text-4xl text-reading-600 mb-6 font-medium text-shadow leading-relaxed">
              &ldquo;Inspiring young minds, 
              <br className="hidden md:block" />
              one book at a time&rdquo;
              <span className="inline-block animate-wiggle ml-2">✨</span>
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              We believe every child deserves access to stories that not only entertain but educate, inspire, and celebrate the beautiful diversity of our world. Join us on this magical journey of discovery and learning.
            </p>
          </div>

          {/* Mission Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 animate-fly-in animation-delay-400">
            {[
              { icon: '📚', label: 'Quality Stories', color: 'from-reading-400 to-reading-500' },
              { icon: '🌍', label: 'Global Reach', color: 'from-cultural-400 to-cultural-500' },
              { icon: '🎨', label: 'Creative Learning', color: 'from-accent-400 to-accent-500' },
              { icon: '💝', label: 'Heartfelt Care', color: 'from-nature-400 to-nature-500' }
            ].map((item, index) => (
              <div
                key={index}
                className="card group hover-lift"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="p-6 text-center">
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-honeycomb 
                    bg-gradient-to-br ${item.color} 
                    flex items-center justify-center shadow-bee
                    group-hover:scale-125 group-hover:rotate-12 transition-all duration-500
                  `}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-700 group-hover:text-primary-600 transition-colors">
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600 animate-fly-in animation-delay-600">
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Heart className="w-6 h-6 text-reading-500" />
              <span className="font-medium">Trusted by Families</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Star className="w-6 h-6 text-accent-500" />
              <span className="font-medium">Award-Winning Content</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300">
              <Globe className="w-6 h-6 text-cultural-500" />
              <span className="font-medium">Global Community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}