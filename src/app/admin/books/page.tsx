// src/app/admin/books/page.tsx
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Search, 
  Filter, 
  ArrowUpDown,
  Eye,
  Download
} from 'lucide-react';
import { 
  collection, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  where,
  startAfter,
  limit,
  DocumentData
} from 'firebase/firestore';
import { db } from '@/lib/firebase-admin';

interface Book {
  id: string;
  title: string;
  author: string;
  language?: string;
  category?: string;
  price: number;
  stock: number;
  isbn?: string;
  coverImageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function AdminBooks() {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  
  // Static data for filters (matches your existing filter options)
  const languages = ['all', 'English', 'Arabic', 'Japanese', 'Malayalam', 'Kannada'];
  const categories = ['all', 'storybook', 'poetry', 'educational', 'activity', 'learning'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'title-asc', label: 'Title: A-Z' },
    { value: 'title-desc', label: 'Title: Z-A' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'stock-low', label: 'Stock: Low to High' },
  ];

  const fetchBooks = async (isInitialLoad = true) => {
    try {
      setLoading(true);
      
      // Basic query
      let booksQuery: any = collection(db, 'books');
      
      // Apply filters
      if (selectedLanguage !== 'all') {
        booksQuery = query(booksQuery, where('language', '==', selectedLanguage));
      }
      
      if (selectedCategory !== 'all') {
        booksQuery = query(booksQuery, where('category', '==', selectedCategory));
      }
      
      // Apply sorting
      switch (sortBy) {
        case 'newest':
          booksQuery = query(booksQuery, orderBy('createdAt', 'desc'));
          break;
        case 'oldest':
          booksQuery = query(booksQuery, orderBy('createdAt', 'asc'));
          break;
        case 'title-asc':
          booksQuery = query(booksQuery, orderBy('title', 'asc'));
          break;
        case 'title-desc':
          booksQuery = query(booksQuery, orderBy('title', 'desc'));
          break;
        case 'price-low':
          booksQuery = query(booksQuery, orderBy('price', 'asc'));
          break;
        case 'price-high':
          booksQuery = query(booksQuery, orderBy('price', 'desc'));
          break;
        case 'stock-low':
          booksQuery = query(booksQuery, orderBy('stock', 'asc'));
          break;
        default:
          booksQuery = query(booksQuery, orderBy('createdAt', 'desc'));
      }
      
      // Pagination
      const pageSize = 10;
      if (!isInitialLoad && lastDoc) {
        booksQuery = query(booksQuery, startAfter(lastDoc), limit(pageSize));
      } else {
        booksQuery = query(booksQuery, limit(pageSize));
      }
      
      const querySnapshot = await getDocs(booksQuery);
      
      // Update last document for pagination
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastDoc(lastVisible);
      setHasMore(querySnapshot.docs.length === pageSize);
      
      // Process the results
      const booksData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : null,
          updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate().toISOString() : null,
        } as Book;
      });
      
      if (isInitialLoad) {
        setBooks(booksData);
      } else {
        setBooks(prev => [...prev, ...booksData]);
      }
      
      setError(null);
    } catch (err) {
      console.error('Error fetching books:', err);
      setError('Failed to load books. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [selectedLanguage, selectedCategory, sortBy]);
  
  const loadMoreBooks = () => {
    fetchBooks(false);
  };
  
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'books', id));
      setBooks(books.filter(book => book.id !== id));
      setShowDeleteConfirm(null);
    } catch (err) {
      console.error('Error deleting book:', err);
      setError('Failed to delete book. Please try again.');
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // For a real app, you'd implement search differently
    // For this example, we'll just filter the existing books client-side
    
    // In a production app, you'd likely use Firestore's 
    // where() with array-contains or use Algolia/ElasticSearch
  };
  
  const handleExport = () => {
    // Create CSV data
    const headers = ['ID', 'Title', 'Author', 'Language', 'Category', 'Price', 'Stock', 'ISBN'];
    
    const csvContent = [
      headers.join(','),
      ...books.map(book => {
        return [
          book.id,
          `"${book.title}"`,
          `"${book.author}"`,
          book.language || '',
          book.category || '',
          book.price,
          book.stock,
          book.isbn || ''
        ].join(',');
      })
    ].join('\n');
    
    // Create a blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `paperbee-books-export-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };
  
  // Filter books by search query (client-side)
  const filteredBooks = books.filter(book => 
    !searchQuery || 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (book.isbn && book.isbn.includes(searchQuery))
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
      >
        <h1 className="text-2xl font-bold text-mainText">Book Management</h1>
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/30 flex items-center gap-2 transition"
          >
            <Download size={16} />
            Export
          </button>
          <Link
            href="/admin/books/new"
            className="px-4 py-2 bg-primaryAction text-white rounded-lg flex items-center gap-2 hover:bg-rustOrange transition"
          >
            <PlusCircle size={16} />
            Add Book
          </Link>
        </div>
      </motion.div>
      
      {/* Filter and Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondaryText" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, author, or ISBN..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              />
            </form>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-secondaryText" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang === 'all' ? 'All Languages' : lang}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-secondaryText" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowUpDown size={16} className="text-secondaryText" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Books Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-800">
            {error}
          </div>
        )}
        
        {loading && books.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-secondaryText">Loading books...</p>
          </div>
        ) : filteredBooks.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-secondaryText mb-4">No books found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLanguage('all');
                setSelectedCategory('all');
                setSortBy('newest');
              }}
              className="text-primaryAction hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accentHighlight/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Book</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Language</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredBooks.map((book) => (
                    <tr key={book.id} className="hover:bg-accentHighlight/10">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-9 flex-shrink-0">
                            <img className="h-12 w-9 object-cover rounded" src={book.coverImageUrl} alt={book.title} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-mainText">{book.title}</div>
                            <div className="text-sm text-secondaryText">{book.author}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondaryText">
                        {book.language || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondaryText">
                        {book.category ? book.category.charAt(0).toUpperCase() + book.category.slice(1) : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondaryText">
                        ${book.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          book.stock === 0 ? 'bg-red-100 text-red-800' :
                          book.stock < 5 ? 'bg-orange-100 text-orange-800' :
                          book.stock < 10 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {book.stock}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end items-center space-x-3">
                          <Link 
                            href={`/books/${book.id}`}
                            className="text-secondaryText hover:text-primaryAction transition"
                            title="View Book"
                            target="_blank"
                          >
                            <Eye size={18} />
                          </Link>
                          <Link 
                            href={`/admin/books/edit/${book.id}`}
                            className="text-blue-600 hover:text-blue-900 transition"
                            title="Edit Book"
                          >
                            <Edit size={18} />
                          </Link>
                          <button
                            onClick={() => setShowDeleteConfirm(book.id)}
                            className="text-red-600 hover:text-red-900 transition"
                            title="Delete Book"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {hasMore && (
              <div className="p-4 border-t text-center">
                <button
                  onClick={loadMoreBooks}
                  disabled={loading}
                  className="px-4 py-2 bg-accentHighlight/20 hover:bg-accentHighlight/40 text-secondaryText rounded-lg transition disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </motion.div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg"
          >
            <h3 className="text-lg font-semibold text-mainText mb-4">Confirm Deletion</h3>
            <p className="text-secondaryText mb-6">
              Are you sure you want to delete this book? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/30 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => showDeleteConfirm && handleDelete(showDeleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}