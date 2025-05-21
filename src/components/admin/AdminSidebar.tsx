// src/components/admin/AdminSidebar.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  BookOpen, 
  ShoppingCart, 
  Users, 
  Settings,
  BarChart3,
  LogOut
} from 'lucide-react'
import { signOut } from '@/lib/auth'

interface NavItem {
  icon: React.ElementType
  label: string
  href: string
}

const mainNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: BookOpen, label: 'Books', href: '/admin/books' },
  { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  
  const handleSignOut = async () => {
    await signOut()
    window.location.href = '/login'
  }
  
  return (
    <aside 
      className={`bg-headerNavigation text-white transition-all duration-300 flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo and brand */}
      <div className={`py-6 px-4 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && (
          <Link href="/admin" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-secondaryButtonIcon rounded-full flex items-center justify-center">
              <span className="text-headerNavigation font-bold text-sm">PB</span>
            </div>
            <span className="font-bold">PAPERBEE ADMIN</span>
          </Link>
        )}
        {collapsed && (
          <div className="h-8 w-8 bg-secondaryButtonIcon rounded-full flex items-center justify-center">
            <span className="text-headerNavigation font-bold text-sm">PB</span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className={`text-white/70 hover:text-white p-1 rounded-full ${collapsed ? 'absolute right-0 -mr-3 bg-headerNavigation' : ''}`}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-3">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || 
                           (item.href !== '/admin' && pathname?.startsWith(item.href))
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-accentHighlight text-headerNavigation' 
                      : 'text-accentHighlight hover:bg-headerNavigation/40'
                  }`}
                >
                  <item.icon size={collapsed ? 22 : 18} className={collapsed ? 'mx-auto' : 'mr-3'} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      
      {/* Sign out button */}
      <div className="p-4">
        <button
          onClick={handleSignOut}
          className="flex items-center py-3 px-4 w-full rounded-lg text-accentHighlight hover:bg-headerNavigation/40 transition-colors"
        >
          <LogOut size={collapsed ? 22 : 18} className={collapsed ? 'mx-auto' : 'mr-3'} />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  )
}

