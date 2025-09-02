import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap, Briefcase, Home, Globe2, CheckCircle, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FrancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/countries" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Countries
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-8xl mr-6">🇫🇷</span>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">France</h1>
                  <p className="text-xl text-gray-600">
                    Excellence in education with rich cultural heritage and affordable tuition fees
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-lg font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-lg font-bold text-gray-900">80+</div>
                  <div className="text-sm text-gray-600">Our Students</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <div className="text-lg font-bold text-gray-900">1-3 years</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-orange-600 text-lg font-bold mb-1">€</div>
                  <div className="text-lg font-bold text-gray-900">8K-15K</div>
                  <div className="text-sm text-gray-600">Annual Cost</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Low tuition fees at public universities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>2-year post-study work permit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Rich cultural experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Gateway to European job market</span>
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
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  <CardTitle>Work & Career</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Post-Study Work</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>PSW:</strong> 2 years post-study work visa
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Part-time:</strong> 20 hours/week during studies
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Hourly rate:</strong> €10-12/hour
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Career Prospects</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Employment rate:</strong> 85% within 6 months
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Average salary:</strong> €35,000-45,000/year
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Top Industries</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Luxury goods & Fashion</li>
                    <li>• Technology & Engineering</li>
                    <li>• Tourism & Hospitality</li>
                    <li>• Finance & Banking</li>
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
                    <strong>Monthly expenses:</strong> €800-1,200
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Accommodation:</strong> €400-700/month
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Food & utilities:</strong> €300-400/month
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Language & Culture</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Language:</strong> French (English programs available)
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Culture:</strong> Rich arts, cuisine, and intellectual tradition with emphasis on work-life
                    balance
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Student Life</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Vibrant student communities</li>
                    <li>• Excellent public transportation</li>
                    <li>• Rich cultural activities</li>
                    <li>• Student discounts everywhere</li>
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
                    <strong>Universities:</strong> 300+ institutions
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Global ranking:</strong> Multiple top 100 universities
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Research focus:</strong> Strong emphasis on innovation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Programs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Business & Management</li>
                    <li>• Engineering & Technology</li>
                    <li>• Arts & Design</li>
                    <li>• Culinary Arts</li>
                    <li>• International Relations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Admission Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bachelor's degree for Master's</li>
                    <li>• IELTS 6.5+ or TOEFL 80+</li>
                    <li>• French proficiency (some programs)</li>
                    <li>• Statement of Purpose</li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarship Opportunities in France</h2>
            <p className="text-xl text-gray-600">Financial support available for international students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eiffel Excellence Scholarship</h3>
                <p className="text-sm text-gray-600 mb-3">Up to €1,181/month + tuition coverage</p>
                <p className="text-sm text-gray-600 mb-4">
                  For Master's and PhD students in engineering, economics, law, and political science
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Master's
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    PhD
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Full Coverage
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Campus France Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">€615-767/month</p>
                <p className="text-sm text-gray-600 mb-4">
                  Various scholarships for different academic levels and fields of study
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    All Levels
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Multiple Fields
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Monthly Stipend
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Erasmus+ Programme</h3>
                <p className="text-sm text-gray-600 mb-3">€300-600/month</p>
                <p className="text-sm text-gray-600 mb-4">EU funding for exchange students and joint degree programs</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Exchange
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Joint Degree
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    EU Students
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">University-Specific Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">€200-1,000/month</p>
                <p className="text-sm text-gray-600 mb-4">
                  Merit-based scholarships offered directly by French universities
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Merit-Based
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    University Funded
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Varies
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">€300-800/month</p>
                <p className="text-sm text-gray-600 mb-4">
                  Scholarships offered by French regions to attract international talent
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Regional
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Talent-Based
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Living Support
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need-Based Aid</h3>
                <p className="text-sm text-gray-600 mb-3">€100-500/month</p>
                <p className="text-sm text-gray-600 mb-4">
                  Financial assistance for students from developing countries
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Need-Based
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Developing Countries
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Financial Aid
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Scholarship Application Tips</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• Apply early - most scholarships have deadlines 6-12 months before intake</li>
                <li>• Maintain excellent academic records (GPA 3.5+ recommended)</li>
                <li>• Prepare strong motivation letters highlighting your goals and achievements</li>
                <li>• Get recommendation letters from professors or employers</li>
                <li>• Research multiple scholarship options to increase your chances</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Study in France?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts guide you through the application process for French universities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/countries">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
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
