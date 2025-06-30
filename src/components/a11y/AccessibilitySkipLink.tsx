'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function AccessibilitySkipLink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleBlur = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleBlur);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleBlur);
    };
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999]',
          'bg-primary-600 text-white px-4 py-2 rounded-md font-medium',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
          'transition-all duration-200'
        )}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        Skip to main content
      </a>
      
      <a
        href="#navigation"
        className={cn(
          'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-48 focus:z-[9999]',
          'bg-primary-600 text-white px-4 py-2 rounded-md font-medium',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
          'transition-all duration-200'
        )}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        Skip to navigation
      </a>

      <a
        href="#footer"
        className={cn(
          'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-96 focus:z-[9999]',
          'bg-primary-600 text-white px-4 py-2 rounded-md font-medium',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
          'transition-all duration-200'
        )}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        Skip to footer
      </a>
    </>
  );
}