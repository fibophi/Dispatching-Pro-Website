import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Calendar, User, ArrowLeft, Share2, TrendingUp, MessageSquare, Phone, DollarSign, Clock, MapPin, Thermometer, Globe } from 'lucide-react'

export const metadata = {
  title: "Cross-Border Reefer Success: $32K Monthly Revenue - Dispatching.Pro",
  description: "Discover how our dispatch service helped a reefer operator increase monthly revenue from $18K to $32K in just 6 months with cross-border freight.",
}

export default function BlogPost8Page() {
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
              <Link href="/blog" className="text-white font-semibold border-b-2 border-yellow-400 pb-1">
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

      {/* Back to Blog */}
      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to News
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-black">
                SUCCESS STORIES
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              Cross-Border Reefer Success: From $18K to $32K Monthly Revenue in 6 Months
            </h1>
            <div className="flex items-center text-gray-400 mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">August 15, 2025</span>
              <User className="h-5 w-5 mr-2" />
              <span className="mr-6">Dispatching.Pro Team</span>
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                <Share2 className="h-4 w-4 mr-2" />
                Share Success Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="pb-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <div className="bg-gray-800 border-2 border-gray-600 p-6 rounded-lg">
                <h3 className="text-2xl font-black text-gray-400 mb-4 text-center">BEFORE DISPATCHING.PRO</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Revenue:</span>
                    <span className="text-xl font-bold text-gray-400">$18,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Revenue Per Mile:</span>
                    <span className="text-xl font-bold text-gray-400">$1.85</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Home Time:</span>
                    <span className="text-xl font-bold text-gray-400">2-3 weeks out</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Deadhead %:</span>
                    <span className="text-xl font-bold text-gray-400">25%</span>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 rounded-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">AFTER 6 MONTHS WITH US</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Monthly Revenue:</span>
                    <span className="text-xl font-bold text-gray-900">$32,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Revenue Per Mile:</span>
                    <span className="text-xl font-bold text-gray-900">$2.65</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Home Time:</span>
                    <span className="text-xl font-bold text-gray-900">Every 10-12 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Deadhead %:</span>
                    <span className="text-xl font-bold text-gray-900">8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="text-2xl font-black text-yellow-400 mb-4 text-center">THE TRANSFORMATION</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">+78%</div>
                  <div className="text-gray-300 text-sm">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">+$0.80</div>
                  <div className="text-gray-300 text-sm">Per Mile Increase</div>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">40%</div>
                  <div className="text-gray-300 text-sm">More Home Time</div>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">-17%</div>
                  <div className="text-gray-300 text-sm">Less Deadhead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <p className="text-xl leading-relaxed mb-8">
                When Maria contacted us in February 2025, she was frustrated. Despite 8 years of experience running reefer loads, she was stuck in a cycle of low-paying freight, excessive deadhead miles, and weeks away from home. Six months later, she's earning 78% more revenue and getting home twice as often.
              </p>
              
              <h3 className="text-3xl font-black text-white mb-6">The Challenge: Experienced but Underearning</h3>
              <p className="text-lg mb-6">
                Maria had been self-dispatching for years, relying primarily on load boards and a few direct broker relationships. While she knew the reefer business inside and out, she was missing out on the premium freight that makes the difference between surviving and thriving.
              </p>

              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 mb-8">
                <h4 className="text-xl font-black text-yellow-400 mb-3">Her Main Pain Points:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Spending 3-4 hours daily searching for loads</li>
                  <li>Accepting lower rates due to time pressure</li>
                  <li>High deadhead miles between loads (25% average)</li>
                  <li>Limited access to premium cross-border freight</li>
                  <li>Inconsistent home time affecting family life</li>
                </ul>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">🚛 The Dispatching.Pro Solution</h3>
              <p className="text-lg mb-6">
                We immediately recognized Maria's potential. With her clean record, reliable equipment, and reefer expertise, she was perfect for our premium cross-border produce lanes. Here's what we implemented:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-800 border-2 border-yellow-400">
                  <CardContent className="p-6">
                    <Thermometer className="h-8 w-8 text-yellow-400 mb-4" />
                    <h4 className="text-xl font-black text-white mb-3">Specialized Reefer Focus</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Premium produce loads from California</li>
                      <li>• High-value pharmaceutical freight</li>
                      <li>• Temperature-critical specialty loads</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-2 border-yellow-400">
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-yellow-400 mb-4" />
                    <h4 className="text-xl font-black text-white mb-3">Cross-Border Expertise</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• USA-Canada produce corridors</li>
                      <li>• Streamlined customs documentation</li>
                      <li>• Premium cross-border rates</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">The Results Speak for Themselves</h3>
              <p className="text-lg mb-6">
                Within the first month, Maria saw a 35% increase in her revenue per mile. By month three, she was consistently hitting $30K+ monthly revenue. But the numbers only tell part of the story.
              </p>

              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 mb-8">
                <h4 className="text-2xl font-black text-yellow-400 mb-4">💬 What Maria Says:</h4>
                <blockquote className="text-xl italic text-white mb-4">
                  "I thought I knew the reefer business, but these guys opened my eyes to opportunities I never knew existed. The cross-border produce loads alone changed everything. I'm making more money in 10 days than I used to make in 3 weeks."
                </blockquote>
                <blockquote className="text-lg italic text-gray-300">
                  "But honestly, the best part is being home with my kids more often. My daughter said 'Mommy, you're home so much more now!' That's worth more than any paycheck."
                </blockquote>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">The Dispatching.Pro Difference</h3>
              <p className="text-lg mb-6">
                Maria's success isn't an accident. It's the result of our systematic approach to maximizing revenue while improving quality of life:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-xl font-black text-yellow-400 mb-4">Strategic Load Planning</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Multi-load trip planning</li>
                    <li>Minimal deadhead routing</li>
                    <li>Home time coordination</li>
                    <li>Seasonal opportunity mapping</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-black text-yellow-400 mb-4">Premium Market Access</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Exclusive broker relationships</li>
                    <li>Cross-border freight networks</li>
                    <li>High-value reefer specialists</li>
                    <li>Rate negotiation expertise</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-6">
                If you're an experienced operator who feels stuck in low-paying freight, Maria's story could be your story. Whether you're running dry van, reefer, or specialized equipment, we have the expertise and network to maximize your earning potential.
              </p>
              
              <p className="text-lg font-bold text-yellow-400">
                Don't spend another month leaving money on the table. Contact us today for your free consultation and let's build your success story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 text-gray-900">READY TO INCREASE YOUR REVENUE BY 78%?</h2>
          <p className="text-xl mb-8 text-gray-800 font-medium max-w-3xl mx-auto">
            Join Maria and hundreds of other successful owner-operators who've transformed their businesses with our expert dispatch services.
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
              <Link href="/contact" className="flex items-center">
                GET YOUR FREE CONSULTATION
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
                  <Link href="/blog" className="hover:text-yellow-400 transition-colors">
                    News
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
