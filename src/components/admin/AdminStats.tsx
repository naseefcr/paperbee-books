// src/components/admin/AdminStats.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, DollarSign, ShoppingCart, Users } from 'lucide-react'
import { collection, getDocs, query, where, orderBy, limit, getCountFromServer } from 'firebase/firestore'
import { db } from '@/lib/firebase-admin'

interface StatCard {
  title: string
  value: string | number
  change: number
  icon: React.ElementType
  iconColor: string
  bgColor: string
}

export default function AdminStats() {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<StatCard[]>([
    {
      title: 'Total Revenue',
      value: '$0',
      change: 0,
      icon: DollarSign,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Orders',
      value: 0,
      change: 0,
      icon: ShoppingCart,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Books',
      value: 0,
      change: 0,
      icon: BookOpen,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Active Users',
      value: 0,
      change: 0,
      icon: Users,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
  ])

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true)
        
        // Get book count
        const booksSnapshot = await getCountFromServer(collection(db, 'books'))
        const bookCount = booksSnapshot.data().count
        
        // For a real app, you'd fetch other stats from Firestore
        // Here we're just simulating the data with fixed values
        
        setStats([
          {
            title: 'Total Revenue',
            value: '$4,980',
            change: 12.5,
            icon: DollarSign,
            iconColor: 'text-green-600',
            bgColor: 'bg-green-100'
          },
          {
            title: 'Total Orders',
            value: 235,
            change: 8.2,
            icon: ShoppingCart,
            iconColor: 'text-blue-600',
            bgColor: 'bg-blue-100'
          },
          {
            title: 'Total Books',
            value: bookCount,
            change: bookCount > 28 ? ((bookCount - 28) / 28) * 100 : 0,
            icon: BookOpen,
            iconColor: 'text-purple-600',
            bgColor: 'bg-purple-100'
          },
          {
            title: 'Active Users',
            value: 842,
            change: 5.7,
            icon: Users,
            iconColor: 'text-orange-600',
            bgColor: 'bg-orange-100'
          },
        ])
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchStats()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium text-secondaryText">{stat.title}</h3>
              <p className="text-2xl font-bold text-mainText">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
            </div>
          </div>
          <div className="flex items-center">
            <span className={`text-xs font-medium ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change >= 0 ? '+' : ''}{stat.change.toFixed(1)}%
            </span>
            <span className="text-xs text-secondaryText ml-1.5">from last month</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}