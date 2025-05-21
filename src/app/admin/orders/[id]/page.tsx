// src/app/admin/orders/[id]/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Clock,
  RefreshCw,
  CheckCircle,
  XCircle,
  Truck,
  Download,
  Printer,
  Mail 
} from 'lucide-react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase-admin'

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
  trackingNumber?: string
  notes?: string
  createdAt: string
  updatedAt?: string
}

export default function OrderDetails() {
  const router = useRouter()
  const params = useParams()
  const orderId = params?.id as string
  
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statusLoading, setStatusLoading] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('')
  const [notes, setNotes] = useState('')
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  
  // Fetch order details
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true)
        
        // In a real app, this would fetch from Firestore
        // For this example, we'll use mock data
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Return a mock order based on the ID
        const mockOrder: Order = {
          id: orderId,
          orderNumber: `PB-2025-00${orderId === 'order1' ? '1' : orderId === 'order2' ? '2' : '3'}`,
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
          status: orderId === 'order1' ? 'completed' : orderId === 'order2' ? 'processing' : 'pending',
          paymentStatus: orderId === 'order3' ? 'unpaid' : 'paid',
          shippingMethod: 'Standard Shipping',
          trackingNumber: orderId === 'order1' ? 'TRK123456789' : '',
          notes: orderId === 'order1' ? 'Customer requested gift wrapping.' : '',
          createdAt: '2025-05-15T10:30:00Z',
          updatedAt: orderId === 'order1' ? '2025-05-16T14:20:00Z' : undefined
        }
        
        setOrder(mockOrder)
        setTrackingNumber(mockOrder.trackingNumber || '')
        setNotes(mockOrder.notes || '')
      } catch (err) {
        console.error('Error fetching order:', err)
        setError('Failed to load order details')
      } finally {
        setLoading(false)
      }
    }
    
    fetchOrder()
  }, [orderId])
  
  const updateOrderStatus = async (newStatus: string) => {
    if (!order) return
    
    try {
      setStatusLoading(true)
      
      // In a real app, you'd update the status in Firestore
      // For this example, we'll just update the local state
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setOrder({
        ...order,
        status: newStatus as any,
        updatedAt: new Date().toISOString()
      })
      
      setSuccessMessage(`Order status updated to ${newStatus}`)
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err) {
      console.error('Error updating order status:', err)
      setError('Failed to update order status')
      setTimeout(() => setError(null), 3000)
    } finally {
      setStatusLoading(false)
    }
  }
  
  const updatePaymentStatus = async (newStatus: string) => {
    if (!order) return
    
    try {
      setStatusLoading(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setOrder({
        ...order,
        paymentStatus: newStatus as any,
        updatedAt: new Date().toISOString()
      })
      
      setSuccessMessage(`Payment status updated to ${newStatus}`)
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err) {
      console.error('Error updating payment status:', err)
      setError('Failed to update payment status')
      setTimeout(() => setError(null), 3000)
    } finally {
      setStatusLoading(false)
    }
  }
  
  const saveDetails = async () => {
    if (!order) return
    
    try {
      setStatusLoading(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setOrder({
        ...order,
        trackingNumber,
        notes,
        updatedAt: new Date().toISOString()
      })
      
      setSuccessMessage('Order details updated successfully')
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err) {
      console.error('Error updating order details:', err)
      setError('Failed to update order details')
      setTimeout(() => setError(null), 3000)
    } finally {
      setStatusLoading(false)
    }
  }
  
  // Helper function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return new Date(dateString).toLocaleString(undefined, options)
  }
  
  // Render status badge with appropriate color
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-4 h-4 mr-2" />
            Pending
          </span>
        )
      case 'processing':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <RefreshCw className="w-4 h-4 mr-2" />
            Processing
          </span>
        )
      case 'completed':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-4 h-4 mr-2" />
            Completed
          </span>
        )
      case 'cancelled':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <XCircle className="w-4 h-4 mr-2" />
            Cancelled
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        )
    }
  }
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
      </div>
    )
  }
  
  if (error && !order) {
    return (
      <div className="bg-red-50 text-red-800 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Error</h2>
        <p>{error}</p>
        <button
          onClick={() => router.push('/admin/orders')}
          className="mt-4 px-4 py-2 bg-white border border-red-300 rounded-lg hover:bg-red-50 text-red-700"
        >
          Back to Orders
        </button>
      </div>
    )
  }
  
  if (!order) {
    return (
      <div className="bg-yellow-50 text-yellow-800 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Order Not Found</h2>
        <p>The requested order could not be found.</p>
        <button
          onClick={() => router.push('/admin/orders')}
          className="mt-4 px-4 py-2 bg-white border border-yellow-300 rounded-lg hover:bg-yellow-50 text-yellow-700"
        >
          Back to Orders
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-2">
        <button 
          onClick={() => router.push('/admin/orders')}
          className="p-2 hover:bg-accentHighlight rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-mainText">Order Details</h1>
      </div>
      
      {/* Order Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <span className="text-secondaryText">Order Number</span>
            <h2 className="text-xl font-bold text-mainText">{order.orderNumber}</h2>
            <div className="text-sm text-secondaryText">
              Placed on {formatDate(order.createdAt)}
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col md:items-end">
            <div className="flex space-x-2 mb-2">
              {renderStatusBadge(order.status)}
              
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                order.paymentStatus === 'paid' 
                  ? 'bg-green-100 text-green-800' 
                  : order.paymentStatus === 'refunded'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
              </span>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => window.print()}
                className="px-3 py-1 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1 text-sm"
              >
                <Printer size={16} />
                Print
              </button>
              
              <button
                onClick={() => {
                  // In a real app, this would generate a PDF invoice
                  alert('Invoice download functionality would be implemented here')
                }}
                className="px-3 py-1 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1 text-sm"
              >
                <Download size={16} />
                Invoice
              </button>
              
              <button
                onClick={() => {
                  // In a real app, this would open an email composer
                  window.location.href = `mailto:${order.customer.email}?subject=Your Order ${order.orderNumber}`
                }}
                className="px-3 py-1 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1 text-sm"
              >
                <Mail size={16} />
                Email
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Success/Error Messages */}
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 text-green-800 p-4 rounded-lg"
        >
          {successMessage}
        </motion.div>
      )}
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 text-red-800 p-4 rounded-lg"
        >
          {error}
        </motion.div>
      )}
      
      {/* Order Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer & Shipping Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-mainText mb-4 flex items-center">
              Customer Information
            </h3>
            
            <div className="space-y-3">
              <div>
                <div className="font-medium text-mainText">{order.customer.name}</div>
                <div className="text-secondaryText">{order.customer.email}</div>
                {order.customer.phone && (
                  <div className="text-secondaryText">{order.customer.phone}</div>
                )}
              </div>
              
              {order.customer.address && (
                <div>
                  <h4 className="text-sm font-medium text-mainText mb-1">Shipping Address</h4>
                  <div className="text-sm text-secondaryText">
                    <div>{order.customer.address.street}</div>
                    <div>
                      {order.customer.address.city}, {order.customer.address.state} {order.customer.address.zipCode}
                    </div>
                    <div>{order.customer.address.country}</div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <Link
                href={`/admin/users/${order.customer.id}`}
                className="text-primaryAction hover:underline text-sm"
              >
                View Customer Profile
              </Link>
            </div>
          </div>
          
          {/* Order Management */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-mainText mb-4">Order Management</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondaryText mb-2">
                  Order Status
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateOrderStatus('pending')}
                    disabled={order.status === 'pending' || statusLoading}
                    className={`px-3 py-1 rounded text-sm ${
                      order.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-white border hover:bg-yellow-50 text-secondaryText'
                    } disabled:opacity-50`}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => updateOrderStatus('processing')}
                    disabled={order.status === 'processing' || statusLoading}
                    className={`px-3 py-1 rounded text-sm ${
                      order.status === 'processing'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-white border hover:bg-blue-50 text-secondaryText'
                    } disabled:opacity-50`}
                  >
                    Processing
                  </button>
                  <button
                    onClick={() => updateOrderStatus('completed')}
                    disabled={order.status === 'completed' || statusLoading}
                    className={`px-3 py-1 rounded text-sm ${
                      order.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-white border hover:bg-green-50 text-secondaryText'
                    } disabled:opacity-50`}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => updateOrderStatus('cancelled')}
                    disabled={order.status === 'cancelled' || statusLoading}
                    className={`px-3 py-1 rounded text-sm ${
                      order.status === 'cancelled'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-white border hover:bg-red-50 text-secondaryText'
                    } disabled:opacity-50`}
                  >
                    Cancelled
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondaryText mb-2">
                  Payment Status
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updatePaymentStatus('unpaid')}
                    disabled={order.paymentStatus === 'unpaid' || statusLoading}
                    className={`px-3 py-1 rounded text-sm ${
                      order.paymentStatus === 'unpaid'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-white border hover:bg-yellow-50 text-secondaryText'
                    } disabled:opacity-50`}
                  >
                    Unpaid
                  </button>
                  <button
                    onClick={() => updatePaymentStatus('paid')}
                    disabled={order.paymentStatus === 'paid' || statusLoading}
                    className={`px-3 py-1 rounded text-sm ${
                      order.paymentStatus === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-white border hover:bg-green-50 text-secondaryText'
                    } disabled:opacity-50`}
                  >
                    Paid
                  </button>
                  <button
                    onClick={() => updatePaymentStatus('refunded')}
                    disabled={order.paymentStatus === 'refunded' || statusLoading}
                    className={`px-3 py-1 rounded text-sm ${
                      order.paymentStatus === 'refunded'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-white border hover:bg-blue-50 text-secondaryText'
                    } disabled:opacity-50`}
                  >
                    Refunded
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondaryText mb-2">
                  Tracking Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number"
                    className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondaryText mb-2">
                  Order Notes
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Add notes about this order"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
                />
              </div>
              
              <button
                onClick={saveDetails}
                disabled={statusLoading}
                className="w-full px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition disabled:opacity-50"
              >
                {statusLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Order Items & Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="font-semibold text-mainText">Order Items</h3>
            </div>
            
            <table className="w-full">
              <thead className="bg-accentHighlight/20">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-secondaryText uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {order.items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-12 w-9 bg-accentHighlight/30 rounded"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-mainText">{item.title}</div>
                          <Link
                            href={`/admin/books/edit/${item.bookId}`}
                            className="text-xs text-primaryAction hover:underline"
                          >
                            View Book
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-secondaryText">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-secondaryText">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-secondaryText">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-mainText mb-4">Order Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-secondaryText">Subtotal</span>
                <span className="text-mainText">${order.total.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-secondaryText">Shipping ({order.shippingMethod})</span>
                <span className="text-mainText">$0.00</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-secondaryText">Tax</span>
                <span className="text-mainText">$0.00</span>
              </div>
              
              <div className="pt-3 border-t flex justify-between">
                <span className="font-semibold text-mainText">Total</span>
                <span className="font-semibold text-primaryAction">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Order Timeline */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-mainText mb-4">Order Timeline</h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-green-500 pb-6">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500"></div>
                <div className="text-sm font-medium text-mainText">Order Placed</div>
                <div className="text-xs text-secondaryText">{formatDate(order.createdAt)}</div>
              </div>
              
              {order.status === 'processing' || order.status === 'completed' ? (
                <div className="relative pl-6 border-l-2 border-blue-500 pb-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="text-sm font-medium text-mainText">Processing</div>
                  <div className="text-xs text-secondaryText">
                    {order.updatedAt ? formatDate(order.updatedAt) : 'Date not available'}
                  </div>
                </div>
              ) : null}
              
              {order.status === 'completed' && (
                <div className="relative pl-6 border-l-2 border-green-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500"></div>
                  <div className="text-sm font-medium text-mainText">Completed</div>
                  <div className="text-xs text-secondaryText">
                    {order.updatedAt ? formatDate(order.updatedAt) : 'Date not available'}
                  </div>
                </div>
              )}
              
              {order.status === 'cancelled' && (
                <div className="relative pl-6 border-l-2 border-red-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-red-500"></div>
                  <div className="text-sm font-medium text-mainText">Cancelled</div>
                  <div className="text-xs text-secondaryText">
                    {order.updatedAt ? formatDate(order.updatedAt) : 'Date not available'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}