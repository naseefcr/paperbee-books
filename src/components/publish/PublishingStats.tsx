'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Users, Globe, Award, TrendingUp, Heart, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function PublishingStats() {
  const [animatedStats, setAnimatedStats] = useState({
    totalBooks: 0,
    happyReaders: 0,
    languages: 0,
    countries: 0
  });

  // Animate statistics on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        totalBooks: 65,
        happyReaders: 12500,
        languages: 9,
        countries: 28
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: '100% child-safe content with educational value',
      metric: '5-Star',
      color: 'from-accent-400 to-accent-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Books available in multiple countries worldwide',
      metric: '28+',
      color: 'from-cultural-400 to-cultural-500'
    },
    {
      icon: TrendingUp,
      title: 'Growing Impact',
      description: 'Expanding our collection and reach every month',
      metric: '15%',
      color: 'from-nature-400 to-nature-500'
    },
    {
      icon: Heart,
      title: 'Parent Trust',
      description: 'Recommended by families and educators',
      metric: '98%',
      color: 'from-reading-400 to-reading-500'
    }
  ];

  const categoryBreakdown = [
    { name: 'Storybooks', count: 15, percentage: 23, color: 'bg-reading-400' },
    { name: 'Educational', count: 20, percentage: 31, color: 'bg-nature-400' },
    { name: 'Language Learning', count: 12, percentage: 18, color: 'bg-primary-400' },
    { name: 'Alphabet & Numbers', count: 10, percentage: 15, color: 'bg-cultural-400' },
    { name: 'Art & Creativity', count: 8, percentage: 13, color: 'bg-accent-400' }
  ];

  const milestones = [
    {
      year: '2020',
      milestone: 'First Book Published',
      description: 'Started with our debut storybook in English and Hindi',
      icon: '🌱'
    },
    {
      year: '2021',
      milestone: '10 Books Milestone',
      description: 'Expanded to 5 languages with diverse categories',
      icon: '📚'
    },
    {
      year: '2022',
      milestone: 'Global Distribution',
      description: 'Reached readers in 15+ countries worldwide',
      icon: '🌍'
    },
    {
      year: '2023',
      milestone: '50 Books Collection',
      description: 'Comprehensive library covering all age groups',
      icon: '🏆'
    },
    {
      year: '2024',
      milestone: '65+ Books & Growing',
      description: 'Leading children\'s multilingual publisher',
      icon: '🚀'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-nature-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating stats elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">📊</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">🏆</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">⭐</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Publishing Impact
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Numbers tell our story of 
            <span className="gradient-text font-bold"> growth, impact, and trust</span> from families and educators worldwide.
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20 animate-fly-in animation-delay-400">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-reading-500 to-reading-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-2000">
              {animatedStats.totalBooks}+
            </div>
            <div className="text-gray-600 font-medium">Books Published</div>
            <div className="text-sm text-gray-500 mt-1">Across all categories</div>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-nature-500 to-nature-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <Users className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-2000">
              {animatedStats.happyReaders.toLocaleString()}+
            </div>
            <div className="text-gray-600 font-medium">Happy Readers</div>
            <div className="text-sm text-gray-500 mt-1">Children worldwide</div>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cultural-500 to-cultural-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-2000">
              {animatedStats.languages}
            </div>
            <div className="text-gray-600 font-medium">Languages</div>
            <div className="text-sm text-gray-500 mt-1">And expanding</div>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
              <Award className="w-12 h-12 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 transition-all duration-2000">
              {animatedStats.countries}+
            </div>
            <div className="text-gray-600 font-medium">Countries</div>
            <div className="text-sm text-gray-500 mt-1">Global distribution</div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20 animate-fly-in animation-delay-600">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Achievements 🏆
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card hover-lift animate-fly-in text-center"
                style={{ animationDelay: `${700 + index * 150}ms` }}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-honeycomb flex items-center justify-center shadow-bee`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{achievement.metric}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="mb-20 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Collection Breakdown 📚
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-bee">
              <div className="space-y-6">
                {categoryBreakdown.map((category, index) => (
                  <div
                    key={index}
                    className="animate-fly-in"
                    style={{ animationDelay: `${900 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-600">{category.count} books ({category.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${category.color} transition-all duration-1000`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  Our diverse collection ensures there&apos;s something perfect for every young reader
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Publishing Timeline */}
        <div className="mb-20 animate-fly-in animation-delay-1000">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Publishing Journey 🛣️
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full hidden md:block" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 animate-fly-in"
                    style={{ animationDelay: `${1100 + index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-honeycomb shadow-bee flex items-center justify-center relative z-10">
                      <span className="text-2xl">{milestone.icon}</span>
                    </div>
                    
                    {/* Milestone content */}
                    <div className="card flex-1 p-6 hover-lift">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-800">{milestone.milestone}</h4>
                        <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fly-in animation-delay-1200">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">📈</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🎯</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                Be Part of Our Growing Story! 📖
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of families worldwide who trust PAPERBEE BOOKS for quality children&apos;s literature. 
                Your order helps us continue publishing amazing books for young readers everywhere.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href={generateWhatsAppLink("Hello! I'd like to explore PAPERBEE BOOKS collection and place an order. Can you help me choose the perfect books for my child?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 min-w-64 text-lg py-4 px-8 hover:scale-105"
                >
                  <BookOpen size={24} />
                  <span>Start Shopping</span>
                </a>
                
                <a
                  href="#books"
                  className="btn-outline inline-flex items-center justify-center min-w-48 text-lg py-4 px-8 hover:scale-105"
                >
                  Browse Collection
                </a>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="bg-white/60 rounded-lg p-4">
                  <Award className="w-6 h-6 mx-auto mb-2 text-accent-500" />
                  <div className="font-bold text-gray-800">Quality Guarantee</div>
                  <div>100% satisfaction or money back</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <Globe className="w-6 h-6 mx-auto mb-2 text-cultural-500" />
                  <div className="font-bold text-gray-800">Worldwide Shipping</div>
                  <div>Fast delivery to 28+ countries</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <Heart className="w-6 h-6 mx-auto mb-2 text-reading-500" />
                  <div className="font-bold text-gray-800">Parent Approved</div>
                  <div>Trusted by 12,500+ families</div>
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