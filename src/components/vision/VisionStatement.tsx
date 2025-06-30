'use client';

import { Eye, Telescope, Heart, Globe, Lightbulb, Star, Sparkles } from 'lucide-react';

export default function VisionStatement() {
  const visionElements = [
    {
      icon: Globe,
      title: 'Universal Access',
      description: 'Every child, everywhere, deserves access to quality literature that speaks to their heart and mind.',
      emoji: '🌍',
      color: 'from-cultural-400 to-cultural-500',
      details: [
        'Breaking down language barriers',
        'Reaching underserved communities', 
        'Affordable pricing models',
        'Digital accessibility'
      ]
    },
    {
      icon: Heart,
      title: 'Cultural Celebration',
      description: 'Stories that honor and celebrate the rich tapestry of human cultures and traditions.',
      emoji: '🎭',
      color: 'from-reading-400 to-reading-500',
      details: [
        'Authentic cultural representation',
        'Traditional stories preservation',
        'Modern multicultural narratives',
        'Respectful cross-cultural exchange'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Educational Excellence',
      description: 'Learning experiences that inspire curiosity, critical thinking, and lifelong learning.',
      emoji: '💡',
      color: 'from-nature-400 to-nature-500',
      details: [
        'Age-appropriate content',
        'Skill development focus',
        'Interactive learning elements',
        'Educational value measurement'
      ]
    },
    {
      icon: Star,
      title: 'Future Builders',
      description: 'Empowering young minds to become compassionate leaders and change-makers.',
      emoji: '⭐',
      color: 'from-accent-400 to-accent-500',
      details: [
        'Leadership skill development',
        'Global citizenship education',
        'Environmental consciousness',
        'Social responsibility awareness'
      ]
    }
  ];

  const futureGoals = [
    {
      timeframe: '2025',
      goal: 'Reach 50,000 children across 50 countries',
      icon: '🎯',
      color: 'text-cultural-500'
    },
    {
      timeframe: '2026',
      goal: 'Launch interactive digital platform',
      icon: '💻',
      color: 'text-primary-500'
    },
    {
      timeframe: '2027',
      goal: 'Establish 100 community reading centers',
      icon: '🏛️',
      color: 'text-reading-500'
    },
    {
      timeframe: '2030',
      goal: 'Impact 1 million young readers worldwide',
      icon: '🌟',
      color: 'text-accent-500'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-primary-50 to-cultural-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating vision elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">🔭</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">💫</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">🎯</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Vision for Tomorrow
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            We envision a future where 
            <span className="gradient-text font-bold"> stories become bridges</span> that connect hearts across continents, where 
            <span className="gradient-text font-bold"> every child feels seen, heard, and valued</span> through literature.
          </p>
        </div>

        {/* Complete Vision Statement */}
        <div className="mb-20 animate-fly-in animation-delay-400">
          <div className="card max-w-5xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cultural-50 to-primary-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <Telescope className="w-16 h-16 text-cultural-400" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Eye className="w-12 h-12 text-primary-400" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cultural-500 to-primary-500 rounded-honeycomb flex items-center justify-center shadow-honeycomb">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8 gradient-text">
                Our Complete Vision Statement
              </h3>
              
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl md:text-2xl font-medium text-primary-700 italic">
                  &ldquo;We envision a world where literature serves as a universal language of understanding, where every child—regardless of their geographical location, cultural background, or economic circumstances—has access to stories that not only entertain but educate, inspire, and empower.&rdquo;
                </p>
                
                <p>
                  In this future we&apos;re building, books become more than printed pages—they become windows into different worlds, mirrors reflecting every child&apos;s potential, and bridges connecting diverse communities through shared human experiences.
                </p>
                
                <p>
                  We see children in rural villages reading the same inspiring stories as those in bustling cities, each finding their own meaning while learning about others. We envision classrooms where multicultural literature sparks conversations about acceptance, empathy, and global citizenship.
                </p>
                
                <p className="text-xl font-medium text-cultural-700 text-center">
                  Our ultimate vision: A generation of readers who grow up to be leaders, innovators, and peacemakers—all because a book once showed them that anything is possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Elements */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800 animate-fly-in animation-delay-600">
            Four Pillars of Our Vision 🏛️
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visionElements.map((element, index) => (
              <div
                key={index}
                className="card group hover-lift animate-fly-in overflow-hidden"
                style={{ animationDelay: `${700 + index * 150}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`
                      w-16 h-16 rounded-honeycomb bg-gradient-to-br ${element.color}
                      flex items-center justify-center shadow-bee
                      group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                    `}>
                      <span className="text-2xl">{element.emoji}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                        {element.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {element.description}
                  </p>

                  <div>
                    <h5 className="font-bold text-gray-700 mb-3">How we achieve this:</h5>
                    <div className="space-y-2">
                      {element.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-t ${element.color.replace('to-', 'to-').replace('-500', '-100')} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
              </div>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="mb-16 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Vision Timeline 🛣️
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cultural-400 to-accent-400 rounded-full hidden md:block" />
              
              <div className="space-y-8">
                {futureGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 animate-fly-in"
                    style={{ animationDelay: `${900 + index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-honeycomb shadow-bee flex items-center justify-center relative z-10">
                      <span className="text-2xl">{goal.icon}</span>
                    </div>
                    
                    {/* Goal content */}
                    <div className="card flex-1 p-6 hover-lift">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-primary-600 mb-1">{goal.timeframe}</div>
                          <p className="text-gray-700 font-medium">{goal.goal}</p>
                        </div>
                        <Star className={`w-6 h-6 ${goal.color}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Call to Action */}
        <div className="text-center animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-cultural-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">🌟</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🎯</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                Be Part of This Vision ✨
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every book you purchase, every story you share, every child you introduce to our literature brings us one step closer to realizing this beautiful vision of a more connected and understanding world.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="text-3xl mb-2">📚</div>
                  <div className="font-bold text-gray-800">Read</div>
                  <div className="text-sm text-gray-600">Explore our diverse collection</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="font-bold text-gray-800">Share</div>
                  <div className="text-sm text-gray-600">Spread the joy of reading</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="text-3xl mb-2">🌱</div>
                  <div className="font-bold text-gray-800">Grow</div>
                  <div className="text-sm text-gray-600">Help us reach more children</div>
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