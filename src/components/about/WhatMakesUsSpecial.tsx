'use client';

import { Shield, Heart, Users, Palette, Globe, Zap, Award, BookOpen, Sparkles } from 'lucide-react';

export default function WhatMakesUsSpecial() {
  const specialFeatures = [
    {
      icon: Shield,
      title: 'Child-Safe Content',
      description: 'Every story is carefully reviewed by child psychologists and educators to ensure age-appropriate, positive content.',
      emoji: '🛡️',
      color: 'from-nature-400 to-nature-500',
      benefits: ['Psychological Safety', 'Age-Appropriate', 'Positive Messaging']
    },
    {
      icon: Globe,
      title: 'Cultural Authenticity',
      description: 'We work with native speakers and cultural experts to ensure authentic representation in every language and culture.',
      emoji: '🌍',
      color: 'from-cultural-400 to-cultural-500',
      benefits: ['Native Expertise', 'Cultural Accuracy', 'Respectful Representation']
    },
    {
      icon: Palette,
      title: 'Artistic Excellence',
      description: 'Our illustrations are created by talented artists who specialize in children\'s literature and cultural representation.',
      emoji: '🎨',
      color: 'from-accent-400 to-accent-500',
      benefits: ['Professional Artists', 'Cultural Sensitivity', 'Child-Friendly Design']
    },
    {
      icon: BookOpen,
      title: 'Educational Value',
      description: 'Each book is designed to teach while entertaining, incorporating learning objectives seamlessly into storytelling.',
      emoji: '📚',
      color: 'from-reading-400 to-reading-500',
      benefits: ['Curriculum Aligned', 'Skill Development', 'Interactive Learning']
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Our stories help children understand emotions, empathy, and social skills through relatable characters and situations.',
      emoji: '💝',
      color: 'from-pink-400 to-pink-500',
      benefits: ['Empathy Building', 'Social Skills', 'Emotional Growth']
    },
    {
      icon: Zap,
      title: 'Interactive Elements',
      description: 'Many of our books include activities, questions, and digital components to enhance engagement and learning.',
      emoji: '⚡',
      color: 'from-purple-400 to-purple-500',
      benefits: ['Active Learning', 'Digital Integration', 'Parent-Child Bonding']
    }
  ];

  const qualityPromises = [
    {
      title: 'No Stereotypes',
      description: 'We actively avoid cultural stereotypes and present authentic, respectful representations.',
      icon: '🚫',
      color: 'text-red-500'
    },
    {
      title: 'Inclusive Stories',
      description: 'Every child can see themselves represented in our diverse cast of characters.',
      icon: '🤝',
      color: 'text-blue-500'
    },
    {
      title: 'Educational Review',
      description: 'All content is reviewed by education specialists for learning value.',
      icon: '✅',
      color: 'text-green-500'
    },
    {
      title: 'Family Values',
      description: 'We promote positive family values and wholesome life lessons.',
      icon: '👨‍👩‍👧‍👦',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-accent-50 via-white to-cultural-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating special elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">⭐</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">🎯</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">💎</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                What Makes Us Special
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            We don&apos;t just publish books—we craft 
            <span className="gradient-text font-bold"> magical experiences</span> that nurture young minds and celebrate the 
            <span className="gradient-text font-bold"> beauty of diversity</span>.
          </p>
        </div>

        {/* Special Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {specialFeatures.map((feature, index) => (
            <div
              key={index}
              className="card group hover-lift animate-fly-in relative overflow-hidden"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <div className="p-8">
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`
                    w-16 h-16 rounded-honeycomb bg-gradient-to-br ${feature.color}
                    flex items-center justify-center shadow-bee
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                  `}>
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-700">Key Benefits:</h4>
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-t ${feature.color.replace('to-', 'to-').replace('-500', '-100')} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Sparkles className="w-4 h-4 text-accent-400 animate-sparkle" />
              </div>
            </div>
          ))}
        </div>

        {/* Quality Promises */}
        <div className="mb-16 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Quality Promises 🤝
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualityPromises.map((promise, index) => (
                <div
                  key={index}
                  className="card p-6 hover-lift animate-fly-in"
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{promise.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {promise.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {promise.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="mb-16 animate-fly-in animation-delay-1000">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Recognition & Trust 🏆
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center p-8 hover-lift">
              <Award className="w-12 h-12 mx-auto mb-4 text-accent-500" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Quality Certified</h4>
              <p className="text-gray-600 text-sm">Meets international standards for children&apos;s literature</p>
            </div>
            <div className="card text-center p-8 hover-lift">
              <Users className="w-12 h-12 mx-auto mb-4 text-cultural-500" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Parent Approved</h4>
              <p className="text-gray-600 text-sm">Trusted by thousands of families worldwide</p>
            </div>
            <div className="card text-center p-8 hover-lift">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-reading-500" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Educator Endorsed</h4>
              <p className="text-gray-600 text-sm">Recommended by teachers and child development experts</p>
            </div>
          </div>
        </div>

        {/* The Special Touch */}
        <div className="text-center animate-fly-in animation-delay-1200">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-primary-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">✨</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🎯</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                The PAPERBEE Difference ✨
              </h3>
              
              <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
                <p className="mb-6">
                  What truly sets us apart isn&apos;t just what we do—it&apos;s how we do it. Every book is a labor of love, created with meticulous attention to detail and genuine care for the young minds who will read them.
                </p>
                
                <p className="text-xl font-medium text-primary-700 text-center italic mb-6">
                  &ldquo;We don&apos;t just tell stories; we weave dreams, build bridges, and plant seeds of understanding that will grow into a more beautiful world.&rdquo;
                </p>
                
                <p>
                  When you choose PAPERBEE BOOKS, you&apos;re not just buying a book—you&apos;re investing in your child&apos;s future, supporting cultural diversity, and joining a global community that believes in the power of stories to change the world.
                </p>
              </div>

              {/* Trust metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="text-2xl font-bold text-nature-600">100%</div>
                  <div className="text-sm text-gray-600">Child-Safe Content</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cultural-600">9</div>
                  <div className="text-sm text-gray-600">Languages Supported</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="text-2xl font-bold text-reading-600">25+</div>
                  <div className="text-sm text-gray-600">Countries Reached</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-600">4.9★</div>
                  <div className="text-sm text-gray-600">Parent Rating</div>
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