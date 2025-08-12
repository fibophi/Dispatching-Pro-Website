"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const mcNumber = formData.get("mcNumber") as string
    const equipment = formData.get("equipment") as string
    const service = formData.get("service") as string
    const serviceArea = formData.get("serviceArea") as string
    const message = formData.get("message") as string
    const recaptchaToken = formData.get("recaptcha-token") as string

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaResult = await recaptchaResponse.json()

    if (!recaptchaResult.success) {
      return { success: false, error: "Please complete the captcha verification." }
    }

    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Dispatching.pro Contact Form" <${process.env.SMTP_USER}>`,
      to: "solutions@dispatching.pro",
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>MC Number:</strong> ${mcNumber || "Not provided"}</p>
        <p><strong>Equipment Type:</strong> ${equipment || "Not specified"}</p>
        <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
        <p><strong>Service Area:</strong> ${serviceArea || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
        
        <hr>
        <p><em>Submitted from dispatching.pro contact form</em></p>
      `,
    })

    return { success: true, message: "Message sent successfully! We'll get back to you within the hour." }
  } catch (error) {
    console.error("Contact form error:", error)
    return { success: false, error: "Something went wrong. Please try again or contact us directly." }
  }
}
