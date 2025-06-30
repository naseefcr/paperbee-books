'use client';

import { Book, Heart, Users, Lightbulb, Globe, Star, Sparkles } from 'lucide-react';

export default function Mission() {
  const missionPoints = [
    {
      icon: Book,
      title: 'Open Doors to Imagination',
      description: 'Every page turns into a gateway to magical worlds and endless possibilities',
      color: 'from-reading-400 to-reading-500',
      delay: '0ms'
    },
    {
      icon: Lightbulb,
      title: 'Spark Curiosity',
      description: 'Igniting the natural wonder and desire to learn in every young reader',
      color: 'from-accent-400 to-accent-500',
      delay: '200ms'
    },
    {
      icon: Globe,
      title: 'Foster Understanding',
      description: 'Building bridges between cultures through shared stories and experiences',
      color: 'from-cultural-400 to-cultural-500',
      delay: '400ms'
    },
    {
      icon: Heart,
      title: 'Nurture Empathy',
      description: 'Teaching compassion and kindness through diverse characters and stories',
      color: 'from-nature-400 to-nature-500',
      delay: '600ms'
    }
  ];

  const culturalElements = [
    { emoji: '🇺🇸', script: 'Hello', color: 'text-blue-600' },
    { emoji: '🇮🇳', script: 'नमस्ते', color: 'text-orange-600' },
    { emoji: '🇸🇦', script: 'مرحبا', color: 'text-green-600' },
    { emoji: '🇯🇵', script: 'こんにちは', color: 'text-red-600' },
    { emoji: '🇮🇩', script: 'Halo', color: 'text-purple-600' },
    { emoji: '🇮🇳', script: 'ಹಲೋ', color: 'text-pink-600' },
    { emoji: '🇮🇳', script: 'હેલો', color: 'text-indigo-600' },
    { emoji: '🇵🇰', script: 'ہیلو', color: 'text-teal-600' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-primary-50 to-secondary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating cultural elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-3xl">📚</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-2xl">🌍</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-xl">💝</span>
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-float animation-delay-400">
        <span className="text-2xl">✨</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission Statement Header */}
        <div className="text-center mb-20 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Mission
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-8 leading-relaxed animate-fly-in animation-delay-200">
              At Paperbee Books, we believe that books open doors to 
              <span className="gradient-text font-bold"> imagination</span>, 
              <span className="gradient-text font-bold"> curiosity</span>, and 
              <span className="gradient-text font-bold"> understanding</span>
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fly-in animation-delay-400">
              Every child deserves access to stories that reflect their world while opening windows to others. 
              Through carefully crafted books in multiple languages, we&apos;re building bridges between cultures 
              and nurturing the next generation of global citizens.
            </p>
          </div>
        </div>

        {/* Cultural Diversity Visual */}
        <div className="mb-20 animate-fly-in animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4">
              Celebrating Diversity Through Language
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every greeting tells a story, every script holds culture, every language opens a new world
            </p>
          </div>
          
          {/* Animated Cultural Elements */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
              {culturalElements.map((element, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group animate-fly-in hover-lift"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-bee hover:shadow-honeycomb flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">{element.emoji}</span>
                  </div>
                  <span className={`text-lg md:text-xl font-bold ${element.color} group-hover:scale-110 transition-transform duration-300`}>
                    {element.script}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Central connecting element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-honeycomb animate-pulse-slow">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Mission Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="card group hover-lift animate-fly-in relative overflow-hidden"
              style={{ animationDelay: point.delay }}
            >
              <div className="p-8 text-center relative z-10">
                {/* Icon */}
                <div className={`
                  w-20 h-20 mx-auto mb-6 rounded-honeycomb 
                  bg-gradient-to-br ${point.color} 
                  flex items-center justify-center shadow-bee
                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                `}>
                  <point.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
              
              {/* Hover effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Sparkles className="w-4 h-4 text-accent-400 animate-sparkle" />
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white text-center animate-fly-in animation-delay-1000 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Our Growing Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-bounce-slow">10+</div>
              <div className="text-lg opacity-90">Languages Supported</div>
              <div className="text-sm opacity-75 mt-1">And growing every month</div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-bounce-slow animation-delay-200">50+</div>
              <div className="text-lg opacity-90">Unique Stories</div>
              <div className="text-sm opacity-75 mt-1">Carefully crafted for young minds</div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-bounce-slow animation-delay-400">∞</div>
              <div className="text-lg opacity-90">Imaginations Sparked</div>
              <div className="text-sm opacity-75 mt-1">Every day, around the world</div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 opacity-20">
            <Users className="w-8 h-8" />
          </div>
          <div className="absolute -top-4 -right-4 opacity-20">
            <Star className="w-8 h-8" />
          </div>
          <div className="absolute -bottom-4 -left-4 opacity-20">
            <Book className="w-8 h-8" />
          </div>
          <div className="absolute -bottom-4 -right-4 opacity-20">
            <Globe className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}