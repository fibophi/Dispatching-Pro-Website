'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, ArrowLeft, CheckCircle, X, Phone, MessageSquare } from 'lucide-react'

export const metadata = {
  title: "Our Services - Dispatching.Pro",
  description: "Choose from Basic, Premium, or Custom dispatch services. Pay-per-load to full fleet management solutions for dry van and reefer carriers.",
}

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
              HOME
            </Link>
            <Link href="/services" className="text-white font-semibold border-b-2 border-yellow-400 pb-1">
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
            <Link href="/blog" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
              NEWS
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
              CONTACT
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <Button className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6">
            <Link href="/contact">GET STARTED</Link>
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-yellow-400 font-semibold py-2 pl-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/services" 
                className="text-white font-semibold py-2 border-l-4 border-yellow-400 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/why-choose-us"
                className="text-gray-300 hover:text-yellow-400 font-semibold py-2 pl-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                WHY US
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-300 hover:text-yellow-400 font-semibold py-2 pl-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOW IT WORKS
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-300 hover:text-yellow-400 font-semibold py-2 pl-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                NEWS
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-yellow-400 font-semibold py-2 pl-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <div className="pt-4 pl-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>GET STARTED</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 text-white">
            OUR <span className="text-yellow-400">SERVICES</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Choose the dispatch service that fits your operation. From pay-per-load to full fleet management.
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

    {/* Service Plans */}
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardHeader className="bg-gray-800 border-b border-gray-700">
                <CardTitle className="text-3xl font-black text-white">BASIC</CardTitle>
                <div className="text-4xl font-black text-yellow-400">PAY PER LOAD</div>
                <p className="text-gray-400">Perfect for getting started</p>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Load finding & booking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Rate negotiation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Load confirmation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Basic support (business hours)</span>
                  </li>
                  <li className="flex items-center">
                    <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-500">24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-500">Paperwork handling</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black py-3">
                  <Link href="/contact">GET STARTED</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-gray-900 border-2 border-yellow-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-black">
                  MOST POPULAR
                </div>
              </div>
              <CardHeader className="bg-gray-800 border-b border-gray-700">
                <CardTitle className="text-3xl font-black text-white">PREMIUM</CardTitle>
                <div className="text-4xl font-black text-yellow-400">FULL SERVICE</div>
                <p className="text-gray-400">Best for single-truck to 4 trucks</p>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">24/7 support & monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Complete paperwork handling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Route optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Fuel optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Weekly performance reports</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black py-3">
                  <Link href="/contact">GET STARTED</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Custom Plan */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardHeader className="bg-gray-800 border-b border-gray-700">
                <CardTitle className="text-3xl font-black text-white">CUSTOM</CardTitle>
                <div className="text-4xl font-black text-yellow-400">FLEET SOLUTIONS</div>
                <p className="text-gray-400">For 5+ trucks & fleets</p>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Everything in Premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Dedicated dispatcher team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Custom reporting dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Fleet management tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Priority load access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Custom pricing structure</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black py-3">
                  <Link href="/contact">CONTACT US</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Add-On Services */}
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            ADD-ON <span className="text-yellow-400">SERVICES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-black text-yellow-400 mb-4">FACTORING SETUP</h3>
                <p className="text-gray-300 mb-4">We'll help you set up factoring with the best rates</p>
                <p className="text-2xl font-bold text-white">$99</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-black text-yellow-400 mb-4">PERMIT SERVICE</h3>
                <p className="text-gray-300 mb-4">We handle all your permit needs</p>
                <p className="text-2xl font-bold text-white">$49/permit</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-black text-yellow-400 mb-4">FUEL CARDS</h3>
                <p className="text-gray-300 mb-4">Best fuel card programs with discounts</p>
                <p className="text-2xl font-bold text-white">FREE</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-black text-yellow-400 mb-4">INSURANCE HELP</h3>
                <p className="text-gray-300 mb-4">Connect with trusted insurance providers</p>
                <p className="text-2xl font-bold text-white">FREE</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Equipment Types */}
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            EQUIPMENT WE <span className="text-yellow-400">SPECIALIZE IN</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-2 border-yellow-400">
              <CardContent className="p-8">
                <h3 className="text-3xl font-black text-yellow-400 mb-6">DRY VAN</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    General freight & consumer goods
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    Retail & e-commerce loads
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    Manufacturing & industrial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    Cross-border USA-Canada
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-yellow-400">
              <CardContent className="p-8">
                <h3 className="text-3xl font-black text-yellow-400 mb-6">REEFER</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    Fresh produce & food products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    Pharmaceuticals & medical
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    Frozen & temperature-controlled
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    High-value temperature-sensitive
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
          Choose your service level and start earning more with professional dispatch. No setup fees, no long-term
          contracts.
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
