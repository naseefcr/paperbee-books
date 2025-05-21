/* eslint-disable @typescript-eslint/no-explicit-any */
// === CLIENT-SIDE AUTHENTICATION HOOK ===
// src/hooks/useAdmin.ts
'use client'
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export function useAdmin() {
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
          const idTokenResult = await user.getIdTokenResult(true)
          const hasAdminRole = !!idTokenResult.claims.admin
          
          setIsAdmin(hasAdminRole)
          
          if (!hasAdminRole) {
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