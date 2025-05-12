// components/Footer.tsx
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-paperbee-yellow rounded-full flex items-center justify-center">
                <span className="text-paperbee-blue font-bold text-xl">PB</span>
              </div>
              <span className="text-xl font-bold">PAPERBEE BOOKS</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing stories, creativity, and learning to children everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-paperbee-yellow transition">About Us</Link></li>
              <li><Link href="/books" className="hover:text-paperbee-yellow transition">Our Books</Link></li>
              <li><Link href="/contact" className="hover:text-paperbee-yellow transition">Contact</Link></li>
              <li><Link href="/join" className="hover:text-paperbee-yellow transition">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-paperbee-yellow" />
                <span className="text-sm">
                  Paperbee books, near Scout bhavan,
                  Anangoor Vidyanagar po,
                  Kasaragod, Kerala, India 671123
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-paperbee-yellow" />
                <a href="https://wa.me/918590885155" className="hover:text-paperbee-yellow transition">
                  8590885155
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-paperbee-yellow" />
                <a href="mailto:paperbeebook@gmail.com" className="hover:text-paperbee-yellow transition">
                  paperbeebook@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-paperbee-blue transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-paperbee-blue transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-paperbee-blue transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Paperbee Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer