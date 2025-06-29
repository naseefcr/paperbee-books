import { useTranslations } from 'next-intl';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function Contact() {
  const t = useTranslations('contact');

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t('whatsapp'),
      value: '+91 85908 85155',
      href: generateWhatsAppLink("Hello! I'd like to know more about PAPERBEE BOOKS."),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Phone,
      title: t('phone'),
      value: '+91 85908 85155',
      href: 'tel:+918590885155',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: t('email'),
      value: 'info@paperbeebooks.com',
      href: 'mailto:info@paperbeebooks.com',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Reach out to us for book orders, inquiries, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card p-8 text-center hover:scale-105 transform transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {method.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose PAPERBEE BOOKS?</h3>
              <ul className="space-y-4">
                {[
                  'High-quality children&apos;s literature',
                  'Available in 10+ languages',
                  'Educational and entertaining content',
                  'Direct ordering via WhatsApp',
                  'Global shipping available',
                  'Dedicated customer support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-primary-500" />
                  <div>
                    <p className="font-medium text-gray-800">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-primary-500" />
                  <div>
                    <p className="font-medium text-gray-800">Saturday</p>
                    <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-primary-500" />
                  <div>
                    <p className="font-medium text-gray-800">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>WhatsApp is available 24/7!</strong> Send us a message anytime and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}