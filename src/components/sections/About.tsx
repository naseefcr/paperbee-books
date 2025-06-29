import { useTranslations } from 'next-intl';
import { Heart, Globe, Users, BookOpen } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  const features = [
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'Dedicated to creating magical reading experiences'
    },
    {
      icon: Globe,
      title: 'Multi-lingual',
      description: 'Books available in 10+ languages worldwide'
    },
    {
      icon: Users,
      title: 'Child-Focused',
      description: 'Every story designed with young readers in mind'
    },
    {
      icon: BookOpen,
      title: 'Quality Content',
      description: 'Educational and entertaining stories that inspire'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {t('description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('mission')}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl">
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('vision')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 text-center hover:scale-105 transform transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}