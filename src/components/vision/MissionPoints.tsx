'use client';

import { Target, BookOpen, Heart, Users, Globe, Zap, Award, Shield, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function MissionPoints() {
  const missionPoints = [
    {
      icon: BookOpen,
      title: 'Create Quality Literature',
      description: 'Develop engaging, educational books that meet the highest standards of children\'s literature while celebrating cultural diversity.',
      emoji: '📚',
      color: 'from-reading-400 to-reading-500',
      bgColor: 'from-reading-50 to-reading-100',
      actions: [
        'Research-based content development',
        'Age-appropriate storytelling',
        'Educational value integration',
        'Quality assurance processes'
      ],
      impact: 'Creating 50+ unique titles across 9 languages'
    },
    {
      icon: Globe,
      title: 'Bridge Cultural Gaps',
      description: 'Foster understanding and appreciation of different cultures through authentic storytelling and respectful representation.',
      emoji: '🌍',
      color: 'from-cultural-400 to-cultural-500',
      bgColor: 'from-cultural-50 to-cultural-100',
      actions: [
        'Collaborate with cultural experts',
        'Authentic representation research',
        'Cross-cultural story adaptation',
        'Community feedback integration'
      ],
      impact: 'Connecting children across 25+ countries'
    },
    {
      icon: Heart,
      title: 'Nurture Empathy',
      description: 'Develop emotional intelligence and empathy in young readers through relatable characters and meaningful life lessons.',
      emoji: '💝',
      color: 'from-nature-400 to-nature-500',
      bgColor: 'from-nature-50 to-nature-100',
      actions: [
        'Character-driven storytelling',
        'Emotional learning integration',
        'Social skills development',
        'Values-based narratives'
      ],
      impact: 'Building emotional intelligence in 10,000+ children'
    },
    {
      icon: Users,
      title: 'Build Global Community',
      description: 'Create connections between young readers worldwide, fostering a sense of global citizenship and shared humanity.',
      emoji: '🤝',
      color: 'from-accent-400 to-accent-500',
      bgColor: 'from-accent-50 to-accent-100',
      actions: [
        'International distribution',
        'Community engagement programs',
        'Reader connection initiatives',
        'Global storytelling projects'
      ],
      impact: 'Uniting families through shared stories'
    },
    {
      icon: Zap,
      title: 'Inspire Learning',
      description: 'Make education exciting and accessible through interactive storytelling and innovative learning approaches.',
      emoji: '⚡',
      color: 'from-primary-400 to-primary-500',
      bgColor: 'from-primary-50 to-primary-100',
      actions: [
        'Interactive content creation',
        'STEM integration',
        'Critical thinking development',
        'Creative problem-solving'
      ],
      impact: 'Transforming education for future leaders'
    },
    {
      icon: Shield,
      title: 'Ensure Child Safety',
      description: 'Guarantee that all content is child-safe, age-appropriate, and promotes positive values and healthy development.',
      emoji: '🛡️',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'from-purple-50 to-purple-100',
      actions: [
        'Child psychology consultation',
        'Content safety reviews',
        'Age-appropriate guidelines',
        'Positive messaging focus'
      ],
      impact: '100% child-safe content guarantee'
    }
  ];

  const missionMetrics = [
    {
      number: '10,000+',
      label: 'Children Impacted',
      description: 'Young minds inspired worldwide',
      icon: '👶',
      color: 'text-reading-500'
    },
    {
      number: '50+',
      label: 'Books Created',
      description: 'Unique stories and counting',
      icon: '📖',
      color: 'text-cultural-500'
    },
    {
      number: '9',
      label: 'Languages',
      description: 'Bridging linguistic barriers',
      icon: '🗣️',
      color: 'text-nature-500'
    },
    {
      number: '25+',
      label: 'Countries',
      description: 'Global community reach',
      icon: '🌐',
      color: 'text-accent-500'
    }
  ];

  const coreValues = [
    {
      value: 'Authenticity',
      description: 'We represent cultures with respect and accuracy',
      icon: '✨',
      color: 'text-cultural-500'
    },
    {
      value: 'Excellence',
      description: 'We maintain the highest standards in all we do',
      icon: '⭐',
      color: 'text-reading-500'
    },
    {
      value: 'Inclusivity',
      description: 'Every child should see themselves in our stories',
      icon: '🤗',
      color: 'text-nature-500'
    },
    {
      value: 'Innovation',
      description: 'We continuously evolve to meet children\'s needs',
      icon: '🚀',
      color: 'text-accent-500'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-reading-50 via-white to-nature-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating mission elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">🎯</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">⚡</span>
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
                Our Mission in Action
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Every day, we work toward our mission through 
            <span className="gradient-text font-bold"> concrete actions</span> and 
            <span className="gradient-text font-bold"> measurable impact</span>. Here&apos;s how we&apos;re making a difference.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20 animate-fly-in animation-delay-400">
          <div className="card max-w-5xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-reading-50 to-nature-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <Target className="w-16 h-16 text-reading-400" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Heart className="w-12 h-12 text-nature-400" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-reading-500 to-nature-500 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8 gradient-text">
                Our Mission Statement
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic mb-8">
                &ldquo;To inspire, educate, and connect young minds around the world through culturally diverse, high-quality children&apos;s literature that celebrates our shared humanity while honoring our unique differences.&rdquo;
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="bg-white/60 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <div className="font-bold text-gray-800 mb-1">{value.value}</div>
                    <div className="text-xs text-gray-600">{value.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Points Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800 animate-fly-in animation-delay-600">
            Six Ways We Fulfill Our Mission 🎯
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="card group hover-lift animate-fly-in overflow-hidden"
                style={{ animationDelay: `${700 + index * 150}ms` }}
              >
                {/* Header */}
                <div className={`relative p-6 bg-gradient-to-br ${point.color} text-white`}>
                  <div className="absolute inset-0 honeycomb-pattern opacity-20" />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-honeycomb flex items-center justify-center">
                      <span className="text-3xl">{point.emoji}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold">{point.title}</h4>
                      <p className="text-white/90 text-sm mt-1">{point.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 mb-3">Our Actions:</h5>
                    <div className="space-y-2">
                      {point.actions.map((action, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full" />
                          <span className="text-sm text-gray-600">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-bold text-gray-700 mb-2">Impact:</h5>
                    <p className="text-sm text-gray-600 font-medium">{point.impact}</p>
                  </div>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-t ${point.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`} />
              </div>
            ))}
          </div>
        </div>

        {/* Mission Metrics */}
        <div className="mb-16 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Mission by the Numbers 📊
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {missionMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center animate-fly-in"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-honeycomb flex items-center justify-center shadow-bee hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{metric.icon}</span>
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{metric.number}</div>
                <div className="text-lg font-medium text-gray-800 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Mission */}
        <div className="mb-16 animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-primary-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">⚡</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🎯</span>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                Our Daily Mission ⚡
              </h3>
              
              <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
                <p className="mb-6">
                  Every morning, our team wakes up with a simple question: &ldquo;How can we touch a child&apos;s life today?&rdquo; Whether it&apos;s through a new story that teaches empathy, an illustration that sparks imagination, or a cultural adaptation that makes a child feel seen and valued—our mission guides every decision we make.
                </p>
                
                <p className="text-xl font-medium text-primary-700 italic mb-6">
                  &ldquo;We don&apos;t just publish books; we plant seeds of understanding, empathy, and wonder that will grow into a more beautiful world.&rdquo;
                </p>
              </div>

              <a
                href={generateWhatsAppLink("Hello! I'm inspired by PAPERBEE BOOKS' mission and would like to learn more about how I can be part of this incredible journey.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center space-x-3 py-4 px-8 hover:scale-105"
              >
                <Heart size={24} />
                <span>Join Our Mission</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}