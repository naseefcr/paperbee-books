'use client';

import { cn } from '@/lib/utils';
import { ReactNode, ComponentType } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline' | 'bee';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: ComponentType<{ className?: string; size?: number }>;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  animate?: boolean;
  className?: string;
}

const variantStyles = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  whatsapp: 'btn-whatsapp',
  outline: 'btn-outline',
  bee: 'bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white shadow-bee hover:shadow-honeycomb animate-wiggle',
};

const sizeStyles = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg',
  xl: 'py-5 px-10 text-xl',
};

export default function CTAButton({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  animate = true,
  className = '',
}: CTAButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'font-semibold rounded-honeycomb transition-all duration-300',
    'transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    'relative overflow-hidden',
    animate && 'hover:scale-105 hover:-translate-y-1',
    disabled && 'opacity-50 cursor-not-allowed',
    loading && 'cursor-wait',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const iconClasses = cn(
    'transition-transform duration-300',
    animate && 'group-hover:scale-110',
    loading && 'animate-spin'
  );

  const content = (
    <>
      {/* Shimmer effect */}
      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && (
          <Icon className={cn(iconClasses, size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : size === 'xl' ? 'w-7 h-7' : 'w-5 h-5')} />
        )}
        
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="loading-bee" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
        
        {Icon && iconPosition === 'right' && (
          <Icon className={cn(iconClasses, size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : size === 'xl' ? 'w-7 h-7' : 'w-5 h-5')} />
        )}
      </div>

      {/* Bee trail effect for bee variant */}
      {variant === 'bee' && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs animate-fly-in">🐝</span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(baseClasses, 'group')}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(baseClasses, 'group')}
    >
      {content}
    </button>
  );
}