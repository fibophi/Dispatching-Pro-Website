import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, ArrowLeft, Phone, MessageSquare, CheckCircle, Clock, FileText, TrendingUp } from 'lucide-react'

export const metadata = {
  title: "How It Works - Dispatching.Pro",
  description: "Simple 4-step process to get started. From first contact to your first load in just 6 hours. Learn how our dispatch service works.",
}

export default function HowItWorksPage() {
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
            <Link href="/how-it-works" className="text-white font-semibold border-b-2 border-yellow-400 pb-1">
              HOW IT WORKS
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
              NEWS
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
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
            HOW IT <span className="text-yellow-400">WORKS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Getting started is simple. From first contact to your first load, we'll have you up and running in no
            time.
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

    {/* Process Steps */}
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            SIMPLE <span className="text-yellow-400">4-STEP PROCESS</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="bg-gray-900 border-2 border-yellow-400 relative">
              <div className="absolute -top-4 left-4">
                <div className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black">
                  1
                </div>
              </div>
              <CardContent className="p-8 pt-12">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 text-center">CONTACT US</h3>
                <p className="text-gray-300 text-center">
                  Call, text, or WhatsApp us. We'll discuss your needs and answer any questions you have.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-gray-900 border-2 border-gray-700 relative">
              <div className="absolute -top-4 left-4">
                <div className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-black">
                  2
                </div>
              </div>
              <CardContent className="p-8 pt-12">
                <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 text-center">QUICK SETUP</h3>
                <p className="text-gray-300 text-center">
                  Provide your MC number, insurance info, and equipment details. Takes less than 10 minutes.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-gray-900 border-2 border-gray-700 relative">
              <div className="absolute -top-4 left-4">
                <div className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-black">
                  3
                </div>
              </div>
              <CardContent className="p-8 pt-12">
                <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 text-center">FIND LOADS</h3>
                <p className="text-gray-300 text-center">
                  We immediately start searching for high-paying loads that match your equipment and preferences.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="bg-gray-900 border-2 border-gray-700 relative">
              <div className="absolute -top-4 left-4">
                <div className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-black">
                  4
                </div>
              </div>
              <CardContent className="p-8 pt-12">
                <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 text-center">START ROLLING</h3>
                <p className="text-gray-300 text-center">
                  Accept the load, hit the road, and start making money. We handle everything else.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            YOUR FIRST <span className="text-yellow-400">24 HOURS</span>
          </h2>
          <div className="space-y-8">
            {/* Hour 0 */}
            <div className="flex items-start space-x-6">
              <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-gray-900" />
              </div>
              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 flex-1">
                <h3 className="text-xl font-black text-yellow-400 mb-2">HOUR 0 - FIRST CONTACT</h3>
                <p className="text-gray-300">
                  You call or message us. We discuss your operation, equipment, and preferred lanes. Setup begins
                  immediately.
                </p>
              </div>
            </div>

            {/* Hour 1 */}
            <div className="flex items-start space-x-6">
              <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black">1h</span>
              </div>
              <div className="bg-gray-800 border-l-4 border-gray-600 p-6 flex-1">
                <h3 className="text-xl font-black text-white mb-2">HOUR 1 - DOCUMENTATION</h3>
                <p className="text-gray-300">
                  We verify your MC number, insurance, and equipment details. All paperwork is completed and filed.
                </p>
              </div>
            </div>

            {/* Hour 2 */}
            <div className="flex items-start space-x-6">
              <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black">2h</span>
              </div>
              <div className="bg-gray-800 border-l-4 border-gray-600 p-6 flex-1">
                <h3 className="text-xl font-black text-white mb-2">HOUR 2 - LOAD SEARCH BEGINS</h3>
                <p className="text-gray-300">
                  Our dispatchers start actively searching for loads. We contact our broker network and check all
                  available options.
                </p>
              </div>
            </div>

            {/* Hour 4 */}
            <div className="flex items-start space-x-6">
              <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black">4h</span>
              </div>
              <div className="bg-gray-800 border-l-4 border-gray-600 p-6 flex-1">
                <h3 className="text-xl font-black text-white mb-2">HOUR 4 - FIRST LOAD OPTIONS</h3>
                <p className="text-gray-300">
                  We present you with 2-3 high-quality load options with rates, pickup/delivery details, and our
                  recommendations.
                </p>
              </div>
            </div>

            {/* Hour 6 */}
            <div className="flex items-start space-x-6">
              <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-gray-900" />
              </div>
              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 flex-1">
                <h3 className="text-xl font-black text-yellow-400 mb-2">HOUR 6 - LOAD BOOKED</h3>
                <p className="text-gray-300">
                  You accept a load, we handle the booking, confirmation, and send you all the necessary paperwork.
                  You're ready to roll!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What We Handle */}
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            WHAT WE <span className="text-yellow-400">HANDLE FOR YOU</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-yellow-400 mb-8">BEFORE THE LOAD</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Load searching across multiple platforms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Rate negotiation with brokers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Load confirmation and booking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Route planning and optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Shipper and receiver contact information</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black text-yellow-400 mb-8">DURING & AFTER</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Check calls and status updates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Problem resolution and support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Delivery confirmation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Paperwork submission to brokers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Next load search begins immediately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Requirements */}
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            WHAT YOU <span className="text-yellow-400">NEED TO GET STARTED</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-2 border-yellow-400">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-yellow-400 mb-6">REQUIRED DOCUMENTS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Valid MC Number</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Current Insurance Certificate</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">W9 Tax Form</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Equipment Details (Year, Make, Model)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-white mb-6">EQUIPMENT REQUIREMENTS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Dry Van or Reefer Trailer</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Reliable Communication (Phone/GPS)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Clean Driving Record</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Professional Attitude</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black mb-6 text-gray-900">READY TO GET STARTED?</h2>
        <p className="text-xl mb-8 text-gray-800 font-medium max-w-3xl mx-auto">
          The process is simple, fast, and designed to get you earning money as quickly as possible. Contact us now
          and let's get you rolling.
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
              WhatsApp US
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
