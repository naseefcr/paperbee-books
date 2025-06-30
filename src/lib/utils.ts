import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// WhatsApp Business Integration
export const WHATSAPP_BUSINESS = {
  phone: "+918590885155",
  businessName: "PAPERBEE BOOKS"
}

export interface WhatsAppAnalytics {
  action: 'catalog_view' | 'order_inquiry' | 'contact' | 'book_order' | 'collaboration' | 'general_inquiry'
  source: string
  bookTitle?: string
  category?: string
}

// Enhanced WhatsApp link generator with analytics
export function generateWhatsAppLink(
  message: string, 
  phoneNumber: string = WHATSAPP_BUSINESS.phone,
  analytics?: WhatsAppAnalytics
) {
  // Track analytics if provided
  if (analytics && typeof window !== 'undefined') {
    trackWhatsAppClick(analytics)
  }
  
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
}

// Pre-defined WhatsApp message templates
export const WHATSAPP_MESSAGES = {
  catalog: `Hello ${WHATSAPP_BUSINESS.businessName}! 📚

I'd like to explore your complete book catalog. Could you please share:
- Available books by category
- Age-appropriate recommendations
- Pricing and shipping information
- Language options

Looking forward to discovering amazing books for children!`,

  generalOrder: `Hello ${WHATSAPP_BUSINESS.businessName}! 🛒

I'm interested in ordering books from your collection. Could you help me with:
- Book recommendations based on age/interests
- Pricing and bundle offers
- Shipping details and timeline
- Payment options

Thank you!`,

  bookSpecific: (bookTitle: string, price: string, category: string) => 
    `Hello ${WHATSAPP_BUSINESS.businessName}! 📖

I'm interested in "${bookTitle}" from your ${category} collection.

Details:
- Book: ${bookTitle}
- Price: ${price}

Could you please provide:
- Availability status
- Shipping information
- Any bundle offers available
- Language options

Thank you!`,

  contact: `Hello ${WHATSAPP_BUSINESS.businessName}! 👋

I have some questions about your books and services. Could you please help me with more information?

Looking forward to hearing from you!`,

  collaboration: `Hello ${WHATSAPP_BUSINESS.businessName}! 🤝

I'm interested in collaborating with you as:
□ Author
□ Illustrator  
□ Educator
□ Publisher
□ Translator

Could you please share:
- Submission guidelines
- Partnership opportunities
- Creative collaboration process
- Contact details for submissions

Thank you for considering creative partnerships!`,

  businessInquiry: `Hello ${WHATSAPP_BUSINESS.businessName}! 💼

I'm reaching out regarding potential business collaboration:
- Bulk orders for schools/libraries
- Distribution partnership
- Educational institution collaboration
- Custom book development

Could you please connect me with your business development team?

Best regards!`
}

// Analytics tracking function
export function trackWhatsAppClick(analytics: WhatsAppAnalytics) {
  try {
    // Google Analytics 4 event tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'WhatsApp Business',
        event_label: analytics.action,
        custom_parameters: {
          source: analytics.source,
          book_title: analytics.bookTitle,
          category: analytics.category
        }
      })
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('WhatsApp Click Tracked:', analytics)
    }

    // Store in localStorage for conversion tracking
    const clickData = {
      timestamp: new Date().toISOString(),
      ...analytics
    }
    
    const existingClicks = JSON.parse(localStorage.getItem('whatsapp_clicks') || '[]')
    existingClicks.push(clickData)
    
    // Keep only last 50 clicks
    if (existingClicks.length > 50) {
      existingClicks.splice(0, existingClicks.length - 50)
    }
    
    localStorage.setItem('whatsapp_clicks', JSON.stringify(existingClicks))
  } catch (error) {
    console.warn('Analytics tracking failed:', error)
  }
}

// Convenience functions for common WhatsApp actions
export const whatsAppActions = {
  viewCatalog: (source: string) => generateWhatsAppLink(
    WHATSAPP_MESSAGES.catalog,
    WHATSAPP_BUSINESS.phone,
    { action: 'catalog_view', source }
  ),
  
  orderNow: (source: string) => generateWhatsAppLink(
    WHATSAPP_MESSAGES.generalOrder,
    WHATSAPP_BUSINESS.phone,
    { action: 'order_inquiry', source }
  ),
  
  contactUs: (source: string) => generateWhatsAppLink(
    WHATSAPP_MESSAGES.contact,
    WHATSAPP_BUSINESS.phone,
    { action: 'contact', source }
  ),
  
  orderBook: (bookTitle: string, price: string, category: string, source: string) => 
    generateWhatsAppLink(
      WHATSAPP_MESSAGES.bookSpecific(bookTitle, price, category),
      WHATSAPP_BUSINESS.phone,
      { action: 'book_order', source, bookTitle, category }
    ),
    
  collaborate: (source: string) => generateWhatsAppLink(
    WHATSAPP_MESSAGES.collaboration,
    WHATSAPP_BUSINESS.phone,
    { action: 'collaboration', source }
  ),
  
  businessInquiry: (source: string) => generateWhatsAppLink(
    WHATSAPP_MESSAGES.businessInquiry,
    WHATSAPP_BUSINESS.phone,
    { action: 'general_inquiry', source }
  )
}