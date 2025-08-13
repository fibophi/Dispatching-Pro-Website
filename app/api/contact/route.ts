import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create email content
    const emailContent = `
New Contact Form Submission from Dispatching.Pro

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Phone: ${formData.phone}
- Email: ${formData.email}

Business Information:
- MC Number: ${formData.mcNumber || "Not provided"}
- Equipment Type: ${formData.equipment || "Not specified"}
- Service Interest: ${formData.service || "Not specified"}
- Service Area: ${formData.serviceArea || "Not specified"}

Message:
${formData.message || "No message provided"}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "trincoinc@gmail.com",
      subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, "<br>"),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
