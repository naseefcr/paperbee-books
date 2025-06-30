'use client';

import { useState } from 'react';
import { BookOpen, Palette, GraduationCap, Music, Globe, Sparkles, ArrowRight, Heart, Star } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function BookCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'storybooks',
      title: 'Storybooks',
      icon: BookOpen,
      emoji: '📚',
      description: 'Magical tales that transport children to enchanted worlds',
      longDescription: 'Our collection of storybooks takes young readers on incredible journeys through magical kingdoms, friendship adventures, and heartwarming tales that teach valuable life lessons.',
      books: 15,
      ageRange: '3-12 years',
      popular: ['The Magic Honey Garden', 'Wisdom of the World', 'Rainbow Adventures'],
      color: 'from-reading-400 to-reading-500',
      bgGradient: 'from-reading-50 to-reading-100',
      features: ['Character Development', 'Moral Values', 'Adventure & Fantasy', 'Cultural Stories']
    },
    {
      id: 'poetry',
      title: 'Poetry & Rhymes',
      icon: Music,
      emoji: '🎵',
      description: 'Rhythmic verses that make learning fun and memorable',
      longDescription: 'Beautiful poetry collections with enchanting rhymes that help children develop language skills, rhythm awareness, and emotional expression through the magic of verse.',
      books: 8,
      ageRange: '2-10 years',
      popular: ['Rainbow Rhymes', 'Musical Mornings', 'Bedtime Ballads'],
      color: 'from-cultural-400 to-cultural-500',
      bgGradient: 'from-cultural-50 to-cultural-100',
      features: ['Language Development', 'Memory Building', 'Rhythm & Phonics', 'Emotional Expression']
    },
    {
      id: 'educational',
      title: 'Educational',
      icon: GraduationCap,
      emoji: '🎓',
      description: 'Interactive learning that makes education an adventure',
      longDescription: 'Comprehensive educational books that transform learning into exciting adventures, covering science, mathematics, history, and social studies with engaging activities and experiments.',
      books: 12,
      ageRange: '5-14 years',
      popular: ['Little Scientists Big Dreams', 'Math Magic Adventures', 'Future Innovators'],
      color: 'from-nature-400 to-nature-500',
      bgGradient: 'from-nature-50 to-nature-100',
      features: ['STEM Learning', 'Critical Thinking', 'Experiments', 'Problem Solving']
    },
    {
      id: 'language',
      title: 'Language Learning',
      icon: Globe,
      emoji: '🌍',
      description: 'Multilingual books that open doors to new cultures',
      longDescription: 'Comprehensive language learning books designed to introduce children to new languages through interactive activities, cultural stories, and fun exercises that make multilingual education enjoyable.',
      books: 10,
      ageRange: '4-12 years',
      popular: ['My First Arabic Words', 'Melodic Malayalam', 'Hindi Heroes'],
      color: 'from-primary-400 to-primary-500',
      bgGradient: 'from-primary-50 to-primary-100',
      features: ['Cultural Awareness', 'Vocabulary Building', 'Grammar Basics', 'Pronunciation Guide']
    },
    {
      id: 'art',
      title: 'Art & Creativity',
      icon: Palette,
      emoji: '🎨',
      description: 'Creative activities that unleash artistic potential',
      longDescription: 'Inspiring art and creativity books that encourage children to explore their artistic talents through drawing tutorials, craft projects, and creative challenges that build confidence and skills.',
      books: 7,
      ageRange: '5-14 years',
      popular: ['Creative Canvas Kids', 'Colors & Brushes', 'Art Adventures'],
      color: 'from-accent-400 to-accent-500',
      bgGradient: 'from-accent-50 to-accent-100',
      features: ['Drawing Techniques', 'Color Theory', 'Craft Projects', 'Creative Expression']
    }
  ];

  const totalBooks = categories.reduce((sum, cat) => sum + cat.books, 0);

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-accent-50 to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating creative elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">🎨</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">📖</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">✨</span>
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-float animation-delay-400">
        <span className="text-3xl">🌟</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Book Categories
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 animate-fly-in animation-delay-200">
            From <span className="gradient-text font-bold">magical storybooks</span> to <span className="gradient-text font-bold">educational adventures</span>, 
            discover the perfect category for every young reader&apos;s journey.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600 animate-fly-in animation-delay-400">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary-500" />
              <span>{totalBooks} Total Books</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-reading-500" />
              <span>Age 2-14 Years</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent-500" />
              <span>5 Categories</span>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`
                category-card group cursor-pointer transition-all duration-500 hover-lift
                ${activeCategory === category.id ? 'scale-105 shadow-2xl' : ''}
                animate-fly-in
              `}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card overflow-hidden h-full">
                {/* Category Header */}
                <div className={`
                  relative p-8 bg-gradient-to-br ${category.color} text-white
                  group-hover:scale-105 transition-transform duration-500 origin-top
                `}>
                  <div className="absolute inset-0 honeycomb-pattern opacity-20" />
                  
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-honeycomb flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-4xl animate-bounce-slow">{category.emoji}</span>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {category.title}
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Floating sparkles */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-5 h-5 text-white/80 animate-sparkle" />
                  </div>
                </div>

                {/* Category Stats */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{category.books}</div>
                      <div className="text-xs text-gray-500">Books</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-800">{category.ageRange}</div>
                      <div className="text-xs text-gray-500">Age Range</div>
                    </div>
                  </div>

                  {/* Popular Titles */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-700 mb-2">Popular Titles:</h4>
                    <div className="space-y-1">
                      {category.popular.slice(0, 2).map((title, idx) => (
                        <div key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary-400 rounded-full" />
                          <span>{title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <button className="w-full btn-outline text-sm py-2 px-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <span>Explore {category.title}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Category View */}
        {activeCategory && (
          <div className="mb-16 animate-fly-in">
            {(() => {
              const category = categories.find(c => c.id === activeCategory);
              if (!category) return null;
              
              return (
                <div className="card max-w-6xl mx-auto overflow-hidden">
                  <div className={`relative p-8 bg-gradient-to-br ${category.bgGradient}`}>
                    <div className="absolute inset-0 honeycomb-pattern opacity-10" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-honeycomb flex items-center justify-center shadow-honeycomb`}>
                          <span className="text-4xl">{category.emoji}</span>
                        </div>
                        <div>
                          <h3 className="text-4xl font-heading font-bold text-gray-800 mb-2">
                            {category.title}
                          </h3>
                          <p className="text-xl text-gray-600">
                            {category.longDescription}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h4 className="font-bold text-gray-800 mb-4">Key Features</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {category.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 bg-white/80 rounded-lg p-3">
                                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                                <span className="text-sm font-medium text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Popular Books */}
                        <div>
                          <h4 className="font-bold text-gray-800 mb-4">Popular Books</h4>
                          <div className="space-y-3">
                            {category.popular.map((book, idx) => (
                              <div key={idx} className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                                  <BookOpen className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium text-gray-700">{book}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6">
                            <a
                              href={generateWhatsAppLink(`Hello! I'm interested in the ${category.title} category from PAPERBEE BOOKS. Can you share more details about available titles?`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary inline-flex items-center space-x-3 py-3 px-6"
                            >
                              <span>Order {category.title}</span>
                              <ArrowRight size={20} />
                            </a>
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

        {/* Category Comparison */}
        <div className="mb-16 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-gray-800">
            Choose the Perfect Category 🎯
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full card p-0 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary-50 to-accent-50">
                  <th className="text-left p-4 font-bold text-gray-800">Category</th>
                  <th className="text-center p-4 font-bold text-gray-800">Books</th>
                  <th className="text-center p-4 font-bold text-gray-800">Age Range</th>
                  <th className="text-center p-4 font-bold text-gray-800">Best For</th>
                  <th className="text-center p-4 font-bold text-gray-800">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category.id} className={`border-t border-gray-100 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{category.emoji}</span>
                        <div>
                          <div className="font-medium text-gray-800">{category.title}</div>
                          <div className="text-sm text-gray-600">{category.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <span className="font-bold text-primary-600">{category.books}</span>
                    </td>
                    <td className="text-center p-4">
                      <span className="text-sm text-gray-700">{category.ageRange}</span>
                    </td>
                    <td className="text-center p-4">
                      <span className="text-sm text-gray-600">{category.features[0]}</span>
                    </td>
                    <td className="text-center p-4">
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className="btn-outline text-xs py-2 px-3 hover:scale-105"
                      >
                        Explore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">📚</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🎨</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-text">
                Ready to Start Your Child&apos;s Reading Journey? 🚀
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every category offers unique benefits for your child&apos;s development. From building vocabulary to fostering creativity, 
                our books are designed to grow with your child.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={generateWhatsAppLink("Hello! I'd like to explore PAPERBEE BOOKS categories and find the perfect books for my child.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 min-w-64 text-lg py-4 px-8 hover:scale-105"
                >
                  <BookOpen size={24} />
                  <span>Get Recommendations</span>
                </a>
                
                <a
                  href="#books"
                  className="btn-outline inline-flex items-center justify-center min-w-48 text-lg py-4 px-8 hover:scale-105"
                >
                  Browse All Books
                </a>
              </div>

              {/* Age-based recommendations */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="font-bold text-gray-800 mb-2">Ages 2-5</div>
                  <div className="text-gray-600">Poetry & Simple Stories</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="font-bold text-gray-800 mb-2">Ages 6-10</div>
                  <div className="text-gray-600">Educational & Language Learning</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <div className="font-bold text-gray-800 mb-2">Ages 11-14</div>
                  <div className="text-gray-600">Complex Stories & Art Projects</div>
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