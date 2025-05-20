// components/Footer.tsx
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-headerNavigation text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-secondaryButtonIcon rounded-full flex items-center justify-center">
                <span className="text-headerNavigation font-bold text-xl">PB</span>
              </div>
              <span className="text-xl font-bold text-white">PAPERBEE BOOKS</span> {/* Changed from implicit to explicit text-white for clarity */}
            </div>
            <p className="text-accentHighlight text-sm">
              Bringing stories, creativity, and learning to children everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3> {/* Changed from implicit to explicit text-white */}
            <ul className="space-y-2 text-accentHighlight">
              <li><Link href="/about" className="hover:text-secondaryButtonIcon transition">About Us</Link></li>
              <li><Link href="/books" className="hover:text-secondaryButtonIcon transition">Our Books</Link></li>
              <li><Link href="/contact" className="hover:text-secondaryButtonIcon transition">Contact</Link></li>
              <li><Link href="/join" className="hover:text-secondaryButtonIcon transition">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3> {/* Changed from implicit to explicit text-white */}
            <ul className="space-y-2 text-accentHighlight">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-secondaryButtonIcon" />
                <span className="text-sm">
                  Paperbee books, near Scout bhavan,
                  Anangoor Vidyanagar po,
                  Kasaragod, Kerala, India 671123
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-secondaryButtonIcon" />
                <a href="https://wa.me/918590885155" className="hover:text-secondaryButtonIcon transition">
                  8590885155
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-secondaryButtonIcon" />
                <a href="mailto:paperbeebook@gmail.com" className="hover:text-secondaryButtonIcon transition">
                  paperbeebook@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Follow Us</h3> {/* Changed from implicit to explicit text-white */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-mainText rounded-full hover:bg-secondaryButtonIcon transition"> {/* bg-mainText as a darker contrast to headerNavigation */}
                <Facebook className="h-5 w-5 text-white" /> {/* Ensure icon is visible */}
              </a>
              <a href="#" className="p-2 bg-mainText rounded-full hover:bg-secondaryButtonIcon transition">
                <Instagram className="h-5 w-5 text-white" /> {/* Ensure icon is visible */}
              </a>
              <a href="#" className="p-2 bg-mainText rounded-full hover:bg-secondaryButtonIcon transition">
                <Youtube className="h-5 w-5 text-white" /> {/* Ensure icon is visible */}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-mainText text-center text-accentHighlight text-sm"> {/* border-mainText as a contrast to headerNavigation */}
          <p>&copy; 2025 Paperbee Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer