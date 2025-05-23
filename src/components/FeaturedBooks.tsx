/* eslint-disable @next/next/no-img-element */
// components/FeaturedBooks.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, Heart, ArrowRight } from 'lucide-react'

// Sample data - replace with actual book data
const featuredBooks = [
  {
    id: 1,
    title: "The Magical Forest",
    author: "Sarah Johnson",
    language: "English",
    price: "$12.99",
    rating: 4.8,
    image: "/api/placeholder/300/400",
  },
  {
    id: 2,
    title: "حكايات العجائب",
    author: "أحمد محمد",
    language: "Arabic",
    price: "$14.99",
    rating: 4.9,
    image: "/api/placeholder/300/400",
  },
  {
    id: 3,
    title: "魔法の物語",
    author: "田中花子",
    language: "Japanese",
    price: "¥1,500",
    rating: 4.7,
    image: "/api/placeholder/300/400",
  },
]

const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-gray-600">
            Discover our most popular children&apos;s stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[3/4] relative bg-gray-200">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                  </div>
                  <span className="text-lg font-bold text-paperbee-blue">{book.price}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
                  </div>
                  <Link 
                    href={`/books/${book.id}`}
                    className="bg-paperbee-blue text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/books"
            className="inline-flex items-center bg-paperbee-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View All Books
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBooks