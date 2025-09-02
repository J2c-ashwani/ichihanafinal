import { Resend } from "resend"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  destination: string
  studyLevel: string
  fieldOfStudy: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Send email to consultancy
    await resend.emails.send({
      from: "noreply@ichihanachitwan.com",
      to: ["Ichihana.chitwan2025@gmail.com"], // your receiving email
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Destination:</strong> ${data.destination}</p>
        <p><strong>Study Level:</strong> ${data.studyLevel}</p>
        <p><strong>Field of Study:</strong> ${data.fieldOfStudy}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    })

    // Send confirmation email to student
    await resend.emails.send({
      from: "noreply@ichihanachitwan.com",
      to: [data.email],
      subject: "Thank you for contacting Ichi Hana Chitwan Consultancy",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${data.firstName},</p>
        <p>We have received your inquiry about studying in ${data.destination}. 
        Our team will review your information and contact you within 24 hours.</p>
        <p>Best regards,<br>Ichi Hana Chitwan Consultancy Team</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
