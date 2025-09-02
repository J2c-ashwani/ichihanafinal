import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Award, ExternalLink } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your
              <span className="text-blue-600 block">Study Abroad Journey?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Book your free consultation today and take the first step towards your international education goals. Our
              expert counselors are here to guide you every step of the way.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Free</div>
                <div className="text-gray-600">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Expert</div>
                <div className="text-gray-600">Counselors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <ContactForm
                  source="contact-page"
                  showDestination={true}
                  showStudyLevel={true}
                  showFieldOfStudy={true}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about studying abroad? Our experienced counselors are here to help you navigate your
                  international education journey.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">Visit Our Office</h3>
                        <p className="text-gray-600 mb-3">
                          Bharatpur Oralo, Lions chowk
                          <br />
                          Chitwan, Nepal
                        </p>
                        <a
                          href="https://maps.google.com/?q=27.690990,84.426300"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600">
                          +977-056-511-394
                          <br />
                          +977-9855018394
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600">Ichihana.chitwan2025@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Sunday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-red-600 font-medium">Saturday: Week Off</p>
                          <p className="text-red-600">Public Holidays: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Students Trust Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and proven track record makes us the preferred choice for study abroad
              guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">98% Success Rate</h3>
                <p className="text-gray-600">
                  Our proven track record speaks for itself with highest visa approval rates in the industry
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Certified counselors with 10+ years of experience in international education
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance throughout your study abroad journey</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h2>
            <p className="text-gray-600 mb-6">Visit us for personalized consultation and guidance</p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                <span>Bharatpur Oralo, Lions chowk, Chitwan</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-green-600" />
                <span>Sun-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Ichi Hana Chitwan Consultancy</h3>
                  <p className="text-gray-600">Study Abroad Consultancy Office</p>
                </div>
                <a
                  href="https://maps.google.com/?q=27.690990,84.426300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="relative">
              <iframe
                src="https://maps.google.com/maps?q=27.690990,84.426300&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Ichi Hana Chitwan Consultancy Office Location"
              ></iframe>

              {/* Overlay with office info */}
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Our Office</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Bharatpur Oralo, Lions chowk
                      <br />
                      Chitwan, Nepal
                    </p>
                    <div className="flex items-center mt-2 text-xs text-green-600">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Open Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Location Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Easy to Find</h4>
                <p className="text-sm text-gray-600">Located at Lions chowk, easily accessible by public transport</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Convenient Hours</h4>
                <p className="text-sm text-gray-600">Open 6 days a week with flexible appointment scheduling</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Call Ahead</h4>
                <p className="text-sm text-gray-600">Book your appointment in advance for personalized consultation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
