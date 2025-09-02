import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RefundCancellationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/30">Legal</Badge>
            <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-xl text-gray-300">Understanding our refund and cancellation terms for our services.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  You may cancel our services at any time by providing written notice. Cancellation will be effective
                  from the date we receive your written notice.
                </p>
                <ul>
                  <li>Cancellation within 7 days of signing: Full refund minus processing fees</li>
                  <li>Cancellation after work has commenced: Refund based on work completed</li>
                  <li>Cancellation after visa application submission: No refund available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Refund Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Refunds may be considered in the following circumstances:</p>
                <ul>
                  <li>Service cancellation within the cooling-off period</li>
                  <li>Failure to provide agreed services due to our fault</li>
                  <li>Duplicate payments or billing errors</li>
                  <li>Services not rendered due to circumstances beyond client control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Non-Refundable Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>The following services are non-refundable:</p>
                <ul>
                  <li>University application fees paid to institutions</li>
                  <li>Visa application fees paid to embassies/consulates</li>
                  <li>Third-party service fees (translations, courier, etc.)</li>
                  <li>Services completed and delivered</li>
                  <li>Consultation fees after the session is completed</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Refund Process</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>To request a refund:</p>
                <ol>
                  <li>Submit a written refund request with reasons</li>
                  <li>Provide all relevant documentation</li>
                  <li>Allow 15-30 business days for processing</li>
                  <li>Refunds will be processed to the original payment method</li>
                </ol>
                <p>
                  Processing fees and bank charges may be deducted from the refund amount. All refund requests are
                  subject to review and approval.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Force Majeure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  In case of circumstances beyond our control (natural disasters, government actions, pandemic
                  restrictions, etc.), we reserve the right to modify our refund policy. We will work with clients to
                  find mutually acceptable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact for Refunds</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  For refund requests or questions about this policy, please contact us at:
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
