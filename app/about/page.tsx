import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Award, Globe, CheckCircle, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">About Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for
              <span className="text-blue-600 block">International Education</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over a decade of experience, Ichi Hana Chitwan Consultancy has been guiding students towards their
              international education dreams with personalized support and expert guidance.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2000+</div>
                <div className="text-sm text-gray-600">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Visa Success</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">University Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Our Story</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Dreams Since 2010</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to make international education accessible to every Nepali student, Ichi Hana
                Chitwan Consultancy has grown from a small consultancy to one of Nepal's most trusted study abroad
                partners.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey began when our founder experienced the challenges of studying abroad firsthand. This
                personal experience drives our commitment to providing comprehensive support that goes beyond just
                university applications.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to have helped over 2,000 students achieve their international education goals, with
                a 98% visa success rate that speaks to our expertise and dedication.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Counselors</h4>
                  <p className="text-sm text-gray-600">Certified professionals with 10+ years experience</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Global Network</h4>
                  <p className="text-sm text-gray-600">Direct partnerships with 500+ universities</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Success</h4>
                  <p className="text-sm text-gray-600">98% visa approval rate across all destinations</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Support</h4>
                  <p className="text-sm text-gray-600">One-on-one guidance throughout your journey</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and clear vision for the future of international education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To empower Nepali students with world-class international education opportunities through expert
                  guidance, personalized support, and unwavering commitment to their success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be Nepal's leading study abroad consultancy, recognized for our integrity, expertise, and the
                  success of our students in achieving their international education dreams.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Integrity, Excellence, Student-First Approach, Transparency, and Continuous Innovation in everything
                  we do to serve our students better.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Students Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Why Choose Us</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Students Choose Ichi Hana Chitwan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and student success sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personalized Counseling</h4>
                    <p className="text-sm text-gray-600">
                      One-on-one guidance tailored to your academic background, interests, and career goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Government Authorized</h4>
                    <p className="text-sm text-gray-600">
                      Registered with Ministry of Foreign Affairs and Companies Act for your peace of mind.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Services</h4>
                    <p className="text-sm text-gray-600">
                      From university selection to visa processing and pre-departure support - we handle it all.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                    <p className="text-sm text-gray-600">
                      Certified counselors with extensive experience in international education and visa processing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">University Partnerships</h4>
                    <p className="text-sm text-gray-600">
                      Direct partnerships with 500+ universities worldwide for better admission chances.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transparent Process</h4>
                    <p className="text-sm text-gray-600">
                      Clear communication, honest advice, and transparent pricing with no hidden costs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your International Education Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful students who trusted us with their dreams
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
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
