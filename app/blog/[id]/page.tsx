import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Calendar, User, ArrowLeft, Share2, TrendingUp, MessageSquare, Phone } from 'lucide-react'

export const metadata = {
  title: "Blog Post - Dispatching.Pro",
  description: "Read the latest insights and tips from our dispatching experts.",
}

// This would typically come from a database or CMS
const blogPost = {
  id: 1,
  title: "5 Ways to Maximize Your Revenue Per Mile in 2025",
  content: `
    <p>As we enter 2025, the trucking industry continues to evolve with new challenges and opportunities. For owner-operators and small fleet owners, maximizing revenue per mile isn't just about finding loads—it's about strategic decision-making that impacts your bottom line.</p>
    
    <h2>1. Choose Your Lanes Wisely</h2>
    <p>Not all freight lanes are created equal. Our dispatch team analyzes market data daily to identify the most profitable routes. High-demand lanes like California to Texas or Florida to New York consistently offer better rates, but they also come with more competition.</p>
    
    <p><strong>Pro Tip:</strong> Focus on lanes where you can secure backhauls. A round trip with two paying loads is always more profitable than deadheading back.</p>
    
    <h2>2. Build Relationships with Quality Brokers</h2>
    <p>While load boards are convenient, the best rates often come from direct relationships with brokers. Our dispatchers maintain relationships with over 500 brokers, allowing us to negotiate rates that are 15-20% higher than posted board rates.</p>
    
    <h2>3. Optimize Your Equipment Utilization</h2>
    <p>Every day your truck sits idle costs you money. Our data shows that trucks managed by professional dispatchers have 95% utilization rates compared to 75% for self-dispatched operators.</p>
    
    <h2>4. Understand Seasonal Patterns</h2>
    <p>Freight rates fluctuate throughout the year. Produce season, back-to-school, and holiday shipping create opportunities for higher rates. Planning your maintenance and time off around these patterns can significantly impact your annual revenue.</p>
    
    <h2>5. Invest in Technology and Efficiency</h2>
    <p>Modern dispatch services use advanced load matching algorithms and route optimization software. These tools can identify opportunities that manual searching might miss, leading to better rates and reduced fuel costs.</p>
    
    <h2>The Bottom Line</h2>
    <p>Maximizing revenue per mile requires expertise, relationships, and constant market monitoring. That's why many successful owner-operators choose to work with professional dispatch services. The 5-10% commission pays for itself through higher rates and better utilization.</p>
    
    <p>Ready to see how professional dispatch can impact your revenue? Contact our team today for a free consultation.</p>
  `,
  category: "Revenue Tips",
  date: "January 15, 2025",
  author: "Mike Rodriguez",
  readTime: "5 min read",
}

const relatedPosts = [
  {
    id: 2,
    title: "Cross-Border Freight: What You Need to Know",
    category: "Regulations",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Fuel Costs Rising: How to Optimize Your Routes",
    category: "Cost Savings",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Reefer vs Dry Van: Which is More Profitable?",
    category: "Equipment",
    readTime: "10 min read"
  }
]

export default function BlogPostPage() {
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
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              {blogPost.title}
            </h1>
            <div className="flex items-center text-gray-400 mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">{blogPost.date}</span>
              <User className="h-5 w-5 mr-2" />
              <span className="mr-6">{blogPost.author}</span>
              <span>{blogPost.readTime}</span>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert max-w-none"
              style={{
                color: '#d1d5db',
              }}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 text-gray-900">READY TO MAXIMIZE YOUR REVENUE?</h2>
          <p className="text-xl mb-8 text-gray-800 font-medium max-w-3xl mx-auto">
            Let our expert dispatchers help you implement these strategies and start earning more per mile today.
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
                GET STARTED TODAY
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 text-white">
              RELATED <span className="text-yellow-400">ARTICLES</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-4">{post.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                      <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                        <Link href={`/blog/${post.id}`}>READ</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
