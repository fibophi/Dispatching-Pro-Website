import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Truck, ArrowLeft, Phone, Mail, Clock, MessageSquare } from 'lucide-react'

export const metadata = {
  title: "Contact Us - Dispatching.Pro",
  description: "Ready to get started? Contact us by phone, WhatsApp, or email. Available 24/7 to help you find high-paying loads.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b-2 border-yellow-400 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Truck className="h-7 w-7 text-gray-900" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">DISPATCHING</span>
                <span className="text-2xl font-black text-yellow-400">.PRO</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
                HOME
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
                SERVICES
              </Link>
              <Link
                href="/why-choose-us"
                className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors"
              >
                WHY US
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors"
              >
                HOW IT WORKS
              </Link>
              <Link href="/contact" className="text-white font-semibold border-b-2 border-yellow-400 pb-1">
                CONTACT
              </Link>
            </nav>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6">
              <Link href="/contact">GET STARTED</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
              GET <span className="text-yellow-400">STARTED</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to stop chasing loads? Contact us today and start earning more with professional dispatch.
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 text-white">
              MULTIPLE WAYS TO <span className="text-yellow-400">REACH US</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="bg-gray-900 border-2 border-yellow-400 hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">CALL</h3>
                  <p className="text-2xl font-bold text-yellow-400 mb-2">647-362-6649</p>
                  <p className="text-gray-400">Fastest way to get started</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 hover:scale-105 transition-all">
                <CardContent className="p-8 text-center">
                  <a
                    href="https://wa.me/16473626649"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-4">WHATSAPP</h3>
                    <p className="text-2xl font-bold text-white mb-2">647-362-6649</p>
                    <p className="text-gray-400">Quick questions & updates</p>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 hover:scale-105 transition-all">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                  <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">EMAIL</h3>
                  <p className="text-lg font-bold text-white mb-2 text-center whitespace-nowrap">
                    solutions@dispatching.pro
                  </p>
                  <p className="text-gray-400">Detailed inquiries</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 hover:scale-105 transition-all">
                <CardContent className="p-8 text-center">
                  <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">AVAILABILITY</h3>
                  <p className="text-2xl font-bold text-yellow-400 mb-2">24/7</p>
                  <p className="text-gray-400">We're always here</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-black mb-8 text-white">
                  SEND US A <span className="text-yellow-400">MESSAGE</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Fill out the form and we'll get back to you within the hour. Include your MC number and equipment type
                  for faster service.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800 border-l-4 border-yellow-400 p-6">
                    <h3 className="text-white font-bold mb-2">What to Include:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Your MC number</li>
                      <li>• Equipment type (Dry Van, Reefer, etc.)</li>
                      <li>• Current location</li>
                      <li>• Preferred lanes or areas</li>
                      <li>• Any special requirements</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 border-l-4 border-yellow-400 p-6">
                    <h3 className="text-white font-bold mb-2">Response Time:</h3>
                    <p className="text-gray-300">
                      We typically respond within 1 hour during business hours, and within 4 hours on weekends and
                      holidays.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-800 border-2 border-gray-700">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-white font-bold mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-white font-bold mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white font-bold mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-bold mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="mcNumber" className="block text-white font-bold mb-2">
                          MC Number
                        </label>
                        <Input
                          id="mcNumber"
                          type="text"
                          className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="equipment" className="block text-white font-bold mb-2">
                          Equipment Type
                        </label>
                        <select className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-yellow-400 focus:outline-none">
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
                      <label htmlFor="service" className="block text-white font-bold mb-2">
                        Service Interest
                      </label>
                      <select className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-yellow-400 focus:outline-none">
                        <option value="">Select Service</option>
                        <option value="basic">Basic - Pay Per Load</option>
                        <option value="premium">Premium - Full Service</option>
                        <option value="custom">Custom - Fleet Solutions</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceArea" className="block text-white font-bold mb-2">
                        Service Area
                      </label>
                      <select className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-yellow-400 focus:outline-none">
                        <option value="">Select Service Area</option>
                        <option value="usa-interstate">USA Interstate</option>
                        <option value="cross-border">Cross-Border</option>
                        <option value="both">Both USA Interstate & Cross-Border</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-bold mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your operation, current location, preferred lanes, or any questions you have..."
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black py-3 text-lg"
                    >
                      SEND MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 text-gray-900">NEED LOADS RIGHT NOW?</h2>
          <p className="text-xl mb-8 text-gray-800 font-medium max-w-3xl mx-auto">
            Don't wait for the form. Call or text us directly and we'll start working on your loads immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-yellow-400 font-black px-10 py-4 text-xl">
              <Phone className="h-6 w-6 mr-2" />
              CALL 647-362-6649
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-yellow-400 font-black px-10 py-4 text-xl bg-transparent"
            >
              <a
                href="https://wa.me/16473626649"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageSquare className="h-6 w-6 mr-2" />
                WhatsApp 647-362-6649
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t-2 border-yellow-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <Truck className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <span className="text-xl font-black text-white">DISPATCHING</span>
                  <span className="text-xl font-black text-yellow-400">.PRO</span>
                </div>
              </div>
              <p className="text-gray-400">
                Professional dispatch services for Dry Van & Reefer carriers running USA Interstate and Cross-Border
                freight.
              </p>
            </div>
            <div>
              <h4 className="font-black mb-4 text-white">SERVICES</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-yellow-400 transition-colors">
                    Basic Dispatch
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-yellow-400 transition-colors">
                    Premium Service
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-yellow-400 transition-colors">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-white">COMPANY</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/why-choose-us" className="hover:text-yellow-400 transition-colors">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-yellow-400 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-white">CONTACT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 647-362-6649</li>
                <li>Email: solutions@dispatching.pro</li>
                <li className="text-yellow-400 font-bold">Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Dispatching.Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
