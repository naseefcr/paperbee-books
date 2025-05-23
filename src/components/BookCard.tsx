/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/BookCard.tsx
import Link from 'next/link'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'

interface BookCardProps {
  book: {
    id: number
    title: string
    author: string
    language: string
    category: string
    price: { usd: number; inr: number }
    rating: number
    coverImage: string
    isNew?: boolean
    isBestseller?: boolean
  }
  viewMode: 'grid' | 'list'
}

const BookCard: React.FC<BookCardProps> = ({ book, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="flex p-4">
          <div className="w-32 h-48 flex-shrink-0 relative">
            <img 
              src={book.coverImage} 
              alt={book.title}
              className="w-full h-full object-cover rounded"
            />
            {book.isNew && (
              <span className="absolute top-2 left-2 bg-paperbee-green text-white text-xs px-2 py-1 rounded">
                New
              </span>
            )}
            {book.isBestseller && (
              <span className="absolute top-2 right-2 bg-paperbee-orange text-white text-xs px-2 py-1 rounded">
                Bestseller
              </span>
            )}
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {book.language}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {book.category}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-paperbee-blue">${book.price.usd}</p>
                <p className="text-sm text-gray-500">₹{book.price.inr}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border rounded-full hover:bg-gray-50 transition">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-2 bg-paperbee-blue text-white rounded-full hover:bg-blue-600 transition">
                  <ShoppingCart className="h-4 w-4" />
                </button>
                <Link 
                  href={`/books/${book.id}`}
                  className="px-4 py-2 bg-paperbee-yellow text-paperbee-blue rounded hover:bg-yellow-400 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid view
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] relative">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
          {book.isNew && (
            <span className="bg-paperbee-green text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}
          {book.isBestseller && (
            <span className="bg-paperbee-orange text-white text-xs px-2 py-1 rounded">
              Bestseller
            </span>
          )}
          <button className="ml-auto p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-2">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-paperbee-blue">${book.price.usd}</p>
            <p className="text-xs text-gray-500">₹{book.price.inr}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-4">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {book.language}
          </span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {book.category}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-paperbee-blue text-white rounded-full hover:bg-blue-600 transition">
              <ShoppingCart className="h-4 w-4" />
            </button>
            <Link 
              href={`/books/${book.id}`}
              className="px-4 py-2 bg-paperbee-yellow text-paperbee-blue rounded text-sm hover:bg-yellow-400 transition"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard