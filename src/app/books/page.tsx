/* eslint-disable @typescript-eslint/no-unused-vars */
// app/books/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Grid, List, ArrowUpDown } from 'lucide-react'
import BookCard from '@/components/BookCard'

// Sample book data - replace with actual data from database
const booksData = [
  {
    id: 1,
    title: "The Magical Forest",
    author: "Sarah Johnson",
    language: "English",
    category: "storybook",
    price: { usd: 12.99, inr: 999 },
    rating: 4.8,
    coverImage: "/api/placeholder/300/400",
    isNew: true,
  },
  {
    id: 2,
    title: "حكايات العجائب",
    author: "أحمد محمد",
    language: "Arabic",
    category: "storybook",
    price: { usd: 14.99, inr: 1199 },
    rating: 4.9,
    coverImage: "/api/placeholder/300/400",
    isBestseller: true,
  },
  {
    id: 3,
    title: "魔法の物語",
    author: "田中花子",
    language: "Japanese",
    category: "poetry",
    price: { usd: 13.99, inr: 1099 },
    rating: 4.7,
    coverImage: "/api/placeholder/300/400",
  },
  {
    id: 4,
    title: "കഥകൾ കുഞ്ഞുങ്ങൾക്ക്",
    author: "രാധിക നായർ",
    language: "Malayalam",
    category: "educational",
    price: { usd: 11.99, inr: 899 },
    rating: 4.6,
    coverImage: "/api/placeholder/300/400",
  },
  {
    id: 5,
    title: "ಮಕ್ಕಳ ಕಥೆಗಳು",
    author: "ಗೀತಾ ಶರ್ಮಾ",
    language: "Kannada",
    category: "storybook",
    price: { usd: 12.99, inr: 999 },
    rating: 4.5,
    coverImage: "/api/placeholder/300/400",
  },
]

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const languages = ['all', 'English', 'Arabic', 'Japanese', 'Malayalam', 'Kannada']
  const categories = ['all', 'storybook', 'poetry', 'educational']
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ]

  // Filter and sort books
  const filteredBooks = booksData
    .filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesLanguage = selectedLanguage === 'all' || book.language === selectedLanguage
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
      return matchesSearch && matchesLanguage && matchesCategory
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'popularity':
          return b.rating - a.rating
        case 'price-low':
          return a.price.usd - b.price.usd
        case 'price-high':
          return b.price.usd - a.price.usd
        default:
          return b.id - a.id // Default to newest
      }
    })

  return (
    <div className="min-h-screen bg-pageBackground">
      {/* Page Header */}
      <div className="bg-headerNavigation text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Our Books</h1>
            <p className="text-accentHighlight text-lg">Explore our collection of children&apos;s literature</p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="sticky top-16 z-40 bg-pageBackground border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondaryText" />
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-accentHighlight text-mainText"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-4">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang === 'all' ? 'All Languages' : lang}
                  </option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primaryAction text-white' : 'bg-pageBackground text-secondaryText hover:bg-accentHighlight'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primaryAction text-white' : 'bg-pageBackground text-secondaryText hover:bg-accentHighlight'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="md:hidden mt-4 grid grid-cols-1 gap-4">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang === 'all' ? 'All Languages' : lang}
                  </option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-secondaryText">
            Showing {filteredBooks.length} books
          </p>
        </div>

        {/* Books Grid/List */}
        <motion.div
          layout
          className={viewMode === 'grid' 
            ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' 
            : 'space-y-4'
          }
        >
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <BookCard book={book} viewMode={viewMode} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondaryText text-lg">No books found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedLanguage('all')
                setSelectedCategory('all')
              }}
              className="mt-4 text-primaryAction hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BooksPage