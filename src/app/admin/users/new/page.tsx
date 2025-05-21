// src/app/admin/users/new/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Save, UserPlus } from 'lucide-react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase-admin'

export default function NewUser() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    isAdmin: false
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }
    
    try {
      setLoading(true)
      setError(null)
      
      // In a real app, this would create a new user
      // For this example, we'll simulate it
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate success response
      router.push('/admin/users')
    } catch (err) {
      console.error('Error creating user:', err)
      // @ts-ignore
      setError(err?.message || 'Failed to create user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button 
          onClick={() => router.push('/admin/users')}
          className="p-2 hover:bg-accentHighlight rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-mainText">Add New User</h1>
      </div>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 text-red-800 p-4 rounded-lg"
        >
          {error}
        </motion.div>
      )}
      
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-mainText">User Information</h2>
          <p className="text-sm text-secondaryText">Enter the details for the new user.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-1">
                Display Name*
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="Enter full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-1">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-1">
                Password*
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="••••••••"
                minLength={6}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-1">
                Confirm Password*
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-1">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="+1234567890"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isAdmin"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleChange}
                className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
              />
              <label htmlFor="isAdmin" className="ml-2 block text-sm text-secondaryText">
                Grant admin privileges
              </label>
            </div>
          </div>
          
          <div className="pt-4 border-t text-sm text-secondaryText">
            <p>A welcome email will be sent to the user with their login credentials.</p>
            <p>New accounts will be required to verify their email address before logging in.</p>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-accentHighlight/10 flex justify-between">
          <button
            type="button"
            onClick={() => router.push('/admin/users')}
            className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-white transition"
          >
            Cancel
          </button>
          
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2 disabled:opacity-50"
          >
            <UserPlus size={18} />
            {loading ? 'Creating...' : 'Create User'}
          </button>
        </div>
      </motion.form>
    </div>
  )
}