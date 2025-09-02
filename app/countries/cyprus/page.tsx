import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap, Briefcase, Home, Globe2, CheckCircle, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CyprusPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/countries" className="inline-flex items-center text-purple-600 hover:text-purple-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Countries
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-8xl mr-6">🇨🇾</span>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">Cyprus</h1>
                  <p className="text-xl text-gray-600">
                    EU member with English-taught programs and Mediterranean lifestyle
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <div className="text-lg font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-lg font-bold text-gray-900">30+</div>
                  <div className="text-sm text-gray-600">Our Students</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <div className="text-lg font-bold text-gray-900">1-2 years</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-orange-600 text-lg font-bold mb-1">€</div>
                  <div className="text-lg font-bold text-gray-900">12K-18K</div>
                  <div className="text-sm text-gray-600">Annual Cost</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>EU membership advantages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>English-taught programs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Low cost of living</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Strategic location between Europe, Asia, Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Work & Career */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                  <CardTitle>Work & Career</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Post-Study Work</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>PSW:</strong> 1 year post-study work visa
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Part-time:</strong> 20 hours/week during studies
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Hourly rate:</strong> €6-8/hour
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Career Prospects</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Employment rate:</strong> 70% within 6 months
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Average salary:</strong> €18,000-28,000/year
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Top Industries</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Financial Services</li>
                    <li>• Tourism & Hospitality</li>
                    <li>• Information Technology</li>
                    <li>• Shipping & Maritime</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Living & Culture */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Home className="h-6 w-6 text-green-600" />
                  <CardTitle>Living & Culture</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost of Living</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Monthly expenses:</strong> €600-900
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Accommodation:</strong> €250-500/month
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Food & utilities:</strong> €250-350/month
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Language & Culture</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Language:</strong> Greek, Turkish, English widely spoken
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Culture:</strong> Blend of Greek and Turkish cultures with EU standards
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Student Life</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Beautiful beaches and nature</li>
                    <li>• Rich historical sites</li>
                    <li>• Warm Mediterranean climate</li>
                    <li>• Friendly multicultural environment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Education System */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Globe2 className="h-6 w-6 text-purple-600" />
                  <CardTitle>Education System</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Academic Excellence</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Universities:</strong> 25+ institutions
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Global ranking:</strong> Several universities in top 1000
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Research focus:</strong> Business, medicine, and technology
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Programs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Business & Management</li>
                    <li>• Hospitality & Tourism</li>
                    <li>• Information Technology</li>
                    <li>• Medicine & Healthcare</li>
                    <li>• International Relations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Admission Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bachelor's degree for Master's</li>
                    <li>• IELTS 6.0+ or TOEFL 75+</li>
                    <li>• Statement of Purpose</li>
                    <li>• Academic transcripts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarship Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarship Opportunities in Cyprus</h2>
            <p className="text-xl text-gray-600">Financial support for international students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cyprus Government Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">€2,000-6,000/year</p>
                <p className="text-sm text-gray-600 mb-4">
                  Government scholarships for international students in various fields
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Government
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Merit-Based
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    All Fields
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">University Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">€1,000-4,000/year</p>
                <p className="text-sm text-gray-600 mb-4">Merit-based scholarships offered by Cypriot universities</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Merit-Based
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    University Funded
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Academic Excellence
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">EU Erasmus+ Programme</h3>
                <p className="text-sm text-gray-600 mb-3">€300-400/month</p>
                <p className="text-sm text-gray-600 mb-4">EU funding for exchange students and mobility programs</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Exchange
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    EU Students
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Mobility
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Study in Cyprus?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts guide you through the application process for Cypriot universities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/countries">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Compare Countries
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
