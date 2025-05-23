// src/app/admin/users/[id]/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  ShoppingBag,
  CreditCard,
  Clock,
  Edit,
  Save,
  Trash2,
  UserCheck,
  UserX,
  MessageSquare
} from 'lucide-react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase-admin-config'

interface Order {
  id: string
  orderNumber: string
  total: number
  status: string
  date: string
}

interface User {
  id: string
  email: string
  displayName: string
  photoURL?: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  isAdmin: boolean
  lastLogin?: string
  orderCount: number
  totalSpent: number
  createdAt: string
  orders?: Order[]
}

export default function UserDetails() {
  const router = useRouter()
  const params = useParams()
  const userId = params?.id as string
  
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })
  
  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        
        // In a real app, this would fetch from Firestore
        // For this example, we'll use mock data
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock user data
        const mockUser: User = {
          id: userId,
          email: 'john@example.com',
          displayName: 'John Doe',
          photoURL: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
          phone: '+1234567890',
          address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'USA'
          },
          isAdmin: true,
          lastLogin: '2025-05-20T14:30:00Z',
          orderCount: 5,
          totalSpent: 129.95,
          createdAt: '2025-01-15T10:30:00Z',
          orders: [
            {
              id: 'order1',
              orderNumber: 'PB-2025-001',
              total: 40.97,
              status: 'completed',
              date: '2025-05-15'
            },
            {
              id: 'order2',
              orderNumber: 'PB-2025-002',
              total: 24.99,
              status: 'processing',
              date: '2025-05-10'
            },
            {
              id: 'order3',
              orderNumber: 'PB-2025-003',
              total: 34.99,
              status: 'completed',
              date: '2025-04-28'
            }
          ]
        }
        
        setUser(mockUser)
        setFormData({
          displayName: mockUser.displayName,
          email: mockUser.email,
          phone: mockUser.phone || '',
          street: mockUser.address?.street || '',
          city: mockUser.address?.city || '',
          state: mockUser.address?.state || '',
          zipCode: mockUser.address?.zipCode || '',
          country: mockUser.address?.country || ''
        })
      } catch (err) {
        console.error('Error fetching user:', err)
        setError('Failed to load user data')
      } finally {
        setLoading(false)
      }
    }
    
    fetchUser()
  }, [userId])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleToggleAdminRole = async () => {
    if (!user) return
    
    try {
      setSaving(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setUser({
        ...user,
        isAdmin: !user.isAdmin
      })
      
      setSuccessMessage(`User is now ${!user.isAdmin ? 'an admin' : 'a customer'}`)
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err) {
      console.error('Error updating user role:', err)
      setError('Failed to update user role')
      setTimeout(() => setError(null), 3000)
    } finally {
      setSaving(false)
    }
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) return
    
    try {
      setSaving(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const updatedUser = {
        ...user,
        displayName: formData.displayName,
        email: formData.email,
        phone: formData.phone,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country
        }
      }
      
      setUser(updatedUser)
      setSuccessMessage('User information updated successfully')
      setTimeout(() => setSuccessMessage(null), 3000)
      setIsEditing(false)
    } catch (err) {
      console.error('Error updating user:', err)
      setError('Failed to update user information')
      setTimeout(() => setError(null), 3000)
    } finally {
      setSaving(false)
    }
  }
  
  const handleDeleteUser = async () => {
    if (!user) return
    
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return
    }
    
    try {
      setSaving(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect after successful deletion
      router.push('/admin/users')
    } catch (err) {
      console.error('Error deleting user:', err)
      setError('Failed to delete user')
      setTimeout(() => setError(null), 3000)
    } finally {
      setSaving(false)
    }
  }
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
      </div>
    )
  }
  
  if (error && !user) {
    return (
      <div className="bg-red-50 text-red-800 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Error</h2>
        <p>{error}</p>
        <button
          onClick={() => router.push('/admin/users')}
          className="mt-4 px-4 py-2 bg-white border border-red-300 rounded-lg hover:bg-red-50 text-red-700"
        >
          Back to Users
        </button>
      </div>
    )
  }
  
  if (!user) {
    return (
      <div className="bg-yellow-50 text-yellow-800 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">User Not Found</h2>
        <p>The requested user could not be found.</p>
        <button
          onClick={() => router.push('/admin/users')}
          className="mt-4 px-4 py-2 bg-white border border-yellow-300 rounded-lg hover:bg-yellow-50 text-yellow-700"
        >
          Back to Users
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-2">
        <button 
          onClick={() => router.push('/admin/users')}
          className="p-2 hover:bg-accentHighlight rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-mainText">User Details</h1>
      </div>
      
      {/* User Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center">
            <div className="h-16 w-16 flex-shrink-0 mr-4">
              {user.photoURL ? (
                <img className="h-16 w-16 rounded-full" src={user.photoURL} alt={user.displayName} />
              ) : (
                <div className="h-16 w-16 rounded-full bg-accentHighlight flex items-center justify-center">
                  <span className="text-mainText text-xl font-medium">
                    {user.displayName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold text-mainText">{user.displayName}</h2>
              <div className="text-secondaryText">{user.email}</div>
              <div className="mt-1 flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {user.isAdmin ? 'Admin' : 'Customer'}
                </span>
                {user.lastLogin && (
                  <span className="ml-2 text-xs text-secondaryText flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Last active: {formatDate(user.lastLogin)}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/20 flex items-center gap-1"
            >
              <Edit size={16} />
              {isEditing ? 'Cancel Editing' : 'Edit User'}
            </button>
            
            <button
              onClick={handleToggleAdminRole}
              disabled={saving}
              className={`px-3 py-2 rounded-lg flex items-center gap-1 ${
                user.isAdmin 
                  ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              } disabled:opacity-50`}
            >
              {user.isAdmin ? <UserX size={16} /> : <UserCheck size={16} />}
              {user.isAdmin ? 'Remove Admin' : 'Make Admin'}
            </button>
            
            <button
              onClick={handleDeleteUser}
              disabled={saving}
              className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-1 disabled:opacity-50"
            >
              <Trash2 size={16} />
              Delete
            </button>
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
      
      {/* User Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile and Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-1 space-y-6"
        >
          {isEditing ? (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-mainText mb-4">Edit User Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={saving}
                    className="w-full px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Save size={16} />
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-mainText mb-4">Contact Information</h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <Mail className="h-5 w-5 text-secondaryText mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-mainText">Email</div>
                      <div className="text-sm text-secondaryText">{user.email}</div>
                    </div>
                  </li>
                  
                  {user.phone && (
                    <li className="flex">
                      <Phone className="h-5 w-5 text-secondaryText mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-mainText">Phone</div>
                        <div className="text-sm text-secondaryText">{user.phone}</div>
                      </div>
                    </li>
                  )}
                  
                  {user.address && (
                    <li className="flex">
                      <MapPin className="h-5 w-5 text-secondaryText mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-mainText">Address</div>
                        <div className="text-sm text-secondaryText">
                          <div>{user.address.street}</div>
                          <div>{user.address.city}, {user.address.state} {user.address.zipCode}</div>
                          <div>{user.address.country}</div>
                        </div>
                      </div>
                    </li>
                  )}
                  
                  <li className="flex">
                    <Calendar className="h-5 w-5 text-secondaryText mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-mainText">Joined</div>
                      <div className="text-sm text-secondaryText">{formatDate(user.createdAt)}</div>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t flex gap-3">
                  <a
                    href={`mailto:${user.email}`}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition text-sm flex items-center gap-1"
                  >
                    <Mail size={14} />
                    Send Email
                  </a>
                  <button
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded hover:bg-purple-200 transition text-sm flex items-center gap-1"
                  >
                    <MessageSquare size={14} />
                    Message
                  </button>
                </div>
              </div>
              
              {/* Account Summary */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-mainText mb-4">Account Summary</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accentHighlight/20 p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <ShoppingBag className="h-6 w-6 text-secondaryText" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-mainText">{user.orderCount}</div>
                      <div className="text-xs text-secondaryText">Total Orders</div>
                    </div>
                  </div>
                  
                  <div className="bg-accentHighlight/20 p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <CreditCard className="h-6 w-6 text-secondaryText" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-mainText">${user.totalSpent.toFixed(2)}</div>
                      <div className="text-xs text-secondaryText">Total Spent</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
        
        {/* Order History */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="font-semibold text-mainText">Order History</h3>
              
              {user.orders && user.orders.length > 0 && (
                <Link
                  href={`/admin/orders?customer=${user.id}`}
                  className="text-sm text-primaryAction hover:underline"
                >
                  View All Orders
                </Link>
              )}
            </div>
            
            {!user.orders || user.orders.length === 0 ? (
              <div className="p-12 text-center">
                <ShoppingBag className="h-12 w-12 text-secondaryText/30 mx-auto mb-4" />
                <p className="text-secondaryText">No orders found for this user.</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-accentHighlight/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Order #</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {user.orders.map((order) => (
                    <tr key={order.id} className="hover:bg-accentHighlight/10">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-mainText">{order.orderNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-secondaryText">{order.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
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
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}