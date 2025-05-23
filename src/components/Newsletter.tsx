/* eslint-disable @typescript-eslint/no-unused-vars */
// components/Newsletter.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Simulate subscription process
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    } catch (err) {
      setError('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-paperbee-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-2 max-w-2xl mx-auto">
            Subscribe to our newsletter for new book releases, special offers, and parenting tips!
          </p>
          <p className="text-paperbee-yellow text-lg font-medium mb-8">
            Books, Bees, brilliant minds: Be with Paperbee 🤝
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-paperbee-yellow text-paperbee-blue font-semibold rounded-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Subscribing...'
                ) : isSubscribed ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    Subscribe
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-red-300 text-sm">{error}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter