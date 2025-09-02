import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap, Briefcase, Home, Globe2, CheckCircle, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function USAPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
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
                <span className="text-8xl mr-6">🇺🇸</span>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">United States</h1>
                  <p className="text-xl text-gray-600">
                    Home to world's top universities with diverse programs and research opportunities
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-lg font-bold text-gray-900">4000+</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-lg font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Our Students</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <div className="text-lg font-bold text-gray-900">2-4 years</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-orange-600 text-lg font-bold mb-1">$</div>
                  <div className="text-lg font-bold text-gray-900">30K-80K</div>
                  <div className="text-sm text-gray-600">Annual Cost</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Top-ranked universities globally</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Extensive research opportunities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Optional Practical Training (OPT)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Diverse cultural experience</span>
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
                    <strong>OPT:</strong> 1-3 years Optional Practical Training
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Part-time:</strong> 20 hours/week on-campus
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Hourly rate:</strong> $10-15/hour
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Career Prospects</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Employment rate:</strong> 80% within 6 months
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Average salary:</strong> $50,000-80,000/year
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Top Industries</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Technology & Software</li>
                    <li>• Healthcare & Biotechnology</li>
                    <li>• Finance & Banking</li>
                    <li>• Engineering & Manufacturing</li>
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
                    <strong>Monthly expenses:</strong> $1,200-2,000
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Accommodation:</strong> $600-1,200/month
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Food & utilities:</strong> $400-600/month
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Language & Culture</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Language:</strong> English
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Culture:</strong> Diverse, individualistic, and opportunity-focused
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Student Life</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Vibrant campus communities</li>
                    <li>• Extensive extracurricular activities</li>
                    <li>• Research opportunities</li>
                    <li>• Networking events</li>
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
                    <strong>Universities:</strong> 4000+ institutions
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Global ranking:</strong> Most top 100 universities worldwide
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Research focus:</strong> World leader in innovation and research
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Programs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Engineering & Technology</li>
                    <li>• Business & Management</li>
                    <li>• Computer Science</li>
                    <li>• Medicine & Healthcare</li>
                    <li>• Liberal Arts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Admission Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bachelor's degree for Master's</li>
                    <li>• TOEFL 80+ or IELTS 6.5+</li>
                    <li>• GRE/GMAT (program dependent)</li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarship Opportunities in USA</h2>
            <p className="text-xl text-gray-600">Financial aid options for international students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fulbright Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Full tuition + living expenses</p>
                <p className="text-sm text-gray-600 mb-4">
                  Prestigious scholarship for graduate study and research in the US
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Full Coverage
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Graduate
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Research
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">University Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">$5,000-50,000/year</p>
                <p className="text-sm text-gray-600 mb-4">
                  Merit-based scholarships offered directly by US universities
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Merit-Based
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Varies
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    University Funded
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Private Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">$1,000-25,000/year</p>
                <p className="text-sm text-gray-600 mb-4">
                  Scholarships from foundations, corporations, and organizations
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Private
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Various Criteria
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Competitive
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Study in USA?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts guide you through the application process for US universities
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
