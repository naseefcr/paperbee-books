// src/app/unauthorized/page.tsx
'use client'
import Link from 'next/link'
import { Shield, ChevronLeft } from 'lucide-react'

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-pageBackground flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-red-100 text-red-600 mb-6">
          <Shield size={40} />
        </div>
        <h1 className="text-3xl font-bold text-mainText mb-4">Access Denied</h1>
        <p className="text-secondaryText mb-8">
          You don't have permission to access the admin panel. Please contact an administrator if you believe this is a mistake.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center text-primaryAction hover:underline"
        >
          <ChevronLeft size={18} className="mr-1" />
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}