// src/hooks/useAdmin.ts - Updated to use the new API route
'use client'
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export function useAdmin() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    const auth = getAuth()
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      
      if (user) {
        try {
          // Get the ID token with force refresh to ensure we have the latest claims
          const idToken = await user.getIdToken(true)
          
          // Call our API endpoint that uses Firebase Admin
          const response = await fetch('/api/admin/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: idToken }),
          })
          
          if (!response.ok) {
            throw new Error('Failed to verify admin status')
          }
          
          const { isAdmin } = await response.json()
          
          setIsAdmin(isAdmin)
          
          if (!isAdmin) {
            // Not an admin, redirect to unauthorized
            router.push('/unauthorized')
          }
        } catch (error) {
          console.error('Error checking admin status:', error)
          setIsAdmin(false)
          router.push('/login?from=admin')
        }
      } else {
        // Not logged in, redirect to login
        router.push('/login?from=admin')
      }
      
      setLoading(false)
    })
    
    return () => unsubscribe()
  }, [router])
  
  const handleSignOut = async () => {
    const auth = getAuth()
    try {
      await signOut(auth)
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }
  
  return { user, loading, isAdmin, signOut: handleSignOut }
}