// src/components/admin/RecentOrders.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface Order {
  id: string
  customerName: string
  date: string
  total: number
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  items: number
}

export default function RecentOrders() {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    // Simulate API call to fetch orders
    setTimeout(() => {
      setOrders([
        {
          id: 'ORD-001',
          customerName: 'John Doe',
          date: '2025-05-18',
          total: 34.99,
          status: 'completed',
          items: 2
        },
        {
          id: 'ORD-002',
          customerName: 'Sarah Johnson',
          date: '2025-05-17',
          total: 89.95,
          status: 'processing',
          items: 3
        },
        {
          id: 'ORD-003',
          customerName: 'Michael Brown',
          date: '2025-05-16',
          total: 24.99,
          status: 'pending',
          items: 1
        },
        {
          id: 'ORD-004',
          customerName: 'Emily Wilson',
          date: '2025-05-15',
          total: 49.98,
          status: 'completed',
          items: 2
        },
        {
          id: 'ORD-005',
          customerName: 'David Martinez',
          date: '2025-05-14',
          total: 74.97,
          status: 'cancelled',
          items: 3
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-mainText">Recent Orders</h2>
          <Link href="/admin/orders" className="text-sm text-primaryAction hover:underline flex items-center">
            View All
            <ExternalLink size={14} className="ml-1" />
          </Link>
        </div>
      </div>
      
      {loading ? (
        <div className="p-6 text-center text-secondaryText">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="p-6 text-center text-secondaryText">No recent orders found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-accentHighlight/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-accentHighlight/10">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-mainText">
                    <Link href={`/admin/orders/${order.id}`} className="hover:text-primaryAction">
                      {order.id}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondaryText">{order.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondaryText">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondaryText">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
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