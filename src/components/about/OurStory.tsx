'use client';

import { Book, Heart, Users, Lightbulb, Globe, Star, Sparkles, Clock, Award } from 'lucide-react';

export default function OurStory() {
  const storyMilestones = [
    {
      year: '2020',
      title: 'The Dream Begins',
      description: 'Born from a simple belief that every child deserves access to quality literature that celebrates diversity.',
      icon: Lightbulb,
      color: 'from-primary-400 to-primary-500',
      emoji: '💡'
    },
    {
      year: '2021',
      title: 'First Books Published',
      description: 'Launched our first collection of multilingual stories, starting with English and Hindi.',
      icon: Book,
      color: 'from-reading-400 to-reading-500',
      emoji: '📚'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to 5 languages and reached children in over 10 countries across Asia and beyond.',
      icon: Globe,
      color: 'from-cultural-400 to-cultural-500',
      emoji: '🌍'
    },
    {
      year: '2023',
      title: 'Community Impact',
      description: 'Reached 10,000+ young readers and established partnerships with schools and libraries.',
      icon: Users,
      color: 'from-nature-400 to-nature-500',
      emoji: '👨‍👩‍👧‍👦'
    },
    {
      year: '2024',
      title: 'Innovation & Growth',
      description: 'Introduced interactive digital content and expanded to 9 languages with 50+ unique titles.',
      icon: Award,
      color: 'from-accent-400 to-accent-500',
      emoji: '🏆'
    }
  ];

  const foundingPrinciples = [
    {
      title: 'Every Child Matters',
      description: 'We believe every child, regardless of background, deserves access to quality literature.',
      icon: Heart,
      color: 'text-reading-500'
    },
    {
      title: 'Celebrate Diversity',
      description: 'Our books reflect the beautiful tapestry of cultures, languages, and traditions worldwide.',
      icon: Globe,
      color: 'text-cultural-500'
    },
    {
      title: 'Learn Through Stories',
      description: 'Stories are powerful teachers that can convey values, knowledge, and life lessons.',
      icon: Book,
      color: 'text-nature-500'
    },
    {
      title: 'Quality First',
      description: 'We never compromise on content quality, illustrations, or educational value.',
      icon: Star,
      color: 'text-accent-500'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-reading-50 to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating story elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">📖</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">✨</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">🌟</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Story
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Once upon a time, in a world where stories had the power to 
            <span className="gradient-text font-bold"> connect hearts</span> and 
            <span className="gradient-text font-bold"> open minds</span>, PAPERBEE BOOKS was born...
          </p>
        </div>

        {/* Story Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800 animate-fly-in animation-delay-400">
            Our Journey Through Time 📅
          </h3>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full hidden lg:block" />
            
            <div className="space-y-12">
              {storyMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`
                    flex items-center gap-8 animate-fly-in
                    ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                  `}
                  style={{ animationDelay: `${500 + index * 200}ms` }}
                >
                  {/* Content Card */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="card hover-lift">
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`
                            w-16 h-16 rounded-honeycomb bg-gradient-to-br ${milestone.color}
                            flex items-center justify-center shadow-bee
                          `}>
                            <span className="text-2xl">{milestone.emoji}</span>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                            <h4 className="text-xl font-heading font-bold text-gray-800">
                              {milestone.title}
                            </h4>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot for larger screens */}
                  <div className="hidden lg:block">
                    <div className={`
                      w-6 h-6 rounded-full bg-gradient-to-br ${milestone.color} 
                      shadow-lg z-10 relative
                    `} />
                  </div>

                  {/* Spacer for larger screens */}
                  <div className="flex-1 lg:max-w-md hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founding Principles */}
        <div className="mb-16 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            What Drives Us Forward 💫
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {foundingPrinciples.map((principle, index) => (
              <div
                key={index}
                className="card group hover-lift animate-fly-in"
                style={{ animationDelay: `${900 + index * 150}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`
                      w-12 h-12 rounded-honeycomb bg-gray-100 
                      flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                    `}>
                      <principle.icon className={`w-6 h-6 ${principle.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Beginning Story */}
        <div className="text-center animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-reading-50 to-primary-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">📚</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">💝</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                How It All Started 🌱
              </h3>
              
              <div className="text-left max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  It started with a simple observation: children around the world were hungry for stories that looked like them, sounded like them, and celebrated their unique cultures. In libraries and bookstores, we saw the same stories repeated, while beautiful traditions and languages remained unrepresented.
                </p>
                
                <p>
                  Our founders, passionate educators and storytellers, dreamed of a publishing house that would change this narrative. They envisioned books that would not only entertain but also educate, books that would serve as windows into different cultures while being mirrors for children to see themselves.
                </p>
                
                <p className="text-xl font-medium text-primary-700 text-center italic">
                  &ldquo;Every child should see magic in books, and every book should show the magic in every child.&rdquo;
                </p>
                
                <p>
                  And so, PAPERBEE BOOKS was born—named after the industrious bee that travels from flower to flower, collecting and spreading sweetness wherever it goes. Just like our books travel from one young mind to another, spreading knowledge, joy, and cultural understanding.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary-500" />
                  <div className="text-2xl font-bold text-gray-800">4+ Years</div>
                  <div className="text-sm text-gray-600">Of Dedicated Service</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-reading-500" />
                  <div className="text-2xl font-bold text-gray-800">10,000+</div>
                  <div className="text-sm text-gray-600">Happy Young Readers</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-accent-500" />
                  <div className="text-2xl font-bold text-gray-800">50+</div>
                  <div className="text-sm text-gray-600">Unique Stories Created</div>
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