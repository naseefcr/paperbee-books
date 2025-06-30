'use client';

import { useState } from 'react';
import { BookOpen, Filter, Grid, List, Search, Sparkles } from 'lucide-react';

export default function BookCategories() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeAge, setActiveAge] = useState('all');
  const [activeLanguage, setActiveLanguage] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'storybooks',
      name: 'Storybooks',
      icon: '📚',
      description: 'Folktales, original stories, fantasy, and moral tales',
      color: 'from-reading-400 to-reading-500',
      bgColor: 'from-reading-50 to-reading-100',
      count: 15,
      subcategories: ['Folktales', 'Original Stories', 'Fantasy', 'Moral Tales', 'Adventure']
    },
    {
      id: 'poetry',
      name: 'Poetry Collections',
      icon: '🎵',
      description: 'Simple, rhythmic, and meaningful poems for children',
      color: 'from-cultural-400 to-cultural-500',
      bgColor: 'from-cultural-50 to-cultural-100',
      count: 8,
      subcategories: ['Nursery Rhymes', 'Nature Poems', 'Festival Songs', 'Bedtime Verses']
    },
    {
      id: 'language',
      name: 'Language Learning',
      icon: '🌍',
      description: 'Grammar, bilingual books, and language practice',
      color: 'from-primary-400 to-primary-500',
      bgColor: 'from-primary-50 to-primary-100',
      count: 12,
      subcategories: ['Grammar Books', 'Bilingual Stories', 'Vocabulary Builders', 'Writing Practice']
    },
    {
      id: 'alphabet',
      name: 'Alphabet & Numbers',
      icon: '🔤',
      description: 'Writing practice and early learning fundamentals',
      color: 'from-nature-400 to-nature-500',
      bgColor: 'from-nature-50 to-nature-100',
      count: 10,
      subcategories: ['Alphabet Books', 'Number Learning', 'Writing Practice', 'Tracing Books']
    },
    {
      id: 'art',
      name: 'Art & Creativity',
      icon: '🎨',
      description: 'Creative expression and artistic skill development',
      color: 'from-accent-400 to-accent-500',
      bgColor: 'from-accent-50 to-accent-100',
      count: 8,
      subcategories: ['Drawing Guides', 'Coloring Books', 'Craft Projects', 'Art History']
    },
    {
      id: 'knowledge',
      name: 'General Knowledge',
      icon: '🧠',
      description: 'Science, nature, and world knowledge for early learners',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'from-purple-50 to-purple-100',
      count: 12,
      subcategories: ['Science Fun', 'Animal Kingdom', 'World Geography', 'History Stories']
    }
  ];

  const ageGroups = [
    { id: 'all', label: 'All Ages', icon: '👶👧👦' },
    { id: '2-4', label: '2-4 years', icon: '👶' },
    { id: '4-6', label: '4-6 years', icon: '🧒' },
    { id: '6-8', label: '6-8 years', icon: '👧' },
    { id: '8-12', label: '8-12 years', icon: '👦' },
    { id: '12+', label: '12+ years', icon: '🧑' }
  ];

  const languages = [
    { id: 'all', label: 'All Languages', flag: '🌍' },
    { id: 'en', label: 'English', flag: '🇺🇸' },
    { id: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { id: 'ar', label: 'العربية', flag: '🇸🇦' },
    { id: 'ja', label: '日本語', flag: '🇯🇵' },
    { id: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
    { id: 'ml', label: 'മലയാളം', flag: '🇮🇳' },
    { id: 'kn', label: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { id: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
    { id: 'ur', label: 'اردو', flag: '🇵🇰' }
  ];

  const filteredCategories = categories.filter(category => {
    if (activeCategory !== 'all' && category.id !== activeCategory) return false;
    if (searchTerm && !category.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-accent-50 to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">📖</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">🎯</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">✨</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Browse by Category
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Discover the perfect books for every young reader. Filter by 
            <span className="gradient-text font-bold"> age, language, or category</span> to find exactly what you&apos;re looking for.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 animate-fly-in animation-delay-400">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-bee">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-honeycomb focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Age Filter */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">👶</span>
                  Age Groups
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ageGroups.map((age) => (
                    <button
                      key={age.id}
                      onClick={() => setActiveAge(age.id)}
                      className={`
                        px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${activeAge === age.id 
                          ? 'bg-primary-500 text-white shadow-bee' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }
                      `}
                    >
                      <span className="mr-1">{age.icon}</span>
                      {age.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Filter */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">🌍</span>
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.slice(0, 5).map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setActiveLanguage(lang.id)}
                      className={`
                        px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${activeLanguage === lang.id 
                          ? 'bg-cultural-500 text-white shadow-bee' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }
                      `}
                    >
                      <span className="mr-1">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Mode */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  View Mode
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`
                      px-4 py-2 rounded-honeycomb flex items-center gap-2 text-sm font-medium transition-all duration-300
                      ${viewMode === 'grid' 
                        ? 'bg-accent-500 text-white shadow-bee' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }
                    `}
                  >
                    <Grid className="w-4 h-4" />
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`
                      px-4 py-2 rounded-honeycomb flex items-center gap-2 text-sm font-medium transition-all duration-300
                      ${viewMode === 'list' 
                        ? 'bg-accent-500 text-white shadow-bee' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }
                    `}
                  >
                    <List className="w-4 h-4" />
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid/List */}
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
          }
          mb-16
        `}>
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              className={`
                card group hover-lift animate-fly-in overflow-hidden cursor-pointer
                ${viewMode === 'list' ? 'flex items-center' : ''}
              `}
              style={{ animationDelay: `${600 + index * 150}ms` }}
              onClick={() => setActiveCategory(activeCategory === category.id ? 'all' : category.id)}
            >
              {/* Category Header */}
              <div className={`
                relative p-6 bg-gradient-to-br ${category.color} text-white
                ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}
              `}>
                <div className="absolute inset-0 honeycomb-pattern opacity-20" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 bg-white/20 rounded-honeycomb flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">{category.name}</h3>
                      <div className="text-sm opacity-90">{category.count} books</div>
                    </div>
                  </div>
                  {viewMode === 'grid' && (
                    <p className="text-white/90 text-sm">{category.description}</p>
                  )}
                </div>
              </div>

              {/* Category Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                {viewMode === 'list' && (
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{category.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">What&apos;s Inside:</h4>
                  <div className={`
                    ${viewMode === 'list' 
                      ? 'flex flex-wrap gap-2' 
                      : 'grid grid-cols-2 gap-2'
                    }
                  `}>
                    {category.subcategories.map((sub, idx) => (
                      <div key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 inline mr-1" />
                    {category.count} titles available
                  </div>
                  <button className="btn-outline text-xs py-2 px-4 hover:scale-105">
                    View Books
                  </button>
                </div>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`} />
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="text-center animate-fly-in animation-delay-800">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-bee max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">
              Our Complete Collection
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">65+</div>
                <div className="text-sm text-gray-600">Total Books</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">6</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">9</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">All</div>
                <div className="text-sm text-gray-600">Age Groups</div>
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