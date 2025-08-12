"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  mcNumber: string
  equipment: string
  service: string
  serviceArea: string
  message: string
}

export async function submitContactForm(formData: ContactFormData, captchaToken: string) {
  try {
    // Verify reCAPTCHA
    const captchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    })

    const captchaResult = await captchaResponse.json()

    if (!captchaResult.success) {
      return { success: false, error: "Captcha verification failed" }
    }

    // Create email transporter for Namecheap PrivateEmail
    const transporter = nodemailer.createTransporter({
      host: "mail.privateemail.com",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.EMAIL_USER, // Your full email address
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    })

    // Format the email content
    const emailContent = `
New Contact Form Submission from Dispatching.Pro

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Phone: ${formData.phone}
- Email: ${formData.email}

Business Details:
- MC Number: ${formData.mcNumber || "Not provided"}
- Equipment Type: ${formData.equipment || "Not specified"}
- Service Interest: ${formData.service || "Not specified"}
- Service Area: ${formData.serviceArea || "Not specified"}

Message:
${formData.message || "No message provided"}

---
This message was sent from the contact form at dispatching.pro
Submitted at: ${new Date().toLocaleString()}
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "solutions@dispatching.pro",
      subject: `New Contact Form - ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
      replyTo: formData.email,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
