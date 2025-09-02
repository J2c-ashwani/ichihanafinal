"use client"

import { useRouter } from "next/navigation"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Ichi Hana</div>
                <div className="text-xs text-gray-400">Chitwan Consultancy</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for international education. We guide students to achieve their study abroad dreams
              with expert counseling and comprehensive support.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/team")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/countries")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Countries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/testimonials")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/countries/south-korea")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  South Korea
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/countries/japan")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Japan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/countries/france")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  France
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/countries/germany")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Germany
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/countries/spain")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Spain
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/countries/usa")}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  USA
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>Bharatpur Oralo, Lions chowk</p>
                  <p>Chitwan, Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div className="text-sm text-gray-300">
                  <p>+977-056-511-394</p>
                  <p>+977-9855018394</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-300">Ichihana.chitwan2025@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Ichi Hana Chitwan Consultancy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => handleNavigation("/privacy-policy")}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/terms-of-service")}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavigation("/refund-cancellation")}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Refund & Cancellation
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
