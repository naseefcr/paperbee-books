// app/about/page.tsx
'use client'
import { motion } from 'framer-motion'
import { BookOpen, Globe, Users, Target, Heart, Award, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  const stats = [
    { icon: BookOpen, value: '28', label: 'Books Published' },
    { icon: Globe, value: '5', label: 'Languages' },
    { icon: Users, value: '10K+', label: 'Happy Readers' },
    { icon: Award, value: '15+', label: 'Awards Won' },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Child-Centric Approach',
      description: 'Every book is crafted with children\'s developmental needs and interests in mind.'
    },
    {
      icon: Globe,
      title: 'Cultural Diversity',
      description: 'We celebrate and preserve different cultures through multilingual publications.'
    },
    {
      icon: BookOpen,
      title: 'Quality Content',
      description: 'High-quality educational materials that make learning fun and effective.'
    },
    {
      icon: Target,
      title: 'Purposeful Learning',
      description: 'Each book serves a purpose in a child\'s educational and emotional development.'
    },
  ]


  return (
    <div className="min-h-screen bg-pageBackground">
      {/* Hero Section */}
      <section className="relative bg-headerNavigation text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Paperbee Books</h1>
            <p className="text-xl text-accentHighlight max-w-3xl mx-auto">
              Inspiring young minds, one book at a time. We&apos;re dedicated to nurturing the next 
              generation through reading and making learning accessible in every language.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accentHighlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-headerNavigation/10 text-headerNavigation mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-mainText mb-1">{stat.value}</div>
                <div className="text-secondaryText">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-pageBackground"> {/* Explicitly set pageBackground */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-mainText mb-6">Our Story</h2>
              <p className="text-lg text-secondaryText mb-8">
                PAPERBEE BOOKS is a global publishing company founded with a simple yet powerful vision: 
                to make quality children&apos;s literature accessible in every language. We believe that books 
                open doors to imagination, curiosity, and understanding.
              </p>
              <p className="text-lg text-secondaryText">
                Our journey began with the understanding that language should never be a barrier to learning. 
                Today, we publish vibrant children&apos;s literature and high-quality educational materials that 
                celebrate cultural diversity while promoting universal values of kindness, creativity, and wisdom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-accentHighlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-mainText mb-4">Our Vision</h3>
              <p className="text-secondaryText">
                To become a leading global publisher of multilingual children&apos;s books that spark 
                imagination, encourage learning, and celebrate cultural diversity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-mainText mb-4">Our Mission</h3>
              <ul className="space-y-2 text-secondaryText">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondaryButtonIcon rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Promote literacy and creativity through engaging content
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondaryButtonIcon rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Publish in multiple languages to reach children worldwide
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondaryButtonIcon rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Empower educators and parents with meaningful, effective learning tools
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-pageBackground"> {/* Explicitly set pageBackground */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-mainText mb-4">Our Values</h2>
            <p className="text-lg text-secondaryText max-w-2xl mx-auto">
              These core values guide everything we do at Paperbee Books
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondaryButtonIcon/20 rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-headerNavigation" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-mainText mb-2">{value.title}</h3>
                  <p className="text-secondaryText">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Publish */}
      <section className="py-16 bg-headerNavigation text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What We Publish</h2>
            <p className="text-accentHighlight text-lg">
              Diverse content for different learning needs and age groups
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" /> {/* Ensure icon is visible */}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-white">Storybooks</h3>
              <p className="text-accentHighlight">
                Folktales, original stories, fantasy, and moral tales for various age groups
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" /> {/* Ensure icon is visible */}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-white">Poetry Collections</h3>
              <p className="text-accentHighlight">
                Simple, rhythmic, and meaningful poems that children love
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" /> {/* Ensure icon is visible */}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-white">Educational Books</h3>
              <p className="text-accentHighlight">
                Language learning, bilingual books, activity books, and early learning resources
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-accentHighlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-mainText mb-4">Get in Touch</h2>
            <p className="text-lg text-secondaryText">
              Have questions or want to collaborate? We&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-headerNavigation/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-headerNavigation" />
              </div>
              <h3 className="font-semibold text-mainText mb-2">Visit Us</h3>
              <p className="text-secondaryText text-sm">
                Paperbee books, near Scout bhavan,<br />
                Anangoor Vidyanagar po,<br />
                Kasaragod, Kerala, India 671123
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-headerNavigation/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-headerNavigation" />
              </div>
              <h3 className="font-semibold text-mainText mb-2">Call Us</h3>
              <p className="text-secondaryText">
                <a href="https://wa.me/918590885155" className="hover:text-primaryAction transition">
                  8590885155
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-headerNavigation/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-headerNavigation" />
              </div>
              <h3 className="font-semibold text-mainText mb-2">Email Us</h3>
              <p className="text-secondaryText">
                <a href="mailto:paperbeebook@gmail.com" className="hover:text-primaryAction transition">
                  paperbeebook@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-primaryAction text-white px-8 py-3 rounded-lg hover:bg-rustOrange transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage