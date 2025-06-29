import { useTranslations } from 'next-intl';
import { MessageCircle, BookOpen, Sparkles, Heart, Star, Globe } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import CTAButton from '../ui/CTAButton';
import LanguageBadge from '../ui/LanguageBadge';

export default function Hero() {
  const t = useTranslations('hero');

  const whatsappMessage = `Hello! I'm interested in learning more about PAPERBEE BOOKS and your collection of children's books.`;

  const features = [
    { 
      icon: '📚', 
      label: 'Quality Books',
      color: 'from-reading-400 to-reading-500',
      delay: '0ms'
    },
    { 
      icon: '✨', 
      label: 'Magical Stories',
      color: 'from-accent-400 to-accent-500',
      delay: '200ms'
    },
    { 
      icon: '🌍', 
      label: 'Global Reach',
      color: 'from-cultural-400 to-cultural-500',
      delay: '400ms'
    },
    { 
      icon: '🎓', 
      label: 'Educational',
      color: 'from-nature-400 to-nature-500',
      delay: '600ms'
    },
  ];

  const languages = ['en', 'hi', 'ar', 'ja', 'id'];

  return (
    <section id="home" className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 honeycomb-pattern opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-60 animate-float animation-delay-1000">
        <span className="text-4xl">🐝</span>
      </div>
      <div className="absolute top-40 right-20 opacity-60 animate-float animation-delay-600">
        <span className="text-3xl">📖</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-60 animate-float animation-delay-800">
        <span className="text-2xl">✨</span>
      </div>
      <div className="absolute top-60 right-10 opacity-60 animate-float">
        <span className="text-3xl">🌟</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Icon Section */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Main bee logo */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-honeycomb flex items-center justify-center mb-6 shadow-honeycomb group-hover:scale-110 transition-all duration-500">
                <div className="relative">
                  <span className="text-6xl animate-float">🐝</span>
                  {/* Wing flaps */}
                  <div className="absolute -top-4 -left-2 text-2xl opacity-70 animate-wiggle">✨</div>
                  <div className="absolute -top-4 -right-2 text-2xl opacity-70 animate-wiggle animation-delay-200">✨</div>
                </div>
              </div>
              
              {/* Orbiting books */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce">📚</div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-2xl animate-bounce animation-delay-400">📖</div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce animation-delay-800">🎨</div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 text-2xl animate-bounce animation-delay-600">🌍</div>
              </div>
              
              {/* Sparkle effects */}
              <Sparkles className="absolute -top-4 -right-4 text-accent-400 animate-sparkle" size={28} />
              <Sparkles className="absolute -bottom-4 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={24} />
              <Sparkles className="absolute top-8 -left-6 text-reading-400 animate-sparkle animation-delay-800" size={20} />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="heading-playful mb-4 animate-fly-in">
              {t('title')}
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium text-shadow animate-fly-in animation-delay-200">
              {t('subtitle')} 
              <span className="inline-block animate-wiggle">🌈</span>
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fly-in animation-delay-400">
              {t('description')}
            </p>
          </div>

          {/* Language Showcase */}
          <div className="mb-10 animate-fly-in animation-delay-600">
            <p className="text-sm font-medium text-gray-600 mb-3">Available in multiple languages:</p>
            <div className="flex justify-center flex-wrap gap-2">
              {languages.map((lang, index) => (
                <div 
                  key={lang} 
                  className="animate-fly-in"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <LanguageBadge language={lang} size="sm" variant="cultural" />
                </div>
              ))}
              <div className="animate-fly-in animation-delay-1200">
                <span className="language-badge">+5 more</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fly-in animation-delay-800">
            <a
              href="#books"
              className="btn-primary inline-flex items-center space-x-3 min-w-52 justify-center text-lg py-4 px-8 animate hover:scale-105 hover:-translate-y-1"
            >
              <BookOpen size={24} />
              <span>{t('cta')}</span>
            </a>
            
            <a
              href={generateWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center space-x-3 min-w-52 justify-center text-lg py-4 px-8 hover:scale-105 hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              <span>{t('whatsapp')}</span>
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card group hover-lift animate-fly-in"
                style={{ animationDelay: feature.delay }}
              >
                <div className="p-6 text-center">
                  {/* Feature Icon */}
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-honeycomb 
                    bg-gradient-to-br ${feature.color} 
                    flex items-center justify-center shadow-bee
                    group-hover:scale-110 transition-all duration-300
                  `}>
                    <span className="text-2xl filter drop-shadow-sm">
                      {feature.icon}
                    </span>
                  </div>
                  
                  {/* Feature Label */}
                  <h3 className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">
                    {feature.label}
                  </h3>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex justify-center items-center gap-8 text-gray-500 animate-fly-in animation-delay-1000">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-reading-500" />
              <span className="text-sm font-medium">Child-Safe Content</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent-500" />
              <span className="text-sm font-medium">Educational Value</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-cultural-500" />
              <span className="text-sm font-medium">Cultural Diversity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}