'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, Menu } from 'lucide-react'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-gray-800 border-l-2 border-yellow-400 p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xl font-black text-white">DISPATCHING</span>
                <span className="text-xl font-black text-yellow-400">.PRO</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-4">
              <Link 
                href="/" 
                className="block text-white font-semibold py-3 border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/services" 
                className="block text-gray-300 hover:text-yellow-400 font-semibold py-3 border-b border-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                href="/why-choose-us" 
                className="block text-gray-300 hover:text-yellow-400 font-semibold py-3 border-b border-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                WHY US
              </Link>
              <Link 
                href="/how-it-works" 
                className="block text-gray-300 hover:text-yellow-400 font-semibold py-3 border-b border-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                HOW IT WORKS
              </Link>
              <Link 
                href="/blog" 
                className="block text-gray-300 hover:text-yellow-400 font-semibold py-3 border-b border-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                NEWS
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-300 hover:text-yellow-400 font-semibold py-3 border-b border-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
            
            <div className="mt-8">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                <Link href="/contact" onClick={() => setIsOpen(false)}>GET STARTED</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
