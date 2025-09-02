import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/30">Legal</Badge>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We collect information you provide directly to us, such as when you create an account, fill out a
                  form, or contact us. This may include:
                </p>
                <ul>
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Educational background and academic records</li>
                  <li>Study preferences and career goals</li>
                  <li>Communication preferences</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process applications and provide consultation services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you updates about study abroad opportunities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy. We may share your information with:
                </p>
                <ul>
                  <li>Universities and educational institutions for application purposes</li>
                  <li>Service providers who assist us in operating our business</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You have the right to:</p>
                <ul>
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your personal information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: info@ichihanachitwan.com
                  <br />
                  Phone: +977-56-123456
                  <br />
                  Address: Bharatpur-10, Chitwan, Nepal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
