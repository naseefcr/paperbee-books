'use client';

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'bee' | 'honeycomb' | 'book' | 'simple';
  text?: string;
  className?: string;
}

const sizeStyles = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8', 
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

export default function LoadingSpinner({ 
  size = 'md', 
  variant = 'bee', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  
  if (variant === 'bee') {
    return (
      <div className={cn('flex flex-col items-center gap-2', className)}>
        <div className={cn('relative', sizeStyles[size])}>
          {/* Bee body */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full animate-buzz">
            <div className="absolute inset-1 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs">
                🐝
              </div>
            </div>
          </div>
          
          {/* Wing flaps */}
          <div className="absolute -top-1 left-1/4 w-2 h-1 bg-white/60 rounded-full animate-wiggle animation-delay-200"></div>
          <div className="absolute -top-1 right-1/4 w-2 h-1 bg-white/60 rounded-full animate-wiggle animation-delay-400"></div>
          
          {/* Flight path */}
          <div className="absolute inset-0 animate-float">
            <div className="w-full h-full border-2 border-dashed border-primary-300 rounded-full opacity-30"></div>
          </div>
        </div>
        
        {text && (
          <span className="text-sm font-medium text-primary-700 animate-pulse-slow">
            {text}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'honeycomb') {
    return (
      <div className={cn('flex flex-col items-center gap-2', className)}>
        <div className={cn('relative', sizeStyles[size])}>
          {/* Honeycomb pattern */}
          <div className="absolute inset-0 grid grid-cols-2 gap-1">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className={cn(
                  'bg-gradient-to-br from-primary-400 to-accent-400 rounded-honeycomb',
                  'animate-honeycomb'
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
        
        {text && (
          <span className="text-sm font-medium text-primary-700">
            {text}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'book') {
    return (
      <div className={cn('flex flex-col items-center gap-2', className)}>
        <div className={cn('relative', sizeStyles[size])}>
          {/* Book pages flipping */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-book animate-book-flip">
            <div className="absolute inset-1 bg-white rounded-sm flex items-center justify-center">
              <span className="text-xs">📖</span>
            </div>
          </div>
          
          {/* Book spine */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600 rounded-l"></div>
        </div>
        
        {text && (
          <span className="text-sm font-medium text-secondary-700">
            {text}
          </span>
        )}
      </div>
    );
  }

  // Simple spinner
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div className={cn(
        'border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin',
        sizeStyles[size]
      )} />
      
      {text && (
        <span className="text-sm font-medium text-gray-600">
          {text}
        </span>
      )}
    </div>
  );
}