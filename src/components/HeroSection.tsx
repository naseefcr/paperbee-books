// components/HeroSection.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-paperbee-blue to-blue-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Welcome to PAPERBEE BOOKS
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Bringing stories, creativity, and learning to children everywhere.
            </p>
            <p className="text-lg mb-10 text-blue-50">
              At Paperbee Books, we believe that books open doors to imagination, 
              curiosity, and understanding. We publish vibrant children&apos;s literature 
              and high-quality educational materials in a wide range of languages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/books"
                className="bg-paperbee-yellow text-paperbee-blue px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center hover:bg-yellow-400 transition"
              >
                Explore Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center hover:bg-white/20 transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                {/* Sample book covers */}
                <div className="bg-paperbee-yellow rounded-lg p-4 aspect-[3/4] flex items-center justify-center">
                  <div className="text-center">
                    <Star className="h-8 w-8 text-paperbee-blue mx-auto mb-2" />
                    <p className="text-paperbee-blue font-bold">Story Book</p>
                  </div>
                </div>
                <div className="bg-paperbee-green rounded-lg p-4 aspect-[3/4] flex items-center justify-center mt-12">
                  <div className="text-center">
                    <Star className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white font-bold">Poetry</p>
                  </div>
                </div>
                <div className="bg-paperbee-orange rounded-lg p-4 aspect-[3/4] flex items-center justify-center -mt-8">
                  <div className="text-center">
                    <Star className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white font-bold">Learning</p>
                  </div>
                </div>
                <div className="bg-purple-500 rounded-lg p-4 aspect-[3/4] flex items-center justify-center mt-4">
                  <div className="text-center">
                    <Star className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white font-bold">Activity</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-paperbee-yellow rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-paperbee-green rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection