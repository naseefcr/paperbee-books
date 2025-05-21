// src/components/admin/UpcomingEvents.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calendar,
  Clock,
  ChevronRight
} from 'lucide-react'

interface Event {
  id: string
  title: string
  date: string
  type: 'meeting' | 'deadline' | 'release' | 'task'
  description?: string
  link?: string
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchEvents = async () => {
      // In a real app, this would fetch from Firestore
      // For this example, we'll use mock data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Current date for comparison
      const now = new Date()
      
      // Mock events
      const mockEvents: Event[] = [
        {
          id: 'event1',
          title: 'Team Meeting: Q2 Publishing Schedule',
          date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 0).toISOString(),
          type: 'meeting',
          description: 'Discuss the upcoming book releases for Q2',
          link: '/admin/calendar'
        },
        {
          id: 'event2',
          title: 'Product Launch: "Ocean Friends"',
          date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 9, 0).toISOString(),
          type: 'release',
          description: 'Release of our new educational book series',
          link: '/admin/books/edit/book4'
        },
        {
          id: 'event3',
          title: 'Marketing Campaign Deadline',
          date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5, 18, 0).toISOString(),
          type: 'deadline',
          description: 'Submit all marketing materials for summer campaign',
          link: '/admin/marketing'
        },
        {
          id: 'event4',
          title: 'Inventory Check',
          date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 14, 0).toISOString(),
          type: 'task',
          description: 'Complete monthly inventory check',
          link: '/admin/inventory'
        }
      ]
      
      // Sort by date (ascending)
      mockEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      
      setEvents(mockEvents)
      setLoading(false)
    }
    
    fetchEvents()
  }, [])
  
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    // Check if the event is today
    if (date.toDateString() === now.toDateString()) {
      return 'Today'
    }
    
    // Check if the event is tomorrow
    if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow'
    }
    
    // Otherwise, return the formatted date
    return date.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })
  }
  
  const formatEventTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
  }
  
  const getEventBadgeColors = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800'
      case 'deadline':
        return 'bg-red-100 text-red-800'
      case 'release':
        return 'bg-green-100 text-green-800'
      case 'task':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="font-semibold text-mainText">Upcoming Events</h2>
        <Link href="/admin/calendar" className="text-sm text-primaryAction hover:underline">
          View Calendar
        </Link>
      </div>
      
      {loading ? (
        <div className="p-6 flex justify-center">
          <div className="w-10 h-10 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
        </div>
      ) : events.length === 0 ? (
        <div className="p-6 text-center text-secondaryText">
          No upcoming events found.
        </div>
      ) : (
        <div className="divide-y">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 hover:bg-accentHighlight/5"
            >
              <div className="flex justify-between items-start mb-1">
                <div className="font-medium text-mainText">{event.title}</div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${getEventBadgeColors(event.type)}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
              
              {event.description && (
                <div className="text-sm text-secondaryText mb-2">{event.description}</div>
              )}
              
              <div className="flex items-center text-xs text-secondaryText">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{formatEventDate(event.date)}</span>
                <span className="mx-2">•</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{formatEventTime(event.date)}</span>
              </div>
              
              {event.link && (
                <div className="mt-2">
                  <Link
                    href={event.link}
                    className="text-xs text-primaryAction hover:underline flex items-center"
                  >
                    View Details
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}