'use client';

import { cn } from '@/lib/utils';

interface LanguageBadgeProps {
  language: string;
  nativeName?: string;
  isActive?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'cultural' | 'nature' | 'reading';
  size?: 'sm' | 'md' | 'lg';
  showFlag?: boolean;
  flag?: string;
  className?: string;
}

const variantStyles = {
  default: 'from-cultural-100 to-cultural-200 text-cultural-800 border-cultural-300 hover:from-cultural-200 hover:to-cultural-300',
  cultural: 'from-cultural-400 to-cultural-500 text-white border-cultural-600 hover:from-cultural-500 hover:to-cultural-600',
  nature: 'from-nature-400 to-nature-500 text-white border-nature-600 hover:from-nature-500 hover:to-nature-600',
  reading: 'from-reading-400 to-reading-500 text-white border-reading-600 hover:from-reading-500 hover:to-reading-600',
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base',
};

const flagEmojis: Record<string, string> = {
  en: '🇺🇸',
  hi: '🇮🇳',
  ar: '🇸🇦',
  ja: '🇯🇵',
  id: '🇮🇩',
  ml: '🇮🇳',
  kn: '🇮🇳',
  ta: '🇮🇳',
  ur: '🇵🇰',
};

export default function LanguageBadge({
  language,
  nativeName,
  isActive = false,
  onClick,
  variant = 'default',
  size = 'md',
  showFlag = true,
  flag,
  className = ''
}: LanguageBadgeProps) {
  const flagEmoji = flag || flagEmojis[language] || '🌍';

  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 rounded-full font-medium',
        'bg-gradient-to-r border transition-all duration-300',
        'transform hover:scale-110 hover:shadow-lg',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        variantStyles[variant],
        sizeStyles[size],
        isActive && 'ring-2 ring-primary-500 ring-offset-2 scale-105',
        onClick && 'cursor-pointer',
        !onClick && 'cursor-default',
        className
      )}
      disabled={!onClick}
    >
      {showFlag && (
        <span className="animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
          {flagEmoji}
        </span>
      )}
      <span className="font-semibold">{language.toUpperCase()}</span>
      {nativeName && size !== 'sm' && (
        <span className="opacity-80 text-xs">({nativeName})</span>
      )}
    </button>
  );
}