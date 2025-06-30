'use client';

import { useState, useEffect } from 'react';
import { Globe, Users, BookOpen, Heart, Star, Sparkles, MapPin, Plane, Ship } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function GlobalReach() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    countries: 0,
    readers: 0,
    books: 0
  });

  // Animate stats on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        countries: 25,
        readers: 10000,
        books: 500
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const regions = [
    {
      id: 'asia',
      name: 'Asia',
      emoji: '🏯',
      countries: ['India', 'Japan', 'Indonesia', 'Pakistan', 'Bangladesh'],
      languages: ['Hindi', 'Japanese', 'Indonesian', 'Urdu', 'Bengali'],
      readers: 6500,
      books: 180,
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-50 to-red-100',
      description: 'Connecting diverse Asian cultures through storytelling',
      highlights: ['Multilingual Content', 'Cultural Stories', 'Traditional Values']
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      emoji: '🕌',
      countries: ['Saudi Arabia', 'UAE', 'Egypt', 'Jordan', 'Lebanon'],
      languages: ['Arabic', 'Farsi', 'Turkish'],
      readers: 2000,
      books: 85,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-100',
      description: 'Preserving rich Middle Eastern heritage in children\'s literature',
      highlights: ['Arabic Scripts', 'Cultural Heritage', 'Modern Adaptations']
    },
    {
      id: 'europe',
      name: 'Europe',
      emoji: '🏰',
      countries: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Sweden'],
      languages: ['English', 'German', 'French', 'Dutch'],
      readers: 1200,
      books: 120,
      color: 'from-blue-400 to-purple-500',
      bgColor: 'from-blue-50 to-purple-100',
      description: 'European fairy tales and modern educational content',
      highlights: ['Classic Tales', 'Educational Focus', 'Artistic Illustration']
    },
    {
      id: 'americas',
      name: 'Americas',
      emoji: '🗽',
      countries: ['United States', 'Canada', 'Mexico', 'Brazil', 'Argentina'],
      languages: ['English', 'Spanish', 'Portuguese', 'French'],
      readers: 800,
      books: 95,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-100',
      description: 'Bridging cultures across North and South America',
      highlights: ['Diverse Communities', 'Bilingual Content', 'Modern Stories']
    },
    {
      id: 'africa',
      name: 'Africa',
      emoji: '🌍',
      countries: ['South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco'],
      languages: ['English', 'Swahili', 'Arabic', 'French'],
      readers: 500,
      books: 45,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-100',
      description: 'Celebrating African storytelling traditions',
      highlights: ['Oral Traditions', 'Wildlife Stories', 'Cultural Wisdom']
    }
  ];

  const partnerships = [
    { name: 'UNESCO', type: 'Educational Partnership', icon: '🎓' },
    { name: 'Local Libraries', type: 'Distribution Network', icon: '📚' },
    { name: 'Schools Worldwide', type: 'Educational Institutions', icon: '🏫' },
    { name: 'Cultural Centers', type: 'Community Outreach', icon: '🏛️' }
  ];

  const totalReaders = regions.reduce((sum, region) => sum + region.readers, 0);

  return (
    <section className="relative py-20 bg-gradient-to-br from-cultural-50 via-primary-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Animated world elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">🌍</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <Plane className="w-8 h-8 text-cultural-400" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <Ship className="w-6 h-6 text-primary-400" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-float animation-delay-400">
        <span className="text-3xl">✈️</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Global Reach
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 animate-fly-in animation-delay-200">
            From the <span className="gradient-text font-bold">bustling streets of Mumbai</span> to the 
            <span className="gradient-text font-bold"> serene libraries of Tokyo</span>, PAPERBEE BOOKS 
            connects young minds across continents.
          </p>
        </div>

        {/* Global Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-fly-in animation-delay-400">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cultural-500 to-cultural-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-1000">
              {animatedStats.countries}+
            </div>
            <div className="text-gray-600 font-medium">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-reading-500 to-reading-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <Users className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-1000">
              {animatedStats.readers.toLocaleString()}+
            </div>
            <div className="text-gray-600 font-medium">Happy Readers</div>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-1000">
              {animatedStats.books}+
            </div>
            <div className="text-gray-600 font-medium">Books Distributed</div>
          </div>
        </div>

        {/* Regional Breakdown */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800 animate-fly-in animation-delay-600">
            Reading Around the World 🗺️
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div
                key={region.id}
                className={`
                  region-card cursor-pointer transition-all duration-500 hover-lift
                  ${activeRegion === region.id ? 'scale-105 shadow-2xl' : ''}
                  animate-fly-in
                `}
                onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
                style={{ animationDelay: `${700 + index * 150}ms` }}
              >
                <div className="card overflow-hidden h-full">
                  {/* Region Header */}
                  <div className={`relative p-6 bg-gradient-to-br ${region.color} text-white`}>
                    <div className="absolute inset-0 honeycomb-pattern opacity-20" />
                    
                    <div className="relative z-10 text-center">
                      <div className="text-5xl mb-3 animate-bounce-slow">{region.emoji}</div>
                      <h4 className="text-xl font-bold mb-2">{region.name}</h4>
                      <p className="text-white/90 text-sm">{region.description}</p>
                    </div>
                  </div>

                  {/* Region Stats */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{region.readers.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Readers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{region.books}</div>
                        <div className="text-xs text-gray-500">Books</div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <h5 className="text-sm font-bold text-gray-700 mb-2">Languages:</h5>
                      <div className="flex flex-wrap gap-1">
                        {region.languages.map((lang, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Countries */}
                    <div className="mb-4">
                      <h5 className="text-sm font-bold text-gray-700 mb-2">Key Markets:</h5>
                      <div className="text-xs text-gray-600">
                        {region.countries.slice(0, 3).join(', ')}
                        {region.countries.length > 3 && ` +${region.countries.length - 3} more`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Region View */}
        {activeRegion && (
          <div className="mb-16 animate-fly-in">
            {(() => {
              const region = regions.find(r => r.id === activeRegion);
              if (!region) return null;
              
              return (
                <div className="card max-w-5xl mx-auto overflow-hidden">
                  <div className={`relative p-8 bg-gradient-to-br ${region.bgColor}`}>
                    <div className="absolute inset-0 honeycomb-pattern opacity-10" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="text-8xl">{region.emoji}</div>
                        <div>
                          <h3 className="text-4xl font-heading font-bold text-gray-800 mb-2">
                            {region.name}
                          </h3>
                          <p className="text-xl text-gray-600 mb-4">
                            {region.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{region.readers.toLocaleString()} readers</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              <span>{region.books} books distributed</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-gray-800 mb-4">Key Highlights</h4>
                          <div className="space-y-3">
                            {region.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                <Star className="w-5 h-5 text-accent-500" />
                                <span className="font-medium text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-800 mb-4">Countries & Languages</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {region.countries.map((country, idx) => (
                              <div key={idx} className="flex items-center justify-between bg-white/80 rounded-lg p-3">
                                <span className="font-medium text-gray-700">{country}</span>
                                <span className="text-sm text-gray-500">
                                  {region.languages[idx] || region.languages[0]}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Partnerships */}
        <div className="mb-16 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-gray-800">
            Our Global Partners 🤝
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="card text-center p-6 hover-lift animate-fly-in"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4 animate-bounce-slow">{partner.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{partner.name}</h4>
                <p className="text-sm text-gray-600">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cultural-50 to-primary-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <Globe className="w-16 h-16 text-cultural-400" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Heart className="w-12 h-12 text-reading-400" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-text">
                Join Our Global Community! 🌟
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Be part of a worldwide movement that&apos;s bringing quality children&apos;s literature to every corner of the globe. 
                Together, we&apos;re building bridges through books and creating a brighter future for all children.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href={generateWhatsAppLink("Hello! I'm interested in joining the PAPERBEE BOOKS global community and would like to know more about international shipping options.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 min-w-64 text-lg py-4 px-8 hover:scale-105"
                >
                  <Globe size={24} />
                  <span>Order Internationally</span>
                </a>
                
                <a
                  href="#contact"
                  className="btn-outline inline-flex items-center justify-center min-w-48 text-lg py-4 px-8 hover:scale-105"
                >
                  Become a Partner
                </a>
              </div>

              {/* Global stats footer */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="font-bold text-2xl text-cultural-600 mb-1">{totalReaders.toLocaleString()}+</div>
                  <div>Children Reading Worldwide</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="font-bold text-2xl text-primary-600 mb-1">9</div>
                  <div>Languages Supported</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="font-bold text-2xl text-accent-600 mb-1">24/7</div>
                  <div>Global Support Available</div>
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