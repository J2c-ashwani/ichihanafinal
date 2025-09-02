import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, GraduationCap, MapPin, Globe, BookOpen, Award, TrendingUp } from "lucide-react"

export default function CountriesPage() {
  const countries = [
    {
      name: "South Korea",
      flag: "🇰🇷",
      tuition: "₩3,000,000 - ₩12,000,000/year",
      living: "₩800,000 - ₩1,200,000/month",
      highlights: ["Technology Hub", "K-Culture", "Innovation"],
      description: "Experience cutting-edge technology and rich cultural heritage in Asia's innovation powerhouse.",
      link: "/countries/south-korea",
      gradient: "from-red-500 to-blue-600",
    },
    {
      name: "Japan",
      flag: "🇯🇵",
      tuition: "¥500,000 - ¥1,500,000/year",
      living: "¥80,000 - ¥120,000/month",
      highlights: ["Excellence", "Tradition", "Research"],
      description: "Combine academic excellence with cultural immersion in the land of the rising sun.",
      link: "/countries/japan",
      gradient: "from-red-600 to-white",
    },
    {
      name: "France",
      flag: "🇫🇷",
      tuition: "€170 - €20,000/year",
      living: "€800 - €1,200/month",
      highlights: ["Low Public Fees", "Cultural Heritage", "EU Access"],
      description: "Study in the heart of Europe with affordable public education and rich cultural experiences.",
      link: "/countries/france",
      gradient: "from-blue-600 to-red-600",
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      tuition: "€0 - €20,000/year",
      living: "€800 - €1,200/month",
      highlights: ["Free Education", "Engineering", "Research"],
      description: "Access world-class education with minimal tuition fees in Europe's economic powerhouse.",
      link: "/countries/germany",
      gradient: "from-black to-red-600",
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      tuition: "€750 - €18,000/year",
      living: "€600 - €1,000/month",
      highlights: ["Affordable", "Culture", "EU Benefits"],
      description: "Enjoy vibrant culture and affordable education in sunny Spain with EU advantages.",
      link: "/countries/spain",
      gradient: "from-red-600 to-yellow-500",
    },
    {
      name: "Cyprus",
      flag: "🇨🇾",
      tuition: "€3,000 - €15,000/year",
      living: "€400 - €800/month",
      highlights: ["Mediterranean", "English Programs", "EU Member"],
      description: "Study in English in the beautiful Mediterranean with EU benefits and low living costs.",
      link: "/countries/cyprus",
      gradient: "from-blue-500 to-orange-400",
    },
    {
      name: "Malta",
      flag: "🇲🇹",
      tuition: "€1,000 - €25,000/year",
      living: "€600 - €1,000/month",
      highlights: ["English Speaking", "EU Member", "Island Life"],
      description: "Experience island life while studying in English in this EU member state.",
      link: "/countries/malta",
      gradient: "from-red-600 to-white",
    },
    {
      name: "USA",
      flag: "🇺🇸",
      tuition: "$10,000 - $70,000/year",
      living: "$800 - $2,000/month",
      highlights: ["World Rankings", "Innovation", "Opportunities"],
      description: "Access world-renowned universities and endless opportunities in the land of innovation.",
      link: "/countries/usa",
      gradient: "from-blue-700 to-red-600",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      tuition: "CAD 7,000 - 35,000/year",
      living: "CAD 800 - 1,500/month",
      highlights: ["Quality Education", "Multicultural", "Work Opportunities"],
      description: "Experience high-quality education in a welcoming, multicultural environment.",
      link: "/countries/canada",
      gradient: "from-red-600 to-white",
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      tuition: "£10,000 - £38,000/year",
      living: "£800 - £1,500/month",
      highlights: ["Historic Universities", "Research Excellence", "Global Recognition"],
      description: "Study at world-famous institutions with centuries of academic excellence.",
      link: "/countries/uk",
      gradient: "from-blue-800 to-red-600",
    },
    {
      name: "Ireland",
      flag: "🇮🇪",
      tuition: "€3,000 - €25,000/year",
      living: "€700 - €1,200/month",
      highlights: ["English Speaking", "Tech Hub", "EU Benefits"],
      description: "Study in English in Europe's tech capital with strong industry connections.",
      link: "/countries/ireland",
      gradient: "from-green-600 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 mb-6">Study Destinations</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your Dream
              <span className="text-blue-600"> Destination</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore world-class education opportunities across Asia, Europe, and North America. Find the perfect
              country that matches your academic goals and budget.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">11+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${country.gradient} text-white p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{country.flag}</span>
                      <CardTitle className="text-xl font-bold">{country.name}</CardTitle>
                    </div>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">{country.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">Tuition: {country.tuition}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">Living: {country.living}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {country.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <Link href={country.link}>
                      <Button className="w-full mt-4 group-hover:bg-blue-700 transition-colors">
                        Explore {country.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Success is Our Priority</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to help you make the right choice for your international education
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Partnerships with top universities worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Personalized counseling for each student</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Success</h3>
              <p className="text-gray-600">95% visa approval rate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">Post-study career support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors and take the first step towards your international
            education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
