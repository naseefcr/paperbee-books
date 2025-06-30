'use client';

import { useState } from 'react';
import { BookOpen, Palette, GraduationCap, Users, MessageCircle, Send, CheckCircle, Sparkles, Lightbulb, Target } from 'lucide-react';
import { whatsAppActions } from '@/lib/utils';

export default function JoinUs() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const collaboratorRoles = [
    {
      id: 'author',
      title: 'Authors & Writers',
      icon: BookOpen,
      description: 'Craft magical stories that captivate young minds and teach valuable lessons',
      skills: ['Creative Writing', 'Storytelling', 'Character Development', 'Educational Content'],
      opportunities: ['Original Stories', 'Folktales Adaptation', 'Series Development', 'Poetry Collections'],
      color: 'from-reading-500 to-reading-600',
      bgColor: 'bg-reading-50',
      emoji: '✍️'
    },
    {
      id: 'illustrator',
      title: 'Illustrators & Artists',
      icon: Palette,
      description: 'Bring stories to life with vibrant illustrations that spark imagination',
      skills: ['Digital Art', 'Character Design', 'Book Illustration', 'Visual Storytelling'],
      opportunities: ['Book Covers', 'Interior Illustrations', 'Character Sheets', 'Educational Diagrams'],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
      emoji: '🎨'
    },
    {
      id: 'educator',
      title: 'Educators & Curriculum Experts',
      icon: GraduationCap,
      description: 'Design educational content that makes learning fun and effective',
      skills: ['Curriculum Design', 'Child Development', 'Educational Psychology', 'Language Learning'],
      opportunities: ['Learning Guides', 'Activity Books', 'Teacher Resources', 'Assessment Tools'],
      color: 'from-nature-500 to-nature-600',
      bgColor: 'bg-nature-50',
      emoji: '📚'
    },
    {
      id: 'translator',
      title: 'Translators & Language Experts',
      icon: Users,
      description: 'Bridge cultures by adapting content for different languages and regions',
      skills: ['Multilingual Proficiency', 'Cultural Adaptation', 'Localization', 'Editorial Review'],
      opportunities: ['Book Translation', 'Cultural Adaptation', 'Language Consultation', 'Editorial Review'],
      color: 'from-cultural-500 to-cultural-600',
      bgColor: 'bg-cultural-50',
      emoji: '🌍'
    }
  ];

  const submissionGuidelines = [
    {
      step: 1,
      title: 'Initial Contact',
      description: 'Reach out via WhatsApp with your portfolio and interest area',
      icon: MessageCircle,
      details: [
        'Brief introduction about yourself',
        'Your area of expertise',
        'Portfolio or sample work',
        'Preferred collaboration type'
      ]
    },
    {
      step: 2,
      title: 'Portfolio Review',
      description: 'Our team reviews your work and assesses fit with our mission',
      icon: CheckCircle,
      details: [
        'Quality assessment of submitted work',
        'Alignment with our educational values',
        'Cultural sensitivity evaluation',
        'Technical skill assessment'
      ]
    },
    {
      step: 3,
      title: 'Collaboration Discussion',
      description: 'We discuss project opportunities and collaboration terms',
      icon: Users,
      details: [
        'Project scope and timeline',
        'Compensation and royalties',
        'Creative control and guidelines',
        'Long-term partnership potential'
      ]
    },
    {
      step: 4,
      title: 'Project Assignment',
      description: 'Start working on your first project with our support team',
      icon: Target,
      details: [
        'Project brief and requirements',
        'Dedicated project manager',
        'Regular feedback and revisions',
        'Publication and promotion support'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Global Reach',
      description: 'Your work reaches families in 28+ countries worldwide',
      icon: '🌍',
      highlight: '28+ Countries'
    },
    {
      title: 'Fair Compensation',
      description: 'Competitive rates and royalty sharing for published works',
      icon: '💰',
      highlight: 'Fair Pay'
    },
    {
      title: 'Creative Freedom',
      description: 'Maintain your artistic vision while meeting educational goals',
      icon: '🎭',
      highlight: 'Your Vision'
    },
    {
      title: 'Professional Growth',
      description: 'Build your portfolio with published, high-quality children\'s books',
      icon: '📈',
      highlight: 'Grow Together'
    },
    {
      title: 'Impact & Purpose',
      description: 'Create meaningful content that educates and inspires children',
      icon: '💝',
      highlight: 'Make Impact'
    },
    {
      title: 'Ongoing Support',
      description: 'Dedicated editorial and marketing support throughout the process',
      icon: '🤝',
      highlight: 'Team Support'
    }
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(selectedRole === roleId ? null : roleId);
  };

  const handleJoinClick = (role?: string) => {
    const selectedRoleData = role ? collaboratorRoles.find(r => r.id === role) : null;
    const roleTitle = selectedRoleData ? selectedRoleData.title : 'Creative Professional';
    
    window.open(whatsAppActions.collaborate('join-us-section'), '_blank');
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-nature-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />
      
      {/* Floating collaboration elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float animation-delay-1000">
        <span className="text-4xl">✨</span>
      </div>
      <div className="absolute top-60 right-20 opacity-30 animate-float animation-delay-600">
        <span className="text-3xl">🎨</span>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float animation-delay-800">
        <span className="text-2xl">📝</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fly-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text text-center">
                Join Our Creative Family
              </h2>
              <Sparkles className="absolute -top-2 -right-4 text-accent-400 animate-sparkle" size={24} />
              <Sparkles className="absolute -bottom-2 -left-4 text-primary-400 animate-sparkle animation-delay-400" size={20} />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
            Be part of creating magical reading experiences for children worldwide. 
            <span className="gradient-text font-bold"> Your creativity can inspire the next generation</span>.
          </p>
        </div>

        {/* Collaborator Roles */}
        <div className="mb-20 animate-fly-in animation-delay-400">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            How Can You Contribute? 🌟
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {collaboratorRoles.map((role, index) => (
              <div
                key={role.id}
                className={`card p-8 cursor-pointer transition-all duration-300 hover:scale-105 animate-fly-in ${
                  selectedRole === role.id ? 'ring-2 ring-primary-500 shadow-honeycomb' : ''
                }`}
                style={{ animationDelay: `${500 + index * 150}ms` }}
                onClick={() => handleRoleSelect(role.id)}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-honeycomb flex items-center justify-center shadow-bee flex-shrink-0`}>
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                      {role.title}
                      <span className="text-2xl">{role.emoji}</span>
                    </h4>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                </div>

                {selectedRole === role.id && (
                  <div className={`${role.bgColor} rounded-2xl p-6 mt-6 animate-fly-in`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Required Skills:</h5>
                        <ul className="space-y-2">
                          {role.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-nature-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Opportunities:</h5>
                        <ul className="space-y-2">
                          {role.opportunities.map((opportunity, oppIndex) => (
                            <li key={oppIndex} className="flex items-center gap-2">
                              <Lightbulb className="w-4 h-4 text-accent-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{opportunity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleJoinClick(role.id)}
                      className="w-full mt-6 btn-whatsapp py-3 px-6 text-base font-semibold flex items-center justify-center space-x-3 hover:scale-105 transition-transform duration-300"
                    >
                      <MessageCircle size={20} />
                      <span>Apply for {role.title}</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20 animate-fly-in animation-delay-600">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Why Join PAPERBEE BOOKS? 🎯
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card p-6 text-center hover-lift animate-fly-in"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-honeycomb flex items-center justify-center">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{benefit.description}</p>
                <div className="text-xs font-bold text-primary-600 bg-primary-100 rounded-full px-3 py-1 inline-block">
                  {benefit.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="mb-20 animate-fly-in animation-delay-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            How to Get Started 🚀
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full hidden md:block" />
              
              <div className="space-y-8">
                {submissionGuidelines.map((guideline, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 animate-fly-in"
                    style={{ animationDelay: `${900 + index * 150}ms` }}
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-honeycomb shadow-bee flex items-center justify-center relative z-10">
                      <guideline.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    
                    {/* Step content */}
                    <div className="card flex-1 p-6 hover-lift">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-800">{guideline.title}</h4>
                        <span className="text-2xl font-bold text-primary-600 bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                          {guideline.step}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{guideline.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {guideline.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-nature-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fly-in animation-delay-1000">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-6xl">🌟</span>
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <span className="text-4xl">🎨</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
                Ready to Create Magic Together? ✨
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our growing community of creative professionals who are passionate about 
                children's education and storytelling. Let's inspire young minds together!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  onClick={() => handleJoinClick()}
                  className="btn-whatsapp inline-flex items-center justify-center space-x-3 min-w-64 text-lg py-4 px-8 hover:scale-105"
                >
                  <MessageCircle size={24} />
                  <span>Start Your Journey</span>
                </button>
                
                <a
                  href="#contact"
                  className="btn-outline inline-flex items-center justify-center min-w-48 text-lg py-4 px-8 hover:scale-105"
                >
                  Learn More
                </a>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="bg-white/60 rounded-lg p-4">
                  <Users className="w-6 h-6 mx-auto mb-2 text-cultural-500" />
                  <div className="font-bold text-gray-800">Active Community</div>
                  <div>100+ creative professionals</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <BookOpen className="w-6 h-6 mx-auto mb-2 text-reading-500" />
                  <div className="font-bold text-gray-800">Published Works</div>
                  <div>65+ books and growing</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <Target className="w-6 h-6 mx-auto mb-2 text-nature-500" />
                  <div className="font-bold text-gray-800">Global Impact</div>
                  <div>12,500+ young readers</div>
                </div>
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