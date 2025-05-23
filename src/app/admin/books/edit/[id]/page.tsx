// src/app/admin/books/edit/[id]/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Save, Upload, X, Trash2 } from 'lucide-react'
import { doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
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
  coverImageUrl: string
  samplePages?: string[]
}

export default function EditBook() {
  const router = useRouter()
  const params = useParams()
  const bookId = params?.id as string
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  
  // Form data state
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
    isNew: false,
    isBestseller: false,
    coverImageUrl: '',
    samplePages: []
  })
  
  // Image states
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [newSamplePages, setNewSamplePages] = useState<File[]>([])
  const [newSamplePreviews, setNewSamplePreviews] = useState<string[]>([])
  
  // Fetch book data
  useEffect(() => {
    async function fetchBook() {
      try {
        setLoading(true)
        const docRef = doc(db, 'books', bookId)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const data = docSnap.data() as any
          
          // Format dates from Firestore Timestamp to string
          let publishDate = data.publishDate || new Date().toISOString().split('T')[0]
          if (publishDate instanceof Timestamp) {
            publishDate = publishDate.toDate().toISOString().split('T')[0]
          }
          
          setFormData({
            title: data.title || '',
            author: data.author || '',
            description: data.description || '',
            isbn: data.isbn || '',
            price: data.price || 0,
            stock: data.stock || 0,
            language: data.language || '',
            category: data.category || '',
            ageGroup: data.ageGroup || '',
            pages: data.pages || 0,
            publisher: data.publisher || 'Paperbee Books',
            publishDate: publishDate,
            isNew: data.isNew || false,
            isBestseller: data.isBestseller || false,
            coverImageUrl: data.coverImageUrl || '',
            samplePages: data.samplePages || [],
          })
        } else {
          setError('Book not found')
          setTimeout(() => router.push('/admin/books'), 2000)
        }
      } catch (err) {
        console.error('Error fetching book:', err)
        setError('Failed to load book data')
      } finally {
        setLoading(false)
      }
    }
    
    if (bookId) {
      fetchBook()
    }
  }, [bookId, router])
  
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
    }
  }
  
  const handleSamplePagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileArray = Array.from(e.target.files)
      setNewSamplePages(prev => [...prev, ...fileArray])
      
      const newPreviews = fileArray.map(file => URL.createObjectURL(file))
      setNewSamplePreviews(prev => [...prev, ...newPreviews])
    }
  }
  
  const removeExistingSamplePage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      samplePages: prev.samplePages?.filter((_, i) => i !== index)
    }))
  }
  
  const removeNewSamplePage = (index: number) => {
    setNewSamplePages(prev => prev.filter((_, i) => i !== index))
    setNewSamplePreviews(prev => prev.filter((_, i) => i !== index))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setSaving(true)
      setError(null)
      setSuccessMessage(null)
      
      let updatedCoverImageUrl = formData.coverImageUrl
      const storage = getStorage()
      
      // Upload new cover image if selected
      if (coverImage) {
        // Upload the new cover image
        const coverImageRef = ref(storage, `books/covers/${Date.now()}-${coverImage.name}`)
        await uploadBytes(coverImageRef, coverImage)
        updatedCoverImageUrl = await getDownloadURL(coverImageRef)
      }
      
      // Upload new sample pages if any
      const existingSamplePages = formData.samplePages || []
      const newSamplePagesUrls: string[] = []
      
      if (newSamplePages.length > 0) {
        for (const file of newSamplePages) {
          const samplePageRef = ref(storage, `books/samples/${Date.now()}-${file.name}`)
          await uploadBytes(samplePageRef, file)
          const samplePageUrl = await getDownloadURL(samplePageRef)
          newSamplePagesUrls.push(samplePageUrl)
        }
      }
      
      // Create updated book document
      const updateData = {
        ...formData,
        coverImageUrl: updatedCoverImageUrl,
        samplePages: [...existingSamplePages, ...newSamplePagesUrls],
        updatedAt: new Date()
      }
      
      const bookRef = doc(db, 'books', bookId)
      await updateDoc(bookRef, updateData)
      
      setSuccessMessage('Book updated successfully')
      
      // Clear new sample pages after successful upload
      setNewSamplePages([])
      setNewSamplePreviews([])
      setCoverImage(null)
      
      // Update the form data with the new URLs
      setFormData(updateData)
      
      // Redirect after a short delay to show success message
      setTimeout(() => router.push('/admin/books'), 1500)
    } catch (err) {
      console.error('Error updating book:', err)
      setError('Failed to update book. Please try again.')
    } finally {
      setSaving(false)
    }
  }
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-t-primaryAction border-primaryAction/30 rounded-full animate-spin"></div>
      </div>
    )
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
        <h1 className="text-2xl font-bold text-mainText">Edit Book</h1>
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
      
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 text-green-800 p-4 rounded-lg"
        >
          {successMessage}
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
          <p className="text-sm text-secondaryText">Update the book details below.</p>
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
            />
          </div>
          
          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-secondaryText mb-2">
              Cover Image*
            </label>
            <div className="flex items-start space-x-6">
              <div className="w-32 h-44 bg-accentHighlight rounded-lg overflow-hidden">
                <img 
                  src={coverImage ? URL.createObjectURL(coverImage) : formData.coverImageUrl} 
                  alt="Book Cover" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="border-2 border-dashed border-accentHighlight rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload size={32} className="text-secondaryText mb-2" />
                  <p className="text-sm text-secondaryText mb-4">Upload new cover image</p>
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
                    Change Cover Image
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sample Pages */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-secondaryText">
                Sample Pages
              </label>
              <div className="text-xs text-secondaryText">
                {(formData.samplePages?.length || 0) + newSamplePages.length} sample pages
              </div>
            </div>
            
            {/* Existing Sample Pages */}
            {formData.samplePages && formData.samplePages.length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-secondaryText mb-2">Existing sample pages:</p>
                <div className="flex flex-wrap gap-4">
                  {formData.samplePages.map((url, index) => (
                    <div key={`existing-${index}`} className="relative w-24 h-32 bg-accentHighlight rounded-lg overflow-hidden">
                      <img src={url} alt={`Sample page ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeExistingSamplePage(index)}
                        className="absolute top-1 right-1 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* New Sample Pages */}
            {newSamplePreviews.length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-secondaryText mb-2">New sample pages to add:</p>
                <div className="flex flex-wrap gap-4">
                  {newSamplePreviews.map((preview, index) => (
                    <div key={`new-${index}`} className="relative w-24 h-32 bg-accentHighlight rounded-lg overflow-hidden">
                      <img src={preview} alt={`New sample page ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeNewSamplePage(index)}
                        className="absolute top-1 right-1 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Upload new sample pages */}
            <div className="border-2 border-dashed border-accentHighlight rounded-lg p-6 flex flex-col items-center justify-center">
              <Upload size={32} className="text-secondaryText mb-2" />
              <p className="text-sm text-secondaryText mb-4">Add more sample pages</p>
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
                Add Sample Pages
              </label>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-accentHighlight/10 flex justify-between items-center">
          <button
            type="button"
            onClick={() => router.push('/admin/books')}
            className="px-4 py-2 border rounded-lg text-secondaryText hover:bg-white transition"
          >
            Cancel
          </button>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                if (confirm('Are you sure you want to delete this book? This action cannot be undone.')) {
                  router.push(`/admin/books`);
                  // Actual deletion would be implemented here
                }
              }}
              className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition flex items-center gap-2"
            >
              <Trash2 size={18} />
              Delete
            </button>
            
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-primaryAction text-white rounded-lg hover:bg-rustOrange transition flex items-center gap-2 disabled:opacity-50"
            >
              <Save size={18} />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  )
}