// Google Analytics and tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return;

  // Create dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  // Initialize GA
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    anonymize_ip: true, // GDPR compliance
    cookie_flags: 'SameSite=None;Secure', // Cookie security
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_title: title || document.title,
    page_location: url,
    send_page_view: true,
  });
};

// Track custom events
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export const trackEvent = ({
  action,
  category,
  label,
  value,
  custom_parameters = {}
}: AnalyticsEvent) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    ...custom_parameters,
  });
};

// Predefined tracking functions for common events
export const trackWhatsAppClick = (source: string, action: string, bookTitle?: string) => {
  trackEvent({
    action: 'whatsapp_click',
    category: 'WhatsApp Business',
    label: action,
    custom_parameters: {
      source,
      book_title: bookTitle,
      contact_method: 'whatsapp',
    }
  });
};

export const trackBookView = (bookTitle: string, category: string, source: string) => {
  trackEvent({
    action: 'book_view',
    category: 'Book Engagement',
    label: bookTitle,
    custom_parameters: {
      book_category: category,
      source,
      content_type: 'book',
    }
  });
};

export const trackLanguageChange = (fromLanguage: string, toLanguage: string) => {
  trackEvent({
    action: 'language_change',
    category: 'User Interaction',
    label: `${fromLanguage}_to_${toLanguage}`,
    custom_parameters: {
      from_language: fromLanguage,
      to_language: toLanguage,
      interaction_type: 'language_switch',
    }
  });
};

export const trackFormSubmission = (formType: string, source: string) => {
  trackEvent({
    action: 'form_submit',
    category: 'Lead Generation',
    label: formType,
    custom_parameters: {
      form_type: formType,
      source,
      conversion_type: 'contact',
    }
  });
};

export const trackScrollDepth = (percentage: number, page: string) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'User Engagement',
    label: `${percentage}%`,
    value: percentage,
    custom_parameters: {
      page,
      engagement_type: 'scroll',
    }
  });
};

export const trackFileDownload = (fileName: string, fileType: string) => {
  trackEvent({
    action: 'file_download',
    category: 'Downloads',
    label: fileName,
    custom_parameters: {
      file_type: fileType,
      content_type: 'download',
    }
  });
};

export const trackSearchQuery = (query: string, resultsCount: number) => {
  trackEvent({
    action: 'search',
    category: 'Site Search',
    label: query,
    value: resultsCount,
    custom_parameters: {
      search_term: query,
      results_count: resultsCount,
    }
  });
};

export const trackCollaborationInquiry = (roleType: string, source: string) => {
  trackEvent({
    action: 'collaboration_inquiry',
    category: 'Business Development',
    label: roleType,
    custom_parameters: {
      role_type: roleType,
      source,
      inquiry_type: 'collaboration',
    }
  });
};

// E-commerce tracking for book orders
export const trackPurchaseIntent = (
  bookTitle: string, 
  price: string, 
  category: string,
  method: 'whatsapp' | 'form' | 'phone'
) => {
  trackEvent({
    action: 'purchase_intent',
    category: 'E-commerce',
    label: bookTitle,
    custom_parameters: {
      item_name: bookTitle,
      item_category: category,
      price: price,
      contact_method: method,
      conversion_type: 'purchase_intent',
    }
  });
};

// Performance tracking
export const trackPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Track basic performance metrics using native APIs
  try {
    // Track page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        trackEvent({
          action: 'page_load_time',
          category: 'Performance',
          label: 'load_time',
          value: Math.round(loadTime),
          custom_parameters: {
            metric_name: 'page_load_time',
            metric_value: loadTime,
          }
        });
      }
    });

    // Track FCP using Performance Observer if available
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              trackEvent({
                action: 'first_contentful_paint',
                category: 'Performance',
                label: 'FCP',
                value: Math.round(entry.startTime),
                custom_parameters: {
                  metric_name: 'first_contentful_paint',
                  metric_value: entry.startTime,
                }
              });
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        // Performance Observer not supported
      }
    }
  } catch (error) {
    console.warn('Performance tracking failed:', error);
  }
};

// User engagement tracking
export const trackUserEngagement = () => {
  if (typeof window === 'undefined') return;
  
  let scrollDepthTracked = new Set<number>();
  let timeOnPage = 0;
  const startTime = Date.now();
  
  // Track scroll depth
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    [25, 50, 75, 90].forEach(threshold => {
      if (scrollPercent >= threshold && !scrollDepthTracked.has(threshold)) {
        scrollDepthTracked.add(threshold);
        trackScrollDepth(threshold, window.location.pathname);
      }
    });
  };
  
  // Track time on page
  const handleBeforeUnload = () => {
    timeOnPage = Math.round((Date.now() - startTime) / 1000);
    
    trackEvent({
      action: 'time_on_page',
      category: 'User Engagement',
      label: window.location.pathname,
      value: timeOnPage,
      custom_parameters: {
        page: window.location.pathname,
        time_seconds: timeOnPage,
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('beforeunload', handleBeforeUnload);
  
  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
  trackEvent({
    action: 'javascript_error',
    category: 'Errors',
    label: error.message,
    custom_parameters: {
      error_message: error.message,
      error_stack: error.stack,
      error_info: errorInfo,
      page: window.location.pathname,
    }
  });
};

// GDPR compliance helpers
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics_consent') === 'true';
};

export const setAnalyticsConsent = (consent: boolean) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('analytics_consent', consent.toString());
  
  if (consent) {
    initializeAnalytics();
  } else {
    // Disable analytics
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied'
    });
  }
};