"use server"

import { sendContactEmail } from "@/lib/email"

export async function submitContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const destination = formData.get("destination") as string
    const studyLevel = formData.get("studyLevel") as string
    const fieldOfStudy = formData.get("fieldOfStudy") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !destination || !studyLevel || !fieldOfStudy) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Send email notification
    await sendContactEmail({
      firstName,
      lastName,
      email,
      phone,
      destination,
      studyLevel,
      fieldOfStudy,
      message: message || "No additional message provided.",
    })

    return {
      success: true,
      message: "Thank you for your inquiry! We will contact you soon.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "Failed to send your message. Please try again or contact us directly.",
    }
  }
}
