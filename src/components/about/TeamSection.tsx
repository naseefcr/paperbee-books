'use client';

import { Heart, Globe, BookOpen, Palette, Users, Star, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function TeamSection() {
  const teamValues = [
    {
      title: 'Passion for Education',
      description: 'Every team member is deeply committed to creating educational content that makes a difference.',
      icon: BookOpen,
      emoji: '📚',
      color: 'from-reading-400 to-reading-500'
    },
    {
      title: 'Cultural Sensitivity',
      description: 'We respect and celebrate all cultures, ensuring authentic representation in every story.',
      icon: Globe,
      emoji: '🌍',
      color: 'from-cultural-400 to-cultural-500'
    },
    {
      title: 'Creative Excellence',
      description: 'Our artists and writers bring years of experience in children\'s literature and illustration.',
      icon: Palette,
      emoji: '🎨',
      color: 'from-accent-400 to-accent-500'
    },
    {
      title: 'Child-Centered Approach',
      description: 'Everything we do is focused on what\'s best for children\'s development and happiness.',
      icon: Heart,
      emoji: '💝',
      color: 'from-nature-400 to-nature-500'
    }
  ];

  const departments = [
    {
      name: 'Editorial Team',
      description: 'Experienced editors and writers who craft engaging, educational stories.',
      icon: '✍️',
      count: '8+ Members',
      specialties: ['Story Development', 'Educational Content', 'Cultural Research', 'Language Adaptation']
    },
    {
      name: 'Illustration Team',
      description: 'Talented artists who bring stories to life with beautiful, child-friendly illustrations.',
      icon: '🎨',
      count: '6+ Artists',
      specialties: ['Character Design', 'Cultural Art', 'Child Psychology', 'Digital Illustration']
    },
    {
      name: 'Cultural Advisors',
      description: 'Native speakers and cultural experts who ensure authenticity and respect.',
      icon: '🌍',
      count: '15+ Advisors',
      specialties: ['Language Accuracy', 'Cultural Authenticity', 'Traditional Stories', 'Local Customs']
    },
    {
      name: 'Education Specialists',
      description: 'Child development experts who review content for educational value.',
      icon: '🎓',
      count: '5+ Specialists',
      specialties: ['Child Psychology', 'Learning Theory', 'Age Appropriateness', 'Skill Development']
    }
  ];

  const achievements = [
    {
      metric: '10,000+',
      label: 'Children Reached',
      description: 'Happy young readers worldwide',
      icon: '👶',
      color: 'text-reading-500'
    },
    {
      metric: '25+',
      label: 'Countries Served',
      description: 'Global distribution network',
      icon: '🗺️',
      color: 'text-cultural-500'
    },
    {
      metric: '50+',
      label: 'Books Published',
      description: 'Unique titles and counting',
      icon: '📖',
      color: 'text-nature-500'
    },
    {
      metric: '9',
      label: 'Languages',
      description: 'Multilingual content',
      icon: '🗣️',
      color: 'text-accent-500'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-nature-50 via-white to-reading-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating team elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">👥</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">💼</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">⭐</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Our Amazing Team
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Behind every PAPERBEE BOOKS story is a 
            <span className="gradient-text font-bold"> passionate team</span> of educators, artists, and cultural experts dedicated to creating 
            <span className="gradient-text font-bold"> magical reading experiences</span>.
          </p>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {teamValues.map((value, index) => (
            <div
              key={index}
              className="card group hover-lift animate-fly-in"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`
                    w-16 h-16 rounded-honeycomb bg-gradient-to-br ${value.color}
                    flex items-center justify-center shadow-bee
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                  `}>
                    <span className="text-2xl">{value.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Departments */}
        <div className="mb-20 animate-fly-in animation-delay-600">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Expert Departments 🏢
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="card hover-lift animate-fly-in"
                style={{ animationDelay: `${700 + index * 150}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-honeycomb flex items-center justify-center">
                      <span className="text-3xl">{dept.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{dept.name}</h4>
                      <p className="text-primary-600 font-medium">{dept.count}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {dept.description}
                  </p>
                  
                  <div>
                    <h5 className="font-bold text-gray-700 mb-3">Specialties:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {dept.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full" />
                          <span className="text-sm text-gray-600">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Achievements */}
        <div className="mb-16 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Our Collective Impact 🎯
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center animate-fly-in"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-honeycomb flex items-center justify-center shadow-bee hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{achievement.icon}</span>
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{achievement.metric}</div>
                <div className="text-lg font-medium text-gray-800 mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Mission */}
        <div className="mb-16 animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-nature-50 to-reading-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <Users className="w-16 h-16 text-nature-400" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Heart className="w-12 h-12 text-reading-400" />
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                United by One Mission 🎯
              </h3>
              
              <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
                <p className="mb-6">
                  Our diverse team comes from different backgrounds, cultures, and specialties, but we&apos;re united by a single, powerful mission: to create books that help children around the world learn, grow, and celebrate the beautiful diversity of our planet.
                </p>
                
                <p className="text-xl font-medium text-primary-700 italic mb-6">
                  &ldquo;Every day, we wake up knowing that the work we do today will help shape the minds that will change tomorrow.&rdquo;
                </p>
                
                <p>
                  From our writers who craft each word with care, to our artists who bring characters to life, to our cultural advisors who ensure authenticity—every team member plays a crucial role in making PAPERBEE BOOKS the trusted name it is today.
                </p>
              </div>

              {/* Team stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/60 rounded-lg p-4">
                  <Star className="w-8 h-8 mx-auto mb-2 text-accent-500" />
                  <div className="text-2xl font-bold text-gray-800">30+</div>
                  <div className="text-sm text-gray-600">Team Members Worldwide</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-cultural-500" />
                  <div className="text-2xl font-bold text-gray-800">15</div>
                  <div className="text-sm text-gray-600">Countries Represented</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-reading-500" />
                  <div className="text-2xl font-bold text-gray-800">100+</div>
                  <div className="text-sm text-gray-600">Years Combined Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Mission */}
        <div className="text-center animate-fly-in animation-delay-1200">
          <div className="card max-w-3xl mx-auto p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-primary-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">🤝</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 gradient-text">
                Want to Join Our Mission? ✨
              </h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you&apos;re a parent, educator, or simply someone who believes in the power of stories, we&apos;d love to hear from you. Together, we can continue spreading the joy of reading to children everywhere.
              </p>

              <a
                href={generateWhatsAppLink("Hello! I'm interested in learning more about PAPERBEE BOOKS and how I can be part of your mission to inspire young minds through books.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center space-x-3 py-4 px-8 hover:scale-105"
              >
                <Heart size={24} />
                <span>Connect With Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}