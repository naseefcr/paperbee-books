/* eslint-disable @typescript-eslint/no-unused-vars */
// app/books/page.tsx
'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react'; // ArrowUpDown not used directly in this version
import BookCard from '@/components/BookCard';

// Define Book interface matching BookCard props and API response
interface Book {
  id: string;
  title: string;
  author: string;
  language?: string;
  category?: string;
  price: number; // API provides flat price
  currency?: string; // API might provide this, or assume default
  rating?: number;
  coverImageUrl: string; // API provides coverImageUrl
  isNew?: boolean;
  isBestseller?: boolean;
  createdAt?: string; // For 'newest' sorting
  // other fields like isbn, description, stock are available from API if needed
}

const BooksPage = () => {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest'); // Default sort
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Static data for filters - could be dynamic if needed
  const languages = ['all', 'English', 'Arabic', 'Japanese', 'Malayalam', 'Kannada'];
  const categories = ['all', 'storybook', 'poetry', 'educational', 'activity', 'learning']; // Added more examples
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popularity', label: 'Most Popular (Rating)' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'title-asc', label: 'Title: A-Z' },
    { value: 'title-desc', label: 'Title: Z-A' },
  ];

  // Fetch all books from API
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/books');
        if (!response.ok) {
          throw new Error(`Failed to fetch books: ${response.status} ${response.statusText}`);
        }
        const data: Book[] = await response.json();
        setAllBooks(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setAllBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAllBooks();
  }, []);

  // Filter and sort books whenever dependencies change
  useEffect(() => {
    let booksToProcess = [...allBooks];

    // Apply search filter
    if (searchQuery) {
      booksToProcess = booksToProcess.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply language filter
    if (selectedLanguage !== 'all') {
      booksToProcess = booksToProcess.filter(book => book.language === selectedLanguage);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      booksToProcess = booksToProcess.filter(book => book.category === selectedCategory);
    }

    // Apply sorting
    booksToProcess.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.rating || 0) - (a.rating || 0);
        case 'price-low':
          return a.price - b.price; // Use flat price
        case 'price-high':
          return b.price - a.price; // Use flat price
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'newest':
        default:
          // Assuming createdAt is an ISO string. Convert to Date for comparison.
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
      }
    });

    setFilteredBooks(booksToProcess);
  }, [allBooks, searchQuery, selectedLanguage, selectedCategory, sortBy]);


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
            {loading ? 'Loading books...' : `Showing ${filteredBooks.length} books`}
          </p>
        </div>

        {loading && (
          <p className="text-center py-12 text-mainText">Loading all books...</p>
        )}
        {error && (
          <p className="text-center py-12 text-red-500">Error loading books: {error}</p>
        )}
        {!loading && !error && filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondaryText text-lg">No books found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLanguage('all');
                setSelectedCategory('all');
                setSortBy('newest');
              }}
              className="mt-4 text-primaryAction hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {!loading && !error && filteredBooks.length > 0 && (
          <motion.div
            layout
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' 
              : 'space-y-4'
            }
          >
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id} // Ensure key is stable and from book data
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }} // Reduced delay for faster feel
              >
                <BookCard book={book} viewMode={viewMode} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BooksPage