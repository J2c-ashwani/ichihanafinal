import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/30">Legal</Badge>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">Please read these terms carefully before using our services.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Services Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Ichi Hana Chitwan Consultancy provides educational consulting services including but not limited to:
                </p>
                <ul>
                  <li>University selection and application assistance</li>
                  <li>Visa processing guidance</li>
                  <li>Document preparation and review</li>
                  <li>Pre-departure orientation</li>
                  <li>Scholarship guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>As a client, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Submit required documents in a timely manner</li>
                  <li>Pay fees as agreed upon</li>
                  <li>Follow our guidance and recommendations</li>
                  <li>Inform us of any changes in your circumstances</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  While we strive to provide the best possible service, we cannot guarantee admission to any university
                  or visa approval. Our liability is limited to the fees paid for our services. We are not responsible
                  for decisions made by universities or immigration authorities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  All content on our website and materials provided during consultation are the intellectual property of
                  Ichi Hana Chitwan Consultancy and are protected by copyright laws.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Modifications</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting on our website. Your continued use of our services constitutes acceptance of the modified
                  terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
