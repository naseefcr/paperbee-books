import { useTranslations } from 'next-intl';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">PAPERBEE</h1>
                <p className="text-xs text-gray-300">BOOKS</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <span>English</span>
              <span>العربية</span>
              <span>हिंदी</span>
              <span>日本語</span>
              <span>Bahasa Indonesia</span>
              <span>മലയാളം</span>
              <span>ಕನ್ನಡ</span>
              <span>தமிழ்</span>
              <span>اردو</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/919876543210"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={18} />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@paperbeebooks.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">info@paperbeebooks.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}