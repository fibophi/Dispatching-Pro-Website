import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Calendar, User, ArrowLeft, Share2, TrendingUp, MessageSquare, Phone, DollarSign, Clock, MapPin, Flag, Home, Users } from 'lucide-react'

export const metadata = {
  title: "Canadian Success: 8-Year Veteran Doubles Net Income - Dispatching.Pro",
  description: "See how Tom from Guelph, ON went from $6K to $11K+ net monthly income while securing every weekend with his family through strategic cross-border dispatching.",
}

export default function BlogPost9Page() {
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
              Canadian Success: 8-Year Veteran Doubles Net Income While Getting Weekends Home
            </h1>
            <div className="flex items-center text-gray-400 mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">July 15, 2025</span>
              <User className="h-5 w-5 mr-2" />
              <span className="mr-6">Dispatching.Pro Team</span>
              <span>6 min read</span>
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

      {/* Hero Stats */}
      <section className="pb-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-lg mb-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Flag className="h-8 w-8 text-white opacity-20" />
              </div>
              <h2 className="text-2xl font-black text-white mb-6 text-center">🇨🇦 CANADIAN SUCCESS STORY</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <DollarSign className="h-8 w-8 text-white mx-auto mb-2" />
                    <div className="text-2xl font-black text-white">$28,800</div>
                    <div className="text-red-100 text-sm">CAD Monthly Gross</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
                    <div className="text-2xl font-black text-white">$11,000+</div>
                    <div className="text-red-100 text-sm">CAD Net Monthly</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <Home className="h-8 w-8 text-white mx-auto mb-2" />
                    <div className="text-2xl font-black text-white">Every</div>
                    <div className="text-red-100 text-sm">Weekend Home</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="pb-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-8 text-white">THE TRANSFORMATION</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <div className="bg-gray-800 border-2 border-gray-600 p-6 rounded-lg">
                <h3 className="text-2xl font-black text-gray-400 mb-4 text-center">BEFORE (2017-2024)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Gross:</span>
                    <span className="text-xl font-bold text-gray-400">$20,000 CAD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Net:</span>
                    <span className="text-xl font-bold text-gray-400">$6,000 CAD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Home Time:</span>
                    <span className="text-xl font-bold text-gray-400">2-3 weekends/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Dispatch Method:</span>
                    <span className="text-xl font-bold text-gray-400">Self-dispatching</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Stress Level:</span>
                    <span className="text-xl font-bold text-gray-400">High</span>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 rounded-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">AFTER (JAN-JULY 2025)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Monthly Gross:</span>
                    <span className="text-xl font-bold text-gray-900">$28,800 CAD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Monthly Net:</span>
                    <span className="text-xl font-bold text-gray-900">$11,000+ CAD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Home Time:</span>
                    <span className="text-xl font-bold text-gray-900">Every Weekend</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Dispatch Method:</span>
                    <span className="text-xl font-bold text-gray-900">Dispatching.Pro</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Stress Level:</span>
                    <span className="text-xl font-bold text-gray-900">Low</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Improvement Stats */}
            <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="text-2xl font-black text-yellow-400 mb-4 text-center">THE IMPROVEMENTS</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">+44%</div>
                  <div className="text-gray-300 text-sm">Gross Revenue</div>
                </div>
                <div className="text-center">
                  <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">+83%</div>
                  <div className="text-gray-300 text-sm">Net Income</div>
                </div>
                <div className="text-center">
                  <Home className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-gray-300 text-sm">Weekends Home</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">Better</div>
                  <div className="text-gray-300 text-sm">Family Life</div>
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
                Meet Tom from Guelph, Ontario. For eight years, he'd been grinding it out as an owner-operator, running his own freight and barely scraping by. Despite his experience and dedication, he was stuck in a cycle that many Canadian truckers know all too well: long hours, mediocre pay, and precious little time with family.
              </p>
              
              <h3 className="text-3xl font-black text-white mb-6">The Struggle: 8 Years of Spinning Wheels</h3>
              <p className="text-lg mb-6">
                Since starting his trucking business in 2017, Tom had been doing everything himself. Finding loads, negotiating rates, handling paperwork, managing relationships with brokers - all while trying to keep his truck moving and profitable.
              </p>

              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 mb-8">
                <h4 className="text-xl font-black text-yellow-400 mb-3">Tom's Daily Reality Before Dispatching.Pro:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Spending 2-3 hours daily searching load boards</li>
                  <li>Accepting lower rates due to time pressure and limited options</li>
                  <li>Missing family dinners, school events, and weekend activities</li>
                  <li>Struggling to break $20,000 CAD gross monthly revenue</li>
                  <li>Taking home less than $6,000 after all expenses</li>
                  <li>Feeling burned out and questioning if trucking was worth it</li>
                </ul>
              </div>

              <p className="text-lg mb-8">
                "I was working 70+ hours a week and barely making ends meet," Tom recalls. "My kids were growing up without me, and my wife was basically a single parent. Something had to change."
              </p>

              <h3 className="text-3xl font-black text-white mb-6">🚛 The Decision: January 2025</h3>
              <p className="text-lg mb-6">
                After hearing about Dispatching.Pro from a fellow Canadian driver at a truck stop, Tom decided to give professional dispatch a try. "I was skeptical at first," he admits. "I'd been doing this for eight years - what could they teach me?"
              </p>

              <p className="text-lg mb-8">
                The answer, as it turned out, was everything about maximizing revenue while improving quality of life.
              </p>

              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-800 border-2 border-yellow-400">
                  <CardContent className="p-6">
                    <Flag className="h-8 w-8 text-yellow-400 mb-4" />
                    <h4 className="text-xl font-black text-white mb-3">Cross-Border Expertise</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Southern Ontario to Northeast USA lanes</li>
                      <li>• Streamlined customs and documentation</li>
                      <li>• Premium cross-border rates</li>
                      <li>• Established shipper relationships</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-2 border-yellow-400">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-yellow-400 mb-4" />
                    <h4 className="text-xl font-black text-white mb-3">Strategic Scheduling</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Friday delivery, Monday pickup patterns</li>
                      <li>• Weekend home time guaranteed</li>
                      <li>• Efficient route planning</li>
                      <li>• Minimal deadhead miles</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">The Results: Life-Changing Numbers</h3>
              <p className="text-lg mb-6">
                Within the first month, Tom saw immediate improvements. By month three, the transformation was undeniable. By July 2025, he was averaging $28,800 CAD in gross monthly revenue while banking over $11,000 net - nearly doubling his take-home pay.
              </p>

              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 mb-8">
                <h4 className="text-2xl font-black text-yellow-400 mb-4">💬 What Tom Says Now:</h4>
                <blockquote className="text-xl italic text-white mb-4">
                  "The difference is incredible. I'm making almost double what I was before, but more importantly, I haven't missed a single weekend with my family since January. My kids actually know their dad now."
                </blockquote>
                <blockquote className="text-lg italic text-gray-300 mb-4">
                  "The cross-border lanes they found for me are gold mines. I have regular shippers who know me by name, treat me with respect, and pay premium rates. I wish I'd made this change years ago."
                </blockquote>
                <blockquote className="text-lg italic text-gray-300">
                  "My stress levels are through the floor. I just drive and get paid. No more hours on load boards, no more begging for decent rates. It's like having a business partner who actually cares about my success."
                </blockquote>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">The Dispatching.Pro Difference for Canadian Operators</h3>
              <p className="text-lg mb-6">
                Tom's success highlights what makes our service particularly valuable for Canadian owner-operators:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-xl font-black text-yellow-400 mb-4">Cross-Border Specialization</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Deep knowledge of Canada-US freight lanes</li>
                    <li>Established relationships with cross-border brokers</li>
                    <li>Expertise in customs and documentation</li>
                    <li>Understanding of both Canadian and US regulations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-black text-yellow-400 mb-4">Strategic Route Planning</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Optimized Southern Ontario to Northeast corridors</li>
                    <li>Weekend home time coordination</li>
                    <li>Seasonal freight pattern expertise</li>
                    <li>Relationship building with regular shippers</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6">Beyond the Numbers: A Better Life</h3>
              <p className="text-lg mb-6">
                While the financial improvements are impressive, Tom is quick to point out that the real victory is in his quality of life. "Money is great, but being home every weekend to coach my son's hockey team and attend my daughter's dance recitals - that's priceless."
              </p>

              <p className="text-lg mb-6">
                His wife agrees: "I have my husband back. The stress is gone, the money worries are gone, and we're actually planning family vacations now. It's like we have a completely different life."
              </p>

              <h3 className="text-3xl font-black text-white mb-6">Ready to Write Your Success Story?</h3>
              <p className="text-lg mb-6">
                Tom's transformation from struggling self-dispatcher to successful owner-operator didn't happen overnight, but it happened faster than he ever imagined. If you're a Canadian operator feeling stuck in the same cycle Tom was in, his story could be your story.
              </p>
              
              <p className="text-lg font-bold text-yellow-400">
                Don't spend another weekend away from your family for mediocre pay. Contact us today and let's build your Canadian success story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 text-white">READY FOR YOUR CANADIAN SUCCESS STORY?</h2>
          <p className="text-xl mb-8 text-red-100 font-medium max-w-3xl mx-auto">
            Join Tom and other successful Canadian owner-operators who've doubled their income while getting home every weekend.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-red-600 font-black px-10 py-4 text-xl">
              <Phone className="h-6 w-6 mr-2" />
              CALL 647-362-6649
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-black px-10 py-4 text-xl bg-transparent"
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
