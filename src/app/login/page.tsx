// src/app/login/page.tsx
'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { signIn, resetPassword } from '@/lib/auth'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from')
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resetSent, setResetSent] = useState(false)
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setLoading(true)
      setError(null)
      
      const result = await signIn(email, password)
      
      if (result.success) {
        if (result.user?.isAdmin && from === 'admin') {
          router.push('/admin')
        } else {
          router.push('/')
        }
      } else {
        setError('Invalid email or password. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email address.')
      return
    }
    
    try {
      setLoading(true)
      setError(null)
      
      const result = await resetPassword(email)
      
      if (result.success) {
        setResetSent(true)
      } else {
        setError('Error sending reset email. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-pageBackground flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-mainText mb-2">Welcome Back</h1>
          <p className="text-secondaryText">Sign in to your account</p>
          {from === 'admin' && (
            <div className="mt-2 text-sm text-primaryAction">
              Admin access required
            </div>
          )}
        </div>
        
        {resetSent ? (
          <div className="p-4 mb-6 bg-green-50 text-green-800 rounded-lg">
            Password reset link has been sent to your email address.
          </div>
        ) : error ? (
          <div className="p-4 mb-6 bg-red-50 text-red-800 rounded-lg">
            {error}
          </div>
        ) : null}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondaryText mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondaryText" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-secondaryText">
                Password
              </label>
              <button
                type="button"
                onClick={handleResetPassword}
                className="text-xs text-primaryAction hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondaryText" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-secondaryText" />
                ) : (
                  <Eye className="h-5 w-5 text-secondaryText" />
                )}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primaryAction text-white py-3 rounded-lg hover:bg-rustOrange transition disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-secondaryText">
          Don't have an account?{' '}
          <Link href="/register" className="text-primaryAction hover:underline">
            Contact administrator
          </Link>
        </div>
      </motion.div>
    </div>
  )
}