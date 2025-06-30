'use client';

import { useEffect, useState } from 'react';
import { 
  initializeAnalytics, 
  trackPerformanceMetrics, 
  trackUserEngagement,
  trackError,
  hasAnalyticsConsent 
} from '@/lib/analytics';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Initialize analytics if consent is given
    if (hasAnalyticsConsent()) {
      initializeAnalytics();
      
      // Track performance metrics
      trackPerformanceMetrics();
      
      // Track user engagement
      const cleanup = trackUserEngagement();
      
      // Global error handler
      const handleError = (event: ErrorEvent) => {
        trackError(new Error(event.message), {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        });
      };
      
      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        trackError(new Error('Unhandled Promise Rejection'), {
          reason: event.reason
        });
      };
      
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);
      
      return () => {
        cleanup?.();
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }
  }, []);

  return null; // This component doesn't render anything
}

// Cookie consent component
export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(true);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('analytics_consent');
    if (consent !== null) {
      setShowConsent(false);
      setHasConsent(consent === 'true');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('analytics_consent', 'true');
    setHasConsent(true);
    setShowConsent(false);
    initializeAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('analytics_consent', 'false');
    setHasConsent(false);
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-primary-200 shadow-lg p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-2">Cookie Consent</h3>
            <p className="text-sm text-gray-600">
              We use cookies and analytics to improve your experience and understand how our website is used. 
              Your privacy is important to us.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}