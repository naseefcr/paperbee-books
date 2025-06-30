'use client';

import { useState } from 'react';
import { MessageCircle, Eye, Heart, Star, BookOpen, X, Filter, Sparkles } from 'lucide-react';
import { whatsAppActions } from '@/lib/utils';
import BookModal from './BookModal';

export default function BookShowcase() {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('all');
  const [languageFilter, setLanguageFilter] = useState('all');

  const books = [
    {
      id: 1,
      title: 'The Magic Honey Garden',
      category: 'storybooks',
      age: '4-8',
      languages: ['en', 'hi', 'ar', 'ur'],
      price: '₹299',
      rating: 5,
      coverImage: '/api/placeholder/300/400', // Placeholder for beautiful cover
      preview: {
        description: 'Join Buzzy the bee on a magical adventure through an enchanted garden where flowers sing, trees tell stories, and friendship blooms in the most unexpected places.',
        sampleText: 'Once upon a time, in a garden where magic lived in every petal, there was a little bee named Buzzy who discovered that the greatest treasures are found when we help others...',
        themes: ['Friendship', 'Kindness', 'Nature', 'Magic'],
        learningGoals: ['Empathy development', 'Environmental awareness', 'Social skills']
      },
      featured: true,
      bestSeller: true
    },
    {
      id: 2,
      title: 'Rainbow Rhymes Collection',
      category: 'poetry',
      age: '2-6',
      languages: ['en', 'hi', 'ta', 'ml'],
      price: '₹249',
      rating: 4,
      coverImage: '/api/placeholder/300/400',
      preview: {
        description: 'A delightful collection of colorful poems that teach children about emotions, colors, and the beauty of nature through rhythmic verses.',
        sampleText: 'Red like roses, blue like sky, Yellow sunshine way up high, Green like grass beneath our feet, Orange carrots, oh so sweet!',
        themes: ['Colors', 'Emotions', 'Nature', 'Rhythm'],
        learningGoals: ['Language development', 'Color recognition', 'Memory skills']
      },
      featured: false,
      bestSeller: false
    },
    {
      id: 3,
      title: 'My First Arabic Words',
      category: 'language',
      age: '5-10',
      languages: ['ar', 'en', 'ur'],
      price: '₹349',
      rating: 5,
      coverImage: '/api/placeholder/300/400',
      preview: {
        description: 'Learn Arabic in a fun and engaging way with beautiful illustrations, pronunciation guides, and interactive exercises.',
        sampleText: 'مرحبا - Hello | كتاب - Book | قلم - Pen | بيت - House',
        themes: ['Language Learning', 'Arabic Culture', 'Vocabulary'],
        learningGoals: ['Arabic vocabulary', 'Cultural awareness', 'Language skills']
      },
      featured: true,
      bestSeller: false
    },
    {
      id: 4,
      title: 'Little Scientists Big Dreams',
      category: 'knowledge',
      age: '6-12',
      languages: ['en', 'hi', 'ja'],
      price: '₹399',
      rating: 5,
      coverImage: '/api/placeholder/300/400',
      preview: {
        description: 'Interactive science book that makes learning fun with simple experiments, discoveries, and fascinating facts about our world.',
        sampleText: 'Did you know that butterflies taste with their feet? Let\'s explore more amazing facts about nature and science!',
        themes: ['Science', 'Experiments', 'Discovery', 'Nature'],
        learningGoals: ['Scientific thinking', 'Curiosity development', 'STEM skills']
      },
      featured: false,
      bestSeller: true
    },
    {
      id: 5,
      title: 'Creative Canvas Kids',
      category: 'art',
      age: '7-14',
      languages: ['en', 'hi', 'kn', 'ta'],
      price: '₹449',
      rating: 4,
      coverImage: '/api/placeholder/300/400',
      preview: {
        description: 'Art instruction book that teaches children various drawing and painting techniques through step-by-step tutorials.',
        sampleText: 'Today we\'ll learn to draw a beautiful tree. Start with a simple line for the trunk, then add branches like arms reaching for the sky...',
        themes: ['Art', 'Creativity', 'Drawing', 'Expression'],
        learningGoals: ['Artistic skills', 'Creative expression', 'Fine motor skills']
      },
      featured: false,
      bestSeller: false
    },
    {
      id: 6,
      title: 'ABC Adventures',
      category: 'alphabet',
      age: '3-6',
      languages: ['en', 'hi', 'ml', 'kn'],
      price: '₹199',
      rating: 5,
      coverImage: '/api/placeholder/300/400',
      preview: {
        description: 'Fun and colorful alphabet book with tracing practice, letter recognition, and word associations.',
        sampleText: 'A is for Apple, red and round, B is for Ball that bounces around, C is for Cat with whiskers so fine...',
        themes: ['Alphabet', 'Reading', 'Writing', 'Recognition'],
        learningGoals: ['Letter recognition', 'Writing skills', 'Vocabulary building']
      },
      featured: true,
      bestSeller: true
    },
    {
      id: 7,
      title: 'Wisdom Tales from Around the World',
      category: 'storybooks',
      age: '8-14',
      languages: ['en', 'hi', 'ar', 'ja', 'id'],
      price: '₹599',
      rating: 5,
      coverImage: '/api/placeholder/300/400',
      preview: {
        description: 'Collection of folktales and wisdom stories from different cultures, promoting diversity and understanding.',
        sampleText: 'In ancient Japan, there lived a wise old turtle who taught the village children that patience and kindness are the greatest treasures...',
        themes: ['Wisdom', 'Culture', 'Values', 'Diversity'],
        learningGoals: ['Cultural awareness', 'Moral development', 'Global understanding']
      },
      featured: true,
      bestSeller: true
    },
    {
      id: 8,
      title: 'Numbers & Me',
      category: 'alphabet',
      age: '4-7',
      languages: ['en', 'hi', 'ar'],
      price: '₹249',
      rating: 4,
      coverImage: '/api/placeholder/300/400',
      preview: {
        description: 'Interactive number learning book with counting games, math puzzles, and fun exercises.',
        sampleText: 'One little duck goes swimming in the pond, Two little bees are buzzing along, Three little stars are shining so bright...',
        themes: ['Numbers', 'Counting', 'Math', 'Games'],
        learningGoals: ['Number recognition', 'Counting skills', 'Math foundation']
      },
      featured: false,
      bestSeller: false
    },
    {
      id: 9,
      title: 'Melody of Malayalam',
      category: 'language',
      age: '4-10',
      languages: ['ml', 'en'],
      price: '₹329',
      rating: 5,
      coverImage: '/api/placeholder/300/400',
      preview: {
        description: 'Learn Malayalam through songs, rhymes, and interactive activities designed for young language learners.',
        sampleText: 'അമ്മ - Mother | അച്ഛൻ - Father | വീട് - House | പൂച്ച - Cat',
        themes: ['Malayalam', 'Songs', 'Rhymes', 'Culture'],
        learningGoals: ['Malayalam vocabulary', 'Cultural connection', 'Language skills']
      },
      featured: false,
      bestSeller: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: '📚' },
    { id: 'storybooks', name: 'Storybooks', icon: '📖' },
    { id: 'poetry', name: 'Poetry', icon: '🎵' },
    { id: 'language', name: 'Language Learning', icon: '🌍' },
    { id: 'alphabet', name: 'Alphabet & Numbers', icon: '🔤' },
    { id: 'art', name: 'Art & Creativity', icon: '🎨' },
    { id: 'knowledge', name: 'General Knowledge', icon: '🧠' }
  ];

  const ageGroups = [
    { id: 'all', name: 'All Ages' },
    { id: '2-4', name: '2-4 years' },
    { id: '4-6', name: '4-6 years' },
    { id: '6-8', name: '6-8 years' },
    { id: '8-12', name: '8-12 years' },
    { id: '12+', name: '12+ years' }
  ];

  const languages = [
    { id: 'all', name: 'All Languages', flag: '🌍' },
    { id: 'en', name: 'English', flag: '🇺🇸' },
    { id: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { id: 'ar', name: 'العربية', flag: '🇸🇦' },
    { id: 'ja', name: '日本語', flag: '🇯🇵' },
    { id: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { id: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { id: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { id: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { id: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];

  const filteredBooks = books.filter(book => {
    if (activeFilter !== 'all' && book.category !== activeFilter) return false;
    if (ageFilter !== 'all' && book.age !== ageFilter) return false;
    if (languageFilter !== 'all' && !book.languages.includes(languageFilter)) return false;
    return true;
  });

  const handleOrder = (book: any) => {
    window.open(whatsAppActions.orderBook(book.title, book.price, book.category, 'book-showcase'), '_blank');
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-reading-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">📚</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">⭐</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">💝</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Book Collection
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Explore our carefully curated collection of 
            <span className="gradient-text font-bold"> high-quality children&apos;s books</span> designed to educate, inspire, and entertain young readers.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 animate-fly-in animation-delay-400">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-bee">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 4).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`
                        px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1
                        ${activeFilter === category.id 
                          ? 'bg-primary-500 text-white shadow-bee' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }
                      `}
                    >
                      <span>{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age Filter */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">👶</span>
                  Age Group
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ageGroups.slice(0, 4).map((age) => (
                    <button
                      key={age.id}
                      onClick={() => setAgeFilter(age.id)}
                      className={`
                        px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${ageFilter === age.id 
                          ? 'bg-nature-500 text-white shadow-bee' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }
                      `}
                    >
                      {age.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Filter */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">🌍</span>
                  Language
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.slice(0, 4).map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setLanguageFilter(lang.id)}
                      className={`
                        px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1
                        ${languageFilter === lang.id 
                          ? 'bg-cultural-500 text-white shadow-bee' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }
                      `}
                    >
                      <span>{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-center text-gray-600">
              Showing {filteredBooks.length} of {books.length} books
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredBooks.map((book, index) => (
            <div
              key={book.id}
              className="card group hover-lift animate-fly-in relative overflow-hidden"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              {/* Book Cover */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📖</div>
                    <div className="text-sm font-medium text-gray-600">{book.title}</div>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {book.featured && (
                    <span className="bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ⭐ Featured
                    </span>
                  )}
                  {book.bestSeller && (
                    <span className="bg-nature-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      🏆 Bestseller
                    </span>
                  )}
                </div>

                {/* Age indicator */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {book.age}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Book Info */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {book.title}
                </h3>

                {/* Rating & Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < book.rating ? 'text-primary-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({book.rating})</span>
                  </div>
                  <span className="text-lg font-bold text-primary-600">{book.price}</span>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">Available in:</div>
                  <div className="flex flex-wrap gap-1">
                    {book.languages.slice(0, 3).map((lang) => (
                      <span key={lang} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {languages.find(l => l.id === lang)?.flag} {lang.toUpperCase()}
                      </span>
                    ))}
                    {book.languages.length > 3 && (
                      <span className="text-xs text-gray-500">+{book.languages.length - 3}</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Eye size={16} />
                    Preview
                  </button>
                  
                  <button
                    onClick={() => handleOrder(book)}
                    className="flex-1 bg-nature-500 hover:bg-nature-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    Order
                  </button>
                </div>
              </div>

              {/* Sparkle effects */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-primary-400 animate-sparkle">✨</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Pagination */}
        <div className="text-center animate-fly-in animation-delay-800">
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Showing {filteredBooks.length} books. Want to see more?
            </p>
            <button className="btn-outline py-3 px-8 hover:scale-105">
              Load More Books
            </button>
          </div>
        </div>
      </div>

      {/* Book Modal */}
      {selectedBook && (
        <BookModal 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)}
          onOrder={() => handleOrder(selectedBook)}
        />
      )}

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}