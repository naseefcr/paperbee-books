// components/LanguageSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'

const languages = [
  { name: 'English', books: 0, flag: '🇬🇧' },
  { name: 'Arabic', books: 10, flag: '🇸🇦' },
  { name: 'Japanese', books: 10, flag: '🇯🇵' },
  { name: 'Malayalam', books: 4, flag: '🇮🇳' },
  { name: 'Kannada', books: 4, flag: '🇮🇳' },
]

const LanguageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Languages we publish in
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every child deserves access to joyful learning in their mother tongue.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 text-center hover:bg-paperbee-yellow/10 transition"
            >
              <div className="text-4xl mb-3">{language.flag}</div>
              <h3 className="font-semibold text-gray-900">{language.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{language.books} books</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LanguageSection