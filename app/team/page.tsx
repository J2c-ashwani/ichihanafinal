import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Expert Team</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our
              <span className="text-blue-600 block">Education Experts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of education consultants brings decades of combined experience in international
              education, visa processing, and student success. We're here to guide you every step of the way.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">2000+</div>
                <div className="text-sm text-gray-600">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who will guide your international education journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder & CEO */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/sagar.png"
                    alt="Sagar Lamichanne"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sagar Lamichanne</h3>
                <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm mb-4">
                  Sagar Lamichanne Leads Ichi Hana Chitwan Consultancy with a vision 
                  to make international education accessible and transparent. With strong 
                  expertise in student recruitment and global partnerships, he ensures students 
                  receive the right guidance from admission to visa success.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Award className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Certified Education Consultant</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-2 text-blue-600" />
                    <span>15+ Countries Expertise</span>
                  </div>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Sagar
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Branch Head */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/Aashma.png"
                    alt="Aashma Thapa"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aashma Thapa</h3>
                <p className="text-green-600 font-medium mb-3">Branch Head</p>
                <p className="text-gray-600 text-sm mb-4">
                  Aashma Thapa drives admissions at Ichi Hana Chitwan Consultancy 
                  with a focus on student success. Her expertise ensures smooth 
                  application processes and personalized guidance for every aspiring 
                  student.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Award className="h-4 w-4 mr-2 text-green-600" />
                    <span>Education Specialist</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2 text-green-600" />
                    <span>500+ Students Counseled</span>
                  </div>
                </div>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Aashma
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Visa Processing Expert */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/Bhim-Shrestha.png"
                    alt="Bhim Shrestha"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bhim Shrestha</h3>
                <p className="text-purple-600 font-medium mb-3">Visa Processing Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  Bhim Shrestha specializes in booking Visa appointments and guiding 
                  students in preparing their visa documents, ensuring a smooth and 
                  hassle-free visa process.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Award className="h-4 w-4 mr-2 text-purple-600" />
                    <span>Immigration Expert</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-2 text-purple-600" />
                    <span>80% Visa Success Rate</span>
                  </div>
                </div>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Bhim Shrestha
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Student Success Manager */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/Sabita-Lamsal.png"
                    alt="Sabita Lamsal"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sabita Lamsal</h3>
                <p className="text-orange-600 font-medium mb-3">Student Success Manager</p>
                <p className="text-gray-600 text-sm mb-4">
                  Sabita Lamsal is our Student Success Manager, dedicated to ensuring that every 
                  student receives the guidance and support they need to thrive. She works closely 
                  with students to track progress, overcome challenges, and create personalized 
                  strategies for academic and personal growth, helping them achieve their full potential.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2 text-orange-600" />
                    <span>Student Support Specialist</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-2 text-orange-600" />
                    <span>Pre & Post Departure Expert</span>
                  </div>
                </div>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Sabita
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Academic Advisor */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/Sabin-Lamsal.png"
                    alt="Sabin Lamsal"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sabin Lamsal</h3>
                <p className="text-teal-600 font-medium mb-3">Academic Advisor</p>
                <p className="text-gray-600 text-sm mb-4">
                  Sabin Lamsal is our dedicated Academic Advisor, committed to helping students
                   navigate their educational journey with confidence. He provides personalized 
                   guidance on course selection, career pathways, and study abroad opportunities, 
                   ensuring students make well-informed decisions to achieve their academic and 
                   professional goals.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Award className="h-4 w-4 mr-2 text-teal-600" />
                    <span>Dedicated for Student</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2 text-teal-600" />
                    <span>Insure Timely Advice</span>
                  </div>
                </div>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Sabin
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Team?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals provide personalized guidance and support throughout your study abroad
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Proven Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Combined 70+ years of experience in international education, with successful placements in top
                  universities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Personalized Support</h4>
                <p className="text-gray-600 text-sm">
                  One-on-one guidance tailored to your goals, background, and preferences. We treat every student as
                  unique.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Global Network</h4>
                <p className="text-gray-600 text-sm">
                  Strong relationships with universities, education boards, and immigration authorities across 15+
                  countries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team in person for personalized consultation and guidance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Ichi Hana Chitwan Consultancy</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Main Office</p>
                          <p className="text-gray-600">
                            Bharatpur-10, Chitwan
                            <br />
                            Nepal
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <p className="text-gray-600">+977-56-123456</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-gray-600">info@ichihanachitwan.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                    <img
                      src="/modern-office-consultancy.png"
                      alt="Our Office"
                      className="w-full h-48 object-cover rounded-lg"
                    />
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a consultation with our expert team and take the first step towards your international education
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
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
