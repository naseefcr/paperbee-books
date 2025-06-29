import { useTranslations } from 'next-intl';
import { MessageCircle, Phone, Mail, Heart, Star, Sparkles } from 'lucide-react';
import LanguageBadge from '../ui/LanguageBadge';
import CTAButton from '../ui/CTAButton';

export default function Footer() {
  const t = useTranslations('footer');

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ar', name: 'Arabic', native: 'العربية' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'ja', name: 'Japanese', native: '日本語' },
    { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'ur', name: 'Urdu', native: 'اردو' },
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 85908 85155',
      href: 'https://wa.me/918590885155',
      color: 'text-nature-400 hover:text-nature-300',
      description: 'Quick orders & support'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 85908 85155',
      href: 'tel:+918590885155',
      color: 'text-cultural-400 hover:text-cultural-300',
      description: 'Voice support'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@paperbeebooks.com',
      href: 'mailto:info@paperbeebooks.com',
      color: 'text-reading-400 hover:text-reading-300',
      description: 'General inquiries'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating bees */}
      <div className="absolute top-10 right-20 opacity-30 animate-float animation-delay-1000">
        <span className="text-3xl">🐝</span>
      </div>
      <div className="absolute bottom-20 left-10 opacity-30 animate-float animation-delay-600">
        <span className="text-2xl">📚</span>
      </div>
      <div className="absolute top-32 left-1/4 opacity-20 animate-float animation-delay-800">
        <span className="text-xl">✨</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-honeycomb flex items-center justify-center shadow-honeycomb group-hover:scale-110 transition-all duration-500">
                <span className="text-white font-bold text-2xl animate-float">🐝</span>
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-4 h-4 text-accent-300 animate-sparkle" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold gradient-text">PAPERBEE</h1>
                <p className="text-sm text-primary-300 -mt-1">BOOKS 📚</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-reading-400" />
                <span>Child-Safe</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent-400" />
                <span>Quality</span>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-heading font-bold mb-6 text-primary-300">
              Languages 🌍
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang, index) => (
                <div 
                  key={lang.code}
                  className="animate-fly-in hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <LanguageBadge 
                    language={lang.code}
                    size="sm"
                    variant="default"
                    className="bg-gray-800/50 hover:bg-gray-700/50 border-gray-600"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-heading font-bold mb-6 text-primary-300">
              Get In Touch 📞
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-4 bg-gray-800/50 rounded-honeycomb border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gray-700/50 ${method.color} transition-colors`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-200 mb-1">{method.label}</h4>
                      <p className="text-sm text-gray-300 truncate">{method.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Order CTA */}
            <div className="bg-gradient-to-r from-gray-800/70 to-gray-700/70 rounded-2xl p-6 border border-gray-600">
              <h4 className="font-heading font-bold text-lg mb-2 gradient-text">
                Ready to Order? 🛒
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Start your order now through WhatsApp for quick and easy processing!
              </p>
              <a
                href="https://wa.me/918590885155?text=Hello! I'd like to place an order for PAPERBEE BOOKS."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center space-x-2 w-full md:w-auto py-3 px-6"
              >
                <MessageCircle size={20} />
                <span>Start Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">{t('copyright')}</p>
              <p className="text-gray-500 text-xs mt-1">
                Made with <Heart className="w-3 h-3 inline text-reading-400" /> for children worldwide
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Powered by</span>
              <div className="flex items-center gap-1">
                <span className="animate-bounce">🐝</span>
                <span className="font-medium text-primary-400">PaperBee Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-primary-500/20 to-transparent blur-3xl" />
    </footer>
  );
}