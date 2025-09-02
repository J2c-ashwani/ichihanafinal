import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap, Briefcase, Home, Globe2, CheckCircle, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CanadaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/countries" className="inline-flex items-center text-green-600 hover:text-green-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Countries
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-8xl mr-6">🇨🇦</span>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">Canada</h1>
                  <p className="text-xl text-gray-600">
                    Quality education with affordable costs and excellent post-study work opportunities
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-lg font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-lg font-bold text-gray-900">400+</div>
                  <div className="text-sm text-gray-600">Our Students</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <div className="text-lg font-bold text-gray-900">1-4 years</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-orange-600 text-lg font-bold mb-1">C$</div>
                  <div className="text-lg font-bold text-gray-900">20K-50K</div>
                  <div className="text-sm text-gray-600">Annual Cost</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Post-graduation work permit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Pathway to permanent residency</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Multicultural society</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>High quality of life</span>
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
                  <Briefcase className="h-6 w-6 text-green-600" />
                  <CardTitle>Work & Career</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Post-Study Work</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>PGWP:</strong> Up to 3 years Post-Graduation Work Permit
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Part-time:</strong> 20 hours/week during studies
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Hourly rate:</strong> CAD $15-18/hour
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Career Prospects</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Employment rate:</strong> 85% within 6 months
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Average salary:</strong> CAD $45,000-65,000/year
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Top Industries</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Technology & Software</li>
                    <li>• Healthcare & Life Sciences</li>
                    <li>• Engineering & Manufacturing</li>
                    <li>• Natural Resources</li>
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
                    <strong>Monthly expenses:</strong> CAD $1,000-1,500
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Accommodation:</strong> CAD $500-1,000/month
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Food & utilities:</strong> CAD $400-500/month
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Language & Culture</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Language:</strong> English and French
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Culture:</strong> Multicultural, polite, and nature-loving society
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Student Life</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Welcoming international community</li>
                    <li>• Beautiful natural landscapes</li>
                    <li>• Safe and peaceful environment</li>
                    <li>• Excellent healthcare system</li>
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
                    <strong>Universities:</strong> 200+ institutions
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Global ranking:</strong> Multiple top 100 universities
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Research focus:</strong> Strong emphasis on practical learning
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Programs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Engineering & Technology</li>
                    <li>• Healthcare & Medicine</li>
                    <li>• Information Technology</li>
                    <li>• Business & Management</li>
                    <li>• Natural Sciences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Admission Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bachelor's degree for Master's</li>
                    <li>• IELTS 6.5+ or TOEFL 90+</li>
                    <li>• Statement of Purpose</li>
                    <li>• Letters of Recommendation</li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarship Opportunities in Canada</h2>
            <p className="text-xl text-gray-600">Financial support for international students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vanier Canada Graduate Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">CAD $50,000/year for 3 years</p>
                <p className="text-sm text-gray-600 mb-4">Prestigious doctoral scholarship for world-class students</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    PhD
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Full Coverage
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Prestigious
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
                <p className="text-sm text-gray-600 mb-3">CAD $2,000-25,000/year</p>
                <p className="text-sm text-gray-600 mb-4">Merit-based scholarships offered by Canadian universities</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Merit-Based
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    All Levels
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Provincial Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">CAD $1,000-15,000/year</p>
                <p className="text-sm text-gray-600 mb-4">
                  Scholarships offered by Canadian provinces to attract talent
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Provincial
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Talent-Based
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Regional
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Study in Canada?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts guide you through the application process for Canadian universities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/countries">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
