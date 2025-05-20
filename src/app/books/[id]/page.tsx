// No longer needed: /* eslint-disable @typescript-eslint/no-unused-vars */
// app/books/[id]/page.tsx
'use client'; // Mark as a Client Component

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, ChevronRight, Plus, Minus, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // Import useParams
import Image from 'next/image'; // Using Next/Image for optimization

// Define the Book interface based on API response and page needs
interface Book {
  id: string;
  title: string;
  author: string;
  illustrator?: string;
  language?: string;
  category?: string;
  ageGroup?: string;
  pages?: number;
  isbn?: string;
  publisher?: string;
  publishDate?: string;
  price: number; // Assuming API returns a flat price
  currency?: string; // Optional currency from API
  rating?: number;
  reviewCount?: number;
  coverImageUrl: string;
  samplePages?: string[]; // Assuming API might provide this
  description: string;
  features?: string[];
  stock?: number; // API provides stock
  isNew?: boolean;
  isBestseller?: boolean;
  // createdAt and updatedAt are available from API but not directly displayed
}


const BookDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // For image gallery
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchBookDetails = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(`/api/books/${id}`);
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error('Book not found');
            }
            throw new Error(`Failed to fetch book: ${response.status} ${response.statusText}`);
          }
          const data: Book = await response.json();
          setBook(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred');
          setBook(null);
        } finally {
          setLoading(false);
        }
      };
      fetchBookDetails();
    } else {
      setError("Book ID not found in URL.");
      setLoading(false);
    }
  }, [id]);

  // Image gallery logic
  const allImages = book ? [book.coverImageUrl, ...(book.samplePages || [])] : [];
  const currentImage = allImages[selectedImageIndex] || '/placeholder-cover.jpg'; // Fallback

  if (loading) {
    return <div className="min-h-screen bg-pageBackground flex items-center justify-center"><p className="text-mainText text-xl">Loading book details...</p></div>;
  }

  if (error) {
    return <div className="min-h-screen bg-pageBackground flex items-center justify-center"><p className="text-red-500 text-xl">Error: {error}</p></div>;
  }

  if (!book) {
    return <div className="min-h-screen bg-pageBackground flex items-center justify-center"><p className="text-mainText text-xl">Book details could not be loaded.</p></div>;
  }

  const displayCurrency = book.currency || '$';

  return (
    <div className="min-h-screen bg-pageBackground">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm text-secondaryText">
          <Link href="/" className="hover:text-primaryAction">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/books" className="hover:text-primaryAction">Books</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-mainText">{book.title}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] bg-accentHighlight rounded-lg overflow-hidden"
            >
              <Image // Using Next/Image
                src={currentImage}
                alt={book.title}
                layout="fill" // Fills the parent container
                objectFit="cover" // Scales while maintaining aspect ratio
                className="rounded-lg" // Keep rounded if desired, though parent has overflow-hidden
              />
              {book.isNew && (
                <span className="absolute top-4 left-4 bg-accentHighlight text-mainText text-sm px-3 py-1 rounded">
                  New
                </span>
              )}
              {book.isBestseller && (
                <span className="absolute top-4 right-4 bg-secondaryButtonIcon text-mainText text-sm px-3 py-1 rounded">
                  Bestseller
                </span>
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-32 rounded overflow-hidden border-2 transition ${
                      selectedImageIndex === index ? 'border-primaryAction' : 'border-transparent'
                    }`}
                  >
                    <Image src={image} alt={`Thumbnail ${index + 1}`} width={96} height={128} objectFit="cover" className="rounded" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-mainText mb-2">{book.title}</h1>
              <p className="text-lg text-secondaryText">by {book.author}</p>
              {book.illustrator && (
                <p className="text-secondaryText">Illustrated by {book.illustrator}</p>
              )}
            </div>

            {/* Rating */}
            {book.rating !== undefined && book.reviewCount !== undefined && (
              <div className="flex items-center gap-4">
                <div className="flex items-center text-secondaryButtonIcon">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(book.rating!) ? 'fill-current' : 'text-accentHighlight'}`}
                    />
                  ))}
                </div>
                <span className="text-secondaryText">{book.rating} ({book.reviewCount} reviews)</span>
              </div>
            )}

            {/* Price */}
            <div>
              <p className="text-3xl font-bold text-primaryAction">{displayCurrency}{book.price.toFixed(2)}</p>
              {/* INR price display removed as API provides single price and currency */}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-mainText mb-2">Description</h3>
              <p className="text-secondaryText">{book.description}</p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {book.language && <div><p className="text-secondaryText">Language</p><p className="font-medium text-mainText">{book.language}</p></div>}
              {book.ageGroup && <div><p className="text-secondaryText">Age Group</p><p className="font-medium text-mainText">{book.ageGroup} years</p></div>}
              {book.pages && <div><p className="text-secondaryText">Pages</p><p className="font-medium text-mainText">{book.pages}</p></div>}
              {book.category && <div><p className="text-secondaryText">Category</p><p className="font-medium capitalize text-mainText">{book.category}</p></div>}
              {book.isbn && <div><p className="text-secondaryText">ISBN</p><p className="font-medium text-mainText">{book.isbn}</p></div>}
              {book.publisher && <div><p className="text-secondaryText">Publisher</p><p className="font-medium text-mainText">{book.publisher}</p></div>}
              {book.publishDate && <div><p className="text-secondaryText">Published</p><p className="font-medium text-mainText">{book.publishDate}</p></div>}
            </div>

            {/* Features */}
            {book.features && book.features.length > 0 && (
              <div>
                <h3 className="font-semibold text-mainText mb-2">Features</h3>
                <ul className="space-y-1">
                  {book.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-secondaryText">
                      <span className="w-2 h-2 bg-secondaryButtonIcon rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <p className="text-secondaryText">Quantity:</p>
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-accentHighlight disabled:opacity-50"
                    disabled={book.stock === 0}
                  >
                    <Minus className="h-4 w-4 text-mainText" />
                  </button>
                  <span className="w-12 text-center text-mainText">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-accentHighlight disabled:opacity-50"
                    disabled={book.stock === 0 || quantity >= (book.stock || 0) }
                  >
                    <Plus className="h-4 w-4 text-mainText" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  className="flex-1 bg-primaryAction text-white py-3 rounded-lg hover:bg-rustOrange transition flex items-center justify-center gap-2 disabled:opacity-50"
                  disabled={book.stock === 0}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {book.stock && book.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 border rounded-lg transition ${
                    isWishlisted ? 'bg-primaryAction/10 border-primaryAction/20 text-primaryAction' : 'hover:bg-accentHighlight text-secondaryText'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 border rounded-lg hover:bg-accentHighlight text-secondaryText transition">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="text-sm">
              {book.stock !== undefined && book.stock > 0 ? (
                <p className="text-green-600 flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {book.stock} In Stock
                </p>
              ) : (
                <p className="text-red-600">Out of Stock</p>
              )}
            </div>
          </div>
        </div>

        {/* Related Books */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-mainText mb-8">You May Also Like</h2>
          {/* Add related books component here */}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;