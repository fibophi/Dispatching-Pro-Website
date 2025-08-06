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

