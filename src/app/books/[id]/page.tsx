/* eslint-disable @typescript-eslint/no-unused-vars */
// app/books/[id]/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart, ChevronRight, Plus, Minus, Share2 } from 'lucide-react'
import Link from 'next/link'

// This would come from your database based on the ID
const getBookData = (id: string) => {
  // Sample data - replace with actual database query
  return {
    id: 1,
    title: "The Magical Forest",
    author: "Sarah Johnson",
    illustrator: "Emma Wilson",
    language: "English",
    category: "storybook",
    ageGroup: "6-8",
    pages: 32,
    isbn: "978-123456789",
    publisher: "Paperbee Books",
    publishDate: "2024",
    price: { usd: 12.99, inr: 999 },
    rating: 4.8,
    reviewCount: 127,
    coverImage: "/api/placeholder/400/600",
    samplePages: [
      "/api/placeholder/300/400",
      "/api/placeholder/300/400",
      "/api/placeholder/300/400",
    ],
    description: "Join Lucy and her magical friends on an enchanting adventure through the Whispering Woods. With vibrant illustrations and engaging storytelling, this book teaches children about friendship, courage, and the magic of nature.",
    features: [
      "Beautifully illustrated",
      "Perfect for bedtime reading",
      "Teaches valuable life lessons",
      "Available in multiple languages"
    ],
    inStock: true,
    isNew: true,
    isBestseller: false,
  }
}

interface BookDetailPageProps {
  params: { id: string }
}

const BookDetailPage = ({ params }: BookDetailPageProps) => {
  const book = getBookData(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const allImages = [book.coverImage, ...book.samplePages]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-paperbee-blue">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/books" className="hover:text-paperbee-blue">Books</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">{book.title}</span>
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
              className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src={allImages[selectedImage]}
                alt={book.title}
                className="w-full h-full object-cover"
              />
              {book.isNew && (
                <span className="absolute top-4 left-4 bg-paperbee-green text-white text-sm px-3 py-1 rounded">
                  New
                </span>
              )}
              {book.isBestseller && (
                <span className="absolute top-4 right-4 bg-paperbee-orange text-white text-sm px-3 py-1 rounded">
                  Bestseller
                </span>
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-24 h-32 rounded overflow-hidden border-2 transition ${
                    selectedImage === index ? 'border-paperbee-blue' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-lg text-gray-600">by {book.author}</p>
              {book.illustrator && (
                <p className="text-gray-600">Illustrated by {book.illustrator}</p>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(book.rating) ? 'fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">{book.rating} ({book.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div>
              <p className="text-3xl font-bold text-paperbee-blue">${book.price.usd}</p>
              <p className="text-lg text-gray-600">₹{book.price.inr}</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{book.description}</p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Language</p>
                <p className="font-medium">{book.language}</p>
              </div>
              <div>
                <p className="text-gray-500">Age Group</p>
                <p className="font-medium">{book.ageGroup} years</p>
              </div>
              <div>
                <p className="text-gray-500">Pages</p>
                <p className="font-medium">{book.pages}</p>
              </div>
              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-medium capitalize">{book.category}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
              <ul className="space-y-1">
                {book.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-paperbee-green rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">Quantity:</p>
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-paperbee-blue text-white py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 border rounded-lg transition ${
                    isWishlisted ? 'bg-red-50 border-red-200 text-red-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 border rounded-lg hover:bg-gray-50 transition">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="text-sm">
              {book.inStock ? (
                <p className="text-green-600 flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  In Stock
                </p>
              ) : (
                <p className="text-red-600">Out of Stock</p>
              )}
            </div>
          </div>
        </div>

        {/* Related Books */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          {/* Add related books component here */}
        </div>
      </div>
    </div>
  )
}

export default BookDetailPage