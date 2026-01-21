import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About MCIF</h3>
            <p className="text-sm text-gray-200">
              Munachi Collins Ikedum Foundation empowers transformative giving through community stewardship and demonstrates Christ's love through impactful philanthropy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-accent transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-accent transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>No 35 Old Refinery Road, Elelenwo, Port-Harcourt, Nigeria</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:info@munachicollinsfoundation.com" className="hover:text-accent transition-colors">
                  info@munachicollinsfoundation.com
                </a>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+234800000000" className="hover:text-accent transition-colors">
                  +234 800 000 0000
                </a>
              </li>
              <li className="text-gray-200 mt-2">
                <strong>Hours:</strong> Mon-Fri, 9AM - 5PM WAT
              </li>
            </ul>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="font-bold text-lg mb-4">Core Values</h3>
            <ul className="space-y-2 text-sm">
              <li>Stewardship</li>
              <li>Compassion</li>
              <li>Integrity</li>
              <li>Excellence</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8 text-center text-sm text-gray-200">
          <p>&copy; {new Date().getFullYear()} Munachi Collins Ikedum Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
