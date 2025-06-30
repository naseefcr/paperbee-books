'use client';

import { MessageCircle, ShoppingCart, BookOpen, Users } from 'lucide-react';
import { whatsAppActions } from '@/lib/utils';

interface WhatsAppCTAProps {
  variant?: 'catalog' | 'order' | 'contact' | 'collaborate';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  source: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppCTA({ 
  variant = 'contact', 
  size = 'md', 
  text, 
  source,
  className = '',
  children 
}: WhatsAppCTAProps) {
  const variants = {
    catalog: {
      icon: BookOpen,
      defaultText: 'View Our Catalog',
      action: () => window.open(whatsAppActions.viewCatalog(source), '_blank')
    },
    order: {
      icon: ShoppingCart,
      defaultText: 'Order Now',
      action: () => window.open(whatsAppActions.orderNow(source), '_blank')
    },
    contact: {
      icon: MessageCircle,
      defaultText: 'Contact Us',
      action: () => window.open(whatsAppActions.contactUs(source), '_blank')
    },
    collaborate: {
      icon: Users,
      defaultText: 'Join Us',
      action: () => window.open(whatsAppActions.collaborate(source), '_blank')
    }
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const currentVariant = variants[variant];
  const Icon = currentVariant.icon;
  const displayText = text || currentVariant.defaultText;

  return (
    <button
      onClick={currentVariant.action}
      className={`
        btn-whatsapp 
        inline-flex items-center justify-center space-x-3 
        font-semibold transition-all duration-300 hover:scale-105
        ${sizes[size]}
        ${className}
      `}
    >
      <Icon size={iconSizes[size]} />
      <span>{displayText}</span>
      {children}
    </button>
  );
}

// Preset components for common use cases
export function CatalogCTA({ source, className = '', size = 'md', text }: { source: string; className?: string; size?: 'sm' | 'md' | 'lg'; text?: string }) {
  return (
    <WhatsAppCTA 
      variant="catalog" 
      source={source} 
      className={className}
      size={size}
      text={text}
    />
  );
}

export function OrderCTA({ source, className = '', size = 'md' }: { source: string; className?: string; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <WhatsAppCTA 
      variant="order" 
      source={source} 
      className={className}
      size={size}
    />
  );
}

export function ContactCTA({ source, className = '', size = 'md' }: { source: string; className?: string; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <WhatsAppCTA 
      variant="contact" 
      source={source} 
      className={className}
      size={size}
    />
  );
}

export function CollaborateCTA({ source, className = '', size = 'md' }: { source: string; className?: string; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <WhatsAppCTA 
      variant="collaborate" 
      source={source} 
      className={className}
      size={size}
    />
  );
}