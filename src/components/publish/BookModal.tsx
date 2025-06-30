'use client';

import { X, Star, MessageCircle, BookOpen, Heart, Globe, Clock } from 'lucide-react';

interface BookModalProps {
  book: any;
  onClose: () => void;
  onOrder: () => void;
}

export default function BookModal({ book, onClose, onOrder }: BookModalProps) {
  const languages = [
    { id: 'en', name: 'English', flag: '🇺🇸' },
    { id: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { id: 'ar', name: 'العربية', flag: '🇸🇦' },
    { id: 'ja', name: '日本語', flag: '🇯🇵' },
    { id: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { id: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { id: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { id: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { id: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];

  const categoryIcons = {
    storybooks: '📚',
    poetry: '🎵',
    language: '🌍',
    alphabet: '🔤',
    art: '🎨',
    knowledge: '🧠'
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fly-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Book Header */}
        <div className="relative p-8 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Book Cover */}
            <div className="lg:col-span-1">
              <div className="relative">
                {/* Main Cover */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-honeycomb group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{categoryIcons[book.category as keyof typeof categoryIcons]}</div>
                      <div className="text-lg font-bold text-gray-700 px-4">{book.title}</div>
                    </div>
                  </div>
                  
                  {/* 3D Effect */}
                  <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white/30 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/10 to-transparent" />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {book.featured && (
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse-slow">
                      ⭐ Featured
                    </span>
                  )}
                  {book.bestSeller && (
                    <span className="bg-nature-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      🏆 Bestseller
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-3">
                  {book.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < book.rating ? 'text-primary-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-gray-600 ml-2">({book.rating}/5)</span>
                  </div>
                  <div className="text-3xl font-bold text-primary-600">{book.price}</div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {book.preview.description}
                </p>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Age Group</div>
                    <div className="font-bold text-gray-800">{book.age} years</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-bold text-gray-800 capitalize">
                      {book.category.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-3">Available Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {book.languages.map((langCode: string) => {
                      const lang = languages.find(l => l.id === langCode);
                      return (
                        <div key={langCode} className="bg-cultural-100 text-cultural-700 px-3 py-2 rounded-full flex items-center gap-2">
                          <span>{lang?.flag}</span>
                          <span className="font-medium">{lang?.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Content Preview */}
        <div className="px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sample Content */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-500" />
                Sample Content
              </h3>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border-l-4 border-primary-500">
                <p className="text-gray-700 italic leading-relaxed font-medium">
                  &ldquo;{book.preview.sampleText}&rdquo;
                </p>
              </div>

              {/* Themes */}
              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-3">Key Themes</h4>
                <div className="flex flex-wrap gap-2">
                  {book.preview.themes.map((theme: string, index: number) => (
                    <span key={index} className="bg-reading-100 text-reading-700 px-3 py-1 rounded-full text-sm">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-reading-500" />
                Learning Goals
              </h3>
              <div className="space-y-3">
                {book.preview.learningGoals.map((goal: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 bg-nature-50 rounded-lg p-4">
                    <div className="w-6 h-6 bg-nature-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-6 bg-accent-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-4">What Parents Say</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent-500 fill-current flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;My child loves this book! The illustrations are beautiful and the story teaches great values.&rdquo;
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-reading-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;Perfect for bedtime reading. Educational yet entertaining!&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOrder}
              className="btn-whatsapp inline-flex items-center justify-center space-x-3 py-4 px-8 text-lg hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle size={24} />
              <span>Order via WhatsApp</span>
            </button>
            
            <button className="btn-outline inline-flex items-center justify-center space-x-3 py-4 px-8 text-lg hover:scale-105 transition-transform duration-300">
              <Heart size={24} />
              <span>Add to Wishlist</span>
            </button>
          </div>

          {/* Shipping Info */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Usually ships within 2-3 business days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}