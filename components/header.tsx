"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCountriesOpen, setIsCountriesOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
    setIsMenuOpen(false)
    setIsCountriesOpen(false)
  }

  const countries = [
    { name: "South Korea", path: "/countries/south-korea" },
    { name: "Japan", path: "/countries/japan" },
    { name: "France", path: "/countries/france" },
    { name: "Germany", path: "/countries/germany" },
    { name: "Spain", path: "/countries/spain" },
    { name: "Cyprus", path: "/countries/cyprus" },
    { name: "Malta", path: "/countries/malta" },
    { name: "USA", path: "/countries/usa" },
    { name: "Canada", path: "/countries/canada" },
    { name: "United Kingdom", path: "/countries/uk" },
    { name: "Ireland", path: "/countries/ireland" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Ichi Hana Chitwan Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-sm leading-tight">
                Ichi Hana Chitwan
              </span>
              <span className="text-xs text-gray-600 leading-tight">
                Consultancy
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("/")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation("/team")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Our Team
            </button>
            <button
              onClick={() => handleNavigation("/services")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>

            {/* Countries Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCountriesOpen(!isCountriesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Countries
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isCountriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCountriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {countries.map((country) => (
                    <button
                      key={country.path}
                      onClick={() => handleNavigation(country.path)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {country.name}
                    </button>
                  ))}
                  <div className="border-t mt-2 pt-2">
                    <button
                      onClick={() => handleNavigation("/countries")}
                      className="block w-full text-left px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      View All Countries
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("/testimonials")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("/")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation("/team")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Our Team
              </button>
              <button
                onClick={() => handleNavigation("/services")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("/countries")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Countries
              </button>
              <button
                onClick={() => handleNavigation("/testimonials")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
