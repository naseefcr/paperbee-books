'use client';

import { useState, useEffect } from 'react';
import { Globe, TrendingUp, Users, BookOpen, Heart, Star, Sparkles, Target, Award } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function GlobalImpact() {
  const [animatedStats, setAnimatedStats] = useState({
    readers: 0,
    countries: 0,
    books: 0,
    languages: 0
  });

  // Animate statistics on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        readers: 10000,
        countries: 25,
        books: 50,
        languages: 9
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const impactAreas = [
    {
      title: 'Educational Impact',
      description: 'Transforming how children learn through engaging, culturally diverse literature.',
      icon: BookOpen,
      emoji: '📚',
      color: 'from-reading-400 to-reading-500',
      metrics: [
        { label: 'Children Reading Better', value: '85%', description: 'Improved reading skills' },
        { label: 'Cultural Awareness', value: '92%', description: 'Increased understanding' },
        { label: 'Learning Enthusiasm', value: '90%', description: 'Love for reading' }
      ],
      stories: [
        'Children discovering new languages through stories',
        'Teachers using our books for multicultural education',
        'Parents bonding with children over shared reading'
      ]
    },
    {
      title: 'Social Impact',
      description: 'Building bridges between communities and fostering global understanding.',
      icon: Users,
      emoji: '🤝',
      color: 'from-cultural-400 to-cultural-500',
      metrics: [
        { label: 'Community Connections', value: '78%', description: 'Cross-cultural friendships' },
        { label: 'Empathy Development', value: '88%', description: 'Understanding others' },
        { label: 'Global Mindset', value: '91%', description: 'World citizenship' }
      ],
      stories: [
        'Children from different countries becoming pen pals',
        'Families exploring new cultures together',
        'Schools organizing international friendship programs'
      ]
    },
    {
      title: 'Cultural Impact',
      description: 'Preserving traditions while celebrating diversity and promoting cultural exchange.',
      icon: Globe,
      emoji: '🌍',
      color: 'from-nature-400 to-nature-500',
      metrics: [
        { label: 'Languages Preserved', value: '9', description: 'Active representation' },
        { label: 'Cultural Stories', value: '100+', description: 'Traditional tales' },
        { label: 'Cultural Pride', value: '94%', description: 'Children value heritage' }
      ],
      stories: [
        'Grandparents sharing traditional stories with grandchildren',
        'Children learning about their cultural roots',
        'Communities preserving oral traditions in books'
      ]
    }
  ];

  const globalReach = [
    { region: 'Asia', countries: 12, readers: 6500, growth: '+45%', color: 'text-red-500', emoji: '🏯' },
    { region: 'Middle East', countries: 6, readers: 2000, growth: '+35%', color: 'text-green-500', emoji: '🕌' },
    { region: 'Europe', countries: 4, readers: 800, growth: '+25%', color: 'text-blue-500', emoji: '🏰' },
    { region: 'Americas', countries: 3, readers: 700, growth: '+30%', color: 'text-purple-500', emoji: '🗽' }
  ];

  const futureVision = [
    {
      year: '2025',
      goal: '50,000 Readers',
      description: 'Expanding to 50 countries with 50,000 young readers',
      icon: '🎯',
      progress: 65
    },
    {
      year: '2026',
      goal: 'Digital Platform',
      description: 'Interactive online reading platform with AR features',
      icon: '💻',
      progress: 30
    },
    {
      year: '2027',
      goal: 'Community Centers',
      description: '100 reading centers in underserved communities',
      icon: '🏛️',
      progress: 15
    },
    {
      year: '2030',
      goal: '1M Readers',
      description: 'One million children reading PAPERBEE BOOKS worldwide',
      icon: '🌟',
      progress: 10
    }
  ];

  const testimonials = [
    {
      quote: "My daughter now asks to read stories from different countries every night. It's opened up wonderful conversations about the world.",
      author: "Sarah Chen",
      location: "Singapore",
      flag: "🇸🇬"
    },
    {
      quote: "These books helped my son understand his heritage while learning about other cultures. It's exactly what we needed.",
      author: "Ahmed Hassan",
      location: "Dubai, UAE",
      flag: "🇦🇪"
    },
    {
      quote: "Our classroom uses PAPERBEE BOOKS for multicultural education. The children love learning about different traditions.",
      author: "Ms. Priya Sharma",
      location: "Mumbai, India",
      flag: "🇮🇳"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-accent-50 via-white to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating impact elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">🌟</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">📈</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">💫</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Global Impact
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Every book we publish creates 
            <span className="gradient-text font-bold"> ripples of positive change</span> that extend far beyond the page, touching hearts and minds across continents.
          </p>
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20 animate-fly-in animation-delay-400">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-reading-500 to-reading-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <Users className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-2000">
              {animatedStats.readers.toLocaleString()}+
            </div>
            <div className="text-gray-600 font-medium">Young Readers Worldwide</div>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cultural-500 to-cultural-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-2000">
              {animatedStats.countries}+
            </div>
            <div className="text-gray-600 font-medium">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-nature-500 to-nature-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-2000">
              {animatedStats.books}+
            </div>
            <div className="text-gray-600 font-medium">Unique Stories</div>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-2000">
              {animatedStats.languages}
            </div>
            <div className="text-gray-600 font-medium">Languages Supported</div>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800 animate-fly-in animation-delay-600">
            Three Pillars of Our Impact 🏗️
          </h3>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="card hover-lift animate-fly-in overflow-hidden"
                style={{ animationDelay: `${700 + index * 200}ms` }}
              >
                {/* Header */}
                <div className={`relative p-8 bg-gradient-to-br ${area.color} text-white`}>
                  <div className="absolute inset-0 honeycomb-pattern opacity-20" />
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-honeycomb flex items-center justify-center">
                        <span className="text-3xl">{area.emoji}</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">{area.title}</h4>
                        <p className="text-white/90">{area.description}</p>
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-3 gap-4">
                        {area.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold">{metric.value}</div>
                            <div className="text-sm opacity-90">{metric.label}</div>
                            <div className="text-xs opacity-75">{metric.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stories */}
                <div className="p-8">
                  <h5 className="font-bold text-gray-800 mb-4">Real Impact Stories:</h5>
                  <div className="space-y-3">
                    {area.stories.map((story, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{story}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <div className="mb-20 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Expanding Global Footprint 🗺️
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {globalReach.map((reach, index) => (
              <div
                key={index}
                className="card text-center p-6 hover-lift animate-fly-in"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{reach.emoji}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{reach.region}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>{reach.countries} Countries</div>
                  <div className="text-lg font-bold text-primary-600">{reach.readers.toLocaleString()}</div>
                  <div>Active Readers</div>
                  <div className={`font-medium ${reach.color}`}>{reach.growth} Growth</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20 animate-fly-in animation-delay-1000">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Voices from Around the World 💬
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-6 hover-lift animate-fly-in"
                style={{ animationDelay: `${1100 + index * 150}ms` }}
              >
                <div className="mb-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{testimonial.flag}</span>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mb-16 animate-fly-in animation-delay-1200">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Vision for Tomorrow 🚀
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {futureVision.map((vision, index) => (
                <div
                  key={index}
                  className="card p-6 hover-lift animate-fly-in"
                  style={{ animationDelay: `${1300 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-honeycomb flex items-center justify-center">
                      <span className="text-3xl">{vision.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-xl font-bold text-gray-800">{vision.goal}</div>
                          <div className="text-primary-600 font-medium">{vision.year}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent-500">{vision.progress}%</div>
                          <div className="text-xs text-gray-500">Progress</div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{vision.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-accent-400 to-accent-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${vision.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fly-in animation-delay-1400">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">🌟</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🚀</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                Be Part of Our Global Impact! 🌍
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every book you purchase, every story you share, every conversation you start contributes to our growing global impact. Together, we&apos;re not just changing how children read—we&apos;re changing how they see the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href={generateWhatsAppLink("Hello! I'm inspired by PAPERBEE BOOKS' global impact and would like to be part of this incredible mission to connect children worldwide through stories.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 min-w-64 text-lg py-4 px-8 hover:scale-105"
                >
                  <Globe size={24} />
                  <span>Join Our Movement</span>
                </a>
                
                <a
                  href="/#books"
                  className="btn-outline inline-flex items-center justify-center min-w-48 text-lg py-4 px-8 hover:scale-105"
                >
                  Explore Our Books
                </a>
              </div>

              {/* Impact pledge */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="bg-white/60 rounded-lg p-4">
                  <Award className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                  <div className="font-bold text-gray-800">Quality Promise</div>
                  <div>Every book makes a positive impact</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-cultural-500" />
                  <div className="font-bold text-gray-800">Growing Reach</div>
                  <div>Expanding to new communities daily</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <Target className="w-6 h-6 mx-auto mb-2 text-accent-500" />
                  <div className="font-bold text-gray-800">Clear Mission</div>
                  <div>Building bridges through books</div>
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