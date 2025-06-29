import { useTranslations } from 'next-intl';
import { MessageCircle, BookOpen, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function Hero() {
  const t = useTranslations('hero');

  const whatsappMessage = `Hello! I'm interested in learning more about PAPERBEE BOOKS and your collection of children's books.`;

  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
                <BookOpen size={48} className="text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 text-accent-500 animate-bounce" size={24} />
              <Sparkles className="absolute -bottom-2 -left-2 text-accent-500 animate-bounce animation-delay-200" size={20} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            {t('subtitle')}
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#books"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <BookOpen size={20} />
              <span>{t('cta')}</span>
            </a>
            
            <a
              href={generateWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>{t('whatsapp')}</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {['📚', '🌟', '🌍', '📖'].map((emoji, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-2">{emoji}</div>
              <div className="text-sm text-gray-600 font-medium">
                {index === 0 && 'Quality Books'}
                {index === 1 && 'Magical Stories'}
                {index === 2 && 'Global Reach'}
                {index === 3 && 'Educational'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}