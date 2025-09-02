"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Globe, Users, Award, CheckCircle, ArrowRight, Shield, Star } from "lucide-react"

export default function HomePage() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/30">
                🏆 Nepal's Trusted Study Abroad Partner
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Your Gateway to
                <span className="text-yellow-300 block">Global Education</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-white/90">
                Transform your dreams into reality with our expert guidance. We've helped over 2,000+ students secure
                admissions in top universities worldwide with 98% visa success rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
                  onClick={() => handleNavigation("/contact")}
                >
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
                  onClick={() => handleNavigation("/contact")}
                >
                  Book Free Consultation
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">2000+</div>
                  <div className="text-sm text-white/80">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">98%</div>
                  <div className="text-sm text-white/80">Visa Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">15+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Study Abroad?</h3>
                  <p className="text-white/90 mb-6">
                    Join thousands of successful students who achieved their dreams with our expert guidance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-300 mr-3" />
                      <span>Free Initial Consultation</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-300 mr-3" />
                      <span>Expert University Selection</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-300 mr-3" />
                      <span>98% Visa Success Rate</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-300 mr-3" />
                      <span>End-to-End Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Students Worldwide</h2>
            <p className="text-gray-600">
              Our official registrations and partnerships ensure you get the best guidance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-2 text-blue-600" />
              <p className="text-sm font-medium">Companies Act Registered</p>
              <p className="text-xs text-gray-500">2063 (2006 A.D.)</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-2 text-green-600" />
              <p className="text-sm font-medium">MOFA Registered</p>
              <p className="text-xs text-gray-500">Ministry of Foreign Affairs</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 mx-auto mb-2 text-purple-600" />
              <p className="text-sm font-medium">Global Partners</p>
              <p className="text-xs text-gray-500">500+ Universities</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-2 text-orange-600" />
              <p className="text-sm font-medium">Expert Team</p>
              <p className="text-xs text-gray-500">Certified Counselors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ichi Hana Chitwan Consultancy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive study abroad solutions with personalized guidance for every student
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our certified counselors with 10+ years experience guide you through every step of your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">98% Success Rate</h3>
                <p className="text-gray-600">
                  Proven track record with highest visa approval rates and successful university placements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Network</h3>
                <p className="text-gray-600">
                  Direct partnerships with 500+ universities across 15+ countries worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="mr-4 bg-transparent"
              onClick={() => handleNavigation("/about")}
            >
              Learn More About Us
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => handleNavigation("/services")}>
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Study Destinations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore world-class education opportunities across Asia, Europe, and North America
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* South Korea */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">🇰🇷</div>
                  <h3 className="text-2xl font-bold">South Korea</h3>
                  <p className="text-sm opacity-90">Technology Hub</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tuition (per year):</span>
                    <span className="font-semibold">₩3M - ₩12M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-semibold">₩800K - ₩1.2M/month</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Experience cutting-edge technology and rich cultural heritage in Asia's innovation powerhouse.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleNavigation("/countries/south-korea")}
                >
                  Explore South Korea
                </Button>
              </CardContent>
            </Card>

            {/* Japan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-600 to-white flex items-center justify-center">
                <div className="text-center text-red-600">
                  <div className="text-4xl font-bold mb-2">🇯🇵</div>
                  <h3 className="text-2xl font-bold">Japan</h3>
                  <p className="text-sm opacity-90">Excellence & Tradition</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tuition (per year):</span>
                    <span className="font-semibold">¥500K - ¥1.5M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-semibold">¥80K - ¥120K/month</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Combine academic excellence with cultural immersion in the land of the rising sun.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleNavigation("/countries/japan")}
                >
                  Explore Japan
                </Button>
              </CardContent>
            </Card>

            {/* France */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">🇫🇷</div>
                  <h3 className="text-2xl font-bold">France</h3>
                  <p className="text-sm opacity-90">Excellence in Education</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tuition (per year):</span>
                    <span className="font-semibold">€170 - €20,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-semibold">€800 - €1,200/month</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Study in the heart of Europe with affordable public education and rich cultural experiences.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleNavigation("/countries/france")}
                >
                  Explore France
                </Button>
              </CardContent>
            </Card>

            {/* Germany */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-black to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">🇩🇪</div>
                  <h3 className="text-2xl font-bold">Germany</h3>
                  <p className="text-sm opacity-90">Engineering Excellence</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tuition (per year):</span>
                    <span className="font-semibold">€0 - €20,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-semibold">€800 - €1,200/month</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Access world-class education with minimal tuition fees in Europe's economic powerhouse.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleNavigation("/countries/germany")}
                >
                  Explore Germany
                </Button>
              </CardContent>
            </Card>

            {/* Spain */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">🇪🇸</div>
                  <h3 className="text-2xl font-bold">Spain</h3>
                  <p className="text-sm opacity-90">Culture & Innovation</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tuition (per year):</span>
                    <span className="font-semibold">€750 - €18,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-semibold">€600 - €1,000/month</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Enjoy vibrant culture and affordable education in sunny Spain with EU advantages.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleNavigation("/countries/spain")}
                >
                  Explore Spain
                </Button>
              </CardContent>
            </Card>

            {/* USA */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-700 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">🇺🇸</div>
                  <h3 className="text-2xl font-bold">USA</h3>
                  <p className="text-sm opacity-90">Innovation Hub</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tuition (per year):</span>
                    <span className="font-semibold">$10,000 - $70,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-semibold">$800 - $2,000/month</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Access world-renowned universities and endless opportunities in the land of innovation.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleNavigation("/countries/usa")}
                >
                  Explore USA
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => handleNavigation("/countries")}
            >
              View All Countries <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Success Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from students who achieved their international education dreams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Ichi Hana Chitwan Consultancy made my dream of studying in France a reality. Their guidance
                  throughout the visa process was exceptional."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">SP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sita Poudel</div>
                    <div className="text-sm text-gray-600">Masters in Business, France</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional service and excellent support. Got admission to my dream university in Germany with
                  scholarship!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">RK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ram Kumar</div>
                    <div className="text-sm text-gray-600">Engineering, Germany</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "From application to visa approval, everything was handled professionally. Now studying in Canada!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Anita Sharma</div>
                    <div className="text-sm text-gray-600">Computer Science, Canada</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" onClick={() => handleNavigation("/testimonials")}>
              Read More Stories <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Study Abroad Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Book a free consultation with our expert counselors today</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => handleNavigation("/contact")}
          >
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
