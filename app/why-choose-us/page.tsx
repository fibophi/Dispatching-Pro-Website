'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, ArrowLeft, TrendingUp, Clock, Users, Shield, Phone, MessageSquare, Star } from 'lucide-react'

export const metadata = {
  title: "Why Choose Us - Dispatching.Pro",
  description: "Discover why hundreds of owner-operators trust us. 15% higher rates, 24/7 support, experienced team, and no long-term contracts.",
}

export default function WhyChooseUsPage() {
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
            <Link href="/services" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
              SERVICES
            </Link>
            <Link href="/why-choose-us" className="text-white font-semibold border-b-2 border-yellow-400 pb-1">
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
                className="text-gray-300 hover:text-yellow-400 font-semibold py-2 pl-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/why-choose-us"
                className="text-white font-semibold py-2 border-l-4 border-yellow-400 pl-4"
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
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
            WHY CHOOSE <span className="text-yellow-400">US?</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're not just another dispatch service. We're your partners in success, dedicated to maximizing your
            profits and minimizing your stress.
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

    {/* Results Section */}
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            PROVEN <span className="text-yellow-400">RESULTS</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-2 border-yellow-400 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-black text-yellow-400 mb-4">15%</div>
                <h3 className="text-xl font-black text-white mb-2">HIGHER RATES</h3>
                <p className="text-gray-400">Average rate increase compared to load boards</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-black text-white mb-4">95%</div>
                <h3 className="text-xl font-black text-white mb-2">LOAD ACCEPTANCE</h3>
                <p className="text-gray-400">Our clients accept 95% of loads we find</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-black text-white mb-4">10%</div>
                <h3 className="text-xl font-black text-white mb-2">DOWNTIME REDUCTION</h3>
                <p className="text-gray-400">Average downtime reduction for our clients</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-black text-white mb-4">24/7</div>
                <h3 className="text-xl font-black text-white mb-2">SUPPORT</h3>
                <p className="text-gray-400">Round-the-clock support when you need it</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Key Advantages */}
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            OUR <span className="text-yellow-400">ADVANTAGES</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">HIGHER PAYING LOADS</h3>
                  <p className="text-gray-300 text-lg">
                    Our extensive broker network and negotiation expertise consistently secure rates 15% higher than
                    typical load board rates. We know which brokers pay premium rates and how to get them.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-8 w-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">24/7 AVAILABILITY</h3>
                  <p className="text-gray-300 text-lg">
                    Freight doesn't stop for weekends or holidays, and neither do we. Our team is available around the
                    clock to handle emergencies, find loads, and keep your trucks moving.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">EXPERIENCED TEAM</h3>
                  <p className="text-gray-300 text-lg">
                    Our dispatchers have years of experience specifically in Dry Van and Reefer freight. We understand
                    the nuances of temperature-controlled loads and cross-border requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">NO LONG-TERM CONTRACTS</h3>
                  <p className="text-gray-300 text-lg">
                    We earn your business every day. No lengthy contracts, no cancellation fees. If you're not happy
                    with our service, you can walk away anytime with no penalties.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Star className="h-8 w-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">PERSONALIZED SERVICE</h3>
                  <p className="text-gray-300 text-lg">
                    You're not just a number to us. We learn your preferences, your routes, and your business goals.
                    Every load we book is chosen specifically for your operation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-8 w-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">SPECIALIZED EXPERTISE</h3>
                  <p className="text-gray-300 text-lg">
                    We focus exclusively on Dry Van and Reefer freight for USA Interstate and Cross-Border routes.
                    This specialization means we know the best lanes, rates, and brokers in your market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            WHAT OUR CLIENTS <span className="text-yellow-400">SAY</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-2 border-gray-700">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Since switching to Dispatching.Pro, my revenue increased by 20%. They find loads I never would have
                  found on my own, and the rates are consistently higher."
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-white">Mike Rodriguez</p>
                  <p className="text-gray-400">Owner-Operator, Dry Van</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-yellow-400">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The 24/7 support is a game-changer. When I had a breakdown at 2 AM, they immediately found me a
                  replacement load and handled all the broker communications."
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-white">Sarah Johnson</p>
                  <p className="text-gray-400">Fleet Owner, 3 Reefer Trucks</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-gray-700">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Professional, reliable, and they actually care about my success. I've tried other dispatch
                  services, but none compare to the personal attention I get here."
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-white">David Chen</p>
                  <p className="text-gray-400">Owner-Operator, Cross-Border</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Specialization */}
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            OUR <span className="text-yellow-400">SPECIALIZATION</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-800 border-2 border-yellow-400">
              <CardContent className="p-8">
                <h3 className="text-3xl font-black text-yellow-400 mb-6">DRY VAN EXPERTISE</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>General freight, retail, and e-commerce loads</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Manufacturing and industrial equipment transport</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>High-volume lanes and dedicated routes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Cross-border USA-Canada freight expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-yellow-400">
              <CardContent className="p-8">
                <h3 className="text-3xl font-black text-yellow-400 mb-6">REEFER MASTERY</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Fresh produce from major growing regions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Pharmaceuticals and medical supplies transport</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Frozen foods and temperature-critical cargo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Multi-temperature and specialized reefer loads</span>
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
        <h2 className="text-4xl font-black mb-6 text-gray-900">READY TO EXPERIENCE THE DIFFERENCE?</h2>
        <p className="text-xl mb-8 text-gray-800 font-medium max-w-3xl mx-auto">
          Join the hundreds of owner-operators and fleet owners who trust us to maximize their profits and minimize
          their stress.
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
