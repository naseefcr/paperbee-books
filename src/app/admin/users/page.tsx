// src/app/admin/users/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  ArrowUpDown,
  UserPlus,
  Eye,
  UserCheck,
  UserX,
  Mail,
  Download,
  Clock,
  ShoppingBag
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
  Timestamp,
  deleteDoc,
  doc
} from 'firebase/firestore'
import { db } from '@/lib/firebase-admin'
import { setAdminRole } from '@/lib/firebase-admin'

interface User {
  id: string
  email: string
  displayName: string
  photoURL?: string
  phone?: string
  isAdmin: boolean
  lastLogin?: string
  orderCount: number
  totalSpent: number
  createdAt: string
}

export default function AdminUsers() {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [showRoleModal, setShowRoleModal] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)
  
  // Fetch users from Firestore
  const fetchUsers = async (isInitialLoad = true) => {
    try {
      setLoading(true)
      
      // In a real app, this would be replaced with actual Firestore queries
      // For now, let's simulate it with static data
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock data for demonstration
      const mockUsers: User[] = [
        {
          id: 'user1',
          email: 'john@example.com',
          displayName: 'John Doe',
          photoURL: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
          phone: '+1234567890',
          isAdmin: true,
          lastLogin: '2025-05-20T14:30:00Z',
          orderCount: 5,
          totalSpent: 129.95,
          createdAt: '2025-01-15T10:30:00Z'
        },
        {
          id: 'user2',
          email: 'jane@example.com',
          displayName: 'Jane Smith',
          photoURL: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random',
          isAdmin: false,
          lastLogin: '2025-05-19T09:15:00Z',
          orderCount: 3,
          totalSpent: 78.99,
          createdAt: '2025-02-10T15:45:00Z'
        },
        {
          id: 'user3',
          email: 'michael@example.com',
          displayName: 'Michael Brown',
          isAdmin: false,
          orderCount: 1,
          totalSpent: 24.99,
          createdAt: '2025-03-22T12:00:00Z'
        },
        {
          id: 'user4',
          email: 'sarah@example.com',
          displayName: 'Sarah Johnson',
          photoURL: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=random',
          phone: '+1987654321',
          isAdmin: false,
          lastLogin: '2025-05-18T16:20:00Z',
          orderCount: 7,
          totalSpent: 189.45,
          createdAt: '2025-01-05T08:00:00Z'
        },
        {
          id: 'user5',
          email: 'robert@example.com',
          displayName: 'Robert Wilson',
          isAdmin: false,
          orderCount: 0,
          totalSpent: 0,
          createdAt: '2025-05-01T14:20:00Z'
        }
      ]
      
      // Apply filters
      let filteredUsers = mockUsers
      
      if (roleFilter !== 'all') {
        filteredUsers = filteredUsers.filter(user => {
          if (roleFilter === 'admin') return user.isAdmin
          return !user.isAdmin
        })
      }
      
      // Apply sorting
      switch (sortBy) {
        case 'newest':
          filteredUsers.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          break
        case 'oldest':
          filteredUsers.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
          break
        case 'orders-high':
          filteredUsers.sort((a, b) => b.orderCount - a.orderCount)
          break
        case 'spent-high':
          filteredUsers.sort((a, b) => b.totalSpent - a.totalSpent)
          break
        case 'name-asc':
          filteredUsers.sort((a, b) => a.displayName.localeCompare(b.displayName))
          break
      }
      
      setUsers(filteredUsers)
      setHasMore(false) // No pagination in mock data
      setError(null)
    } catch (err) {
      console.error('Error fetching users:', err)
      setError('Failed to load users. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [roleFilter, sortBy])
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Filter users client-side based on search query
    // In a real app, this would be a Firestore query
  }
  
  const handleExport = () => {
    // Create CSV data
    const headers = ['ID', 'Name', 'Email', 'Role', 'Orders', 'Total Spent', 'Created Date']
    
    const csvContent = [
      headers.join(','),
      ...users.map(user => {
        return [
          user.id,
          `"${user.displayName}"`,
          `"${user.email}"`,
          user.isAdmin ? 'Admin' : 'Customer',
          user.orderCount,
          user.totalSpent.toFixed(2),
          new Date(user.createdAt).toLocaleDateString()
        ].join(',')
      })
    ].join('\n')
    
    // Create a blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `paperbee-users-export-${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }
  
  const handleToggleAdminRole = async () => {
    if (!selectedUser) return
    
    try {
      setActionLoading(true)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Update user in state
      setUsers(users.map(user => {
        if (user.id === selectedUser.id) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      }))
      
      // Update selected user
      setSelectedUser({
        ...selectedUser,
        isAdmin: !selectedUser.isAdmin
      })
      
      // Close modal
      setShowRoleModal(false)
    } catch (err) {
      console.error('Error updating user role:', err)
      setError('Failed to update user role. Please try again.')
    } finally {
      setActionLoading(false)
    }
  }
  
  const handleDeleteUser = async (userId: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Remove user from state
      setUsers(users.filter(user => user.id !== userId))
      
      // Close confirm dialog
      setShowDeleteConfirm(null)
    } catch (err) {
      console.error('Error deleting user:', err)
      setError('Failed to delete user. Please try again.')
    }
  }
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  // Filter users by search query
  const filteredUsers = users.filter(user => 
    !searchQuery || 
    user.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
      >
        <h1 className="text-2xl font-bold text-mainText">User Management</h1>
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/30 flex items-center gap-2 transition"
          >
            <Download size={16} />
            Export
          </button>
          <Link
            href="/admin/users/new"
            className="px-4 py-2 bg-primaryAction text-white rounded-lg flex items-center gap-2 hover:bg-rustOrange transition"
          >
            <UserPlus size={16} />
            Add User
          </Link>
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
                placeholder="Search by name or email..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              />
            </form>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-secondaryText" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                <option value="all">All Users</option>
                <option value="admin">Admins Only</option>
                <option value="customer">Customers Only</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowUpDown size={16} className="text-secondaryText" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="orders-high">Orders: High to Low</option>
                <option value="spent-high">Spent: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Users Table */}
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
        
        {loading && users.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-secondaryText">Loading users...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-secondaryText mb-4">No users found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setRoleFilter('all');
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondaryText uppercase tracking-wider">Joined</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-secondaryText uppercase tracking-wider">Orders</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Total Spent</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-secondaryText uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-accentHighlight/10">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            {user.photoURL ? (
                              <img className="h-10 w-10 rounded-full" src={user.photoURL} alt={user.displayName} />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-accentHighlight flex items-center justify-center">
                                <span className="text-mainText text-sm font-medium">
                                  {user.displayName.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-mainText">{user.displayName}</div>
                            <div className="text-sm text-secondaryText">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {user.isAdmin ? 'Admin' : 'Customer'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-secondaryText">
                          {formatDate(user.createdAt)}
                        </div>
                        {user.lastLogin && (
                          <div className="flex items-center text-xs text-secondaryText/70">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>Last active: {formatDate(user.lastLogin)}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <div className="flex items-center justify-center">
                          <ShoppingBag className="h-4 w-4 mr-1 text-secondaryText" />
                          <span className="text-secondaryText">{user.orderCount}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-secondaryText">
                        ${user.totalSpent.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex justify-end space-x-2">
                          <Link
                            href={`/admin/users/${user.id}`}
                            className="p-1 text-indigo-600 hover:text-indigo-900"
                            title="View User"
                          >
                            <Eye size={18} />
                          </Link>
                          <button
                            onClick={() => {
                              setSelectedUser(user)
                              setShowRoleModal(true)
                            }}
                            className={`p-1 ${user.isAdmin ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}
                            title={user.isAdmin ? "Remove Admin Role" : "Make Admin"}
                          >
                            {user.isAdmin ? <UserX size={18} /> : <UserCheck size={18} />}
                          </button>
                          <a
                            href={`mailto:${user.email}`}
                            className="p-1 text-blue-600 hover:text-blue-900"
                            title="Email User"
                          >
                            <Mail size={18} />
                          </a>
                        </div>
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
                  onClick={() => fetchUsers(false)}
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
      
      {/* Role Change Modal */}
      {showRoleModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
          >
            <h3 className="text-lg font-semibold text-mainText mb-4">
              {selectedUser.isAdmin ? "Remove Admin Role" : "Grant Admin Role"}
            </h3>
            <p className="text-secondaryText mb-6">
              {selectedUser.isAdmin 
                ? `Are you sure you want to remove admin privileges from ${selectedUser.displayName}?` 
                : `Are you sure you want to grant admin privileges to ${selectedUser.displayName}?`
              }
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowRoleModal(false)}
                className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/30 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleToggleAdminRole}
                disabled={actionLoading}
                className={`px-4 py-2 rounded-lg text-white transition ${
                  selectedUser.isAdmin 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {actionLoading ? 'Processing...' : selectedUser.isAdmin ? 'Remove Admin' : 'Make Admin'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg"
          >
            <h3 className="text-lg font-semibold text-mainText mb-4">Confirm Deletion</h3>
            <p className="text-secondaryText mb-6">
              Are you sure you want to delete this user? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-accentHighlight/30 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => showDeleteConfirm && handleDeleteUser(showDeleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}