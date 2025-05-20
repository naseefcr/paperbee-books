/* eslint-disable @next/next/no-img-element */
// components/FeaturedBooks.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, Heart, ArrowRight } from 'lucide-react'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Star and Heart are not directly used here anymore, BookCard handles them
import BookCard from './BookCard'; // Assuming BookCard is in the same directory

// Define the Book interface, matching BookCard's expected props and API response
interface Book {
  id: string;
  title: string;
  author: string;
  language?: string;
  category?: string;
  price: number;
  currency?: string;
  rating?: number;
  coverImageUrl: string;
  isNew?: boolean;
  isBestseller?: boolean;
  // Fields from API like isbn, description, stock, createdAt, updatedAt are available if needed
}

const FeaturedBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/books');
        if (!response.ok) {
          throw new Error(`Failed to fetch books: ${response.status} ${response.statusText}`);
        }
        const data: Book[] = await response.json();
        // Sort by rating (desc) to get "featured" by popularity, then take top 3.
        // This is a client-side sort/filter; ideally, API supports this.
        const sortedData = data.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        setBooks(sortedData.slice(0, 3)); 
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="py-16 bg-accentHighlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-mainText mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-secondaryText">
            Discover our most popular children&apos;s stories
          </p>
        </motion.div>

        {loading && (
          <p className="text-center py-8 text-mainText">Loading featured books...</p>
        )}

        {error && (
          <p className="text-center py-8 text-red-500">Error: {error}</p>
        )}

        {!loading && !error && books.length === 0 && (
          <p className="text-center py-8 text-mainText">No featured books available at the moment.</p>
        )}

        {!loading && !error && books.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Assuming BookCard handles its own outer div styling like bg, shadow, rounded etc. */}
                <BookCard book={book} viewMode="grid" />
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link 
            href="/books"
            className="inline-flex items-center bg-primaryAction text-white px-8 py-3 rounded-lg hover:bg-primaryAction transition"
          >
            View All Books
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;