// lib/email.ts
import { Resend } from "resend";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  studyLevel: string;
  fieldOfStudy: string;
  message: string;
}

// ✅ Initialize Resend client, ensure API key is loaded
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is missing. Check your .env.local or Vercel environment variables.");
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  try {
    const verifiedSender = "Ichihana.chitwan2025@gmail.com"; // must be verified in Resend

    // 1️⃣ Email to consultancy
    const consultancyResponse = await resend.emails.send({
      from: verifiedSender,
      to: ["Ichihana.chitwan2025@gmail.com"],
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
    });
    console.log("Consultancy email response:", consultancyResponse);

    // 2️⃣ Confirmation email to student
    const studentResponse = await resend.emails.send({
      from: verifiedSender,
      to: [data.email],
      subject: "Thank you for contacting Ichi Hana Chitwan Consultancy",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${data.firstName},</p>
        <p>We have received your inquiry about studying in ${data.destination}. 
        Our team will review your information and contact you within 24 hours.</p>
        <p>Best regards,<br>Ichi Hana Chitwan Consultancy Team</p>
      `,
    });
    console.log("Student email response:", studentResponse);

    return { success: true };
  } catch (error) {
    console.error("Error sending emails via Resend:", error);
    return { success: false, error };
  }
}
