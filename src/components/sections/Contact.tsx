'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Mail, Phone, MessageCircle, Clock, Globe, Send, Heart, Sparkles } from 'lucide-react';
import { whatsAppActions } from '@/lib/utils';

interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href?: string;
  description: string;
  color: string;
  subValue?: string;
}

export default function Contact() {
  const t = useTranslations('contact');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `Hello PAPERBEE BOOKS! 📧

New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Please respond at your earliest convenience. Thank you!`;

    // Open WhatsApp with pre-filled message
    window.open(whatsAppActions.contactUs('contact-form'), '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'paperbeebook@gmail.com',
      href: 'mailto:paperbeebook@gmail.com',
      description: 'Get in touch via email',
      color: 'from-reading-500 to-reading-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Business',
      value: '+91 85908 85155',
      href: whatsAppActions.contactUs('contact-section'),
      description: 'Instant messaging & support',
      color: 'from-nature-500 to-nature-600'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Near Scout Bhavan, Anangoor Vidyanagar PO',
      subValue: 'Kasaragod, Kerala, India 671123',
      description: 'Visit our office',
      color: 'from-cultural-500 to-cultural-600',
      href: undefined
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday - Saturday: 9:00 AM - 6:00 PM',
      subValue: 'Sunday: 10:00 AM - 4:00 PM',
      description: 'When we&apos;re available',
      color: 'from-accent-500 to-accent-600',
      href: undefined
    }
  ];

  const quickActions = [
    {
      title: 'View Our Catalog',
      description: 'Browse our complete collection of books',
      icon: '📚',
      action: () => window.open(whatsAppActions.viewCatalog('contact-quick-actions'), '_blank'),
      color: 'bg-gradient-to-r from-reading-500 to-reading-600'
    },
    {
      title: 'Place an Order',
      description: 'Get help with book orders and recommendations',
      icon: '🛒',
      action: () => window.open(whatsAppActions.orderNow('contact-quick-actions'), '_blank'),
      color: 'bg-gradient-to-r from-nature-500 to-nature-600'
    },
    {
      title: 'Business Inquiry',
      description: 'Partnership and bulk order opportunities',
      icon: '💼',
      action: () => window.open(whatsAppActions.businessInquiry('contact-quick-actions'), '_blank'),
      color: 'bg-gradient-to-r from-cultural-500 to-cultural-600'
    },
    {
      title: 'Collaboration',
      description: 'Join us as author, illustrator, or educator',
      icon: '🤝',
      action: () => window.open(whatsAppActions.collaborate('contact-quick-actions'), '_blank'),
      color: 'bg-gradient-to-r from-accent-500 to-accent-600'
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating contact elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">📞</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">✉️</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">📍</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Get In Touch
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            We&apos;d love to hear from you! Whether you&apos;re a parent, educator, or creative professional, 
            <span className="gradient-text font-bold"> let&apos;s connect and create magic together</span>.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 animate-fly-in animation-delay-400">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="card text-center hover-lift animate-fly-in"
              style={{ animationDelay: `${500 + index * 150}ms` }}
            >
              <div className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-honeycomb flex items-center justify-center shadow-bee`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-bold text-gray-800 mb-2">{info.label}</h3>
                <div className="text-sm text-gray-600 mb-2">{info.description}</div>
                
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary-600 hover:text-primary-700 font-medium hover:underline transition-colors"
                  >
                    <div>{info.value}</div>
                    {info.subValue && <div className="text-xs text-gray-500 mt-1">{info.subValue}</div>}
                  </a>
                ) : (
                  <div className="text-gray-700">
                    <div>{info.value}</div>
                    {info.subValue && <div className="text-xs text-gray-500 mt-1">{info.subValue}</div>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-16 animate-fly-in animation-delay-600">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Quick Actions 🚀
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="card p-6 text-center hover-lift transition-all duration-300 hover:scale-105 animate-fly-in"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${action.color} rounded-honeycomb flex items-center justify-center shadow-bee`}>
                  <span className="text-2xl">{action.icon}</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fly-in animation-delay-800">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-honeycomb">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-honeycomb flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-800">Send a Message</h3>
                <p className="text-gray-600 text-sm">We&apos;ll get back to you within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="Book Order">Book Order</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Business Partnership">Business Partnership</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-whatsapp py-4 px-6 text-lg font-semibold flex items-center justify-center space-x-3 hover:scale-105 transition-transform duration-300"
              >
                <MessageCircle size={24} />
                <span>Send via WhatsApp</span>
              </button>

              <p className="text-xs text-gray-500 text-center">
                Your message will be sent via WhatsApp for faster response. We typically reply within 2-4 hours during business hours.
              </p>
            </form>
          </div>

          {/* Business Information */}
          <div className="space-y-6">
            {/* Company Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-honeycomb">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-honeycomb flex items-center justify-center shadow-bee">
                  <span className="text-white font-bold text-2xl">🐝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold gradient-text">PAPERBEE BOOKS</h3>
                  <p className="text-gray-600">Inspiring young minds through storytelling</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-cultural-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Global Presence</div>
                    <div className="text-sm text-gray-600">Serving families in 28+ countries worldwide</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-reading-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Trusted by Families</div>
                    <div className="text-sm text-gray-600">12,500+ happy readers and growing</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-nature-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Multilingual Support</div>
                    <div className="text-sm text-gray-600">Available in 9 languages</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-honeycomb">
              <h4 className="text-xl font-heading font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cultural-500" />
                Our Location
              </h4>
              
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cultural-500 mx-auto mb-2" />
                  <div className="text-gray-600 font-medium">Kasaragod, Kerala</div>
                  <div className="text-sm text-gray-500">Interactive map coming soon</div>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 space-y-1">
                <div className="font-medium">Near Scout Bhavan</div>
                <div>Anangoor Vidyanagar PO</div>
                <div>Kasaragod, Kerala, India 671123</div>
              </div>
              
              <button 
                onClick={() => window.open('https://maps.google.com/?q=Kasaragod,Kerala,India', '_blank')}
                className="mt-4 w-full py-3 px-4 bg-cultural-100 hover:bg-cultural-200 text-cultural-700 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>View on Google Maps</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">🌟</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                Ready to Start Your Journey? 📚
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of families who trust PAPERBEE BOOKS for quality children&apos;s literature. 
                Let&apos;s create beautiful reading experiences together!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsAppActions.viewCatalog('contact-bottom-cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 text-lg py-4 px-8 hover:scale-105"
                >
                  <MessageCircle size={24} />
                  <span>View Our Catalog</span>
                </a>
                
                <a
                  href={whatsAppActions.orderNow('contact-bottom-cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center text-lg py-4 px-8 hover:scale-105"
                >
                  Start Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}