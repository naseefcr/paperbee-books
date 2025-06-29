'use client';

import { cn } from '@/lib/utils';
import { generateWhatsAppLink } from '@/lib/utils';
import { MessageCircle, Star, BookOpen, Heart, ExternalLink } from 'lucide-react';
import CTAButton from './CTAButton';
import LanguageBadge from './LanguageBadge';

interface BookCardProps {
  title: string;
  description: string;
  category: 'storybooks' | 'poetry' | 'educational' | 'language' | 'art';
  languages: string[];
  ageGroup?: string;
  rating?: number;
  price?: string;
  imageUrl?: string;
  featured?: boolean;
  comingSoon?: boolean;
  cultural?: boolean;
  onOrder?: () => void;
  className?: string;
}

const categoryStyles = {
  storybooks: {
    gradient: 'from-reading-400 to-reading-500',
    icon: '📚',
    bgPattern: 'honeycomb-pattern',
  },
  poetry: {
    gradient: 'from-cultural-400 to-cultural-500', 
    icon: '🎵',
    bgPattern: 'paper-texture',
  },
  educational: {
    gradient: 'from-nature-400 to-nature-500',
    icon: '🎓',
    bgPattern: '',
  },
  language: {
    gradient: 'from-primary-400 to-primary-500',
    icon: '🌍',
    bgPattern: 'diversity-gradient',
  },
  art: {
    gradient: 'from-accent-400 to-accent-500',
    icon: '🎨',
    bgPattern: '',
  },
};

export default function BookCard({
  title,
  description,
  category,
  languages,
  ageGroup,
  rating,
  price,
  imageUrl,
  featured = false,
  comingSoon = false,
  cultural = false,
  onOrder,
  className = '',
}: BookCardProps) {
  const categoryConfig = categoryStyles[category];
  
  const handleOrder = () => {
    if (onOrder) {
      onOrder();
    } else {
      const message = `Hi! I'm interested in "${title}" from PAPERBEE BOOKS. Can you provide more details about pricing and availability?`;
      window.open(generateWhatsAppLink(message), '_blank');
    }
  };

  return (
    <div className={cn(
      'card-book group relative overflow-hidden',
      'min-h-[400px] flex flex-col',
      featured && 'ring-2 ring-primary-400 ring-offset-2',
      comingSoon && 'opacity-80',
      className
    )}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse-slow">
            ⭐ Featured
          </div>
        </div>
      )}

      {/* Coming Soon Badge */}
      {comingSoon && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            🚀 Coming Soon
          </div>
        </div>
      )}

      {/* Book Cover/Image */}
      <div className={cn(
        'relative h-48 flex items-center justify-center overflow-hidden',
        'bg-gradient-to-br', categoryConfig.gradient,
        categoryConfig.bgPattern
      )}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="text-center text-white">
            <div className="text-6xl mb-2 animate-float">{categoryConfig.icon}</div>
            <div className="text-sm font-medium opacity-90">Book Cover</div>
          </div>
        )}
        
        {/* Book spine effect */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-white/30 to-transparent" />
        
        {/* Cultural diversity indicator */}
        {cultural && (
          <div className="absolute bottom-2 left-2">
            <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
              <span className="text-xs">🌍</span>
              <span className="text-xs font-medium text-gray-700">Diverse</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Category & Age Group */}
        <div className="flex items-center justify-between mb-2">
          <span className={cn(
            'text-xs font-medium px-2 py-1 rounded-full capitalize',
            'bg-gradient-to-r', categoryConfig.gradient, 'text-white'
          )}>
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </span>
          
          {ageGroup && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {ageGroup}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Rating & Price */}
        {(rating || price) && (
          <div className="flex items-center justify-between mb-3">
            {rating && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      'w-3 h-3',
                      i < rating ? 'text-primary-400 fill-current' : 'text-gray-300'
                    )} 
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">({rating})</span>
              </div>
            )}
            
            {price && (
              <span className="text-lg font-bold text-primary-600">{price}</span>
            )}
          </div>
        )}

        {/* Languages */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">Available in:</div>
          <div className="flex flex-wrap gap-1">
            {languages.slice(0, 3).map((lang) => (
              <LanguageBadge 
                key={lang} 
                language={lang} 
                size="sm" 
                variant="default"
              />
            ))}
            {languages.length > 3 && (
              <span className="text-xs text-gray-500 self-center">
                +{languages.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2 border-t border-gray-100">
          <button
            onClick={comingSoon ? undefined : handleOrder}
            disabled={comingSoon}
            className={`flex-1 inline-flex items-center justify-center space-x-2 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${
              comingSoon 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                : 'bg-nature-500 hover:bg-nature-600 text-white'
            }`}
          >
            {comingSoon ? <Heart size={16} /> : <MessageCircle size={16} />}
            <span>{comingSoon ? 'Notify Me' : 'Order Now'}</span>
          </button>
          
          <button
            onClick={() => console.log('Preview:', title)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <BookOpen size={16} />
            <span>Preview</span>
          </button>
        </div>
      </div>

      {/* Hover effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Sparkle effects */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-primary-400 animate-sparkle">✨</span>
      </div>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <span className="text-accent-400 animate-sparkle animation-delay-200">✨</span>
      </div>
    </div>
  );
}