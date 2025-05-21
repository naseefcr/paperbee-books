// src/app/admin/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BookOpen,
  ShoppingBag,
  DollarSign,
  Users,
  ArrowUp,
  Bell,
  Settings,
  Plus,
  BarChart,
  Mail
} from 'lucide-react'

import AdminMetricCard from '@/components/admin/AdminMetricCard'
import AdminStats from '@/components/admin/AdminStats'
import RecentOrders from '@/components/admin/RecentOrders'
import LowStockAlert from '@/components/admin/LowStockAlert'
import RecentActivity from '@/components/admin/RecentActivity'
import UpcomingEvents from '@/components/admin/UpcomingEvents'

// Admin QuickAction component
const QuickAction = ({ 
  title, 
  icon: Icon, 
  link, 
  color = "bg-primaryAction",
  delay = 0
}: { 
  title: string; 
  icon: React.ElementType; 
  link: string; 
  color?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay * 0.1 }}
  >
    <Link
      href={link}
      className="flex flex-col items-center p-4 rounded-lg hover:bg-accentHighlight/10 transition-colors"
    >
      <div className={`w-12 h-12 rounded-full ${color} bg-opacity-10 flex items-center justify-center mb-3`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <span className="text-sm text-mainText text-center">{title}</span>
    </Link>
  </motion.div>
)

export default function AdminOverview() {
  const router = useRouter()
  
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    booksTrend: 0,
    ordersTrend: 0,
    revenueTrend: 0,
    customersTrend: 0,
  })
  
  useEffect(() => {
    const fetchOverviewData = async () => {
      // In a real app, this would fetch from Firestore
      // For this demo, we'll just simulate a delay and set mock data
      
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      setStats({
        totalBooks: 28,
        totalOrders: 235,
        totalRevenue: 4980,
        totalCustomers: 184,
        booksTrend: 12.5,
        ordersTrend: 8.2,
        revenueTrend: 15.7,
        customersTrend: 9.3,
      })
      
      setLoading(false)
    }
    
    fetchOverviewData()
  }, [])
  
  // Quick actions for admin dashboard
  const quickActions = [
    {
      title: 'Add Book',
      icon: BookOpen,
      link: '/admin/books/new',
      color: 'text-blue-600'
    },
    {
      title: 'View Orders',
      icon: ShoppingBag,
      link: '/admin/orders',
      color: 'text-green-600'
    },
    {
      title: 'Sales Reports',
      icon: BarChart,
      link: '/admin/analytics/sales',
      color: 'text-primaryAction'
    },
    {
      title: 'Add User',
      icon: Users,
      link: '/admin/users/new',
      color: 'text-purple-600'
    },
    {
      title: 'Send Email',
      icon: Mail,
      link: '/admin/marketing/email',
      color: 'text-orange-600'
    },
    {
      title: 'Settings',
      icon: Settings,
      link: '/admin/settings',
      color: 'text-gray-600'
    },
  ]
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-mainText"
      >
        Welcome to PaperBee Admin
      </motion.h1>
      
      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <h2 className="font-semibold text-mainText mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {quickActions.map((action, index) => (
            <QuickAction
              key={action.title}
              title={action.title}
              icon={action.icon}
              link={action.link}
              color={action.color}
              delay={index}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminMetricCard
          title="Total Books"
          value={stats.totalBooks}
          icon={BookOpen}
          trend={stats.booksTrend}
          delay={0}
          colorClass="text-blue-600"
          onClick={() => router.push('/admin/books')}
        />
        
        <AdminMetricCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={ShoppingBag}
          trend={stats.ordersTrend}
          delay={1}
          colorClass="text-green-600"
          onClick={() => router.push('/admin/orders')}
        />
        
        <AdminMetricCard
          title="Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend={stats.revenueTrend}
          delay={2}
          colorClass="text-primaryAction"
          onClick={() => router.push('/admin/analytics')}
        />
        
        <AdminMetricCard
          title="Customers"
          value={stats.totalCustomers}
          icon={Users}
          trend={stats.customersTrend}
          delay={3}
          colorClass="text-purple-600"
          onClick={() => router.push('/admin/users')}
        />
      </div>
      
      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingEvents />
      </div>
      
      {/* More Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <RecentOrders />
        <LowStockAlert />
      </div>
    </div>
  )
}