// src/components/admin/AdminHeader.tsx
'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getAuth } from 'firebase/auth'
import { Bell, Search, User } from 'lucide-react'

export default function AdminHeader() {
  const pathname = usePathname()
  const [userData, setUserData] = useState<{ displayName?: string | null, email?: string | null }>({})
  const [showUserMenu, setShowUserMenu] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    if (auth.currentUser) {
      setUserData({
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email
      })
    }
  }, [])

  // Function to get page title from pathname
  const getPageTitle = () => {
    if (pathname === '/admin') return 'Dashboard'
    
    const path = pathname?.split('/').filter(Boolean)
    if (path && path.length > 1) {
      // Convert to title case (e.g., 'books' -> 'Books')
      return path[1].charAt(0).toUpperCase() + path[1].slice(1)
    }
    
    return 'Admin Panel'
  }

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-10">
      <div className="flex justify-between items-center h-16 px-6">
        <h1 className="text-xl font-semibold text-mainText">{getPageTitle()}</h1>
        
        <div className="flex items-center space-x-4">
          {/* Search bar (hidden on mobile) */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondaryText" />
            <input
              type="text"
              placeholder="Search..."
              className="w-56 pl-9 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
            />
          </div>
          
          {/* Notifications */}
          <button className="p-2 rounded-full hover:bg-accentHighlight/30 relative text-secondaryText">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primaryAction rounded-full"></span>
          </button>
          
          {/* User menu */}
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-accentHighlight/30"
            >
              <div className="w-8 h-8 bg-accentHighlight rounded-full flex items-center justify-center text-mainText">
                <User size={18} />
              </div>
              <span className="text-mainText text-sm hidden md:block">{userData.displayName || userData.email?.split('@')[0] || 'Admin'}</span>
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium text-mainText">{userData.displayName || 'Admin User'}</p>
                  <p className="text-xs text-secondaryText truncate">{userData.email}</p>
                </div>
                <button className="block w-full text-left px-4 py-2 text-sm text-secondaryText hover:bg-accentHighlight/30">
                  Your Profile
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-secondaryText hover:bg-accentHighlight/30">
                  Settings
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}