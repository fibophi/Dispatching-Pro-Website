import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Calendar, User, ArrowRight, TrendingUp, AlertCircle, Fuel, Route } from 'lucide-react'

export const metadata = {
  title: "Industry Blog - Dispatching.Pro",
  description: "Stay updated with the latest trucking industry insights, dispatch tips, and company news from Dispatching.Pro experts.",
}

const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Maximize Your Revenue Per Mile in 2025",
    excerpt: "Learn the proven strategies our dispatchers use to help owner-operators increase their revenue per mile by up to 20%.",
    category: "Revenue Tips",
    date: "January 15, 2025",
    author: "Mike Rodriguez",
    readTime: "5 min read",
    image: "/money-truck-highway.png",
    featured: true,
    icon: TrendingUp
  },
  {
    id: 2,
    title: "Cross-Border Freight: What You Need to Know",
    excerpt: "Essential documentation, regulations, and tips for successful USA-Canada cross-border freight operations.",
    category: "Regulations",
    date: "January 12, 2025",
    author: "Sarah Johnson",
    readTime: "8 min read",
    image: "/truck-border-crossing.png",
    featured: false,
    icon: Route
  },
  {
    id: 3,
    title: "Fuel Costs Rising: How to Optimize Your Routes",
    excerpt: "With fuel prices climbing, route optimization becomes critical. Here's how our dispatch team saves drivers money.",
    category: "Cost Savings",
    date: "January 10, 2025",
    author: "David Chen",
    readTime: "6 min read",
    image: "/fuel-pump-truck-route.png",
    featured: false,
    icon: Fuel
  },
  {
    id: 4,
    title: "ELD Compliance: Avoiding Common Violations",
    excerpt: "Stay compliant and avoid costly violations with these essential ELD best practices every driver should know.",
    category: "Compliance",
    date: "January 8, 2025",
    author: "Lisa Martinez",
    readTime: "7 min read",
    image: "/placeholder-k3mqp.png",
    featured: false,
    icon: AlertCircle
  },
  {
    id: 5,
    title: "Reefer vs Dry Van: Which is More Profitable?",
    excerpt: "A comprehensive analysis of profit margins, operating costs, and market demand for both equipment types.",
    category: "Equipment",
    date: "January 5, 2025",
    author: "Mike Rodriguez",
    readTime: "10 min read",
    image: "/reefer-dry-van.png",
    featured: false,
    icon: Truck
  },
  {
    id: 6,
    title: "Company Update: New Partnership with Major Broker",
    excerpt: "We're excited to announce our new partnership that will bring more high-paying loads to our clients.",
    category: "Company News",
    date: "January 3, 2025",
    author: "Dispatching.Pro Team",
    readTime: "3 min read",
    image: "/placeholder-yk2n9.png",
    featured: false,
    icon: TrendingUp
  }
]

const categories = ["All", "Revenue Tips", "Regulations", "Cost Savings", "Compliance", "Equipment", "Company News"]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
                BLOG
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
              INDUSTRY <span className="text-yellow-400">INSIGHTS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay ahead of the curve with expert insights, industry trends, and practical tips from our experienced dispatch team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={
                    category === "All"
                      ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold"
                      : "border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-black">
                  FEATURED POST
                </span>
              </div>
              <Card className="bg-gray-800 border-2 border-yellow-400 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-black text-white mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-300 text-lg mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-gray-400 text-sm mb-6">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold w-fit">
                      <Link href={`/blog/${featuredPost.id}`} className="flex items-center">
                        READ MORE
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 text-white">
              LATEST <span className="text-yellow-400">POSTS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => {
                const IconComponent = post.icon
                return (
                  <Card key={post.id} className="bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 transition-colors overflow-hidden group">
                    <div className="relative h-48">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gray-900 bg-opacity-90 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <IconComponent className="h-3 w-3 mr-1" />
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-gray-400 text-sm mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm">
                          <User className="h-4 w-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                          <Link href={`/blog/${post.id}`}>READ</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 text-gray-900">STAY INFORMED</h2>
          <p className="text-xl mb-8 text-gray-800 font-medium max-w-3xl mx-auto">
            Get the latest industry insights, dispatch tips, and company updates delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-900 focus:outline-none focus:border-gray-700"
            />
            <Button className="bg-gray-900 hover:bg-gray-800 text-yellow-400 font-black px-8 py-3">
              SUBSCRIBE
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
                    Blog
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
