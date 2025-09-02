import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Success Stories</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Student Success
              <span className="text-blue-600 block">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from students who achieved their international education dreams with our guidance. Their
              success is our greatest achievement and motivation.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2000+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Visa Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">4.9/5</div>
                <div className="text-sm text-gray-600">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our students about their journey to international education success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Ichi Hana made my dream of studying in France a reality. Their guidance throughout the visa process
                  was exceptional. The team helped me with everything from university selection to accommodation. I'm
                  now pursuing my Masters in International Business at ESSEC Business School."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">SP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sita Poudel</div>
                    <div className="text-sm text-gray-600">Masters in International Business</div>
                    <div className="text-sm text-blue-600">🇫🇷 ESSEC Business School, France</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-green-600 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Professional service and excellent support throughout my journey. Got admission to my dream
                  university in Germany with a scholarship! The SOP writing service was particularly helpful. Now I'm
                  studying Mechanical Engineering at TU Munich with 50% scholarship."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">RK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ram Kumar Shrestha</div>
                    <div className="text-sm text-gray-600">Mechanical Engineering</div>
                    <div className="text-sm text-green-600">🇩🇪 TU Munich, Germany</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-purple-600 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "From application to visa approval, everything was handled professionally. The team's expertise in
                  Canadian immigration was evident. Now I'm studying Computer Science at University of Toronto and
                  loving the multicultural environment here."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Anita Sharma</div>
                    <div className="text-sm text-gray-600">Computer Science</div>
                    <div className="text-sm text-purple-600">🇨🇦 University of Toronto, Canada</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-orange-600 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "The team at Ichi Hana helped me secure admission to Stanford University with their expert guidance.
                  Their test preparation support and application strategy were crucial for my success. The scholarship
                  guidance helped me get 40% funding for my MBA program."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">PG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pradeep Gautam</div>
                    <div className="text-sm text-gray-600">MBA</div>
                    <div className="text-sm text-orange-600">🇺🇸 Stanford University, USA</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-red-600 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Excellent support for UK applications. The team helped me understand the complex UCAS system and
                  guided me through the entire process. I'm now studying Medicine at King's College London, which was my
                  dream university. Their visa interview preparation was outstanding."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Maya Rai</div>
                    <div className="text-sm text-gray-600">Medicine</div>
                    <div className="text-sm text-red-600">🇬🇧 King's College London, UK</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-teal-600 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Studying in Spain has been an amazing experience. Ichi Hana helped me find the perfect program in
                  Barcelona and guided me through the Spanish student visa process. The cultural orientation they
                  provided was very helpful for adapting to life in Spain."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-semibold">SK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Suresh Karki</div>
                    <div className="text-sm text-gray-600">International Relations</div>
                    <div className="text-sm text-teal-600">🇪🇸 University of Barcelona, Spain</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success by Country */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Across Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students have achieved success in universities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🇫🇷</div>
                <h4 className="font-semibold text-gray-900 mb-2">France</h4>
                <div className="text-2xl font-bold text-blue-600 mb-1">450+</div>
                <p className="text-sm text-gray-600">Students Placed</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🇩🇪</div>
                <h4 className="font-semibold text-gray-900 mb-2">Germany</h4>
                <div className="text-2xl font-bold text-green-600 mb-1">380+</div>
                <p className="text-sm text-gray-600">Students Placed</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🇺🇸</div>
                <h4 className="font-semibold text-gray-900 mb-2">USA</h4>
                <div className="text-2xl font-bold text-purple-600 mb-1">320+</div>
                <p className="text-sm text-gray-600">Students Placed</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🇨🇦</div>
                <h4 className="font-semibold text-gray-900 mb-2">Canada</h4>
                <div className="text-2xl font-bold text-orange-600 mb-1">290+</div>
                <p className="text-sm text-gray-600">Students Placed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our successful students about their experience with Ichi Hana Chitwan Consultancy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">🎥</div>
                    <p className="text-sm">Video Testimonial</p>
                    <p className="text-xs">Coming Soon</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Binod Thapa - Germany Success Story</h4>
                <p className="text-sm text-gray-600">
                  Watch Binod share his journey from Nepal to studying Engineering at TU Berlin with our guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">🎥</div>
                    <p className="text-sm">Video Testimonial</p>
                    <p className="text-xs">Coming Soon</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Shreya Adhikari - France Experience</h4>
                <p className="text-sm text-gray-600">
                  Shreya talks about her Masters program in France and how we helped her achieve her dreams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful students who trusted us with their international education dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Start Your Journey</Link>
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
