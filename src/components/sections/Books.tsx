import { useTranslations } from 'next-intl';
import { MessageCircle, ExternalLink, BookOpen, Palette, GraduationCap, Languages, Music } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function Books() {
  const t = useTranslations('books');

  const bookCategories = [
    {
      icon: BookOpen,
      title: t('categories.storybooks'),
      description: 'Enchanting tales that spark imagination and creativity',
      color: 'from-pink-500 to-rose-500',
      books: ['The Magic Garden', 'Adventures in Dreamland', 'The Friendly Dragon']
    },
    {
      icon: Music,
      title: t('categories.poetry'),
      description: 'Beautiful verses and rhymes for young minds',
      color: 'from-purple-500 to-indigo-500',
      books: ['Rhymes & Rhythms', 'Songs of Nature', 'Happy Verses']
    },
    {
      icon: GraduationCap,
      title: t('categories.educational'),
      description: 'Learning made fun with interactive content',
      color: 'from-blue-500 to-cyan-500',
      books: ['Math Adventures', 'Science Wonders', 'History Heroes']
    },
    {
      icon: Languages,
      title: t('categories.language'),
      description: 'Building language skills across cultures',
      color: 'from-green-500 to-emerald-500',
      books: ['First Words', 'Grammar Games', 'Conversation Starters']
    },
    {
      icon: Palette,
      title: t('categories.art'),
      description: 'Creative expression through visual storytelling',
      color: 'from-orange-500 to-red-500',
      books: ['Color Adventures', 'Drawing Fun', 'Creative Crafts']
    }
  ];

  return (
    <section id="books" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our diverse collection of books designed to educate, entertain, and inspire children worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bookCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 transform transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4`}>
                <category.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {category.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured Books:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {category.books.map((book, bookIndex) => (
                    <li key={bookIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{book}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={generateWhatsAppLink(`Hi! I'm interested in ${category.title} books from PAPERBEE BOOKS. Can you share more details?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={16} />
                  <span>{t('orderNow')}</span>
                </a>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                  <ExternalLink size={16} />
                  <span>{t('learnMore')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Order?</h3>
            <p className="text-gray-600 mb-6">
              Get in touch with us on WhatsApp to place your order or ask any questions about our books.
            </p>
            <a
              href={generateWhatsAppLink("Hello! I'd like to know more about PAPERBEE BOOKS and place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Start Your Order</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}