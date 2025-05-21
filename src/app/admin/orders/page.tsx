// src/app/admin/orders/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  ArrowUpDown,
  Download,
  Eye,
  Truck,
  CheckCircle, 
  XCircle,
  Clock,
  RefreshCw
} from 'lucide-react'
import { 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  where,
  limit,
  startAfter,
  DocumentData,
  Timestamp
} from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface OrderItem {
  bookId: string
  title: string
  quantity: number
  price: number
}

interface Customer {
  id: string
  name: string
  email: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

interface Order {
  id: string
  orderNumber: string
  customer: Customer
  items: OrderItem[]
  total: number
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  paymentStatus: 'paid' | 'unpaid' | 'refunded'
  shippingMethod: string
  createdAt: string
  updatedAt?: string
}

export default function AdminOrders() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null)
  const [hasMore, setHasMore] = useState(true)
  
  // Static data for filters
  const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
  ]
  
  const paymentStatusOptions = [
    { value: 'all', label: 'All Payment Statuses' },
    { value: 'paid', label: 'Paid' },
    { value: 'unpaid', label: 'Unpaid' },
    { value: 'refunded', label: 'Refunded' },
  ]
  
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'total-high', label: 'Total: High to Low' },
    { value: 'total-low', label: 'Total: Low to High' },
  ]

  // Fetch orders from Firestore
  const fetchOrders = async (isInitialLoad = true) => {
    try {
      setLoading(true)
      
      // In a real app, this would fetch from Firestore
      // For this example, we'll simulate it with static data since
      // the orders collection might not exist yet

      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulate orders data
      const mockOrders: Order[] = [
        {
          id: 'order1',
          orderNumber: 'PB-2025-001',
          customer: {
            id: 'cust1',
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+1234567890',
            address: {
              street: '123 Main St',
              city: 'New York',
              state: 'NY',
              zipCode: '10001',
              country: 'USA'
            }
          },
          items: [
            {
              bookId: 'book1',
              title: 'The Magical Forest',
              quantity: 2,
              price: 12.99
            },
            {
              bookId: 'book2',
              title: 'Ocean Adventures',
              quantity: 1,
              price: 14.99
            }
          ],
          total: 40.97,
          status: 'completed',
          paymentStatus: 'paid',
          shippingMethod: 'Standard Shipping',
          createdAt: '2025-05-15T10:30:00Z',
          updatedAt: '2025-05-16T14:20:00Z'
        },
        {
          id: 'order2',
          orderNumber: 'PB-2025-002',
          customer: {
            id: 'cust2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '+1987654321',
            address: {
              street: '456 Park Ave',
              city: 'Chicago',
              state: 'IL',
              zipCode: '60601',
              country: 'USA'
            }
          },
          items: [
            {
              bookId: 'book3',
              title: 'Counting Stars',
              quantity: 1,
              price: 9.99
            }
          ],
          total: 9.99,
          status: 'processing',
          paymentStatus: 'paid',
          shippingMethod: 'Express Shipping',
          createdAt: '2025-05-17T15:45:00Z'
        },
        {
          id: 'order3',
          orderNumber: 'PB-2025-003',
          customer: {
            id: 'cust3',
            name: 'Robert Johnson',
            email: 'robert@example.com',
            phone: '+1122334455',
            address: {
              street: '789 Oak St',
              city: 'Los Angeles',
              state: 'CA',
              zipCode: '90001',
              country: 'USA'
            }
          },
          items: [
            {
              bookId: 'book4',
              title: 'Animal Friends',
              quantity: 3,
              price: 11.99
            },
            {
              bookId: 'book5',
              title: 'Learning Numbers',
              quantity: 2,
              price: 8.99
            }
          ],
          total: 53.95,
          status: 'pending',
          paymentStatus: 'unpaid',
          shippingMethod: 'Standard Shipping',
          createdAt: '2025-05-19T09:15:00Z'
        },
        {
          id: 'order4',
          orderNumber: 'PB-2025-004',
          customer: {
            id: 'cust4',
            name: 'Emily Wilson',
            email: 'emily@example.com',
            phone: '+1567891234',
            address: {
              street: '321 Pine St',
              city: 'Seattle',
              state: 'WA',
              zipCode: '98101',
              country: 'USA'
            }
          },
          items: [
            {
              bookId: 'book2',
              title: 'Ocean Adventures',
              quantity: 1,
              price: 14.99
            }
          ],
          total: 14.99,
          status: 'cancelled',
          paymentStatus: 'refunded',
          shippingMethod: 'Standard Shipping',
          createdAt: '2025-05-14T13:20:00Z',
          updatedAt: '2025-05-14T16:45:00Z'
        },
        {
          id: 'order5',
          orderNumber: 'PB-2025-005',
          customer: {
            id: 'cust5',
            name: 'Michael Brown',
            email: 'michael@example.com',
            phone: '+1678912345',
            address: {
              street: '555 Maple Ave',
              city: 'Boston',
              state: 'MA',
              zipCode: '02108',
              country: 'USA'
            }
          },
          items: [
            {
              bookId: 'book1',
              title: 'The Magical Forest',
              quantity: 1,
              price: 12.99
            },
            {
              bookId: 'book3',
              title: 'Counting Stars',
              quantity: 1,
              price: 9.99
            },
            {
              bookId: 'book5',
              title: 'Learning Numbers',
              quantity: 1,
              price: 8.99
            }
          ],
          total: 31.97,
          status: 'completed',
          paymentStatus: 'paid',
          shippingMethod: 'Express Shipping',
          createdAt: '2025-05-16T11:10:00Z',
          updatedAt: '2025-05-17T09:30:00Z'
        }
      ]
      
      // Apply filters to mock data
      let filteredOrders = [...mockOrders]
      
      if (selectedStatus !== 'all') {
        filteredOrders = filteredOrders.filter(order => order.status === selectedStatus)
      }
      
      if (selectedPaymentStatus !== 'all') {
        filteredOrders = filteredOrders.filter(order => order.paymentStatus === selectedPaymentStatus)
      }
      
      // Apply sorting
      switch (sortBy) {
        case 'newest':
          filteredOrders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          break
        case 'oldest':
          filteredOrders.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
          break
        case 'total-high':
          filteredOrders.sort((a, b) => b.total - a.total)
          break
        case 'total-low':
          filteredOrders.sort((a, b) => a.total - b.total)
          break
      }
      
      // In a real implementation, you would use these filters in a Firestore query
      // But for this example, we'll just return the mock data
      
      setOrders(filteredOrders)
      setHasMore(false) // No pagination in mock data
      setError(null)
    } catch (err) {
      console.error('Error fetching orders:', err)
      setError('Failed to load orders. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [selectedStatus, selectedPaymentStatus, sortBy])
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // For a real app, you'd implement search against Firestore
    // For this example, we'll just filter the current orders
  }
  
  const handleExport = () => {
    // Create CSV data
    const headers = ['Order #', 'Date', 'Customer', 'Status', 'Payment Status', 'Items', 'Total']
    
    const csvContent = [
      headers.join(','),
      ...orders.map(order => {
        return [
          order.orderNumber,
          new Date(order.createdAt).toLocaleDateString(),
          `"${order.customer.name}"`,
          order.status,
          order.paymentStatus,
          order.items.length,
          order.total.toFixed(2)
        ].join(',')
      })
    ].join('\n')
    
    // Create a blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `paperbee-orders-export-${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }
  
  // Filter orders by search query (client-side)
  const filteredOrders = orders.filter(order => 
    !searchQuery || 
    order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Render status badge with appropriate color
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        )
      case 'processing':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <RefreshCw className="w-3 h-3 mr-1" />
            Processing
          </span>
        )
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </span>
        )
      case 'cancelled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Cancelled
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        )
    }
  }
  
  // Render payment status badge
  const renderPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Paid
          </span>
        )
      case 'unpaid':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Unpaid
          </span>
        )
      case 'refunded':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Refunded
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        )
    }
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
      >
        <h1 className="text-2xl font-bold text-mainText">Order Management</h1>
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/30 flex items-center gap-2 transition"
          >
            <Download size={16} />
            Export
          </button>
        </div>
      </motion.div>
      
      {/* Filter and Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondaryText" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by order #, customer name, or email..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              />
            </form>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-secondaryText" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-secondaryText" />
              <select
                value={selectedPaymentStatus}
                onChange={(e) => setSelectedPaymentStatus(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                {paymentStatusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowUpDown size={16} className="text-secondaryText" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-800">
            {error}
          </div>
        )}
        
        {loading && orders.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-secondaryText">Loading orders...</p>
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-secondaryText mb-4">No orders found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStatus('all');
                setSelectedPaymentStatus('all');
                setSortBy('newest');
              }}
              className="text-primaryAction hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accentHighlight/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Order</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Payment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Items</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-accentHighlight/10">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-mainText">
                          {order.orderNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-secondaryText">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-secondaryText/70">
                          {new Date(order.createdAt).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-mainText">{order.customer.name}</div>
                        <div className="text-xs text-secondaryText">{order.customer.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {renderStatusBadge(order.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {renderPaymentStatusBadge(order.paymentStatus)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-secondaryText">
                          {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondaryText text-right">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link 
                          href={`/admin/orders/${order.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Eye size={18} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {hasMore && (
              <div className="p-4 border-t text-center">
                <button
                  onClick={() => fetchOrders(false)}
                  disabled={loading}
                  className="px-4 py-2 bg-accentHighlight/20 hover:bg-accentHighlight/40 text-secondaryText rounded-lg transition disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  )
}