/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/cart/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface CartItem {
  id: number
  title: string
  author: string
  coverImage: string
  price: { usd: number; inr: number }
  quantity: number
  language: string
}

// Sample cart data - in real app, this would come from state management
const initialCartItems: CartItem[] = [
  {
    id: 1,
    title: "The Magical Forest",
    author: "Sarah Johnson",
    coverImage: "/api/placeholder/300/400",
    price: { usd: 12.99, inr: 999 },
    quantity: 1,
    language: "English",
  },
  {
    id: 2,
    title: "حكايات العجائب",
    author: "أحمد محمد",
    coverImage: "/api/placeholder/300/400",
    price: { usd: 14.99, inr: 1199 },
    quantity: 2,
    language: "Arabic",
  },
]

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd')

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price[currency] * item.quantity), 0)
  const shipping = currency === 'usd' ? 5.99 : 150
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any books yet.</p>
          <Link 
            href="/books"
            className="inline-flex items-center bg-paperbee-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrency('usd')}
                className={`px-3 py-1 rounded ${currency === 'usd' ? 'bg-paperbee-blue text-white' : 'bg-gray-100'}`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('inr')}
                className={`px-3 py-1 rounded ${currency === 'inr' ? 'bg-paperbee-blue text-white' : 'bg-gray-100'}`}
              >
                INR
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-32 flex-shrink-0 relative">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.author}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.language}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border rounded hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border rounded hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-paperbee-blue">
                          {currency === 'usd' ? `$${item.price.usd}` : `₹${item.price.inr}`}
                        </p>
                        <p className="text-sm text-gray-500">
                          Total: {currency === 'usd' ? `$${(item.price.usd * item.quantity).toFixed(2)}` : `₹${item.price.inr * item.quantity}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>
                    {currency === 'usd' ? `$${subtotal.toFixed(2)}` : `₹${subtotal}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {currency === 'usd' ? `$${shipping.toFixed(2)}` : `₹${shipping}`}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-paperbee-blue">
                    {currency === 'usd' ? `$${total.toFixed(2)}` : `₹${total}`}
                  </span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Link 
                  href="/checkout"
                  className="w-full bg-paperbee-blue text-white py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  href="/books"
                  className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage