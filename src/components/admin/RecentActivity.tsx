// src/components/admin/RecentActivity.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calendar,
  User, 
  ShoppingBag,
  Tag,
  Clock
} from 'lucide-react'

interface Activity {
  id: string
  type: 'order' | 'user' | 'product'
  message: string
  timestamp: string
  link?: string
}

export default function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchActivities = async () => {
      // In a real app, this would fetch from Firestore
      // For this example, we'll use mock data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Mock activities
      const mockActivities: Activity[] = [
        {
          id: 'act1',
          type: 'order',
          message: 'New order #PB-2025-005 from Michael Brown',
          timestamp: '2025-05-21T09:15:00Z',
          link: '/admin/orders/order5'
        },
        {
          id: 'act2',
          type: 'user',
          message: 'New user registered: Sarah Johnson',
          timestamp: '2025-05-20T16:45:00Z',
          link: '/admin/users/user4'
        },
        {
          id: 'act3',
          type: 'product',
          message: 'Product "The Magical Forest" stock is low (3 remaining)',
          timestamp: '2025-05-20T14:30:00Z',
          link: '/admin/books/edit/book1'
        },
        {
          id: 'act4',
          type: 'order',
          message: 'Order #PB-2025-004 was cancelled',
          timestamp: '2025-05-20T11:20:00Z',
          link: '/admin/orders/order4'
        },
        {
          id: 'act5',
          type: 'product',
          message: 'New book "Animal Adventures" was added',
          timestamp: '2025-05-19T15:10:00Z',
          link: '/admin/books/edit/book6'
        }
      ]
      
      setActivities(mockActivities)
      setLoading(false)
    }
    
    fetchActivities()
  }, [])
  
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <ShoppingBag className="h-4 w-4" />
      case 'user':
        return <User className="h-4 w-4" />
      case 'product':
        return <Tag className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }
  
  const getActivityColor = (type: string) => {
    switch (type) {
      case 'order':
        return 'bg-blue-100 text-blue-600'
      case 'user':
        return 'bg-green-100 text-green-600'
      case 'product':
        return 'bg-purple-100 text-purple-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }
  
  // Format relative time (e.g., "2 hours ago")
  const formatRelativeTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`
    
    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
    
    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
    
    const diffMonths = Math.floor(diffDays / 30)
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="font-semibold text-mainText">Recent Activity</h2>
        <Link href="/admin/activity" className="text-sm text-primaryAction hover:underline">
          View All
        </Link>
      </div>
      
      {loading ? (
        <div className="p-6 flex justify-center">
          <div className="w-10 h-10 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
        </div>
      ) : activities.length === 0 ? (
        <div className="p-6 text-center text-secondaryText">
          No recent activity found.
        </div>
      ) : (
        <div className="divide-y">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 flex items-start hover:bg-accentHighlight/5"
            >
              <div className={`w-8 h-8 rounded-full ${getActivityColor(activity.type)} flex items-center justify-center flex-shrink-0 mr-3`}>
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div className="text-sm font-medium text-mainText">
                    {activity.link ? (
                      <Link href={activity.link} className="hover:text-primaryAction">
                        {activity.message}
                      </Link>
                    ) : (
                      activity.message
                    )}
                  </div>
                  <div className="ml-2 flex items-center text-xs text-secondaryText whitespace-nowrap">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatRelativeTime(activity.timestamp)}
                  </div>
                </div>
                <div className="mt-1 text-xs text-secondaryText flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(activity.timestamp).toLocaleString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}