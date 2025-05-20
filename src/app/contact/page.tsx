// app/contact/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  messageType: 'general' | 'author' | 'collaboration' | 'feedback'
}

const ContactPage = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    messageType: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      messageType: 'general',
    })
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Paperbee books, near Scout bhavan, Anangoor Vidyanagar po, Kasaragod, Kerala, India 671123',
      color: 'text-paperbee-blue',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '8590885155',
      color: 'text-paperbee-green',
      link: 'https://wa.me/918590885155',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'paperbeebook@gmail.com',
      color: 'text-paperbee-orange',
      link: 'mailto:paperbeebook@gmail.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      color: 'text-purple-600',
    },
  ]

  const messageTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'author', label: 'For Authors/Illustrators' },
    { value: 'collaboration', label: 'Business Collaboration' },
    { value: 'feedback', label: 'Feedback/Review' },
  ]

  return (
    <div className="min-h-screen bg-pageBackground">
      {/* Hero Section */}
      <section className="bg-headerNavigation text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-accentHighlight text-lg max-w-2xl mx-auto">
              Have questions, ideas, or want to collaborate? We&apos;d love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-pageBackground rounded-lg p-6 shadow-sm"
              >
                <div className={`w-12 h-12 ${
                  info.title === 'Visit Us' ? 'text-primaryAction' :
                  info.title === 'Call Us' ? 'text-secondaryButtonIcon' :
                  info.title === 'Email Us' ? 'text-primaryAction' :
                  'text-headerNavigation' // Default for Business Hours
                } mb-4`}>
                  <info.icon className="h-full w-full" />
                </div>
                <h3 className="font-semibold text-mainText mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-secondaryText hover:text-primaryAction transition">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-secondaryText">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-mainText mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondaryText mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Message Type
                  </label>
                  <select
                    name="messageType"
                    value={form.messageType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  >
                    {messageTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondaryText mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryAction text-mainText bg-pageBackground"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primaryAction text-white py-3 rounded-lg hover:bg-rustOrange transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                  >
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Map and Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-pageBackground rounded-lg shadow-sm overflow-hidden h-80">
                <div className="w-full h-full bg-accentHighlight flex items-center justify-center text-secondaryText">
                  <p>Google Maps Integration Here</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-pageBackground rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-mainText mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a href="https://wa.me/918590885155" className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Join Us */}
              <div className="bg-secondaryButtonIcon/10 rounded-lg p-6">
                <h3 className="font-semibold text-mainText mb-2">Join Our Team</h3>
                <p className="text-secondaryText mb-4">
                  Are you an author, illustrator, or educator? We&apos;d love to hear from you!
                </p>
                <a 
                  href="/join"
                  className="inline-flex items-center text-primaryAction hover:text-rustOrange transition"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage