// components/Header.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, Globe } from 'lucide-react'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-paperbee-yellow rounded-full flex items-center justify-center">
              <span className="text-paperbee-blue font-bold text-xl">PB</span>
            </div>
            <span className="text-xl font-bold text-paperbee-blue hidden sm:block">
              PAPERBEE BOOKS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-paperbee-blue transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-paperbee-blue transition">
              About
            </Link>
            <Link href="/books" className="text-gray-700 hover:text-paperbee-blue transition">
              Books
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-paperbee-blue transition">
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button className="flex items-center space-x-1 text-gray-700 hover:text-paperbee-blue">
              <Globe className="h-5 w-5" />
              <span className="hidden sm:inline">EN</span>
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-paperbee-blue" />
              <span className="absolute top-0 right-0 bg-paperbee-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 text-gray-700">Home</Link>
            <Link href="/about" className="block py-2 text-gray-700">About</Link>
            <Link href="/books" className="block py-2 text-gray-700">Books</Link>
            <Link href="/contact" className="block py-2 text-gray-700">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header