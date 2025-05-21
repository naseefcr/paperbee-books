// === USAGE EXAMPLE IN ADMIN LAYOUT ===
// src/app/admin/layout.tsx - Simplified Version
'use client'
import { useAdmin } from '@/hooks/useAdmin'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { loading, isAdmin } = useAdmin()
  
  if (loading) {
    return (
      <div className="min-h-screen bg-pageBackground flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primaryAction border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-secondaryText">Loading admin panel...</p>
        </div>
      </div>
    )
  }
  
  if (!isAdmin) {
    // This should never be shown because useAdmin redirects non-admins
    return null;
  }
  
  return (
    <div className="flex h-screen bg-pageBackground">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}