// src/app/admin/books/new/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Save, Upload } from 'lucide-react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db } from '@/lib/firebase-admin-config'

// Define form data type
interface BookFormData {
  title: string
  author: string
  description: string
  isbn: string
  price: number
  stock: number
  language: string
  category: string
  ageGroup: string
  pages: number
  publisher: string
  publishDate: string
  isNew: boolean
  isBestseller: boolean
}

export default function NewBook() {
  const router = useRouter()
  const [loading, setSaving] = useState(false)
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [coverPreview, setCoverPreview] = useState<string | null>(null)
  const [samplePages, setSamplePages] = useState<File[]>([])
  const [samplePreviews, setSamplePreviews] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  
  // Initialize form data
  const [formData, setFormData] = useState<BookFormData>({
    title: '',
    author: '',
    description: '',
    isbn: '',
    price: 0,
    stock: 0,
    language: '',
    category: '',
    ageGroup: '',
    pages: 0,
    publisher: 'Paperbee Books',
    publishDate: new Date().toISOString().split('T')[0],
    isNew: true,
    isBestseller: false
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked
        : type === 'number' || name === 'price' || name === 'stock' || name === 'pages'
          ? parseFloat(value)
          : value
    }))
  }
  
  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setCoverImage(file)
      setCoverPreview(URL.createObjectURL(file))
    }
  }
  
  const handleSamplePagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileArray = Array.from(e.target.files)
      setSamplePages(prev => [...prev, ...fileArray])
      
      const newPreviews = fileArray.map(file => URL.createObjectURL(file))
      setSamplePreviews(prev => [...prev, ...newPreviews])
    }
  }
  
  const removeSamplePage = (index: number) => {
    setSamplePages(prev => prev.filter((_, i) => i !== index))
    setSamplePreviews(prev => prev.filter((_, i) => i !== index))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setSaving(true)
      setError(null)
      
      if (!coverImage) {
        setError('Please upload a cover image')
        setSaving(false)
        return
      }
      
      // Upload cover image
      const storage = getStorage()
      const coverImageRef = ref(storage, `books/covers/${Date.now()}-${coverImage.name}`)
      await uploadBytes(coverImageRef, coverImage)
      const coverImageUrl = await getDownloadURL(coverImageRef)
      
      // Upload sample pages if any
      const samplePagesUrls: string[] = []
      if (samplePages.length > 0) {
        for (const file of samplePages) {
          const samplePageRef = ref(storage, `books/samples/${Date.now()}-${file.name}`)
          await uploadBytes(samplePageRef, file)
          const samplePageUrl = await getDownloadURL(samplePageRef)
          samplePagesUrls.push(samplePageUrl)
        }
      }
      
      // Create book document
      const bookData = {
        ...formData,
        coverImageUrl,
        samplePages: samplePagesUrls,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }
      
      const docRef = await addDoc(collection(db, 'books'), bookData)
      
      router.push('/admin/books')
    } catch (err) {
      console.error('Error adding book:', err)
      setError('Failed to add book. Please try again.')
    } finally {
      setSaving(false)
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button 
          onClick={() => router.push('/admin/books')}
          className="p-2 hover:bg-accentHighlight rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-mainText">Add New Book</h1>
      </div>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 text-red-800 p-4 rounded-lg"
        >
          {error}
        </motion.div>
      )}
      
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-mainText">Book Information</h2>
          <p className="text-sm text-secondaryText">Fill in the details for the new book.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Book Title*
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="Enter book title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Author*
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="Enter author name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                ISBN*
              </label>
              <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="Enter ISBN number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Language*
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
              >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
                <option value="Japanese">Japanese</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Kannada">Kannada</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Category*
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
              >
                <option value="">Select Category</option>
                <option value="storybook">Storybook</option>
                <option value="poetry">Poetry</option>
                <option value="educational">Educational</option>
                <option value="activity">Activity Book</option>
                <option value="learning">Learning</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Age Group
              </label>
              <select
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
              >
                <option value="">Select Age Group</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-8">6-8 years</option>
                <option value="9-12">9-12 years</option>
                <option value="13+">13+ years</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Number of Pages
              </label>
              <input
                type="number"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="Enter number of pages"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Publisher
              </label>
              <input
                type="text"
                name="publisher"
                value={formData.publisher}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="Enter publisher name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Publish Date
              </label>
              <input
                type="date"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Price* ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="Enter price"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondaryText mb-2">
                Stock*
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
                placeholder="Enter stock quantity"
              />
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isNew"
                  name="isNew"
                  checked={formData.isNew}
                  onChange={(e) => setFormData({...formData, isNew: e.target.checked})}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="isNew" className="ml-2 block text-sm text-secondaryText">
                  Mark as New
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isBestseller"
                  name="isBestseller"
                  checked={formData.isBestseller}
                  onChange={(e) => setFormData({...formData, isBestseller: e.target.checked})}
                  className="h-4 w-4 text-primaryAction focus:ring-primaryAction border-gray-300 rounded"
                />
                <label htmlFor="isBestseller" className="ml-2 block text-sm text-secondaryText">
                  Mark as Bestseller
                </label>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-secondaryText mb-2">
              Description*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction"
              placeholder="Enter book description"
            />
          </div>
          
          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-secondaryText mb-2">
              Cover Image*
            </label>
            <div className="flex items-start space-x-6">
              {coverPreview && (
                <div className="w-32 h-44 bg-accentHighlight rounded-lg overflow-hidden">
                  <img 
                    src={coverPreview} 
                    alt="Book Cover Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="border-2 border-dashed border-accentHighlight rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload size={32} className="text-secondaryText mb-2" />
                  <p className="text-sm text-secondaryText mb-4">Click to upload or drag and drop</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverChange}
                    className="hidden"
                    id="cover-upload"
                  />
                  <label
                    htmlFor="cover-upload"
                    className="bg-primaryAction text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-rustOrange"
                  >
                    Select Cover Image
                  </label>
                </div>
                <p className="text-xs text-secondaryText mt-2">
                  Recommended: 600 x 800 pixels, JPEG or PNG format
                </p>
              </div>
            </div>
          </div>
          
          {/* Sample Pages */}
          <div>
            <label className="block text-sm font-medium text-secondaryText mb-2">
              Sample Pages (Optional)
            </label>
            <div className="border-2 border-dashed border-accentHighlight rounded-lg p-6 flex flex-col items-center justify-center">
              <Upload size={32} className="text-secondaryText mb-2" />
              <p className="text-sm text-secondaryText mb-4">Upload sample pages from the book</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleSamplePagesChange}
                multiple
                className="hidden"
                id="sample-pages-upload"
              />
              <label
                htmlFor="sample-pages-upload"
                className="bg-primaryAction text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-rustOrange"
              >
                Select Sample Images
              </label>
            </div>
            
            {samplePreviews.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-secondaryText mb-2">
                  Sample Pages Preview:
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {samplePreviews.map((preview, index) => (
                    <div key={index} className="relative w-24 h-32 bg-accentHighlight rounded-lg overflow-hidden">
                      <img src={preview} alt={`Sample page ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeSamplePage(index)}
                        className="absolute top-1 right-1 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="px-6 py-4 bg-accentHighlight/10 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.push('/admin/books')}
            className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-white transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2 disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? 'Saving...' : 'Save Book'}
          </button>
        </div>
      </motion.form>
    </div>
  )
}