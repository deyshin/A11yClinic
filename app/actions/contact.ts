"use server"

import { Resend } from "resend"

// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormData = {
  name: string
  email: string
  topics: {
    general: boolean
    checkup: boolean
    solutions: boolean
    maintenance: boolean
    party: boolean
  }
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Format the selected topics
    const selectedTopics = Object.entries(formData.topics)
      .filter(([_, isSelected]) => isSelected)
      .map(([topic]) => topic.charAt(0).toUpperCase() + topic.slice(1))
      .join(", ")

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "A11y Clinic Website <no-reply@a11yclinic.com>",
      to: "daniel@a11yclinic.com",
      subject: `New Contact Form Submission from ${formData.name}`,
      reply_to: formData.email,
      text: `
Name: ${formData.name}
Email: ${formData.email}
Topics: ${selectedTopics || "None selected"}

Message:
${formData.message}
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, message: "Failed to send your message. Please try again." }
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

