/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/BookCard.tsx
import Link from 'next/link'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion';

// Updated Book interface to align with API and example
interface Book {
  id: string; // Changed from number to string
  title: string;
  author: string;
  language?: string; // Kept as optional if not always present
  category?: string; // Kept as optional
  price: number; // Changed from object to single number
  currency?: string; // Added currency field
  rating?: number; // Kept as optional
  coverImageUrl: string; // Renamed from coverImage
  isNew?: boolean;
  isBestseller?: boolean;
  // Fields like isbn, description, stock are available from API but not used in card currently
}

interface BookCardProps {
  book: Book;
  viewMode: 'grid' | 'list';
}

const BookCard: React.FC<BookCardProps> = ({ book, viewMode }) => {
  const displayCurrency = book.currency || '$'; // Default to $ if no currency provided

  if (viewMode === 'list') {
    return (
      <div className="bg-pageBackground rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="flex p-4">
          <div className="w-32 h-48 flex-shrink-0 relative">
            <img 
              src={book.coverImageUrl || '/placeholder-cover.jpg'} // Use coverImageUrl and provide fallback
              alt={book.title}
              className="w-full h-full object-cover rounded"
            />
            {book.isNew && (
              <span className="absolute top-2 left-2 bg-accentHighlight text-mainText text-xs px-2 py-1 rounded">
                New
              </span>
            )}
            {book.isBestseller && (
              <span className="absolute top-2 right-2 bg-secondaryButtonIcon text-mainText text-xs px-2 py-1 rounded">
                Bestseller
              </span>
            )}
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                  <h3 className="font-semibold text-mainText text-lg">{book.title}</h3>
                  <p className="text-sm text-secondaryText">{book.author}</p>
                <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs bg-accentHighlight text-secondaryText px-2 py-1 rounded">
                    {book.language}
                  </span>
                    <span className="text-xs bg-accentHighlight text-secondaryText px-2 py-1 rounded">
                    {book.category}
                  </span>
                </div>
              </div>
              <div className="text-right">
                  <p className="text-lg font-bold text-primaryAction">{displayCurrency}{book.price.toFixed(2)}</p>
                  {/* Secondary currency display removed for simplicity with flat price structure */}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-secondaryButtonIcon">
                {book.rating && <Star className="h-4 w-4 fill-current" />}
                  <span className="text-sm text-secondaryText ml-1">{book.rating || 'N/A'}</span>
              </div>
              <div className="flex gap-2">
                  <button className="p-2 border rounded-full hover:bg-accentHighlight transition">
                    <Heart className="h-4 w-4 text-secondaryText" />
                </button>
                  <button className="p-2 bg-primaryAction text-white rounded-full hover:bg-primaryAction transition">
                  <ShoppingCart className="h-4 w-4" />
                </button>
                <Link 
                  href={`/books/${book.id}`}
                    className="px-4 py-2 bg-secondaryButtonIcon text-mainText rounded hover:bg-goldenYellow transition"
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
    <div className="bg-pageBackground rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] relative">
        <img 
          src={book.coverImageUrl || '/placeholder-cover.jpg'} // Use coverImageUrl and provide fallback
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
          {book.isNew && (
            <span className="bg-accentHighlight text-mainText text-xs px-2 py-1 rounded">
              New
            </span>
          )}
          {book.isBestseller && (
            <span className="bg-secondaryButtonIcon text-mainText text-xs px-2 py-1 rounded">
              Bestseller
            </span>
          )}
          <button className="ml-auto p-2 bg-pageBackground/80 backdrop-blur-sm rounded-full hover:bg-accentHighlight transition">
            <Heart className="h-4 w-4 text-secondaryText" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-mainText line-clamp-2">{book.title}</h3>
            <p className="text-sm text-secondaryText">{book.author}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primaryAction">{displayCurrency}{book.price.toFixed(2)}</p>
            {/* Secondary currency display removed for simplicity */}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-4">
          <span className="text-xs bg-accentHighlight text-secondaryText px-2 py-1 rounded">
            {book.language || 'N/A'}
          </span>
          <span className="text-xs bg-accentHighlight text-secondaryText px-2 py-1 rounded">
            {book.category || 'N/A'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-secondaryButtonIcon">
            {book.rating && <Star className="h-4 w-4 fill-current" />}
            <span className="text-sm text-secondaryText ml-1">{book.rating || 'N/A'}</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-primaryAction text-white rounded-full hover:bg-primaryAction transition">
              <ShoppingCart className="h-4 w-4" />
            </button>
            <Link 
              href={`/books/${book.id}`}
              className="px-4 py-2 bg-secondaryButtonIcon text-mainText rounded text-sm hover:bg-goldenYellow transition"
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