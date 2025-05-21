// src/components/admin/LowStockAlert.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Book {
  id: string
  title: string
  stock: number
  coverImageUrl: string
}

export default function LowStockAlert() {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    async function fetchLowStockBooks() {
      try {
        const q = query(
          collection(db, 'books'),
          where('stock', '<', 10),
          orderBy('stock'),
          limit(5)
        )
        
        const querySnapshot = await getDocs(q)
        const lowStockBooks: Book[] = []
        
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          lowStockBooks.push({
            id: doc.id,
            title: data.title || 'Untitled Book',
            stock: data.stock || 0,
            coverImageUrl: data.coverImageUrl || '/placeholder-cover.jpg'
          })
        })
        
        setBooks(lowStockBooks)
      } catch (error) {
        console.error('Error fetching low stock books:', error)
        // Fallback to dummy data for demo purposes
        setBooks([
          {
            id: 'book1',
            title: 'The Magical Forest',
            stock: 3,
            coverImageUrl: '/api/placeholder/300/400'
          },
          {
            id: 'book2',
            title: 'Adventures in Wonderland',
            stock: 5,
            coverImageUrl: '/api/placeholder/300/400'
          },
          {
            id: 'book3',
            title: 'Ocean Friends',
            stock: 8,
            coverImageUrl: '/api/placeholder/300/400'
          }
        ])
      } finally {
        setLoading(false)
      }
    }
    
    fetchLowStockBooks()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-mainText">Low Stock Alert</h2>
          <Link href="/admin/books" className="text-sm text-primaryAction hover:underline flex items-center">
            View All
            <ExternalLink size={14} className="ml-1" />
          </Link>
        </div>
      </div>
      
      {loading ? (
        <div className="p-6 text-center text-secondaryText">Loading inventory...</div>
      ) : books.length === 0 ? (
        <div className="p-6 text-center text-secondaryText">No low stock items found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-accentHighlight/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText">Book</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText">Stock Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-accentHighlight/10">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-sm object-cover" src={book.coverImageUrl} alt={book.title} />
                      </div>
                      <div className="ml-4">
                        <Link 
                          href={`/admin/books/edit/${book.id}`}
                          className="text-sm font-medium text-mainText hover:text-primaryAction"
                        >
                          {book.title}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      book.stock === 0 ? 'bg-red-100 text-red-800' :
                      book.stock < 5 ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {book.stock} left
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  )
}