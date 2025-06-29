import { useTranslations } from 'next-intl';
import { MessageCircle, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import BookCard from '../ui/BookCard';
import CTAButton from '../ui/CTAButton';

export default function Books() {
  const t = useTranslations('books');

  const featuredBooks = [
    {
      title: 'The Magic Honey Garden',
      description: 'Join Buzzy the bee on a magical adventure through an enchanted garden where flowers sing and trees tell stories.',
      category: 'storybooks' as const,
      languages: ['en', 'hi', 'ar', 'ur'],
      ageGroup: '3-8 years',
      rating: 5,
      price: '₹299',
      featured: true,
      cultural: true,
    },
    {
      title: 'Rainbow Rhymes',
      description: 'Beautiful poetry collection with colorful illustrations that teach children about colors, emotions, and nature.',
      category: 'poetry' as const,
      languages: ['en', 'hi', 'ta', 'ml'],
      ageGroup: '4-10 years',
      rating: 4,
      price: '₹249',
      cultural: true,
    },
    {
      title: 'Little Scientists Big Dreams',
      description: 'Interactive science book that makes learning fun with simple experiments and discoveries for curious minds.',
      category: 'educational' as const,
      languages: ['en', 'hi', 'ja'],
      ageGroup: '6-12 years',
      rating: 5,
      price: '₹399',
    },
    {
      title: 'My First Arabic Words',
      description: 'Learn Arabic in a fun and engaging way with beautiful illustrations and pronunciation guides.',
      category: 'language' as const,
      languages: ['ar', 'en', 'ur'],
      ageGroup: '5-10 years',
      rating: 4,
      price: '₹349',
      cultural: true,
    },
    {
      title: 'Creative Canvas Kids',
      description: 'Art instruction book that teaches children various drawing and painting techniques through step-by-step tutorials.',
      category: 'art' as const,
      languages: ['en', 'hi', 'kn', 'ta'],
      ageGroup: '7-14 years',
      rating: 5,
      price: '₹449',
    },
    {
      title: 'Wisdom of the World',
      description: 'Collection of folktales and wisdom stories from different cultures around the world, promoting diversity and understanding.',
      category: 'storybooks' as const,
      languages: ['en', 'hi', 'ar', 'ja', 'id'],
      ageGroup: '8-14 years',
      rating: 5,
      price: '₹599',
      featured: true,
      cultural: true,
    },
    {
      title: 'Math Magic Adventures',
      description: 'Turn math into magic with fun puzzles, games, and adventures that make numbers exciting and easy to understand.',
      category: 'educational' as const,
      languages: ['en', 'hi'],
      ageGroup: '6-12 years',
      rating: 4,
      price: '₹379',
    },
    {
      title: 'Melodic Malayalam',
      description: 'Learn Malayalam through songs, rhymes, and interactive activities designed for young language learners.',
      category: 'language' as const,
      languages: ['ml', 'en'],
      ageGroup: '4-10 years',
      rating: 5,
      price: '₹329',
      cultural: true,
    },
    {
      title: 'Future Innovators',
      description: 'Inspire young minds with stories of inventors, scientists, and innovators who changed the world.',
      category: 'educational' as const,
      languages: ['en', 'hi', 'ja'],
      ageGroup: '8-14 years',
      comingSoon: true,
    }
  ];

  return (
    <section id="books" className="relative py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-cultural-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 opacity-40 animate-float animation-delay-1000">
        <span className="text-4xl">📚</span>
      </div>
      <div className="absolute bottom-32 left-10 opacity-40 animate-float animation-delay-600">
        <span className="text-3xl">✨</span>
      </div>
      <div className="absolute top-60 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">🌟</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <h2 className="heading-playful gradient-text">
                {t('title')}
              </h2>
              <Sparkles className="absolute -top-4 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-2 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Discover our diverse collection of books designed to educate, entertain, and inspire children worldwide. 
            Each book is crafted with love and attention to cultural diversity.
          </p>

          {/* Category highlights */}
          <div className="flex justify-center flex-wrap gap-4 mt-8 animate-fly-in animation-delay-400">
            {['📚 Storybooks', '🎵 Poetry', '🎓 Educational', '🌍 Language Learning', '🎨 Art Books'].map((category, index) => (
              <span 
                key={index}
                className="language-badge hover-lift"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredBooks.map((book, index) => (
            <div 
              key={index}
              className="animate-fly-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <BookCard
                {...book}
              />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">🐝</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">📖</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-text">
                Ready to Start Reading? 📚
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of families worldwide who trust PAPERBEE BOOKS for quality children&apos;s literature. 
                Place your order now through WhatsApp for quick and easy processing!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={generateWhatsAppLink("Hello! I'd like to browse your book collection and place an order for PAPERBEE BOOKS.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 min-w-64 text-lg py-4 px-8 hover:scale-105"
                >
                  <MessageCircle size={24} />
                  <span>Browse & Order Now</span>
                </a>
                
                <a
                  href="#contact"
                  className="btn-outline inline-flex items-center justify-center min-w-48 text-lg py-4 px-8 hover:scale-105"
                >
                  Get More Info
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex justify-center items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-nature-500">✓</span>
                  <span>Child-Safe Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cultural-500">✓</span>
                  <span>Cultural Diversity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-500">✓</span>
                  <span>Educational Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}