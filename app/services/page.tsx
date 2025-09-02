import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  FileText,
  UserCheck,
  BookOpen,
  DollarSign,
  Plane,
  Users,
  CheckCircle,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Study Abroad
              <span className="text-blue-600 block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From university selection to visa approval and beyond, we provide comprehensive support for every step of
              your international education journey.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Services Offered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2000+</div>
                <div className="text-sm text-gray-600">Students Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support designed to maximize your chances of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>University Selection & Counseling</CardTitle>
                <CardDescription>
                  Expert guidance to find the perfect university that matches your academic goals, budget, and career
                  aspirations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personalized university matching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Course selection guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Career pathway planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Budget and cost analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Application Assistance</CardTitle>
                <CardDescription>
                  Complete support for university applications with document preparation and submission guidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Application form completion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Document verification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Deadline management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Application tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Visa Processing</CardTitle>
                <CardDescription>
                  Expert visa guidance with 98% success rate across all destinations including interview preparation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Visa application preparation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Document checklist
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Interview preparation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Embassy liaison
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>SOP Writing</CardTitle>
                <CardDescription>
                  Professional Statement of Purpose writing that showcases your unique story and academic goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personalized SOP creation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multiple revisions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    University-specific customization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional proofreading
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Scholarship Guidance</CardTitle>
                <CardDescription>
                  Identify and apply for scholarships to reduce your education costs and financial burden.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scholarship research
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Eligibility assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Application assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Essay writing support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Pre-Departure Support</CardTitle>
                <CardDescription>
                  Complete preparation for your journey including accommodation, travel, and cultural orientation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Accommodation assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Travel arrangements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cultural orientation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Banking and insurance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to enhance your application and career prospects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Letter of Motivation Writing</h4>
                <p className="text-sm text-gray-600">Compelling motivation letters for European universities</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Resume Building</h4>
                <p className="text-sm text-gray-600">Professional CV/Resume creation for international standards</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Test Preparation</h4>
                <p className="text-sm text-gray-600">IELTS, TOEFL, GRE, GMAT preparation guidance</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Country-Specific Guidance</h4>
                <p className="text-sm text-gray-600">Specialized advice for each destination country</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Our Process</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A step-by-step process designed for your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Initial Consultation</h4>
              <p className="text-sm text-gray-600">
                Free consultation to understand your goals and create a personalized plan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">University Selection</h4>
              <p className="text-sm text-gray-600">
                Shortlist universities based on your profile, preferences, and budget
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Application Process</h4>
              <p className="text-sm text-gray-600">
                Complete application submission with all required documents and essays
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Visa & Departure</h4>
              <p className="text-sm text-gray-600">Visa processing, pre-departure preparation, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Study Abroad Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free consultation to discuss your goals and create a personalized plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/countries">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
