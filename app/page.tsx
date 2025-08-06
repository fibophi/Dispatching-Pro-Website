import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Phone, Mail, MessageSquare, ArrowRight, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react'

export const metadata = {
  title: "Dispatching.Pro - Professional Truck Dispatch Services",
  description: "Professional dispatch services for Dry Van & Reefer carriers running USA Interstate and Cross-Border freight. 24/7 support, higher rates, no contracts.",
}

export default function HomePage() {
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
              <Link href="/" className="text-white font-semibold border-b-2 border-yellow-400 pb-1">
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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
            <span className="block">KEEP ROLLING.</span>
            <span className="block text-yellow-400">WE'LL HANDLE THE REST.</span>
          </h1>
          <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-300">
              <span className="text-yellow-400 font-bold">DRY VAN & REEFER SPECIALISTS</span> for USA Interstate and
              Cross-Border freight. Professional dispatch for FTL & LTL carriers who demand results.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg">
              <div className="text-3xl font-black text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300 font-semibold">Support Available</div>
            </div>
            <div className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg">
              <div className="text-3xl font-black text-yellow-400 mb-2">15%</div>
              <div className="text-gray-300 font-semibold">Higher Rates</div>
            </div>
            <div className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg">
              <div className="text-3xl font-black text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300 font-semibold">Load Acceptance</div>
            </div>
            <div className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg">
              <div className="text-3xl font-black text-yellow-400 mb-2">0</div>
              <div className="text-gray-300 font-semibold">Setup Fees</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black px-10 py-4 text-xl">
              <Link href="/contact" className="flex items-center">
                GET STARTED NOW
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-black px-10 py-4 text-xl bg-transparent"
            >
              <Link href="/services" className="flex items-center">
                VIEW SERVICES
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12 text-white">
              READY TO <span className="text-yellow-400">GET STARTED?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-2 border-yellow-400 hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">CALL</h3>
                  <p className="text-2xl font-bold text-yellow-400 mb-4">647-362-6649</p>
                  <p className="text-gray-400">Talk to a dispatcher in 2 minutes</p>
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
                    <h3 className="text-2xl font-black text-white mb-4">WHATSAPP</h3>
                    <p className="text-2xl font-bold text-white mb-4">647-362-6649</p>
                    <p className="text-gray-400">Quick questions & updates</p>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 hover:scale-105 transition-all">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center">
                  <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">EMAIL</h3>
                  <p className="text-xl font-bold text-white mb-4 text-center whitespace-nowrap">
                    solutions@dispatching.pro
                  </p>
                  <p className="text-gray-400">Detailed inquiries</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 text-white">
              OUR <span className="text-yellow-400">SERVICES</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-yellow-400 mb-4">BASIC</h3>
                  <p className="text-4xl font-black text-white mb-4">PAY PER LOAD</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Load finding & booking
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Rate negotiation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Basic support
                    </li>
                  </ul>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                    <Link href="/services">LEARN MORE</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-2 border-yellow-400">
                <CardContent className="p-8">
                  <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-black mb-4 inline-block">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl font-black text-yellow-400 mb-4">PREMIUM</h3>
                  <p className="text-4xl font-black text-white mb-4">FULL SERVICE</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Everything in Basic
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      24/7 support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Paperwork handling
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Route optimization
                    </li>
                  </ul>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                    <Link href="/services">LEARN MORE</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-yellow-400 mb-4">CUSTOM</h3>
                  <p className="text-4xl font-black text-white mb-4">FLEET SOLUTIONS</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Everything in Premium
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Dedicated dispatcher
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      Custom reporting
                    </li>
                  </ul>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                    <Link href="/services">LEARN MORE</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 text-white">
              WHY CHOOSE <span className="text-yellow-400">DISPATCHING.PRO?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-gray-900" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">HIGHER RATES</h3>
                <p className="text-gray-300 text-lg">
                  Our network and negotiation skills get you 15% higher rates on average compared to load boards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-gray-900" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">24/7 SUPPORT</h3>
                <p className="text-gray-300 text-lg">
                  Round-the-clock support means you're never alone on the road. We're here when you need us.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-gray-900" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">EXPERIENCED TEAM</h3>
                <p className="text-gray-300 text-lg">
                  Our dispatchers have years of experience in Dry Van and Reefer freight across North America.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black px-10 py-4">
                <Link href="/why-choose-us">LEARN MORE ABOUT US</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 text-gray-900">STOP CHASING LOADS. START MAKING MONEY.</h2>
          <p className="text-xl mb-8 text-gray-800 font-medium max-w-3xl mx-auto">
            Join hundreds of owner-operators and small fleets who trust us to keep their trucks moving and profitable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-yellow-400 font-black px-10 py-4 text-xl">
              <Link href="/contact" className="flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                CALL 647-362-6649
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-yellow-400 font-black px-10 py-4 text-xl bg-transparent"
            >
              <Link href="/contact" className="flex items-center">
                GET STARTED TODAY
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
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
