"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/app/actions/contact"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setMessage("Thank you! Your message has been sent successfully. We will contact you soon.")
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        setSubmitStatus("error")
        setMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setMessage("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" required className="mt-1" placeholder="John" />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" required className="mt-1" placeholder="Doe" />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required className="mt-1" placeholder="john@example.com" />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" required className="mt-1" placeholder="+977-9800000000" />
      </div>

      <div>
        <Label htmlFor="destination">Preferred Destination</Label>
        <Select name="destination" required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="south-korea">South Korea</SelectItem>
            <SelectItem value="japan">Japan</SelectItem>
            <SelectItem value="france">France</SelectItem>
            <SelectItem value="germany">Germany</SelectItem>
            <SelectItem value="spain">Spain</SelectItem>
            <SelectItem value="cyprus">Cyprus</SelectItem>
            <SelectItem value="malta">Malta</SelectItem>
            <SelectItem value="usa">USA</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ireland">Ireland</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="studyLevel">Study Level</Label>
        <Select name="studyLevel" required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select study level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
            <SelectItem value="diploma">Diploma</SelectItem>
            <SelectItem value="certificate">Certificate</SelectItem>
            <SelectItem value="language">Language Course</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="fieldOfStudy">Field of Study</Label>
        <Select name="fieldOfStudy" required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select field of study" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="business">Business & Management</SelectItem>
            <SelectItem value="computer-science">Computer Science & IT</SelectItem>
            <SelectItem value="medicine">Medicine & Health Sciences</SelectItem>
            <SelectItem value="arts">Arts & Humanities</SelectItem>
            <SelectItem value="science">Natural Sciences</SelectItem>
            <SelectItem value="social-science">Social Sciences</SelectItem>
            <SelectItem value="law">Law</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          className="mt-1"
          placeholder="Tell us about your study abroad goals..."
          rows={3}
        />
      </div>

      {submitStatus !== "idle" && (
        <div
          className={`p-3 rounded-lg flex items-center gap-2 ${
            submitStatus === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {submitStatus === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span className="text-sm">{message}</span>
        </div>
      )}

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
