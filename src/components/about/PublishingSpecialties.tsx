'use client';

import { BookOpen, Music, GraduationCap, Globe, Palette, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function PublishingSpecialties() {
  const specialties = [
    {
      id: 'multilingual',
      title: 'Multilingual Storybooks',
      description: 'Classic and contemporary stories available in multiple languages with cultural adaptations.',
      icon: Globe,
      emoji: '🌍',
      color: 'from-cultural-400 to-cultural-500',
      bgColor: 'from-cultural-50 to-cultural-100',
      features: [
        'Native Language Accuracy',
        'Cultural Context Adaptation',
        'Script Authenticity',
        'Local Folklore Integration'
      ],
      examples: [
        'The Magic Honey Garden (9 languages)',
        'Wisdom of the World (5 languages)',
        'Rainbow Adventures (7 languages)'
      ],
      targetAge: '3-12 years',
      specialtyPercentage: 30
    },
    {
      id: 'educational',
      title: 'Educational Series',
      description: 'Interactive learning books that make education fun through storytelling and activities.',
      icon: GraduationCap,
      emoji: '🎓',
      color: 'from-nature-400 to-nature-500',
      bgColor: 'from-nature-50 to-nature-100',
      features: [
        'Curriculum Alignment',
        'Interactive Exercises',
        'STEM Integration',
        'Critical Thinking Development'
      ],
      examples: [
        'Little Scientists Big Dreams',
        'Math Magic Adventures',
        'History Heroes Series'
      ],
      targetAge: '5-14 years',
      specialtyPercentage: 25
    },
    {
      id: 'poetry',
      title: 'Poetry & Rhymes',
      description: 'Musical verses and rhythmic stories that enhance language development and memory.',
      icon: Music,
      emoji: '🎵',
      color: 'from-reading-400 to-reading-500',
      bgColor: 'from-reading-50 to-reading-100',
      features: [
        'Rhythm & Phonics',
        'Memory Enhancement',
        'Language Development',
        'Musical Integration'
      ],
      examples: [
        'Rainbow Rhymes Collection',
        'Bedtime Ballads',
        'Morning Melodies'
      ],
      targetAge: '2-10 years',
      specialtyPercentage: 20
    },
    {
      id: 'art',
      title: 'Art & Creativity',
      description: 'Hands-on creative books that inspire artistic expression and imaginative thinking.',
      icon: Palette,
      emoji: '🎨',
      color: 'from-accent-400 to-accent-500',
      bgColor: 'from-accent-50 to-accent-100',
      features: [
        'Step-by-step Tutorials',
        'Creative Projects',
        'Art History Integration',
        'Cultural Art Forms'
      ],
      examples: [
        'Creative Canvas Kids',
        'Colors & Brushes',
        'Art Around the World'
      ],
      targetAge: '5-14 years',
      specialtyPercentage: 15
    },
    {
      id: 'language',
      title: 'Language Learning',
      description: 'Comprehensive language learning books with interactive exercises and cultural insights.',
      icon: BookOpen,
      emoji: '📚',
      color: 'from-primary-400 to-primary-500',
      bgColor: 'from-primary-50 to-primary-100',
      features: [
        'Progressive Learning',
        'Cultural Context',
        'Pronunciation Guides',
        'Interactive Activities'
      ],
      examples: [
        'My First Arabic Words',
        'Melodic Malayalam',
        'Hindi Heroes Series'
      ],
      targetAge: '4-12 years',
      specialtyPercentage: 10
    }
  ];

  const publishingProcess = [
    {
      step: 1,
      title: 'Cultural Research',
      description: 'Deep dive into cultural contexts and traditions',
      icon: '🔍',
      color: 'text-cultural-500'
    },
    {
      step: 2,
      title: 'Expert Collaboration',
      description: 'Work with native speakers and cultural experts',
      icon: '🤝',
      color: 'text-nature-500'
    },
    {
      step: 3,
      title: 'Educational Review',
      description: 'Content validation by child development specialists',
      icon: '✅',
      color: 'text-reading-500'
    },
    {
      step: 4,
      title: 'Artistic Creation',
      description: 'Beautiful illustrations by professional artists',
      icon: '🎨',
      color: 'text-accent-500'
    },
    {
      step: 5,
      title: 'Quality Assurance',
      description: 'Multiple rounds of testing and refinement',
      icon: '🔄',
      color: 'text-primary-500'
    },
    {
      step: 6,
      title: 'Global Distribution',
      description: 'Reaching families worldwide through various channels',
      icon: '🚀',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating specialty elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">📖</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">🎯</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">⚡</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Publishing Specialties
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            We specialize in creating 
            <span className="gradient-text font-bold"> diverse, educational, and culturally rich</span> books that cater to every aspect of a child&apos;s development.
          </p>
        </div>

        {/* Specialties Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.id}
              className="card hover-lift animate-fly-in overflow-hidden"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              {/* Header Section */}
              <div className={`relative p-6 bg-gradient-to-br ${specialty.color} text-white`}>
                <div className="absolute inset-0 honeycomb-pattern opacity-20" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-honeycomb flex items-center justify-center">
                      <span className="text-3xl">{specialty.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold">{specialty.title}</h3>
                      <p className="text-white/90 text-sm">{specialty.targetAge}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{specialty.specialtyPercentage}%</div>
                    <div className="text-sm opacity-90">of our catalog</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {specialty.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {specialty.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-400 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Popular Titles:</h4>
                  <div className="space-y-2">
                    {specialty.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={generateWhatsAppLink(`Hello! I'm interested in learning more about your ${specialty.title} books from PAPERBEE BOOKS.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center inline-flex items-center justify-center gap-2 hover:scale-105"
                >
                  <span>Explore {specialty.title}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Publishing Process */}
        <div className="mb-16 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Publishing Process 📝
          </h3>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishingProcess.map((process, index) => (
                <div
                  key={index}
                  className="card text-center p-6 hover-lift animate-fly-in"
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-honeycomb flex items-center justify-center">
                    <span className="text-3xl">{process.icon}</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-400 mb-2">Step {process.step}</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics and Impact */}
        <div className="mb-16 animate-fly-in animation-delay-1000">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Publishing Impact 📊
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cultural-500 to-cultural-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600 font-medium">Unique Titles</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-reading-500 to-reading-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">9</div>
              <div className="text-gray-600 font-medium">Languages</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-600 font-medium">Illustrations</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-nature-500 to-nature-600 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fly-in animation-delay-1200">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">📚</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🎯</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                Find Your Perfect Book Category! 🎯
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Not sure which category suits your child best? Our expert team is here to help you choose the perfect books that match your child&apos;s interests, age, and learning goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={generateWhatsAppLink("Hello! I'd like help choosing the right book category for my child from PAPERBEE BOOKS. Can you provide recommendations?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 min-w-64 text-lg py-4 px-8 hover:scale-105"
                >
                  <BookOpen size={24} />
                  <span>Get Recommendations</span>
                </a>
                
                <a
                  href="/#books"
                  className="btn-outline inline-flex items-center justify-center min-w-48 text-lg py-4 px-8 hover:scale-105"
                >
                  Browse All Books
                </a>
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