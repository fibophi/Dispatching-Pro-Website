"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Recaptcha } from "./recaptcha"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [recaptchaToken, setRecaptchaToken] = useState<string>("")
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    if (!recaptchaToken) {
      setResult({ success: false, error: "Please complete the captcha verification." })
      return
    }

    formData.append("recaptcha-token", recaptchaToken)

    startTransition(async () => {
      const response = await submitContactForm(formData)
      setResult(response)

      if (response.success) {
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
        setRecaptchaToken("")
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset()
        }
      }
    })
  }

  return (
    <Card className="bg-gray-800 border-2 border-gray-700">
      <CardContent className="p-6 md:p-8">
        {result && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              result.success
                ? "bg-green-900 border border-green-600 text-green-200"
                : "bg-red-900 border border-red-600 text-red-200"
            }`}
          >
            {result.success ? result.message : result.error}
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-white font-bold mb-2 text-sm md:text-base">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-white font-bold mb-2 text-sm md:text-base">
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-white font-bold mb-2 text-sm md:text-base">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-bold mb-2 text-sm md:text-base">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mcNumber" className="block text-white font-bold mb-2 text-sm md:text-base">
                MC Number
              </label>
              <Input
                id="mcNumber"
                name="mcNumber"
                type="text"
                className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="equipment" className="block text-white font-bold mb-2 text-sm md:text-base">
                Equipment Type
              </label>
              <select
                name="equipment"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-yellow-400 focus:outline-none text-sm md:text-base"
              >
                <option value="">Select Equipment</option>
                <option value="dry-van">Dry Van</option>
                <option value="reefer">Reefer</option>
                <option value="flatbed">Flatbed</option>
                <option value="step-deck">Step Deck</option>
                <option value="power-only">Power Only</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-white font-bold mb-2 text-sm md:text-base">
              Service Interest
            </label>
            <select
              name="service"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-yellow-400 focus:outline-none text-sm md:text-base"
            >
              <option value="">Select Service</option>
              <option value="basic">Basic - Pay Per Load</option>
              <option value="premium">Premium - Full Service</option>
              <option value="custom">Custom - Fleet Solutions</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="serviceArea" className="block text-white font-bold mb-2 text-sm md:text-base">
              Service Area
            </label>
            <select
              name="serviceArea"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-yellow-400 focus:outline-none text-sm md:text-base"
            >
              <option value="">Select Service Area</option>
              <option value="usa-interstate">USA Interstate</option>
              <option value="cross-border">Cross-Border</option>
              <option value="both">Both USA Interstate & Cross-Border</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-bold mb-2 text-sm md:text-base">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your operation, current location, preferred lanes, or any questions you have..."
              className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 text-sm md:text-base"
            />
          </div>

          <div className="flex justify-center">
            <Recaptcha onVerify={setRecaptchaToken} onExpire={() => setRecaptchaToken("")} />
          </div>

          <Button
            type="submit"
            disabled={isPending || !recaptchaToken}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black py-3 text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "SENDING..." : "SEND MESSAGE"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
